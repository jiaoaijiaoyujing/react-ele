import React from 'react'

import Dropdown from 'react-dropdown';

export default React.createClass({
  _onSelect(){
    console.log('我进行下拉框的选择');
  },
  render() {
    var options = [
        { value: '排序', label: '排序' },
        { value: '距离排序', label: '距离排序' },
        { value: '销量排序', label: '销量排序' }
      ]
    var defaultOption = options[0];
    console.log('-------->render');
    return (
      <Dropdown className="button" options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
    )
  }
})

