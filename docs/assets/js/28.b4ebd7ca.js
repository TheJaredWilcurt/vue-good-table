(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{215:function(e,t,o){},232:function(e,t,o){"use strict";var n=o(215);o.n(n).a},263:function(e,t,o){"use strict";o.r(t);var n={name:"checkbox-table",props:["showSlot"],data:function(){return{columns:[{label:"Name",field:"name"},{label:"Age",field:"age",type:"number"},{label:"Created On",field:"createdAt",type:"date",dateInputFormat:"YYYY-MM-DD",dateOutputFormat:"MMM Do YY"},{label:"Percent",field:"score",type:"percentage"}],rows:[{id:1,name:"John",age:20,createdAt:"201-10-31:9: 35 am",score:.03343},{id:2,name:"Jane",age:24,createdAt:"2011-10-31",score:.03343},{id:3,name:"Susan",age:16,createdAt:"2011-10-30",score:.03343}]}},computed:{},methods:{selectAll:function(e){console.log(e)},toggleSelectRow:function(e){console.log(e)}},mounted:function(){},components:{}},s=(o(232),o(0)),a=Object(s.a)(n,function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("vue-good-table",{attrs:{columns:this.columns,rows:this.rows,"select-options":{enabled:!0},"search-options":{enabled:!0}},on:{"on-selected-rows-change":this.toggleSelectRow}},[this.showSlot?t("div",{attrs:{slot:"selected-row-actions"},slot:"selected-row-actions"},[t("button",[this._v("Action 1")])]):this._e()])],1)},[],!1,null,null,null);t.default=a.exports}}]);