(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{431:function(t,e,i){"use strict";i.r(e);var n=i(0),o=Object(n.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"monitoring-routing-slip-execution"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#monitoring-routing-slip-execution"}},[t._v("#")]),t._v(" Monitoring routing slip execution")]),t._v(" "),i("p",[t._v("During routing slip execution, events are published when the routing slip completes or faults. Every event message includes the "),i("em",[t._v("TrackingNumber")]),t._v(" as well as a "),i("em",[t._v("Timestamp")]),t._v(" (in UTC, of course) indicating when the event occurred:")]),t._v(" "),i("ul",[i("li",[t._v("RoutingSlipCompleted")]),t._v(" "),i("li",[t._v("RoutingSlipFaulted")]),t._v(" "),i("li",[t._v("RoutingSlipCompensationFailed")])]),t._v(" "),i("p",[t._v("Additional events are published for each activity, including:")]),t._v(" "),i("ul",[i("li",[t._v("RoutingSlipActivityCompleted")]),t._v(" "),i("li",[t._v("RoutingSlipActivityFaulted")]),t._v(" "),i("li",[t._v("RoutingSlipActivityCompensated")]),t._v(" "),i("li",[t._v("RoutingSlipActivityCompensationFailed")])]),t._v(" "),i("p",[t._v("By observing these events, an application can monitor and track the state of a routing slip. To maintain the current state, an Automatonymous state machine could be created. To maintain history, events could be stored in a database and then queried using the "),i("em",[t._v("TrackingNumber")]),t._v(" of the routing slip.")])])}),[],!1,null,null,null);e.default=o.exports}}]);