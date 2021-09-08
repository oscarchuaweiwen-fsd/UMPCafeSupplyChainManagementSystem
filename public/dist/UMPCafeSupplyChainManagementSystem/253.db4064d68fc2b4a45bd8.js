"use strict";(self.webpackChunkumpcafe_supply_chain_management_system=self.webpackChunkumpcafe_supply_chain_management_system||[]).push([[253],{1253:(J,k,m)=>{m.r(k);var y=m(9759),c=m(4762),A=m(6034),T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},h=function(r){function e(t,n,i){var s=r.call(this,n)||this;return Object.setPrototypeOf(s,e.prototype),s.code=t,s.details=i,s}return(0,c.ZT)(e,r),e}(Error),D=function(){function r(e,t){var n=this;this.auth=null,this.messaging=null,this.auth=e.getImmediate({optional:!0}),this.messaging=t.getImmediate({optional:!0}),this.auth||e.get().then(function(i){return n.auth=i},function(){}),this.messaging||t.get().then(function(i){return n.messaging=i},function(){})}return r.prototype.getAuthToken=function(){return(0,c.mG)(this,void 0,void 0,function(){var e;return(0,c.Jh)(this,function(t){switch(t.label){case 0:if(!this.auth)return[2,void 0];t.label=1;case 1:return t.trys.push([1,3,,4]),[4,this.auth.getToken()];case 2:return(e=t.sent())?[2,e.accessToken]:[2,void 0];case 3:return t.sent(),[2,void 0];case 4:return[2]}})})},r.prototype.getInstanceIdToken=function(){return(0,c.mG)(this,void 0,void 0,function(){return(0,c.Jh)(this,function(e){switch(e.label){case 0:if(!this.messaging||!("Notification"in self)||"granted"!==Notification.permission)return[2,void 0];e.label=1;case 1:return e.trys.push([1,3,,4]),[4,this.messaging.getToken()];case 2:return[2,e.sent()];case 3:return e.sent(),[2,void 0];case 4:return[2]}})})},r.prototype.getContext=function(){return(0,c.mG)(this,void 0,void 0,function(){var e,t;return(0,c.Jh)(this,function(n){switch(n.label){case 0:return[4,this.getAuthToken()];case 1:return e=n.sent(),[4,this.getInstanceIdToken()];case 2:return t=n.sent(),[2,{authToken:e,instanceIdToken:t}]}})})},r}();function E(r,e){var t={};for(var n in r)r.hasOwnProperty(n)&&(t[n]=e(r[n]));return t}var r,e,t,x=function(){function r(){}return r.prototype.encode=function(e){var t=this;if(null==e)return null;if(e instanceof Number&&(e=e.valueOf()),"number"==typeof e&&isFinite(e)||!0===e||!1===e||"[object String]"===Object.prototype.toString.call(e))return e;if(e instanceof Date)return e.toISOString();if(Array.isArray(e))return e.map(function(n){return t.encode(n)});if("function"==typeof e||"object"==typeof e)return E(e,function(n){return t.encode(n)});throw new Error("Data cannot be encoded in JSON: "+e)},r.prototype.decode=function(e){var t=this;if(null==e)return e;if(e["@type"])switch(e["@type"]){case"type.googleapis.com/google.protobuf.Int64Value":case"type.googleapis.com/google.protobuf.UInt64Value":var n=Number(e.value);if(isNaN(n))throw new Error("Data cannot be decoded from JSON: "+e);return n;default:throw new Error("Data cannot be decoded from JSON: "+e)}return Array.isArray(e)?e.map(function(i){return t.decode(i)}):"function"==typeof e||"object"==typeof e?E(e,function(i){return t.decode(i)}):e},r}(),I=function(){function r(e,t,n,i,s,u){var o=this;void 0===s&&(s="us-central1"),this.app_=e,this.appCheckProvider=i,this.fetchImpl=u,this.serializer=new x,this.emulatorOrigin=null,this.INTERNAL={delete:function(){return Promise.resolve(o.deleteService())}},this.contextProvider=new D(t,n),this.cancelAllRequests=new Promise(function(l){o.deleteService=function(){return l()}});try{var a=new URL(s);this.customDomain=a.origin,this.region="us-central1"}catch(l){this.customDomain=null,this.region=s}}return Object.defineProperty(r.prototype,"app",{get:function(){return this.app_},enumerable:!1,configurable:!0}),r.prototype._url=function(e){var t=this.app_.options.projectId;return null!==this.emulatorOrigin?this.emulatorOrigin+"/"+t+"/"+this.region+"/"+e:null!==this.customDomain?this.customDomain+"/"+e:"https://"+this.region+"-"+t+".cloudfunctions.net/"+e},r.prototype.useEmulator=function(e,t){this.emulatorOrigin="http://"+e+":"+t},r.prototype.useFunctionsEmulator=function(e){this.emulatorOrigin=e},r.prototype.httpsCallable=function(e,t){var n=this;return function(i){return n.call(e,i,t||{})}},r.prototype.postJSON=function(e,t,n){return(0,c.mG)(this,void 0,void 0,function(){var i,s,u;return(0,c.Jh)(this,function(o){switch(o.label){case 0:return n["Content-Type"]="application/json",[4,this.getAppCheckToken()];case 1:null!==(i=o.sent())&&(n["X-Firebase-AppCheck"]=i),o.label=2;case 2:return o.trys.push([2,4,,5]),[4,this.fetchImpl(e,{method:"POST",body:JSON.stringify(t),headers:n})];case 3:return s=o.sent(),[3,5];case 4:return o.sent(),[2,{status:0,json:null}];case 5:u=null,o.label=6;case 6:return o.trys.push([6,8,,9]),[4,s.json()];case 7:return u=o.sent(),[3,9];case 8:return o.sent(),[3,9];case 9:return[2,{status:s.status,json:u}]}})})},r.prototype.getAppCheckToken=function(){return(0,c.mG)(this,void 0,void 0,function(){var e;return(0,c.Jh)(this,function(n){switch(n.label){case 0:return(e=this.appCheckProvider.getImmediate({optional:!0}))?[4,e.getToken()]:[3,2];case 1:return[2,n.sent().token];case 2:return[2,null]}})})},r.prototype.call=function(e,t,n){return(0,c.mG)(this,void 0,void 0,function(){var i,s,u,o,l,p,b,f,v,d;return(0,c.Jh)(this,function(g){switch(g.label){case 0:return i=this._url(e),t=this.serializer.encode(t),s={data:t},u={},[4,this.contextProvider.getContext()];case 1:return(o=g.sent()).authToken&&(u.Authorization="Bearer "+o.authToken),o.instanceIdToken&&(u["Firebase-Instance-ID-Token"]=o.instanceIdToken),l=function(r){var e,t=new Promise(function(n,i){e=setTimeout(function(){i(new h("deadline-exceeded","deadline-exceeded"))},r)});return{timer:e,promise:t}}(n.timeout||7e4),p=l.timer,b=l.promise,[4,Promise.race([N(p,this.postJSON(i,s,u)),b,N(p,this.cancelAllRequests)])];case 2:if(!(f=g.sent()))throw new h("cancelled","Firebase Functions instance was deleted.");if(v=function(r,e,t){var n=function(r){if(r>=200&&r<300)return"ok";switch(r){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}(r),i=n,s=void 0;try{var u=e&&e.error;if(u){var o=u.status;if("string"==typeof o){if(!T[o])return new h("internal","internal");n=T[o],i=o}var a=u.message;"string"==typeof a&&(i=a),void 0!==(s=u.details)&&(s=t.decode(s))}}catch(l){}return"ok"===n?null:new h(n,i,s)}(f.status,f.json,this.serializer))throw v;if(!f.json)throw new h("internal","Response is not valid JSON object.");if(void 0===(d=f.json.data)&&(d=f.json.result),void 0===d)throw new h("internal","Response is missing data field.");return[2,{data:this.serializer.decode(d)}]}})})},r}();function N(r,e){return(0,c.mG)(this,void 0,void 0,function(){var t;return(0,c.Jh)(this,function(n){switch(n.label){case 0:return[4,e];case 1:return t=n.sent(),clearTimeout(r),[2,t]}})})}r=y.Z,e=fetch.bind(self),t={Functions:I},r.INTERNAL.registerComponent(new A.wA("functions",function(i,s){var u=s.instanceIdentifier,o=i.getProvider("app").getImmediate(),a=i.getProvider("auth-internal"),l=i.getProvider("app-check-internal"),p=i.getProvider("messaging");return new I(o,a,p,l,u,e)},"PUBLIC").setServiceProps(t).setMultipleInstances(!0)),y.Z.registerVersion("@firebase/functions","0.6.14")}}]);