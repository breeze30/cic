import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import _ from 'lodash';
import { InputNumber, DatePicker, Switch } from 'antd';

import InputText from './InputText';
import LongText from './LongText';
import PicturesWall from '../Uploader/PicturesWall';
import LinkEntry from './LinkEntry';

import withMultipleItem from './withMultipleItem';

const MultiInputText = withMultipleItem(InputText);

class InputField extends Component {

  render() {
    const { spaceId, field, value, onChange } = this.props;
    const type = _.get(this.props, 'field.type');
    switch (type) {
      case 'LongText': return (<LongText value={value} onChange={onChange} />);
      case 'Number': return (<InputNumber value={value} onChange={onChange} />);
      case 'Datetime': return (<DatePicker value={moment(value)} onChange={onChange} />);
      case 'Boolean': return (<Switch checked={value} onChange={onChange} />);
      case 'Media': return (<PicturesWall multiple={field.multiple} fileList={value} onChange={onChange} />);
      case 'Link': return (<LinkEntry spaceId={spaceId} field={field} value={value} onChange={onChange} />);
      default:
        if (field.multiple) {
          return (<MultiInputText field={field} value={value} onChange={onChange} />);
        }
        return (<InputText field={field} value={value} onChange={onChange} />);
    }
  }
}

export default InputField;
