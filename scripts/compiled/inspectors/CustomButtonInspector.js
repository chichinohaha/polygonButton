"use strict";
Vue.component("custom-button", {
    dependencies: ["packages://inspector/share/gray-material.js"],
    template: `
\n    <ui-prop
\n      v-prop="target.isSoundEffectButton"
\n      :multi-values="multi"
\n    ></ui-prop>
\n    <ui-prop
\n      v-if="target.isSoundEffectButton.value"
        v-prop="target.soundEffect"
\n      :multi-values="multi"
\n    ></ui-prop>
\n    <ui-prop
\n      v-if="target.isSoundEffectButton.value"
        v-prop="target.soundVolume"
\n      :multi-values="multi"
\n    ></ui-prop>
\n    <ui-prop
\n      v-prop="target.isPolygonButton"
\n      :multi-values="multi"
\n    ></ui-prop>

<cc-array-prop v-if="target._isPolygonButton.value" :target.sync="target.polygon"></cc-array-prop>
\n    <div  v-if="target._isPolygonButton.value" class="horizontal layout end-justified" style="padding:5px 0;margin-bottom:5px;">
\n      <ui-button class="blue tiny"
\n        @confirm="resetPolygon" 
\n      >
\n        Reset Polygon
\n      </ui-button>
\n    </div>

\n    <ui-prop
\n      v-prop="target.target"
\n      :multi-values="multi"
\n    ></ui-prop>
\n
\n    <div class="horizontal layout end-justified" style="padding:5px 0;margin-bottom:5px;">
\n      <ui-button class="blue tiny"
\n        @confirm="resetNodeSize"
\n        v-disabled="_checkResizeToTarget(target.target, multi)"
\n      >
\n        Resize to Target
\n      </ui-button>
\n    </div> 
\n    <ui-prop
\n      v-prop="target.interactable"
\n      :multi-values="multi"
\n    >
\n    </ui-prop>
\n    <ui-prop
\n      v-prop="target.enableAutoGrayEffect"
\n      v-show="_autoGrayEffectEnabled()"
\n      :multi-values="multi"  
\n    ></ui-prop>
\n    <cc-gray-section
\n      v-if="_autoGrayEffectEnabled() && target.enableAutoGrayEffect.value"
\n      :target.sync="target" 
\n      :multi-values="multi"
\n    ></cc-gray-section>
\n    <ui-prop
\n      v-prop="target.transition"
\n      :multi-values="multi"
\n    ></ui-prop>
\n
\n    <div v-if="_checkTransition(target.transition, 1, multi)">
\n      <ui-prop indent=1
\n        v-prop="target.normalColor"
\n        :multi-values="multi"
\n      ></ui-prop>
\n      <ui-prop indent=1
\n        v-prop="target.pressedColor"
\n        :multi-values="multi"
\n      ></ui-prop>
\n      <ui-prop indent=1
\n        v-prop="target.hoverColor"
\n        :multi-values="multi"
\n      ></ui-prop>
\n      <ui-prop indent=1
\n        v-prop="target.disabledColor"
\n        :multi-values="multi"
\n      ></ui-prop>
\n      <ui-prop indent=1
\n        v-prop="target.duration"
\n        :multi-values="multi"
\n      ></ui-prop>
\n    </div>
\n
\n    <div v-if="_checkTransition(target.transition, 2, multi)">
\n      <ui-prop indent=1
\n        v-prop="target.normalSprite"
\n        :multi-values="multi"
\n      ></ui-prop>
\n      <ui-prop indent=1
\n        v-prop="target.pressedSprite"
\n        :multi-values="multi"
\n      ></ui-prop>
\n      <ui-prop indent=1
\n        v-prop="target.hoverSprite"
\n        :multi-values="multi"
\n      ></ui-prop>
\n      <ui-prop indent=1
\n        v-prop="target.disabledSprite"
\n        :multi-values="multi"
\n      ></ui-prop>
\n    </div>
\n
\n    <div v-if="_checkTransition(target.transition, 3, multi)">
\n      <ui-prop indent=1
\n        v-prop="target.duration"
\n        :multi-values="multi"
\n      ></ui-prop>
\n      <ui-prop indent=1
\n        v-prop="target.zoomScale"
\n        :multi-values="multi"
\n      ></ui-prop>
\n    </div>
\n
\n    <cc-array-prop :target.sync="target.clickEvents"></cc-array-prop>
\n  `,
    props: {
        target: {
            twoWay: !0,
            type: Object
        },
        multi: {
            type: Boolean
        }
    },
    methods: {
        T: Editor.T,
        resetNodeSize() {
            var t = {
                id: this.target.uuid.value,
                path: "_resizeToTarget",
                type: "Boolean",
                isSubProp: !1,
                value: !0
            };
            Editor.Ipc.sendToPanel("scene", "scene:set-property", t);
        },
        resetPolygon() {
            var t = {
                id: this.target.uuid.value,
                path: "_resetPolygon",
                type: "Boolean",
                isSubProp: !1,
                value: !0
            };
            Editor.Ipc.sendToPanel("scene", "scene:set-property", t);
        },
        _autoGrayEffectEnabled() {
            return 2 !== this.target.transition.value || !this.target.disabledSprite.value.uuid;
        },
        _checkResizeToTarget: (t, n) => !!n || !t.value.uuid,
        _checkTransition: (t, n, e) => e ? t.values.every(t => t === n) : t.value === n
    }
});
