import * as engine from 'store/src/store-engine';
import * as storages from 'store/storages/all';
import * as expirePlugin from 'store/plugins/expire';

// tslint:disable-next-line:no-any
type Any = any;

export interface IStore {
  readonly version: string;
  readonly enabled: boolean;
  get(key: string, optionalDefaultValue?: Any): Any;
  set(key: string, value: Any, ttl?: number): Any;
  remove(key: string): void;
  each(callback: (val: Any, namespacedKey: string) => void): void;
  clearAll(): void;
  hasNamespace(namespace: string): boolean;
  createStore(plugins?: Any[], namespace?: string): IStore;
  addPlugin(plugin: Any): void;
  namespace(namespace: string): IStore;
}

const store: IStore = engine.createStore(storages, [expirePlugin]);

const set = store.set;

store.set = function (key: string, value: Any, ttl?: number) {
  if (ttl) {
    return set.apply(this, [key, value, new Date().getTime() + ttl]);
  } else {
    return set.apply(this, [key, value]);
  }
};

export default store;
