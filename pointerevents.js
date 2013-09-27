/*
 * Copyright 2013 The Polymer Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */
(function() {
  var thisFile = 'pointerevents.js';
  var scopeName = 'PointerEventsPolyfill';
  var modules = [
    'src/oldIE.js',
    'src/boot.js',
    'src/touch-action.js',
    'src/PointerEvent.js',
    'src/pointermap.js',
    'src/sidetable.js',
    'src/dispatcher.js',
    'src/installer.js',
    'src/mouse.js',
    'src/touch.js',
    'src/ms.js',
    'src/platform-events.js',
    'src/capture.js'
  ];

  window[scopeName] = {
    entryPointName: thisFile,
    modules: modules
  };

  var script = document.scripts[document.scripts.length - 1];
  var src = script.getAttribute('src');
  var basePath = src.slice(0, src.indexOf(thisFile));

  if (!window.PolymerLoader) {
    var path = basePath + '../tools/loader/loader.js';
    document.write('<script src="' + path + '"></script>');
  }

  // BROKEN: IE executes inline scripts before external scripts, so PolymerLoader is still undefined
  document.write('<script>PolymerLoader.load("' + scopeName + '")</script>');

})();
