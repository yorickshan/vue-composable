(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{441:function(e,t,a){"use strict";a.r(t);var n=a(314),r=a(102),o={name:"local-storage-example",setup:function(){var e="__vue_localStorage_example",t=Object(r.k)(!1),a=Object(n.x)(e,1),o=a.supported,s=a.storage,c=a.setSync,l=a.remove;return Object(r.m)(t,c),{key:e,supported:o,tabSync:t,storage:s,remove:l}}},s=a(27),c=Object(s.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._v("\n  localStorage: "+e._s(e.storage)+"\n  "),a("p",[e._v("\n    supported:\n    "),a("b",{class:{green:e.supported,red:!e.supported}},[e._v(e._s(e.supported))])]),e._v(" "),a("p",[a("b",[e._v("Check the value in the dev tools: `"+e._s(e.key)+"`")])]),e._v(" "),a("label",{attrs:{for:"storage"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.storage,expression:"storage"}],attrs:{name:"storage"},domProps:{value:e.storage},on:{input:function(t){t.target.composing||(e.storage=t.target.value)}}})]),e._v(" "),a("div",[a("p",[e._v("Enable tab sync? "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.tabSync,expression:"tabSync"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.tabSync)?e._i(e.tabSync,null)>-1:e.tabSync},on:{change:function(t){var a=e.tabSync,n=t.target,r=!!n.checked;if(Array.isArray(a)){var o=e._i(a,null);n.checked?o<0&&(e.tabSync=a.concat([null])):o>-1&&(e.tabSync=a.slice(0,o).concat(a.slice(o+1)))}else e.tabSync=r}}})]),e._v(" "),e.tabSync?a("p",[e._v("\n      Now this tab is listening for changes, please change the storage value\n      in other tab\n    ")]):e._e()]),e._v(" "),a("div",[a("button",{on:{click:e.remove}},[e._v("Remove")])])])}),[],!1,null,null,null);t.default=c.exports}}]);