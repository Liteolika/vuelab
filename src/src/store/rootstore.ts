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
  plugins: [vuexLocalStore.plugin, createLogger()],
});

// export function awaitStateInit(): Promise<void> {
//   return new Promise<void>((resolve) => {
//     while (store.state === null) {
//       setTimeout(() => {
//         // just wait
//       }, 50);
//     }
//     resolve();
//   });
// }

export default store;
