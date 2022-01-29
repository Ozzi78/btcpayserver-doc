(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{723:function(s,a,t){"use strict";t.r(a);var e=t(35),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"greenfield-api-example-with-curl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#greenfield-api-example-with-curl"}},[s._v("#")]),s._v(" GreenField API example with cURL")]),s._v(" "),t("p",[s._v("The "),t("strong",[t("a",{attrs:{href:"https://docs.btcpayserver.org/API/Greenfield/v1/",target:"_blank",rel:"noopener noreferrer"}},[s._v("GreenField API"),t("OutboundLink")],1)]),s._v(" (also available on your instance on "),t("code",[s._v("/docs")]),s._v(") allows you to operate BTCPay Server via an easy to use REST API.")]),s._v(" "),t("p",[s._v("Note that you can partially generate clients in the language of your choice by using the "),t("a",{attrs:{href:"https://docs.btcpayserver.org/API/Greenfield/v1/swagger.json",target:"_blank",rel:"noopener noreferrer"}},[s._v("Swagger file"),t("OutboundLink")],1),s._v(".")]),s._v(" "),t("p",[s._v("In this page, we will show you how to use it via command line on linux using "),t("code",[s._v("curl")]),s._v(" and "),t("code",[s._v("jq")]),s._v(".")]),s._v(" "),t("h2",{attrs:{id:"create-a-new-user"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-a-new-user"}},[s._v("#")]),s._v(" Create a new user")]),s._v(" "),t("p",[s._v("Creating a new user can be done by using "),t("a",{attrs:{href:"https://docs.btcpayserver.org/API/Greenfield/v1/#tag/Users/paths/~1api~1v1~1users/post",target:"_blank",rel:"noopener noreferrer"}},[s._v("this endpoint"),t("OutboundLink")],1),s._v(".")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("BTCPAY_INSTANCE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://mainnet.demo.btcpayserver.org"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MyTestUser@gmail.com"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PASSWORD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"NOTVERYSECURE"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("body")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{}"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" jq --arg "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$USER")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'. + {email:$a}'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" jq --arg "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PASSWORD")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'. + {password:$a}'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -s "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     -H "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Content-Type: application/json"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     -X POST "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     -d "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$body")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$BTCPAY_INSTANCE")]),s._v('/api/v1/users"')]),s._v("\n")])])]),t("h2",{attrs:{id:"create-a-new-api-key"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-a-new-api-key"}},[s._v("#")]),s._v(" Create a new API key")]),s._v(" "),t("p",[s._v("While we can use basic authentication to access the greenfield API, it is recommended to use API Keys to limit the scope of the credentials.")]),s._v(" "),t("p",[s._v("For example: If we want to "),t("a",{attrs:{href:"https://docs.btcpayserver.org/API/Greenfield/v1/#tag/Stores/paths/~1api~1v1~1stores/post",target:"_blank",rel:"noopener noreferrer"}},[s._v("create a new store"),t("OutboundLink")],1),s._v(" we need the "),t("code",[s._v("btcpay.store.canmodifystoresettings")]),s._v(" permission for the API key.")]),s._v(" "),t("p",[s._v("You can do it through BTCPay Server UI (by browsing "),t("code",[s._v("/account/apikeys")]),s._v(" of your instance), but let's do it via command line using "),t("a",{attrs:{href:"https://docs.btcpayserver.org/API/Greenfield/v1/#tag/API-Keys/paths/~1api~1v1~1api-keys/post",target:"_blank",rel:"noopener noreferrer"}},[s._v("this endpoint"),t("OutboundLink")],1),s._v(".")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("permission")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"btcpay.store.canmodifystoresettings"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("body")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{}"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" jq --arg "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$permission")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'. + {permissions:[$a]}'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("apikey")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -s "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     -H "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Content-Type: application/json"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     --user "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$USER")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PASSWORD")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     -X POST "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     -d "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$body")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$BTCPAY_INSTANCE")]),s._v('/api/v1/api-keys"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" jq -r .apiKey"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n")])])]),t("h2",{attrs:{id:"create-a-new-store"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-a-new-store"}},[s._v("#")]),s._v(" Create a new store")]),s._v(" "),t("p",[s._v("Now, with we can use the api key to "),t("a",{attrs:{href:"https://docs.btcpayserver.org/API/Greenfield/v1/#tag/Stores/paths/~1api~1v1~1stores/post",target:"_blank",rel:"noopener noreferrer"}},[s._v("create a new store"),t("OutboundLink")],1),s._v(".")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("store_name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"My awesome store"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("body")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{}"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" jq --arg "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$store_name")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'. + {name:$a}'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("store_id")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -s "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     -H "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Content-Type: application/json"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     -H "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Authorization: token '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$apikey")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     -X POST "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     -d "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$body")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$BTCPAY_INSTANCE")]),s._v('/api/v1/stores"')]),s._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" jq -r .id"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n")])])]),t("h2",{attrs:{id:"create-a-new-api-get-limiting-permission-only-to-read-only-on-the-new-store"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-a-new-api-get-limiting-permission-only-to-read-only-on-the-new-store"}},[s._v("#")]),s._v(" Create a new API get limiting permission only to read only on the new store")]),s._v(" "),t("p",[s._v("We can make a new specific permission for our new store:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("old_apikey")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$apikey")]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("permission")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"btcpay.store.canviewstoresettings:'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$store_id")]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("body")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{}"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" jq --arg "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$permission")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'. + {permissions:[$a]}'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("apikey")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -s "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     -H "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Content-Type: application/json"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     --user "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$USER")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PASSWORD")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     -X POST "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     -d "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$body")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$BTCPAY_INSTANCE")]),s._v('/api/v1/api-keys"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" jq -r .apiKey"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n")])])]),t("p",[s._v("We can "),t("a",{attrs:{href:"https://docs.btcpayserver.org/API/Greenfield/v1/#tag/API-Keys/paths/~1api~1v1~1api-keys~1current/delete",target:"_blank",rel:"noopener noreferrer"}},[s._v("revoke our old apikey"),t("OutboundLink")],1),s._v(".")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -s "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     -H "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Content-Type: application/json"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     -H "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Authorization: token '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$old_apikey")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     -X DELETE "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$BTCPAY_INSTANCE")]),s._v('/api/v1/api-keys/current"')]),s._v("\n")])])]),t("h2",{attrs:{id:"read-store-information"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#read-store-information"}},[s._v("#")]),s._v(" Read store information")]),s._v(" "),t("p",[s._v("We can then use the new apikey to "),t("a",{attrs:{href:"https://docs.btcpayserver.org/API/Greenfield/v1/#operation/Stores_GetStore",target:"_blank",rel:"noopener noreferrer"}},[s._v("read store"),t("OutboundLink")],1),s._v(" information:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -s "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     -H "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Content-Type: application/json"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     -H "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Authorization: token '),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$apikey")]),s._v('"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     -X GET "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$BTCPAY_INSTANCE")]),s._v("/api/v1/stores/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$store_id")]),s._v('"')]),s._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);