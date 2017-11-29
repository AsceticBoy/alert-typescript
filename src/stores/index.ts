import * as Mobx from 'mobx';
// ----- stores ----- //
import TreemapStore from './treemap.store';

Mobx.useStrict(true);

type tt = {
  name: string | undefined;
};

export default {
  TreemapStore: new TreemapStore(),
};
