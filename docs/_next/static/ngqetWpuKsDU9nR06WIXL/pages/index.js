(window.webpackJsonp=window.webpackJsonp||[]).push([["d0a3"],{"9Jkg":function(e,t,r){e.exports=r("oh+g")},RNiq:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),o=r.n(n),a=r("YFqc"),i=r.n(a);r("sE/c");t.default=function(){return o.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItem:"center",justifyContent:"center",border:"1px solid rgba(0,0,0,0.25)",padding:32,textAlign:"center"}},o.a.createElement(f,{href:"mdx-test"}),o.a.createElement(f,{href:"image-load"}))};var f=function(e){var t=e.href;return o.a.createElement(i.a,{href:"".concat(t)},o.a.createElement("a",{style:{marginBottom:16}},"".concat(t)))}},YFqc:function(e,t,r){e.exports=r("cTJO")},cTJO:function(e,t,r){"use strict";var n=r("KI45"),o=n(r("9Jkg")),a=n(r("/HRN")),i=n(r("WaGi")),f=n(r("ZDA2")),l=n(r("/+P4")),s=n(r("N9n2")),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},c=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var p=r("CxY0"),h=u(r("q1tI")),d=(c(r("17x9")),u(r("nOHt"))),v=r("Bu4q");function m(e){return e&&"object"==typeof e?v.formatWithValidation(e):e}var y=function(e){function t(){var e,r,n,o,i;return(0,a.default)(this,t),(e=(0,f.default)(this,(0,l.default)(t).apply(this,arguments))).formatUrls=(r=function(e,t){return{href:m(e),as:m(t)}},n=null,o=null,i=null,function(e,t){if(e===n&&t===o)return i;var a=r(e,t);return n=e,o=t,i=a,a}),e.linkClicked=function(t){var r=t.currentTarget,n=r.nodeName,o=r.target;if("A"!==n||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var a=e.formatUrls(e.props.href,e.props.as),i=a.href,f=a.as;if(function(e){var t=p.parse(e,!1,!0),r=p.parse(v.getLocationOrigin(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(i)){var l=window.location.pathname;i=p.resolve(l,i),f=f?p.resolve(l,f):i,t.preventDefault();var s=e.props.scroll;null==s&&(s=f.indexOf("#")<0),d.default[e.props.replace?"replace":"push"](i,f,{shallow:e.props.shallow}).then(function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())}).catch(function(t){e.props.onError&&e.props.onError(t)})}}},e}return(0,s.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,o.default)(this.props.href)!==(0,o.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,r=p.resolve(e,t);d.default.prefetch(r)}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),n=r.href,o=r.as;"string"==typeof t&&(t=h.default.createElement("a",null,t));var a=h.Children.only(t),i={onClick:function(t){a.props&&"function"==typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(i.href=o||n),i.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(i.href=d.Router._rewriteUrlForNextExport(i.href)),h.default.cloneElement(a,i)}}]),t}(h.Component);t.default=y},"oh+g":function(e,t,r){var n=r("WEpk"),o=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return o.stringify.apply(o,arguments)}},"sE/c":function(e,t,r){"use strict"},vlRD:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=r("RNiq");return{page:e.default||e}}])}},[["vlRD","5d41","9da1"]]]);