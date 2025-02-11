"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const index=require("./index-4fce5d38.js"),CloseIcon=()=>index.h("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},index.h("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),index.h("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),NextIcon=()=>index.h("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},index.h("polyline",{points:"9 18 15 12 9 6"})),PrevIcon=()=>index.h("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},index.h("polyline",{points:"15 18 9 12 15 6"})),SearchIcon=()=>index.h("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"search-bar-icon"},index.h("circle",{cx:"11",cy:"11",r:"8"}),index.h("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})),prestoSearchBarUiCss=':host{display:block}.search-bar{position:relative;font-family:var(--plyr-font-family, "San Francisco", -apple-system, BlinkMacSystemFont, ".SFNSText-Regular", Avenir, "Avenir Next", "Helvetica Neue", "Segoe UI", Helvetica, Arial, sans-serif);font-size:16px;color:#ddd;z-index:1;display:flex;align-items:center;gap:10px}.search-bar>*{height:41px}.search-bar__controls{display:flex;align-items:stretch;position:absolute;right:0}.search-bar__controls svg{display:block;width:25px;height:25px}.search-bar__placeholder{height:0;font-weight:bold;visibility:hidden;position:absolute;transition:none;white-space:nowrap}.search-bar input{z-index:1;box-sizing:border-box;background:transparent;border:none;color:#fff;font-size:16px;transition:width 0.25s ease;outline:none;padding:0}.search-bar input::placeholder{color:#fff}.search-bar__control-prev,.search-bar__control-next,.search-bar__control-clear{opacity:0;visibility:hidden;transition:0.3s cubic-bezier(0.165, 0.84, 0.44, 1);transform-origin:center center;padding:0;border:0;background:0;cursor:pointer;display:flex;flex-direction:column;justify-content:center;z-index:1}.search-bar__control-clear{transform:scale(0.5)}.search-bar--is-active input{width:300px !important;padding-right:26px}.search-bar--is-active.search-bar--has-navigation .search-bar__control-prev,.search-bar--is-active.search-bar--has-navigation .search-bar__control-next{opacity:1;visibility:visible}.search-bar--is-active.search-bar--has-navigation input{padding-right:80px}.search-bar--is-active .search-bar__control-clear{transform:scale(1);opacity:1;visibility:visible;cursor:pointer}.search-bar__icon{width:20px;height:20px;flex-grow:0;flex-shrink:0;cursor:pointer}.search-bar__icon svg{width:20px;height:20px}',PrestoSearchBarUiStyle0=prestoSearchBarUiCss,PrestoSearchBarUi=class{constructor(e){index.registerInstance(this,e),this.previousNav=index.createEvent(this,"previousNav",7),this.nextNav=index.createEvent(this,"nextNav",7),this.search=index.createEvent(this,"search",7),this.focusChange=index.createEvent(this,"focusChange",7),this.value=void 0,this.placeholder=void 0,this.hasNavigation=void 0,this.focused=void 0,this.placeholderWidth=void 0}handleSearch(e){e.preventDefault(),this.value=e.target.value}handleFocus(){this.focused=!0}handleBlur(){this.value||(this.focused=!1)}componentDidLoad(){this.handlePlaceholderSize()}handlePlaceholderSize(){setTimeout((()=>{this.placeholderWidth=this.placeholderElement.offsetWidth}),50)}handleValueChange(){this.search.emit(this.value)}watchPropHandler(e){this.focusChange.emit(e)}handleClick(){this.focused=!0,setTimeout((()=>{this.input.focus()}),50)}handleClear(e){return e.preventDefault(),e.stopImmediatePropagation(),this.value="",this.focused=!1,!1}handleNext(e){e.stopImmediatePropagation(),e.preventDefault(),this.nextNav.emit()}handlePrevious(e){e.stopImmediatePropagation(),e.preventDefault(),this.previousNav.emit()}render(){return index.h("div",{key:"d7b960d71649846a8f0e27257ee80e0b6800d94e",class:{"search-bar":!0,"search-bar--is-active":this.focused||!!this.value,"search-bar--has-navigation":this.hasNavigation},onClick:()=>this.handleClick()},index.h("span",{key:"b1944c3644e89bc074bdafaa560cfac3dd4a8281",class:"search-bar__search-icon search-bar__icon"},index.h(SearchIcon,{key:"8028bc5c605cfd0eae9cbfe811ffcada85768ab6"})),index.h("div",{key:"e7524109687bfa22fd10cdecd6a71ed8432d7671",class:"search-bar__placeholder",ref:e=>this.placeholderElement=e,"aria-hidden":!0},this.placeholder),index.h("input",{key:"1b0da4f3908d2129c7b28214b0fcc5422c4db607",type:"text",value:this.value,placeholder:this.placeholder,ref:e=>this.input=e,style:{width:(this.placeholderWidth||0)+"px"},onInput:e=>this.handleSearch(e),onFocus:()=>this.handleFocus(),onBlur:()=>this.handleBlur()}),index.h("span",{key:"89db2bd52d7672558f3f8b30c0e6c52d834eb4d9",class:"search-bar__controls"},index.h("span",{key:"c4187fee0a2268d95dfbaa27507cb76236b28c97",class:"search-bar__control-prev",onClick:e=>this.handlePrevious(e)},index.h(PrevIcon,{key:"5ba6a4a8a221e43842ced26e9c2f0b61075a1aac"})),index.h("span",{key:"76aa40f03ee80a7a486b88d7e3a55ecb3cbb62cb",class:"search-bar__control-next",onClick:e=>this.handleNext(e)},index.h(NextIcon,{key:"b8bc259fdcc0e3c06c0b0dafad7512d2897c9b22"})),index.h("div",{key:"e64666fb5be8412a8dead167c5b0c28fa02c8b1f",class:"search-bar__control-clear",onClick:e=>this.handleClear(e)},index.h(CloseIcon,{key:"e871f7e8b626e28500368cf46faf05ee4a4aed93"}))))}static get watchers(){return{placeholder:["handlePlaceholderSize"],value:["handleValueChange"],focused:["watchPropHandler"]}}};PrestoSearchBarUi.style=PrestoSearchBarUiStyle0,exports.presto_search_bar_ui=PrestoSearchBarUi;