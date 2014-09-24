/* globals define */
define(function(require, exports, module) {
  'use strict';
  // 导入所需的library
  var Engine = require('famous/core/Engine');
  var Surface = require('famous/core/Surface');

  // 创建 main context
  var mainContext = Engine.createContext();

  var firstSurface = new Surface({
    content: '用famo.us创建极速的移动应用'
  });

  mainContext.add(firstSurface);
});
