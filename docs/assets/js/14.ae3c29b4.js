(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{212:function(n,e,t){},253:function(n,e,t){"use strict";var o=t(212);t.n(o).a},290:function(n,e,t){"use strict";t.r(e);var o={name:"grouped-custom",props:["options"],data:function(){return{columns:[{label:"Name",field:"name"},{label:"Diet",field:"diet",type:"text"},{label:"Count",field:"count",type:"number"},{label:"Action",field:"action",type:"number"}],rows:[{name:"Mammal",diet:"",count:"",children:[{name:"Elephant",diet:"herbivore",count:5},{name:"Cat",diet:"carnivore",count:28}]},{name:"Reptiles",diet:"",count:"",action:"",children:[{name:"Snake",diet:"carnivore",count:40},{name:"lizard",diet:"insectivore",count:34}]},{name:"Fish",diet:"",count:"",children:[{name:"Shark",diet:"carnivore",count:2},{name:"koi",diet:"omnivore",count:14}]}]}},computed:{},methods:{showAlert:function(n){alert(JSON.stringify(n))}},mounted:function(){},components:{}},i=(t(253),t(2)),a=Object(i.a)(o,function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("vue-good-table",{attrs:{columns:n.columns,rows:n.rows,"group-options":n.options,"search-options":{enabled:!0}},scopedSlots:n._u([{key:"table-header-row",fn:function(e){return["action"==e.column.field?t("span",[t("button",{staticClass:"fancy-btn",on:{click:function(t){return n.showAlert(e)}}},[n._v("Action")])]):t("span",[n._v("\n        "+n._s(e.formattedRow[e.column.field])+"\n      ")])]}}])})],1)},[],!1,null,null,null);e.default=a.exports}}]);