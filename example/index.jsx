import React, { Component, Children, PropTypes, cloneElement } from 'react'
import ReactDOM from 'react-dom'
import { spring } from 'react-motion'
import {
  Select,
  Trigger,
  Menu,
  Option,
  utils,
} from '../src/selectly.js'

import '../src/selectly.scss'


const {
  buildOptionsLookup,
  getCurrentOptions,
  getToggledValues,
  getAllValues,
  isOptionSelected,
  withOptGroupProps,
} = utils


const OptGroup = withOptGroupProps(
  ({ title, children, isAllSelected, selectAll, deselectAll }) =>
    <div>
      <header onClick={isAllSelected ? deselectAll : selectAll}>
        {title}
      </header>
      {children}
    </div>
)

class CustomTrigger extends Component {
  _renderLabel(label) {
    return (
      <span key={label} className="react-select-trigger__option">
        {label}
      </span>
    )
  }

  render() {
    const {
      currentValue,
      emptyValue,
      isDisabled,
      ...restProps
    } = this.props
    const isActive = false
    return (
      <Trigger
        className={
          'react-select-trigger' +
          (isActive ? ' react-select-trigger--active' : '') +
          (isDisabled ? ' react-select-trigger--disabled' : '')
        }
        {...restProps}
      >
        {currentValue.length > 0
          ? currentValue.map(({ label }) => this._renderLabel(label))
          : emptyValue}
      </Trigger>
    )
  }
}

class MySelect extends Component {
  static propTypes = {
    emptyValue: PropTypes.any,
    value: PropTypes.any,
    options: PropTypes.array,
    checkbox: PropTypes.bool,
    selectAll: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
    deselectAll: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  }

  static defaultProps = {
    emptyValue: '',
    checkbox: false,
  }

  open() {
    this._select.open()
  }

  close() {
    this._select.close()
  }

  _renderOption({ value, label }) {
    const hasCheckbox = this.props.checkbox
    const isSelected = isOptionSelected(this.props.value, value)
    return (
      <Option key={label} value={value}>
        {({ props, isHighlighted }) =>
          <div
            {...props}
            className={
              'react-select-option' +
              (hasCheckbox ? ' has-checkbox' : '') +
              (isSelected ? ' is-selected' : '')
            }
          >
            {hasCheckbox &&
              <input
                type="checkbox"
                className="react-select-option__checkbox"
                checked={isSelected}
                readOnly
              />}
            {label}
          </div>}
      </Option>
    )
  }

  _renderOptGroup({ label, optgroup }) {
    return (
      <li key={label} className="react-select-optgroup">
        <strong title={label} className="react-select-optgroup__title">
          {label}
        </strong>
        {this._renderOptions(optgroup)}
      </li>
    )
  }

  _renderOptions(options) {
    return (
      <ul className="react-select-options">
        {options.map(
          (option, index) =>
            option.optgroup
              ? this._renderOptGroup(option)
              : this._renderOption(option)
        )}
      </ul>
    )
  }

  render() {
    const {
      value,
      emptyValue,
      options,
      onChange
    } = this.props
    const currentOptions = getCurrentOptions(options, value)
    return (
      <Select
        ref={c => (this._select = c)}
        value={value}
        onChange={onChange}
      >
        <CustomTrigger
          emptyValue={emptyValue}
          currentValue={currentOptions}
        />
        <Menu className="react-select">
          <div style={{width:'20%'}} className="react-select-menu">
            {this._renderOptions(options)}
          </div>
        </Menu>
      </Select>
    )
  }
}

class Demo2 extends Component {
  state = {
    value: ['Avalaible', 'Avalaible'],
      options: [
        { value: 'Avalaible', label: 'Avalaible' },
        { value: 'Offline', label: 'Offline' },
        { value: 'Onbreak', label: 'On Break' },
      ],
  }

  _handleChange = ({ value }) => {
    this.setState({ value })
    console.log(value);
  }

  _handleSelectAll = () => {
    this.setState({
      value: getAllValues(this.state.options),
    })
  }

  _handleDeselectAll = () => {
    this.setState({
      value: [],
    })
  }

  render() {
    const { value, options } = this.state
    return (
      <div>
        <MySelect
          emptyValue="Select A Value"
          value={value}
          options={options}
          checkbox
          selectAll={this._handleSelectAll}
          deselectAll={this._handleDeselectAll}
          onChange={this._handleChange}
        />
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <div style={{ margin: '0 0 24px',width:'15%'}}>
          <Demo2 />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
