// This file is auto generated by build/build-entry.js
import Component from './preview-html.vue';
// font css
import '@/assets/css/font';

const version = '2.3.13-beta.0';

const install = (app) => {
  app.component(Component.name, Component);
};

Component.version = version;
Component.install = install;
Component.use = function (optionsOrInstall, opt) {
  if (typeof optionsOrInstall === 'function') {
    optionsOrInstall(Component, opt);
  } else {
    optionsOrInstall.install(Component, opt);
  }

  return Component;
};

export default Component;
