if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  "use strict";
  const _imports_0$1 = "/static/images/search.png";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$4 = {
    name: "my-search",
    props: {
      placeholderText: {
        type: String,
        default: "\u641C\u7D22"
      }
    },
    data() {
      return {};
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "my-search-container" }, [
      vue.createCommentVNode(" \u641C\u7D22\u6309\u94AE "),
      vue.createElementVNode("view", { class: "my-search-box" }, [
        vue.createCommentVNode(" \u641C\u7D22\u56FE\u6807 "),
        vue.createElementVNode("image", {
          class: "icon",
          src: _imports_0$1
        }),
        vue.createCommentVNode(" placeholder "),
        vue.createElementVNode("text", { class: "placeholder" }, vue.toDisplayString($props.placeholderText), 1)
      ])
    ]);
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__scopeId", "data-v-cd45b42a"], ["__file", "D:/project/uni-app/\u6700\u65B0\u7248uni-app\u4ECE\u5165\u95E8\u5230\u8FDB\u9636\u7CFB\u7EDF\u5B8C\u6210\u9879\u76EE\u5B9E\u6218/\u6848\u4F8B/uniapp-front/components/my-search/my-search.vue"]]);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  const _imports_0 = "/static/images/logo-my.png";
  const _sfc_main$3 = {
    data() {
      return {};
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_my_search = resolveEasycom(vue.resolveDynamicComponent("my-search"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", { class: "hot-container" }, [
      vue.createCommentVNode(" @\u7B26\u53F7\u76F8\u5F53\u4E8E \u5F53\u524D\u9879\u76EE\u7684\u6839\u76EE\u5F55 "),
      vue.createElementVNode("image", {
        class: "logo",
        mode: "aspectFit",
        src: _imports_0
      }),
      vue.createCommentVNode(" \u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u7EC4\u4EF6\uFF0C\u65E0\u9700\u6CE8\u518C "),
      vue.createElementVNode("view", { class: "search-box" }, [
        vue.createVNode(_component_my_search, { placeholderText: "uni app\u81EA\u5B9A\u4E49\u7EC4\u4EF6" })
      ])
    ]);
  }
  const PagesHotHot = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__scopeId", "data-v-4aaa739e"], ["__file", "D:/project/uni-app/\u6700\u65B0\u7248uni-app\u4ECE\u5165\u95E8\u5230\u8FDB\u9636\u7CFB\u7EDF\u5B8C\u6210\u9879\u76EE\u5B9E\u6218/\u6848\u4F8B/uniapp-front/pages/hot/hot.vue"]]);
  const _sfc_main$2 = {
    data() {
      return {};
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesHotVideoHotVideo = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "D:/project/uni-app/\u6700\u65B0\u7248uni-app\u4ECE\u5165\u95E8\u5230\u8FDB\u9636\u7CFB\u7EDF\u5B8C\u6210\u9879\u76EE\u5B9E\u6218/\u6848\u4F8B/uniapp-front/pages/hot-video/hot-video.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {};
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesMyMy = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "D:/project/uni-app/\u6700\u65B0\u7248uni-app\u4ECE\u5165\u95E8\u5230\u8FDB\u9636\u7CFB\u7EDF\u5B8C\u6210\u9879\u76EE\u5B9E\u6218/\u6848\u4F8B/uniapp-front/pages/my/my.vue"]]);
  __definePage("pages/hot/hot", PagesHotHot);
  __definePage("pages/hot-video/hot-video", PagesHotVideoHotVideo);
  __definePage("pages/my/my", PagesMyMy);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("warn", "at App.vue:4", "\u5F53\u524D\u7EC4\u4EF6\u4EC5\u652F\u6301 uni_modules \u76EE\u5F55\u7ED3\u6784 \uFF0C\u8BF7\u5347\u7EA7 HBuilderX \u5230 3.1.0 \u7248\u672C\u4EE5\u4E0A\uFF01");
      formatAppLog("log", "at App.vue:5", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:8", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:11", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:/project/uni-app/\u6700\u65B0\u7248uni-app\u4ECE\u5165\u95E8\u5230\u8FDB\u9636\u7CFB\u7EDF\u5B8C\u6210\u9879\u76EE\u5B9E\u6218/\u6848\u4F8B/uniapp-front/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue, uni.VueShared);
