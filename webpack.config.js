/*
 * @Descripttion:
 * @Author: linkenzone
 * @Date: 2021-03-03 11:37:51
 */
var vtkRules = require('vtk.js/Utilities/config/dependency.js').webpack.core.rules;

module.exports = {
  module: {
    rules: [{ test: /\.html$/, loader: 'html-loader' }].concat(vtkRules),
  },
};
