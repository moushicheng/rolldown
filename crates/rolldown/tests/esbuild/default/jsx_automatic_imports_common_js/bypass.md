# Reason
1. different naming style for `oxc_transformer`
# Diff
## /out.js
### esbuild
```js
// custom-react.js
var require_custom_react = __commonJS({
  "custom-react.js"(exports, module) {
    module.exports = {};
  }
});

// entry.jsx
var import_custom_react = __toESM(require_custom_react());
import { Fragment as Fragment2, jsx as jsx2 } from "react/jsx-runtime";
console.log(/* @__PURE__ */ jsx2("div", { jsx: import_custom_react.jsx }), /* @__PURE__ */ jsx2(Fragment2, { children: /* @__PURE__ */ jsx2(import_custom_react.Fragment, {}) }));
```
### rolldown
```js
import { Fragment, jsx } from "react/jsx-runtime";


//#region custom-react.js
var require_custom_react = __commonJS({ "custom-react.js"(exports, module) {
	module.exports = {};
} });

//#endregion
//#region entry.jsx
var import_custom_react = __toESM(require_custom_react());
console.log(/* @__PURE__ */ jsx("div", { jsx: import_custom_react.jsx }), /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(import_custom_react.Fragment, {}) }));

//#endregion
```
### diff
```diff
===================================================================
--- esbuild	/out.js
+++ rolldown	entry.js
@@ -1,12 +1,12 @@
+import {Fragment, jsx} from "react/jsx-runtime";
 var require_custom_react = __commonJS({
     "custom-react.js"(exports, module) {
         module.exports = {};
     }
 });
 var import_custom_react = __toESM(require_custom_react());
-import {Fragment as Fragment2, jsx as jsx2} from "react/jsx-runtime";
-console.log(jsx2("div", {
+console.log(jsx("div", {
     jsx: import_custom_react.jsx
-}), jsx2(Fragment2, {
-    children: jsx2(import_custom_react.Fragment, {})
+}), jsx(Fragment, {
+    children: jsx(import_custom_react.Fragment, {})
 }));

```