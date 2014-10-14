/*!
* Qoopido.js library v3.5.2, 2014-8-12
* https://github.com/dlueth/qoopido.js
* (c) 2014 Dirk Lueth
* Dual licensed under MIT and GPL
*/
!function(t){window.qoopido.register("jquery/extension/selector",t,["jquery"])}(function(t,e,r,n,o,i,f){"use strict";var u=t.jquery||o.jQuery,s=u(o),h=u(i);return u.extend(u.expr[":"],{loaded:function(t){return u(t).data("loaded")},scrollable:function(t){return"auto"===u(t).css("overflow")},width:function(t,e,r){return r[3]&&/^(<|>)\d+$/.test(r[3])?">"===r[3].substr(0,1)?u(t).width()>r[3].substr(1):u(t).width()<r[3].substr(1):!1},height:function(t,e,r){return r[3]&&/^(<|>)\d+$/.test(r[3])?">"===r[3].substr(0,1)?u(t).height()>r[3].substr(1):u(t).height()<r[3].substr(1):!1},leftOf:function(t,e,r){return r[3]?(t=u(t),r=u(r[3]),t.offset().left+t.width()<r.offset().left):!1},rightOf:function(t,e,r){return r[3]?(t=u(t),r=u(r[3]),t.offset().left>r.offset().left+r.width()):!1},external:function(t){return t.href?t.hostname&&t.hostname!==o.location.hostname:!1},inView:function(t){t=u(t);var e=s,r=h,n=t.offset(),o={top:r.scrollTop(),height:r.scrollLeft()};return!(n.top>e.height()+o.top||n.top+t.height()<o.top||n.left>e.width()+o.left||n.left+t.width()<o.left)},largerThan:function(t,e,r){return r[3]?(t=u(t),r=u(r[3]),t.width()*t.height()>r.width()*r.height()):!1},isBold:function(t){return"700"===u(t).css("fontWeight")},color:function(t,e,r){return r[3]?u(t).css("color")===r[3]:!1},hasId:function(t){return t=u(t),t.attr("id")!==f&&""!==t.attr("id")}}),u});