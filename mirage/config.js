/* global requirejs */

import { createServer, discoverEmberDataModels } from 'ember-cli-mirage';


export function makeServer(config) {
  let finalConfig = {
    ...config,
    models: { ...discoverEmberDataModels({ moduleMap: requirejs.entries }), ...config.models },
    routes
  };

  return createServer(finalConfig)
}


function routes() {

}
