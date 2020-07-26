import {Actions} from 'react-native-router-flux';
import {SCENE_KEYS} from '../config';

export const navigationReplace = (sceneKey, params) => {
  Actions.replace(sceneKey, params);
};

export const navigationReset = (sceneKey, params) => {
  Actions.reset(sceneKey, params);
};

export const navigationPush = (sceneKey, params) => {
  Actions.push(sceneKey, params);
};

export const navigationPop = (isWantedRefresh, params) => {
  if (isWantedRefresh === undefined) isWantedRefresh = false;
  if (isWantedRefresh) {
    switch (params.popScreen) {
      case SCENE_KEYS.mainScreens.friendsList:
        Actions.pop();
        setTimeout(() => {
          Actions.refresh({
            friendsList: params.friendIds,
            refreshFlatList: false,
          });
        }, 50);
        break;
      case SCENE_KEYS.mainScreens.profileSearch:
        Actions.pop();
        setTimeout(() => {
          Actions.refresh({searchedKeyword: params.searchedKeyword});
        }, 50);
        break;
      case SCENE_KEYS.mainScreens.profile:
        Actions.pop();
        setTimeout(() => {
          Actions.refresh({random: Math.random()});
        }, 50);
        break;
    }
  } else Actions.pop();
};

export const navigationRefresh = () => {
  Actions.refresh();
};

export const getCurrentScreen = () => {
  return Actions.currentScene;
};

export {SCENE_KEYS};
