import { Vue } from ".";
import "./umd";

export default Vue;

export {
  CreateElement,
  VueConstructor
} from ".";

export {
  Component,
  AsyncComponent,
  ComponentOptions,
  FunctionalComponentOptions,
  RenderContext,
  PropType,
  PropOptions,
  ComputedOptions,
  WatchHandler,
  WatchOptions,
  WatchOptionsWithHandler,
  DirectiveFunction,
  DirectiveOptions
} from "./options";

export {
  PluginFunction,
  PluginObject
} from "./plugin";

export {
  VNodeChildren,
  VNodeChildrenArrayContents,
  VNode,
  VNodeComponentOptions,
  VNodeData,
  VNodeDirective
} from "./vnode";
