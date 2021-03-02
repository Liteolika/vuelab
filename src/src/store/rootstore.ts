import { createStore, Store, createLogger } from "vuex";
import { VuexPersistence } from "vuex-persist";

export const storagekey = "app";

const vuexLocalStore: VuexPersistence<any> = new VuexPersistence({
  storage: localStorage,
  key: storagekey,
  reducer: (state: any) => ({
    profile: state.profile,
    adbooking: state.adbooking,
    content: state.content,
  }),
});

const store: Store<any> = createStore({
  plugins: [
    vuexLocalStore.plugin,
    //createLogger()
  ],
});

export default store;
