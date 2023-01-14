"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {};
  }
};
if (!Array) {
  const _easycom_my_search2 = common_vendor.resolveComponent("my-search");
  _easycom_my_search2();
}
const _easycom_my_search = () => "../../components/my-search/my-search.js";
if (!Math) {
  _easycom_my_search();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4aaa739e"], ["__file", "D:/project/uni-app/\u6700\u65B0\u7248uni-app\u4ECE\u5165\u95E8\u5230\u8FDB\u9636\u7CFB\u7EDF\u5B8C\u6210\u9879\u76EE\u5B9E\u6218/\u6848\u4F8B/imooc-blog/pages/hot/hot.vue"]]);
wx.createPage(MiniProgramPage);
