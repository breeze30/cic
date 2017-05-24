'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var assetSchema = new Schema({
  _spaceId: Schema.Types.ObjectId,
  fields: {
    title: String,
    description: String,
    file: {
      publicId: String,
      fileName: String,
      contentType: String,
      url: String,
      details: Object
    }
  },
  status: {
    type: String,
    default: 'draft',
    enum: ['draft', 'published']
  },
  createdAt: { type: 'Date', default: Date.now, required: true },
  updatedAt: { type: 'Date', default: Date.now, required: true },
  publishedAt: 'Date',
  publishedBy: String,
  publishedVersion: Number
});

var Asset = mongoose.model('Asset', assetSchema);

/*
fields: {
  title: String,
  description: String,
  file: {
    fileName: String,
    contentType: String,
    url: String,
    details: Object,
  }
},*/

module.exports = Asset;
//# sourceMappingURL=Asset.js.map