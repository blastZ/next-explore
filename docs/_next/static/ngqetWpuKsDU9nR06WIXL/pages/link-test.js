(window.webpackJsonp=window.webpackJsonp||[]).push([["ef0b"],{"9Jkg":function(e,t,r){e.exports=r("oh+g")},YFqc:function(e,t,r){e.exports=r("cTJO")},aBUx:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/link-test",function(){var e=r("idlC");return{page:e.default||e}}])},cTJO:function(e,t,r){"use strict";var n=r("KI45"),o=n(r("9Jkg")),i=n(r("/HRN")),a=n(r("WaGi")),f=n(r("ZDA2")),l=n(r("/+P4")),u=n(r("N9n2")),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},p=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=r("CxY0"),h=s(r("q1tI")),d=(p(r("17x9")),s(r("nOHt"))),v=r("Bu4q");function _(e){return e&&"object"==typeof e?v.formatWithValidation(e):e}var w=function(e){function t(){var e,r,n,o,a;return(0,i.default)(this,t),(e=(0,f.default)(this,(0,l.default)(t).apply(this,arguments))).formatUrls=(r=function(e,t){return{href:_(e),as:_(t)}},n=null,o=null,a=null,function(e,t){if(e===n&&t===o)return a;var i=r(e,t);return n=e,o=t,a=i,i}),e.linkClicked=function(t){var r=t.currentTarget,n=r.nodeName,o=r.target;if("A"!==n||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=e.formatUrls(e.props.href,e.props.as),a=i.href,f=i.as;if(function(e){var t=c.parse(e,!1,!0),r=c.parse(v.getLocationOrigin(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(a)){var l=window.location.pathname;a=c.resolve(l,a),f=f?c.resolve(l,f):a,t.preventDefault();var u=e.props.scroll;null==u&&(u=f.indexOf("#")<0),d.default[e.props.replace?"replace":"push"](a,f,{shallow:e.props.shallow}).then(function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())}).catch(function(t){e.props.onError&&e.props.onError(t)})}}},e}return(0,u.default)(t,e),(0,a.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,o.default)(this.props.href)!==(0,o.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,r=c.resolve(e,t);d.default.prefetch(r)}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),n=r.href,o=r.as;"string"==typeof t&&(t=h.default.createElement("a",null,t));var i=h.Children.only(t),a={onClick:function(t){i.props&&"function"==typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(a.href=o||n),a.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(a.href=d.Router._rewriteUrlForNextExport(a.href)),h.default.cloneElement(i,a)}}]),t}(h.Component);t.default=w},idlC:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),o=r.n(n),i=r("YFqc"),a=r.n(i);t.default=function(){return o.a.createElement(a.a,{href:"mdx-test"},o.a.createElement("a",null,"mdx-test"))}},"oh+g":function(e,t,r){var n=r("WEpk"),o=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return o.stringify.apply(o,arguments)}}},[["aBUx","5d41","9da1"]]]);