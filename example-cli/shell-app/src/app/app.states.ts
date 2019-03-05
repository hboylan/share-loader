import {loadScript} from './sLoader';
import {App1Component} from './app1.component';

export const app1State = {
  path: 'app1',
  component: App1Component
};

export const app2State = {
  path: 'ext',

  /** Replace <%path-to-server-host%> with a server the will host the external application js**/
  loadChildren: () => {
    return loadScript('http://localhost:63342/share-loader/example-cli/ext-app1/dist/main.js', 'extapp', 'AppModule');
  }
};

export const APP_STATES = [
  app1State,
  app2State
];