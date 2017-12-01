import * as Mobx from 'mobx';
// ----- stores ----- //
import TreemapStore from './treemap.store';

Mobx.useStrict(true);

export default {
  TreemapStore: new TreemapStore(),
};
