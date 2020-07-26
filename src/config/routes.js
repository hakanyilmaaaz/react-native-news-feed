import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import {Screens} from './containers';
import {SCENE_KEYS} from './index';

const Routers = () => {
  return (
    <Router>
      <Scene key="root " hideNavBar={true}>
        <Scene key="splash" hideNavBar={true}>
          <Scene key={SCENE_KEYS.screens.splash} component={Screens.splash} />
        </Scene>
        <Scene key="main" hideNavBar={true}>
          <Scene key={SCENE_KEYS.screens.home} component={Screens.home} />
          <Scene key={SCENE_KEYS.screens.details} component={Screens.details} />
          <Scene
            key={SCENE_KEYS.screens.favourites}
            component={Screens.favourites}
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export {Routers};
