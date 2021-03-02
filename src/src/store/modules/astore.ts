import {
  VuexModule,
  Module,
  MutationAction,
  Mutation,
  Action,
  getModule,
} from "vuex-module-decorators";
import { rootstore } from "@/store";
import { api } from "@/services/api";

@Module({
  name: "message",
  store: rootstore,
  dynamic: true,
})
class MessageModule extends VuexModule {
  _messages: string[] = [];

  get messages(): string[] {
    return this._messages;
  }

  @Mutation
  private setMessages(messages: string[]): void {
    this._messages = messages;
  }

  @Action
  async fetchMessages() {
    const messages = await api.getMessages();
    this.context.commit("setMessages", messages);
  }

  @Action
  async init() {
    this.context.dispatch("fetchMessages");
  }

}

export default getModule(MessageModule);
