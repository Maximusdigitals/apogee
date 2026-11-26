(()=>{var Qh="170",Ls={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ds={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},$p=0,Qu=1,Jp=2;var Mf=1,tu=2,vi=3,Yi=0,De=1,$e=2,ei=0,ur=1,Ne=2,td=3,ed=4,Kp=5,vs=100,jp=101,Qp=102,tm=103,em=104,nm=200,im=201,sm=202,rm=203,Ac=204,Rc=205,om=206,am=207,lm=208,cm=209,hm=210,um=211,dm=212,fm=213,pm=214,Cc=0,Pc=1,Ic=2,gr=3,Lc=4,Dc=5,Uc=6,Nc=7,bf=0,mm=1,gm=2,Xi=0,eu=1,nu=2,iu=3,Ir=4,ym=5,su=6,Lr=7;var Sf=300,yr=301,xr=302,Fc=303,Oc=304,ll=306,Ss=1e3,bi=1001,Bc=1002,Mn=1003,xm=1004;var qo=1005;var Qn=1006,Xl=1007;var bs=1008;var wi=1009,Ef=1010,wf=1011,go=1012,ru=1013,Es=1014,ti=1015,bn=1016,ou=1017,au=1018,_r=1020,Tf=35902,Af=1021,Rf=1022,Gn=1023,Cf=1024,Pf=1025,dr=1026,vr=1027,lu=1028,cu=1029,If=1030,hu=1031;var uu=1033,Ra=33776,Ca=33777,Pa=33778,Ia=33779,zc=35840,kc=35841,Hc=35842,Vc=35843,Gc=36196,Wc=37492,Xc=37496,qc=37808,Yc=37809,Zc=37810,$c=37811,Jc=37812,Kc=37813,jc=37814,Qc=37815,th=37816,eh=37817,nh=37818,ih=37819,sh=37820,rh=37821,La=36492,oh=36494,ah=36495,Lf=36283,lh=36284,ch=36285,hh=36286;var Da=2300,uh=2301,ql=2302,nd=2400,id=2401,sd=2402;var _m=3200,vm=3201;var Df=0,Mm=1,jn="",Ie="srgb",Dr="srgb-linear",cl="linear",me="srgb";var Ws=7680;var rd=519,bm=512,Sm=513,Em=514,Uf=515,wm=516,Tm=517,Am=518,Rm=519,dh=35044;var od="300 es",Si=2e3,Ua=2001,Ti=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ad=1234567,fr=Math.PI/180,yo=180/Math.PI;function ni(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[e&63|128]+sn[e>>8&255]+"-"+sn[e>>16&255]+sn[e>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function He(i,t,e){return Math.max(t,Math.min(e,i))}function du(i,t){return(i%t+t)%t}function Cm(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Pm(i,t,e){return i!==t?(e-i)/(t-i):0}function uo(i,t,e){return(1-e)*i+e*t}function Im(i,t,e,n){return uo(i,t,1-Math.exp(-e*n))}function Lm(i,t=1){return t-Math.abs(du(i,t*2)-t)}function Dm(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Um(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Nm(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Fm(i,t){return i+Math.random()*(t-i)}function Om(i){return i*(.5-Math.random())}function Bm(i){i!==void 0&&(ad=i);let t=ad+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function zm(i){return i*fr}function km(i){return i*yo}function Hm(i){return(i&i-1)===0&&i!==0}function Vm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Gm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Wm(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Vn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ye(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ns={DEG2RAD:fr,RAD2DEG:yo,generateUUID:ni,clamp:He,euclideanModulo:du,mapLinear:Cm,inverseLerp:Pm,lerp:uo,damp:Im,pingpong:Lm,smoothstep:Dm,smootherstep:Um,randInt:Nm,randFloat:Fm,randFloatSpread:Om,seededRandom:Bm,degToRad:zm,radToDeg:km,isPowerOfTwo:Hm,ceilPowerOfTwo:Vm,floorPowerOfTwo:Gm,setQuaternionFromProperEuler:Wm,normalize:ye,denormalize:Vn},et=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(He(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Vt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],y=s[0],m=s[3],f=s[6],b=s[1],_=s[4],x=s[7],I=s[2],T=s[5],P=s[8];return r[0]=o*y+a*b+l*I,r[3]=o*m+a*_+l*T,r[6]=o*f+a*x+l*P,r[1]=c*y+h*b+u*I,r[4]=c*m+h*_+u*T,r[7]=c*f+h*x+u*P,r[2]=d*y+p*b+g*I,r[5]=d*m+p*_+g*T,r[8]=d*f+p*x+g*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,g=e*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=u*y,t[1]=(s*c-h*n)*y,t[2]=(a*n-s*o)*y,t[3]=d*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=p*y,t[7]=(n*l-c*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Yl.makeScale(t,e)),this}rotate(t){return this.premultiply(Yl.makeRotation(-t)),this}translate(t,e){return this.premultiply(Yl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Yl=new Vt;function Nf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Na(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Xm(){let i=Na("canvas");return i.style.display="block",i}var ld={};function co(i){i in ld||(ld[i]=!0,console.warn(i))}function qm(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Ym(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Zm(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ne={enabled:!0,workingColorSpace:Dr,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===me&&(i.r=Ei(i.r),i.g=Ei(i.g),i.b=Ei(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===me&&(i.r=pr(i.r),i.g=pr(i.g),i.b=pr(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===jn?cl:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Ei(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function pr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var cd=[.64,.33,.3,.6,.15,.06],hd=[.2126,.7152,.0722],ud=[.3127,.329],dd=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fd=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ne.define({[Dr]:{primaries:cd,whitePoint:ud,transfer:cl,toXYZ:dd,fromXYZ:fd,luminanceCoefficients:hd,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:cd,whitePoint:ud,transfer:me,toXYZ:dd,fromXYZ:fd,luminanceCoefficients:hd,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}});var Xs,fh=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Xs===void 0&&(Xs=Na("canvas")),Xs.width=t.width,Xs.height=t.height;let n=Xs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Xs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Na("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ei(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ei(e[n]/255)*255):e[n]=Ei(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},$m=0,Fa=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$m++}),this.uuid=ni(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Zl(s[o].image)):r.push(Zl(s[o]))}else r=Zl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Zl(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?fh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Jm=0,je=class i extends Ti{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=bi,s=bi,r=Qn,o=bs,a=Gn,l=wi,c=i.DEFAULT_ANISOTROPY,h=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jm++}),this.uuid=ni(),this.name="",this.source=new Fa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ss:t.x=t.x-Math.floor(t.x);break;case bi:t.x=t.x<0?0:1;break;case Bc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ss:t.y=t.y-Math.floor(t.y);break;case bi:t.y=t.y<0?0:1;break;case Bc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=Sf;je.DEFAULT_ANISOTROPY=1;var xe=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],y=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,x=(p+1)/2,I=(f+1)/2,T=(h+d)/4,P=(u+y)/4,L=(g+m)/4;return _>x&&_>I?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=T/n,r=P/n):x>I?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=T/s,r=L/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=P/r,s=L/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-y)/b,this.z=(d-h)/b,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ph=class extends Ti{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new je(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Fa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qe=class extends ph{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Oa=class extends je{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var mh=class extends je{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Oe=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],p=r[o+1],g=r[o+2],y=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=y;return}if(u!==y||l!==d||c!==p||h!==g){let m=1-a,f=l*d+c*p+h*g+u*y,b=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){let I=Math.sqrt(_),T=Math.atan2(I,f*b);m=Math.sin(m*T)/I,a=Math.sin(a*T)/I}let x=a*b;if(l=l*m+d*x,c=c*m+p*x,h=h*m+g*x,u=u*m+y*x,m===1-a){let I=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=I,c*=I,h*=I,u*=I}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-a*p,t[e+2]=c*g+h*p+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(He(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(pd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(pd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return $l.copy(this).projectOnVector(t),this.sub($l)}reflect(t){return this.sub($l.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(He(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},$l=new z,pd=new Oe,Rn=class{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Bn):Bn.fromBufferAttribute(r,o),Bn.applyMatrix4(t.matrixWorld),this.expandByPoint(Bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Yo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yo.copy(n.boundingBox)),Yo.applyMatrix4(t.matrixWorld),this.union(Yo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Bn),Bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(jr),Zo.subVectors(this.max,jr),qs.subVectors(t.a,jr),Ys.subVectors(t.b,jr),Zs.subVectors(t.c,jr),zi.subVectors(Ys,qs),ki.subVectors(Zs,Ys),fs.subVectors(qs,Zs);let e=[0,-zi.z,zi.y,0,-ki.z,ki.y,0,-fs.z,fs.y,zi.z,0,-zi.x,ki.z,0,-ki.x,fs.z,0,-fs.x,-zi.y,zi.x,0,-ki.y,ki.x,0,-fs.y,fs.x,0];return!Jl(e,qs,Ys,Zs,Zo)||(e=[1,0,0,0,1,0,0,0,1],!Jl(e,qs,Ys,Zs,Zo))?!1:($o.crossVectors(zi,ki),e=[$o.x,$o.y,$o.z],Jl(e,qs,Ys,Zs,Zo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},pi=[new z,new z,new z,new z,new z,new z,new z,new z],Bn=new z,Yo=new Rn,qs=new z,Ys=new z,Zs=new z,zi=new z,ki=new z,fs=new z,jr=new z,Zo=new z,$o=new z,ps=new z;function Jl(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ps.fromArray(i,r);let a=s.x*Math.abs(ps.x)+s.y*Math.abs(ps.y)+s.z*Math.abs(ps.z),l=t.dot(ps),c=e.dot(ps),h=n.dot(ps);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Km=new Rn,Qr=new z,Kl=new z,Ai=class{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Km.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qr.subVectors(t,this.center);let e=Qr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Qr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Kl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qr.copy(t.center).add(Kl)),this.expandByPoint(Qr.copy(t.center).sub(Kl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},mi=new z,jl=new z,Jo=new z,Hi=new z,Ql=new z,Ko=new z,tc=new z,Zi=class{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=mi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mi.copy(this.origin).addScaledVector(this.direction,e),mi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){jl.copy(t).add(e).multiplyScalar(.5),Jo.copy(e).sub(t).normalize(),Hi.copy(this.origin).sub(jl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Jo),a=Hi.dot(this.direction),l=-Hi.dot(Jo),c=Hi.lengthSq(),h=Math.abs(1-o*o),u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let y=1/h;u*=y,d*=y,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(jl).addScaledVector(Jo,d),p}intersectSphere(t,e){mi.subVectors(t.center,this.origin);let n=mi.dot(this.direction),s=mi.dot(mi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,mi)!==null}intersectTriangle(t,e,n,s,r){Ql.subVectors(e,t),Ko.subVectors(n,t),tc.crossVectors(Ql,Ko);let o=this.direction.dot(tc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Hi.subVectors(this.origin,t);let l=a*this.direction.dot(Ko.crossVectors(Hi,Ko));if(l<0)return null;let c=a*this.direction.dot(Ql.cross(Hi));if(c<0||l+c>o)return null;let h=-a*Hi.dot(tc);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},te=class i{constructor(t,e,n,s,r,o,a,l,c,h,u,d,p,g,y,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,p,g,y,m)}set(t,e,n,s,r,o,a,l,c,h,u,d,p,g,y,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/$s.setFromMatrixColumn(t,0).length(),r=1/$s.setFromMatrixColumn(t,1).length(),o=1/$s.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,p=o*u,g=a*h,y=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-y*c,e[9]=-a*l,e[2]=y-d*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,p=l*u,g=c*h,y=c*u;e[0]=d+y*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=y+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,p=l*u,g=c*h,y=c*u;e[0]=d-y*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=y-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,p=o*u,g=a*h,y=a*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+y,e[1]=l*u,e[5]=y*c+d,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,p=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=y-d*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-y*u}else if(t.order==="XZY"){let d=o*l,p=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+y,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=y*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jm,t,Qm)}lookAt(t,e,n){let s=this.elements;return _n.subVectors(t,e),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Vi.crossVectors(n,_n),Vi.lengthSq()===0&&(Math.abs(n.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Vi.crossVectors(n,_n)),Vi.normalize(),jo.crossVectors(_n,Vi),s[0]=Vi.x,s[4]=jo.x,s[8]=_n.x,s[1]=Vi.y,s[5]=jo.y,s[9]=_n.y,s[2]=Vi.z,s[6]=jo.z,s[10]=_n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],y=n[6],m=n[10],f=n[14],b=n[3],_=n[7],x=n[11],I=n[15],T=s[0],P=s[4],L=s[8],v=s[12],M=s[1],U=s[5],k=s[9],V=s[13],q=s[2],st=s[6],H=s[10],$=s[14],O=s[3],dt=s[7],lt=s[11],gt=s[15];return r[0]=o*T+a*M+l*q+c*O,r[4]=o*P+a*U+l*st+c*dt,r[8]=o*L+a*k+l*H+c*lt,r[12]=o*v+a*V+l*$+c*gt,r[1]=h*T+u*M+d*q+p*O,r[5]=h*P+u*U+d*st+p*dt,r[9]=h*L+u*k+d*H+p*lt,r[13]=h*v+u*V+d*$+p*gt,r[2]=g*T+y*M+m*q+f*O,r[6]=g*P+y*U+m*st+f*dt,r[10]=g*L+y*k+m*H+f*lt,r[14]=g*v+y*V+m*$+f*gt,r[3]=b*T+_*M+x*q+I*O,r[7]=b*P+_*U+x*st+I*dt,r[11]=b*L+_*k+x*H+I*lt,r[15]=b*v+_*V+x*$+I*gt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],y=t[7],m=t[11],f=t[15];return g*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*p-n*l*p)+y*(+e*l*p-e*c*d+r*o*d-s*o*p+s*c*h-r*l*h)+m*(+e*c*u-e*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+f*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],y=t[13],m=t[14],f=t[15],b=u*m*c-y*d*c+y*l*p-a*m*p-u*l*f+a*d*f,_=g*d*c-h*m*c-g*l*p+o*m*p+h*l*f-o*d*f,x=h*y*c-g*u*c+g*a*p-o*y*p-h*a*f+o*u*f,I=g*u*l-h*y*l-g*a*d+o*y*d+h*a*m-o*u*m,T=e*b+n*_+s*x+r*I;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/T;return t[0]=b*P,t[1]=(y*d*r-u*m*r-y*s*p+n*m*p+u*s*f-n*d*f)*P,t[2]=(a*m*r-y*l*r+y*s*c-n*m*c-a*s*f+n*l*f)*P,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*p-n*l*p)*P,t[4]=_*P,t[5]=(h*m*r-g*d*r+g*s*p-e*m*p-h*s*f+e*d*f)*P,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*f-e*l*f)*P,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*p+e*l*p)*P,t[8]=x*P,t[9]=(g*u*r-h*y*r-g*n*p+e*y*p+h*n*f-e*u*f)*P,t[10]=(o*y*r-g*a*r+g*n*c-e*y*c-o*n*f+e*a*f)*P,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*p-e*a*p)*P,t[12]=I*P,t[13]=(h*y*s-g*u*s+g*n*d-e*y*d-h*n*m+e*u*m)*P,t[14]=(g*a*s-o*y*s-g*n*l+e*y*l+o*n*m-e*a*m)*P,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*P,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,g=r*u,y=o*h,m=o*u,f=a*u,b=l*c,_=l*h,x=l*u,I=n.x,T=n.y,P=n.z;return s[0]=(1-(y+f))*I,s[1]=(p+x)*I,s[2]=(g-_)*I,s[3]=0,s[4]=(p-x)*T,s[5]=(1-(d+f))*T,s[6]=(m+b)*T,s[7]=0,s[8]=(g+_)*P,s[9]=(m-b)*P,s[10]=(1-(d+y))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=$s.set(s[0],s[1],s[2]).length(),o=$s.set(s[4],s[5],s[6]).length(),a=$s.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],zn.copy(this);let c=1/r,h=1/o,u=1/a;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=h,zn.elements[5]*=h,zn.elements[6]*=h,zn.elements[8]*=u,zn.elements[9]*=u,zn.elements[10]*=u,e.setFromRotationMatrix(zn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Si){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),p,g;if(a===Si)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ua)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Si){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*c,p=(n+s)*h,g,y;if(a===Si)g=(o+r)*u,y=-2*u;else if(a===Ua)g=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},$s=new z,zn=new te,jm=new z(0,0,0),Qm=new z(1,1,1),Vi=new z,jo=new z,_n=new z,md=new te,gd=new Oe,dn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-He(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(He(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return md.makeRotationFromQuaternion(t),this.setFromRotationMatrix(md,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return gd.setFromEuler(this),this.setFromQuaternion(gd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};dn.DEFAULT_ORDER="XYZ";var xo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},tg=0,yd=new z,Js=new Oe,gi=new te,Qo=new z,to=new z,eg=new z,ng=new Oe,xd=new z(1,0,0),_d=new z(0,1,0),vd=new z(0,0,1),Md={type:"added"},ig={type:"removed"},Ks={type:"childadded",child:null},ec={type:"childremoved",child:null},Je=class i extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tg++}),this.uuid=ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new z,e=new dn,n=new Oe,s=new z(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new te},normalMatrix:{value:new Vt}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Js.setFromAxisAngle(t,e),this.quaternion.multiply(Js),this}rotateOnWorldAxis(t,e){return Js.setFromAxisAngle(t,e),this.quaternion.premultiply(Js),this}rotateX(t){return this.rotateOnAxis(xd,t)}rotateY(t){return this.rotateOnAxis(_d,t)}rotateZ(t){return this.rotateOnAxis(vd,t)}translateOnAxis(t,e){return yd.copy(t).applyQuaternion(this.quaternion),this.position.add(yd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(xd,t)}translateY(t){return this.translateOnAxis(_d,t)}translateZ(t){return this.translateOnAxis(vd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Qo.copy(t):Qo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),to.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(to,Qo,this.up):gi.lookAt(Qo,to,this.up),this.quaternion.setFromRotationMatrix(gi),s&&(gi.extractRotation(s.matrixWorld),Js.setFromRotationMatrix(gi),this.quaternion.premultiply(Js.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Md),Ks.child=t,this.dispatchEvent(Ks),Ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ig),ec.child=t,this.dispatchEvent(ec),ec.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gi.multiply(t.parent.matrixWorld)),t.applyMatrix4(gi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Md),Ks.child=t,this.dispatchEvent(Ks),Ks.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,t,eg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,ng,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Je.DEFAULT_UP=new z(0,1,0);Je.DEFAULT_MATRIX_AUTO_UPDATE=!0;Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var kn=new z,yi=new z,nc=new z,xi=new z,js=new z,Qs=new z,bd=new z,ic=new z,sc=new z,rc=new z,oc=new xe,ac=new xe,lc=new xe,Mi=class i{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),kn.subVectors(t,e),s.cross(kn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){kn.subVectors(s,e),yi.subVectors(n,e),nc.subVectors(t,e);let o=kn.dot(kn),a=kn.dot(yi),l=kn.dot(nc),c=yi.dot(yi),h=yi.dot(nc),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,xi.x),l.addScaledVector(o,xi.y),l.addScaledVector(a,xi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return oc.setScalar(0),ac.setScalar(0),lc.setScalar(0),oc.fromBufferAttribute(t,e),ac.fromBufferAttribute(t,n),lc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(oc,r.x),o.addScaledVector(ac,r.y),o.addScaledVector(lc,r.z),o}static isFrontFacing(t,e,n,s){return kn.subVectors(n,e),yi.subVectors(t,e),kn.cross(yi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return kn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),kn.cross(yi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;js.subVectors(s,n),Qs.subVectors(r,n),ic.subVectors(t,n);let l=js.dot(ic),c=Qs.dot(ic);if(l<=0&&c<=0)return e.copy(n);sc.subVectors(t,s);let h=js.dot(sc),u=Qs.dot(sc);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(js,o);rc.subVectors(t,r);let p=js.dot(rc),g=Qs.dot(rc);if(g>=0&&p<=g)return e.copy(r);let y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Qs,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return bd.subVectors(r,s),a=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(bd,a);let f=1/(m+y+d);return o=y*f,a=d*f,e.copy(n).addScaledVector(js,o).addScaledVector(Qs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ff={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},ta={h:0,s:0,l:0};function cc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var It=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ne.workingColorSpace){if(t=du(t,1),e=He(e,0,1),n=He(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=cc(o,r,t+1/3),this.g=cc(o,r,t),this.b=cc(o,r,t-1/3)}return ne.toWorkingColorSpace(this,s),this}setStyle(t,e=Ie){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){let n=Ff[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ei(t.r),this.g=Ei(t.g),this.b=Ei(t.b),this}copyLinearToSRGB(t){return this.r=pr(t.r),this.g=pr(t.g),this.b=pr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return ne.fromWorkingColorSpace(rn.copy(this),t),Math.round(He(rn.r*255,0,255))*65536+Math.round(He(rn.g*255,0,255))*256+Math.round(He(rn.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.fromWorkingColorSpace(rn.copy(this),e);let n=rn.r,s=rn.g,r=rn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.fromWorkingColorSpace(rn.copy(this),e),t.r=rn.r,t.g=rn.g,t.b=rn.b,t}getStyle(t=Ie){ne.fromWorkingColorSpace(rn.copy(this),t);let e=rn.r,n=rn.g,s=rn.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Gi),this.setHSL(Gi.h+t,Gi.s+e,Gi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Gi),t.getHSL(ta);let n=uo(Gi.h,ta.h,e),s=uo(Gi.s,ta.s,e),r=uo(Gi.l,ta.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new It;It.NAMES=Ff;var sg=0,si=class extends Ti{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sg++}),this.uuid=ni(),this.name="",this.blending=ur,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ac,this.blendDst=Rc,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ws,this.stencilZFail=Ws,this.stencilZPass=Ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ur&&(n.blending=this.blending),this.side!==Yi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ac&&(n.blendSrc=this.blendSrc),this.blendDst!==Rc&&(n.blendDst=this.blendDst),this.blendEquation!==vs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==gr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ws&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ws&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ws&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Fe=class extends si{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=bf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ke=new z,ea=new et,ue=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=dh,this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ea.fromBufferAttribute(this,e),ea.applyMatrix3(t),this.setXY(e,ea.x,ea.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix3(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ye(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Vn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Vn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Vn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Vn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),s=ye(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),s=ye(s,this.array),r=ye(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==dh&&(t.usage=this.usage),t}};var Ba=class extends ue{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var za=class extends ue{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Xt=class extends ue{constructor(t,e,n){super(new Float32Array(t),e,n)}},rg=0,An=new te,hc=new Je,tr=new z,vn=new Rn,eo=new Rn,Ze=new z,ie=class i extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rg++}),this.uuid=ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Nf(t)?za:Ba)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Vt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return An.makeRotationFromQuaternion(t),this.applyMatrix4(An),this}rotateX(t){return An.makeRotationX(t),this.applyMatrix4(An),this}rotateY(t){return An.makeRotationY(t),this.applyMatrix4(An),this}rotateZ(t){return An.makeRotationZ(t),this.applyMatrix4(An),this}translate(t,e,n){return An.makeTranslation(t,e,n),this.applyMatrix4(An),this}scale(t,e,n){return An.makeScale(t,e,n),this.applyMatrix4(An),this}lookAt(t){return hc.lookAt(t),hc.updateMatrix(),this.applyMatrix4(hc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tr).negate(),this.translate(tr.x,tr.y,tr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Xt(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ai);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){let n=this.boundingSphere.center;if(vn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];eo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ze.addVectors(vn.min,eo.min),vn.expandByPoint(Ze),Ze.addVectors(vn.max,eo.max),vn.expandByPoint(Ze)):(vn.expandByPoint(eo.min),vn.expandByPoint(eo.max))}vn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ze.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ze));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ze.fromBufferAttribute(a,c),l&&(tr.fromBufferAttribute(t,c),Ze.add(tr)),s=Math.max(s,n.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ue(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new z,l[L]=new z;let c=new z,h=new z,u=new z,d=new et,p=new et,g=new et,y=new z,m=new z;function f(L,v,M){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,v),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,L),p.fromBufferAttribute(r,v),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),p.sub(d),g.sub(d);let U=1/(p.x*g.y-g.x*p.y);isFinite(U)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(U),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(U),a[L].add(y),a[v].add(y),a[M].add(y),l[L].add(m),l[v].add(m),l[M].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let L=0,v=b.length;L<v;++L){let M=b[L],U=M.start,k=M.count;for(let V=U,q=U+k;V<q;V+=3)f(t.getX(V+0),t.getX(V+1),t.getX(V+2))}let _=new z,x=new z,I=new z,T=new z;function P(L){I.fromBufferAttribute(s,L),T.copy(I);let v=a[L];_.copy(v),_.sub(I.multiplyScalar(I.dot(v))).normalize(),x.crossVectors(T,v);let U=x.dot(l[L])<0?-1:1;o.setXYZW(L,_.x,_.y,_.z,U)}for(let L=0,v=b.length;L<v;++L){let M=b[L],U=M.start,k=M.count;for(let V=U,q=U+k;V<q;V+=3)P(t.getX(V+0)),P(t.getX(V+1)),P(t.getX(V+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ue(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new z,r=new z,o=new z,a=new z,l=new z,c=new z,h=new z,u=new z;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),y=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ze.fromBufferAttribute(t,e),Ze.normalize(),t.setXYZ(e,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),p=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new ue(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Sd=new te,ms=new Zi,na=new Ai,Ed=new z,ia=new z,sa=new z,ra=new z,uc=new z,oa=new z,wd=new z,aa=new z,bt=class extends Je{constructor(t=new ie,e=new Fe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){oa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(uc.fromBufferAttribute(u,t),o?oa.addScaledVector(uc,h):oa.addScaledVector(uc.sub(e),h))}e.add(oa)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere),na.applyMatrix4(r),ms.copy(t.ray).recast(t.near),!(na.containsPoint(ms.origin)===!1&&(ms.intersectSphere(na,Ed)===null||ms.origin.distanceToSquared(Ed)>(t.far-t.near)**2))&&(Sd.copy(r).invert(),ms.copy(t.ray).applyMatrix4(Sd),!(n.boundingBox!==null&&ms.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ms)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){let m=d[g],f=o[m.materialIndex],b=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=b,I=_;x<I;x+=3){let T=a.getX(x),P=a.getX(x+1),L=a.getX(x+2);s=la(this,f,t,n,c,h,u,T,P,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){let b=a.getX(m),_=a.getX(m+1),x=a.getX(m+2);s=la(this,o,t,n,c,h,u,b,_,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){let m=d[g],f=o[m.materialIndex],b=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=b,I=_;x<I;x+=3){let T=x,P=x+1,L=x+2;s=la(this,f,t,n,c,h,u,T,P,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){let b=m,_=m+1,x=m+2;s=la(this,o,t,n,c,h,u,b,_,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function og(i,t,e,n,s,r,o,a){let l;if(t.side===De?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Yi,a),l===null)return null;aa.copy(a),aa.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(aa);return c<e.near||c>e.far?null:{distance:c,point:aa.clone(),object:i}}function la(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,ia),i.getVertexPosition(l,sa),i.getVertexPosition(c,ra);let h=og(i,t,e,n,ia,sa,ra,wd);if(h){let u=new z;Mi.getBarycoord(wd,ia,sa,ra,u),s&&(h.uv=Mi.getInterpolatedAttribute(s,a,l,c,u,new et)),r&&(h.uv1=Mi.getInterpolatedAttribute(r,a,l,c,u,new et)),o&&(h.normal=Mi.getInterpolatedAttribute(o,a,l,c,u,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new z,materialIndex:0};Mi.getNormal(ia,sa,ra,d.normal),h.face=d,h.barycoord=u}return h}var Pe=class i extends ie{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(h,3)),this.setAttribute("uv",new Xt(u,2));function g(y,m,f,b,_,x,I,T,P,L,v){let M=x/P,U=I/L,k=x/2,V=I/2,q=T/2,st=P+1,H=L+1,$=0,O=0,dt=new z;for(let lt=0;lt<H;lt++){let gt=lt*U-V;for(let xt=0;xt<st;xt++){let wt=xt*M-k;dt[y]=wt*b,dt[m]=gt*_,dt[f]=q,c.push(dt.x,dt.y,dt.z),dt[y]=0,dt[m]=0,dt[f]=T>0?1:-1,h.push(dt.x,dt.y,dt.z),u.push(xt/P),u.push(1-lt/L),$+=1}}for(let lt=0;lt<L;lt++)for(let gt=0;gt<P;gt++){let xt=d+gt+st*lt,wt=d+gt+st*(lt+1),F=d+(gt+1)+st*(lt+1),D=d+(gt+1)+st*lt;l.push(xt,wt,D),l.push(wt,F,D),O+=6}a.addGroup(p,O,v),p+=O,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Mr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function un(i){let t={};for(let e=0;e<i.length;e++){let n=Mr(i[e]);for(let s in n)t[s]=n[s]}return t}function ag(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Of(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}var is={clone:Mr,merge:un},lg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,se=class extends si{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lg,this.fragmentShader=cg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Mr(t.uniforms),this.uniformsGroups=ag(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},ka=class extends Je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=Si}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Wi=new z,Td=new et,Ad=new et,Ve=class extends ka{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=yo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(fr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return yo*2*Math.atan(Math.tan(fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Wi.x,Wi.y).multiplyScalar(-t/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wi.x,Wi.y).multiplyScalar(-t/Wi.z)}getViewSize(t,e){return this.getViewBounds(t,Td,Ad),e.subVectors(Ad,Td)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(fr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},er=-90,nr=1,gh=class extends Je{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ve(er,nr,t,e);s.layers=this.layers,this.add(s);let r=new Ve(er,nr,t,e);r.layers=this.layers,this.add(r);let o=new Ve(er,nr,t,e);o.layers=this.layers,this.add(o);let a=new Ve(er,nr,t,e);a.layers=this.layers,this.add(a);let l=new Ve(er,nr,t,e);l.layers=this.layers,this.add(l);let c=new Ve(er,nr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Si)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ua)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ha=class extends je{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:yr,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},yh=class extends Qe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ha(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Qn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Pe(5,5,5),r=new se({name:"CubemapFromEquirect",uniforms:Mr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:De,blending:ei});r.uniforms.tEquirect.value=e;let o=new bt(s,r),a=e.minFilter;return e.minFilter===bs&&(e.minFilter=Qn),new gh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},dc=new z,hg=new z,ug=new Vt,Hn=class{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=dc.subVectors(n,e).cross(hg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(dc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ug.getNormalMatrix(t),s=this.coplanarPoint(dc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},gs=new Ai,ca=new z,_o=class{constructor(t=new Hn,e=new Hn,n=new Hn,s=new Hn,r=new Hn,o=new Hn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Si){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],y=s[10],m=s[11],f=s[12],b=s[13],_=s[14],x=s[15];if(n[0].setComponents(l-r,d-c,m-p,x-f).normalize(),n[1].setComponents(l+r,d+c,m+p,x+f).normalize(),n[2].setComponents(l+o,d+h,m+g,x+b).normalize(),n[3].setComponents(l-o,d-h,m-g,x-b).normalize(),n[4].setComponents(l-a,d-u,m-y,x-_).normalize(),e===Si)n[5].setComponents(l+a,d+u,m+y,x+_).normalize();else if(e===Ua)n[5].setComponents(a,u,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(t){return gs.center.set(0,0,0),gs.radius=.7071067811865476,gs.applyMatrix4(t.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ca.x=s.normal.x>0?t.max.x:t.min.x,ca.y=s.normal.y>0?t.max.y:t.min.y,ca.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ca)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Bf(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function dg(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){let g=u[d],y=u[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,u[d]=y)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){let y=u[p];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Cn=class i extends ie{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,p=[],g=[],y=[],m=[];for(let f=0;f<h;f++){let b=f*d-o;for(let _=0;_<c;_++){let x=_*u-r;g.push(x,-b,0),y.push(0,0,1),m.push(_/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let b=0;b<a;b++){let _=b+c*f,x=b+c*(f+1),I=b+1+c*(f+1),T=b+1+c*f;p.push(_,x,T),p.push(x,I,T)}this.setIndex(p),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(y,3)),this.setAttribute("uv",new Xt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},fg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,mg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_g=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,bg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Eg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Tg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ag=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Rg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Cg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ig=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ug=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ng=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Fg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Og=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Bg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,zg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,qg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Zg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$g=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Jg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,t0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,e0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,n0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,i0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,s0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,r0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,o0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,a0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,l0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,c0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,h0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,u0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,d0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,f0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,p0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,m0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,g0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,v0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,M0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,b0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,S0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,E0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,w0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,T0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,A0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,R0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,C0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,I0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,L0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,N0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,F0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,O0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,B0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,z0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,k0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,H0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,V0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,G0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,W0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,X0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,q0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Y0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Z0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,$0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,J0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,K0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,j0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Q0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ty=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ey=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ny=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ry=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,oy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ay=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ly=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,uy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,dy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,py=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,my=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_y=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,My=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,by=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ey=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ty=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ay=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ry=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Py=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Iy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ly=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Dy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Uy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ny=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Oy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,By=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ky=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Hy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kt={alphahash_fragment:fg,alphahash_pars_fragment:pg,alphamap_fragment:mg,alphamap_pars_fragment:gg,alphatest_fragment:yg,alphatest_pars_fragment:xg,aomap_fragment:_g,aomap_pars_fragment:vg,batching_pars_vertex:Mg,batching_vertex:bg,begin_vertex:Sg,beginnormal_vertex:Eg,bsdfs:wg,iridescence_fragment:Tg,bumpmap_pars_fragment:Ag,clipping_planes_fragment:Rg,clipping_planes_pars_fragment:Cg,clipping_planes_pars_vertex:Pg,clipping_planes_vertex:Ig,color_fragment:Lg,color_pars_fragment:Dg,color_pars_vertex:Ug,color_vertex:Ng,common:Fg,cube_uv_reflection_fragment:Og,defaultnormal_vertex:Bg,displacementmap_pars_vertex:zg,displacementmap_vertex:kg,emissivemap_fragment:Hg,emissivemap_pars_fragment:Vg,colorspace_fragment:Gg,colorspace_pars_fragment:Wg,envmap_fragment:Xg,envmap_common_pars_fragment:qg,envmap_pars_fragment:Yg,envmap_pars_vertex:Zg,envmap_physical_pars_fragment:r0,envmap_vertex:$g,fog_vertex:Jg,fog_pars_vertex:Kg,fog_fragment:jg,fog_pars_fragment:Qg,gradientmap_pars_fragment:t0,lightmap_pars_fragment:e0,lights_lambert_fragment:n0,lights_lambert_pars_fragment:i0,lights_pars_begin:s0,lights_toon_fragment:o0,lights_toon_pars_fragment:a0,lights_phong_fragment:l0,lights_phong_pars_fragment:c0,lights_physical_fragment:h0,lights_physical_pars_fragment:u0,lights_fragment_begin:d0,lights_fragment_maps:f0,lights_fragment_end:p0,logdepthbuf_fragment:m0,logdepthbuf_pars_fragment:g0,logdepthbuf_pars_vertex:y0,logdepthbuf_vertex:x0,map_fragment:_0,map_pars_fragment:v0,map_particle_fragment:M0,map_particle_pars_fragment:b0,metalnessmap_fragment:S0,metalnessmap_pars_fragment:E0,morphinstance_vertex:w0,morphcolor_vertex:T0,morphnormal_vertex:A0,morphtarget_pars_vertex:R0,morphtarget_vertex:C0,normal_fragment_begin:P0,normal_fragment_maps:I0,normal_pars_fragment:L0,normal_pars_vertex:D0,normal_vertex:U0,normalmap_pars_fragment:N0,clearcoat_normal_fragment_begin:F0,clearcoat_normal_fragment_maps:O0,clearcoat_pars_fragment:B0,iridescence_pars_fragment:z0,opaque_fragment:k0,packing:H0,premultiplied_alpha_fragment:V0,project_vertex:G0,dithering_fragment:W0,dithering_pars_fragment:X0,roughnessmap_fragment:q0,roughnessmap_pars_fragment:Y0,shadowmap_pars_fragment:Z0,shadowmap_pars_vertex:$0,shadowmap_vertex:J0,shadowmask_pars_fragment:K0,skinbase_vertex:j0,skinning_pars_vertex:Q0,skinning_vertex:ty,skinnormal_vertex:ey,specularmap_fragment:ny,specularmap_pars_fragment:iy,tonemapping_fragment:sy,tonemapping_pars_fragment:ry,transmission_fragment:oy,transmission_pars_fragment:ay,uv_pars_fragment:ly,uv_pars_vertex:cy,uv_vertex:hy,worldpos_vertex:uy,background_vert:dy,background_frag:fy,backgroundCube_vert:py,backgroundCube_frag:my,cube_vert:gy,cube_frag:yy,depth_vert:xy,depth_frag:_y,distanceRGBA_vert:vy,distanceRGBA_frag:My,equirect_vert:by,equirect_frag:Sy,linedashed_vert:Ey,linedashed_frag:wy,meshbasic_vert:Ty,meshbasic_frag:Ay,meshlambert_vert:Ry,meshlambert_frag:Cy,meshmatcap_vert:Py,meshmatcap_frag:Iy,meshnormal_vert:Ly,meshnormal_frag:Dy,meshphong_vert:Uy,meshphong_frag:Ny,meshphysical_vert:Fy,meshphysical_frag:Oy,meshtoon_vert:By,meshtoon_frag:zy,points_vert:ky,points_frag:Hy,shadow_vert:Vy,shadow_frag:Gy,sprite_vert:Wy,sprite_frag:Xy},Et={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},Kn={basic:{uniforms:un([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:un([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new It(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:un([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:un([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:un([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new It(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:un([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:un([Et.points,Et.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:un([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:un([Et.common,Et.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:un([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:un([Et.sprite,Et.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:un([Et.common,Et.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:un([Et.lights,Et.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};Kn.physical={uniforms:un([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};var ha={r:0,b:0,g:0},ys=new dn,qy=new te;function Yy(i,t,e,n,s,r,o){let a=new It(0),l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(b){let _=b.isScene===!0?b.background:null;return _&&_.isTexture&&(_=(b.backgroundBlurriness>0?e:t).get(_)),_}function y(b){let _=!1,x=g(b);x===null?f(a,l):x&&x.isColor&&(f(x,1),_=!0);let I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,_){let x=g(_);x&&(x.isCubeTexture||x.mapping===ll)?(h===void 0&&(h=new bt(new Pe(1,1,1),new se({name:"BackgroundCubeMaterial",uniforms:Mr(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ys.copy(_.backgroundRotation),ys.x*=-1,ys.y*=-1,ys.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(qy.makeRotationFromEuler(ys)),h.material.toneMapped=ne.getTransfer(x.colorSpace)!==me,(u!==x||d!==x.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,p=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new bt(new Cn(2,2),new se({name:"BackgroundMaterial",uniforms:Mr(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=ne.getTransfer(x.colorSpace)!==me,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,p=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function f(b,_){b.getRGB(ha,Of(i)),n.buffers.color.setClear(ha.r,ha.g,ha.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(b,_=1){a.set(b),l=_,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,f(a,l)},render:y,addToRenderList:m}}function Zy(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(M,U,k,V,q){let st=!1,H=u(V,k,U);r!==H&&(r=H,c(r.object)),st=p(M,V,k,q),st&&g(M,V,k,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(st||o)&&(o=!1,x(M,U,k,V),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,U,k){let V=k.wireframe===!0,q=n[M.id];q===void 0&&(q={},n[M.id]=q);let st=q[U.id];st===void 0&&(st={},q[U.id]=st);let H=st[V];return H===void 0&&(H=d(l()),st[V]=H),H}function d(M){let U=[],k=[],V=[];for(let q=0;q<e;q++)U[q]=0,k[q]=0,V[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:k,attributeDivisors:V,object:M,attributes:{},index:null}}function p(M,U,k,V){let q=r.attributes,st=U.attributes,H=0,$=k.getAttributes();for(let O in $)if($[O].location>=0){let lt=q[O],gt=st[O];if(gt===void 0&&(O==="instanceMatrix"&&M.instanceMatrix&&(gt=M.instanceMatrix),O==="instanceColor"&&M.instanceColor&&(gt=M.instanceColor)),lt===void 0||lt.attribute!==gt||gt&&lt.data!==gt.data)return!0;H++}return r.attributesNum!==H||r.index!==V}function g(M,U,k,V){let q={},st=U.attributes,H=0,$=k.getAttributes();for(let O in $)if($[O].location>=0){let lt=st[O];lt===void 0&&(O==="instanceMatrix"&&M.instanceMatrix&&(lt=M.instanceMatrix),O==="instanceColor"&&M.instanceColor&&(lt=M.instanceColor));let gt={};gt.attribute=lt,lt&&lt.data&&(gt.data=lt.data),q[O]=gt,H++}r.attributes=q,r.attributesNum=H,r.index=V}function y(){let M=r.newAttributes;for(let U=0,k=M.length;U<k;U++)M[U]=0}function m(M){f(M,0)}function f(M,U){let k=r.newAttributes,V=r.enabledAttributes,q=r.attributeDivisors;k[M]=1,V[M]===0&&(i.enableVertexAttribArray(M),V[M]=1),q[M]!==U&&(i.vertexAttribDivisor(M,U),q[M]=U)}function b(){let M=r.newAttributes,U=r.enabledAttributes;for(let k=0,V=U.length;k<V;k++)U[k]!==M[k]&&(i.disableVertexAttribArray(k),U[k]=0)}function _(M,U,k,V,q,st,H){H===!0?i.vertexAttribIPointer(M,U,k,q,st):i.vertexAttribPointer(M,U,k,V,q,st)}function x(M,U,k,V){y();let q=V.attributes,st=k.getAttributes(),H=U.defaultAttributeValues;for(let $ in st){let O=st[$];if(O.location>=0){let dt=q[$];if(dt===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(dt=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(dt=M.instanceColor)),dt!==void 0){let lt=dt.normalized,gt=dt.itemSize,xt=t.get(dt);if(xt===void 0)continue;let wt=xt.buffer,F=xt.type,D=xt.bytesPerElement,C=F===i.INT||F===i.UNSIGNED_INT||dt.gpuType===ru;if(dt.isInterleavedBufferAttribute){let w=dt.data,W=w.stride,rt=dt.offset;if(w.isInstancedInterleavedBuffer){for(let X=0;X<O.locationSize;X++)f(O.location+X,w.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=w.meshPerAttribute*w.count)}else for(let X=0;X<O.locationSize;X++)m(O.location+X);i.bindBuffer(i.ARRAY_BUFFER,wt);for(let X=0;X<O.locationSize;X++)_(O.location+X,gt/O.locationSize,F,lt,W*D,(rt+gt/O.locationSize*X)*D,C)}else{if(dt.isInstancedBufferAttribute){for(let w=0;w<O.locationSize;w++)f(O.location+w,dt.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let w=0;w<O.locationSize;w++)m(O.location+w);i.bindBuffer(i.ARRAY_BUFFER,wt);for(let w=0;w<O.locationSize;w++)_(O.location+w,gt/O.locationSize,F,lt,gt*D,gt/O.locationSize*w*D,C)}}else if(H!==void 0){let lt=H[$];if(lt!==void 0)switch(lt.length){case 2:i.vertexAttrib2fv(O.location,lt);break;case 3:i.vertexAttrib3fv(O.location,lt);break;case 4:i.vertexAttrib4fv(O.location,lt);break;default:i.vertexAttrib1fv(O.location,lt)}}}}b()}function I(){L();for(let M in n){let U=n[M];for(let k in U){let V=U[k];for(let q in V)h(V[q].object),delete V[q];delete U[k]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;let U=n[M.id];for(let k in U){let V=U[k];for(let q in V)h(V[q].object),delete V[q];delete U[k]}delete n[M.id]}function P(M){for(let U in n){let k=n[U];if(k[M.id]===void 0)continue;let V=k[M.id];for(let q in V)h(V[q].object),delete V[q];delete k[M.id]}}function L(){v(),o=!0,r!==s&&(r=s,c(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:v,dispose:I,releaseStatesOfGeometry:T,releaseStatesOfProgram:P,initAttributes:y,enableAttribute:m,disableUnusedAttributes:b}}function $y(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let y=0;y<u;y++)g+=h[y]*d[y];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Jy(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==Gn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let L=P===bn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==wi&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==ti&&!L)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:b,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:I,maxSamples:T}}function Ky(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Hn,a=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let b=r?0:n,_=b*4,x=f.clippingState||null;l.value=x,x=h(g,d,_,p);for(let I=0;I!==_;++I)x[I]=e[I];f.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let f=p+y*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,x=p;_!==y;++_,x+=4)o.copy(u[_]).applyMatrix4(b,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function jy(i){let t=new WeakMap;function e(o,a){return a===Fc?o.mapping=yr:a===Oc&&(o.mapping=xr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Fc||a===Oc)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new yh(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var $i=class extends ka{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},cr=4,Rd=[.125,.215,.35,.446,.526,.582],Ms=20,fc=new $i,Cd=new It,pc=null,mc=0,gc=0,yc=!1,_s=(1+Math.sqrt(5))/2,ir=1/_s,Pd=[new z(-_s,ir,0),new z(_s,ir,0),new z(-ir,0,_s),new z(ir,0,_s),new z(0,_s,-ir),new z(0,_s,ir),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],Ji=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){pc=this._renderer.getRenderTarget(),mc=this._renderer.getActiveCubeFace(),gc=this._renderer.getActiveMipmapLevel(),yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ld(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(pc,mc,gc),this._renderer.xr.enabled=yc,t.scissorTest=!1,ua(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===yr||t.mapping===xr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),pc=this._renderer.getRenderTarget(),mc=this._renderer.getActiveCubeFace(),gc=this._renderer.getActiveMipmapLevel(),yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Qn,minFilter:Qn,generateMipmaps:!1,type:bn,format:Gn,colorSpace:Dr,depthBuffer:!1},s=Id(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Id(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qy(r)),this._blurMaterial=tx(r,t,e)}return s}_compileMaterial(t){let e=new bt(this._lodPlanes[0],t);this._renderer.compile(e,fc)}_sceneToCubeUV(t,e,n,s){let a=new Ve(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Cd),h.toneMapping=Xi,h.autoClear=!1;let p=new Fe({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1}),g=new bt(new Pe,p),y=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,y=!0):(p.color.copy(Cd),y=!0);for(let f=0;f<6;f++){let b=f%3;b===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):b===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let _=this._cubeSize;ua(s,b*_,f>2?_:0,_,_),h.setRenderTarget(s),y&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===yr||t.mapping===xr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ld());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new bt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;ua(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,fc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Pd[(s-r-1)%Pd.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new bt(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ms-1),y=r/g,m=isFinite(r)?1+Math.floor(h*y):Ms;m>Ms&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ms}`);let f=[],b=0;for(let P=0;P<Ms;++P){let L=P/y,v=Math.exp(-L*L/2);f.push(v),P===0?b+=v:P<m&&(b+=2*v)}for(let P=0;P<f.length;P++)f[P]=f[P]/b;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;let x=this._sizeLods[s],I=3*x*(s>_-cr?s-_+cr:0),T=4*(this._cubeSize-x);ua(e,I,T,3*x,2*x),l.setRenderTarget(e),l.render(u,fc)}};function Qy(i){let t=[],e=[],n=[],s=i,r=i-cr+1+Rd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-cr?l=Rd[o-i+cr-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,y=3,m=2,f=1,b=new Float32Array(y*g*p),_=new Float32Array(m*g*p),x=new Float32Array(f*g*p);for(let T=0;T<p;T++){let P=T%3*2/3-1,L=T>2?0:-1,v=[P,L,0,P+2/3,L,0,P+2/3,L+1,0,P,L,0,P+2/3,L+1,0,P,L+1,0];b.set(v,y*g*T),_.set(d,m*g*T);let M=[T,T,T,T,T,T];x.set(M,f*g*T)}let I=new ie;I.setAttribute("position",new ue(b,y)),I.setAttribute("uv",new ue(_,m)),I.setAttribute("faceIndex",new ue(x,f)),t.push(I),s>cr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Id(i,t,e){let n=new Qe(i,t,e);return n.texture.mapping=ll,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ua(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function tx(i,t,e){let n=new Float32Array(Ms),s=new z(0,1,0);return new se({name:"SphericalGaussianBlur",defines:{n:Ms,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Ld(){return new se({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Dd(){return new se({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function fu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ex(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Fc||l===Oc,h=l===yr||l===xr;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Ji(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Ji(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function nx(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&co("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ix(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let y=d.morphAttributes[g];for(let m=0,f=y.length;m<f;m++)t.remove(y[m])}d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let y=p[g];for(let m=0,f=y.length;m<f;m++)t.update(y[m],i.ARRAY_BUFFER)}}function c(u){let d=[],p=u.index,g=u.attributes.position,y=0;if(p!==null){let b=p.array;y=p.version;for(let _=0,x=b.length;_<x;_+=3){let I=b[_+0],T=b[_+1],P=b[_+2];d.push(I,T,T,P,P,I)}}else if(g!==void 0){let b=g.array;y=g.version;for(let _=0,x=b.length/3-1;_<x;_+=3){let I=_+0,T=_+1,P=_+2;d.push(I,T,T,P,P,I)}}else return;let m=new(Nf(d)?za:Ba)(d,1);m.version=y;let f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function sx(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*o),e.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*o,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function u(d,p,g,y){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],y[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,y,0,g);let f=0;for(let b=0;b<g;b++)f+=p[b]*y[b];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function rx(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ox(i,t,e){let n=new WeakMap,s=new xe;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let v=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",v)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],_=0;p===!0&&(_=1),g===!0&&(_=2),y===!0&&(_=3);let x=a.attributes.position.count*_,I=1;x>t.maxTextureSize&&(I=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let T=new Float32Array(x*I*4*u),P=new Oa(T,x,I,u);P.type=ti,P.needsUpdate=!0;let L=_*4;for(let M=0;M<u;M++){let U=m[M],k=f[M],V=b[M],q=x*I*4*M;for(let st=0;st<U.count;st++){let H=st*L;p===!0&&(s.fromBufferAttribute(U,st),T[q+H+0]=s.x,T[q+H+1]=s.y,T[q+H+2]=s.z,T[q+H+3]=0),g===!0&&(s.fromBufferAttribute(k,st),T[q+H+4]=s.x,T[q+H+5]=s.y,T[q+H+6]=s.z,T[q+H+7]=0),y===!0&&(s.fromBufferAttribute(V,st),T[q+H+8]=s.x,T[q+H+9]=s.y,T[q+H+10]=s.z,T[q+H+11]=V.itemSize===4?s.w:1)}}d={count:u,texture:P,size:new et(x,I)},n.set(a,d),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let y=0;y<c.length;y++)p+=c[y];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function ax(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Va=class extends je{constructor(t,e,n,s,r,o,a,l,c,h=dr){if(h!==dr&&h!==vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===dr&&(n=Es),n===void 0&&h===vr&&(n=_r),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Mn,this.minFilter=l!==void 0?l:Mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},zf=new je,Ud=new Va(1,1),kf=new Oa,Hf=new mh,Vf=new Ha,Nd=[],Fd=[],Od=new Float32Array(16),Bd=new Float32Array(9),zd=new Float32Array(4);function Ur(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Nd[s];if(r===void 0&&(r=new Float32Array(s),Nd[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Xe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function qe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function hl(i,t){let e=Fd[t];e===void 0&&(e=new Int32Array(t),Fd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function lx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function cx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;i.uniform2fv(this.addr,t),qe(e,t)}}function hx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Xe(e,t))return;i.uniform3fv(this.addr,t),qe(e,t)}}function ux(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;i.uniform4fv(this.addr,t),qe(e,t)}}function dx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;zd.set(n),i.uniformMatrix2fv(this.addr,!1,zd),qe(e,n)}}function fx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;Bd.set(n),i.uniformMatrix3fv(this.addr,!1,Bd),qe(e,n)}}function px(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;Od.set(n),i.uniformMatrix4fv(this.addr,!1,Od),qe(e,n)}}function mx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function gx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;i.uniform2iv(this.addr,t),qe(e,t)}}function yx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;i.uniform3iv(this.addr,t),qe(e,t)}}function xx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;i.uniform4iv(this.addr,t),qe(e,t)}}function _x(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function vx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;i.uniform2uiv(this.addr,t),qe(e,t)}}function Mx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;i.uniform3uiv(this.addr,t),qe(e,t)}}function bx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;i.uniform4uiv(this.addr,t),qe(e,t)}}function Sx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ud.compareFunction=Uf,r=Ud):r=zf,e.setTexture2D(t||r,s)}function Ex(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Hf,s)}function wx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Vf,s)}function Tx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||kf,s)}function Ax(i){switch(i){case 5126:return lx;case 35664:return cx;case 35665:return hx;case 35666:return ux;case 35674:return dx;case 35675:return fx;case 35676:return px;case 5124:case 35670:return mx;case 35667:case 35671:return gx;case 35668:case 35672:return yx;case 35669:case 35673:return xx;case 5125:return _x;case 36294:return vx;case 36295:return Mx;case 36296:return bx;case 35678:case 36198:case 36298:case 36306:case 35682:return Sx;case 35679:case 36299:case 36307:return Ex;case 35680:case 36300:case 36308:case 36293:return wx;case 36289:case 36303:case 36311:case 36292:return Tx}}function Rx(i,t){i.uniform1fv(this.addr,t)}function Cx(i,t){let e=Ur(t,this.size,2);i.uniform2fv(this.addr,e)}function Px(i,t){let e=Ur(t,this.size,3);i.uniform3fv(this.addr,e)}function Ix(i,t){let e=Ur(t,this.size,4);i.uniform4fv(this.addr,e)}function Lx(i,t){let e=Ur(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Dx(i,t){let e=Ur(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ux(i,t){let e=Ur(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Nx(i,t){i.uniform1iv(this.addr,t)}function Fx(i,t){i.uniform2iv(this.addr,t)}function Ox(i,t){i.uniform3iv(this.addr,t)}function Bx(i,t){i.uniform4iv(this.addr,t)}function zx(i,t){i.uniform1uiv(this.addr,t)}function kx(i,t){i.uniform2uiv(this.addr,t)}function Hx(i,t){i.uniform3uiv(this.addr,t)}function Vx(i,t){i.uniform4uiv(this.addr,t)}function Gx(i,t,e){let n=this.cache,s=t.length,r=hl(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||zf,r[o])}function Wx(i,t,e){let n=this.cache,s=t.length,r=hl(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Hf,r[o])}function Xx(i,t,e){let n=this.cache,s=t.length,r=hl(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Vf,r[o])}function qx(i,t,e){let n=this.cache,s=t.length,r=hl(e,s);Xe(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||kf,r[o])}function Yx(i){switch(i){case 5126:return Rx;case 35664:return Cx;case 35665:return Px;case 35666:return Ix;case 35674:return Lx;case 35675:return Dx;case 35676:return Ux;case 5124:case 35670:return Nx;case 35667:case 35671:return Fx;case 35668:case 35672:return Ox;case 35669:case 35673:return Bx;case 5125:return zx;case 36294:return kx;case 36295:return Hx;case 36296:return Vx;case 35678:case 36198:case 36298:case 36306:case 35682:return Gx;case 35679:case 36299:case 36307:return Wx;case 35680:case 36300:case 36308:case 36293:return Xx;case 36289:case 36303:case 36311:case 36292:return qx}}var xh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ax(e.type)}},_h=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Yx(e.type)}},vh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},xc=/(\w+)(\])?(\[|\.)?/g;function kd(i,t){i.seq.push(t),i.map[t.id]=t}function Zx(i,t,e){let n=i.name,s=n.length;for(xc.lastIndex=0;;){let r=xc.exec(n),o=xc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){kd(e,c===void 0?new xh(a,i,t):new _h(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new vh(a),kd(e,u)),e=u}}}var mr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Zx(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Hd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var $x=37297,Jx=0;function Kx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Vd=new Vt;function jx(i){ne._getMatrix(Vd,ne.workingColorSpace,i);let t=`mat3( ${Vd.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(i)){case cl:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Gd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Kx(i.getShaderSource(t),o)}else return s}function Qx(i,t){let e=jx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function t_(i,t){let e;switch(t){case eu:e="Linear";break;case nu:e="Reinhard";break;case iu:e="Cineon";break;case Ir:e="ACESFilmic";break;case su:e="AgX";break;case Lr:e="Neutral";break;case ym:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var da=new z;function e_(){ne.getLuminanceCoefficients(da);let i=da.x.toFixed(4),t=da.y.toFixed(4),e=da.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function n_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ho).join(`
`)}function i_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function s_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ho(i){return i!==""}function Wd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var r_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mh(i){return i.replace(r_,a_)}var o_=new Map;function a_(i,t){let e=Kt[t];if(e===void 0){let n=o_.get(t);if(n!==void 0)e=Kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Mh(e)}var l_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qd(i){return i.replace(l_,c_)}function c_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Yd(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function h_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Mf?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===tu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===vi&&(t="SHADOWMAP_TYPE_VSM"),t}function u_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case yr:case xr:t="ENVMAP_TYPE_CUBE";break;case ll:t="ENVMAP_TYPE_CUBE_UV";break}return t}function d_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case xr:t="ENVMAP_MODE_REFRACTION";break}return t}function f_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case bf:t="ENVMAP_BLENDING_MULTIPLY";break;case mm:t="ENVMAP_BLENDING_MIX";break;case gm:t="ENVMAP_BLENDING_ADD";break}return t}function p_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function m_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=h_(e),c=u_(e),h=d_(e),u=f_(e),d=p_(e),p=n_(e),g=i_(r),y=s.createProgram(),m,f,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ho).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ho).join(`
`),f.length>0&&(f+=`
`)):(m=[Yd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ho).join(`
`),f=[Yd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xi?"#define TONE_MAPPING":"",e.toneMapping!==Xi?Kt.tonemapping_pars_fragment:"",e.toneMapping!==Xi?t_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,Qx("linearToOutputTexel",e.outputColorSpace),e_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ho).join(`
`)),o=Mh(o),o=Wd(o,e),o=Xd(o,e),a=Mh(a),a=Wd(a,e),a=Xd(a,e),o=qd(o),a=qd(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===od?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===od?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let _=b+m+o,x=b+f+a,I=Hd(s,s.VERTEX_SHADER,_),T=Hd(s,s.FRAGMENT_SHADER,x);s.attachShader(y,I),s.attachShader(y,T),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function P(U){if(i.debug.checkShaderErrors){let k=s.getProgramInfoLog(y).trim(),V=s.getShaderInfoLog(I).trim(),q=s.getShaderInfoLog(T).trim(),st=!0,H=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(st=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,I,T);else{let $=Gd(s,I,"vertex"),O=Gd(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+k+`
`+$+`
`+O)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(V===""||q==="")&&(H=!1);H&&(U.diagnostics={runnable:st,programLog:k,vertexShader:{log:V,prefix:m},fragmentShader:{log:q,prefix:f}})}s.deleteShader(I),s.deleteShader(T),L=new mr(s,y),v=s_(s,y)}let L;this.getUniforms=function(){return L===void 0&&P(this),L};let v;this.getAttributes=function(){return v===void 0&&P(this),v};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(y,$x)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Jx++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=I,this.fragmentShader=T,this}var g_=0,bh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Sh(t),e.set(t,n)),n}},Sh=class{constructor(t){this.id=g_++,this.code=t,this.usedTimes=0}};function y_(i,t,e,n,s,r,o){let a=new xo,l=new bh,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,M,U,k,V){let q=k.fog,st=V.geometry,H=v.isMeshStandardMaterial?k.environment:null,$=(v.isMeshStandardMaterial?e:t).get(v.envMap||H),O=$&&$.mapping===ll?$.image.height:null,dt=g[v.type];v.precision!==null&&(p=s.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));let lt=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,gt=lt!==void 0?lt.length:0,xt=0;st.morphAttributes.position!==void 0&&(xt=1),st.morphAttributes.normal!==void 0&&(xt=2),st.morphAttributes.color!==void 0&&(xt=3);let wt,F,D,C;if(dt){let ge=Kn[dt];wt=ge.vertexShader,F=ge.fragmentShader}else wt=v.vertexShader,F=v.fragmentShader,l.update(v),D=l.getVertexShaderID(v),C=l.getFragmentShaderID(v);let w=i.getRenderTarget(),W=i.state.buffers.depth.getReversed(),rt=V.isInstancedMesh===!0,X=V.isBatchedMesh===!0,pt=!!v.map,J=!!v.matcap,Z=!!$,E=!!v.aoMap,nt=!!v.lightMap,tt=!!v.bumpMap,it=!!v.normalMap,B=!!v.displacementMap,N=!!v.emissiveMap,ht=!!v.metalnessMap,R=!!v.roughnessMap,S=v.anisotropy>0,Q=v.clearcoat>0,ct=v.dispersion>0,mt=v.iridescence>0,ft=v.sheen>0,Ut=v.transmission>0,St=S&&!!v.anisotropyMap,At=Q&&!!v.clearcoatMap,Yt=Q&&!!v.clearcoatNormalMap,vt=Q&&!!v.clearcoatRoughnessMap,Lt=mt&&!!v.iridescenceMap,Ht=mt&&!!v.iridescenceThicknessMap,Gt=ft&&!!v.sheenColorMap,Dt=ft&&!!v.sheenRoughnessMap,ae=!!v.specularMap,Jt=!!v.specularColorMap,Ee=!!v.specularIntensityMap,Y=Ut&&!!v.transmissionMap,Tt=Ut&&!!v.thicknessMap,ut=!!v.gradientMap,yt=!!v.alphaMap,Pt=v.alphaTest>0,Rt=!!v.alphaHash,Zt=!!v.extensions,Ue=Xi;v.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Ue=i.toneMapping);let nn={shaderID:dt,shaderType:v.type,shaderName:v.name,vertexShader:wt,fragmentShader:F,defines:v.defines,customVertexShaderID:D,customFragmentShaderID:C,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:X,batchingColor:X&&V._colorsTexture!==null,instancing:rt,instancingColor:rt&&V.instanceColor!==null,instancingMorph:rt&&V.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:w===null?i.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Dr,alphaToCoverage:!!v.alphaToCoverage,map:pt,matcap:J,envMap:Z,envMapMode:Z&&$.mapping,envMapCubeUVHeight:O,aoMap:E,lightMap:nt,bumpMap:tt,normalMap:it,displacementMap:d&&B,emissiveMap:N,normalMapObjectSpace:it&&v.normalMapType===Mm,normalMapTangentSpace:it&&v.normalMapType===Df,metalnessMap:ht,roughnessMap:R,anisotropy:S,anisotropyMap:St,clearcoat:Q,clearcoatMap:At,clearcoatNormalMap:Yt,clearcoatRoughnessMap:vt,dispersion:ct,iridescence:mt,iridescenceMap:Lt,iridescenceThicknessMap:Ht,sheen:ft,sheenColorMap:Gt,sheenRoughnessMap:Dt,specularMap:ae,specularColorMap:Jt,specularIntensityMap:Ee,transmission:Ut,transmissionMap:Y,thicknessMap:Tt,gradientMap:ut,opaque:v.transparent===!1&&v.blending===ur&&v.alphaToCoverage===!1,alphaMap:yt,alphaTest:Pt,alphaHash:Rt,combine:v.combine,mapUv:pt&&y(v.map.channel),aoMapUv:E&&y(v.aoMap.channel),lightMapUv:nt&&y(v.lightMap.channel),bumpMapUv:tt&&y(v.bumpMap.channel),normalMapUv:it&&y(v.normalMap.channel),displacementMapUv:B&&y(v.displacementMap.channel),emissiveMapUv:N&&y(v.emissiveMap.channel),metalnessMapUv:ht&&y(v.metalnessMap.channel),roughnessMapUv:R&&y(v.roughnessMap.channel),anisotropyMapUv:St&&y(v.anisotropyMap.channel),clearcoatMapUv:At&&y(v.clearcoatMap.channel),clearcoatNormalMapUv:Yt&&y(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&y(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Lt&&y(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ht&&y(v.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&y(v.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&y(v.sheenRoughnessMap.channel),specularMapUv:ae&&y(v.specularMap.channel),specularColorMapUv:Jt&&y(v.specularColorMap.channel),specularIntensityMapUv:Ee&&y(v.specularIntensityMap.channel),transmissionMapUv:Y&&y(v.transmissionMap.channel),thicknessMapUv:Tt&&y(v.thicknessMap.channel),alphaMapUv:yt&&y(v.alphaMap.channel),vertexTangents:!!st.attributes.tangent&&(it||S),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!st.attributes.uv&&(pt||yt),fog:!!q,useFog:v.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:W,skinning:V.isSkinnedMesh===!0,morphTargets:st.morphAttributes.position!==void 0,morphNormals:st.morphAttributes.normal!==void 0,morphColors:st.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:xt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ue,decodeVideoTexture:pt&&v.map.isVideoTexture===!0&&ne.getTransfer(v.map.colorSpace)===me,decodeVideoTextureEmissive:N&&v.emissiveMap.isVideoTexture===!0&&ne.getTransfer(v.emissiveMap.colorSpace)===me,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===$e,flipSided:v.side===De,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Zt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&v.extensions.multiDraw===!0||X)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return nn.vertexUv1s=c.has(1),nn.vertexUv2s=c.has(2),nn.vertexUv3s=c.has(3),c.clear(),nn}function f(v){let M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(let U in v.defines)M.push(U),M.push(v.defines[U]);return v.isRawShaderMaterial===!1&&(b(M,v),_(M,v),M.push(i.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function b(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function _(v,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),v.push(a.mask)}function x(v){let M=g[v.type],U;if(M){let k=Kn[M];U=is.clone(k.uniforms)}else U=v.uniforms;return U}function I(v,M){let U;for(let k=0,V=h.length;k<V;k++){let q=h[k];if(q.cacheKey===M){U=q,++U.usedTimes;break}}return U===void 0&&(U=new m_(i,M,v,r),h.push(U)),U}function T(v){if(--v.usedTimes===0){let M=h.indexOf(v);h[M]=h[h.length-1],h.pop(),v.destroy()}}function P(v){l.remove(v)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:I,releaseProgram:T,releaseShaderCache:P,programs:h,dispose:L}}function x_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function __(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Zd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function $d(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,p,g,y,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:y,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=y,f.group=m),t++,f}function a(u,d,p,g,y,m){let f=o(u,d,p,g,y,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(u,d,p,g,y,m){let f=o(u,d,p,g,y,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||__),n.length>1&&n.sort(d||Zd),s.length>1&&s.sort(d||Zd)}function h(){for(let u=t,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function v_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new $d,i.set(n,[o])):s>=r.length?(o=new $d,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function M_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new It};break;case"SpotLight":e={position:new z,direction:new z,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new It,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new It,groundColor:new It};break;case"RectAreaLight":e={color:new It,position:new z,halfWidth:new z,halfHeight:new z};break}return i[t.id]=e,e}}}function b_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var S_=0;function E_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function w_(i){let t=new M_,e=b_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);let s=new z,r=new te,o=new te;function a(c){let h=0,u=0,d=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let p=0,g=0,y=0,m=0,f=0,b=0,_=0,x=0,I=0,T=0,P=0;c.sort(E_);for(let v=0,M=c.length;v<M;v++){let U=c[v],k=U.color,V=U.intensity,q=U.distance,st=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=k.r*V,u+=k.g*V,d+=k.b*V;else if(U.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(U.sh.coefficients[H],V);P++}else if(U.isDirectionalLight){let H=t.get(U);if(H.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let $=U.shadow,O=e.get(U);O.shadowIntensity=$.intensity,O.shadowBias=$.bias,O.shadowNormalBias=$.normalBias,O.shadowRadius=$.radius,O.shadowMapSize=$.mapSize,n.directionalShadow[p]=O,n.directionalShadowMap[p]=st,n.directionalShadowMatrix[p]=U.shadow.matrix,b++}n.directional[p]=H,p++}else if(U.isSpotLight){let H=t.get(U);H.position.setFromMatrixPosition(U.matrixWorld),H.color.copy(k).multiplyScalar(V),H.distance=q,H.coneCos=Math.cos(U.angle),H.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),H.decay=U.decay,n.spot[y]=H;let $=U.shadow;if(U.map&&(n.spotLightMap[I]=U.map,I++,$.updateMatrices(U),U.castShadow&&T++),n.spotLightMatrix[y]=$.matrix,U.castShadow){let O=e.get(U);O.shadowIntensity=$.intensity,O.shadowBias=$.bias,O.shadowNormalBias=$.normalBias,O.shadowRadius=$.radius,O.shadowMapSize=$.mapSize,n.spotShadow[y]=O,n.spotShadowMap[y]=st,x++}y++}else if(U.isRectAreaLight){let H=t.get(U);H.color.copy(k).multiplyScalar(V),H.halfWidth.set(U.width*.5,0,0),H.halfHeight.set(0,U.height*.5,0),n.rectArea[m]=H,m++}else if(U.isPointLight){let H=t.get(U);if(H.color.copy(U.color).multiplyScalar(U.intensity),H.distance=U.distance,H.decay=U.decay,U.castShadow){let $=U.shadow,O=e.get(U);O.shadowIntensity=$.intensity,O.shadowBias=$.bias,O.shadowNormalBias=$.normalBias,O.shadowRadius=$.radius,O.shadowMapSize=$.mapSize,O.shadowCameraNear=$.camera.near,O.shadowCameraFar=$.camera.far,n.pointShadow[g]=O,n.pointShadowMap[g]=st,n.pointShadowMatrix[g]=U.shadow.matrix,_++}n.point[g]=H,g++}else if(U.isHemisphereLight){let H=t.get(U);H.skyColor.copy(U.color).multiplyScalar(V),H.groundColor.copy(U.groundColor).multiplyScalar(V),n.hemi[f]=H,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let L=n.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==y||L.rectAreaLength!==m||L.hemiLength!==f||L.numDirectionalShadows!==b||L.numPointShadows!==_||L.numSpotShadows!==x||L.numSpotMaps!==I||L.numLightProbes!==P)&&(n.directional.length=p,n.spot.length=y,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=x+I-T,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=P,L.directionalLength=p,L.pointLength=g,L.spotLength=y,L.rectAreaLength=m,L.hemiLength=f,L.numDirectionalShadows=b,L.numPointShadows=_,L.numSpotShadows=x,L.numSpotMaps=I,L.numLightProbes=P,n.version=S_++)}function l(c,h){let u=0,d=0,p=0,g=0,y=0,m=h.matrixWorldInverse;for(let f=0,b=c.length;f<b;f++){let _=c[f];if(_.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(_.isSpotLight){let x=n.spot[p];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),p++}else if(_.isRectAreaLight){let x=n.rectArea[g];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){let x=n.hemi[y];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:n}}function Jd(i){let t=new w_(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function T_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Jd(i),t.set(s,[a])):r>=o.length?(a=new Jd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Eh=class extends si{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=_m,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},wh=class extends si{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},A_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,R_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function C_(i,t,e){let n=new _o,s=new et,r=new et,o=new xe,a=new Eh({depthPacking:vm}),l=new wh,c={},h=e.maxTextureSize,u={[Yi]:De,[De]:Yi,[$e]:$e},d=new se({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:A_,fragmentShader:R_}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new ie;g.setAttribute("position",new ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new bt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mf;let f=this.type;this.render=function(T,P,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let v=i.getRenderTarget(),M=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),k=i.state;k.setBlending(ei),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let V=f!==vi&&this.type===vi,q=f===vi&&this.type!==vi;for(let st=0,H=T.length;st<H;st++){let $=T[st],O=$.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let dt=O.getFrameExtents();if(s.multiply(dt),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/dt.x),s.x=r.x*dt.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/dt.y),s.y=r.y*dt.y,O.mapSize.y=r.y)),O.map===null||V===!0||q===!0){let gt=this.type!==vi?{minFilter:Mn,magFilter:Mn}:{};O.map!==null&&O.map.dispose(),O.map=new Qe(s.x,s.y,gt),O.map.texture.name=$.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();let lt=O.getViewportCount();for(let gt=0;gt<lt;gt++){let xt=O.getViewport(gt);o.set(r.x*xt.x,r.y*xt.y,r.x*xt.z,r.y*xt.w),k.viewport(o),O.updateMatrices($,gt),n=O.getFrustum(),x(P,L,O.camera,$,this.type)}O.isPointLightShadow!==!0&&this.type===vi&&b(O,L),O.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(v,M,U)};function b(T,P){let L=t.update(y);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Qe(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(P,null,L,d,y,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(P,null,L,p,y,null)}function _(T,P,L,v){let M=null,U=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0)M=U;else if(M=L.isPointLight===!0?l:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){let k=M.uuid,V=P.uuid,q=c[k];q===void 0&&(q={},c[k]=q);let st=q[V];st===void 0&&(st=M.clone(),q[V]=st,P.addEventListener("dispose",I)),M=st}if(M.visible=P.visible,M.wireframe=P.wireframe,v===vi?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:u[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let k=i.properties.get(M);k.light=L}return M}function x(T,P,L,v,M){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===vi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);let V=t.update(T),q=T.material;if(Array.isArray(q)){let st=V.groups;for(let H=0,$=st.length;H<$;H++){let O=st[H],dt=q[O.materialIndex];if(dt&&dt.visible){let lt=_(T,dt,v,M);T.onBeforeShadow(i,T,P,L,V,lt,O),i.renderBufferDirect(L,null,V,lt,T,O),T.onAfterShadow(i,T,P,L,V,lt,O)}}}else if(q.visible){let st=_(T,q,v,M);T.onBeforeShadow(i,T,P,L,V,st,null),i.renderBufferDirect(L,null,V,st,T,null),T.onAfterShadow(i,T,P,L,V,st,null)}}let k=T.children;for(let V=0,q=k.length;V<q;V++)x(k[V],P,L,v,M)}function I(T){T.target.removeEventListener("dispose",I);for(let L in c){let v=c[L],M=T.target.uuid;M in v&&(v[M].dispose(),delete v[M])}}}var P_={[Cc]:Pc,[Ic]:Uc,[Lc]:Nc,[gr]:Dc,[Pc]:Cc,[Uc]:Ic,[Nc]:Lc,[Dc]:gr};function I_(i,t){function e(){let Y=!1,Tt=new xe,ut=null,yt=new xe(0,0,0,0);return{setMask:function(Pt){ut!==Pt&&!Y&&(i.colorMask(Pt,Pt,Pt,Pt),ut=Pt)},setLocked:function(Pt){Y=Pt},setClear:function(Pt,Rt,Zt,Ue,nn){nn===!0&&(Pt*=Ue,Rt*=Ue,Zt*=Ue),Tt.set(Pt,Rt,Zt,Ue),yt.equals(Tt)===!1&&(i.clearColor(Pt,Rt,Zt,Ue),yt.copy(Tt))},reset:function(){Y=!1,ut=null,yt.set(-1,0,0,0)}}}function n(){let Y=!1,Tt=!1,ut=null,yt=null,Pt=null;return{setReversed:function(Rt){if(Tt!==Rt){let Zt=t.get("EXT_clip_control");Tt?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT);let Ue=Pt;Pt=null,this.setClear(Ue)}Tt=Rt},getReversed:function(){return Tt},setTest:function(Rt){Rt?w(i.DEPTH_TEST):W(i.DEPTH_TEST)},setMask:function(Rt){ut!==Rt&&!Y&&(i.depthMask(Rt),ut=Rt)},setFunc:function(Rt){if(Tt&&(Rt=P_[Rt]),yt!==Rt){switch(Rt){case Cc:i.depthFunc(i.NEVER);break;case Pc:i.depthFunc(i.ALWAYS);break;case Ic:i.depthFunc(i.LESS);break;case gr:i.depthFunc(i.LEQUAL);break;case Lc:i.depthFunc(i.EQUAL);break;case Dc:i.depthFunc(i.GEQUAL);break;case Uc:i.depthFunc(i.GREATER);break;case Nc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}yt=Rt}},setLocked:function(Rt){Y=Rt},setClear:function(Rt){Pt!==Rt&&(Tt&&(Rt=1-Rt),i.clearDepth(Rt),Pt=Rt)},reset:function(){Y=!1,ut=null,yt=null,Pt=null,Tt=!1}}}function s(){let Y=!1,Tt=null,ut=null,yt=null,Pt=null,Rt=null,Zt=null,Ue=null,nn=null;return{setTest:function(ge){Y||(ge?w(i.STENCIL_TEST):W(i.STENCIL_TEST))},setMask:function(ge){Tt!==ge&&!Y&&(i.stencilMask(ge),Tt=ge)},setFunc:function(ge,Fn,di){(ut!==ge||yt!==Fn||Pt!==di)&&(i.stencilFunc(ge,Fn,di),ut=ge,yt=Fn,Pt=di)},setOp:function(ge,Fn,di){(Rt!==ge||Zt!==Fn||Ue!==di)&&(i.stencilOp(ge,Fn,di),Rt=ge,Zt=Fn,Ue=di)},setLocked:function(ge){Y=ge},setClear:function(ge){nn!==ge&&(i.clearStencil(ge),nn=ge)},reset:function(){Y=!1,Tt=null,ut=null,yt=null,Pt=null,Rt=null,Zt=null,Ue=null,nn=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,p=[],g=null,y=!1,m=null,f=null,b=null,_=null,x=null,I=null,T=null,P=new It(0,0,0),L=0,v=!1,M=null,U=null,k=null,V=null,q=null,st=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,$=0,O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(O)[1]),H=$>=1):O.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),H=$>=2);let dt=null,lt={},gt=i.getParameter(i.SCISSOR_BOX),xt=i.getParameter(i.VIEWPORT),wt=new xe().fromArray(gt),F=new xe().fromArray(xt);function D(Y,Tt,ut,yt){let Pt=new Uint8Array(4),Rt=i.createTexture();i.bindTexture(Y,Rt),i.texParameteri(Y,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Y,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Zt=0;Zt<ut;Zt++)Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?i.texImage3D(Tt,0,i.RGBA,1,1,yt,0,i.RGBA,i.UNSIGNED_BYTE,Pt):i.texImage2D(Tt+Zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pt);return Rt}let C={};C[i.TEXTURE_2D]=D(i.TEXTURE_2D,i.TEXTURE_2D,1),C[i.TEXTURE_CUBE_MAP]=D(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),C[i.TEXTURE_2D_ARRAY]=D(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),C[i.TEXTURE_3D]=D(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),w(i.DEPTH_TEST),o.setFunc(gr),tt(!1),it(Qu),w(i.CULL_FACE),E(ei);function w(Y){h[Y]!==!0&&(i.enable(Y),h[Y]=!0)}function W(Y){h[Y]!==!1&&(i.disable(Y),h[Y]=!1)}function rt(Y,Tt){return u[Y]!==Tt?(i.bindFramebuffer(Y,Tt),u[Y]=Tt,Y===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Tt),Y===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Tt),!0):!1}function X(Y,Tt){let ut=p,yt=!1;if(Y){ut=d.get(Tt),ut===void 0&&(ut=[],d.set(Tt,ut));let Pt=Y.textures;if(ut.length!==Pt.length||ut[0]!==i.COLOR_ATTACHMENT0){for(let Rt=0,Zt=Pt.length;Rt<Zt;Rt++)ut[Rt]=i.COLOR_ATTACHMENT0+Rt;ut.length=Pt.length,yt=!0}}else ut[0]!==i.BACK&&(ut[0]=i.BACK,yt=!0);yt&&i.drawBuffers(ut)}function pt(Y){return g!==Y?(i.useProgram(Y),g=Y,!0):!1}let J={[vs]:i.FUNC_ADD,[jp]:i.FUNC_SUBTRACT,[Qp]:i.FUNC_REVERSE_SUBTRACT};J[tm]=i.MIN,J[em]=i.MAX;let Z={[nm]:i.ZERO,[im]:i.ONE,[sm]:i.SRC_COLOR,[Ac]:i.SRC_ALPHA,[hm]:i.SRC_ALPHA_SATURATE,[lm]:i.DST_COLOR,[om]:i.DST_ALPHA,[rm]:i.ONE_MINUS_SRC_COLOR,[Rc]:i.ONE_MINUS_SRC_ALPHA,[cm]:i.ONE_MINUS_DST_COLOR,[am]:i.ONE_MINUS_DST_ALPHA,[um]:i.CONSTANT_COLOR,[dm]:i.ONE_MINUS_CONSTANT_COLOR,[fm]:i.CONSTANT_ALPHA,[pm]:i.ONE_MINUS_CONSTANT_ALPHA};function E(Y,Tt,ut,yt,Pt,Rt,Zt,Ue,nn,ge){if(Y===ei){y===!0&&(W(i.BLEND),y=!1);return}if(y===!1&&(w(i.BLEND),y=!0),Y!==Kp){if(Y!==m||ge!==v){if((f!==vs||x!==vs)&&(i.blendEquation(i.FUNC_ADD),f=vs,x=vs),ge)switch(Y){case ur:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ne:i.blendFunc(i.ONE,i.ONE);break;case td:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ed:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case ur:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ne:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case td:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ed:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}b=null,_=null,I=null,T=null,P.set(0,0,0),L=0,m=Y,v=ge}return}Pt=Pt||Tt,Rt=Rt||ut,Zt=Zt||yt,(Tt!==f||Pt!==x)&&(i.blendEquationSeparate(J[Tt],J[Pt]),f=Tt,x=Pt),(ut!==b||yt!==_||Rt!==I||Zt!==T)&&(i.blendFuncSeparate(Z[ut],Z[yt],Z[Rt],Z[Zt]),b=ut,_=yt,I=Rt,T=Zt),(Ue.equals(P)===!1||nn!==L)&&(i.blendColor(Ue.r,Ue.g,Ue.b,nn),P.copy(Ue),L=nn),m=Y,v=!1}function nt(Y,Tt){Y.side===$e?W(i.CULL_FACE):w(i.CULL_FACE);let ut=Y.side===De;Tt&&(ut=!ut),tt(ut),Y.blending===ur&&Y.transparent===!1?E(ei):E(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),o.setFunc(Y.depthFunc),o.setTest(Y.depthTest),o.setMask(Y.depthWrite),r.setMask(Y.colorWrite);let yt=Y.stencilWrite;a.setTest(yt),yt&&(a.setMask(Y.stencilWriteMask),a.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),a.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),N(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?w(i.SAMPLE_ALPHA_TO_COVERAGE):W(i.SAMPLE_ALPHA_TO_COVERAGE)}function tt(Y){M!==Y&&(Y?i.frontFace(i.CW):i.frontFace(i.CCW),M=Y)}function it(Y){Y!==$p?(w(i.CULL_FACE),Y!==U&&(Y===Qu?i.cullFace(i.BACK):Y===Jp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):W(i.CULL_FACE),U=Y}function B(Y){Y!==k&&(H&&i.lineWidth(Y),k=Y)}function N(Y,Tt,ut){Y?(w(i.POLYGON_OFFSET_FILL),(V!==Tt||q!==ut)&&(i.polygonOffset(Tt,ut),V=Tt,q=ut)):W(i.POLYGON_OFFSET_FILL)}function ht(Y){Y?w(i.SCISSOR_TEST):W(i.SCISSOR_TEST)}function R(Y){Y===void 0&&(Y=i.TEXTURE0+st-1),dt!==Y&&(i.activeTexture(Y),dt=Y)}function S(Y,Tt,ut){ut===void 0&&(dt===null?ut=i.TEXTURE0+st-1:ut=dt);let yt=lt[ut];yt===void 0&&(yt={type:void 0,texture:void 0},lt[ut]=yt),(yt.type!==Y||yt.texture!==Tt)&&(dt!==ut&&(i.activeTexture(ut),dt=ut),i.bindTexture(Y,Tt||C[Y]),yt.type=Y,yt.texture=Tt)}function Q(){let Y=lt[dt];Y!==void 0&&Y.type!==void 0&&(i.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function ct(){try{i.compressedTexImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function mt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ft(){try{i.texSubImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ut(){try{i.texSubImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function St(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function At(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Yt(){try{i.texStorage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function vt(){try{i.texStorage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Lt(){try{i.texImage2D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ht(){try{i.texImage3D.apply(i,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Gt(Y){wt.equals(Y)===!1&&(i.scissor(Y.x,Y.y,Y.z,Y.w),wt.copy(Y))}function Dt(Y){F.equals(Y)===!1&&(i.viewport(Y.x,Y.y,Y.z,Y.w),F.copy(Y))}function ae(Y,Tt){let ut=c.get(Tt);ut===void 0&&(ut=new WeakMap,c.set(Tt,ut));let yt=ut.get(Y);yt===void 0&&(yt=i.getUniformBlockIndex(Tt,Y.name),ut.set(Y,yt))}function Jt(Y,Tt){let yt=c.get(Tt).get(Y);l.get(Tt)!==yt&&(i.uniformBlockBinding(Tt,yt,Y.__bindingPointIndex),l.set(Tt,yt))}function Ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},dt=null,lt={},u={},d=new WeakMap,p=[],g=null,y=!1,m=null,f=null,b=null,_=null,x=null,I=null,T=null,P=new It(0,0,0),L=0,v=!1,M=null,U=null,k=null,V=null,q=null,wt.set(0,0,i.canvas.width,i.canvas.height),F.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:w,disable:W,bindFramebuffer:rt,drawBuffers:X,useProgram:pt,setBlending:E,setMaterial:nt,setFlipSided:tt,setCullFace:it,setLineWidth:B,setPolygonOffset:N,setScissorTest:ht,activeTexture:R,bindTexture:S,unbindTexture:Q,compressedTexImage2D:ct,compressedTexImage3D:mt,texImage2D:Lt,texImage3D:Ht,updateUBOMapping:ae,uniformBlockBinding:Jt,texStorage2D:Yt,texStorage3D:vt,texSubImage2D:ft,texSubImage3D:Ut,compressedTexSubImage2D:St,compressedTexSubImage3D:At,scissor:Gt,viewport:Dt,reset:Ee}}function Kd(i,t,e,n){let s=L_(n);switch(e){case Af:return i*t;case Cf:return i*t;case Pf:return i*t*2;case lu:return i*t/s.components*s.byteLength;case cu:return i*t/s.components*s.byteLength;case If:return i*t*2/s.components*s.byteLength;case hu:return i*t*2/s.components*s.byteLength;case Rf:return i*t*3/s.components*s.byteLength;case Gn:return i*t*4/s.components*s.byteLength;case uu:return i*t*4/s.components*s.byteLength;case Ra:case Ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Pa:case Ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case kc:case Vc:return Math.max(i,16)*Math.max(t,8)/4;case zc:case Hc:return Math.max(i,8)*Math.max(t,8)/2;case Gc:case Wc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Xc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Yc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Zc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case $c:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Jc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Kc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case jc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Qc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case th:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case eh:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case nh:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ih:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case sh:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case rh:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case La:case oh:case ah:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Lf:case lh:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ch:case hh:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function L_(i){switch(i){case wi:case Ef:return{byteLength:1,components:1};case go:case wf:case bn:return{byteLength:2,components:1};case ou:case au:return{byteLength:2,components:4};case Es:case ru:case ti:return{byteLength:4,components:1};case Tf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function D_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,S){return p?new OffscreenCanvas(R,S):Na("canvas")}function y(R,S,Q){let ct=1,mt=ht(R);if((mt.width>Q||mt.height>Q)&&(ct=Q/Math.max(mt.width,mt.height)),ct<1)if(typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&R instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&R instanceof ImageBitmap||typeof VideoFrame!="undefined"&&R instanceof VideoFrame){let ft=Math.floor(ct*mt.width),Ut=Math.floor(ct*mt.height);u===void 0&&(u=g(ft,Ut));let St=S?g(ft,Ut):u;return St.width=ft,St.height=Ut,St.getContext("2d").drawImage(R,0,0,ft,Ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+mt.width+"x"+mt.height+") to ("+ft+"x"+Ut+")."),St}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+mt.width+"x"+mt.height+")."),R;return R}function m(R){return R.generateMipmaps}function f(R){i.generateMipmap(R)}function b(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(R,S,Q,ct,mt=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ft=S;if(S===i.RED&&(Q===i.FLOAT&&(ft=i.R32F),Q===i.HALF_FLOAT&&(ft=i.R16F),Q===i.UNSIGNED_BYTE&&(ft=i.R8)),S===i.RED_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ft=i.R8UI),Q===i.UNSIGNED_SHORT&&(ft=i.R16UI),Q===i.UNSIGNED_INT&&(ft=i.R32UI),Q===i.BYTE&&(ft=i.R8I),Q===i.SHORT&&(ft=i.R16I),Q===i.INT&&(ft=i.R32I)),S===i.RG&&(Q===i.FLOAT&&(ft=i.RG32F),Q===i.HALF_FLOAT&&(ft=i.RG16F),Q===i.UNSIGNED_BYTE&&(ft=i.RG8)),S===i.RG_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ft=i.RG8UI),Q===i.UNSIGNED_SHORT&&(ft=i.RG16UI),Q===i.UNSIGNED_INT&&(ft=i.RG32UI),Q===i.BYTE&&(ft=i.RG8I),Q===i.SHORT&&(ft=i.RG16I),Q===i.INT&&(ft=i.RG32I)),S===i.RGB_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ft=i.RGB8UI),Q===i.UNSIGNED_SHORT&&(ft=i.RGB16UI),Q===i.UNSIGNED_INT&&(ft=i.RGB32UI),Q===i.BYTE&&(ft=i.RGB8I),Q===i.SHORT&&(ft=i.RGB16I),Q===i.INT&&(ft=i.RGB32I)),S===i.RGBA_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ft=i.RGBA8UI),Q===i.UNSIGNED_SHORT&&(ft=i.RGBA16UI),Q===i.UNSIGNED_INT&&(ft=i.RGBA32UI),Q===i.BYTE&&(ft=i.RGBA8I),Q===i.SHORT&&(ft=i.RGBA16I),Q===i.INT&&(ft=i.RGBA32I)),S===i.RGB&&Q===i.UNSIGNED_INT_5_9_9_9_REV&&(ft=i.RGB9_E5),S===i.RGBA){let Ut=mt?cl:ne.getTransfer(ct);Q===i.FLOAT&&(ft=i.RGBA32F),Q===i.HALF_FLOAT&&(ft=i.RGBA16F),Q===i.UNSIGNED_BYTE&&(ft=Ut===me?i.SRGB8_ALPHA8:i.RGBA8),Q===i.UNSIGNED_SHORT_4_4_4_4&&(ft=i.RGBA4),Q===i.UNSIGNED_SHORT_5_5_5_1&&(ft=i.RGB5_A1)}return(ft===i.R16F||ft===i.R32F||ft===i.RG16F||ft===i.RG32F||ft===i.RGBA16F||ft===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function x(R,S){let Q;return R?S===null||S===Es||S===_r?Q=i.DEPTH24_STENCIL8:S===ti?Q=i.DEPTH32F_STENCIL8:S===go&&(Q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Es||S===_r?Q=i.DEPTH_COMPONENT24:S===ti?Q=i.DEPTH_COMPONENT32F:S===go&&(Q=i.DEPTH_COMPONENT16),Q}function I(R,S){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Mn&&R.minFilter!==Qn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function T(R){let S=R.target;S.removeEventListener("dispose",T),L(S),S.isVideoTexture&&h.delete(S)}function P(R){let S=R.target;S.removeEventListener("dispose",P),M(S)}function L(R){let S=n.get(R);if(S.__webglInit===void 0)return;let Q=R.source,ct=d.get(Q);if(ct){let mt=ct[S.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&v(R),Object.keys(ct).length===0&&d.delete(Q)}n.remove(R)}function v(R){let S=n.get(R);i.deleteTexture(S.__webglTexture);let Q=R.source,ct=d.get(Q);delete ct[S.__cacheKey],o.memory.textures--}function M(R){let S=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(S.__webglFramebuffer[ct]))for(let mt=0;mt<S.__webglFramebuffer[ct].length;mt++)i.deleteFramebuffer(S.__webglFramebuffer[ct][mt]);else i.deleteFramebuffer(S.__webglFramebuffer[ct]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[ct])}else{if(Array.isArray(S.__webglFramebuffer))for(let ct=0;ct<S.__webglFramebuffer.length;ct++)i.deleteFramebuffer(S.__webglFramebuffer[ct]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ct=0;ct<S.__webglColorRenderbuffer.length;ct++)S.__webglColorRenderbuffer[ct]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[ct]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let Q=R.textures;for(let ct=0,mt=Q.length;ct<mt;ct++){let ft=n.get(Q[ct]);ft.__webglTexture&&(i.deleteTexture(ft.__webglTexture),o.memory.textures--),n.remove(Q[ct])}n.remove(R)}let U=0;function k(){U=0}function V(){let R=U;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),U+=1,R}function q(R){let S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function st(R,S){let Q=n.get(R);if(R.isVideoTexture&&B(R),R.isRenderTargetTexture===!1&&R.version>0&&Q.__version!==R.version){let ct=R.image;if(ct===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{F(Q,R,S);return}}e.bindTexture(i.TEXTURE_2D,Q.__webglTexture,i.TEXTURE0+S)}function H(R,S){let Q=n.get(R);if(R.version>0&&Q.__version!==R.version){F(Q,R,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,Q.__webglTexture,i.TEXTURE0+S)}function $(R,S){let Q=n.get(R);if(R.version>0&&Q.__version!==R.version){F(Q,R,S);return}e.bindTexture(i.TEXTURE_3D,Q.__webglTexture,i.TEXTURE0+S)}function O(R,S){let Q=n.get(R);if(R.version>0&&Q.__version!==R.version){D(Q,R,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture,i.TEXTURE0+S)}let dt={[Ss]:i.REPEAT,[bi]:i.CLAMP_TO_EDGE,[Bc]:i.MIRRORED_REPEAT},lt={[Mn]:i.NEAREST,[xm]:i.NEAREST_MIPMAP_NEAREST,[qo]:i.NEAREST_MIPMAP_LINEAR,[Qn]:i.LINEAR,[Xl]:i.LINEAR_MIPMAP_NEAREST,[bs]:i.LINEAR_MIPMAP_LINEAR},gt={[bm]:i.NEVER,[Rm]:i.ALWAYS,[Sm]:i.LESS,[Uf]:i.LEQUAL,[Em]:i.EQUAL,[Am]:i.GEQUAL,[wm]:i.GREATER,[Tm]:i.NOTEQUAL};function xt(R,S){if(S.type===ti&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Qn||S.magFilter===Xl||S.magFilter===qo||S.magFilter===bs||S.minFilter===Qn||S.minFilter===Xl||S.minFilter===qo||S.minFilter===bs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,dt[S.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,dt[S.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,dt[S.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,lt[S.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,lt[S.minFilter]),S.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,gt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Mn||S.minFilter!==qo&&S.minFilter!==bs||S.type===ti&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let Q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function wt(R,S){let Q=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",T));let ct=S.source,mt=d.get(ct);mt===void 0&&(mt={},d.set(ct,mt));let ft=q(S);if(ft!==R.__cacheKey){mt[ft]===void 0&&(mt[ft]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Q=!0),mt[ft].usedTimes++;let Ut=mt[R.__cacheKey];Ut!==void 0&&(mt[R.__cacheKey].usedTimes--,Ut.usedTimes===0&&v(S)),R.__cacheKey=ft,R.__webglTexture=mt[ft].texture}return Q}function F(R,S,Q){let ct=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ct=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ct=i.TEXTURE_3D);let mt=wt(R,S),ft=S.source;e.bindTexture(ct,R.__webglTexture,i.TEXTURE0+Q);let Ut=n.get(ft);if(ft.version!==Ut.__version||mt===!0){e.activeTexture(i.TEXTURE0+Q);let St=ne.getPrimaries(ne.workingColorSpace),At=S.colorSpace===jn?null:ne.getPrimaries(S.colorSpace),Yt=S.colorSpace===jn||St===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let vt=y(S.image,!1,s.maxTextureSize);vt=N(S,vt);let Lt=r.convert(S.format,S.colorSpace),Ht=r.convert(S.type),Gt=_(S.internalFormat,Lt,Ht,S.colorSpace,S.isVideoTexture);xt(ct,S);let Dt,ae=S.mipmaps,Jt=S.isVideoTexture!==!0,Ee=Ut.__version===void 0||mt===!0,Y=ft.dataReady,Tt=I(S,vt);if(S.isDepthTexture)Gt=x(S.format===vr,S.type),Ee&&(Jt?e.texStorage2D(i.TEXTURE_2D,1,Gt,vt.width,vt.height):e.texImage2D(i.TEXTURE_2D,0,Gt,vt.width,vt.height,0,Lt,Ht,null));else if(S.isDataTexture)if(ae.length>0){Jt&&Ee&&e.texStorage2D(i.TEXTURE_2D,Tt,Gt,ae[0].width,ae[0].height);for(let ut=0,yt=ae.length;ut<yt;ut++)Dt=ae[ut],Jt?Y&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,Dt.width,Dt.height,Lt,Ht,Dt.data):e.texImage2D(i.TEXTURE_2D,ut,Gt,Dt.width,Dt.height,0,Lt,Ht,Dt.data);S.generateMipmaps=!1}else Jt?(Ee&&e.texStorage2D(i.TEXTURE_2D,Tt,Gt,vt.width,vt.height),Y&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt.width,vt.height,Lt,Ht,vt.data)):e.texImage2D(i.TEXTURE_2D,0,Gt,vt.width,vt.height,0,Lt,Ht,vt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Jt&&Ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,Gt,ae[0].width,ae[0].height,vt.depth);for(let ut=0,yt=ae.length;ut<yt;ut++)if(Dt=ae[ut],S.format!==Gn)if(Lt!==null)if(Jt){if(Y)if(S.layerUpdates.size>0){let Pt=Kd(Dt.width,Dt.height,S.format,S.type);for(let Rt of S.layerUpdates){let Zt=Dt.data.subarray(Rt*Pt/Dt.data.BYTES_PER_ELEMENT,(Rt+1)*Pt/Dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,Rt,Dt.width,Dt.height,1,Lt,Zt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,Dt.width,Dt.height,vt.depth,Lt,Dt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ut,Gt,Dt.width,Dt.height,vt.depth,0,Dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Jt?Y&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,Dt.width,Dt.height,vt.depth,Lt,Ht,Dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ut,Gt,Dt.width,Dt.height,vt.depth,0,Lt,Ht,Dt.data)}else{Jt&&Ee&&e.texStorage2D(i.TEXTURE_2D,Tt,Gt,ae[0].width,ae[0].height);for(let ut=0,yt=ae.length;ut<yt;ut++)Dt=ae[ut],S.format!==Gn?Lt!==null?Jt?Y&&e.compressedTexSubImage2D(i.TEXTURE_2D,ut,0,0,Dt.width,Dt.height,Lt,Dt.data):e.compressedTexImage2D(i.TEXTURE_2D,ut,Gt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?Y&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,Dt.width,Dt.height,Lt,Ht,Dt.data):e.texImage2D(i.TEXTURE_2D,ut,Gt,Dt.width,Dt.height,0,Lt,Ht,Dt.data)}else if(S.isDataArrayTexture)if(Jt){if(Ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,Gt,vt.width,vt.height,vt.depth),Y)if(S.layerUpdates.size>0){let ut=Kd(vt.width,vt.height,S.format,S.type);for(let yt of S.layerUpdates){let Pt=vt.data.subarray(yt*ut/vt.data.BYTES_PER_ELEMENT,(yt+1)*ut/vt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,yt,vt.width,vt.height,1,Lt,Ht,Pt)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,vt.width,vt.height,vt.depth,Lt,Ht,vt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Gt,vt.width,vt.height,vt.depth,0,Lt,Ht,vt.data);else if(S.isData3DTexture)Jt?(Ee&&e.texStorage3D(i.TEXTURE_3D,Tt,Gt,vt.width,vt.height,vt.depth),Y&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,vt.width,vt.height,vt.depth,Lt,Ht,vt.data)):e.texImage3D(i.TEXTURE_3D,0,Gt,vt.width,vt.height,vt.depth,0,Lt,Ht,vt.data);else if(S.isFramebufferTexture){if(Ee)if(Jt)e.texStorage2D(i.TEXTURE_2D,Tt,Gt,vt.width,vt.height);else{let ut=vt.width,yt=vt.height;for(let Pt=0;Pt<Tt;Pt++)e.texImage2D(i.TEXTURE_2D,Pt,Gt,ut,yt,0,Lt,Ht,null),ut>>=1,yt>>=1}}else if(ae.length>0){if(Jt&&Ee){let ut=ht(ae[0]);e.texStorage2D(i.TEXTURE_2D,Tt,Gt,ut.width,ut.height)}for(let ut=0,yt=ae.length;ut<yt;ut++)Dt=ae[ut],Jt?Y&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,Lt,Ht,Dt):e.texImage2D(i.TEXTURE_2D,ut,Gt,Lt,Ht,Dt);S.generateMipmaps=!1}else if(Jt){if(Ee){let ut=ht(vt);e.texStorage2D(i.TEXTURE_2D,Tt,Gt,ut.width,ut.height)}Y&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Lt,Ht,vt)}else e.texImage2D(i.TEXTURE_2D,0,Gt,Lt,Ht,vt);m(S)&&f(ct),Ut.__version=ft.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function D(R,S,Q){if(S.image.length!==6)return;let ct=wt(R,S),mt=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+Q);let ft=n.get(mt);if(mt.version!==ft.__version||ct===!0){e.activeTexture(i.TEXTURE0+Q);let Ut=ne.getPrimaries(ne.workingColorSpace),St=S.colorSpace===jn?null:ne.getPrimaries(S.colorSpace),At=S.colorSpace===jn||Ut===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let Yt=S.isCompressedTexture||S.image[0].isCompressedTexture,vt=S.image[0]&&S.image[0].isDataTexture,Lt=[];for(let yt=0;yt<6;yt++)!Yt&&!vt?Lt[yt]=y(S.image[yt],!0,s.maxCubemapSize):Lt[yt]=vt?S.image[yt].image:S.image[yt],Lt[yt]=N(S,Lt[yt]);let Ht=Lt[0],Gt=r.convert(S.format,S.colorSpace),Dt=r.convert(S.type),ae=_(S.internalFormat,Gt,Dt,S.colorSpace),Jt=S.isVideoTexture!==!0,Ee=ft.__version===void 0||ct===!0,Y=mt.dataReady,Tt=I(S,Ht);xt(i.TEXTURE_CUBE_MAP,S);let ut;if(Yt){Jt&&Ee&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,ae,Ht.width,Ht.height);for(let yt=0;yt<6;yt++){ut=Lt[yt].mipmaps;for(let Pt=0;Pt<ut.length;Pt++){let Rt=ut[Pt];S.format!==Gn?Gt!==null?Jt?Y&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Pt,0,0,Rt.width,Rt.height,Gt,Rt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Pt,ae,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Jt?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Pt,0,0,Rt.width,Rt.height,Gt,Dt,Rt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Pt,ae,Rt.width,Rt.height,0,Gt,Dt,Rt.data)}}}else{if(ut=S.mipmaps,Jt&&Ee){ut.length>0&&Tt++;let yt=ht(Lt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,ae,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(vt){Jt?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Lt[yt].width,Lt[yt].height,Gt,Dt,Lt[yt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ae,Lt[yt].width,Lt[yt].height,0,Gt,Dt,Lt[yt].data);for(let Pt=0;Pt<ut.length;Pt++){let Zt=ut[Pt].image[yt].image;Jt?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Pt+1,0,0,Zt.width,Zt.height,Gt,Dt,Zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Pt+1,ae,Zt.width,Zt.height,0,Gt,Dt,Zt.data)}}else{Jt?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Gt,Dt,Lt[yt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ae,Gt,Dt,Lt[yt]);for(let Pt=0;Pt<ut.length;Pt++){let Rt=ut[Pt];Jt?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Pt+1,0,0,Gt,Dt,Rt.image[yt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Pt+1,ae,Gt,Dt,Rt.image[yt])}}}m(S)&&f(i.TEXTURE_CUBE_MAP),ft.__version=mt.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function C(R,S,Q,ct,mt,ft){let Ut=r.convert(Q.format,Q.colorSpace),St=r.convert(Q.type),At=_(Q.internalFormat,Ut,St,Q.colorSpace),Yt=n.get(S),vt=n.get(Q);if(vt.__renderTarget=S,!Yt.__hasExternalTextures){let Lt=Math.max(1,S.width>>ft),Ht=Math.max(1,S.height>>ft);mt===i.TEXTURE_3D||mt===i.TEXTURE_2D_ARRAY?e.texImage3D(mt,ft,At,Lt,Ht,S.depth,0,Ut,St,null):e.texImage2D(mt,ft,At,Lt,Ht,0,Ut,St,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),it(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,mt,vt.__webglTexture,0,tt(S)):(mt===i.TEXTURE_2D||mt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ct,mt,vt.__webglTexture,ft),e.bindFramebuffer(i.FRAMEBUFFER,null)}function w(R,S,Q){if(i.bindRenderbuffer(i.RENDERBUFFER,R),S.depthBuffer){let ct=S.depthTexture,mt=ct&&ct.isDepthTexture?ct.type:null,ft=x(S.stencilBuffer,mt),Ut=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=tt(S);it(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,St,ft,S.width,S.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,St,ft,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ft,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ut,i.RENDERBUFFER,R)}else{let ct=S.textures;for(let mt=0;mt<ct.length;mt++){let ft=ct[mt],Ut=r.convert(ft.format,ft.colorSpace),St=r.convert(ft.type),At=_(ft.internalFormat,Ut,St,ft.colorSpace),Yt=tt(S);Q&&it(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt,At,S.width,S.height):it(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Yt,At,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,At,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function W(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ct=n.get(S.depthTexture);ct.__renderTarget=S,(!ct.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),st(S.depthTexture,0);let mt=ct.__webglTexture,ft=tt(S);if(S.depthTexture.format===dr)it(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,mt,0,ft):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,mt,0);else if(S.depthTexture.format===vr)it(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,mt,0,ft):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,mt,0);else throw new Error("Unknown depthTexture format")}function rt(R){let S=n.get(R),Q=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){let ct=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ct){let mt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ct.removeEventListener("dispose",mt)};ct.addEventListener("dispose",mt),S.__depthDisposeCallback=mt}S.__boundDepthTexture=ct}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");W(S.__webglFramebuffer,R)}else if(Q){S.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[ct]),S.__webglDepthbuffer[ct]===void 0)S.__webglDepthbuffer[ct]=i.createRenderbuffer(),w(S.__webglDepthbuffer[ct],R,!1);else{let mt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=S.__webglDepthbuffer[ct];i.bindRenderbuffer(i.RENDERBUFFER,ft),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,ft)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),w(S.__webglDepthbuffer,R,!1);else{let ct=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,mt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function X(R,S,Q){let ct=n.get(R);S!==void 0&&C(ct.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Q!==void 0&&rt(R)}function pt(R){let S=R.texture,Q=n.get(R),ct=n.get(S);R.addEventListener("dispose",P);let mt=R.textures,ft=R.isWebGLCubeRenderTarget===!0,Ut=mt.length>1;if(Ut||(ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture()),ct.__version=S.version,o.memory.textures++),ft){Q.__webglFramebuffer=[];for(let St=0;St<6;St++)if(S.mipmaps&&S.mipmaps.length>0){Q.__webglFramebuffer[St]=[];for(let At=0;At<S.mipmaps.length;At++)Q.__webglFramebuffer[St][At]=i.createFramebuffer()}else Q.__webglFramebuffer[St]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){Q.__webglFramebuffer=[];for(let St=0;St<S.mipmaps.length;St++)Q.__webglFramebuffer[St]=i.createFramebuffer()}else Q.__webglFramebuffer=i.createFramebuffer();if(Ut)for(let St=0,At=mt.length;St<At;St++){let Yt=n.get(mt[St]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&it(R)===!1){Q.__webglMultisampledFramebuffer=i.createFramebuffer(),Q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let St=0;St<mt.length;St++){let At=mt[St];Q.__webglColorRenderbuffer[St]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Q.__webglColorRenderbuffer[St]);let Yt=r.convert(At.format,At.colorSpace),vt=r.convert(At.type),Lt=_(At.internalFormat,Yt,vt,At.colorSpace,R.isXRRenderTarget===!0),Ht=tt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,Lt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,Q.__webglColorRenderbuffer[St])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(Q.__webglDepthRenderbuffer=i.createRenderbuffer(),w(Q.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ft){e.bindTexture(i.TEXTURE_CUBE_MAP,ct.__webglTexture),xt(i.TEXTURE_CUBE_MAP,S);for(let St=0;St<6;St++)if(S.mipmaps&&S.mipmaps.length>0)for(let At=0;At<S.mipmaps.length;At++)C(Q.__webglFramebuffer[St][At],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+St,At);else C(Q.__webglFramebuffer[St],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0);m(S)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ut){for(let St=0,At=mt.length;St<At;St++){let Yt=mt[St],vt=n.get(Yt);e.bindTexture(i.TEXTURE_2D,vt.__webglTexture),xt(i.TEXTURE_2D,Yt),C(Q.__webglFramebuffer,R,Yt,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,0),m(Yt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let St=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(St=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(St,ct.__webglTexture),xt(St,S),S.mipmaps&&S.mipmaps.length>0)for(let At=0;At<S.mipmaps.length;At++)C(Q.__webglFramebuffer[At],R,S,i.COLOR_ATTACHMENT0,St,At);else C(Q.__webglFramebuffer,R,S,i.COLOR_ATTACHMENT0,St,0);m(S)&&f(St),e.unbindTexture()}R.depthBuffer&&rt(R)}function J(R){let S=R.textures;for(let Q=0,ct=S.length;Q<ct;Q++){let mt=S[Q];if(m(mt)){let ft=b(R),Ut=n.get(mt).__webglTexture;e.bindTexture(ft,Ut),f(ft),e.unbindTexture()}}}let Z=[],E=[];function nt(R){if(R.samples>0){if(it(R)===!1){let S=R.textures,Q=R.width,ct=R.height,mt=i.COLOR_BUFFER_BIT,ft=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ut=n.get(R),St=S.length>1;if(St)for(let At=0;At<S.length;At++)e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let At=0;At<S.length;At++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(mt|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(mt|=i.STENCIL_BUFFER_BIT)),St){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ut.__webglColorRenderbuffer[At]);let Yt=n.get(S[At]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Yt,0)}i.blitFramebuffer(0,0,Q,ct,0,0,Q,ct,mt,i.NEAREST),l===!0&&(Z.length=0,E.length=0,Z.push(i.COLOR_ATTACHMENT0+At),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Z.push(ft),E.push(ft),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,E)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Z))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),St)for(let At=0;At<S.length;At++){e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,Ut.__webglColorRenderbuffer[At]);let Yt=n.get(S[At]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,Yt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let S=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function tt(R){return Math.min(s.maxSamples,R.samples)}function it(R){let S=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function B(R){let S=o.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function N(R,S){let Q=R.colorSpace,ct=R.format,mt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||Q!==Dr&&Q!==jn&&(ne.getTransfer(Q)===me?(ct!==Gn||mt!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),S}function ht(R){return typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame!="undefined"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=k,this.setTexture2D=st,this.setTexture2DArray=H,this.setTexture3D=$,this.setTextureCube=O,this.rebindTextures=X,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=C,this.useMultisampledRTT=it}function U_(i,t){function e(n,s=jn){let r,o=ne.getTransfer(s);if(n===wi)return i.UNSIGNED_BYTE;if(n===ou)return i.UNSIGNED_SHORT_4_4_4_4;if(n===au)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Tf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ef)return i.BYTE;if(n===wf)return i.SHORT;if(n===go)return i.UNSIGNED_SHORT;if(n===ru)return i.INT;if(n===Es)return i.UNSIGNED_INT;if(n===ti)return i.FLOAT;if(n===bn)return i.HALF_FLOAT;if(n===Af)return i.ALPHA;if(n===Rf)return i.RGB;if(n===Gn)return i.RGBA;if(n===Cf)return i.LUMINANCE;if(n===Pf)return i.LUMINANCE_ALPHA;if(n===dr)return i.DEPTH_COMPONENT;if(n===vr)return i.DEPTH_STENCIL;if(n===lu)return i.RED;if(n===cu)return i.RED_INTEGER;if(n===If)return i.RG;if(n===hu)return i.RG_INTEGER;if(n===uu)return i.RGBA_INTEGER;if(n===Ra||n===Ca||n===Pa||n===Ia)if(o===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ra)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ra)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ca)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Pa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ia)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===zc||n===kc||n===Hc||n===Vc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===zc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===kc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Hc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Vc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Gc||n===Wc||n===Xc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Gc||n===Wc)return o===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Xc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===qc||n===Yc||n===Zc||n===$c||n===Jc||n===Kc||n===jc||n===Qc||n===th||n===eh||n===nh||n===ih||n===sh||n===rh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===qc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Yc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$c)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Kc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===jc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Qc)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===th)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===eh)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===nh)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ih)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===sh)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===rh)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===La||n===oh||n===ah)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===La)return o===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===oh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ah)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Lf||n===lh||n===ch||n===hh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===La)return r.COMPRESSED_RED_RGTC1_EXT;if(n===lh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ch)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===hh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_r?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Th=class extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},_e=class extends Je{constructor(){super(),this.isGroup=!0,this.type="Group"}},N_={type:"move"},fo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),f=this._getHandJoint(c,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(N_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new _e;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},F_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,O_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ah=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new je,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new se({vertexShader:F_,fragmentShader:O_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new bt(new Cn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Rh=class extends Ti{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null,y=new Ah,m=e.getContextAttributes(),f=null,b=null,_=[],x=[],I=new et,T=null,P=new Ve;P.viewport=new xe;let L=new Ve;L.viewport=new xe;let v=[P,L],M=new Th,U=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let D=_[F];return D===void 0&&(D=new fo,_[F]=D),D.getTargetRaySpace()},this.getControllerGrip=function(F){let D=_[F];return D===void 0&&(D=new fo,_[F]=D),D.getGripSpace()},this.getHand=function(F){let D=_[F];return D===void 0&&(D=new fo,_[F]=D),D.getHandSpace()};function V(F){let D=x.indexOf(F.inputSource);if(D===-1)return;let C=_[D];C!==void 0&&(C.update(F.inputSource,F.frame,c||o),C.dispatchEvent({type:F.type,data:F.inputSource}))}function q(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",st);for(let F=0;F<_.length;F++){let D=x[F];D!==null&&(x[F]=null,_[F].disconnect(D))}U=null,k=null,y.reset(),t.setRenderTarget(f),p=null,d=null,u=null,s=null,b=null,wt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){r=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(F){if(s=F,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",q),s.addEventListener("inputsourceschange",st),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(I),s.renderState.layers===void 0){let D={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,D),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new Qe(p.framebufferWidth,p.framebufferHeight,{format:Gn,type:wi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let D=null,C=null,w=null;m.depth&&(w=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,D=m.stencil?vr:dr,C=m.stencil?_r:Es);let W={colorFormat:e.RGBA8,depthFormat:w,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(W),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new Qe(d.textureWidth,d.textureHeight,{format:Gn,type:wi,depthTexture:new Va(d.textureWidth,d.textureHeight,C,void 0,void 0,void 0,void 0,void 0,void 0,D),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),wt.setContext(s),wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function st(F){for(let D=0;D<F.removed.length;D++){let C=F.removed[D],w=x.indexOf(C);w>=0&&(x[w]=null,_[w].disconnect(C))}for(let D=0;D<F.added.length;D++){let C=F.added[D],w=x.indexOf(C);if(w===-1){for(let rt=0;rt<_.length;rt++)if(rt>=x.length){x.push(C),w=rt;break}else if(x[rt]===null){x[rt]=C,w=rt;break}if(w===-1)break}let W=_[w];W&&W.connect(C)}}let H=new z,$=new z;function O(F,D,C){H.setFromMatrixPosition(D.matrixWorld),$.setFromMatrixPosition(C.matrixWorld);let w=H.distanceTo($),W=D.projectionMatrix.elements,rt=C.projectionMatrix.elements,X=W[14]/(W[10]-1),pt=W[14]/(W[10]+1),J=(W[9]+1)/W[5],Z=(W[9]-1)/W[5],E=(W[8]-1)/W[0],nt=(rt[8]+1)/rt[0],tt=X*E,it=X*nt,B=w/(-E+nt),N=B*-E;if(D.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(N),F.translateZ(B),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert(),W[10]===-1)F.projectionMatrix.copy(D.projectionMatrix),F.projectionMatrixInverse.copy(D.projectionMatrixInverse);else{let ht=X+B,R=pt+B,S=tt-N,Q=it+(w-N),ct=J*pt/R*ht,mt=Z*pt/R*ht;F.projectionMatrix.makePerspective(S,Q,ct,mt,ht,R),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}}function dt(F,D){D===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(D.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(s===null)return;let D=F.near,C=F.far;y.texture!==null&&(y.depthNear>0&&(D=y.depthNear),y.depthFar>0&&(C=y.depthFar)),M.near=L.near=P.near=D,M.far=L.far=P.far=C,(U!==M.near||k!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),U=M.near,k=M.far),P.layers.mask=F.layers.mask|2,L.layers.mask=F.layers.mask|4,M.layers.mask=P.layers.mask|L.layers.mask;let w=F.parent,W=M.cameras;dt(M,w);for(let rt=0;rt<W.length;rt++)dt(W[rt],w);W.length===2?O(M,P,L):M.projectionMatrix.copy(P.projectionMatrix),lt(F,M,w)};function lt(F,D,C){C===null?F.matrix.copy(D.matrixWorld):(F.matrix.copy(C.matrixWorld),F.matrix.invert(),F.matrix.multiply(D.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(D.projectionMatrix),F.projectionMatrixInverse.copy(D.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=yo*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(F){l=F,d!==null&&(d.fixedFoveation=F),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=F)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(M)};let gt=null;function xt(F,D){if(h=D.getViewerPose(c||o),g=D,h!==null){let C=h.views;p!==null&&(t.setRenderTargetFramebuffer(b,p.framebuffer),t.setRenderTarget(b));let w=!1;C.length!==M.cameras.length&&(M.cameras.length=0,w=!0);for(let rt=0;rt<C.length;rt++){let X=C[rt],pt=null;if(p!==null)pt=p.getViewport(X);else{let Z=u.getViewSubImage(d,X);pt=Z.viewport,rt===0&&(t.setRenderTargetTextures(b,Z.colorTexture,d.ignoreDepthValues?void 0:Z.depthStencilTexture),t.setRenderTarget(b))}let J=v[rt];J===void 0&&(J=new Ve,J.layers.enable(rt),J.viewport=new xe,v[rt]=J),J.matrix.fromArray(X.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(X.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(pt.x,pt.y,pt.width,pt.height),rt===0&&(M.matrix.copy(J.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),w===!0&&M.cameras.push(J)}let W=s.enabledFeatures;if(W&&W.includes("depth-sensing")){let rt=u.getDepthInformation(C[0]);rt&&rt.isValid&&rt.texture&&y.init(t,rt,s.renderState)}}for(let C=0;C<_.length;C++){let w=x[C],W=_[C];w!==null&&W!==void 0&&W.update(w,D,c||o)}gt&&gt(F,D),D.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:D}),g=null}let wt=new Bf;wt.setAnimationLoop(xt),this.setAnimationLoop=function(F){gt=F},this.dispose=function(){}}},xs=new dn,B_=new te;function z_(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Of(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,b,_,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),y(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,b,_):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===De&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===De&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let b=t.get(f),_=b.envMap,x=b.envMapRotation;_&&(m.envMap.value=_,xs.copy(x),xs.x*=-1,xs.y*=-1,xs.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),m.envMapRotation.value.setFromMatrix4(B_.makeRotationFromEuler(xs)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,b,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*b,m.scale.value=_*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,b){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===De&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){let b=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function k_(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,_){let x=_.program;n.uniformBlockBinding(b,x)}function c(b,_){let x=s[b.id];x===void 0&&(g(b),x=h(b),s[b.id]=x,b.addEventListener("dispose",m));let I=_.program;n.updateUBOMapping(b,I);let T=t.render.frame;r[b.id]!==T&&(d(b),r[b.id]=T)}function h(b){let _=u();b.__bindingPointIndex=_;let x=i.createBuffer(),I=b.__size,T=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,I,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,x),x}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let _=s[b.id],x=b.uniforms,I=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let T=0,P=x.length;T<P;T++){let L=Array.isArray(x[T])?x[T]:[x[T]];for(let v=0,M=L.length;v<M;v++){let U=L[v];if(p(U,T,v,I)===!0){let k=U.__offset,V=Array.isArray(U.value)?U.value:[U.value],q=0;for(let st=0;st<V.length;st++){let H=V[st],$=y(H);typeof H=="number"||typeof H=="boolean"?(U.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,k+q,U.__data)):H.isMatrix3?(U.__data[0]=H.elements[0],U.__data[1]=H.elements[1],U.__data[2]=H.elements[2],U.__data[3]=0,U.__data[4]=H.elements[3],U.__data[5]=H.elements[4],U.__data[6]=H.elements[5],U.__data[7]=0,U.__data[8]=H.elements[6],U.__data[9]=H.elements[7],U.__data[10]=H.elements[8],U.__data[11]=0):(H.toArray(U.__data,q),q+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(b,_,x,I){let T=b.value,P=_+"_"+x;if(I[P]===void 0)return typeof T=="number"||typeof T=="boolean"?I[P]=T:I[P]=T.clone(),!0;{let L=I[P];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return I[P]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function g(b){let _=b.uniforms,x=0,I=16;for(let P=0,L=_.length;P<L;P++){let v=Array.isArray(_[P])?_[P]:[_[P]];for(let M=0,U=v.length;M<U;M++){let k=v[M],V=Array.isArray(k.value)?k.value:[k.value];for(let q=0,st=V.length;q<st;q++){let H=V[q],$=y(H),O=x%I,dt=O%$.boundary,lt=O+dt;x+=dt,lt!==0&&I-lt<$.storage&&(x+=I-lt),k.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=x,x+=$.storage}}}let T=x%I;return T>0&&(x+=I-T),b.__size=x,b.__cache={},this}function y(b){let _={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(_.boundary=4,_.storage=4):b.isVector2?(_.boundary=8,_.storage=8):b.isVector3||b.isColor?(_.boundary=16,_.storage=12):b.isVector4?(_.boundary=16,_.storage=16):b.isMatrix3?(_.boundary=48,_.storage=48):b.isMatrix4?(_.boundary=64,_.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),_}function m(b){let _=b.target;_.removeEventListener("dispose",m);let x=o.indexOf(_.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function f(){for(let b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}var Ga=class{constructor(t={}){let{canvas:e=Xm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),y=new Int32Array(4),m=null,f=null,b=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ie,this.toneMapping=Xi,this.toneMappingExposure=1;let x=this,I=!1,T=0,P=0,L=null,v=-1,M=null,U=new xe,k=new xe,V=null,q=new It(0),st=0,H=e.width,$=e.height,O=1,dt=null,lt=null,gt=new xe(0,0,H,$),xt=new xe(0,0,H,$),wt=!1,F=new _o,D=!1,C=!1,w=new te,W=new te,rt=new z,X=new xe,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},J=!1;function Z(){return L===null?O:1}let E=n;function nt(A,K){return e.getContext(A,K)}try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Qh}`),e.addEventListener("webglcontextlost",yt,!1),e.addEventListener("webglcontextrestored",Pt,!1),e.addEventListener("webglcontextcreationerror",Rt,!1),E===null){let K="webgl2";if(E=nt(K,A),E===null)throw nt(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let tt,it,B,N,ht,R,S,Q,ct,mt,ft,Ut,St,At,Yt,vt,Lt,Ht,Gt,Dt,ae,Jt,Ee,Y;function Tt(){tt=new nx(E),tt.init(),Jt=new U_(E,tt),it=new Jy(E,tt,t,Jt),B=new I_(E,tt),it.reverseDepthBuffer&&d&&B.buffers.depth.setReversed(!0),N=new rx(E),ht=new x_,R=new D_(E,tt,B,ht,it,Jt,N),S=new jy(x),Q=new ex(x),ct=new dg(E),Ee=new Zy(E,ct),mt=new ix(E,ct,N,Ee),ft=new ax(E,mt,ct,N),Gt=new ox(E,it,R),vt=new Ky(ht),Ut=new y_(x,S,Q,tt,it,Ee,vt),St=new z_(x,ht),At=new v_,Yt=new T_(tt),Ht=new Yy(x,S,Q,B,ft,p,l),Lt=new C_(x,ft,it),Y=new k_(E,N,it,B),Dt=new $y(E,tt,N),ae=new sx(E,tt,N),N.programs=Ut.programs,x.capabilities=it,x.extensions=tt,x.properties=ht,x.renderLists=At,x.shadowMap=Lt,x.state=B,x.info=N}Tt();let ut=new Rh(x,E);this.xr=ut,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){let A=tt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=tt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(A){A!==void 0&&(O=A,this.setSize(H,$,!1))},this.getSize=function(A){return A.set(H,$)},this.setSize=function(A,K,ot=!0){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=A,$=K,e.width=Math.floor(A*O),e.height=Math.floor(K*O),ot===!0&&(e.style.width=A+"px",e.style.height=K+"px"),this.setViewport(0,0,A,K)},this.getDrawingBufferSize=function(A){return A.set(H*O,$*O).floor()},this.setDrawingBufferSize=function(A,K,ot){H=A,$=K,O=ot,e.width=Math.floor(A*ot),e.height=Math.floor(K*ot),this.setViewport(0,0,A,K)},this.getCurrentViewport=function(A){return A.copy(U)},this.getViewport=function(A){return A.copy(gt)},this.setViewport=function(A,K,ot,at){A.isVector4?gt.set(A.x,A.y,A.z,A.w):gt.set(A,K,ot,at),B.viewport(U.copy(gt).multiplyScalar(O).round())},this.getScissor=function(A){return A.copy(xt)},this.setScissor=function(A,K,ot,at){A.isVector4?xt.set(A.x,A.y,A.z,A.w):xt.set(A,K,ot,at),B.scissor(k.copy(xt).multiplyScalar(O).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(A){B.setScissorTest(wt=A)},this.setOpaqueSort=function(A){dt=A},this.setTransparentSort=function(A){lt=A},this.getClearColor=function(A){return A.copy(Ht.getClearColor())},this.setClearColor=function(){Ht.setClearColor.apply(Ht,arguments)},this.getClearAlpha=function(){return Ht.getClearAlpha()},this.setClearAlpha=function(){Ht.setClearAlpha.apply(Ht,arguments)},this.clear=function(A=!0,K=!0,ot=!0){let at=0;if(A){let j=!1;if(L!==null){let Mt=L.texture.format;j=Mt===uu||Mt===hu||Mt===cu}if(j){let Mt=L.texture.type,Ct=Mt===wi||Mt===Es||Mt===go||Mt===_r||Mt===ou||Mt===au,Ft=Ht.getClearColor(),Ot=Ht.getClearAlpha(),qt=Ft.r,$t=Ft.g,Bt=Ft.b;Ct?(g[0]=qt,g[1]=$t,g[2]=Bt,g[3]=Ot,E.clearBufferuiv(E.COLOR,0,g)):(y[0]=qt,y[1]=$t,y[2]=Bt,y[3]=Ot,E.clearBufferiv(E.COLOR,0,y))}else at|=E.COLOR_BUFFER_BIT}K&&(at|=E.DEPTH_BUFFER_BIT),ot&&(at|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",yt,!1),e.removeEventListener("webglcontextrestored",Pt,!1),e.removeEventListener("webglcontextcreationerror",Rt,!1),At.dispose(),Yt.dispose(),ht.dispose(),S.dispose(),Q.dispose(),ft.dispose(),Ee.dispose(),Y.dispose(),Ut.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",Xu),ut.removeEventListener("sessionend",qu),ds.stop()};function yt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Pt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let A=N.autoReset,K=Lt.enabled,ot=Lt.autoUpdate,at=Lt.needsUpdate,j=Lt.type;Tt(),N.autoReset=A,Lt.enabled=K,Lt.autoUpdate=ot,Lt.needsUpdate=at,Lt.type=j}function Rt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Zt(A){let K=A.target;K.removeEventListener("dispose",Zt),Ue(K)}function Ue(A){nn(A),ht.remove(A)}function nn(A){let K=ht.get(A).programs;K!==void 0&&(K.forEach(function(ot){Ut.releaseProgram(ot)}),A.isShaderMaterial&&Ut.releaseShaderCache(A))}this.renderBufferDirect=function(A,K,ot,at,j,Mt){K===null&&(K=pt);let Ct=j.isMesh&&j.matrixWorld.determinant()<0,Ft=qp(A,K,ot,at,j);B.setMaterial(at,Ct);let Ot=ot.index,qt=1;if(at.wireframe===!0){if(Ot=mt.getWireframeAttribute(ot),Ot===void 0)return;qt=2}let $t=ot.drawRange,Bt=ot.attributes.position,le=$t.start*qt,we=($t.start+$t.count)*qt;Mt!==null&&(le=Math.max(le,Mt.start*qt),we=Math.min(we,(Mt.start+Mt.count)*qt)),Ot!==null?(le=Math.max(le,0),we=Math.min(we,Ot.count)):Bt!=null&&(le=Math.max(le,0),we=Math.min(we,Bt.count));let Ae=we-le;if(Ae<0||Ae===1/0)return;Ee.setup(j,at,Ft,ot,Ot);let fn,fe=Dt;if(Ot!==null&&(fn=ct.get(Ot),fe=ae,fe.setIndex(fn)),j.isMesh)at.wireframe===!0?(B.setLineWidth(at.wireframeLinewidth*Z()),fe.setMode(E.LINES)):fe.setMode(E.TRIANGLES);else if(j.isLine){let kt=at.linewidth;kt===void 0&&(kt=1),B.setLineWidth(kt*Z()),j.isLineSegments?fe.setMode(E.LINES):j.isLineLoop?fe.setMode(E.LINE_LOOP):fe.setMode(E.LINE_STRIP)}else j.isPoints?fe.setMode(E.POINTS):j.isSprite&&fe.setMode(E.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)fe.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))fe.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let kt=j._multiDrawStarts,fi=j._multiDrawCounts,pe=j._multiDrawCount,On=Ot?ct.get(Ot).bytesPerElement:1,Gs=ht.get(at).currentProgram.getUniforms();for(let xn=0;xn<pe;xn++)Gs.setValue(E,"_gl_DrawID",xn),fe.render(kt[xn]/On,fi[xn])}else if(j.isInstancedMesh)fe.renderInstances(le,Ae,j.count);else if(ot.isInstancedBufferGeometry){let kt=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,fi=Math.min(ot.instanceCount,kt);fe.renderInstances(le,Ae,fi)}else fe.render(le,Ae)};function ge(A,K,ot){A.transparent===!0&&A.side===$e&&A.forceSinglePass===!1?(A.side=De,A.needsUpdate=!0,Xo(A,K,ot),A.side=Yi,A.needsUpdate=!0,Xo(A,K,ot),A.side=$e):Xo(A,K,ot)}this.compile=function(A,K,ot=null){ot===null&&(ot=A),f=Yt.get(ot),f.init(K),_.push(f),ot.traverseVisible(function(j){j.isLight&&j.layers.test(K.layers)&&(f.pushLight(j),j.castShadow&&f.pushShadow(j))}),A!==ot&&A.traverseVisible(function(j){j.isLight&&j.layers.test(K.layers)&&(f.pushLight(j),j.castShadow&&f.pushShadow(j))}),f.setupLights();let at=new Set;return A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let Mt=j.material;if(Mt)if(Array.isArray(Mt))for(let Ct=0;Ct<Mt.length;Ct++){let Ft=Mt[Ct];ge(Ft,ot,j),at.add(Ft)}else ge(Mt,ot,j),at.add(Mt)}),_.pop(),f=null,at},this.compileAsync=function(A,K,ot=null){let at=this.compile(A,K,ot);return new Promise(j=>{function Mt(){if(at.forEach(function(Ct){ht.get(Ct).currentProgram.isReady()&&at.delete(Ct)}),at.size===0){j(A);return}setTimeout(Mt,10)}tt.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let Fn=null;function di(A){Fn&&Fn(A)}function Xu(){ds.stop()}function qu(){ds.start()}let ds=new Bf;ds.setAnimationLoop(di),typeof self!="undefined"&&ds.setContext(self),this.setAnimationLoop=function(A){Fn=A,ut.setAnimationLoop(A),A===null?ds.stop():ds.start()},ut.addEventListener("sessionstart",Xu),ut.addEventListener("sessionend",qu),this.render=function(A,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(K),K=ut.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,K,L),f=Yt.get(A,_.length),f.init(K),_.push(f),W.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),F.setFromProjectionMatrix(W),C=this.localClippingEnabled,D=vt.init(this.clippingPlanes,C),m=At.get(A,b.length),m.init(),b.push(m),ut.enabled===!0&&ut.isPresenting===!0){let Mt=x.xr.getDepthSensingMesh();Mt!==null&&Wl(Mt,K,-1/0,x.sortObjects)}Wl(A,K,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(dt,lt),J=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,J&&Ht.addToRenderList(m,A),this.info.render.frame++,D===!0&&vt.beginShadows();let ot=f.state.shadowsArray;Lt.render(ot,A,K),D===!0&&vt.endShadows(),this.info.autoReset===!0&&this.info.reset();let at=m.opaque,j=m.transmissive;if(f.setupLights(),K.isArrayCamera){let Mt=K.cameras;if(j.length>0)for(let Ct=0,Ft=Mt.length;Ct<Ft;Ct++){let Ot=Mt[Ct];Zu(at,j,A,Ot)}J&&Ht.render(A);for(let Ct=0,Ft=Mt.length;Ct<Ft;Ct++){let Ot=Mt[Ct];Yu(m,A,Ot,Ot.viewport)}}else j.length>0&&Zu(at,j,A,K),J&&Ht.render(A),Yu(m,A,K);L!==null&&(R.updateMultisampleRenderTarget(L),R.updateRenderTargetMipmap(L)),A.isScene===!0&&A.onAfterRender(x,A,K),Ee.resetDefaultState(),v=-1,M=null,_.pop(),_.length>0?(f=_[_.length-1],D===!0&&vt.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Wl(A,K,ot,at){if(A.visible===!1)return;if(A.layers.test(K.layers)){if(A.isGroup)ot=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(K);else if(A.isLight)f.pushLight(A),A.castShadow&&f.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||F.intersectsSprite(A)){at&&X.setFromMatrixPosition(A.matrixWorld).applyMatrix4(W);let Ct=ft.update(A),Ft=A.material;Ft.visible&&m.push(A,Ct,Ft,ot,X.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||F.intersectsObject(A))){let Ct=ft.update(A),Ft=A.material;if(at&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),X.copy(A.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),X.copy(Ct.boundingSphere.center)),X.applyMatrix4(A.matrixWorld).applyMatrix4(W)),Array.isArray(Ft)){let Ot=Ct.groups;for(let qt=0,$t=Ot.length;qt<$t;qt++){let Bt=Ot[qt],le=Ft[Bt.materialIndex];le&&le.visible&&m.push(A,Ct,le,ot,X.z,Bt)}}else Ft.visible&&m.push(A,Ct,Ft,ot,X.z,null)}}let Mt=A.children;for(let Ct=0,Ft=Mt.length;Ct<Ft;Ct++)Wl(Mt[Ct],K,ot,at)}function Yu(A,K,ot,at){let j=A.opaque,Mt=A.transmissive,Ct=A.transparent;f.setupLightsView(ot),D===!0&&vt.setGlobalState(x.clippingPlanes,ot),at&&B.viewport(U.copy(at)),j.length>0&&Wo(j,K,ot),Mt.length>0&&Wo(Mt,K,ot),Ct.length>0&&Wo(Ct,K,ot),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function Zu(A,K,ot,at){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[at.id]===void 0&&(f.state.transmissionRenderTarget[at.id]=new Qe(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?bn:wi,minFilter:bs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace}));let Mt=f.state.transmissionRenderTarget[at.id],Ct=at.viewport||U;Mt.setSize(Ct.z,Ct.w);let Ft=x.getRenderTarget();x.setRenderTarget(Mt),x.getClearColor(q),st=x.getClearAlpha(),st<1&&x.setClearColor(16777215,.5),x.clear(),J&&Ht.render(ot);let Ot=x.toneMapping;x.toneMapping=Xi;let qt=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),f.setupLightsView(at),D===!0&&vt.setGlobalState(x.clippingPlanes,at),Wo(A,ot,at),R.updateMultisampleRenderTarget(Mt),R.updateRenderTargetMipmap(Mt),tt.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let Bt=0,le=K.length;Bt<le;Bt++){let we=K[Bt],Ae=we.object,fn=we.geometry,fe=we.material,kt=we.group;if(fe.side===$e&&Ae.layers.test(at.layers)){let fi=fe.side;fe.side=De,fe.needsUpdate=!0,$u(Ae,ot,at,fn,fe,kt),fe.side=fi,fe.needsUpdate=!0,$t=!0}}$t===!0&&(R.updateMultisampleRenderTarget(Mt),R.updateRenderTargetMipmap(Mt))}x.setRenderTarget(Ft),x.setClearColor(q,st),qt!==void 0&&(at.viewport=qt),x.toneMapping=Ot}function Wo(A,K,ot){let at=K.isScene===!0?K.overrideMaterial:null;for(let j=0,Mt=A.length;j<Mt;j++){let Ct=A[j],Ft=Ct.object,Ot=Ct.geometry,qt=at===null?Ct.material:at,$t=Ct.group;Ft.layers.test(ot.layers)&&$u(Ft,K,ot,Ot,qt,$t)}}function $u(A,K,ot,at,j,Mt){A.onBeforeRender(x,K,ot,at,j,Mt),A.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(x,K,ot,at,A,Mt),j.transparent===!0&&j.side===$e&&j.forceSinglePass===!1?(j.side=De,j.needsUpdate=!0,x.renderBufferDirect(ot,K,at,j,A,Mt),j.side=Yi,j.needsUpdate=!0,x.renderBufferDirect(ot,K,at,j,A,Mt),j.side=$e):x.renderBufferDirect(ot,K,at,j,A,Mt),A.onAfterRender(x,K,ot,at,j,Mt)}function Xo(A,K,ot){K.isScene!==!0&&(K=pt);let at=ht.get(A),j=f.state.lights,Mt=f.state.shadowsArray,Ct=j.state.version,Ft=Ut.getParameters(A,j.state,Mt,K,ot),Ot=Ut.getProgramCacheKey(Ft),qt=at.programs;at.environment=A.isMeshStandardMaterial?K.environment:null,at.fog=K.fog,at.envMap=(A.isMeshStandardMaterial?Q:S).get(A.envMap||at.environment),at.envMapRotation=at.environment!==null&&A.envMap===null?K.environmentRotation:A.envMapRotation,qt===void 0&&(A.addEventListener("dispose",Zt),qt=new Map,at.programs=qt);let $t=qt.get(Ot);if($t!==void 0){if(at.currentProgram===$t&&at.lightsStateVersion===Ct)return Ku(A,Ft),$t}else Ft.uniforms=Ut.getUniforms(A),A.onBeforeCompile(Ft,x),$t=Ut.acquireProgram(Ft,Ot),qt.set(Ot,$t),at.uniforms=Ft.uniforms;let Bt=at.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Bt.clippingPlanes=vt.uniform),Ku(A,Ft),at.needsLights=Zp(A),at.lightsStateVersion=Ct,at.needsLights&&(Bt.ambientLightColor.value=j.state.ambient,Bt.lightProbe.value=j.state.probe,Bt.directionalLights.value=j.state.directional,Bt.directionalLightShadows.value=j.state.directionalShadow,Bt.spotLights.value=j.state.spot,Bt.spotLightShadows.value=j.state.spotShadow,Bt.rectAreaLights.value=j.state.rectArea,Bt.ltc_1.value=j.state.rectAreaLTC1,Bt.ltc_2.value=j.state.rectAreaLTC2,Bt.pointLights.value=j.state.point,Bt.pointLightShadows.value=j.state.pointShadow,Bt.hemisphereLights.value=j.state.hemi,Bt.directionalShadowMap.value=j.state.directionalShadowMap,Bt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Bt.spotShadowMap.value=j.state.spotShadowMap,Bt.spotLightMatrix.value=j.state.spotLightMatrix,Bt.spotLightMap.value=j.state.spotLightMap,Bt.pointShadowMap.value=j.state.pointShadowMap,Bt.pointShadowMatrix.value=j.state.pointShadowMatrix),at.currentProgram=$t,at.uniformsList=null,$t}function Ju(A){if(A.uniformsList===null){let K=A.currentProgram.getUniforms();A.uniformsList=mr.seqWithValue(K.seq,A.uniforms)}return A.uniformsList}function Ku(A,K){let ot=ht.get(A);ot.outputColorSpace=K.outputColorSpace,ot.batching=K.batching,ot.batchingColor=K.batchingColor,ot.instancing=K.instancing,ot.instancingColor=K.instancingColor,ot.instancingMorph=K.instancingMorph,ot.skinning=K.skinning,ot.morphTargets=K.morphTargets,ot.morphNormals=K.morphNormals,ot.morphColors=K.morphColors,ot.morphTargetsCount=K.morphTargetsCount,ot.numClippingPlanes=K.numClippingPlanes,ot.numIntersection=K.numClipIntersection,ot.vertexAlphas=K.vertexAlphas,ot.vertexTangents=K.vertexTangents,ot.toneMapping=K.toneMapping}function qp(A,K,ot,at,j){K.isScene!==!0&&(K=pt),R.resetTextureUnits();let Mt=K.fog,Ct=at.isMeshStandardMaterial?K.environment:null,Ft=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Dr,Ot=(at.isMeshStandardMaterial?Q:S).get(at.envMap||Ct),qt=at.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,$t=!!ot.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),Bt=!!ot.morphAttributes.position,le=!!ot.morphAttributes.normal,we=!!ot.morphAttributes.color,Ae=Xi;at.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Ae=x.toneMapping);let fn=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,fe=fn!==void 0?fn.length:0,kt=ht.get(at),fi=f.state.lights;if(D===!0&&(C===!0||A!==M)){let Tn=A===M&&at.id===v;vt.setState(at,A,Tn)}let pe=!1;at.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==fi.state.version||kt.outputColorSpace!==Ft||j.isBatchedMesh&&kt.batching===!1||!j.isBatchedMesh&&kt.batching===!0||j.isBatchedMesh&&kt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&kt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&kt.instancing===!1||!j.isInstancedMesh&&kt.instancing===!0||j.isSkinnedMesh&&kt.skinning===!1||!j.isSkinnedMesh&&kt.skinning===!0||j.isInstancedMesh&&kt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&kt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&kt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&kt.instancingMorph===!1&&j.morphTexture!==null||kt.envMap!==Ot||at.fog===!0&&kt.fog!==Mt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==vt.numPlanes||kt.numIntersection!==vt.numIntersection)||kt.vertexAlphas!==qt||kt.vertexTangents!==$t||kt.morphTargets!==Bt||kt.morphNormals!==le||kt.morphColors!==we||kt.toneMapping!==Ae||kt.morphTargetsCount!==fe)&&(pe=!0):(pe=!0,kt.__version=at.version);let On=kt.currentProgram;pe===!0&&(On=Xo(at,K,j));let Gs=!1,xn=!1,Jr=!1,Re=On.getUniforms(),Jn=kt.uniforms;if(B.useProgram(On.program)&&(Gs=!0,xn=!0,Jr=!0),at.id!==v&&(v=at.id,xn=!0),Gs||M!==A){B.buffers.depth.getReversed()?(w.copy(A.projectionMatrix),Ym(w),Zm(w),Re.setValue(E,"projectionMatrix",w)):Re.setValue(E,"projectionMatrix",A.projectionMatrix),Re.setValue(E,"viewMatrix",A.matrixWorldInverse);let Oi=Re.map.cameraPosition;Oi!==void 0&&Oi.setValue(E,rt.setFromMatrixPosition(A.matrixWorld)),it.logarithmicDepthBuffer&&Re.setValue(E,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&Re.setValue(E,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,xn=!0,Jr=!0)}if(j.isSkinnedMesh){Re.setOptional(E,j,"bindMatrix"),Re.setOptional(E,j,"bindMatrixInverse");let Tn=j.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),Re.setValue(E,"boneTexture",Tn.boneTexture,R))}j.isBatchedMesh&&(Re.setOptional(E,j,"batchingTexture"),Re.setValue(E,"batchingTexture",j._matricesTexture,R),Re.setOptional(E,j,"batchingIdTexture"),Re.setValue(E,"batchingIdTexture",j._indirectTexture,R),Re.setOptional(E,j,"batchingColorTexture"),j._colorsTexture!==null&&Re.setValue(E,"batchingColorTexture",j._colorsTexture,R));let Kr=ot.morphAttributes;if((Kr.position!==void 0||Kr.normal!==void 0||Kr.color!==void 0)&&Gt.update(j,ot,On),(xn||kt.receiveShadow!==j.receiveShadow)&&(kt.receiveShadow=j.receiveShadow,Re.setValue(E,"receiveShadow",j.receiveShadow)),at.isMeshGouraudMaterial&&at.envMap!==null&&(Jn.envMap.value=Ot,Jn.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),at.isMeshStandardMaterial&&at.envMap===null&&K.environment!==null&&(Jn.envMapIntensity.value=K.environmentIntensity),xn&&(Re.setValue(E,"toneMappingExposure",x.toneMappingExposure),kt.needsLights&&Yp(Jn,Jr),Mt&&at.fog===!0&&St.refreshFogUniforms(Jn,Mt),St.refreshMaterialUniforms(Jn,at,O,$,f.state.transmissionRenderTarget[A.id]),mr.upload(E,Ju(kt),Jn,R)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(mr.upload(E,Ju(kt),Jn,R),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&Re.setValue(E,"center",j.center),Re.setValue(E,"modelViewMatrix",j.modelViewMatrix),Re.setValue(E,"normalMatrix",j.normalMatrix),Re.setValue(E,"modelMatrix",j.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){let Tn=at.uniformsGroups;for(let Oi=0,Bi=Tn.length;Oi<Bi;Oi++){let ju=Tn[Oi];Y.update(ju,On),Y.bind(ju,On)}}return On}function Yp(A,K){A.ambientLightColor.needsUpdate=K,A.lightProbe.needsUpdate=K,A.directionalLights.needsUpdate=K,A.directionalLightShadows.needsUpdate=K,A.pointLights.needsUpdate=K,A.pointLightShadows.needsUpdate=K,A.spotLights.needsUpdate=K,A.spotLightShadows.needsUpdate=K,A.rectAreaLights.needsUpdate=K,A.hemisphereLights.needsUpdate=K}function Zp(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(A,K,ot){ht.get(A.texture).__webglTexture=K,ht.get(A.depthTexture).__webglTexture=ot;let at=ht.get(A);at.__hasExternalTextures=!0,at.__autoAllocateDepthBuffer=ot===void 0,at.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),at.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,K){let ot=ht.get(A);ot.__webglFramebuffer=K,ot.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(A,K=0,ot=0){L=A,T=K,P=ot;let at=!0,j=null,Mt=!1,Ct=!1;if(A){let Ot=ht.get(A);if(Ot.__useDefaultFramebuffer!==void 0)B.bindFramebuffer(E.FRAMEBUFFER,null),at=!1;else if(Ot.__webglFramebuffer===void 0)R.setupRenderTarget(A);else if(Ot.__hasExternalTextures)R.rebindTextures(A,ht.get(A.texture).__webglTexture,ht.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Bt=A.depthTexture;if(Ot.__boundDepthTexture!==Bt){if(Bt!==null&&ht.has(Bt)&&(A.width!==Bt.image.width||A.height!==Bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(A)}}let qt=A.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(Ct=!0);let $t=ht.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray($t[K])?j=$t[K][ot]:j=$t[K],Mt=!0):A.samples>0&&R.useMultisampledRTT(A)===!1?j=ht.get(A).__webglMultisampledFramebuffer:Array.isArray($t)?j=$t[ot]:j=$t,U.copy(A.viewport),k.copy(A.scissor),V=A.scissorTest}else U.copy(gt).multiplyScalar(O).floor(),k.copy(xt).multiplyScalar(O).floor(),V=wt;if(B.bindFramebuffer(E.FRAMEBUFFER,j)&&at&&B.drawBuffers(A,j),B.viewport(U),B.scissor(k),B.setScissorTest(V),Mt){let Ot=ht.get(A.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ot.__webglTexture,ot)}else if(Ct){let Ot=ht.get(A.texture),qt=K||0;E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,Ot.__webglTexture,ot||0,qt)}v=-1},this.readRenderTargetPixels=function(A,K,ot,at,j,Mt,Ct){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=ht.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ct!==void 0&&(Ft=Ft[Ct]),Ft){B.bindFramebuffer(E.FRAMEBUFFER,Ft);try{let Ot=A.texture,qt=Ot.format,$t=Ot.type;if(!it.textureFormatReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=A.width-at&&ot>=0&&ot<=A.height-j&&E.readPixels(K,ot,at,j,Jt.convert(qt),Jt.convert($t),Mt)}finally{let Ot=L!==null?ht.get(L).__webglFramebuffer:null;B.bindFramebuffer(E.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(A,K,ot,at,j,Mt,Ct){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=ht.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ct!==void 0&&(Ft=Ft[Ct]),Ft){let Ot=A.texture,qt=Ot.format,$t=Ot.type;if(!it.textureFormatReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=A.width-at&&ot>=0&&ot<=A.height-j){B.bindFramebuffer(E.FRAMEBUFFER,Ft);let Bt=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,Bt),E.bufferData(E.PIXEL_PACK_BUFFER,Mt.byteLength,E.STREAM_READ),E.readPixels(K,ot,at,j,Jt.convert(qt),Jt.convert($t),0);let le=L!==null?ht.get(L).__webglFramebuffer:null;B.bindFramebuffer(E.FRAMEBUFFER,le);let we=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await qm(E,we,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,Bt),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,Mt),E.deleteBuffer(Bt),E.deleteSync(we),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,K=null,ot=0){A.isTexture!==!0&&(co("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,A=arguments[1]);let at=Math.pow(2,-ot),j=Math.floor(A.image.width*at),Mt=Math.floor(A.image.height*at),Ct=K!==null?K.x:0,Ft=K!==null?K.y:0;R.setTexture2D(A,0),E.copyTexSubImage2D(E.TEXTURE_2D,ot,0,0,Ct,Ft,j,Mt),B.unbindTexture()},this.copyTextureToTexture=function(A,K,ot=null,at=null,j=0){A.isTexture!==!0&&(co("WebGLRenderer: copyTextureToTexture function signature has changed."),at=arguments[0]||null,A=arguments[1],K=arguments[2],j=arguments[3]||0,ot=null);let Mt,Ct,Ft,Ot,qt,$t,Bt,le,we,Ae=A.isCompressedTexture?A.mipmaps[j]:A.image;ot!==null?(Mt=ot.max.x-ot.min.x,Ct=ot.max.y-ot.min.y,Ft=ot.isBox3?ot.max.z-ot.min.z:1,Ot=ot.min.x,qt=ot.min.y,$t=ot.isBox3?ot.min.z:0):(Mt=Ae.width,Ct=Ae.height,Ft=Ae.depth||1,Ot=0,qt=0,$t=0),at!==null?(Bt=at.x,le=at.y,we=at.z):(Bt=0,le=0,we=0);let fn=Jt.convert(K.format),fe=Jt.convert(K.type),kt;K.isData3DTexture?(R.setTexture3D(K,0),kt=E.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(R.setTexture2DArray(K,0),kt=E.TEXTURE_2D_ARRAY):(R.setTexture2D(K,0),kt=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,K.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,K.unpackAlignment);let fi=E.getParameter(E.UNPACK_ROW_LENGTH),pe=E.getParameter(E.UNPACK_IMAGE_HEIGHT),On=E.getParameter(E.UNPACK_SKIP_PIXELS),Gs=E.getParameter(E.UNPACK_SKIP_ROWS),xn=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,Ae.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Ae.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Ot),E.pixelStorei(E.UNPACK_SKIP_ROWS,qt),E.pixelStorei(E.UNPACK_SKIP_IMAGES,$t);let Jr=A.isDataArrayTexture||A.isData3DTexture,Re=K.isDataArrayTexture||K.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){let Jn=ht.get(A),Kr=ht.get(K),Tn=ht.get(Jn.__renderTarget),Oi=ht.get(Kr.__renderTarget);B.bindFramebuffer(E.READ_FRAMEBUFFER,Tn.__webglFramebuffer),B.bindFramebuffer(E.DRAW_FRAMEBUFFER,Oi.__webglFramebuffer);for(let Bi=0;Bi<Ft;Bi++)Jr&&E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,ht.get(A).__webglTexture,j,$t+Bi),A.isDepthTexture?(Re&&E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,ht.get(K).__webglTexture,j,we+Bi),E.blitFramebuffer(Ot,qt,Mt,Ct,Bt,le,Mt,Ct,E.DEPTH_BUFFER_BIT,E.NEAREST)):Re?E.copyTexSubImage3D(kt,j,Bt,le,we+Bi,Ot,qt,Mt,Ct):E.copyTexSubImage2D(kt,j,Bt,le,we+Bi,Ot,qt,Mt,Ct);B.bindFramebuffer(E.READ_FRAMEBUFFER,null),B.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else Re?A.isDataTexture||A.isData3DTexture?E.texSubImage3D(kt,j,Bt,le,we,Mt,Ct,Ft,fn,fe,Ae.data):K.isCompressedArrayTexture?E.compressedTexSubImage3D(kt,j,Bt,le,we,Mt,Ct,Ft,fn,Ae.data):E.texSubImage3D(kt,j,Bt,le,we,Mt,Ct,Ft,fn,fe,Ae):A.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,j,Bt,le,Mt,Ct,fn,fe,Ae.data):A.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,j,Bt,le,Ae.width,Ae.height,fn,Ae.data):E.texSubImage2D(E.TEXTURE_2D,j,Bt,le,Mt,Ct,fn,fe,Ae);E.pixelStorei(E.UNPACK_ROW_LENGTH,fi),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,pe),E.pixelStorei(E.UNPACK_SKIP_PIXELS,On),E.pixelStorei(E.UNPACK_SKIP_ROWS,Gs),E.pixelStorei(E.UNPACK_SKIP_IMAGES,xn),j===0&&K.generateMipmaps&&E.generateMipmap(kt),B.unbindTexture()},this.copyTextureToTexture3D=function(A,K,ot=null,at=null,j=0){return A.isTexture!==!0&&(co("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ot=arguments[0]||null,at=arguments[1]||null,A=arguments[2],K=arguments[3],j=arguments[4]||0),co('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,K,ot,at,j)},this.initRenderTarget=function(A){ht.get(A).__webglFramebuffer===void 0&&R.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?R.setTextureCube(A,0):A.isData3DTexture?R.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?R.setTexture2DArray(A,0):R.setTexture2D(A,0),B.unbindTexture()},this.resetState=function(){T=0,P=0,L=null,B.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}};var br=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new It(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Pn=class extends Je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Wa=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=dh,this.updateRanges=[],this.version=0,this.uuid=ni()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},hn=new z,vo=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)hn.fromBufferAttribute(this,e),hn.applyMatrix4(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)hn.fromBufferAttribute(this,e),hn.applyNormalMatrix(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)hn.fromBufferAttribute(this,e),hn.transformDirection(t),this.setXYZ(e,hn.x,hn.y,hn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ye(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ye(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ye(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ye(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ye(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Vn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Vn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Vn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Vn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),s=ye(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),s=ye(s,this.array),r=ye(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ue(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ri=class extends si{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new It(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},sr,no=new z,rr=new z,or=new z,ar=new et,io=new et,Gf=new te,fa=new z,so=new z,pa=new z,jd=new et,_c=new et,Qd=new et,Ki=class extends Je{constructor(t=new Ri){if(super(),this.isSprite=!0,this.type="Sprite",sr===void 0){sr=new ie;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Wa(e,5);sr.setIndex([0,1,2,0,2,3]),sr.setAttribute("position",new vo(n,3,0,!1)),sr.setAttribute("uv",new vo(n,2,3,!1))}this.geometry=sr,this.material=t,this.center=new et(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),rr.setFromMatrixScale(this.matrixWorld),Gf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),or.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&rr.multiplyScalar(-or.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;ma(fa.set(-.5,-.5,0),or,o,rr,s,r),ma(so.set(.5,-.5,0),or,o,rr,s,r),ma(pa.set(.5,.5,0),or,o,rr,s,r),jd.set(0,0),_c.set(1,0),Qd.set(1,1);let a=t.ray.intersectTriangle(fa,so,pa,!1,no);if(a===null&&(ma(so.set(-.5,.5,0),or,o,rr,s,r),_c.set(0,1),a=t.ray.intersectTriangle(fa,pa,so,!1,no),a===null))return;let l=t.ray.origin.distanceTo(no);l<t.near||l>t.far||e.push({distance:l,point:no.clone(),uv:Mi.getInterpolation(no,fa,so,pa,jd,_c,Qd,new et),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ma(i,t,e,n,s,r){ar.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(io.x=r*ar.x-s*ar.y,io.y=s*ar.x+r*ar.y):io.copy(ar),i.copy(t),i.x+=io.x,i.y+=io.y,i.applyMatrix4(Gf)}var Mo=class extends je{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Mn,h=Mn,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var bo=class extends ue{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},lr=new te,tf=new te,ga=[],ef=new Rn,H_=new te,ro=new bt,oo=new Ai,Sr=class extends bt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new bo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,H_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Rn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,lr),ef.copy(t.boundingBox).applyMatrix4(lr),this.boundingBox.union(ef)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ai),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,lr),oo.copy(t.boundingSphere).applyMatrix4(lr),this.boundingSphere.union(oo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ro.geometry=this.geometry,ro.material=this.material,ro.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oo.copy(this.boundingSphere),oo.applyMatrix4(n),t.ray.intersectsSphere(oo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,lr),tf.multiplyMatrices(n,lr),ro.matrixWorld=tf,ro.raycast(t,ga);for(let o=0,a=ga.length;o<a;o++){let l=ga[o];l.instanceId=r,l.object=this,e.push(l)}ga.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new bo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Mo(new Float32Array(s*this.count),s,this.count,lu,ti));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var ji=class extends si{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new It(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Xa=new z,qa=new z,nf=new te,ao=new Zi,ya=new Ai,vc=new z,sf=new z,Er=class extends Je{constructor(t=new ie,e=new ji){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Xa.fromBufferAttribute(e,s-1),qa.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Xa.distanceTo(qa);t.setAttribute("lineDistance",new Xt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ya.copy(n.boundingSphere),ya.applyMatrix4(s),ya.radius+=r,t.ray.intersectsSphere(ya)===!1)return;nf.copy(s).invert(),ao.copy(t.ray).applyMatrix4(nf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let y=p,m=g-1;y<m;y+=c){let f=h.getX(y),b=h.getX(y+1),_=xa(this,t,ao,l,f,b);_&&e.push(_)}if(this.isLineLoop){let y=h.getX(g-1),m=h.getX(p),f=xa(this,t,ao,l,y,m);f&&e.push(f)}}else{let p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let y=p,m=g-1;y<m;y+=c){let f=xa(this,t,ao,l,y,y+1);f&&e.push(f)}if(this.isLineLoop){let y=xa(this,t,ao,l,g-1,p);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function xa(i,t,e,n,s,r){let o=i.geometry.attributes.position;if(Xa.fromBufferAttribute(o,s),qa.fromBufferAttribute(o,r),e.distanceSqToSegment(Xa,qa,vc,sf)>n)return;vc.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(vc);if(!(l<t.near||l>t.far))return{distance:l,point:sf.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var rf=new z,of=new z,Ya=class extends Er{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)rf.fromBufferAttribute(e,s),of.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+rf.distanceTo(of);t.setAttribute("lineDistance",new Xt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var So=class extends si{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new It(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},af=new te,Ch=new Zi,_a=new Ai,va=new z,Ci=class extends Je{constructor(t=new ie,e=new So){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_a.copy(n.boundingSphere),_a.applyMatrix4(s),_a.radius+=r,t.ray.intersectsSphere(_a)===!1)return;af.copy(s).invert(),Ch.copy(t.ray).applyMatrix4(af);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,y=p;g<y;g++){let m=c.getX(g);va.fromBufferAttribute(u,m),lf(va,m,l,s,t,e,this)}}else{let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,y=p;g<y;g++)va.fromBufferAttribute(u,g),lf(va,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function lf(i,t,e,n,s,r,o){let a=Ch.distanceSqToPoint(i);if(a<e){let l=new z;Ch.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Qi=class extends je{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},In=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,p=(o-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new et:new z);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new z,s=[],r=[],o=[],a=new z,l=new te;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new z)}r[0]=new z,o[0]=new z;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(He(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(He(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Eo=class extends In{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new et){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ph=class extends Eo{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function pu(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,p*=h,s(o,a,d,p)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Ma=new z,Mc=new pu,bc=new pu,Sc=new pu,Ih=class extends In{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new z){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Ma.subVectors(s[0],s[1]).add(s[0]),c=Ma);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ma.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ma),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),p),y=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Mc.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,y,m),bc.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,y,m),Sc.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(Mc.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),bc.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Sc.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Mc.calc(l),bc.calc(l),Sc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new z().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function cf(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function V_(i,t){let e=1-i;return e*e*t}function G_(i,t){return 2*(1-i)*i*t}function W_(i,t){return i*i*t}function po(i,t,e,n){return V_(i,t)+G_(i,e)+W_(i,n)}function X_(i,t){let e=1-i;return e*e*e*t}function q_(i,t){let e=1-i;return 3*e*e*i*t}function Y_(i,t){return 3*(1-i)*i*i*t}function Z_(i,t){return i*i*i*t}function mo(i,t,e,n,s){return X_(i,t)+q_(i,e)+Y_(i,n)+Z_(i,s)}var Za=class extends In{constructor(t=new et,e=new et,n=new et,s=new et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new et){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(mo(t,s.x,r.x,o.x,a.x),mo(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Lh=class extends In{constructor(t=new z,e=new z,n=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new z){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(mo(t,s.x,r.x,o.x,a.x),mo(t,s.y,r.y,o.y,a.y),mo(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},$a=class extends In{constructor(t=new et,e=new et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new et){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Dh=class extends In{constructor(t=new z,e=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new z){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ja=class extends In{constructor(t=new et,e=new et,n=new et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new et){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(po(t,s.x,r.x,o.x),po(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Uh=class extends In{constructor(t=new z,e=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new z){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(po(t,s.x,r.x,o.x),po(t,s.y,r.y,o.y),po(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ka=class extends In{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new et){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(cf(a,l.x,c.x,h.x,u.x),cf(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new et().fromArray(s))}return this}},Nh=Object.freeze({__proto__:null,ArcCurve:Ph,CatmullRomCurve3:Ih,CubicBezierCurve:Za,CubicBezierCurve3:Lh,EllipseCurve:Eo,LineCurve:$a,LineCurve3:Dh,QuadraticBezierCurve:Ja,QuadraticBezierCurve3:Uh,SplineCurve:Ka}),Fh=class extends In{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Nh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Nh[s.type]().fromJSON(s))}return this}},Ln=class extends Fh{constructor(t){super(),this.type="Path",this.currentPoint=new et,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new $a(this.currentPoint.clone(),new et(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Ja(this.currentPoint.clone(),new et(t,e),new et(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Za(this.currentPoint.clone(),new et(t,e),new et(n,s),new et(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ka(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new Eo(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},wo=class i extends ie{constructor(t=[new et(0,-.5),new et(.5,0),new et(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=He(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new z,d=new et,p=new z,g=new z,y=new z,m=0,f=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:m=t[b+1].x-t[b].x,f=t[b+1].y-t[b].y,p.x=f*1,p.y=-m,p.z=f*0,y.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:m=t[b+1].x-t[b].x,f=t[b+1].y-t[b].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=y.x,p.y+=y.y,p.z+=y.z,p.normalize(),l.push(p.x,p.y,p.z),y.copy(g)}for(let b=0;b<=e;b++){let _=n+b*h*s,x=Math.sin(_),I=Math.cos(_);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*x,u.y=t[T].y,u.z=t[T].x*I,o.push(u.x,u.y,u.z),d.x=b/e,d.y=T/(t.length-1),a.push(d.x,d.y);let P=l[3*T+0]*x,L=l[3*T+1],v=l[3*T+0]*I;c.push(P,L,v)}}for(let b=0;b<e;b++)for(let _=0;_<t.length-1;_++){let x=_+b*t.length,I=x,T=x+t.length,P=x+t.length+1,L=x+1;r.push(I,T,L),r.push(P,L,T)}this.setIndex(r),this.setAttribute("position",new Xt(o,3)),this.setAttribute("uv",new Xt(a,2)),this.setAttribute("normal",new Xt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},ts=class i extends wo{constructor(t=1,e=1,n=4,s=8){let r=new Ln;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},ws=class i extends ie{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new z,h=new et;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let p=n+u/e*s;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Xt(o,3)),this.setAttribute("normal",new Xt(a,3)),this.setAttribute("uv",new Xt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Be=class i extends ie{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],g=0,y=[],m=n/2,f=0;b(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Xt(u,3)),this.setAttribute("normal",new Xt(d,3)),this.setAttribute("uv",new Xt(p,2));function b(){let x=new z,I=new z,T=0,P=(e-t)/n;for(let L=0;L<=r;L++){let v=[],M=L/r,U=M*(e-t)+t;for(let k=0;k<=s;k++){let V=k/s,q=V*l+a,st=Math.sin(q),H=Math.cos(q);I.x=U*st,I.y=-M*n+m,I.z=U*H,u.push(I.x,I.y,I.z),x.set(st,P,H).normalize(),d.push(x.x,x.y,x.z),p.push(V,1-M),v.push(g++)}y.push(v)}for(let L=0;L<s;L++)for(let v=0;v<r;v++){let M=y[v][L],U=y[v+1][L],k=y[v+1][L+1],V=y[v][L+1];(t>0||v!==0)&&(h.push(M,U,V),T+=3),(e>0||v!==r-1)&&(h.push(U,k,V),T+=3)}c.addGroup(f,T,0),f+=T}function _(x){let I=g,T=new et,P=new z,L=0,v=x===!0?t:e,M=x===!0?1:-1;for(let k=1;k<=s;k++)u.push(0,m*M,0),d.push(0,M,0),p.push(.5,.5),g++;let U=g;for(let k=0;k<=s;k++){let q=k/s*l+a,st=Math.cos(q),H=Math.sin(q);P.x=v*H,P.y=m*M,P.z=v*st,u.push(P.x,P.y,P.z),d.push(0,M,0),T.x=st*.5+.5,T.y=H*.5*M+.5,p.push(T.x,T.y),g++}for(let k=0;k<s;k++){let V=I+k,q=U+k;x===!0?h.push(q,q+1,V):h.push(q+1,q,V),L+=3}c.addGroup(f,L,x===!0?1:2),f+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Oh=class i extends ie{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Xt(r,3)),this.setAttribute("normal",new Xt(r.slice(),3)),this.setAttribute("uv",new Xt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let _=new z,x=new z,I=new z;for(let T=0;T<e.length;T+=3)p(e[T+0],_),p(e[T+1],x),p(e[T+2],I),l(_,x,I,b)}function l(b,_,x,I){let T=I+1,P=[];for(let L=0;L<=T;L++){P[L]=[];let v=b.clone().lerp(x,L/T),M=_.clone().lerp(x,L/T),U=T-L;for(let k=0;k<=U;k++)k===0&&L===T?P[L][k]=v:P[L][k]=v.clone().lerp(M,k/U)}for(let L=0;L<T;L++)for(let v=0;v<2*(T-L)-1;v++){let M=Math.floor(v/2);v%2===0?(d(P[L][M+1]),d(P[L+1][M]),d(P[L][M])):(d(P[L][M+1]),d(P[L+1][M+1]),d(P[L+1][M]))}}function c(b){let _=new z;for(let x=0;x<r.length;x+=3)_.x=r[x+0],_.y=r[x+1],_.z=r[x+2],_.normalize().multiplyScalar(b),r[x+0]=_.x,r[x+1]=_.y,r[x+2]=_.z}function h(){let b=new z;for(let _=0;_<r.length;_+=3){b.x=r[_+0],b.y=r[_+1],b.z=r[_+2];let x=m(b)/2/Math.PI+.5,I=f(b)/Math.PI+.5;o.push(x,1-I)}g(),u()}function u(){for(let b=0;b<o.length;b+=6){let _=o[b+0],x=o[b+2],I=o[b+4],T=Math.max(_,x,I),P=Math.min(_,x,I);T>.9&&P<.1&&(_<.2&&(o[b+0]+=1),x<.2&&(o[b+2]+=1),I<.2&&(o[b+4]+=1))}}function d(b){r.push(b.x,b.y,b.z)}function p(b,_){let x=b*3;_.x=t[x+0],_.y=t[x+1],_.z=t[x+2]}function g(){let b=new z,_=new z,x=new z,I=new z,T=new et,P=new et,L=new et;for(let v=0,M=0;v<r.length;v+=9,M+=6){b.set(r[v+0],r[v+1],r[v+2]),_.set(r[v+3],r[v+4],r[v+5]),x.set(r[v+6],r[v+7],r[v+8]),T.set(o[M+0],o[M+1]),P.set(o[M+2],o[M+3]),L.set(o[M+4],o[M+5]),I.copy(b).add(_).add(x).divideScalar(3);let U=m(I);y(T,M+0,b,U),y(P,M+2,_,U),y(L,M+4,x,U)}}function y(b,_,x,I){I<0&&b.x===1&&(o[_]=b.x-1),x.x===0&&x.z===0&&(o[_]=I/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function f(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var ba=new z,Sa=new z,Ec=new z,Ea=new Mi,ja=class extends ie{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(fr*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:y,b:m,c:f}=Ea;if(y.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),f.fromBufferAttribute(a,c[2]),Ea.getNormal(Ec),u[0]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let b=0;b<3;b++){let _=(b+1)%3,x=u[b],I=u[_],T=Ea[h[b]],P=Ea[h[_]],L=`${x}_${I}`,v=`${I}_${x}`;v in d&&d[v]?(Ec.dot(d[v].normal)<=r&&(p.push(T.x,T.y,T.z),p.push(P.x,P.y,P.z)),d[v]=null):L in d||(d[L]={index0:c[b],index1:c[_],normal:Ec.clone()})}}for(let g in d)if(d[g]){let{index0:y,index1:m}=d[g];ba.fromBufferAttribute(a,y),Sa.fromBufferAttribute(a,m),p.push(ba.x,ba.y,ba.z),p.push(Sa.x,Sa.y,Sa.z)}this.setAttribute("position",new Xt(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},ii=class extends Ln{constructor(t){super(t),this.uuid=ni(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Ln().fromJSON(s))}return this}},$_={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Wf(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,p;if(n&&(r=tv(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-a,h-l),p=p!==0?32767/p:0}return To(r,o,e,a,l,p,0),o}};function Wf(i,t,e,n,s){let r,o;if(s===uv(i,t,e,n)>0)for(r=t;r<e;r+=n)o=hf(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=hf(r,i[r],i[r+1],o);return o&&ul(o,o.next)&&(Ro(o),o=o.next),o}function Ts(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ul(e,e.next)||Le(e.prev,e,e.next)===0)){if(Ro(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function To(i,t,e,n,s,r,o){if(!i)return;!o&&r&&rv(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?K_(i,n,s,r):J_(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Ro(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=j_(Ts(i),t,e),To(i,t,e,n,s,r,2)):o===2&&Q_(i,t,e,n,s,r):To(Ts(i),t,e,n,s,r,1);break}}}function J_(i){let t=i.prev,e=i,n=i.next;if(Le(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&hr(s,a,r,l,o,c,g.x,g.y)&&Le(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function K_(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Le(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,p=a<l?a<c?a:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,y=a>l?a>c?a:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,f=Bh(p,g,t,e,n),b=Bh(y,m,t,e,n),_=i.prevZ,x=i.nextZ;for(;_&&_.z>=f&&x&&x.z<=b;){if(_.x>=p&&_.x<=y&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&hr(a,h,l,u,c,d,_.x,_.y)&&Le(_.prev,_,_.next)>=0||(_=_.prevZ,x.x>=p&&x.x<=y&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&hr(a,h,l,u,c,d,x.x,x.y)&&Le(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;_&&_.z>=f;){if(_.x>=p&&_.x<=y&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&hr(a,h,l,u,c,d,_.x,_.y)&&Le(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;x&&x.z<=b;){if(x.x>=p&&x.x<=y&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&hr(a,h,l,u,c,d,x.x,x.y)&&Le(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function j_(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!ul(s,r)&&Xf(s,n,n.next,r)&&Ao(s,r)&&Ao(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Ro(n),Ro(n.next),n=i=r),n=n.next}while(n!==i);return Ts(n)}function Q_(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&lv(o,a)){let l=qf(o,a);o=Ts(o,o.next),l=Ts(l,l.next),To(o,t,e,n,s,r,0),To(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function tv(i,t,e,n){let s=[],r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Wf(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(av(c));for(s.sort(ev),r=0;r<s.length;r++)e=nv(s[r],e);return e}function ev(i,t){return i.x-t.x}function nv(i,t){let e=iv(i,t);if(!e)return t;let n=qf(e,i);return Ts(n,n.next),Ts(e,e.next)}function iv(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&hr(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Ao(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&sv(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function sv(i,t){return Le(i.prev,i,t.prev)<0&&Le(t.next,i,i.next)<0}function rv(i,t,e,n){let s=i;do s.z===0&&(s.z=Bh(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,ov(s)}function ov(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function Bh(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function av(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function hr(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function lv(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!cv(i,t)&&(Ao(i,t)&&Ao(t,i)&&hv(i,t)&&(Le(i.prev,i,t.prev)||Le(i,t.prev,t))||ul(i,t)&&Le(i.prev,i,i.next)>0&&Le(t.prev,t,t.next)>0)}function Le(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ul(i,t){return i.x===t.x&&i.y===t.y}function Xf(i,t,e,n){let s=Ta(Le(i,t,e)),r=Ta(Le(i,t,n)),o=Ta(Le(e,n,i)),a=Ta(Le(e,n,t));return!!(s!==r&&o!==a||s===0&&wa(i,e,t)||r===0&&wa(i,n,t)||o===0&&wa(e,i,n)||a===0&&wa(e,t,n))}function wa(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ta(i){return i>0?1:i<0?-1:0}function cv(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Xf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ao(i,t){return Le(i.prev,i,i.next)<0?Le(i,t,i.next)>=0&&Le(i,i.prev,t)>=0:Le(i,t,i.prev)<0||Le(i,i.next,t)<0}function hv(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function qf(i,t){let e=new zh(i.i,i.x,i.y),n=new zh(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function hf(i,t,e,n){let s=new zh(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ro(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function zh(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function uv(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var qi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];uf(t),df(n,t);let o=t.length;e.forEach(uf);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,df(n,e[l]);let a=$_.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function uf(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function df(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Qa=class i extends ie{constructor(t=new ii([new et(.5,.5),new et(-.5,.5),new et(-.5,-.5),new et(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Xt(s,3)),this.setAttribute("uv",new Xt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:dv,_,x=!1,I,T,P,L;f&&(_=f.getSpacedPoints(h),x=!0,d=!1,I=f.computeFrenetFrames(h,!1),T=new z,P=new z,L=new z),d||(m=0,p=0,g=0,y=0);let v=a.extractPoints(c),M=v.shape,U=v.holes;if(!qi.isClockWise(M)){M=M.reverse();for(let J=0,Z=U.length;J<Z;J++){let E=U[J];qi.isClockWise(E)&&(U[J]=E.reverse())}}let V=qi.triangulateShape(M,U),q=M;for(let J=0,Z=U.length;J<Z;J++){let E=U[J];M=M.concat(E)}function st(J,Z,E){return Z||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(Z,E)}let H=M.length,$=V.length;function O(J,Z,E){let nt,tt,it,B=J.x-Z.x,N=J.y-Z.y,ht=E.x-J.x,R=E.y-J.y,S=B*B+N*N,Q=B*R-N*ht;if(Math.abs(Q)>Number.EPSILON){let ct=Math.sqrt(S),mt=Math.sqrt(ht*ht+R*R),ft=Z.x-N/ct,Ut=Z.y+B/ct,St=E.x-R/mt,At=E.y+ht/mt,Yt=((St-ft)*R-(At-Ut)*ht)/(B*R-N*ht);nt=ft+B*Yt-J.x,tt=Ut+N*Yt-J.y;let vt=nt*nt+tt*tt;if(vt<=2)return new et(nt,tt);it=Math.sqrt(vt/2)}else{let ct=!1;B>Number.EPSILON?ht>Number.EPSILON&&(ct=!0):B<-Number.EPSILON?ht<-Number.EPSILON&&(ct=!0):Math.sign(N)===Math.sign(R)&&(ct=!0),ct?(nt=-N,tt=B,it=Math.sqrt(S)):(nt=B,tt=N,it=Math.sqrt(S/2))}return new et(nt/it,tt/it)}let dt=[];for(let J=0,Z=q.length,E=Z-1,nt=J+1;J<Z;J++,E++,nt++)E===Z&&(E=0),nt===Z&&(nt=0),dt[J]=O(q[J],q[E],q[nt]);let lt=[],gt,xt=dt.concat();for(let J=0,Z=U.length;J<Z;J++){let E=U[J];gt=[];for(let nt=0,tt=E.length,it=tt-1,B=nt+1;nt<tt;nt++,it++,B++)it===tt&&(it=0),B===tt&&(B=0),gt[nt]=O(E[nt],E[it],E[B]);lt.push(gt),xt=xt.concat(gt)}for(let J=0;J<m;J++){let Z=J/m,E=p*Math.cos(Z*Math.PI/2),nt=g*Math.sin(Z*Math.PI/2)+y;for(let tt=0,it=q.length;tt<it;tt++){let B=st(q[tt],dt[tt],nt);w(B.x,B.y,-E)}for(let tt=0,it=U.length;tt<it;tt++){let B=U[tt];gt=lt[tt];for(let N=0,ht=B.length;N<ht;N++){let R=st(B[N],gt[N],nt);w(R.x,R.y,-E)}}}let wt=g+y;for(let J=0;J<H;J++){let Z=d?st(M[J],xt[J],wt):M[J];x?(P.copy(I.normals[0]).multiplyScalar(Z.x),T.copy(I.binormals[0]).multiplyScalar(Z.y),L.copy(_[0]).add(P).add(T),w(L.x,L.y,L.z)):w(Z.x,Z.y,0)}for(let J=1;J<=h;J++)for(let Z=0;Z<H;Z++){let E=d?st(M[Z],xt[Z],wt):M[Z];x?(P.copy(I.normals[J]).multiplyScalar(E.x),T.copy(I.binormals[J]).multiplyScalar(E.y),L.copy(_[J]).add(P).add(T),w(L.x,L.y,L.z)):w(E.x,E.y,u/h*J)}for(let J=m-1;J>=0;J--){let Z=J/m,E=p*Math.cos(Z*Math.PI/2),nt=g*Math.sin(Z*Math.PI/2)+y;for(let tt=0,it=q.length;tt<it;tt++){let B=st(q[tt],dt[tt],nt);w(B.x,B.y,u+E)}for(let tt=0,it=U.length;tt<it;tt++){let B=U[tt];gt=lt[tt];for(let N=0,ht=B.length;N<ht;N++){let R=st(B[N],gt[N],nt);x?w(R.x,R.y+_[h-1].y,_[h-1].x+E):w(R.x,R.y,u+E)}}}F(),D();function F(){let J=s.length/3;if(d){let Z=0,E=H*Z;for(let nt=0;nt<$;nt++){let tt=V[nt];W(tt[2]+E,tt[1]+E,tt[0]+E)}Z=h+m*2,E=H*Z;for(let nt=0;nt<$;nt++){let tt=V[nt];W(tt[0]+E,tt[1]+E,tt[2]+E)}}else{for(let Z=0;Z<$;Z++){let E=V[Z];W(E[2],E[1],E[0])}for(let Z=0;Z<$;Z++){let E=V[Z];W(E[0]+H*h,E[1]+H*h,E[2]+H*h)}}n.addGroup(J,s.length/3-J,0)}function D(){let J=s.length/3,Z=0;C(q,Z),Z+=q.length;for(let E=0,nt=U.length;E<nt;E++){let tt=U[E];C(tt,Z),Z+=tt.length}n.addGroup(J,s.length/3-J,1)}function C(J,Z){let E=J.length;for(;--E>=0;){let nt=E,tt=E-1;tt<0&&(tt=J.length-1);for(let it=0,B=h+m*2;it<B;it++){let N=H*it,ht=H*(it+1),R=Z+nt+N,S=Z+tt+N,Q=Z+tt+ht,ct=Z+nt+ht;rt(R,S,Q,ct)}}}function w(J,Z,E){l.push(J),l.push(Z),l.push(E)}function W(J,Z,E){X(J),X(Z),X(E);let nt=s.length/3,tt=b.generateTopUV(n,s,nt-3,nt-2,nt-1);pt(tt[0]),pt(tt[1]),pt(tt[2])}function rt(J,Z,E,nt){X(J),X(Z),X(nt),X(Z),X(E),X(nt);let tt=s.length/3,it=b.generateSideWallUV(n,s,tt-6,tt-3,tt-2,tt-1);pt(it[0]),pt(it[1]),pt(it[3]),pt(it[1]),pt(it[2]),pt(it[3])}function X(J){s.push(l[J*3+0]),s.push(l[J*3+1]),s.push(l[J*3+2])}function pt(J){r.push(J.x),r.push(J.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return fv(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Nh[s.type]().fromJSON(s)),new i(n,t.options)}},dv={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new et(r,o),new et(a,l),new et(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],p=t[s*3+1],g=t[s*3+2],y=t[r*3],m=t[r*3+1],f=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new et(o,1-l),new et(c,1-u),new et(d,1-g),new et(y,1-f)]:[new et(a,1-l),new et(h,1-u),new et(p,1-g),new et(m,1-f)]}};function fv(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var As=class i extends Oh{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Co=class i extends ie{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=t,d=(e-t)/s,p=new z,g=new et;for(let y=0;y<=s;y++){for(let m=0;m<=n;m++){let f=r+m/n*o;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let y=0;y<s;y++){let m=y*(n+1);for(let f=0;f<n;f++){let b=f+m,_=b,x=b+n+1,I=b+n+2,T=b+1;a.push(_,x,T),a.push(x,I,T)}}this.setIndex(a),this.setAttribute("position",new Xt(l,3)),this.setAttribute("normal",new Xt(c,3)),this.setAttribute("uv",new Xt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var ze=class i extends ie{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new z,d=new z,p=[],g=[],y=[],m=[];for(let f=0;f<=n;f++){let b=[],_=f/n,x=0;f===0&&o===0?x=.5/e:f===n&&l===Math.PI&&(x=-.5/e);for(let I=0;I<=e;I++){let T=I/e;u.x=-t*Math.cos(s+T*r)*Math.sin(o+_*a),u.y=t*Math.cos(o+_*a),u.z=t*Math.sin(s+T*r)*Math.sin(o+_*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),m.push(T+x,1-_),b.push(c++)}h.push(b)}for(let f=0;f<n;f++)for(let b=0;b<e;b++){let _=h[f][b+1],x=h[f][b],I=h[f+1][b],T=h[f+1][b+1];(f!==0||o>0)&&p.push(_,x,T),(f!==n-1||l<Math.PI)&&p.push(x,I,T)}this.setIndex(p),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(y,3)),this.setAttribute("uv",new Xt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Rs=class i extends ie{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new z,u=new z,d=new z;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){let y=g/s*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(y),u.y=(t+e*Math.cos(m))*Math.sin(y),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){let y=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,b=(s+1)*p+g;o.push(y,m,b),o.push(m,f,b)}this.setIndex(o),this.setAttribute("position",new Xt(a,3)),this.setAttribute("normal",new Xt(l,3)),this.setAttribute("uv",new Xt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var tl=class extends se{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},ce=class extends si{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new It(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Df,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},es=class extends ce{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new et(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return He(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new It(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new It(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new It(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function Aa(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function pv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var wr=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},kh=class extends wr{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nd,endingEnd:nd}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case id:r=t,a=2*e-n;break;case sd:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case id:o=t,l=2*n-e;break;case sd:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),y=g*g,m=y*g,f=-d*m+2*d*y-d*g,b=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*g+1,_=(-1-p)*m+(1.5+p)*y+.5*g,x=p*m-p*y;for(let I=0;I!==a;++I)r[I]=f*o[h+I]+b*o[c+I]+_*o[l+I]+x*o[u+I];return r}},Hh=class extends wr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Vh=class extends wr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Wn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Aa(e,this.TimeBufferType),this.values=Aa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Aa(t.times,Array),values:Aa(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Vh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Hh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new kh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Da:e=this.InterpolantFactoryMethodDiscrete;break;case uh:e=this.InterpolantFactoryMethodLinear;break;case ql:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Da;case this.InterpolantFactoryMethodLinear:return uh;case this.InterpolantFactoryMethodSmooth:return ql}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&pv(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ql,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){let y=e[u+g];if(y!==e[d+g]||y!==e[p+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let p=0;p!==n;++p)e[d+p]=e[u+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Wn.prototype.TimeBufferType=Float32Array;Wn.prototype.ValueBufferType=Float32Array;Wn.prototype.DefaultInterpolation=uh;var Cs=class extends Wn{constructor(t,e,n){super(t,e,n)}};Cs.prototype.ValueTypeName="bool";Cs.prototype.ValueBufferType=Array;Cs.prototype.DefaultInterpolation=Da;Cs.prototype.InterpolantFactoryMethodLinear=void 0;Cs.prototype.InterpolantFactoryMethodSmooth=void 0;var Gh=class extends Wn{};Gh.prototype.ValueTypeName="color";var Wh=class extends Wn{};Wh.prototype.ValueTypeName="number";var Xh=class extends wr{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Oe.slerpFlat(r,0,o,c-a,o,c,l);return r}},el=class extends Wn{InterpolantFactoryMethodLinear(t){return new Xh(this.times,this.values,this.getValueSize(),t)}};el.prototype.ValueTypeName="quaternion";el.prototype.InterpolantFactoryMethodSmooth=void 0;var Ps=class extends Wn{constructor(t,e,n){super(t,e,n)}};Ps.prototype.ValueTypeName="string";Ps.prototype.ValueBufferType=Array;Ps.prototype.DefaultInterpolation=Da;Ps.prototype.InterpolantFactoryMethodLinear=void 0;Ps.prototype.InterpolantFactoryMethodSmooth=void 0;var qh=class extends Wn{};qh.prototype.ValueTypeName="vector";var ff={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Yh=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},mv=new Yh,Tr=class{constructor(t){this.manager=t!==void 0?t:mv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Tr.DEFAULT_MATERIAL_NAME="__DEFAULT";var _i={},Zh=class extends Error{constructor(t,e){super(t),this.response=e}},nl=class extends Tr{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=ff.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(_i[t]!==void 0){_i[t].push({onLoad:e,onProgress:n,onError:s});return}_i[t]=[],_i[t].push({onLoad:e,onProgress:n,onError:s});let o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;let h=_i[t],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0,y=0,m=new ReadableStream({start(f){b();function b(){u.read().then(({done:_,value:x})=>{if(_)f.close();else{y+=x.byteLength;let I=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:p});for(let T=0,P=h.length;T<P;T++){let L=h[T];L.onProgress&&L.onProgress(I)}f.enqueue(x),b()}},_=>{f.error(_)})}}});return new Response(m)}else throw new Zh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{ff.add(t,c);let h=_i[t];delete _i[t];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{let h=_i[t];if(h===void 0)throw this.manager.itemError(t),c;delete _i[t];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onError&&p.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}};var Ar=class extends Je{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new It(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Rr=class extends Ar{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.groundColor=new It(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},wc=new te,pf=new z,mf=new z,il=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _o,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;pf.setFromMatrixPosition(t.matrixWorld),e.position.copy(pf),mf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(mf),e.updateMatrixWorld(),wc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var gf=new te,lo=new z,Tc=new z,$h=class extends il{constructor(){super(new Ve(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new et(4,2),this._viewportCount=6,this._viewports=[new xe(2,1,1,1),new xe(0,1,1,1),new xe(3,1,1,1),new xe(1,1,1,1),new xe(3,0,1,1),new xe(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),lo.setFromMatrixPosition(t.matrixWorld),n.position.copy(lo),Tc.copy(n.position),Tc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Tc),n.updateMatrixWorld(),s.makeTranslation(-lo.x,-lo.y,-lo.z),gf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gf)}},Cr=class extends Ar{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new $h}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Jh=class extends il{constructor(){super(new $i(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Is=class extends Ar{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.target=new Je,this.shadow=new Jh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},sl=class extends Ar{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var rl=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=yf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=yf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function yf(){return performance.now()}var mu="\\[\\]\\.:\\/",gv=new RegExp("["+mu+"]","g"),gu="[^"+mu+"]",yv="[^"+mu.replace("\\.","")+"]",xv=/((?:WC+[\/:])*)/.source.replace("WC",gu),_v=/(WCOD+)?/.source.replace("WCOD",yv),vv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gu),Mv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gu),bv=new RegExp("^"+xv+_v+vv+Mv+"$"),Sv=["material","materials","bones","map"],Kh=class{constructor(t,e,n){let s=n||Ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ce=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(gv,"")}static parseTrackName(t){let e=bv.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Sv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ce.Composite=Kh;Ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ce.prototype.GetterByBindingType=[Ce.prototype._getValue_direct,Ce.prototype._getValue_array,Ce.prototype._getValue_arrayElement,Ce.prototype._getValue_toArray];Ce.prototype.SetterByBindingTypeAndVersioning=[[Ce.prototype._setValue_direct,Ce.prototype._setValue_direct_setNeedsUpdate,Ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_array,Ce.prototype._setValue_array_setNeedsUpdate,Ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_arrayElement,Ce.prototype._setValue_arrayElement_setNeedsUpdate,Ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_fromArray,Ce.prototype._setValue_fromArray_setNeedsUpdate,Ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var TM=new Float32Array(1);var xf=new te,Pr=class{constructor(t,e,n=0,s=1/0){this.ray=new Zi(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new xo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return xf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xf),this}intersectObject(t,e=!0,n=[]){return jh(t,this,n,e),n.sort(_f),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)jh(t[s],this,n,e);return n.sort(_f),n}};function _f(i,t){return i.distance-t.distance}function jh(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)jh(r[o],t,e,!0)}}var Po=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(He(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var vf=new et,ol=class{constructor(t=new et(1/0,1/0),e=new et(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=vf.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vf).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}};var ri=class{constructor(){this.type="ShapePath",this.color=new It,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Ln,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,s){return this.currentPath.quadraticCurveTo(t,e,n,s),this}bezierCurveTo(t,e,n,s,r,o){return this.currentPath.bezierCurveTo(t,e,n,s,r,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(f){let b=[];for(let _=0,x=f.length;_<x;_++){let I=f[_],T=new ii;T.curves=I.curves,b.push(T)}return b}function n(f,b){let _=b.length,x=!1;for(let I=_-1,T=0;T<_;I=T++){let P=b[I],L=b[T],v=L.x-P.x,M=L.y-P.y;if(Math.abs(M)>Number.EPSILON){if(M<0&&(P=b[T],v=-v,L=b[I],M=-M),f.y<P.y||f.y>L.y)continue;if(f.y===P.y){if(f.x===P.x)return!0}else{let U=M*(f.x-P.x)-v*(f.y-P.y);if(U===0)return!0;if(U<0)continue;x=!x}}else{if(f.y!==P.y)continue;if(L.x<=f.x&&f.x<=P.x||P.x<=f.x&&f.x<=L.x)return!0}}return x}let s=qi.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l,c=[];if(r.length===1)return a=r[0],l=new ii,l.curves=a.curves,c.push(l),c;let h=!s(r[0].getPoints());h=t?!h:h;let u=[],d=[],p=[],g=0,y;d[g]=void 0,p[g]=[];for(let f=0,b=r.length;f<b;f++)a=r[f],y=a.getPoints(),o=s(y),o=t?!o:o,o?(!h&&d[g]&&g++,d[g]={s:new ii,p:y},d[g].s.curves=a.curves,h&&g++,p[g]=[]):p[g].push({h:a,p:y[0]});if(!d[0])return e(r);if(d.length>1){let f=!1,b=0;for(let _=0,x=d.length;_<x;_++)u[_]=[];for(let _=0,x=d.length;_<x;_++){let I=p[_];for(let T=0;T<I.length;T++){let P=I[T],L=!0;for(let v=0;v<d.length;v++)n(P.p,d[v].p)&&(_!==v&&b++,L?(L=!1,u[v].push(P)):f=!0);L&&u[_].push(P)}}b>0&&f===!1&&(p=u)}let m;for(let f=0,b=d.length;f<b;f++){l=d[f].s,c.push(l),m=p[f];for(let _=0,x=m.length;_<x;_++)l.holes.push(m[_].h)}return c}},al=class extends Ti{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qh}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qh);var fl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Sn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Ev=new $i(-1,1,1,-1,0,1),yu=class extends ie{constructor(){super(),this.setAttribute("position",new Xt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Xt([0,2,0,0,2,0],2))}},wv=new yu,ss=class{constructor(t){this._mesh=new bt(wv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Ev)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var pl=class extends Sn{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof se?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=is.clone(t.uniforms),this.material=new se({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new ss(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Io=class extends Sn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},ml=class extends Sn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var gl=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new et);this._width=n.width,this._height=n.height,e=new Qe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:bn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new pl(fl),this.copyPass.material.blending=ei,this.clock=new rl}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Io!==void 0&&(o instanceof Io?n=!0:o instanceof ml&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new et);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var yl=class extends Sn{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new It}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var Yf={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new It(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Nr=class i extends Sn{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new et(t.x,t.y):new et(256,256),this.clearColor=new It(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Qe(r,o,{type:bn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new Qe(r,o,{type:bn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let p=new Qe(r,o,{type:bn});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}let a=Yf;this.highPassUniforms=is.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new se({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new et(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=fl;this.copyUniforms=is.clone(h.uniforms),this.blendMaterial=new se({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Ne,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new It,this.oldClearAlpha=1,this.basic=new Fe,this.fsQuad=new ss(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new et(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new se({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new et(.5,.5)},direction:{value:new et(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new se({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Nr.BlurDirectionX=new et(1,0);Nr.BlurDirectionY=new et(0,1);var Zf={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var xl=class extends Sn{constructor(){super();let t=Zf;this.uniforms=is.clone(t.uniforms),this.material=new tl({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new ss(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ne.getTransfer(this._outputColorSpace)===me&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===eu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===nu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===iu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ir?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===su?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Lr&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var de=[{id:"overview",name:"Solar System",short:"System"},{id:"sun",name:"The Sun",short:"Sun",kind:"G-type main-sequence star",idx:"00",stats:[["Diameter","1,392,700 km"],["Surface","\u2248 5,500 \xB0C"],["Core","\u2248 15 million \xB0C"],["Age","4.6 billion yrs"]],tele:["0.00 AU","Light to Earth 8 m 20 s"],desc:"A 4.6-billion-year-old ball of hydrogen and helium that holds 99.8% of all the mass in the solar system. Every second its core fuses about 600 million tonnes of hydrogen into helium.",facts:["Around 1.3 million Earths could fit inside it.","The light hitting your visor left its surface about 8 minutes and 20 seconds ago.","Its outer atmosphere, the corona, is hundreds of times hotter than its visible surface, and nobody fully knows why."]},{id:"mercury",name:"Mercury",short:"Mercury",kind:"Terrestrial planet \xB7 1st from the Sun",idx:"01",stats:[["Diameter","4,879 km"],["Day","176 Earth days"],["Year","88 Earth days"],["Moons","0"]],tele:["0.39 AU","Orbit 47.4 km/s"],desc:"The smallest planet and the closest to the Sun. With almost no atmosphere to hold heat, days reach 430 \xB0C and nights drop to \u2212180 \xB0C.",facts:["One full day\u2013night cycle on Mercury lasts two of its years.","Despite the heat, water ice hides in permanently shadowed craters at its poles.","It is slowly shrinking as its iron core cools, wrinkling the crust into cliffs hundreds of kilometres long."]},{id:"venus",name:"Venus",short:"Venus",kind:"Terrestrial planet \xB7 2nd from the Sun",idx:"02",stats:[["Diameter","12,104 km"],["Day","243 Earth days"],["Year","225 Earth days"],["Moons","0"]],tele:["0.72 AU","Orbit 35.0 km/s"],desc:"Earth\u2019s near-twin in size, wrapped in a crushing carbon-dioxide atmosphere and clouds of sulphuric acid. A runaway greenhouse effect makes it the hottest planet, around 465 \xB0C.",facts:["It spins backwards, so the Sun rises in the west.","A single rotation takes longer than its whole year.","Surface pressure is about 90 times Earth\u2019s, like being 900 m under the ocean."]},{id:"earth",name:"Earth",short:"Earth",kind:"Terrestrial planet \xB7 3rd from the Sun",idx:"03",stats:[["Diameter","12,742 km"],["Day","23 h 56 m"],["Year","365.25 days"],["Moons","1"]],tele:["1.00 AU","Orbit 29.8 km/s"],desc:"Home. The only world known to hold life, with liquid water across 71% of its surface and a magnetic field that shields it from the solar wind.",facts:["It is the densest planet in the solar system.","The Moon drifts about 3.8 cm farther away every year.","Somewhere on the surface, a green signal is shining. Go in and find it."],enter:!0},{id:"mars",name:"Mars",short:"Mars",kind:"Terrestrial planet \xB7 4th from the Sun",idx:"04",stats:[["Diameter","6,779 km"],["Day","24 h 37 m"],["Year","687 Earth days"],["Moons","2"]],tele:["1.52 AU","Orbit 24.1 km/s"],desc:"A cold desert world coloured by iron oxide dust. Dry river valleys and lake beds show that water once flowed across its surface.",facts:["Olympus Mons is about 22 km tall, roughly two and a half times the height of Everest.","Valles Marineris stretches about 4,000 km, the length of the United States.","Its two small moons, Phobos and Deimos, may be captured asteroids."]},{id:"belt",name:"Asteroid Belt",short:"Belt",kind:"Between Mars and Jupiter",idx:"\xB7\xB7",stats:[["Width","\u2248 1 AU"],["Largest","Ceres, 940 km"],["Objects","Millions"],["Total mass","\u2248 3% of the Moon"]],tele:["2.2 \u2013 3.2 AU","Leftovers of creation"],desc:"A ring of rocky leftovers from the birth of the solar system, kept from forming a planet by Jupiter\u2019s gravity. The dwarf planet Ceres alone holds about a quarter of its mass.",facts:["It is far emptier than in films: asteroids are typically hundreds of thousands of kilometres apart.","NASA\u2019s Dawn spacecraft orbited both Vesta and Ceres.","All of it combined weighs less than our Moon."]},{id:"jupiter",name:"Jupiter",short:"Jupiter",kind:"Gas giant \xB7 5th from the Sun",idx:"05",stats:[["Diameter","139,820 km"],["Day","9 h 56 m"],["Year","11.9 Earth years"],["Moons","115"]],tele:["5.20 AU","Orbit 13.1 km/s"],desc:"The king of the planets, more than twice as massive as all the others combined. Its stripes are bands of ammonia clouds torn apart by winds and a ten-hour day.",facts:["The Great Red Spot is a storm wider than Earth that has raged for centuries.","Io, one of its moons, is the most volcanically active body in the solar system.","Ganymede is the largest moon in the solar system, bigger than Mercury."]},{id:"saturn",name:"Saturn",short:"Saturn",kind:"Gas giant \xB7 6th from the Sun",idx:"06",stats:[["Diameter","116,460 km"],["Day","10 h 33 m"],["Year","29.4 Earth years"],["Moons","293"]],tele:["9.58 AU","Orbit 9.7 km/s"],desc:"The jewel of the solar system. Its rings span about 280,000 km but are often only around 10 m thick, made of countless chunks of water ice.",facts:["It is less dense than water.","A six-sided jet stream, the hexagon, circles its north pole.","Its moon Titan has rivers and seas of liquid methane, and Enceladus sprays water geysers into space."]},{id:"uranus",name:"Uranus",short:"Uranus",kind:"Ice giant \xB7 7th from the Sun",idx:"07",stats:[["Diameter","50,724 km"],["Day","17 h 14 m"],["Year","84 Earth years"],["Moons","29"]],tele:["19.2 AU","Orbit 6.8 km/s"],desc:"An ice giant knocked onto its side, spinning at a tilt of about 98\xB0. Methane in its atmosphere gives it a calm, pale cyan glow.",facts:["Each pole gets about 42 years of continuous sunlight, then 42 years of darkness.","It was the first planet found with a telescope, by William Herschel in 1781.","Its moons are named after characters from Shakespeare and Alexander Pope."]},{id:"neptune",name:"Neptune",short:"Neptune",kind:"Ice giant \xB7 8th from the Sun",idx:"08",stats:[["Diameter","49,244 km"],["Day","16 h 6 m"],["Year","165 Earth years"],["Moons","16"]],tele:["30.1 AU","Orbit 5.4 km/s"],desc:"The farthest planet, dark, cold and whipped by supersonic winds. It was found in 1846 by mathematics before anyone saw it through a telescope.",facts:["Its winds reach about 2,000 km/h, the fastest in the solar system.","It completed its first full orbit since its discovery in 2011.","Its largest moon, Triton, orbits backwards and is probably a captured Kuiper Belt object."]}],$f=[{name:"Africa",lat:4,lon:20,area:"30.3 million km\xB2",desc:"The cradle of humanity, where our species first walked. Home to 54 countries, the Sahara and the Nile, the longest river on Earth."},{name:"Asia",lat:46,lon:92,area:"44.6 million km\xB2",desc:"The largest continent, home to about 60% of all people and to Mount Everest, 8,849 m, the highest point on Earth."},{name:"Europe",lat:52,lon:18,area:"10.2 million km\xB2",desc:"A small, dense continent of around 44 countries, where democracy, the printing press and the Industrial Revolution took shape."},{name:"North America",lat:47,lon:-102,area:"24.7 million km\xB2",desc:"From Arctic tundra to tropical rainforest, with Greenland, the world\u2019s largest island, and the Grand Canyon."},{name:"South America",lat:-14,lon:-60,area:"17.8 million km\xB2",desc:"Home to the Amazon, the largest tropical rainforest, and the Andes, the longest continental mountain range at about 7,000 km."},{name:"Australia",lat:-25,lon:134,area:"8.5 million km\xB2",desc:"The smallest continent and the only one that is a single country. The Great Barrier Reef off its coast is the largest coral reef system on Earth."},{name:"Antarctica",lat:-78,lon:40,area:"14.2 million km\xB2",desc:"The coldest, windiest, driest continent. Its ice sheet holds about 70% of the world\u2019s fresh water; Vostok Station recorded \u221289.2 \xB0C."}],Jf=[{name:"Lagos",lat:6.52,lon:3.38,desc:"Africa\u2019s most populous city by most estimates, spread across islands and lagoons. The engine of Nollywood and Afrobeats."},{name:"Cairo",lat:30.04,lon:31.24,desc:"On the Nile, minutes from the Pyramids of Giza, the last surviving wonder of the ancient world."},{name:"Nairobi",lat:-1.29,lon:36.82,desc:"A capital with a national park inside its city limits, where giraffes graze with skyscrapers behind them."},{name:"Cape Town",lat:-33.92,lon:18.42,desc:"Wrapped around Table Mountain near Africa\u2019s south-western tip."},{name:"London",lat:51.51,lon:-.13,desc:"Founded by the Romans as Londinium almost 2,000 years ago. Greenwich marks 0\xB0 longitude."},{name:"Paris",lat:48.86,lon:2.35,desc:"The Eiffel Tower was built for the 1889 World\u2019s Fair and was meant to stand for only 20 years."},{name:"Moscow",lat:55.76,lon:37.62,desc:"Built around the Kremlin; its ornate metro stations were designed as \u201Cpalaces for the people\u201D."},{name:"Dubai",lat:25.2,lon:55.27,desc:"Home of the Burj Khalifa, the tallest building in the world at 828 m."},{name:"Mumbai",lat:19.08,lon:72.88,desc:"India\u2019s financial capital and the home of Bollywood, built on what were once seven islands."},{name:"Beijing",lat:39.9,lon:116.4,desc:"China\u2019s capital for most of the last eight centuries, centred on the Forbidden City."},{name:"Tokyo",lat:35.68,lon:139.69,desc:"One of the largest metropolitan areas on Earth, with around 37 million people."},{name:"Sydney",lat:-33.87,lon:151.21,desc:"Its Opera House, with sail-like shells, took 14 years to build and opened in 1973."},{name:"New York",lat:40.71,lon:-74,desc:"Home of Wall Street and the New York Stock Exchange, the world\u2019s largest by market value."},{name:"Los Angeles",lat:34.05,lon:-118.24,desc:"The capital of film and TV; early studios came west for year-round sunshine."},{name:"Mexico City",lat:19.43,lon:-99.13,desc:"Built on the ruins of the Aztec capital Tenochtitlan, on a drained lake bed 2,240 m above sea level."},{name:"S\xE3o Paulo",lat:-23.55,lon:-46.63,desc:"The largest city in the Southern Hemisphere, with the biggest Japanese community outside Japan."}],Lo={lat:1.29,lon:103.85},Kf={title:"Hyperliquid",kicker:"Layer 1 \xB7 Onchain finance",desc:"A high-performance layer-one blockchain built from first principles for a fully onchain, open financial system, where liquidity, apps and trading share one chain.",sections:[["HyperBFT","A custom consensus algorithm inspired by HotStuff, with the algorithm and networking stack built from the ground up for the chain."],["HyperCore","Fully onchain perpetual futures and spot order books. Every order, cancel, trade and liquidation is transparent, with one-block finality and up to 200,000 orders per second."],["HyperEVM","A general-purpose smart-contract layer, like Ethereum\u2019s, that lets builders use HyperCore\u2019s liquidity as permissionless building blocks."],["HYPE","The native token. It secures the network through staking, pays network costs and gives trading-fee discounts. Over $1B in annualised fees go to buying back HYPE."]],facts:[["Throughput","200k orders / s"],["Finality","One block"],["Funding","No VCs, self-funded"],["Best known for","Perps DEX"]],url:"https://hyperliquid.xyz"},Do={lat:12,lon:176},jf={title:"Mars Base Alpha",kicker:"Easter egg \xB7 SpaceX-inspired",desc:"A fan-made nod to SpaceX\u2019s goal of making life multiplanetary: a stainless-steel, Starship-style lander, two habitat domes, a six-wheel rover and a few very friendly neighbours.",facts:[["Gravity","0.38 g"],["Day (sol)","24 h 39 min"],["Air","\u2248 95% CO\u2082"],["Trip time","\u2248 6\u20139 months"]],sections:[["Starship","SpaceX\u2019s fully reusable launch system is a Super Heavy booster plus the Starship upper stage. Stacked it stands about 121 m tall and 9 m wide; the ship alone is roughly 50 m long. It is built from stainless steel and designed to carry well over 100 tonnes."],["Why methane?","Starship\u2019s Raptor engines burn methane and liquid oxygen. Mars has a carbon-dioxide atmosphere and water ice underground, the raw ingredients for making both there (the Sabatier process), so return fuel could, in principle, be made on the spot."],["The long game","SpaceX was founded in 2002 by Elon Musk, and its stated goal is to help make life multiplanetary. Earth and Mars line up for an efficient transfer only about every 26 months."],["Mars, quickly","Gravity is 38% of Earth\u2019s, the air is under 1% as dense, and fine iron-rich dust tints the sky butterscotch-pink in daylight."]],fine:"Fan-made easter egg, not affiliated with or endorsed by SpaceX. No crewed ship has landed on Mars yet."};function Us(i,t,e){let n=document.createElement("canvas");n.width=e||i,n.height=i;let s=n.getContext("2d");t(s,n.width,n.height);let r=new Qi(n);return r.colorSpace=Ie,r}function Dn(i){return Us(256,(t,e,n)=>{let s=t.createRadialGradient(e/2,n/2,0,e/2,n/2,e/2);i.forEach(r=>s.addColorStop(r[0],r[1])),t.fillStyle=s,t.fillRect(0,0,e,n)})}function xu(i=1){let t=i,e=()=>(t=t*16807%2147483647)/2147483647;return Us(512,(n,s,r)=>{n.translate(s/2,r/2),n.globalCompositeOperation="lighter";for(let a=0;a<140;a++){let l=e()*Math.PI*2,c=s*(.18+Math.pow(e(),2.2)*.32),h=.004+e()*.02,u=.03+e()*.1,d=n.createLinearGradient(0,0,Math.cos(l)*c,Math.sin(l)*c);d.addColorStop(0,`rgba(255,236,205,${u})`),d.addColorStop(1,"rgba(255,200,150,0)"),n.fillStyle=d,n.beginPath(),n.moveTo(0,0),n.lineTo(Math.cos(l-h)*c,Math.sin(l-h)*c),n.lineTo(Math.cos(l+h)*c,Math.sin(l+h)*c),n.closePath(),n.fill()}let o=n.createRadialGradient(0,0,0,0,0,s/2);o.addColorStop(0,"rgba(0,0,0,0)"),o.addColorStop(.6,"rgba(0,0,0,0)"),o.addColorStop(1,"rgba(0,0,0,1)"),n.globalCompositeOperation="destination-out",n.fillStyle=o,n.fillRect(-s/2,-r/2,s,r)})}function Tv(){return Us(256,(i,t,e)=>{let n=i.createRadialGradient(t/2,e/2,t*.3,t/2,e/2,t/2);n.addColorStop(0,"rgba(255,255,255,0)"),n.addColorStop(.75,"rgba(255,255,255,.55)"),n.addColorStop(.86,"rgba(255,255,255,.12)"),n.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=n,i.fillRect(0,0,t,e)})}function Av(){return Us(256,(i,t,e)=>{i.translate(t/2,e/2),i.beginPath();for(let s=0;s<6;s++){let r=s/6*Math.PI*2+Math.PI/6;i.lineTo(Math.cos(r)*t*.46,Math.sin(r)*t*.46)}i.closePath();let n=i.createRadialGradient(0,0,0,0,0,t*.46);n.addColorStop(0,"rgba(255,255,255,.18)"),n.addColorStop(.85,"rgba(255,255,255,.32)"),n.addColorStop(1,"rgba(255,255,255,.06)"),i.fillStyle=n,i.filter="blur(2px)",i.fill()})}function Rv(){return Us(512,(i,t,e)=>{i.translate(t/2,e/2),i.globalCompositeOperation="lighter";let n=i.createRadialGradient(0,0,0,0,0,t/2);n.addColorStop(0,"rgba(255,250,240,1)"),n.addColorStop(.05,"rgba(255,235,200,.75)"),n.addColorStop(.22,"rgba(255,190,130,.12)"),n.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=n,i.fillRect(-t/2,-e/2,t,e);for(let s=0;s<6;s++){i.save(),i.rotate(s/6*Math.PI);let r=i.createLinearGradient(-t/2,0,t/2,0);r.addColorStop(0,"rgba(255,255,255,0)"),r.addColorStop(.5,"rgba(255,245,230,.5)"),r.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=r,i.fillRect(-t/2,-1.2,t,2.4),i.restore()}})}function Cv(){return Us(64,(i,t,e)=>{let n=i.createLinearGradient(0,0,t,0);n.addColorStop(0,"rgba(120,170,255,0)"),n.addColorStop(.5,"rgba(190,220,255,1)"),n.addColorStop(1,"rgba(120,170,255,0)"),i.fillStyle=n,i.fillRect(0,0,t,e);let s=i.createLinearGradient(0,0,0,e);s.addColorStop(0,"rgba(0,0,0,1)"),s.addColorStop(.5,"rgba(0,0,0,0)"),s.addColorStop(1,"rgba(0,0,0,1)"),i.globalCompositeOperation="destination-out",i.fillStyle=s,i.fillRect(0,0,t,e)},512)}function Pv(){let i=7,t=()=>(i=i*16807%2147483647)/2147483647;return Us(512,(e,n,s)=>{e.fillStyle="#000",e.fillRect(0,0,n,s),e.globalCompositeOperation="lighter";for(let r=0;r<70;r++){let o=t()*n,a=t()*s,l=6+Math.pow(t(),3)*70,c=.015+t()*.05,h=e.createRadialGradient(o,a,0,o,a,l);h.addColorStop(0,`rgba(255,255,255,${c})`),h.addColorStop(.7,`rgba(255,255,255,${c*.6})`),h.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=h,e.beginPath(),e.arc(o,a,l,0,7),e.fill()}for(let r=0;r<260;r++)e.fillStyle=`rgba(255,255,255,${.04+t()*.12})`,e.beginPath(),e.arc(t()*n,t()*s,.4+t()*1.4,0,7),e.fill();e.strokeStyle="rgba(255,255,255,.035)",e.lineWidth=8,e.filter="blur(6px)";for(let r=0;r<5;r++){e.beginPath();let o=t()*n,a=t()*s;e.moveTo(o,a),e.bezierCurveTo(o+80,a-40,o+150,a+40,o+220,a-10),e.stroke()}})}var _l=class{constructor(){this.scene=new Pn,this.cam=new $i(-1,1,1,-1,0,2);let t=(r,o,a=1)=>{let l=new bt(new Cn(1,1),new Fe({map:r,color:o,transparent:!0,blending:Ne,depthTest:!1,depthWrite:!1,opacity:a,toneMapped:!1}));return this.scene.add(l),l},e=Tv(),n=Av(),s=Dn([[0,"rgba(255,255,255,.9)"],[.4,"rgba(255,255,255,.18)"],[1,"rgba(255,255,255,0)"]]);this.dirt=t(Pv(),16773596,0),this.burst=t(Rv(),16777215),this.streak=t(Cv(),10470655),this.ghosts=[[.32,.07,n,7329478],[.55,.13,e,16757626],[.78,.05,s,11832575],[1.18,.2,n,8038655],[1.42,.09,s,9960676],[1.75,.34,e,16752491],[2.1,.12,n,9226495]].map(([r,o,a,l])=>({t:r,s:o,m:t(a,l)})),this.v=0}update(t,e,n,s,r=1){this.v+=(e-this.v)*Math.min(1,s*10);let o=this.v*r,a=Math.hypot(t.x,t.y);if(this.scene.visible=o>.003,!this.scene.visible)return;let l=1/n;this.burst.position.set(t.x,t.y,0),this.burst.scale.set(.9*l,.9,1),this.burst.material.opacity=o*.9,this.burst.rotation.z=t.x*.4,this.streak.position.set(t.x,t.y,0),this.streak.scale.set(2.6,.045,1),this.streak.material.opacity=o*.55;let c=o*ns.smoothstep(a,.05,.45)*.55;for(let h of this.ghosts)h.m.position.set(t.x*(1-h.t*2)*1,t.y*(1-h.t*2),0),h.m.scale.set(h.s*l,h.s,1),h.m.material.opacity=c;this.dirt.scale.set(2,2,1),this.dirt.material.opacity=o*(.55-Math.min(.35,a*.25))}render(t){if(!this.scene.visible)return;let e=t.autoClear;t.autoClear=!1,t.render(this.scene,this.cam),t.autoClear=e}};var Iv=Ie,Uo=class i extends Tr{constructor(t){super(t),this.defaultDPI=90,this.defaultUnit="px"}load(t,e,n,s){let r=this,o=new nl(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(a){try{e(r.parse(a))}catch(l){s?s(l):console.error(l),r.manager.itemError(t)}},n,s)}parse(t){let e=this;function n(F,D){if(F.nodeType!==1)return;let C=x(F),w=!1,W=null;switch(F.nodeName){case"svg":D=g(F,D);break;case"style":r(F);break;case"g":D=g(F,D);break;case"path":D=g(F,D),F.hasAttribute("d")&&(W=s(F));break;case"rect":D=g(F,D),W=l(F);break;case"polygon":D=g(F,D),W=c(F);break;case"polyline":D=g(F,D),W=h(F);break;case"circle":D=g(F,D),W=u(F);break;case"ellipse":D=g(F,D),W=d(F);break;case"line":D=g(F,D),W=p(F);break;case"defs":w=!0;break;case"use":D=g(F,D);let pt=(F.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),J=F.viewportElement.getElementById(pt);J?n(J,D):console.warn("SVGLoader: 'use node' references non-existent node id: "+pt);break;default:}W&&(D.fill!==void 0&&D.fill!=="none"&&W.color.setStyle(D.fill,Iv),T(W,gt),k.push(W),W.userData={node:F,style:D});let rt=F.childNodes;for(let X=0;X<rt.length;X++){let pt=rt[X];w&&pt.nodeName!=="style"&&pt.nodeName!=="defs"||n(pt,D)}C&&(q.pop(),q.length>0?gt.copy(q[q.length-1]):gt.identity())}function s(F){let D=new ri,C=new et,w=new et,W=new et,rt=!0,X=!1,pt=F.getAttribute("d");if(pt===""||pt==="none")return null;let J=pt.match(/[a-df-z][^a-df-z]*/ig);for(let Z=0,E=J.length;Z<E;Z++){let nt=J[Z],tt=nt.charAt(0),it=nt.slice(1).trim();rt===!0&&(X=!0,rt=!1);let B;switch(tt){case"M":B=m(it);for(let N=0,ht=B.length;N<ht;N+=2)C.x=B[N+0],C.y=B[N+1],w.x=C.x,w.y=C.y,N===0?D.moveTo(C.x,C.y):D.lineTo(C.x,C.y),N===0&&W.copy(C);break;case"H":B=m(it);for(let N=0,ht=B.length;N<ht;N++)C.x=B[N],w.x=C.x,w.y=C.y,D.lineTo(C.x,C.y),N===0&&X===!0&&W.copy(C);break;case"V":B=m(it);for(let N=0,ht=B.length;N<ht;N++)C.y=B[N],w.x=C.x,w.y=C.y,D.lineTo(C.x,C.y),N===0&&X===!0&&W.copy(C);break;case"L":B=m(it);for(let N=0,ht=B.length;N<ht;N+=2)C.x=B[N+0],C.y=B[N+1],w.x=C.x,w.y=C.y,D.lineTo(C.x,C.y),N===0&&X===!0&&W.copy(C);break;case"C":B=m(it);for(let N=0,ht=B.length;N<ht;N+=6)D.bezierCurveTo(B[N+0],B[N+1],B[N+2],B[N+3],B[N+4],B[N+5]),w.x=B[N+2],w.y=B[N+3],C.x=B[N+4],C.y=B[N+5],N===0&&X===!0&&W.copy(C);break;case"S":B=m(it);for(let N=0,ht=B.length;N<ht;N+=4)D.bezierCurveTo(y(C.x,w.x),y(C.y,w.y),B[N+0],B[N+1],B[N+2],B[N+3]),w.x=B[N+0],w.y=B[N+1],C.x=B[N+2],C.y=B[N+3],N===0&&X===!0&&W.copy(C);break;case"Q":B=m(it);for(let N=0,ht=B.length;N<ht;N+=4)D.quadraticCurveTo(B[N+0],B[N+1],B[N+2],B[N+3]),w.x=B[N+0],w.y=B[N+1],C.x=B[N+2],C.y=B[N+3],N===0&&X===!0&&W.copy(C);break;case"T":B=m(it);for(let N=0,ht=B.length;N<ht;N+=2){let R=y(C.x,w.x),S=y(C.y,w.y);D.quadraticCurveTo(R,S,B[N+0],B[N+1]),w.x=R,w.y=S,C.x=B[N+0],C.y=B[N+1],N===0&&X===!0&&W.copy(C)}break;case"A":B=m(it,[3,4],7);for(let N=0,ht=B.length;N<ht;N+=7){if(B[N+5]==C.x&&B[N+6]==C.y)continue;let R=C.clone();C.x=B[N+5],C.y=B[N+6],w.x=C.x,w.y=C.y,o(D,B[N],B[N+1],B[N+2],B[N+3],B[N+4],R,C),N===0&&X===!0&&W.copy(C)}break;case"m":B=m(it);for(let N=0,ht=B.length;N<ht;N+=2)C.x+=B[N+0],C.y+=B[N+1],w.x=C.x,w.y=C.y,N===0?D.moveTo(C.x,C.y):D.lineTo(C.x,C.y),N===0&&W.copy(C);break;case"h":B=m(it);for(let N=0,ht=B.length;N<ht;N++)C.x+=B[N],w.x=C.x,w.y=C.y,D.lineTo(C.x,C.y),N===0&&X===!0&&W.copy(C);break;case"v":B=m(it);for(let N=0,ht=B.length;N<ht;N++)C.y+=B[N],w.x=C.x,w.y=C.y,D.lineTo(C.x,C.y),N===0&&X===!0&&W.copy(C);break;case"l":B=m(it);for(let N=0,ht=B.length;N<ht;N+=2)C.x+=B[N+0],C.y+=B[N+1],w.x=C.x,w.y=C.y,D.lineTo(C.x,C.y),N===0&&X===!0&&W.copy(C);break;case"c":B=m(it);for(let N=0,ht=B.length;N<ht;N+=6)D.bezierCurveTo(C.x+B[N+0],C.y+B[N+1],C.x+B[N+2],C.y+B[N+3],C.x+B[N+4],C.y+B[N+5]),w.x=C.x+B[N+2],w.y=C.y+B[N+3],C.x+=B[N+4],C.y+=B[N+5],N===0&&X===!0&&W.copy(C);break;case"s":B=m(it);for(let N=0,ht=B.length;N<ht;N+=4)D.bezierCurveTo(y(C.x,w.x),y(C.y,w.y),C.x+B[N+0],C.y+B[N+1],C.x+B[N+2],C.y+B[N+3]),w.x=C.x+B[N+0],w.y=C.y+B[N+1],C.x+=B[N+2],C.y+=B[N+3],N===0&&X===!0&&W.copy(C);break;case"q":B=m(it);for(let N=0,ht=B.length;N<ht;N+=4)D.quadraticCurveTo(C.x+B[N+0],C.y+B[N+1],C.x+B[N+2],C.y+B[N+3]),w.x=C.x+B[N+0],w.y=C.y+B[N+1],C.x+=B[N+2],C.y+=B[N+3],N===0&&X===!0&&W.copy(C);break;case"t":B=m(it);for(let N=0,ht=B.length;N<ht;N+=2){let R=y(C.x,w.x),S=y(C.y,w.y);D.quadraticCurveTo(R,S,C.x+B[N+0],C.y+B[N+1]),w.x=R,w.y=S,C.x=C.x+B[N+0],C.y=C.y+B[N+1],N===0&&X===!0&&W.copy(C)}break;case"a":B=m(it,[3,4],7);for(let N=0,ht=B.length;N<ht;N+=7){if(B[N+5]==0&&B[N+6]==0)continue;let R=C.clone();C.x+=B[N+5],C.y+=B[N+6],w.x=C.x,w.y=C.y,o(D,B[N],B[N+1],B[N+2],B[N+3],B[N+4],R,C),N===0&&X===!0&&W.copy(C)}break;case"Z":case"z":D.currentPath.autoClose=!0,D.currentPath.curves.length>0&&(C.copy(W),D.currentPath.currentPoint.copy(C),rt=!0);break;default:console.warn(nt)}X=!1}return D}function r(F){if(!(!F.sheet||!F.sheet.cssRules||!F.sheet.cssRules.length))for(let D=0;D<F.sheet.cssRules.length;D++){let C=F.sheet.cssRules[D];if(C.type!==1)continue;let w=C.selectorText.split(/,/gm).filter(Boolean).map(W=>W.trim());for(let W=0;W<w.length;W++){let rt=Object.fromEntries(Object.entries(C.style).filter(([,X])=>X!==""));V[w[W]]=Object.assign(V[w[W]]||{},rt)}}}function o(F,D,C,w,W,rt,X,pt){if(D==0||C==0){F.lineTo(pt.x,pt.y);return}w=w*Math.PI/180,D=Math.abs(D),C=Math.abs(C);let J=(X.x-pt.x)/2,Z=(X.y-pt.y)/2,E=Math.cos(w)*J+Math.sin(w)*Z,nt=-Math.sin(w)*J+Math.cos(w)*Z,tt=D*D,it=C*C,B=E*E,N=nt*nt,ht=B/tt+N/it;if(ht>1){let Yt=Math.sqrt(ht);D=Yt*D,C=Yt*C,tt=D*D,it=C*C}let R=tt*N+it*B,S=(tt*it-R)/R,Q=Math.sqrt(Math.max(0,S));W===rt&&(Q=-Q);let ct=Q*D*nt/C,mt=-Q*C*E/D,ft=Math.cos(w)*ct-Math.sin(w)*mt+(X.x+pt.x)/2,Ut=Math.sin(w)*ct+Math.cos(w)*mt+(X.y+pt.y)/2,St=a(1,0,(E-ct)/D,(nt-mt)/C),At=a((E-ct)/D,(nt-mt)/C,(-E-ct)/D,(-nt-mt)/C)%(Math.PI*2);F.currentPath.absellipse(ft,Ut,D,C,St,St+At,rt===0,w)}function a(F,D,C,w){let W=F*C+D*w,rt=Math.sqrt(F*F+D*D)*Math.sqrt(C*C+w*w),X=Math.acos(Math.max(-1,Math.min(1,W/rt)));return F*w-D*C<0&&(X=-X),X}function l(F){let D=_(F.getAttribute("x")||0),C=_(F.getAttribute("y")||0),w=_(F.getAttribute("rx")||F.getAttribute("ry")||0),W=_(F.getAttribute("ry")||F.getAttribute("rx")||0),rt=_(F.getAttribute("width")),X=_(F.getAttribute("height")),pt=1-.551915024494,J=new ri;return J.moveTo(D+w,C),J.lineTo(D+rt-w,C),(w!==0||W!==0)&&J.bezierCurveTo(D+rt-w*pt,C,D+rt,C+W*pt,D+rt,C+W),J.lineTo(D+rt,C+X-W),(w!==0||W!==0)&&J.bezierCurveTo(D+rt,C+X-W*pt,D+rt-w*pt,C+X,D+rt-w,C+X),J.lineTo(D+w,C+X),(w!==0||W!==0)&&J.bezierCurveTo(D+w*pt,C+X,D,C+X-W*pt,D,C+X-W),J.lineTo(D,C+W),(w!==0||W!==0)&&J.bezierCurveTo(D,C+W*pt,D+w*pt,C,D+w,C),J}function c(F){function D(rt,X,pt){let J=_(X),Z=_(pt);W===0?w.moveTo(J,Z):w.lineTo(J,Z),W++}let C=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,w=new ri,W=0;return F.getAttribute("points").replace(C,D),w.currentPath.autoClose=!0,w}function h(F){function D(rt,X,pt){let J=_(X),Z=_(pt);W===0?w.moveTo(J,Z):w.lineTo(J,Z),W++}let C=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,w=new ri,W=0;return F.getAttribute("points").replace(C,D),w.currentPath.autoClose=!1,w}function u(F){let D=_(F.getAttribute("cx")||0),C=_(F.getAttribute("cy")||0),w=_(F.getAttribute("r")||0),W=new Ln;W.absarc(D,C,w,0,Math.PI*2);let rt=new ri;return rt.subPaths.push(W),rt}function d(F){let D=_(F.getAttribute("cx")||0),C=_(F.getAttribute("cy")||0),w=_(F.getAttribute("rx")||0),W=_(F.getAttribute("ry")||0),rt=new Ln;rt.absellipse(D,C,w,W,0,Math.PI*2);let X=new ri;return X.subPaths.push(rt),X}function p(F){let D=_(F.getAttribute("x1")||0),C=_(F.getAttribute("y1")||0),w=_(F.getAttribute("x2")||0),W=_(F.getAttribute("y2")||0),rt=new ri;return rt.moveTo(D,C),rt.lineTo(w,W),rt.currentPath.autoClose=!1,rt}function g(F,D){D=Object.assign({},D);let C={};if(F.hasAttribute("class")){let X=F.getAttribute("class").split(/\s/).filter(Boolean).map(pt=>pt.trim());for(let pt=0;pt<X.length;pt++)C=Object.assign(C,V["."+X[pt]])}F.hasAttribute("id")&&(C=Object.assign(C,V["#"+F.getAttribute("id")]));function w(X,pt,J){J===void 0&&(J=function(E){return E.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),E}),F.hasAttribute(X)&&(D[pt]=J(F.getAttribute(X))),C[X]&&(D[pt]=J(C[X])),F.style&&F.style[X]!==""&&(D[pt]=J(F.style[X]))}function W(X){return Math.max(0,Math.min(1,_(X)))}function rt(X){return Math.max(0,_(X))}return w("fill","fill"),w("fill-opacity","fillOpacity",W),w("fill-rule","fillRule"),w("opacity","opacity",W),w("stroke","stroke"),w("stroke-opacity","strokeOpacity",W),w("stroke-width","strokeWidth",rt),w("stroke-linejoin","strokeLineJoin"),w("stroke-linecap","strokeLineCap"),w("stroke-miterlimit","strokeMiterLimit",rt),w("visibility","visibility"),D}function y(F,D){return F-(D-F)}function m(F,D,C){if(typeof F!="string")throw new TypeError("Invalid input: "+typeof F);let w={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},W=0,rt=1,X=2,pt=3,J=W,Z=!0,E="",nt="",tt=[];function it(R,S,Q){let ct=new SyntaxError('Unexpected character "'+R+'" at index '+S+".");throw ct.partial=Q,ct}function B(){E!==""&&(nt===""?tt.push(Number(E)):tt.push(Number(E)*Math.pow(10,Number(nt)))),E="",nt=""}let N,ht=F.length;for(let R=0;R<ht;R++){if(N=F[R],Array.isArray(D)&&D.includes(tt.length%C)&&w.FLAGS.test(N)){J=rt,E=N,B();continue}if(J===W){if(w.WHITESPACE.test(N))continue;if(w.DIGIT.test(N)||w.SIGN.test(N)){J=rt,E=N;continue}if(w.POINT.test(N)){J=X,E=N;continue}w.COMMA.test(N)&&(Z&&it(N,R,tt),Z=!0)}if(J===rt){if(w.DIGIT.test(N)){E+=N;continue}if(w.POINT.test(N)){E+=N,J=X;continue}if(w.EXP.test(N)){J=pt;continue}w.SIGN.test(N)&&E.length===1&&w.SIGN.test(E[0])&&it(N,R,tt)}if(J===X){if(w.DIGIT.test(N)){E+=N;continue}if(w.EXP.test(N)){J=pt;continue}w.POINT.test(N)&&E[E.length-1]==="."&&it(N,R,tt)}if(J===pt){if(w.DIGIT.test(N)){nt+=N;continue}if(w.SIGN.test(N)){if(nt===""){nt+=N;continue}nt.length===1&&w.SIGN.test(nt)&&it(N,R,tt)}}w.WHITESPACE.test(N)?(B(),J=W,Z=!1):w.COMMA.test(N)?(B(),J=W,Z=!0):w.SIGN.test(N)?(B(),J=rt,E=N):w.POINT.test(N)?(B(),J=X,E=N):it(N,R,tt)}return B(),tt}let f=["mm","cm","in","pt","pc","px"],b={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function _(F){let D="px";if(typeof F=="string"||F instanceof String)for(let w=0,W=f.length;w<W;w++){let rt=f[w];if(F.endsWith(rt)){D=rt,F=F.substring(0,F.length-rt.length);break}}let C;return D==="px"&&e.defaultUnit!=="px"?C=b.in[e.defaultUnit]/e.defaultDPI:(C=b[D][e.defaultUnit],C<0&&(C=b[D].in*e.defaultDPI)),C*parseFloat(F)}function x(F){if(!(F.hasAttribute("transform")||F.nodeName==="use"&&(F.hasAttribute("x")||F.hasAttribute("y"))))return null;let D=I(F);return q.length>0&&D.premultiply(q[q.length-1]),gt.copy(D),q.push(D),D}function I(F){let D=new Vt,C=st;if(F.nodeName==="use"&&(F.hasAttribute("x")||F.hasAttribute("y"))){let w=_(F.getAttribute("x")),W=_(F.getAttribute("y"));D.translate(w,W)}if(F.hasAttribute("transform")){let w=F.getAttribute("transform").split(")");for(let W=w.length-1;W>=0;W--){let rt=w[W].trim();if(rt==="")continue;let X=rt.indexOf("("),pt=rt.length;if(X>0&&X<pt){let J=rt.slice(0,X),Z=m(rt.slice(X+1));switch(C.identity(),J){case"translate":if(Z.length>=1){let E=Z[0],nt=0;Z.length>=2&&(nt=Z[1]),C.translate(E,nt)}break;case"rotate":if(Z.length>=1){let E=0,nt=0,tt=0;E=Z[0]*Math.PI/180,Z.length>=3&&(nt=Z[1],tt=Z[2]),H.makeTranslation(-nt,-tt),$.makeRotation(E),O.multiplyMatrices($,H),H.makeTranslation(nt,tt),C.multiplyMatrices(H,O)}break;case"scale":if(Z.length>=1){let E=Z[0],nt=E;Z.length>=2&&(nt=Z[1]),C.scale(E,nt)}break;case"skewX":Z.length===1&&C.set(1,Math.tan(Z[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":Z.length===1&&C.set(1,0,0,Math.tan(Z[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":Z.length===6&&C.set(Z[0],Z[2],Z[4],Z[1],Z[3],Z[5],0,0,1);break}}D.premultiply(C)}}return D}function T(F,D){function C(X){lt.set(X.x,X.y,1).applyMatrix3(D),X.set(lt.x,lt.y)}function w(X){let pt=X.xRadius,J=X.yRadius,Z=Math.cos(X.aRotation),E=Math.sin(X.aRotation),nt=new z(pt*Z,pt*E,0),tt=new z(-J*E,J*Z,0),it=nt.applyMatrix3(D),B=tt.applyMatrix3(D),N=st.set(it.x,B.x,0,it.y,B.y,0,0,0,1),ht=H.copy(N).invert(),Q=$.copy(ht).transpose().multiply(ht).elements,ct=U(Q[0],Q[1],Q[4]),mt=Math.sqrt(ct.rt1),ft=Math.sqrt(ct.rt2);if(X.xRadius=1/mt,X.yRadius=1/ft,X.aRotation=Math.atan2(ct.sn,ct.cs),!((X.aEndAngle-X.aStartAngle)%(2*Math.PI)<Number.EPSILON)){let St=H.set(mt,0,0,0,ft,0,0,0,1),At=$.set(ct.cs,ct.sn,0,-ct.sn,ct.cs,0,0,0,1),Yt=St.multiply(At).multiply(N),vt=Lt=>{let{x:Ht,y:Gt}=new z(Math.cos(Lt),Math.sin(Lt),0).applyMatrix3(Yt);return Math.atan2(Gt,Ht)};X.aStartAngle=vt(X.aStartAngle),X.aEndAngle=vt(X.aEndAngle),P(D)&&(X.aClockwise=!X.aClockwise)}}function W(X){let pt=v(D),J=M(D);X.xRadius*=pt,X.yRadius*=J;let Z=pt>Number.EPSILON?Math.atan2(D.elements[1],D.elements[0]):Math.atan2(-D.elements[3],D.elements[4]);X.aRotation+=Z,P(D)&&(X.aStartAngle*=-1,X.aEndAngle*=-1,X.aClockwise=!X.aClockwise)}let rt=F.subPaths;for(let X=0,pt=rt.length;X<pt;X++){let Z=rt[X].curves;for(let E=0;E<Z.length;E++){let nt=Z[E];nt.isLineCurve?(C(nt.v1),C(nt.v2)):nt.isCubicBezierCurve?(C(nt.v0),C(nt.v1),C(nt.v2),C(nt.v3)):nt.isQuadraticBezierCurve?(C(nt.v0),C(nt.v1),C(nt.v2)):nt.isEllipseCurve&&(dt.set(nt.aX,nt.aY),C(dt),nt.aX=dt.x,nt.aY=dt.y,L(D)?w(nt):W(nt))}}}function P(F){let D=F.elements;return D[0]*D[4]-D[1]*D[3]<0}function L(F){let D=F.elements,C=D[0]*D[3]+D[1]*D[4];if(C===0)return!1;let w=v(F),W=M(F);return Math.abs(C/(w*W))>Number.EPSILON}function v(F){let D=F.elements;return Math.sqrt(D[0]*D[0]+D[1]*D[1])}function M(F){let D=F.elements;return Math.sqrt(D[3]*D[3]+D[4]*D[4])}function U(F,D,C){let w,W,rt,X,pt,J=F+C,Z=F-C,E=Math.sqrt(Z*Z+4*D*D);return J>0?(w=.5*(J+E),pt=1/w,W=F*pt*C-D*pt*D):J<0?W=.5*(J-E):(w=.5*E,W=-.5*E),Z>0?rt=Z+E:rt=Z-E,Math.abs(rt)>2*Math.abs(D)?(pt=-2*D/rt,X=1/Math.sqrt(1+pt*pt),rt=pt*X):Math.abs(D)===0?(rt=1,X=0):(pt=-.5*rt/D,rt=1/Math.sqrt(1+pt*pt),X=pt*rt),Z>0&&(pt=rt,rt=-X,X=pt),{rt1:w,rt2:W,cs:rt,sn:X}}let k=[],V={},q=[],st=new Vt,H=new Vt,$=new Vt,O=new Vt,dt=new et,lt=new z,gt=new Vt,xt=new DOMParser().parseFromString(t,"image/svg+xml");return n(xt.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:k,xml:xt.documentElement}}static createShapes(t){let n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},s={loc:n.ORIGIN,t:0};function r(y,m,f,b){let _=y.x,x=m.x,I=f.x,T=b.x,P=y.y,L=m.y,v=f.y,M=b.y,U=(T-I)*(P-v)-(M-v)*(_-I),k=(x-_)*(P-v)-(L-P)*(_-I),V=(M-v)*(x-_)-(T-I)*(L-P),q=U/V,st=k/V;if(V===0&&U!==0||q<=0||q>=1||st<0||st>1)return null;if(U===0&&V===0){for(let H=0;H<2;H++)if(o(H===0?f:b,y,m),s.loc==n.ORIGIN){let $=H===0?f:b;return{x:$.x,y:$.y,t:s.t}}else if(s.loc==n.BETWEEN){let $=+(_+s.t*(x-_)).toPrecision(10),O=+(P+s.t*(L-P)).toPrecision(10);return{x:$,y:O,t:s.t}}return null}else{for(let O=0;O<2;O++)if(o(O===0?f:b,y,m),s.loc==n.ORIGIN){let dt=O===0?f:b;return{x:dt.x,y:dt.y,t:s.t}}let H=+(_+q*(x-_)).toPrecision(10),$=+(P+q*(L-P)).toPrecision(10);return{x:H,y:$,t:q}}}function o(y,m,f){let b=f.x-m.x,_=f.y-m.y,x=y.x-m.x,I=y.y-m.y,T=b*I-x*_;if(y.x===m.x&&y.y===m.y){s.loc=n.ORIGIN,s.t=0;return}if(y.x===f.x&&y.y===f.y){s.loc=n.DESTINATION,s.t=1;return}if(T<-Number.EPSILON){s.loc=n.LEFT;return}if(T>Number.EPSILON){s.loc=n.RIGHT;return}if(b*x<0||_*I<0){s.loc=n.BEHIND;return}if(Math.sqrt(b*b+_*_)<Math.sqrt(x*x+I*I)){s.loc=n.BEYOND;return}let P;b!==0?P=x/b:P=I/_,s.loc=n.BETWEEN,s.t=P}function a(y,m){let f=[],b=[];for(let _=1;_<y.length;_++){let x=y[_-1],I=y[_];for(let T=1;T<m.length;T++){let P=m[T-1],L=m[T],v=r(x,I,P,L);v!==null&&f.find(M=>M.t<=v.t+Number.EPSILON&&M.t>=v.t-Number.EPSILON)===void 0&&(f.push(v),b.push(new et(v.x,v.y)))}}return b}function l(y,m,f){let b=new et;m.getCenter(b);let _=[];return f.forEach(x=>{x.boundingBox.containsPoint(b)&&a(y,x.points).forEach(T=>{_.push({identifier:x.identifier,isCW:x.isCW,point:T})})}),_.sort((x,I)=>x.point.x-I.point.x),_}function c(y,m,f,b,_){(_==null||_==="")&&(_="nonzero");let x=new et;y.boundingBox.getCenter(x);let I=[new et(f,x.y),new et(b,x.y)],T=l(I,y.boundingBox,m);T.sort((k,V)=>k.point.x-V.point.x);let P=[],L=[];T.forEach(k=>{k.identifier===y.identifier?P.push(k):L.push(k)});let v=P[0].point.x,M=[],U=0;for(;U<L.length&&L[U].point.x<v;)M.length>0&&M[M.length-1]===L[U].identifier?M.pop():M.push(L[U].identifier),U++;if(M.push(y.identifier),_==="evenodd"){let k=M.length%2===0,V=M[M.length-2];return{identifier:y.identifier,isHole:k,for:V}}else if(_==="nonzero"){let k=!0,V=null,q=null;for(let st=0;st<M.length;st++){let H=M[st];k?(q=m[H].isCW,k=!1,V=H):q!==m[H].isCW&&(q=m[H].isCW,k=!0)}return{identifier:y.identifier,isHole:k,for:V}}else console.warn('fill-rule: "'+_+'" is currently not implemented.')}let h=999999999,u=-999999999,d=t.subPaths.map(y=>{let m=y.getPoints(),f=-999999999,b=999999999,_=-999999999,x=999999999;for(let I=0;I<m.length;I++){let T=m[I];T.y>f&&(f=T.y),T.y<b&&(b=T.y),T.x>_&&(_=T.x),T.x<x&&(x=T.x)}return u<=_&&(u=_+1),h>=x&&(h=x-1),{curves:y.curves,points:m,isCW:qi.isClockWise(m),identifier:-1,boundingBox:new ol(new et(x,b),new et(_,f))}});d=d.filter(y=>y.points.length>1);for(let y=0;y<d.length;y++)d[y].identifier=y;let p=d.map(y=>c(y,d,h,u,t.userData?t.userData.style.fillRule:void 0)),g=[];return d.forEach(y=>{if(!p[y.identifier].isHole){let f=new ii;f.curves=y.curves,p.filter(_=>_.isHole&&_.for===y.identifier).forEach(_=>{let x=d[_.identifier],I=new Ln;I.curves=x.curves,f.holes.push(I)}),g.push(f)}}),g}static getStrokeStyle(t,e,n,s,r){return t=t!==void 0?t:1,e=e!==void 0?e:"#000",n=n!==void 0?n:"miter",s=s!==void 0?s:"butt",r=r!==void 0?r:4,{strokeColor:e,strokeWidth:t,strokeLineJoin:n,strokeLineCap:s,strokeMiterLimit:r}}static pointsToStroke(t,e,n,s){let r=[],o=[],a=[];if(i.pointsToStrokeWithBuffers(t,e,n,s,r,o,a)===0)return null;let l=new ie;return l.setAttribute("position",new Xt(r,3)),l.setAttribute("normal",new Xt(o,3)),l.setAttribute("uv",new Xt(a,2)),l}static pointsToStrokeWithBuffers(t,e,n,s,r,o,a,l){let c=new et,h=new et,u=new et,d=new et,p=new et,g=new et,y=new et,m=new et,f=new et,b=new et,_=new et,x=new et,I=new et,T=new et,P=new et,L=new et,v=new et;n=n!==void 0?n:12,s=s!==void 0?s:.001,l=l!==void 0?l:0,t=Z(t);let M=t.length;if(M<2)return 0;let U=t[0].equals(t[M-1]),k,V=t[0],q,st=e.strokeWidth/2,H=1/(M-1),$=0,O,dt,lt,gt,xt=!1,wt=0,F=l*3,D=l*2;C(t[0],t[1],c).multiplyScalar(st),m.copy(t[0]).sub(c),f.copy(t[0]).add(c),b.copy(m),_.copy(f);for(let E=1;E<M;E++){k=t[E],E===M-1?U?q=t[1]:q=void 0:q=t[E+1];let nt=c;if(C(V,k,nt),u.copy(nt).multiplyScalar(st),x.copy(k).sub(u),I.copy(k).add(u),O=$+H,dt=!1,q!==void 0){C(k,q,h),u.copy(h).multiplyScalar(st),T.copy(k).sub(u),P.copy(k).add(u),lt=!0,u.subVectors(q,V),nt.dot(u)<0&&(lt=!1),E===1&&(xt=lt),u.subVectors(q,k),u.normalize();let tt=Math.abs(nt.dot(u));if(tt>Number.EPSILON){let it=st/tt;u.multiplyScalar(-it),d.subVectors(k,V),p.copy(d).setLength(it).add(u),L.copy(p).negate();let B=p.length(),N=d.length();d.divideScalar(N),g.subVectors(q,k);let ht=g.length();switch(g.divideScalar(ht),d.dot(L)<N&&g.dot(L)<ht&&(dt=!0),v.copy(p).add(k),L.add(k),gt=!1,dt?lt?(P.copy(L),I.copy(L)):(T.copy(L),x.copy(L)):rt(),e.strokeLineJoin){case"bevel":X(lt,dt,O);break;case"round":pt(lt,dt),lt?W(k,x,T,O,0):W(k,P,I,O,1);break;case"miter":case"miter-clip":default:let R=st*e.strokeMiterLimit/B;if(R<1)if(e.strokeLineJoin!=="miter-clip"){X(lt,dt,O);break}else pt(lt,dt),lt?(g.subVectors(v,x).multiplyScalar(R).add(x),y.subVectors(v,T).multiplyScalar(R).add(T),w(x,O,0),w(g,O,0),w(k,O,.5),w(k,O,.5),w(g,O,0),w(y,O,0),w(k,O,.5),w(y,O,0),w(T,O,0)):(g.subVectors(v,I).multiplyScalar(R).add(I),y.subVectors(v,P).multiplyScalar(R).add(P),w(I,O,1),w(g,O,1),w(k,O,.5),w(k,O,.5),w(g,O,1),w(y,O,1),w(k,O,.5),w(y,O,1),w(P,O,1));else dt?(lt?(w(f,$,1),w(m,$,0),w(v,O,0),w(f,$,1),w(v,O,0),w(L,O,1)):(w(f,$,1),w(m,$,0),w(v,O,1),w(m,$,0),w(L,O,0),w(v,O,1)),lt?T.copy(v):P.copy(v)):lt?(w(x,O,0),w(v,O,0),w(k,O,.5),w(k,O,.5),w(v,O,0),w(T,O,0)):(w(I,O,1),w(v,O,1),w(k,O,.5),w(k,O,.5),w(v,O,1),w(P,O,1)),gt=!0;break}}else rt()}else rt();!U&&E===M-1&&J(t[0],b,_,lt,!0,$),$=O,V=k,m.copy(T),f.copy(P)}if(!U)J(k,x,I,lt,!1,O);else if(dt&&r){let E=v,nt=L;xt!==lt&&(E=L,nt=v),lt?(gt||xt)&&(nt.toArray(r,0*3),nt.toArray(r,3*3),gt&&E.toArray(r,1*3)):(gt||!xt)&&(nt.toArray(r,1*3),nt.toArray(r,3*3),gt&&E.toArray(r,0*3))}return wt;function C(E,nt,tt){return tt.subVectors(nt,E),tt.set(-tt.y,tt.x).normalize()}function w(E,nt,tt){r&&(r[F]=E.x,r[F+1]=E.y,r[F+2]=0,o&&(o[F]=0,o[F+1]=0,o[F+2]=1),F+=3,a&&(a[D]=nt,a[D+1]=tt,D+=2)),wt+=3}function W(E,nt,tt,it,B){c.copy(nt).sub(E).normalize(),h.copy(tt).sub(E).normalize();let N=Math.PI,ht=c.dot(h);Math.abs(ht)<1&&(N=Math.abs(Math.acos(ht))),N/=n,u.copy(nt);for(let R=0,S=n-1;R<S;R++)d.copy(u).rotateAround(E,N),w(u,it,B),w(d,it,B),w(E,it,.5),u.copy(d);w(d,it,B),w(tt,it,B),w(E,it,.5)}function rt(){w(f,$,1),w(m,$,0),w(x,O,0),w(f,$,1),w(x,O,0),w(I,O,1)}function X(E,nt,tt){nt?E?(w(f,$,1),w(m,$,0),w(x,O,0),w(f,$,1),w(x,O,0),w(L,O,1),w(x,tt,0),w(T,tt,0),w(L,tt,.5)):(w(f,$,1),w(m,$,0),w(I,O,1),w(m,$,0),w(L,O,0),w(I,O,1),w(I,tt,1),w(L,tt,0),w(P,tt,1)):E?(w(x,tt,0),w(T,tt,0),w(k,tt,.5)):(w(I,tt,1),w(P,tt,0),w(k,tt,.5))}function pt(E,nt){nt&&(E?(w(f,$,1),w(m,$,0),w(x,O,0),w(f,$,1),w(x,O,0),w(L,O,1),w(x,$,0),w(k,O,.5),w(L,O,1),w(k,O,.5),w(T,$,0),w(L,O,1)):(w(f,$,1),w(m,$,0),w(I,O,1),w(m,$,0),w(L,O,0),w(I,O,1),w(I,$,1),w(L,O,0),w(k,O,.5),w(k,O,.5),w(L,O,0),w(P,$,1)))}function J(E,nt,tt,it,B,N){switch(e.strokeLineCap){case"round":B?W(E,tt,nt,N,.5):W(E,nt,tt,N,.5);break;case"square":if(B)c.subVectors(nt,E),h.set(c.y,-c.x),u.addVectors(c,h).add(E),d.subVectors(h,c).add(E),it?(u.toArray(r,1*3),d.toArray(r,0*3),d.toArray(r,3*3)):(u.toArray(r,1*3),a[3*2+1]===1?d.toArray(r,3*3):u.toArray(r,3*3),d.toArray(r,0*3));else{c.subVectors(tt,E),h.set(c.y,-c.x),u.addVectors(c,h).add(E),d.subVectors(h,c).add(E);let ht=r.length;it?(u.toArray(r,ht-1*3),d.toArray(r,ht-2*3),d.toArray(r,ht-4*3)):(d.toArray(r,ht-2*3),u.toArray(r,ht-1*3),d.toArray(r,ht-4*3))}break;case"butt":default:break}}function Z(E){let nt=!1;for(let it=1,B=E.length-1;it<B;it++)if(E[it].distanceTo(E[it+1])<s){nt=!0;break}if(!nt)return E;let tt=[];tt.push(E[0]);for(let it=1,B=E.length-1;it<B;it++)E[it].distanceTo(E[it+1])>=s&&tt.push(E[it]);return tt.push(E[E.length-1]),tt}}};var Qf={type:"change"},vu={type:"start"},ep={type:"end"},vl=new Zi,tp=new Hn,Lv=Math.cos(70*ns.DEG2RAD),Ye=new z,pn=2*Math.PI,ve={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},_u=1e-6,Fr=class extends al{constructor(t,e=null){super(t,e),this.state=ve.NONE,this.enabled=!0,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ls.ROTATE,MIDDLE:Ls.DOLLY,RIGHT:Ls.PAN},this.touches={ONE:Ds.ROTATE,TWO:Ds.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new z,this._lastQuaternion=new Oe,this._lastTargetPosition=new z,this._quat=new Oe().setFromUnitVectors(t.up,new z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Po,this._sphericalDelta=new Po,this._scale=1,this._panOffset=new z,this._rotateStart=new et,this._rotateEnd=new et,this._rotateDelta=new et,this._panStart=new et,this._panEnd=new et,this._panDelta=new et,this._dollyStart=new et,this._dollyEnd=new et,this._dollyDelta=new et,this._dollyDirection=new z,this._mouse=new et,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Uv.bind(this),this._onPointerDown=Dv.bind(this),this._onPointerUp=Nv.bind(this),this._onContextMenu=Vv.bind(this),this._onMouseWheel=Bv.bind(this),this._onKeyDown=zv.bind(this),this._onTouchStart=kv.bind(this),this._onTouchMove=Hv.bind(this),this._onMouseDown=Fv.bind(this),this._onMouseMove=Ov.bind(this),this._interceptControlDown=Gv.bind(this),this._interceptControlUp=Wv.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Qf),this.update(),this.state=ve.NONE}update(t=null){let e=this.object.position;Ye.copy(e).sub(this.target),Ye.applyQuaternion(this._quat),this._spherical.setFromVector3(Ye),this.autoRotate&&this.state===ve.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=pn:n>Math.PI&&(n-=pn),s<-Math.PI?s+=pn:s>Math.PI&&(s-=pn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ye.setFromSpherical(this._spherical),Ye.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ye),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Ye.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new z(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new z(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ye.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(vl.origin.copy(this.object.position),vl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(vl.direction))<Lv?this.object.lookAt(this.target):(tp.setFromNormalAndCoplanarPoint(this.object.up,this.target),vl.intersectPlane(tp,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>_u||8*(1-this._lastQuaternion.dot(this.object.quaternion))>_u||this._lastTargetPosition.distanceToSquared(this.target)>_u?(this.dispatchEvent(Qf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?pn/60*this.autoRotateSpeed*t:pn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ye.setFromMatrixColumn(e,0),Ye.multiplyScalar(-t),this._panOffset.add(Ye)}_panUp(t,e){this.screenSpacePanning===!0?Ye.setFromMatrixColumn(e,1):(Ye.setFromMatrixColumn(e,0),Ye.crossVectors(this.object.up,Ye)),Ye.multiplyScalar(t),this._panOffset.add(Ye)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ye.copy(s).sub(this.target);let r=Ye.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(pn*this._rotateDelta.x/e.clientHeight),this._rotateUp(pn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(pn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-pn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(pn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-pn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(pn*this._rotateDelta.x/e.clientHeight),this._rotateUp(pn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new et,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Dv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Uv(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Nv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ep),this.state=ve.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Fv(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ls.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ve.DOLLY;break;case Ls.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ve.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ve.ROTATE}break;case Ls.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ve.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ve.PAN}break;default:this.state=ve.NONE}this.state!==ve.NONE&&this.dispatchEvent(vu)}function Ov(i){switch(this.state){case ve.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ve.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ve.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Bv(i){this.enabled===!1||this.enableZoom===!1||this.state!==ve.NONE||(i.preventDefault(),this.dispatchEvent(vu),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(ep))}function zv(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function kv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ds.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ve.TOUCH_ROTATE;break;case Ds.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ve.TOUCH_PAN;break;default:this.state=ve.NONE}break;case 2:switch(this.touches.TWO){case Ds.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ve.TOUCH_DOLLY_PAN;break;case Ds.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ve.TOUCH_DOLLY_ROTATE;break;default:this.state=ve.NONE}break;default:this.state=ve.NONE}this.state!==ve.NONE&&this.dispatchEvent(vu)}function Hv(i){switch(this._trackPointer(i),this.state){case ve.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ve.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ve.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ve.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ve.NONE}}function Vv(i){this.enabled!==!1&&i.preventDefault()}function Gv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Wv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Br=class extends Pn{constructor(){super();let t=new Pe;t.deleteAttribute("uv");let e=new ce({side:De}),n=new ce,s=new Cr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new bt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new bt(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);let a=new bt(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);let l=new bt(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new bt(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new bt(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let u=new bt(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);let d=new bt(t,Or(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);let p=new bt(t,Or(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);let g=new bt(t,Or(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let y=new bt(t,Or(43));y.position.set(-.462,8.89,14.52),y.scale.set(4.38,5.441,.088),this.add(y);let m=new bt(t,Or(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let f=new bt(t,Or(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Or(i){let t=new Fe;return t.color.setScalar(i),t}function Xn(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new ie,c=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p])}if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0,u=[];for(let d=0;d<i.length;++d){let p=i[d].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=np(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let p=[];for(let y=0;y<o[h].length;++y)p.push(o[h][y][d]);let g=np(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function np(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new ue(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,p=h.count;d<p;d++)for(let g=0;g<e;g++){let y=h.getComponent(d,g);a.setComponent(d+u,g,y)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function ip(i,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,o=0,a=Object.keys(i.attributes),l={},c={},h=[],u=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let b=0,_=a.length;b<_;b++){let x=a[b],I=i.attributes[x];l[x]=new I.constructor(new I.array.constructor(I.count*I.itemSize),I.itemSize,I.normalized);let T=i.morphAttributes[x];T&&(c[x]||(c[x]=[]),T.forEach((P,L)=>{let v=new P.array.constructor(P.count*P.itemSize);c[x][L]=new P.constructor(v,P.itemSize,P.normalized)}))}let p=t*.5,g=Math.log10(1/t),y=Math.pow(10,g),m=p*y;for(let b=0;b<r;b++){let _=n?n.getX(b):b,x="";for(let I=0,T=a.length;I<T;I++){let P=a[I],L=i.getAttribute(P),v=L.itemSize;for(let M=0;M<v;M++)x+=`${~~(L[u[M]](_)*y+m)},`}if(x in e)h.push(e[x]);else{for(let I=0,T=a.length;I<T;I++){let P=a[I],L=i.getAttribute(P),v=i.morphAttributes[P],M=L.itemSize,U=l[P],k=c[P];for(let V=0;V<M;V++){let q=u[V],st=d[V];if(U[st](o,L[q](_)),v)for(let H=0,$=v.length;H<$;H++)k[H][st](o,v[H][q](_))}}e[x]=o,h.push(o),o++}}let f=i.clone();for(let b in i.attributes){let _=l[b];if(f.setAttribute(b,new _.constructor(_.array.slice(0,o*_.itemSize),_.itemSize,_.normalized)),b in c)for(let x=0;x<c[b].length;x++){let I=c[b][x];f.morphAttributes[b][x]=new I.constructor(I.array.slice(0,o*I.itemSize),I.itemSize,I.normalized)}}return f.setIndex(h),f}var Xv='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path d="M175.11589,99.27891c0,49.46366-30.3687,65.33789-46.47302,51.30413-13.11357-11.5031-17.02471-35.88989-36.81018-38.42055-25.07698-2.99085-27.37764,30.36839-43.94216,30.36839-19.3254,0-23.00642-27.83773-23.00642-42.33179,0-14.72405,4.14115-34.73961,20.47565-34.73961,19.09528,0,20.24566,28.75802,44.17226,27.14754,23.69661-1.61047,24.1567-31.51877,39.80103-44.17224,13.57335-11.27313,45.78283.69019,45.78283,50.84413Z"/></svg>',rs=9960676,Ml=class{constructor(t,e,n){this.r=t,this.mobile=n;let s=this.scene=new Pn,r=new It(664610);s.fog=new br(r,70,330),this.cam=new Ve(n?48:38,1,.5,2e3);let o=new Ji(t);s.environment=o.fromScene(new Br,.04).texture,o.dispose(),s.environmentIntensity=.62,s.add(new bt(new ze(900,48,24),new se({side:De,depthWrite:!1,fog:!1,uniforms:{top:{value:new It(132105)},mid:{value:new It(266259)},hor:{value:r}},vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",fragmentShader:"uniform vec3 top,mid,hor; varying vec3 vD; void main(){ float y = vD.y; vec3 c = mix(hor, mid, smoothstep(0.0, .18, y)); c = mix(c, top, smoothstep(.18, .7, y)); c += vec3(.012,.05,.045) * exp(-abs(y) * 22.); gl_FragColor = vec4(c,1.); }"})));{let k=new Float32Array(4200),V=new Float32Array(1400);for(let st=0;st<1400;st++){let H=Math.random(),$=Math.random()*.92+.08,O=H*Math.PI*2,dt=$,lt=Math.sqrt(1-dt*dt);k.set([Math.cos(O)*lt*800,dt*800,Math.sin(O)*lt*800],st*3),V[st]=.6+Math.pow(Math.random(),6)*2.4}let q=new ie;q.setAttribute("position",new ue(k,3)),q.setAttribute("size",new ue(V,1)),this.starMat=new se({transparent:!0,depthWrite:!1,fog:!1,blending:Ne,uniforms:{dpr:{value:1}},vertexShader:"attribute float size; uniform float dpr; varying float vA; void main(){ vA = smoothstep(.0,.25,normalize(position).y); gl_PointSize = size * dpr * 1.6; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",fragmentShader:"varying float vA; void main(){ float d = length(gl_PointCoord-.5); gl_FragColor = vec4(vec3(.85,.95,1.), smoothstep(.5,.0,d) * vA * .9); }"}),s.add(new Ci(q,this.starMat))}let a=new bt(new ws(600,96),new ce({color:132358,roughness:.28,metalness:.5,transparent:!0,opacity:.93,envMapIntensity:.06}));a.rotation.x=-Math.PI/2,a.renderOrder=1,s.add(a);let l=new bt(new Cn(700,700),new se({transparent:!0,depthWrite:!1,uniforms:{col:{value:new It(rs)},t:{value:0}},vertexShader:"varying vec3 vP; void main(){ vec4 w = modelMatrix * vec4(position,1.); vP = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform vec3 col; uniform float t; varying vec3 vP;
        float gl(vec2 p, float s){ vec2 g = abs(fract(p / s - .5) - .5) / fwidth(p / s); return 1. - min(min(g.x, g.y), 1.); }
        void main(){ float r = length(vP.xz); float a = gl(vP.xz, 6.) * .32 + gl(vP.xz, 30.) * .5;
          float ring = smoothstep(1.2, 0., abs(r - mod(t * 14., 240.) - 26.)) * smoothstep(240., 30., r) * .9;
          a *= smoothstep(220., 30., r) * smoothstep(24.5, 28., r); gl_FragColor = vec4(col, a * .11 + ring * .2 * smoothstep(25., 32., r)); }`}));l.rotation.x=-Math.PI/2,l.position.y=.02,l.renderOrder=2,s.add(l),this.gridMat=l.material;let c=new _e;s.add(c);let h=new es({color:396045,roughness:.3,metalness:.6,clearcoat:.5,clearcoatRoughness:.25,envMapIntensity:.08}),u=new bt(new Be(24,24.6,1.1,160,1),h);u.position.y=.55,c.add(u);let d=new bt(new Rs(24.05,.06,8,280),new Fe({color:new It(rs).multiplyScalar(2.2),toneMapped:!1}));d.rotation.x=Math.PI/2,d.position.y=1.1,c.add(d);let p=d.clone();p.scale.setScalar(29/24.05),p.position.y=.03,p.material=new Fe({color:new It(rs).multiplyScalar(.6),transparent:!0,opacity:.5,toneMapped:!1}),c.add(p);let g=new Uo().parse(Xv),y=[];g.paths.forEach(U=>Uo.createShapes(U).forEach(k=>{let V=k.extractPoints(160),q=new ii(V.shape.map(st=>new et(st.x,-st.y)));V.holes.forEach(st=>q.holes.push(new Ln(st.map(H=>new et(H.x,-H.y))))),y.push(q)}));let m=new Qa(y,{depth:12,steps:1,curveSegments:1,bevelEnabled:!0,bevelThickness:6,bevelSize:5,bevelSegments:14});m.deleteAttribute("normal"),m.deleteAttribute("uv"),m=ip(m,.001),m.computeVertexNormals(),m.computeBoundingBox();let f=m.boundingBox,b=f.getCenter(new z),_=.22;m.translate(-b.x,-f.min.y,-b.z),m.scale(_,_,_),this.size=new z().subVectors(f.max,f.min).multiplyScalar(_),this.mat=new es({color:rs,roughness:.17,metalness:0,clearcoat:1,clearcoatRoughness:.02,envMapIntensity:.5,specularIntensity:.7});let x=this.building=new bt(m,this.mat);x.position.y=1.1-.9,c.add(x);let I=new bt(new Cn(1,1),new Fe({map:Dn([[0,"rgba(0,0,0,.85)"],[.55,"rgba(0,0,0,.35)"],[1,"rgba(0,0,0,0)"]]),transparent:!0,depthWrite:!1}));I.rotation.x=-Math.PI/2,I.scale.set(this.size.x*1.25,this.size.z*3.2,1),I.position.y=1.115,c.add(I);let T=new bt(new Cn(1,1),new Fe({map:Dn([[0,"rgba(151,252,228,.35)"],[.5,"rgba(151,252,228,.08)"],[1,"rgba(151,252,228,0)"]]),transparent:!0,depthWrite:!1,blending:Ne}));T.rotation.x=-Math.PI/2,T.scale.set(110,110,1),T.position.y=.05,c.add(T);let P=new bt(new Be(2.4,7,260,48,1,!0),new se({transparent:!0,depthWrite:!1,blending:Ne,side:$e,fog:!1,uniforms:{col:{value:new It(rs)},t:{value:0}},vertexShader:"varying vec2 vU; varying vec3 vN; varying vec3 vV; void main(){ vU = uv; vN = normalize(normalMatrix * normal); vec4 mv = modelViewMatrix * vec4(position,1.); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform vec3 col; uniform float t; varying vec2 vU; varying vec3 vN; varying vec3 vV; void main(){ float f = pow(abs(dot(vN, vV)), 2.); float a = smoothstep(1., .0, vU.y) * smoothstep(0., .08, vU.y) * f * (.05 + .02 * sin(t * 1.3 + vU.y * 9.)); gl_FragColor = vec4(col, a); }"}));P.position.y=130+1.1,c.add(P),this.beamMat=P.material;let L=c.clone();L.scale.y=-1,L.remove(L.children.find(U=>U.material===P.material)),s.add(L),L.traverse(U=>{U.material&&U.material.map&&(U.visible=!1)});{let U=n?160:320,k=new Float32Array(U*3);for(let q=0;q<U;q++){let st=Math.random()*6.28,H=8+Math.random()*70;k.set([Math.cos(st)*H,Math.random()*40,Math.sin(st)*H],q*3)}let V=new ie;V.setAttribute("position",new ue(k,3)),this.motes=new Ci(V,new So({color:rs,size:.18,transparent:!0,opacity:.55,blending:Ne,depthWrite:!1})),s.add(this.motes)}s.add(new Rr(14680056,66565,.06));let v=new Is(16777215,1.15);v.position.set(-50,70,30),s.add(v);let M=new Is(9428223,1.4);M.position.set(40,25,-60),s.add(M),this.controls=new Fr(this.cam,e),Object.assign(this.controls,{enableDamping:!0,dampingFactor:.06,enablePan:!1,minDistance:42,maxDistance:170,maxPolarAngle:1.5,minPolarAngle:.2,zoomSpeed:.6,autoRotate:!0,autoRotateSpeed:-.35}),this.controls.target.set(0,this.size.y*.42+.6,0),this.controls.enabled=!1,this.controls.addEventListener("start",()=>{this.controls.autoRotate=!1,clearTimeout(this._ar)}),this.controls.addEventListener("end",()=>{clearTimeout(this._ar),this._ar=setTimeout(()=>{this.reduced||(this.controls.autoRotate=!0)},6e3)}),this.ray=new Pr,this.t=0,this.intro=null}resize(t,e,n){this.controls.rotateSpeed=e/(1.2*Math.min(t,900)),this.cam.aspect=t/e,this.cam.fov=t/e<.8?52:38,this.cam.updateProjectionMatrix(),this.starMat.uniforms.dpr.value=n,this.intro||(this.controls.target.y=this.size.y*(t/e<.8?.6:.42)+.6)}enter(t){this.reduced=t,this.controls.autoRotate=!t;let e=this.cam.aspect<.8?112:90;this.end=new z(e*.3,e*.16,e*.95),this.start=new z(6,230,30),this.intro={t:0,d:t?1.2:3.6},this.cam.position.copy(this.start),this.controls.enabled=!1}update(t){if(this.t+=t,this.gridMat.uniforms.t.value=this.t,this.beamMat.uniforms.t.value=this.t,this.motes.rotation.y+=t*.01,this.motes.position.y=Math.sin(this.t*.3)*.6,this.intro){let e=this.intro;e.t+=t;let n=Math.min(1,e.t/e.d),s=1-Math.pow(1-n,4);this.cam.position.lerpVectors(this.start,this.end,s);let r=this.controls.target;this.cam.lookAt(r.x,r.y*s+0*(1-s),r.z),n>=1&&(this.intro=null,this.controls.enabled=!0,this.controls.update())}else this.controls.dampingFactor=1-Math.exp(-t*6.5),this.controls.update(t)}pick(t){return this.ray.setFromCamera(t,this.cam),this.ray.intersectObject(this.building,!1).length?!0:(this.box||(this.building.geometry.computeBoundingBox(),this.box=this.building.geometry.boundingBox.clone().applyMatrix4(this.building.matrixWorld).expandByScalar(1.5)),this.ray.ray.intersectsBox(this.box))}};var on=z,Ge=Math.PI,bl=(i,t)=>{let e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)},sp=i=>i*i*(3-2*i),zr=(i,t)=>{let e=Math.floor(i),n=Math.floor(t),s=sp(i-e),r=sp(t-n),o=bl(e,n),a=bl(e+1,n),l=bl(e,n+1),c=bl(e+1,n+1);return o+(a-o)*s+(l-o)*r+(o-a-l+c)*s*r},No=(i,t,e)=>{let n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)},rp=(i,t)=>{let e=Math.hypot(i,t),n=No(46,120,e);return((zr(i*.011,t*.011)*2-1)*13+(zr(i*.037+9,t*.037)*2-1)*3.4+(zr(i*.11,t*.11+5)*2-1)*.5)*n+No(240,470,e)*(26+zr(i*.02,t*.02)*46)},os=i=>new It(i),En=(i,t)=>{let e=new It(t),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s.set([e.r,e.g,e.b],r*3);return i.setAttribute("color",new ue(s,3)),i};var Sl=class{constructor(t,e,n){this.r=t,this.mobile=n,this.t=0,this.fr=0,t.shadowMap.autoUpdate=!1,this.intro=null,this.reduced=!1;let s=this.scene=new Pn,r=os(14460302);s.fog=new br(r,90,560),this.cam=new Ve(n?52:38,1,.3,3e3);let o=new Ji(t);s.environment=o.fromScene(new Br,.04).texture,o.dispose(),s.environmentIntensity=.7;let a=this.sunDir=new on(-.78,.46,.2).normalize();s.add(new bt(new ze(1800,48,24),new se({side:De,depthWrite:!1,fog:!1,uniforms:{top:{value:os(7622762)},mid:{value:os(13602438)},hor:{value:os(15777956)},sun:{value:a}},vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",fragmentShader:`uniform vec3 top,mid,hor,sun; varying vec3 vD; void main(){ vec3 d = normalize(vD); float y = max(d.y, 0.);
        vec3 c = mix(hor, mid, smoothstep(0., .16, y)); c = mix(c, top, smoothstep(.12, .85, y));
        float s = max(dot(d, sun), 0.); c += vec3(1., .86, .7) * pow(s, 260.) * 4. + vec3(1., .72, .56) * pow(s, 9.) * .32 + vec3(.55, .7, 1.) * pow(s, 70.) * .22;
        c *= 1. - .35 * smoothstep(0., -.4, d.y); gl_FragColor = vec4(c, 1.); }`})));let l=n?120:170,c=new Cn(1100,1100,l,l);c.rotateX(-Ge/2);{let H=c.attributes.position,$=new Float32Array(H.count*3),O=os(11818810),dt=os(8207146),lt=os(14194792),gt=new It;for(let xt=0;xt<H.count;xt++){let wt=H.getX(xt),F=H.getZ(xt),D=rp(wt,F);H.setY(xt,D);let C=zr(wt*.02+3,F*.02),w=zr(wt*.07,F*.07+4);gt.copy(O).lerp(dt,No(.35,.8,C)*.7).lerp(lt,No(.5,.9,w)*.45*(1-No(.8,1,C))),$.set([gt.r,gt.g,gt.b],xt*3)}c.setAttribute("color",new ue($,3)),c.computeVertexNormals()}let h=document.createElement("canvas");h.width=h.height=512;let u=h.getContext("2d");u.fillStyle="#d8d8d8",u.fillRect(0,0,512,512);let d=u.getImageData(0,0,512,512);for(let H=0;H<d.data.length;H+=4){let $=200+Math.random()*55|0;d.data[H]=d.data[H+1]=d.data[H+2]=$}u.putImageData(d,0,0),u.globalAlpha=.12,u.strokeStyle="#000";for(let H=0;H<26;H++){u.beginPath();let $=H*20+Math.random()*6;u.moveTo(0,$);for(let O=0;O<=512;O+=32)u.lineTo(O,$+Math.sin(O*.03+H)*5);u.stroke()}let p=new Qi(h);p.wrapS=p.wrapT=Ss,p.repeat.set(70,70),p.colorSpace=Ie,p.anisotropy=4;let g=new bt(c,new ce({vertexColors:!0,map:p,roughness:1,metalness:0,envMapIntensity:.25}));g.receiveShadow=!0,s.add(g);let y=new bt(new ws(11,64),new Fe({map:Dn([[0,"rgba(30,14,10,.78)"],[.62,"rgba(34,16,12,.6)"],[.9,"rgba(40,20,14,.2)"],[1,"rgba(40,20,14,0)"]]),transparent:!0,depthWrite:!1}));y.rotation.x=-Ge/2,y.position.set(-6,.04,-10),y.renderOrder=1,s.add(y);{let H=n?150:260,$=new As(1,1),O=new Sr($,new ce({color:16777215,roughness:1,flatShading:!0,envMapIntensity:.2}),H),dt=new te,lt=new Oe,gt=new dn,xt=new on,wt=new on,F=new It;for(let D=0;D<H;D++){let C=Math.random()*Ge*2,w=14+Math.pow(Math.random(),1.6)*230,W=Math.cos(C)*w,rt=Math.sin(C)*w;(Math.hypot(W+6,rt+10)<12||Math.hypot(W-3,rt-11)<8)&&(W+=30);let X=.25+Math.pow(Math.random(),3)*(1.2+w*.012);xt.set(X*(1+Math.random()*.6),X*(.5+Math.random()*.5),X*(1+Math.random()*.6)),gt.set(Math.random()*.4,Math.random()*6,Math.random()*.4),lt.setFromEuler(gt),wt.set(W,rp(W,rt)+xt.y*.3,rt),dt.compose(wt,lt,xt),O.setMatrixAt(D,dt),F.setHex(9061936).lerp(new It(4925986),Math.random()*.7),O.setColorAt(D,F)}O.castShadow=!1,O.receiveShadow=!0,s.add(O)}s.add(new Rr(16765632,8010284,.55));let m=this.key=new Is(16769732,2.5);m.position.copy(a).multiplyScalar(120),m.target.position.set(4,4,0),m.castShadow=!0,m.shadow.mapSize.set(n?1024:2048,n?1024:2048);let f=m.shadow.camera;f.left=-46,f.right=46,f.top=46,f.bottom=-46,f.near=20,f.far=260,m.shadow.bias=-4e-4,m.shadow.normalBias=.06,m.shadow.radius=3,s.add(m,m.target);let b=this.steel=new ce({color:14935784,metalness:1,roughness:.26,envMapIntensity:1.25}),_=new ce({color:12172995,metalness:1,roughness:.42,envMapIntensity:1}),x=new ce({color:1250584,metalness:.35,roughness:.6,envMapIntensity:.6}),I=new ce({color:15987182,roughness:.55,metalness:.05,envMapIntensity:.5}),T=this.base=[],P=this.ship=new _e;P.position.set(-6,0,-10),s.add(P);{let lt=21.464285714285715,gt=[new et(.001,2.1),new et(2.8*.82,2.1),new et(2.8,2.1+.25),new et(2.8,26.1)];for(let Z=1;Z<=18;Z++){let E=10.6*(Z/18),nt=Math.sqrt(Math.max(lt*lt-(10.6-E)*(10.6-E),0))+2.8-lt;gt.push(new et(Math.max(nt,.001),26.1+10.6-E))}let xt=new bt(new wo(gt.reverse(),n?56:80),b);xt.castShadow=!0,xt.receiveShadow=!0,P.add(xt),T.push(xt);let wt=[];for(let Z=2.1+2.4;Z<26.1+6;Z+=2.4){let E=Z<26.1?2.8:Math.sqrt(Math.max(lt*lt-(10.6-(36.7-Z))*(10.6-(36.7-Z)),0))+2.8-lt;wt.push(new Be(E+.018,E+.018,.07,48,1,!0).translate(0,Z,0))}let F=new bt(Xn(wt),_);P.add(F);let D=new bt(new Be(2.8+.03,2.8+.03,24,32,1,!0,.2,1.05),x);D.position.y=2.1+12,P.add(D);let C=[],w=(Z,E,nt,tt,it)=>{let B=new Pe(Z,E,.22);return B.translate(Z/2,0,0),B.rotateZ(it),B.translate(2.8-.1,nt,0),tt&&B.rotateY(Ge),B};[0,1].forEach(Z=>{C.push(w(2.9,6.8,2.1+4.8,Z,-.2)),C.push(w(1.8,4,26.1-2.4,Z,-.1))});let W=new bt(Xn(C),x);W.castShadow=!0,P.add(W);let rt=[];for(let Z=0;Z<6;Z++){let E=Z<3?Z*Ge*2/3:Z*Ge*2/3+Ge/3,nt=Z<3?.62:1.62;rt.push(new Be(.38,.74,1.5,20,1,!0).translate(Math.cos(E)*nt,2.1-.4,Math.sin(E)*nt))}let X=new bt(Xn(rt),new ce({color:4933443,metalness:.9,roughness:.45,side:$e}));X.castShadow=!0,P.add(X);let pt=[];for(let Z=0;Z<3;Z++){let E=Z*Ge*2/3+.5,nt=Math.cos(E),tt=Math.sin(E),it=new on(nt*2.8*.9,2.1+5.5,tt*2.8*.9),B=new on(nt*(2.8+4),.3,tt*(2.8+4)),N=new on(nt*(2.8+1),2.1+.5,tt*(2.8+1)),ht=new Be(.16,.22,it.distanceTo(B),8),R=B.clone().sub(it).normalize();ht.applyQuaternion(new Oe().setFromUnitVectors(new on(0,1,0),R)),ht.translate((it.x+B.x)/2,(it.y+B.y)/2,(it.z+B.z)/2),pt.push(ht),pt.push(new Be(.7,.8,.22,16).translate(B.x,.12,B.z));let S=new Be(.09,.09,N.distanceTo(it),6),Q=it.clone().sub(N).normalize();S.applyQuaternion(new Oe().setFromUnitVectors(new on(0,1,0),Q)),S.translate((it.x+N.x)/2,(it.y+N.y)/2,(it.z+N.z)/2),pt.push(S)}let J=new bt(Xn(pt),_);J.castShadow=!0,P.add(J),this.shipH=26.1+10.6}let L=this.beacon=new Ki(new Ri({map:Dn([[0,"rgba(255,80,60,1)"],[.3,"rgba(255,60,40,.5)"],[1,"rgba(255,40,20,0)"]]),transparent:!0,depthWrite:!1,blending:Ne,fog:!1}));L.scale.setScalar(2.6),L.position.set(0,this.shipH+.4,0),P.add(L);let v=this.domes=[],M=new ji({color:15856111,transparent:!0,opacity:.85,fog:!0}),U=new es({color:14084338,transparent:!0,opacity:.2,roughness:.06,metalness:0,clearcoat:1,clearcoatRoughness:.05,side:$e,depthWrite:!1,envMapIntensity:1.4}),k=(H,$,O,dt)=>{let lt=new _e;lt.position.set(H,0,$),s.add(lt);let gt=new bt(new ze(O,40,20,0,Ge*2,0,Ge/2),U);lt.add(gt),T.push(gt);let xt=new As(O*1.004,2),wt=xt.attributes.position,F=[];for(let W=0;W<wt.count;W+=3)if(wt.getY(W)>-.01*O&&wt.getY(W+1)>-.01*O&&wt.getY(W+2)>-.01*O)for(let rt=0;rt<3;rt++)F.push(wt.getX(W+rt),wt.getY(W+rt),wt.getZ(W+rt));let D=new ie;D.setAttribute("position",new Xt(F,3)),lt.add(new Ya(new ja(D,1),M));let C=new bt(new Rs(O,.22,8,64),_);C.rotation.x=Ge/2,C.position.y=.1,lt.add(C);let w=new bt(new ws(O,48),new Fe({map:Dn(dt?[[0,"rgba(255,90,200,.7)"],[.6,"rgba(255,70,170,.35)"],[1,"rgba(255,60,150,0)"]]:[[0,"rgba(255,190,110,.75)"],[.6,"rgba(255,160,80,.35)"],[1,"rgba(255,150,60,0)"]]),transparent:!0,depthWrite:!1,blending:Ne,fog:!1}));if(w.rotation.x=-Ge/2,w.position.y=.3,lt.add(w),dt){let W=new ce({color:4054148,emissive:1935948,emissiveIntensity:.8,roughness:.7});for(let rt=0;rt<9;rt++){let X=rt*2.4,pt=(rt%3+.3)*O*.22,J=new bt(new ze(.55+rt%4*.13,12,8),W);J.position.set(Math.cos(X)*pt,.45,Math.sin(X)*pt),J.scale.y=.75,lt.add(J)}}else{let W=new bt(new Pe(O*.7,.7,O*.35),new ce({color:13620182,roughness:.5,metalness:.4}));W.position.set(0,.4,0),W.castShadow=!0,lt.add(W)}return v.push(lt),lt};k(14,-6,6.6,!1),k(25,-14,4.9,!0);{let H=new bt(new Be(1.05,1.05,11.5,20,1),I);H.rotation.z=Ge/2,H.rotation.y=-.55,H.position.set(19.5,1.05,-10),H.castShadow=!0,s.add(H),T.push(H);let $=new bt(new Be(1,1,12,20,1),I);$.rotation.z=Ge/2,$.rotation.y=.1,$.position.set(2.3,1,-8.2),$.castShadow=!0,s.add($)}{let H=[];for(let O=0;O<6;O++){let dt=new Pe(3.9,.14,2.7);dt.rotateX(-.55),dt.translate(-6+O*4.3,1.8,-21),H.push(dt);let lt=new Be(.09,.09,1.8,6);lt.translate(-6+O*4.3,.9,-20.3),H.push(lt)}let $=new bt(Xn(H),new ce({color:1583690,metalness:.7,roughness:.3,envMapIntensity:1.1}));$.castShadow=!0,$.receiveShadow=!0,s.add($)}{let H=new bt(new Be(.12,.16,7,8),_);H.position.set(-18,3.5,-6),H.castShadow=!0,s.add(H);let $=new bt(new ze(1.6,24,12,0,Ge*2,0,.8),new ce({color:15987182,roughness:.4,metalness:.3,side:$e}));$.position.set(-18,7.2,-6),$.rotation.set(-1,.6,0),$.castShadow=!0,s.add($),this.dish=$}{let H=new ce({color:14276303,roughness:.6,metalness:.2});[[8.6,.6,12.1,1.1,.3],[11,.4,13.6,.8,-.4],[-9,.5,9.5,1,.6]].forEach(([$,O,dt,lt,gt])=>{let xt=new bt(new Pe(1.6*lt,1.1*lt,1.6*lt),H);xt.position.set($,O,dt),xt.rotation.y=gt,xt.castShadow=xt.receiveShadow=!0,s.add(xt),T.push(xt)})}let V=this.rover=new _e;s.add(V);{let H=new bt(new Pe(2.1,.55,3.1),I);H.position.y=1.05,H.castShadow=!0,V.add(H),T.push(H);let $=new bt(new Pe(2,.08,1.7),new ce({color:1583690,metalness:.7,roughness:.3}));$.position.set(0,1.36,-.55),$.castShadow=!0,V.add($);let O=new bt(new Pe(1.5,.5,1),I);O.position.set(0,1.55,.9),O.castShadow=!0,V.add(O);let dt=new bt(new Pe(1.2,.22,.06),new ce({color:1911347,metalness:.9,roughness:.12}));dt.position.set(0,1.6,1.42),V.add(dt);let lt=new bt(new Be(.05,.05,1.5,6),_);lt.position.set(.7,2.2,-.3),V.add(lt);let gt=new bt(new Pe(.4,.22,.22),x);gt.position.set(.7,3,-.3),V.add(gt);let xt=new bt(new ze(.45,18,8,0,Ge*2,0,.9),I);xt.position.set(-.65,2,-.7),xt.rotation.set(-.9,0,.3),V.add(xt);let wt=[];[-1,1].forEach(w=>{let W=new Pe(.1,.1,2.8);W.translate(w*1.2,.72,0),wt.push(W);let rt=new Pe(.1,.6,.1);rt.translate(w*1.2,.85,.1),wt.push(rt)}),V.add(new bt(Xn(wt),_));let F=new ce({color:1513755,roughness:.85,metalness:.1}),D=new ce({color:13620182,metalness:1,roughness:.35}),C=new ce({vertexColors:!0,roughness:.7,metalness:.4});this.wheels=[],[-1.25,0,1.25].forEach(w=>[-1,1].forEach(W=>{let rt=[En(new Be(.55,.55,.5,24),1513755).rotateZ(Ge/2),En(new Be(.28,.28,.54,12),13620182).rotateZ(Ge/2),En(new Pe(.56,.1,.5),13620182),En(new Pe(.56,.1,.5),13620182).rotateX(Ge/2)],X=new bt(Xn(rt),C);X.position.set(W*1.28,.55,w),X.castShadow=!0,V.add(X),this.wheels.push(X)}))}V.scale.setScalar(1.25),this.roverA=1.2,this.roverR=30,this.roverC=new on(5,0,-3),this.astros=[];let q=[16742965,7332809,8369407],st=(H,$,O,dt,lt)=>{let gt=new _e;gt.position.set(H,lt?.1:0,$),gt.rotation.y=O,s.add(gt);let xt=new _e;gt.add(xt);let wt=new ce({vertexColors:!0,roughness:.55,metalness:.05,envMapIntensity:.6}),F=new es({color:16762726,metalness:1,roughness:.08,clearcoat:1,envMapIntensity:2}),D=16052975,C=13618634,w=5593696,W=(tt,it,B,N=!0)=>{let ht=new bt(tt,it);return ht.castShadow=N,B.add(ht),ht},rt=W(Xn([En(new ts(.27,.36,6,14),D).translate(0,1.12,0),En(new Rs(.275,.035,8,24),dt).rotateX(Ge/2).translate(0,.86,0),En(new Pe(.2,.15,.06),dt).translate(0,1.2,.26),En(new Pe(.4,.52,.22),14605528).translate(0,1.15,-.3)]),wt,xt),X=new _e;X.position.set(0,1.72,0),xt.add(X),W(new ze(.23,24,16),new ce({color:D,roughness:.45,metalness:.05}),X);let pt=W(new ze(.19,24,16),F,X,!1);pt.position.set(0,.01,.1),pt.scale.set(1.04,.82,.8);let J=[];[-1,1].forEach(tt=>{let it=new _e;it.position.set(tt*.13,.76,0),xt.add(it),W(Xn([En(new ts(.115,.42,5,10),D).translate(0,-.3,0),En(new Pe(.2,.13,.34),w).translate(0,-.66,.06)]),wt,it),J.push(it),lt&&(it.rotation.x=-1.4)});let Z=[];[-1,1].forEach(tt=>{let it=new _e;it.position.set(tt*.34,1.4,0),xt.add(it),W(En(new ts(.09,.22,4,8),D).translate(0,-.19,0),wt,it);let B=new _e;B.position.set(0,-.36,0),it.add(B),W(Xn([En(new ts(.085,.2,4,8),D).translate(0,-.17,0),En(new ze(.1,12,8),C).translate(0,-.34,0)]),wt,B),Z.push({sh:it,el:B})});let E=new bt(new ts(.55,1.2,4,8),new Fe({visible:!1}));E.position.set(0,1.05,0),gt.add(E),E.userData.astro=this.astros.length,gt.scale.setScalar(1.85);let nt={g:gt,body:xt,head:X,legs:J,arms:Z,torso:rt,hit:E,wt:0,wd:0,seated:lt,yaw:O,base:O,ph:Math.random()*6,y0:gt.position.y};return this.astros.push(nt),nt};st(-2.4,14.2,.1,q[0],!1),st(2.8,15.4,-.25,q[1],!1),st(8.4,11.6,-.85,q[2],!0);{let H=n?180:320,$=36,O=H+$;this.nA=H,this.nP=$;let dt=new Float32Array(O*3),lt=new Float32Array(O),gt=new Float32Array(O);this.puffAge=new Float32Array($).fill(9);for(let F=0;F<H;F++)dt.set([(Math.random()-.5)*220,.5+Math.random()*16,(Math.random()-.5)*220],F*3),lt[F]=1.2+Math.random()*2.2,gt[F]=.05+Math.random()*.1;let xt=new ie;xt.setAttribute("position",new ue(dt,3)),xt.setAttribute("aSize",new ue(lt,1)),xt.setAttribute("aAlpha",new ue(gt,1)),this.dust=xt,this.dustMat=new se({transparent:!0,depthWrite:!1,fog:!1,uniforms:{dpr:{value:1},col:{value:os(14920074)}},vertexShader:"attribute float aSize; attribute float aAlpha; uniform float dpr; varying float vA; void main(){ vA = aAlpha; vec4 mv = modelViewMatrix * vec4(position,1.); gl_PointSize = clamp(aSize * dpr * 220. / -mv.z, 1., 90. * dpr); gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform vec3 col; varying float vA; void main(){ float d = length(gl_PointCoord - .5); gl_FragColor = vec4(col, smoothstep(.5, .0, d) * vA); }"});let wt=new Ci(xt,this.dustMat);wt.frustumCulled=!1,s.add(wt),this.puffI=0,this.puffT=0}this.controls=new Fr(this.cam,e),Object.assign(this.controls,{enableDamping:!0,dampingFactor:.06,enablePan:!1,minDistance:11,maxDistance:130,maxPolarAngle:1.5,minPolarAngle:.25,zoomSpeed:.6,autoRotate:!1,autoRotateSpeed:-.2}),this.controls.target.set(0,10,2),this.controls.enabled=!1,this.controls.addEventListener("start",()=>{this.controls.autoRotate=!1,clearTimeout(this._ar)}),this.controls.addEventListener("end",()=>{clearTimeout(this._ar),this._ar=setTimeout(()=>{this.reduced||(this.controls.autoRotate=!0)},9e3)}),this.ray=new Pr,this.boxes=null,this._v=new on,this.hitList=this.astros.map(H=>H.hit)}resize(t,e,n){this.controls.rotateSpeed=e/(1.2*Math.min(t,900)),this.cam.aspect=t/e,this.cam.fov=t/e<.8?52:38,this.cam.updateProjectionMatrix(),this.dustMat.uniforms.dpr.value=n,this.portrait=t/e<.8,this.intro||(this.controls.target.y=this.portrait?13:17)}enter(t){this.reduced=t,this.controls.autoRotate=!1,clearTimeout(this._ar),this._ar=setTimeout(()=>{t||(this.controls.autoRotate=!0)},11e3);let e=this.portrait?46:80;this.end=new on(14,this.portrait?6:11,e),this.start=new on(-40,150,190),this.controls.target.set(0,this.portrait?13:17,2),this.intro={t:0,d:t?1.2:4.2,w:!1},this.cam.position.copy(this.start),this.controls.enabled=!1,this.astros.forEach(n=>{n.wt=0})}wave(t,e=0,n=3.6){let s=this.astros[t];s&&(s.wd=e,s.wt=n)}waveAll(t=3.8){this.astros.forEach((e,n)=>this.wave(n,n*.35,t))}headWorld(t,e){return this.astros[t].head.getWorldPosition(e).add(this._v.set(0,.6,0))}update(t){this.t+=t;let e=this.t;this.mobile&&++this.fr&1||(this.r.shadowMap.needsUpdate=!0),this.roverA+=t*(1.55/this.roverR);let n=this.roverA,s=this.roverR,r=this.roverC,o=r.x+Math.cos(n)*s,a=r.z+Math.sin(n)*s;this.rover.position.set(o,0,a),this.rover.rotation.y=-n,this.rover.position.y=Math.sin(e*3.1)*.015,this.rover.rotation.z=Math.sin(e*1.7)*.012;let l=1.55*t/(.55*1.25);this.wheels.forEach((g,y)=>{g.rotation.x+=l}),this.puffT-=t;let c=this.dust.attributes.position,h=this.dust.attributes.aSize,u=this.dust.attributes.aAlpha,d=this.nA;if(this.puffT<=0){this.puffT=.16;let g=this.puffI++%this.nP;this.puffAge[g]=0;let y=o+Math.sin(n)*2.2,m=a-Math.cos(n)*2.2;c.setXYZ(d+g,y+(Math.random()-.5),.5,m+(Math.random()-.5))}for(let g=0;g<this.nP;g++){let y=this.puffAge[g]+=t,m=d+g;if(y>2.6){u.setX(m,0);continue}c.setY(m,c.getY(m)+t*.5),h.setX(m,1.4+y*2.4),u.setX(m,(1-y/2.6)*.22*Math.min(1,y*5))}for(let g=0;g<d;g++){let y=c.getX(g)+t*(2.2+g%5*.35),m=c.getY(g)+Math.sin(e*.4+g)*t*.25,f=c.getZ(g)+t*.4;y>110&&(y-=220),f>110&&(f-=220),c.setXYZ(g,y,m,f)}c.needsUpdate=h.needsUpdate=u.needsUpdate=!0,this.beacon.material.opacity=.35+.65*(Math.sin(e*2.2)>.55?1:.08),this.dish.rotation.y=.6+Math.sin(e*.25)*.35;let p=this.cam.position;if(this.astros.forEach((g,y)=>{let m=g.wt>0&&g.wd<=0;g.wd>0?g.wd-=t:g.wt>0&&(g.wt-=t);let b=(m?Math.atan2(p.x-g.g.position.x,p.z-g.g.position.z):g.base+Math.sin(e*.2+g.ph)*.25)-g.g.rotation.y;b=Math.atan2(Math.sin(b),Math.cos(b)),g.g.rotation.y+=b*(1-Math.exp(-t*(m?4:1.5)));let _=m?1:0;g.k=(g.k||0)+(_-(g.k||0))*(1-Math.exp(-t*7));let[x,I]=g.arms;I.sh.rotation.z=(2.6+Math.sin(e*5.5+y)*.1)*g.k+.08*(1-g.k),I.el.rotation.z=Math.sin(e*9+y)*.55*g.k+.15*(1-g.k),x.sh.rotation.z=-.08-Math.sin(e*.9+g.ph)*.03+g.k*.12,x.el.rotation.z=-.12,g.body.position.y=Math.sin(e*1.4+g.ph)*.008+g.k*Math.abs(Math.sin(e*5.5+y))*.02,g.head.rotation.y=m?Math.sin(e*2+y)*.12:Math.sin(e*.5+g.ph)*.4,g.head.rotation.x=m?-.05:Math.sin(e*.37+g.ph)*.05}),this.intro){let g=this.intro;g.t+=t;let y=Math.min(1,g.t/g.d),m=1-Math.pow(1-y,3.2);this.cam.position.lerpVectors(this.start,this.end,m),this.cam.lookAt(this.controls.target),!g.w&&y>.8&&(g.w=!0,this.waveAll(),this.onWave&&this.onWave()),y>=1&&(this.intro=null,this.controls.enabled=!0,this.controls.update())}else this.controls.dampingFactor=1-Math.exp(-t*6.5),this.controls.update(t),this.cam.position.y<1.2&&(this.cam.position.y=1.2)}pick(t){this.ray.setFromCamera(t,this.cam);let e=this.ray.intersectObjects(this.hitList,!1);if(e.length)return{astro:e[0].object.userData.astro};let n=-1,s=.09,r=this._v;return this.astros.forEach((o,a)=>{o.g.getWorldPosition(r),r.y+=1.6;let l=r.clone().project(this.cam),c=Math.hypot((l.x-t.x)*this.cam.aspect,l.y-t.y);l.z<1&&c<s&&(s=c,n=a)}),n>=0?{astro:n}:this.ray.intersectObjects(this.base,!1).length?{base:!0}:(this.boxes||(this.boxes=[new Rn(new on(-12,0,-16),new on(30,38,-4)),new Rn(new on(-12,0,6),new on(12,4,16))]),this.boxes.some(o=>this.ray.ray.intersectsBox(o))?{base:!0}:null)}};var El=class{constructor(){this.ctx=null,this.on=!1,this.state="off"}unlock(){try{if(!this.ctx){let n=window.AudioContext||window.webkitAudioContext;if(!n)return;this.ctx=new n,this.build()}let t=this.ctx.createBuffer(1,1,22050),e=this.ctx.createBufferSource();e.buffer=t,e.connect(this.ctx.destination),e.start(0),this.ctx.state!=="running"&&this.ctx.resume(),this.state=this.ctx.state}catch{this.state="error"}}build(){let t=this.ctx;this.master=t.createGain(),this.master.gain.value=0,this.master.connect(t.destination);let e=t.createDynamicsCompressor();e.connect(this.master),this.bus=e;let n=t.createBiquadFilter();n.type="lowpass",n.frequency.value=520,n.Q.value=.6,n.connect(e);let s=t.createOscillator(),r=t.createGain();s.frequency.value=.045,r.gain.value=260,s.connect(r),r.connect(n.frequency),s.start();let o=t.createGain();o.gain.value=.05,o.connect(n),[[55,"sine",1],[82.41,"triangle",.5],[110.3,"sine",.45],[164.6,"sine",.2],[220.9,"triangle",.08]].forEach(([g,y,m],f)=>{let b=t.createOscillator(),_=t.createGain();b.type=y,b.frequency.value=g,b.detune.value=f%2?6:-5,_.gain.value=m,b.connect(_),_.connect(o),b.start();let x=t.createOscillator(),I=t.createGain();x.frequency.value=.03+f*.017,I.gain.value=m*.5,x.connect(I),I.connect(_.gain),x.start()});let a=t.sampleRate*4,l=t.createBuffer(1,a,t.sampleRate),c=l.getChannelData(0),h=0;for(let g=0;g<a;g++){let y=Math.random()*2-1;h=(h+.02*y)/1.02,c[g]=h*3.2}this.noise=l;let u=t.createBufferSource();u.buffer=l,u.loop=!0;let d=t.createBiquadFilter();d.type="lowpass",d.frequency.value=180;let p=t.createGain();p.gain.value=.12,u.connect(d),d.connect(p),p.connect(e),u.start()}set(t){if(this.on=t,!this.ctx)return;let e=this.ctx.currentTime;t&&this.ctx.state!=="running"&&this.ctx.resume(),this.master.gain.cancelScheduledValues(e),this.master.gain.setTargetAtTime(t?.9:0,e,t?1.2:.25)}whoosh(t=2.4,e=!1){if(!this.ctx||!this.on)return;let n=this.ctx,s=n.currentTime,r=n.createBufferSource();r.buffer=this.noise,r.loop=!0;let o=n.createBiquadFilter();o.type="bandpass",o.Q.value=1.4;let a=n.createGain();o.frequency.setValueAtTime(e?200:900,s),o.frequency.exponentialRampToValueAtTime(e?2400:160,s+t),a.gain.setValueAtTime(0,s),a.gain.linearRampToValueAtTime(e?.5:.32,s+t*.55),a.gain.linearRampToValueAtTime(0,s+t),r.connect(o),o.connect(a),a.connect(this.bus),r.start(s,Math.random()*3),r.stop(s+t+.1)}blip(t=880){if(!this.ctx||!this.on)return;let e=this.ctx,n=e.currentTime,s=e.createOscillator(),r=e.createGain();s.type="sine",s.frequency.setValueAtTime(t,n),s.frequency.exponentialRampToValueAtTime(t*1.5,n+.08),r.gain.setValueAtTime(0,n),r.gain.linearRampToValueAtTime(.05,n+.01),r.gain.exponentialRampToValueAtTime(1e-4,n+.25),s.connect(r),r.connect(this.bus),s.start(n),s.stop(n+.3)}chime(){if(!this.ctx||!this.on)return;let t=this.ctx,e=t.currentTime;[523.25,659.25,987.77].forEach((n,s)=>{let r=t.createOscillator(),o=t.createGain();r.frequency.value=n,o.gain.setValueAtTime(0,e+s*.09),o.gain.linearRampToValueAtTime(.04,e+s*.09+.02),o.gain.exponentialRampToValueAtTime(1e-4,e+s*.09+2.2),r.connect(o),o.connect(this.bus),r.start(e+s*.09),r.stop(e+2.6)})}};var ee=i=>document.querySelector(i),jt=z,en=Math.PI,vp=navigator.userAgent,Mp=window.__V||"1",be=matchMedia("(pointer: coarse)").matches||/Mobi|Android|iPhone|iPad/.test(vp),ci=matchMedia("(prefers-reduced-motion: reduce)").matches,zt=window.__ap={ready:!1,mode:"boot",stop:0,fps:0,env:{mobile:be,reduced:ci,inX:/Twitter/i.test(vp)}},yn=ns.clamp,Mu=ns.lerp,Bo=ns.smoothstep;var qv=i=>(i=(i+en)%(2*en),i<0&&(i+=2*en),i-en),ln=ee("#gl"),oe;try{if(oe=new Ga({canvas:ln,antialias:!1,powerPreference:"high-performance",stencil:!1}),!oe.capabilities.isWebGL2)throw new Error("webgl2")}catch(i){throw document.body.classList.add("nogl"),zt.mode="nogl",i}oe.toneMapping=Ir;oe.toneMappingExposure=1.05;oe.shadowMap.enabled=!0;oe.shadowMap.type=tu;var bp=Math.min(8,oe.capabilities.getMaxAnisotropy()),Yv=Math.min(window.devicePixelRatio||1,be?1.5:1.75),op=be?.9:1,Nn=Yv,Me=1,Te=1,cn=new Pn,Qt=new Ve(42,1,.02,12e3),he=new El,Gr={none:0,lo:1,hi:2,xl:3},Ho={};function Li(i,t,e=!0){let n=Ho[i]||(Ho[i]={name:i,srgb:e,lvl:"none",tex:null,fns:[]});return n.fns.push(t),n.tex&&t(n.tex),n}function Sp(i){return new Promise((t,e)=>{let n=new Image;n.crossOrigin="anonymous",n.onload=()=>(n.decode?n.decode().catch(()=>{}):Promise.resolve()).then(()=>t(n)),n.onerror=()=>e(new Error("img "+i)),n.src=i})}var Il=[],ap=0;function Ep(i){let{s:t,lvl:e,t:n}=i;if(t.pend=null,Gr[t.lvl]>=Gr[e]){n.dispose();return}oe.initTexture(n);let s=t.tex;t.tex=n,t.lvl=e,t.fns.forEach(r=>r(n)),s&&setTimeout(()=>s.dispose(),1500)}async function wp(i,t){let e=Ho[i];if(!(!e||Gr[e.lvl]>=Gr[t]||e.loading===t||e.pend===t)){e.loading=t;try{let n=await Sp(`tex/${i}_${t}.jpg?v=${Mp}`);if(Gr[e.lvl]>=Gr[t])return;let s=new je(n);s.colorSpace=e.srgb?Ie:jn,s.anisotropy=bp,s.wrapS=e.wrap||bi,e.wrap&&(s.wrapT=e.wrap),s.needsUpdate=!0;let r={s:e,lvl:t,t:s};zt.loLoaded?(e.pend=t,Il.push(r)):Ep(r)}catch(n){console.warn(n.message)}finally{e.loading===t&&(e.loading=null)}}}var Wr=[],bu=0;function Xr(i,t){i.forEach(e=>{let n=Wr.indexOf(e);n>=0&&Wr.splice(n,1),t?Wr.unshift(e):Wr.push(e)}),Tp()}function Tp(){if(zt.loLoaded)for(;bu<2&&Wr.length;){let i=Wr.shift(),[t,e]=i.split(":");bu++,wp(t,e||"hi").finally(()=>{bu--,Tp()})}}var qr=new _e;cn.add(qr);var Os=new bt(new ze(5e3,64,32),new Fe({side:De,color:new It(.42,.42,.48),depthWrite:!1,fog:!1}));Os.rotation.set(1.05,.2,.55);Os.visible=!1;Os.renderOrder=-2;qr.add(Os);Li("stars",i=>{Os.material.map=i,Os.material.needsUpdate=!0,Os.visible=!0});var Nl;{let i=be?5e3:9e3,t=new Float32Array(i*3),e=new Float32Array(i*3),n=new Float32Array(i),s=new Float32Array(i),r=[[.75,.85,1],[.9,.95,1],[1,1,1],[1,.95,.85],[1,.85,.7]];for(let l=0;l<i;l++){let c=Math.random()*2-1,h=Math.random()*en*2,u=Math.sqrt(1-c*c);t.set([Math.cos(h)*u*4e3,c*4e3,Math.sin(h)*u*4e3],l*3);let d=r[Math.floor(Math.random()*r.length)],p=.55+Math.random()*.45;e.set([d[0]*p,d[1]*p,d[2]*p],l*3),n[l]=.7+Math.pow(Math.random(),7)*3.6,s[l]=Math.random()}let o=new ie;o.setAttribute("position",new ue(t,3)),o.setAttribute("color",new ue(e,3)),o.setAttribute("size",new ue(n,1)),o.setAttribute("ph",new ue(s,1)),Nl=new se({transparent:!0,depthWrite:!1,blending:Ne,uniforms:{t:{value:0},dpr:{value:1}},vertexShader:`attribute float size; attribute float ph; attribute vec3 color; uniform float t, dpr; varying vec3 vC; varying float vA;
      void main(){ vC = color; vA = mix(1., .65 + .35 * sin(t * (.6 + ph * 2.2) + ph * 60.), step(1.6, size));
        gl_PointSize = size * dpr; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }`,fragmentShader:"varying vec3 vC; varying float vA; void main(){ float d = length(gl_PointCoord - .5); float a = smoothstep(.5, .0, d); gl_FragColor = vec4(vC * a * a * vA * 1.25, 1.); }"});let a=new Ci(o,Nl);a.renderOrder=-1,qr.add(a)}var wn=6,Du=new _e;cn.add(Du);var Fl=new se({uniforms:{map:{value:null},t:{value:0},fade:{value:1}},vertexShader:"varying vec2 vUv; varying vec3 vN; varying vec3 vV; void main(){ vUv = uv; vec4 mv = modelViewMatrix * vec4(position,1.); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }",fragmentShader:`uniform sampler2D map; uniform float t, fade; varying vec2 vUv; varying vec3 vN; varying vec3 vV;
    void main(){ float mu = clamp(dot(normalize(vN), normalize(vV)), 0., 1.);
      vec3 c = texture2D(map, vUv + vec2(t * .0035, 0.)).rgb; vec3 c2 = texture2D(map, vUv * vec2(2., 1.6) + vec2(-t * .005, t * .0015)).rgb;
      c = mix(c, c2, .38); float limb = pow(mu, .5);
      vec3 col = c * (.45 + .9 * limb) * 3.4 + vec3(1., .5, .18) * pow(1. - mu, 2.5) * 2.2;
      gl_FragColor = vec4(col * fade, 1.); }`}),Ol=new bt(new ze(wn,96,64),Fl);Du.add(Ol);{let i=Li("sun",t=>{Fl.uniforms.map.value=t});i.wrap=Ss}var kl=(i,t,e,n=16777215)=>{let s=new Ki(new Ri({map:i,transparent:!0,depthWrite:!1,blending:Ne,opacity:e,color:new It(n)}));return s.scale.setScalar(t),Du.add(s),s},Ap=kl(Dn([[0,"rgba(255,245,225,1)"],[.14,"rgba(255,214,160,.7)"],[.3,"rgba(255,150,70,.16)"],[.6,"rgba(255,110,40,.04)"],[1,"rgba(0,0,0,0)"]]),wn*6,1,16777215);Ap.material.color.multiplyScalar(1.4);var lp=kl(xu(3),wn*10,.5),cp=kl(xu(19),wn*7.5,.4),Zv=kl(Dn([[0,"rgba(255,190,120,.10)"],[.5,"rgba(255,150,80,.03)"],[1,"rgba(0,0,0,0)"]]),wn*20,1),$v=new Cr(16773858,3.4,0,0);cn.add($v);cn.add(new sl(9414344,.07));cn.matrixWorldAutoUpdate=!1;function Cu(i,t,e,n=.07){let s=new se({side:De,transparent:!0,depthWrite:!1,blending:Ne,uniforms:{center:{value:new jt},R:{value:i},Rs:{value:i*(1+n)},color:{value:new It(t)},k:{value:e},L:{value:new jt(1,0,0)}},vertexShader:"varying vec3 vP; void main(){ vec4 w = modelMatrix * vec4(position,1.); vP = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform vec3 center, color, L; uniform float R, Rs, k; varying vec3 vP;
      void main(){ vec3 d = normalize(vP - cameraPosition); float tt = dot(center - cameraPosition, d); vec3 q = cameraPosition + d * tt;
        float b = length(q - center); float i = pow(clamp(1. - (b - R) / (Rs - R), 0., 1.), 3.2);
        vec3 qc = q - center; float ql = length(qc); float lit = ql > 1e-4 ? smoothstep(-.45, .6, dot(qc / ql, L)) : .5; gl_FragColor = vec4(max(color * i * lit * k, vec3(0.)), 1.); }`}),r=new bt(new ze(i*(1+n),64,32),s);return r.renderOrder=3,r}var Yr=[{id:"mercury",r:.42,a:14,T:.24,day:1408,tilt:.03,a0:2.1,tint:10130832},{id:"venus",r:.88,a:19,T:.62,day:-5832,tilt:177.4,a0:4.4,atm:[16766624,.9],tint:14203274},{id:"earth",r:1,a:25,T:1,day:23.93,tilt:23.44,a0:.7,tint:3828384},{id:"mars",r:.6,a:31.5,T:1.88,day:24.6,tilt:25.2,a0:3.2,atm:[16751216,.35],tint:11821114},{id:"jupiter",r:3,a:54,T:11.86,day:9.93,tilt:3.1,a0:5.5,atm:[16769728,.35],tint:13216136},{id:"saturn",r:2.5,a:68,T:29.4,day:10.7,tilt:26.7,a0:1.6,ring:1,atm:[16771008,.3],tint:14073999},{id:"uranus",r:1.65,a:81,T:84,day:-17.2,tilt:97.8,a0:4,atm:[11465471,.8],tint:10475744},{id:"neptune",r:1.6,a:93,T:164.8,day:16.1,tilt:28.3,a0:2.6,atm:[7314943,.9],tint:5207e3}],Jv={earth:[["Moon",.27,2.75,27.3,16777215]],mars:[["Phobos",.07,1.7,.32,10127994],["Deimos",.05,2.5,1.26,9207922]],jupiter:[["Io",.2,1.7,1.77,15849866],["Europa",.17,2.15,3.55,15327180],["Ganymede",.26,2.75,7.15,13024430],["Callisto",.24,3.55,16.7,9208437]],saturn:[["Enceladus",.07,2.5,1.37,16777215],["Rhea",.1,2.85,4.5,14539217],["Titan",.25,3.6,15.9,14264411]],uranus:[["Miranda",.07,1.7,1.41,13224393],["Ariel",.1,2.1,2.52,14144204],["Titania",.13,2.7,8.7,13155764],["Oberon",.12,3.3,13.5,12168867]],neptune:[["Triton",.2,2.7,-5.88,15718863]]},Ns=[],ls=i=>{let t=new Mo(new Uint8Array([i>>16&255,i>>8&255,i&255,255]),1,1);return t.colorSpace=Ie,t.needsUpdate=!0,t},Uu=en/180,Kv=new ji({color:11124436,transparent:!0,opacity:.13,depthWrite:!1});Yr.forEach((i,t)=>{i.stop=de.findIndex(s=>s.id===i.id),i.root=new _e,cn.add(i.root),i.tiltG=new _e,i.tiltG.rotation.z=-i.tilt*Uu,i.root.add(i.tiltG),i.spin=new _e,i.tiltG.add(i.spin),i.w=.02/Math.sqrt(i.T),i.ws=Math.sign(i.day)*.12*Math.pow(24/Math.abs(i.day),.35),i.ang=i.a0;let e=be?72:96;i.id!=="earth"&&(i.mat=new ce({map:ls(i.tint),roughness:1,metalness:0}),i.mesh=new bt(new ze(i.r,e,e/2|0),i.mat),i.spin.add(i.mesh),Li(i.id,s=>{i.mat.map=s,i.mat.needsUpdate=!0})),i.atm&&(i.atmo=Cu(i.r,i.atm[0],i.atm[1],i.id==="venus"?.09:.06),i.root.add(i.atmo));let n=[];for(let s=0;s<=360;s++){let r=s/360*en*2;n.push(new jt(Math.cos(r)*i.a,0,-Math.sin(r)*i.a))}i.orbit=new Er(new ie().setFromPoints(n),Kv.clone()),cn.add(i.orbit),i.moons=(Jv[i.id]||[]).map(([s,r,o,a,l],c)=>{let h=new _e;h.rotation.y=c*2.1+t,i.tiltG.add(h),s==="Triton"&&(h.rotation.x=.4);let u=new ce({map:ls(8947848),color:l,roughness:1}),d=new bt(new ze(r,48,24),u);d.position.x=o*i.r,h.add(d),Li("moon",y=>{u.map=y,u.needsUpdate=!0});let p=new Er(new ie().setFromPoints(Array.from({length:129},(y,m)=>new jt(Math.cos(m/128*en*2)*o*i.r,0,Math.sin(m/128*en*2)*o*i.r))),new ji({color:11124436,transparent:!0,opacity:0,depthWrite:!1}));h.parent.add(p),p.rotation.copy(h.rotation),p.rotation.y=0;let g={name:s,piv:h,mesh:d,r,w:Math.sign(a)*.35/Math.sqrt(Math.abs(a)),ring:p};return s==="Titan"&&(g.atmo=Cu(r,15249504,.9,.12),d.add(g.atmo)),Ns.push({obj:d,r,stop:i.stop,moon:!0}),g}),Ns.push({obj:i.root,r:i.r,stop:i.stop,p:i})});var Ke=Object.fromEntries(Yr.map(i=>[i.id,i]));{let i=Ke.saturn,t=i.r*1.24,e=i.r*2.27,n=new Co(t,e,be?160:256,1),s=n.attributes.position,r=n.attributes.uv;for(let l=0;l<s.count;l++){let c=Math.hypot(s.getX(l),s.getY(l));r.setXY(l,(c-t)/(e-t),.5)}i.ringMat=new se({side:$e,transparent:!0,depthWrite:!1,uniforms:{map:{value:null},center:{value:new jt},R:{value:i.r}},vertexShader:"varying vec2 vUv; varying vec3 vP; void main(){ vUv = uv; vec4 w = modelMatrix * vec4(position,1.); vP = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform sampler2D map; uniform vec3 center; uniform float R; varying vec2 vUv; varying vec3 vP;
      void main(){ vec4 c = texture2D(map, vUv); vec3 L = normalize(-vP); vec3 oc = vP - center; float b = dot(oc, L); float h = b * b - (dot(oc, oc) - R * R);
        float sh = (b < 0.) ? smoothstep(0., R * R * .08, h) : 0.; vec3 col = c.rgb * (1. - sh * .92) * 1.05; gl_FragColor = vec4(col, c.a * .95);
        #include <colorspace_fragment>
      }`});let o=new bt(n,i.ringMat);o.rotation.x=-en/2,i.tiltG.add(o),i.ringMesh=o;let a=()=>Sp(`tex/ring.png?v=${Mp}`).then(l=>{let c=new je(l);c.colorSpace=Ie,c.anisotropy=bp,c.needsUpdate=!0,i.ringMat.uniforms.map.value=c});i.loadRing=a}var Wt=Ke.earth,hi={dayMap:{value:ls(2771568)},nightMap:{value:ls(0)},specMap:{value:ls(0)},cloudMap:{value:ls(0)},normalMap:{value:ls(8421631)},L:{value:new jt(1,0,0)},cloudShift:{value:0},nightK:{value:1},normalK:{value:2.2}},jv=new se({uniforms:hi,vertexShader:"varying vec2 vUv; varying vec3 vN; varying vec3 vP; void main(){ vUv = uv; vec4 w = modelMatrix * vec4(position,1.); vP = w.xyz; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`uniform sampler2D dayMap, nightMap, specMap, cloudMap, normalMap; uniform vec3 L; uniform float cloudShift, nightK, normalK;
    varying vec2 vUv; varying vec3 vN; varying vec3 vP;
    vec3 perturb(vec3 p, vec3 n, vec2 uv, vec3 mn){ vec3 q0 = dFdx(p), q1 = dFdy(p); vec2 s0 = dFdx(uv), s1 = dFdy(uv);
      if (abs(s0.x) > .25 || abs(s1.x) > .25) return n;
      vec3 q1p = cross(q1, n), q0p = cross(n, q0); vec3 T = q1p * s0.x + q0p * s1.x, B = q1p * s0.y + q0p * s1.y;
      float det = max(dot(T, T), dot(B, B)); if (det < 1e-20) return n; float sc = inversesqrt(det); vec3 r = T * (mn.x * sc) + B * (mn.y * sc) + n * mn.z; return dot(r, r) > 1e-12 ? normalize(r) : n; }
    void main(){
      vec3 N = normalize(vN), V = normalize(cameraPosition - vP), Ld = normalize(L);
      vec3 mn = texture2D(normalMap, vUv).xyz * 2. - 1.; mn.xy *= normalK; vec3 Np = perturb(vP, N, vUv, normalize(mn));
      float ndl = dot(N, Ld), dayK = smoothstep(-.12, .28, ndl);
      vec3 day = texture2D(dayMap, vUv).rgb; float cl = texture2D(cloudMap, vUv + vec2(cloudShift, 0.)).r;
      vec3 col = day * max(dot(Np, Ld), 0.) * 1.3 * (1. - cl * .3) + day * .012;
      float spec = texture2D(specMap, vUv).r; vec3 Hh = normalize(Ld + V);
      col += vec3(1., .93, .82) * pow(max(dot(N, Hh), 0.), 60.) * spec * smoothstep(0., .25, ndl) * .9;
      col += vec3(.2, .35, .55) * pow(max(dot(N, Hh), 0.), 8.) * spec * smoothstep(0., .25, ndl) * .08;
      vec3 night = texture2D(nightMap, vUv).rgb; col += night * night * vec3(1.6, 1.25, .85) * 2.6 * (1. - dayK) * nightK * (1. - cl * .7);
      float fr = pow(1. - max(dot(N, V), 0.), 2.6); col += vec3(.3, .58, 1.) * fr * smoothstep(-.35, .55, ndl) * .85;
      gl_FragColor = vec4(clamp(col, 0., 64.), 1.);
      #include <colorspace_fragment>
    }`});Wt.mesh=new bt(new ze(1,be?128:192,be?64:96),jv);Wt.spin.add(Wt.mesh);var Nu=new se({transparent:!0,depthWrite:!1,uniforms:{map:{value:ls(0)},L:hi.L,op:{value:.95}},vertexShader:"varying vec2 vUv; varying vec3 vN; void main(){ vUv = uv; vN = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",fragmentShader:"uniform sampler2D map; uniform vec3 L; uniform float op; varying vec2 vUv; varying vec3 vN; void main(){ float c = texture2D(map, vUv).r; float ndl = dot(normalize(vN), normalize(L)); float lit = smoothstep(-.18, .55, ndl); gl_FragColor = vec4(vec3(.015 + lit * 1.02), c * op * (.15 + .85 * smoothstep(-.35, .25, ndl))); }"});Wt.clouds=new bt(new ze(1.008,be?96:128,be?48:64),Nu);Wt.spin.add(Wt.clouds);Wt.atmo=Cu(1,5938431,1.35,.055);Wt.root.add(Wt.atmo);Li("earth",i=>{hi.dayMap.value=i});Li("night",i=>{hi.nightMap.value=i});Li("spec",i=>{hi.specMap.value=i},!1);Li("normal",i=>{hi.normalMap.value=i},!1);Li("clouds",i=>{Nu.uniforms.map.value=i,hi.cloudMap.value=i},!1);var Go=(i,t,e=1)=>{let n=(t+180)/360*en*2,s=(90-i)/180*en;return new jt(-Math.cos(n)*Math.sin(s)*e,Math.cos(s)*e,Math.sin(n)*Math.sin(s)*e)},tn=new _e;Wt.spin.add(tn);{let i=Go(Lo.lat,Lo.lon,1.002);tn.position.copy(i),tn.lookAt(i.clone().multiplyScalar(2));let t=new It(rs).multiplyScalar(2.6),e=new Ki(new Ri({map:Dn([[0,"rgba(255,255,255,1)"],[.18,"rgba(151,252,228,.9)"],[.45,"rgba(151,252,228,.18)"],[1,"rgba(151,252,228,0)"]]),color:t,transparent:!0,depthWrite:!1,blending:Ne}));e.scale.setScalar(.075),tn.add(e),tn.userData.core=e;let n=new Fe({color:t,transparent:!0,depthWrite:!1,blending:Ne,side:$e});tn.userData.rings=[0,1].map(r=>{let o=new bt(new Co(.92,1,64),n.clone());return o.scale.setScalar(.02),tn.add(o),o});let s=new bt(new Be(.0025,.006,.22,12,1,!0),new se({transparent:!0,depthWrite:!1,blending:Ne,uniforms:{c:{value:t}},vertexShader:"varying float vY; void main(){ vY = uv.y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",fragmentShader:"uniform vec3 c; varying float vY; void main(){ gl_FragColor = vec4(c * pow(1. - vY, 1.5) * .9, 1.); }"}));s.rotation.x=-en/2,s.position.z=.11,tn.add(s)}var Hl=new _e;cn.add(Hl);var Pu=.55,Ll=be?110:180,oi,Rp=[];{let i=(be?1500:2800)+Ll,t=new As(1,1),e=t.attributes.position,n=(h,u,d)=>{let p=Math.sin(h*12.9898+u*78.233+d*37.719)*43758.5453;return p-Math.floor(p)};for(let h=0;h<e.count;h++){let u=new jt().fromBufferAttribute(e,h),d=.72+n(u.x,u.y,u.z)*.5;u.multiplyScalar(d),u.y*=.82,e.setXYZ(h,u.x,u.y,u.z)}t.computeVertexNormals(),oi=new Sr(t,new ce({color:16777215,roughness:.95,metalness:0,flatShading:!0}),i);let s=new te,r=new Oe,o=new dn,a=new jt,l=new jt,c=new It;for(let h=0;h<i;h++){let u,d,p,g;h<Ll?(u=Pu+(Math.random()-.5)*.3,d=41+(Math.random()-.5)*6,p=(Math.random()-.5)*2.2,g=.02+Math.pow(Math.random(),4)*.24):(u=Math.random()*en*2,d=41+(Math.random()+Math.random()+Math.random()-1.5)*3.2,p=(Math.random()+Math.random()-1)*.9,g=.02+Math.pow(Math.random(),7)*.16),l.set(Math.cos(u)*d,p,-Math.sin(u)*d),o.set(Math.random()*6,Math.random()*6,Math.random()*6),r.setFromEuler(o),a.set(g,g*(.7+Math.random()*.5),g),s.compose(l,r,a),oi.setMatrixAt(h,s);let y=.16+Math.random()*.2;c.setRGB(y*1.1,y,y*.88),oi.setColorAt(h,c),h<Ll&&Rp.push({p:l.clone(),e:o.clone(),s:a.clone(),w:(Math.random()-.5)*.5})}Hl.add(oi)}var Iu=i=>i.set(Math.cos(Pu)*41,0,-Math.sin(Pu)*41).applyAxisAngle(new jt(0,1,0),Hl.rotation.y),Qv=new Qe(4,4,{type:bn,samples:be?2:4}),zs=new gl(oe,Qv),Vo=new yl(cn,Qt);zs.addPass(Vo);var gn=new Nr(new et(256,256),.9,.55,.92);zs.addPass(gn);if(be){gn.nMips=3;let i=gn.setSize.bind(gn);gn.setSize=(t,e)=>i(Math.round(t*.5),Math.round(e*.5))}zs.addPass(new xl);var Su=new _l,qn=null,Se=null,Zr=null,Fu=()=>{if(!qn){qn=new Sl(oe,ln,be),qn.resize(Me,Te,Nn);try{oe.compileAsync?oe.compileAsync(qn.scene,qn.cam).catch(()=>{}):oe.compile(qn.scene,qn.cam)}catch{}}return qn},Yn=null,Ou=()=>{if(!Yn){Yn=new Ml(oe,ln,be),Yn.resize(Me,Te,Nn);try{oe.compileAsync?oe.compileAsync(Yn.scene,Yn.cam).catch(()=>{}):oe.compile(Yn.scene,Yn.cam)}catch{}}return Yn},hp=new jt,up=new jt,G={off:new jt,ov:new jt,ld:Math.log(2600),sc:1,calm:!1,arrived:!0,target:new jt,dist:2600,pitch:.7,anchor:i=>i.set(0,0,0),tr:null,vy:0,vp:0,yawT:.9,pitchT:.7,yB:.9,yBT:.9,yU:0,yUT:0,pB:.7,pBT:.7,pU:0,pUT:0,zoom:1,zoomT:1,base:1,yaw:.9},mn={x:0,y:0,tx:0,ty:0},Bl=42;function tM(){let i=Bl*Uu,t=2*Math.atan(Math.tan(i/2)*Qt.aspect);return Math.min(i,t)}var zl=(i,t)=>i/Math.sin(Math.atan(Math.tan(tM()/2)*t)),Lu=()=>Me/Te<.8;function Bu(){return zl(104,.92)}function Cp(i){let t=de[i],e=new jt;if(t.id==="overview")return{anchor:p=>p.set(0,0,0),dist:Bu(),yaw:G.yaw,pitch:.72};if(t.id==="sun")return{anchor:p=>p.set(0,0,0),dist:zl(wn,Lu()?.3:.34),yaw:G.yaw,pitch:.12};if(t.id==="belt"){Iu(e);let p=Math.atan2(e.x,e.z)+en/2+.35;return{anchor:Iu,dist:6.5,yaw:p,pitch:.1}}let n=Ke[t.id],s=n.root.position,r=Math.atan2(-s.x,-s.z),o=Lu()?.5:.4,a=n.ring?n.r*2.3:n.r,l=zl(a,o),c=r+.95,h=-1,u=n.ring?.3:.12,d=Math.cos(u);for(let p of[.95,-.95,.6,-.6,1.15,-1.15,.3,-.3]){let g=r+p,y=s.x+l*d*Math.sin(g),m=s.y+l*Math.sin(u),f=s.z+l*d*Math.cos(g),b=s.x-y,_=s.y-m,x=s.z-f,I=Math.hypot(b,_,x),T=9;for(let L of Yr){if(L===n)continue;let v=L.root.position.x-y,M=L.root.position.y-m,U=L.root.position.z-f,k=Math.hypot(v,M,U);if(k<I)continue;let V=Math.acos(yn((b*v+_*M+x*U)/(I*k),-1,1)),q=Math.atan(a/I)*1.5+Math.atan(L.r/k);T=Math.min(T,V/q)}{let L=-y,v=-m,M=-f,U=Math.hypot(L,v,M);if(U>I){let k=Math.acos(yn((b*L+_*v+x*M)/(I*U),-1,1)),V=Math.atan(a/I)*1.5+Math.atan(wn/U);T=Math.min(T,k/V)}}let P=Math.min(T,2.5)-Math.abs(Math.abs(p)-.95)*.35-(p<0?.1:0);P>h&&(h=P,c=g)}return{anchor:p=>p.copy(n.root.position),dist:l,yaw:c,pitch:u}}function zu(i,t=1){i.anchor(hp),G.off.copy(G.target).sub(hp),G.anchor=i.anchor,G.base=i.dist,G.zoomT=1,G.yB+=G.yU,G.yU=G.yUT=0,G.pB+=G.pU,G.pU=G.pUT=0,an.yB+=an.yU,an.pB+=an.pU,an.yU=an.pU=0,G.yBT=G.yB+qv(i.yaw-G.yB),G.pBT=i.pitch,G.vy=G.vp=0,G.sc=t,G.tr=G.tr||{t:0},G.calm=!1,G.arrived=!1}var Nt={hud:ee("#hud"),card:ee("#card"),cardIn:ee("#cardIn"),rail:ee("#rail"),labels:ee("#labels"),hint:ee("#hint"),tele:ee("#tele"),pop:ee("#pop"),earthUI:ee("#earthUI"),hyperUI:ee("#hyperUI"),fade:ee("#fade"),loader:ee("#loader")},re=0,_t="boot",Zn=!1,Di=!1;de.forEach((i,t)=>{let e=document.createElement("button");e.className="tick",e.dataset.i=t,e.setAttribute("aria-label",i.name),e.innerHTML=`<i></i><span>${i.short}</span>`,e.onclick=()=>{he.blip(700),Ni(t,{force:!0})},Nt.rail.querySelector(".ticks").appendChild(e)});var Vl=i=>{let t=yn(re+i,0,de.length-1);if(t!==re){he.blip(i>0?760:600),Ni(t);try{navigator.vibrate&&navigator.vibrate(5)}catch{}}};ee("#prev").onclick=()=>Vl(-1);ee("#next").onclick=()=>Vl(1);ee("#sPrev").onclick=()=>Vl(-1);ee("#sNext").onclick=()=>Vl(1);var eM=de.map((i,t)=>{if(i.id==="overview")return null;let e=document.createElement("button");return e.className="plabel",e.innerHTML=`<i></i><b>${i.idx}</b><span>${i.short}</span>`,e._sfx=" translate(-6px,-50%)",e.onclick=()=>{he.blip(760),Ni(t)},Nt.labels.appendChild(e),e}),ku=[];$f.forEach(i=>{let t=document.createElement("button");t.className="elabel cont",t.textContent=i.name,t._sfx=" translate(-50%,-50%)",t.onclick=()=>Pp(i.name,i.area,i.desc),Nt.labels.appendChild(t),ku.push({el:t,p:Go(i.lat,i.lon,1.01),cont:1})});Jf.forEach(i=>{let t=document.createElement("button");t.className="elabel city",t.innerHTML=`<i></i><span>${i.name}</span>`,t._sfx=" translate(-5px,-50%)",t.onclick=()=>Pp(i.name,`${Math.abs(i.lat).toFixed(1)}\xB0 ${i.lat>=0?"N":"S"} \xB7 ${Math.abs(i.lon).toFixed(1)}\xB0 ${i.lon>=0?"E":"W"}`,i.desc),Nt.labels.appendChild(t),ku.push({el:t,p:Go(i.lat,i.lon,1.004)})});var $n=new _e;Ke.mars.spin.add($n);$n.position.copy(Go(Do.lat,Do.lon,Ke.mars.r*1.006));$n.visible=!1;{let i=document.createElement("canvas");i.width=i.height=128;let t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.12,"rgba(255,236,200,.9)"),e.addColorStop(.4,"rgba(255,190,130,.22)"),e.addColorStop(1,"rgba(255,170,110,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),t.globalCompositeOperation="lighter",[[0,1],[1,0]].forEach(([r,o])=>{let a=t.createLinearGradient(64-62*r,64-62*o,64+62*r,64+62*o);a.addColorStop(0,"rgba(255,255,255,0)"),a.addColorStop(.5,"rgba(255,255,255,.95)"),a.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=a,t.fillRect(r?2:62,o?2:62,r?124:4,o?124:4)});let n=new Qi(i);n.colorSpace=Ie;let s=new Ki(new Ri({map:n,transparent:!0,depthWrite:!1,depthTest:!0,blending:Ne,fog:!1}));s.scale.setScalar(.075),$n.add(s),$n.userData.glint=s}var ks=document.createElement("button");ks.className="elabel sig mars";ks.innerHTML="<span>Mars Base Alpha</span><em>Tap or zoom in to land</em>";ks._sfx=" translate(-13px,-50%)";ks.onclick=()=>Vs("mars");Nt.labels.appendChild(ks);var Hs=document.createElement("button");Hs.className="elabel sig";Hs.innerHTML="<span>Signal detected</span><em>Tap or zoom in to descend</em>";Hs._sfx=" translate(-13px,-50%)";Hs.onclick=()=>Vs("hyper");Nt.labels.appendChild(Hs);function Pp(i,t,e){he.blip(900),Nt.pop.innerHTML=`<button class="x" aria-label="Close">\xD7</button><p class="k">${t}</p><h3>${i}</h3><p>${e}</p>`,Nt.pop.classList.add("on"),Nt.pop.querySelector(".x").onclick=()=>Nt.pop.classList.remove("on")}function Ii(i){Nt.hint.dataset.t!==i&&(Nt.hint.dataset.t=i,Nt.hint.classList.remove("on"),clearTimeout(Ii.k),Ii.k=setTimeout(()=>{Nt.hint.textContent=i,i&&Nt.hint.classList.add("on")},350))}function Ip(i){let t=de[i];if(!t.desc){Ui();return}Nt.cardIn.innerHTML=`<div class="c-top"><span class="c-idx">${t.idx}</span><span class="c-kind">${t.kind}</span></div>
    <h2>${t.name}</h2><p class="c-desc">${t.desc}</p>
    <button class="c-more" type="button">Details</button>
    <div class="c-body"><dl class="c-stats">${t.stats.map(([n,s])=>`<div><dt>${n}</dt><dd>${s}</dd></div>`).join("")}</dl>
    <ol class="c-facts">${t.facts.map(n=>`<li>${n}</li>`).join("")}</ol></div>
    ${t.enter?'<button class="c-cta" type="button" id="enterEarth"><span>Enter Earth</span><i></i></button>':""}`,Nt.card.classList.remove("hl","open","mars"),Di=!1;let e=ee("#enterEarth");e&&(e.onclick=()=>Fp()),Nt.cardIn.querySelector(".c-more").onclick=()=>{Di=Nt.card.classList.toggle("open"),he.blip(820)},Hu()}function Lp(){let i=Kf;Nt.cardIn.innerHTML=`<div class="c-top"><span class="c-idx"><svg viewBox="20 40 160 125" width="22" height="16"><path fill="currentColor" d="M175.11589,99.27891c0,49.46366-30.3687,65.33789-46.47302,51.30413-13.11357-11.5031-17.02471-35.88989-36.81018-38.42055-25.07698-2.99085-27.37764,30.36839-43.94216,30.36839-19.3254,0-23.00642-27.83773-23.00642-42.33179,0-14.72405,4.14115-34.73961,20.47565-34.73961,19.09528,0,20.24566,28.75802,44.17226,27.14754,23.69661-1.61047,24.1567-31.51877,39.80103-44.17224,13.57335-11.27313,45.78283.69019,45.78283,50.84413Z"/></svg></span><span class="c-kind">${i.kicker}</span></div>
    <h2>${i.title}</h2><p class="c-desc">${i.desc}</p><button class="c-more" type="button">Details</button>
    <div class="c-body"><dl class="c-stats">${i.facts.map(([t,e])=>`<div><dt>${t}</dt><dd>${e}</dd></div>`).join("")}</dl>
    <div class="c-secs">${i.sections.map(([t,e])=>`<section><h4>${t}</h4><p>${e}</p></section>`).join("")}</div></div>
    <a class="c-cta" href="${i.url}" target="_blank" rel="noopener"><span>hyperliquid.xyz</span><i></i></a>`,Nt.card.classList.add("hl"),Nt.card.classList.remove("open"),Di=!1,Nt.cardIn.querySelector(".c-more").onclick=()=>{Di=Nt.card.classList.toggle("open"),he.blip(820)},Hu(),he.chime()}function nM(){let i=jf;Nt.cardIn.innerHTML=`<div class="c-top"><span class="c-idx">\u2605</span><span class="c-kind">${i.kicker}</span></div>
    <h2>${i.title}</h2><p class="c-desc">${i.desc}</p><button class="c-more" type="button">Details</button>
    <div class="c-body"><dl class="c-stats">${i.facts.map(([t,e])=>`<div><dt>${t}</dt><dd>${e}</dd></div>`).join("")}</dl>
    <div class="c-secs">${i.sections.map(([t,e])=>`<section><h4>${t}</h4><p>${e}</p></section>`).join("")}</div><p class="c-fine">${i.fine}</p></div>
    <button class="c-cta" type="button" id="waveBtn"><span>Wave hello</span><i></i></button>`,Nt.card.classList.add("hl","mars"),Nt.card.classList.remove("open"),Di=!1,Nt.cardIn.querySelector(".c-more").onclick=()=>{Di=Nt.card.classList.toggle("open"),he.blip(820)},ee("#waveBtn").onclick=()=>{Se&&Se.waveAll&&(Se.waveAll(3.4),Gu(1),he.blip(900))},Hu(),he.chime()}function Hu(){Zn=!0,document.body.classList.add("card-on"),Nt.card.classList.add("on"),Nt.cardIn.scrollTop=0}function Ui(){Zn=!1,Di=!1,document.body.classList.remove("card-on"),Nt.card.classList.remove("on","open"),setTimeout(()=>{Zn||Nt.card.classList.remove("mars")},900)}ee("#cardX").onclick=()=>{Ui(),he.blip(500)};function Dp(i){let t=de[i];Nt.tele.innerHTML=t.tele?`<p><span>Target</span><b>${t.name}</b></p><p><span>Range</span><b>${t.tele[0]}</b></p><p><span>Note</span><b>${t.tele[1]}</b></p>`:"<p><span>Target</span><b>Solar System</b></p><p><span>Bodies</span><b>1 star \xB7 8 planets</b></p><p><span>Span</span><b>\u2248 60 AU</b></p>"}function Ni(i,t={}){if(i=yn(i,0,de.length-1),_t==="hyper"||_t==="dive"||(_t==="intro"||_t==="boot")&&!t.force||(_t==="earth"&&Vu(!0),i===re&&!t.force))return;let e=re;re=i,zt.stop=i,_t="system",zt.mode=_t,zu(Cp(i),yn(1-(t.m||0)*.6,.6,1)),(i!==e||!t.noFly)&&he.whoosh(2.2),Ui(),Nt.pop.classList.remove("on"),document.querySelectorAll(".tick").forEach((r,o)=>r.classList.toggle("on",o===i)),ee("#prev").disabled=ee("#sPrev").disabled=i===0,ee("#next").disabled=ee("#sNext").disabled=i===de.length-1,ee("#sPrev").querySelector("span").textContent=i>0?de[i-1].short:"",ee("#sNext").querySelector("span").textContent=i<de.length-1?de[i+1].short:"",document.body.dataset.stop=de[i].id,Dp(i);let s=de[i].id;Ho[s]&&Xr([s],!0),[i-1,i+1].forEach(r=>{let o=de[r]&&de[r].id;o&&Ho[o]&&Xr([o])}),s==="earth"&&Xr(["earth","night","clouds","spec","normal"],!0),(s==="mars"||s==="jupiter"||s==="saturn"||s==="earth"||s==="neptune"||s==="uranus")&&Xr(["moon"]),G.onArrive=()=>{if(re===i&&_t==="system"){Ip(i);try{navigator.vibrate&&navigator.vibrate(6)}catch{}s==="mars"&&(setTimeout(()=>{re===i&&_t==="system"&&!We&&Up(Ke.mars,$n)},500),setTimeout(()=>{re===i&&!qn&&_t==="system"&&Fu()},1500))}},Ii(i===0?"Use the arrows to travel  \xB7  Drag to look around":i===1||i===2?"Drag to spin":"")}var iM=i=>Math.atan2(Math.sin(i),Math.cos(i));function Up(i,t){cn.updateMatrixWorld(),t.getWorldPosition(us).sub(i.root.position),ko.subVectors(Qt.position,i.root.position),i.goal=iM(Math.atan2(ko.x,ko.z)-Math.atan2(us.x,us.z)),i.uv=0}function Np(){if(_t!=="earth")return;he.blip(720),Up(Wt,tn),us.copy(tn.getWorldPosition(us)).sub(Wt.root.position);let i=Math.asin(yn(us.y/us.length(),-1,1));G.pUT=yn(i-G.pBT,-1.42-G.pBT,1.42-G.pBT),G.vp=0}ee("#locate").onclick=()=>Np();function Fp(){if(_t!=="system"||de[re].id!=="earth")return;_t="earth",zt.mode=_t,Ui(),he.whoosh(2.2),document.body.classList.add("in-earth"),be||Xr(["earth:xl","night:xl"],!0),Wt.frozen=!0,cn.updateMatrixWorld();let i=Wt.spin.localToWorld(Go(8,8)).sub(Wt.root.position).normalize(),t={anchor:e=>e.copy(Wt.root.position),dist:zl(1,Lu()?.86:.74),yaw:Math.atan2(i.x,i.z),pitch:yn(Math.asin(i.y),-1,1)};zu(t,ci?.4:1),G.onArrive=()=>{setTimeout(()=>{_t==="earth"&&!Yn&&!We&&Ou()},1200),Ii(be?"Drag to turn the Earth  \xB7  Find the green signal":"Drag to turn the Earth  \xB7  Scroll to zoom  \xB7  Find the green signal")},Nt.earthUI.classList.add("on")}function Vu(i){_t="system",zt.mode=_t,Wt.frozen=!1,document.body.classList.remove("in-earth"),Nt.earthUI.classList.remove("on"),Nt.pop.classList.remove("on"),i||(re=de.findIndex(t=>t.id==="earth"),Ni(re,{force:!0}))}ee("#earthBack").onclick=()=>{he.blip(500),Vu(!1)};var li=null,sM="radial-gradient(circle at 50% 50%, #fff4ec 0%, #f4c6aa 32%, #c0654c 72%, #3b1b17 100%)",rM="";function Vs(i="hyper"){let t=i==="mars";if(t?_t!=="system"||de[re].id!=="mars":_t!=="earth")return;_t="dive",zt.mode=_t,Wt.uv=0,Ke.mars.uv=0,Ke.mars.goal=Wt.goal=0,Nt.pop.classList.remove("on"),Nt.earthUI.classList.remove("on"),Ui(),Ii(""),cn.updateMatrixWorld();let e=t?$n:tn,n=t?Ke.mars:Wt,s=e.getWorldPosition(new jt),r=s.clone().sub(n.root.position).normalize();li={t:0,d:ci?1.2:t?2.3:2.6,p0:Qt.position.clone(),q0:Qt.quaternion.clone(),S:s,n:r,f0:Qt.fov,obj:e,kind:i,off:t?.008:.015},Nt.fade.style.background=t?sM:rM,he.whoosh(2.8,!0),t?Fu():Ou()}function oM(){let i=li.kind,t=i==="mars";_t="hyper",zt.mode=_t,li=null,Zr=i;let e=Se=t?Fu():Ou();Vo.scene=e.scene,Vo.camera=e.cam,t?(oe.toneMapping=Lr,oe.toneMappingExposure=1,gn.strength=.22,gn.threshold=1.05,gn.radius=.4,Nt.tele.innerHTML=`<p><span>Target</span><b>Mars Base Alpha</b></p><p><span>Surface</span><b>${Do.lat.toFixed(1)}\xB0 N \xB7 ${Do.lon.toFixed(1)}\xB0 E</b></p><p><span>Status</span><b>Fan easter egg</b></p>`,e.onWave=()=>{Gu(0,"Hello, Earth!")},Ii(be?"Drag to look around  \xB7  Tap an astronaut or the base":"Drag to look around  \xB7  Scroll to zoom  \xB7  Click an astronaut or the base"),setTimeout(()=>{Zr==="mars"&&_t==="hyper"&&Ii("")},5600)):(oe.toneMapping=Lr,oe.toneMappingExposure=.85,gn.strength=.4,gn.threshold=1.1,gn.radius=.35,Nt.tele.innerHTML=`<p><span>Target</span><b>Hyperliquid</b></p><p><span>Surface</span><b>${Lo.lat.toFixed(2)}\xB0 N \xB7 ${Lo.lon.toFixed(2)}\xB0 E</b></p><p><span>Signal</span><b>Locked</b></p>`,Ii(be?"Drag to walk around it  \xB7  Tap the monument":"Drag to walk around it  \xB7  Scroll to zoom  \xB7  Click the monument")),e.resize(Me,Te,Nn),e.enter(ci),document.body.classList.add("in-hyper"),document.body.dataset.alt=i,Nt.hyperUI.classList.add("on"),Nt.fade.style.transition="opacity 1.8s ease",Nt.fade.style.opacity=0,he.chime(),e.controls.enabled=!1}var Dl=ee("#say"),Pi={t:0,i:0},dp=["Hello, Earth!","Welcome to Mars!","Nice of you to drop by!","Mind the dust!","Ad astra!","Tell them we said hi!"],aM=0;function Gu(i,t){Pi.i=i,Pi.t=2.8,Dl.textContent=t||dp[aM++%dp.length]}function Wu(){let i=Zr;Nt.fade.style.transition="opacity .7s ease",Nt.fade.style.opacity=1,Ui(),he.whoosh(1.6),Pi.t=0,setTimeout(()=>{Vo.scene=cn,Vo.camera=Qt,oe.toneMapping=Ir,oe.toneMappingExposure=1.05,gn.strength=.9,gn.threshold=.92,gn.radius=.55,Se&&(Se.controls.enabled=!1),Se=null,document.body.classList.remove("in-hyper"),delete document.body.dataset.alt,Nt.hyperUI.classList.remove("on"),Dp(re),Qt.fov=Bl,Qt.updateProjectionMatrix(),G.zoomT=1,G.ld=Math.log(G.base*1.4),an.ld=0,G.tr=G.tr||{t:0},G.calm=G.arrived=!1,i==="mars"?(_t="system",zt.mode=_t,Ii("")):(_t="earth",zt.mode=_t,Nt.earthUI.classList.add("on")),Nt.fade.style.transition="opacity 1.2s ease",Nt.fade.style.opacity=0,setTimeout(()=>{_t!=="dive"&&(Nt.fade.style.background="")},1400)},750)}ee("#hyperBack").onclick=()=>{he.blip(500),Wu()};var We=null,Bs=null,Vr=null,Fi={passive:!0};ln.addEventListener("pointerdown",i=>{if(_t==="hyper"){We={x:i.clientX,y:i.clientY,t:performance.now(),moved:0};return}if(!Bs){try{ln.setPointerCapture(i.pointerId)}catch{}We={id:i.pointerId,x:i.clientX,y:i.clientY,lx:i.clientX,ly:i.clientY,t:performance.now(),moved:0,drag:!1,type:i.pointerType,ax:0,ay:0}}},Fi);ln.addEventListener("pointermove",i=>{let t=We;if(!(!t||t.id!==void 0&&i.pointerId!==t.id||Bs)){if(t.ax===void 0){t.moved=Math.max(t.moved,Math.hypot(i.clientX-t.x,i.clientY-t.y));return}if(t.moved=Math.max(t.moved,Math.hypot(i.clientX-t.x,i.clientY-t.y)),!(_t==="dive"||_t==="boot"||_t==="intro")){if(!t.drag){let e=_t==="earth"?t.type==="touch"?5:3:t.type==="touch"?9:4;if(t.moved>e){let n=i.clientX-t.x,s=i.clientY-t.y,r=1-e/Math.hypot(n,s);t.drag=!0,t.ax=n*r,t.ay=s*r,t.lx=i.clientX,t.ly=i.clientY,$r&&($r=!1,ln.style.cursor="")}return}t.ax+=i.clientX-t.lx,t.ay+=i.clientY-t.ly,t.lx=i.clientX,t.ly=i.clientY}}},Fi);var lM=i=>{if(!We)return;let t=We;We=null;let e=performance.now()-t.t;t.drag&&t.lx!==void 0&&i.type==="pointerup"&&(t.ax+=i.clientX-t.lx,t.ay+=i.clientY-t.ly,Vr=t),!t.drag&&t.moved<9&&e<600&&xM(i.clientX,i.clientY)},zo=null,$r=!1;ln.addEventListener("pointermove",i=>{i.pointerType==="mouse"&&!We&&(zo={x:i.clientX,y:i.clientY})},Fi);ln.addEventListener("pointerleave",()=>{zo=null,$r&&($r=!1,ln.style.cursor="")},Fi);ln.addEventListener("pointerup",lM,Fi);ln.addEventListener("pointercancel",()=>{We=null},Fi);ln.addEventListener("touchstart",i=>{i.touches.length===2&&_t!=="hyper"&&(We=null,Bs={d:Math.hypot(i.touches[0].clientX-i.touches[1].clientX,i.touches[0].clientY-i.touches[1].clientY),z:G.zoomT})},Fi);ln.addEventListener("touchmove",i=>{if(Bs&&i.touches.length===2){let t=Math.hypot(i.touches[0].clientX-i.touches[1].clientX,i.touches[0].clientY-i.touches[1].clientY);Op(Bs.z*Bs.d/t)}},Fi);ln.addEventListener("touchend",i=>{i.touches.length<2&&(Bs=null)},Fi);document.addEventListener("gesturestart",i=>i.preventDefault(),{passive:!1});function Op(i){let t=_t==="earth"?zt.sigNear?.3:.62:de[re].id==="mars"?.44:.55;G.zoomT=yn(i,t,_t==="earth"?1.25:1.6)}addEventListener("wheel",i=>{if(i.target.closest&&i.target.closest("#card, #pop")||(i.preventDefault(),_t==="hyper"||_t==="dive"||_t==="boot"||_t==="intro"))return;let t=i.deltaMode===1?i.deltaY*30:i.deltaY;Op(G.zoomT*Math.exp(t*.0015))},{passive:!1});addEventListener("keydown",i=>{if(!(_t==="boot"||_t==="intro")){if(i.key==="Escape"){Nt.pop.classList.contains("on")?Nt.pop.classList.remove("on"):_t==="hyper"?Wu():_t==="earth"?Vu(!1):Zn&&Ui();return}_t==="system"&&(["ArrowDown","ArrowRight","PageDown"," "].includes(i.key)&&(i.preventDefault(),Ni(re+1)),["ArrowUp","ArrowLeft","PageUp"].includes(i.key)&&(i.preventDefault(),Ni(re-1)))}});var cs=new jt,ui=new jt,wl={x:0,y:0,z:0};function hs(i){return cs.copy(i).project(Qt),wl.x=(cs.x*.5+.5)*Me,wl.y=(-cs.y*.5+.5)*Te,wl.z=cs.z,wl}var Fb=new jt,Bp=new jt,zp=new jt,cM=new jt,Ob=new jt,ko=new jt,us=new jt,kp=new jt,hM={x:0,y:0},uM=new te,dM=new Oe,fM=new dn,pM=new te,mM=new Oe,gM=new jt(0,1,0),Ul={x:0,y:0},kr={v:0,ndc:Ul},Fo=ee("#ripple");function yM(i,t){Fo&&(Fo.style.transform=`translate3d(${i-22}px,${t-22}px,0)`,Fo.classList.remove("go"),Fo.offsetWidth,Fo.classList.add("go"))}var Tl=[];function Hp(i,t){Tl.length||(Tl.push({obj:Ol,r:wn,stop:1}),Ns.forEach(r=>{r.moon||Tl.push(r)}));let e=null,n=1e9,s=Math.tan(Qt.fov*Uu/2);for(let r of Tl){r.obj.getWorldPosition(ui);let o=hs(ui);if(o.z>1)continue;let a=Qt.position.distanceTo(ui),l=r.r/(a*s)*Te/2,c=Math.hypot(o.x-i,o.y-t);c<Math.max(l*1.15,26)&&c-l<n&&(n=c-l,e=r)}return e}function xM(i,t){if(_t!=="boot"&&_t!=="intro"&&_t!=="dive"&&yM(i,t),_t==="hyper"){if(!Se||Se.intro)return;let n=Se.pick(new et(i/Me*2-1,-(t/Te)*2+1));Zr==="mars"?n&&n.astro!==void 0?(Se.wave(n.astro,0,3.4),Gu(n.astro),he.blip(900)):n?nM():Zn&&be&&Ui():n?Lp():Zn&&be&&Ui();return}if(_t==="earth"){let n=hs(tn.getWorldPosition(ui));zt.sigVis>.1&&Math.hypot(n.x-i,n.y-t)<(be?68:54)&&Vs("hyper");return}if(_t!=="system")return;if(de[re].id==="mars"&&zt.marsVis>.15){let n=hs($n.getWorldPosition(ui));if(Math.hypot(n.x-i,n.y-t)<(be?66:52)){Vs("mars");return}}let e=Hp(i,t);e&&(e.stop===re?Zn?be&&(Di=Nt.card.classList.toggle("open")):Ip(re):(he.blip(760),Ni(e.stop)))}function Gl(i){let t=innerWidth,e=innerHeight,n=window.visualViewport;n&&be&&(t=Math.round(n.width),e=Math.round(n.height)),!(!i&&t===Me&&e===Te)&&(Me=t,Te=e,Bl=Me/Te<.8?54:42,Qt.fov=Bl,Qt.aspect=Me/Te,oe.setPixelRatio(Nn),oe.setSize(Me,Te,!1),zs.setPixelRatio(Nn),zs.setSize(Me,Te),Nl.uniforms.dpr.value=Nn,Qt.updateProjectionMatrix(),Yn&&Yn.resize(Me,Te,Nn),qn&&qn.resize(Me,Te,Nn),_t==="system"&&(G.base=Cp(re).dist))}addEventListener("resize",()=>Gl());var _p;(_p=window.visualViewport)==null||_p.addEventListener("resize",()=>Gl());var _M=(i,t,e,n)=>{let s=cs.subVectors(t,i),r=s.length();s.divideScalar(r);let o=ui.subVectors(i,e),a=o.dot(s),l=o.lengthSq()-n*n,c=a*a-l;if(c<0)return!1;let h=-a-Math.sqrt(c);return h>0&&h<r},Eu=[],Hr=[new jt,new jt,new jt,new jt,new jt];function vM(){if(hs(kp.set(0,0,0)).z>1)return kr.v=0,Ul.x=Ul.y=0,kr;let t=Ul;if(t.x=cs.x,t.y=cs.y,Math.abs(t.x)>1.3||Math.abs(t.y)>1.3)return kr.v=0,kr;let e=Bp.setFromMatrixColumn(Qt.matrixWorld,0),n=zp.setFromMatrixColumn(Qt.matrixWorld,1);Hr[0].set(0,0,0),Hr[1].copy(e).multiplyScalar(wn*.7),Hr[2].copy(e).multiplyScalar(-wn*.7),Hr[3].copy(n).multiplyScalar(wn*.7),Hr[4].copy(n).multiplyScalar(-wn*.7);let s=0,r=Qt.position;for(let a=0;a<Ns.length;a++)(Eu[a]||(Eu[a]=new jt)).setFromMatrixPosition(Ns[a].obj.matrixWorld);for(let a of Hr){let l=!1;for(let c=0;c<Ns.length;c++){let h=Ns[c];if(_M(r,a,Eu[c],h.r*(h.p&&h.p.id==="earth"?1.02:1))){l=!0;break}}l||(s+=.2)}let o=1-Bo(Math.max(Math.abs(t.x),Math.abs(t.y)),.95,1.3);return kr.v=s*o,kr}var Al=0,fp=performance.now(),Rl=0,Cl=0,Un=0,wu=0,Pl=0,Tu=0,Au=0;var an={yB:0,pB:0,yU:0,pU:0,ld:0};function MM(i,t,e,n,s){let r=2/e,o=r*n,a=1/(1+o+.48*o*o+.235*o*o*o),l=s*e,c=i.length(),h=c>l?l/c:1,u=i.x*h,d=i.y*h,p=i.z*h,g=i.x-u,y=i.y-d,m=i.z-p,f=(t.x+r*u)*n,b=(t.y+r*d)*n,_=(t.z+r*p)*n;t.set((t.x-r*f)*a,(t.y-r*b)*a,(t.z-r*_)*a),i.set(g+(u+f)*a,y+(d+b)*a,m+(p+_)*a)}function Oo(i,t,e,n,s){let r=2/n,o=r*s,a=1/(1+o+.48*o*o+.235*o*o*o),l=i-t,c=(an[e]+r*l)*s;return an[e]=(an[e]-r*c)*a,t+(l+c)*a}var bM=new jt,pp=new Oe,mp=new Oe,gp=new jt(0,1,0),Vp=.016,Fs={id:"sun",u:0,uT:0,uv:0};Yr.forEach(i=>{i.u=i.uT=i.uv=0,i.goal=0,i.wsf=1,i.own=i.spin.rotation.y});function Gp(){if(_t==="earth")return Ke.earth;if(_t!=="system")return null;let i=de[re].id;return i==="sun"?Fs:Ke[i]||null}function yp(i,t,e,n){let s=i===Wt&&_t==="earth";if(i.goal){let r=i.goal*(1-Math.exp(-t*2.4));i.uT+=r,i.goal-=r,i.uv=0,Math.abs(i.goal)<5e-4&&(i.goal=0)}if(e!==null){i.goal=0,i.uT+=e;let r=Math.max(Math.min(Vp,.25),.004);i.uv+=(e/r-i.uv)*(1-Math.exp(-r*40))}else i.uT+=i.uv*t,i.uv*=Math.exp(-t*(s?1.15:2.8)),Math.abs(i.uv)<1e-4&&(i.uv=0),n&&!ci&&(i===Fs||i===Wt&&Wt.frozen&&zt.sigVis<.3)&&(i.uT+=t*(i===Fs?.03:.02));i.uv=yn(i.uv,s?-8:-9,s?8:9),i.u+=(i.uT-i.u)*(1-Math.exp(-t*(s?15:24))),i.uT===0&&Math.abs(i.u)<1e-6&&(i.u=0)}var ai=new jt;function SM(i){if(Pi.t-=i,Zr!=="mars"||!Se||!Se.astros){Dl.style.opacity=0;return}Se.headWorld(Pi.i,ai).project(Se.cam);let t=(ai.x*.5+.5)*Me,e=(-ai.y*.5+.5)*Te;Dl.style.transform=`translate3d(${t.toFixed(1)}px,${(e-6).toFixed(1)}px,0) translate(-50%,-100%)`,Dl.style.opacity=ai.z<1&&!(Zn&&be)?Math.min(1,Pi.t*3,(2.8-Pi.t)*5):0}function Wp(i){var I,T,P,L;requestAnimationFrame(Wp);let t=(i-fp)/1e3;fp=i;let e=t;if(t>.1&&(t=.1),t<=0)return;if(Un+=t,Rl++,Cl+=e,Cl>1&&(zt.fps=Math.round(Rl/Cl),Rl=0,Cl=0),zt.ready&&_t!=="boot"&&e<.25&&(Au>0?Au-=e:(wu+=e,Pl++,e>1/40&&Tu++,wu>1.2&&(Pl>=6&&Tu>Pl*.45&&Nn>op+.01&&(Nn=Math.max(op,Nn-.15),Gl(!0),Au=1),wu=Pl=Tu=0))),Il.length&&i-ap>160&&(!G.tr||G.calm)&&!We&&_t!=="dive"&&_t!=="intro"&&_t!=="hyper"){let v=Il.findIndex(M=>M.s.name===de[re].id||de[re].id==="earth"&&/^(night|clouds|spec|normal)$/.test(M.s.name));v<0&&(v=0),Ep(Il.splice(v,1)[0]),ap=i}if(_t==="hyper"||_t==="dive"&&li&&li.t>=li.d){_t==="dive"&&oM(),Se.update(t),Pi.t>0&&SM(t),oe.info.autoReset=!1,oe.info.reset(),zs.render(t),zt.calls=oe.info.render.calls,zt.tris=oe.info.render.triangles;return}let n=t;Vp=e;let s=_t==="earth",r=Gp(),o=We&&We.drag&&We.ax!==void 0?We:Vr&&(Vr.ax||Vr.ay)?Vr:null,a=!!o&&_t!=="dive";Vr=null;let l=s?4.4/Math.min(Me,1e3)*Mu(.5,1,yn(G.zoom,0,1)):2*en/(1.2*Math.min(Me,900)),c=0,h=0;a&&(c=o.ax,h=o.ay,o.ax=o.ay=0),yp(Fs,t,r===Fs&&a?c*l:null,r===Fs),Fl.uniforms.t.value=Un,lp.material.rotation+=t*.012,cp.material.rotation-=t*.018,Nl.uniforms.t.value=Un;for(let v of Yr){v.ang+=v.w*n,v.root.position.set(Math.cos(v.ang)*v.a,0,-Math.sin(v.ang)*v.a),v.wsf+=((v.id==="mars"&&de[re].id==="mars"&&_t==="system"?.1:1)-v.wsf)*(1-Math.exp(-t*1.4)),v.id==="earth"&&Wt.frozen||(v.own+=v.ws*v.wsf*n),yp(v,t,r===v&&a?c*l:null,r===v),v.u!==0||v.uT!==0?(pp.copy(v.tiltG.quaternion).invert().multiply(mp.setFromAxisAngle(gp,v.u)).multiply(v.tiltG.quaternion).multiply(mp.setFromAxisAngle(gp,v.own)),v.spin.quaternion.copy(pp)):v.spin.rotation.y=v.own,v.moons.forEach(U=>{U.piv.rotation.y+=U.w*n,U.mesh.rotation.y+=U.w*n});let M=bM.copy(v.root.position).negate().normalize();v.atmo&&(v.atmo.material.uniforms.center.value.copy(v.root.position),v.atmo.material.uniforms.L.value.copy(M))}if(Ol.rotation.y=Fs.u,Wt.clouds.rotation.y+=t*(Wt.frozen?.002:.006),hi.cloudShift.value=-Wt.clouds.rotation.y/(2*en),Hl.rotation.y+=t*.004,Ke.saturn.ringMat&&Ke.saturn.ringMat.uniforms.center.value.copy(Ke.saturn.root.position),de[re].id==="belt"&&oi){let v=uM,M=dM,U=fM;Rp.forEach((k,V)=>{U.set(k.e.x+Un*k.w,k.e.y+Un*k.w*.7,k.e.z),M.setFromEuler(U),v.compose(k.p,M,k.s),oi.setMatrixAt(V,v)}),(T=(I=oi.instanceMatrix).clearUpdateRanges)==null||T.call(I),(L=(P=oi.instanceMatrix).addUpdateRange)==null||L.call(P,0,Ll*16),oi.instanceMatrix.needsUpdate=!0}if(_t==="dive"&&li){let v=li;v.t+=t;let M=Math.min(1,v.t/v.d),U=M*M*(3-2*M),k=M*M*M;v.S=v.obj.getWorldPosition(v.S||new jt),Qt.position.lerpVectors(v.p0,cs.copy(v.S).addScaledVector(v.n,v.off),k*.985+U*.015);let V=mM.setFromRotationMatrix(pM.lookAt(Qt.position,v.S,gM));Qt.quaternion.slerpQuaternions(v.q0,V,Math.min(1,U*1.6)),Qt.fov=v.f0+22*k,Qt.updateProjectionMatrix(),Nt.fade.style.transition="none",Nt.fade.style.opacity=Bo(M,.6,.97),Su.update({x:0,y:0},0,Me/Te,t)}else{let v=s?-1.42:re===0?.05:-1.3,M=s?1.42:1.35,U=s?l*1.05:l*.8;if(a){G.pUT+=h*U;let xt=Math.max(Math.min(e,.25),.004),wt=1-Math.exp(-xt*40);G.vp+=(h*U/xt-G.vp)*wt,r||(G.yUT-=c*l,G.vy+=(-c*l/xt-G.vy)*wt)}else if(!We||!We.drag){if(r?G.vy=0:(G.yUT+=G.vy*t,G.vy*=Math.exp(-t*2.6)),G.pUT+=G.vp*t,G.vp*=Math.exp(-t*(s?1.5:3.2)),r&&!s&&!We){let xt=Math.exp(-t*.5);G.pUT*=xt}!ci&&!r&&(_t==="system"||_t==="boot")&&(G.yBT+=t*(re===0?.012:.02))}G.vy=yn(G.vy,-7,7),G.vp=yn(G.vp,s?-5:-7,s?5:7);{let xt=Math.max(v-G.pBT,r&&!s?-.6:-9),wt=Math.min(M-G.pBT,r&&!s?.6:9);G.pUT<xt?(G.pUT=xt,G.vp=0):G.pUT>wt&&(G.pUT=wt,G.vp=0)}let k=!!G.tr,V=G.sc;G.anchor(up),MM(G.off,G.ov,.62*V,t,Math.max(G.dist*2.4,5)),G.target.copy(up).add(G.off);let q=Math.max(G.base*G.zoomT,G.off.length()*.55),st=Math.log(q);if(G.ld=Oo(G.ld,st,"ld",k?.5*V:.2,t),G.dist=Math.exp(G.ld),G.zoom=G.dist/G.base,G.yB=Oo(G.yB,G.yBT,"yB",k?.55*V:.35,t),G.pB=Oo(G.pB,G.pBT,"pB",k?.55*V:.35,t),G.yU=Oo(G.yU,G.yUT,"yU",.085,t),G.pU=Oo(G.pU,G.pUT,"pU",.085,t),G.yaw=G.yB+G.yU,G.pitch=G.pB+G.pU,G.yawT=G.yBT+G.yUT,G.pitchT=G.pBT+G.pUT,k){let xt=G.off.length(),wt=Math.abs(G.ld-st),F=Math.abs(G.yBT-G.yB),D=Math.abs(G.pBT-G.pB);G.calm=xt<G.base*.15+.05&&wt<.1&&F<.15&&D<.12,G.calm&&!G.arrived&&(G.arrived=!0,_t==="intro"?(_t="system",zt.mode=_t,Ni(0,{force:!0,noFly:!0})):G.onArrive&&G.onArrive()),xt<G.base*.01+.005&&wt<.012&&F<.008&&D<.008&&(G.tr=null,G.calm=!1)}let H=0,$=G.pitch+H*.05+(ci?0:Math.sin(Un*.17+2)*.008),O=Math.cos($),dt=ci?0:G.dist*.0025,lt=G.dist*(1+H*.07);Qt.position.set(G.target.x+lt*O*Math.sin(G.yaw)+Math.sin(Un*.31)*dt,G.target.y+lt*Math.sin($)+Math.sin(Un*.23+1)*dt,G.target.z+lt*O*Math.cos(G.yaw)),Qt.lookAt(G.target);let gt=yn(-(an.yB+an.yU)*.011,-.04,.04);Al+=(gt-Al)*(1-Math.exp(-t*6)),Math.abs(Al)>1e-4&&!ci&&Qt.rotateZ(Al),qr.rotation.y=-G.yaw*.02,qr.rotation.x=G.pitch*.015}let u=Me>820;mn.tx=Zn&&_t==="system"&&u?Math.min(Me*.17,280):0,mn.ty=Zn&&_t==="system"&&!u?Te*(Di?.26:.14):0;let d=1-Math.exp(-t*3.2);mn.x+=(mn.tx-mn.x)*d,mn.y+=(mn.ty-mn.y)*d,Math.abs(mn.x)>.5||Math.abs(mn.y)>.5?Qt.setViewOffset(Me,Te,mn.x,mn.y,Me,Te):Qt.clearViewOffset(),qr.position.copy(Qt.position);let p=ui.copy(Wt.root.position).negate().normalize();Wt.lmix=Mu(Wt.lmix||0,_t==="earth"||_t==="dive"?1:0,1-Math.exp(-t*1.6));let g=Bp.setFromMatrixColumn(Qt.matrixWorld,0),y=zp.setFromMatrixColumn(Qt.matrixWorld,1),m=cM.subVectors(Qt.position,Wt.root.position).normalize().multiplyScalar(.8).addScaledVector(g,-.5).addScaledVector(y,.35).normalize();hi.L.value.copy(p).lerp(m,Wt.lmix).normalize(),Wt.atmo.material.uniforms.L.value.copy(hi.L.value),Wt.atmo.material.uniforms.center.value.copy(Wt.root.position),Nu.uniforms.op.value=Mu(.95,.55,Wt.lmix),Wt.moons[0].mesh.visible=Wt.lmix<.5;let f=_t==="earth"||_t==="dive"?1:de[re].id==="earth"?.7:0;tn.visible=f>0,tn.userData.core.material.opacity=.75+.25*Math.sin(Un*3),tn.userData.rings.forEach((v,M)=>{let U=(Un*.45+M*.5)%1;v.scale.setScalar(.012+U*.09),v.material.opacity=(1-U)*.8});let b=1-Math.exp(-t*3);Yr.forEach(v=>{let M=de[re].id===v.id;v.orbit.visible=v.orbit.material.opacity>.004||Wt.lmix<.3,v.orbit.material.opacity+=((Wt.lmix>.3?0:M?.32:re===0?.16:.08)-v.orbit.material.opacity)*b,v.moons.forEach(U=>{U.ring.material.opacity+=((M&&_t==="system"?.12:0)-U.ring.material.opacity)*b,U.ring.visible=U.ring.material.opacity>.004})});let _=1-Wt.lmix;Ol.visible=_>.02,Fl.uniforms.fade.value=_,Ap.material.opacity=_,lp.material.opacity=.5*_,cp.material.opacity=.4*_,Zv.material.opacity=_,oi.visible=Wt.lmix<.6;let x=vM();if(Su.update(x.ndc||hM,_t==="earth"?0:x.v,Me/Te,t,re===0||_t==="intro"||_t==="boot"?.55:1),cn.updateMatrixWorld(),zo&&_t==="system"&&!(Rl&3)){let v=Hp(zo.x,zo.y)!==null;v!==$r&&($r=v,ln.style.cursor=v?"pointer":"")}EM(t),oe.info.autoReset=!1,oe.info.reset(),zs.render(t),Su.render(oe),zt.calls=oe.info.render.calls,zt.tris=oe.info.render.triangles}var Ru=new WeakMap;function as(i,t,e,n){let s=Ru.get(i)||{},r=Math.round(n*100)/100;if(r<=.01){s.o!==0&&(i.style.opacity=0,i.style.visibility="hidden",s.o=0,Ru.set(i,s));return}i.style.transform=`translate3d(${t.toFixed(1)}px,${e.toFixed(1)}px,0)${i._sfx||""}`,s.o!==r&&(i.style.opacity=r,i.style.visibility="visible",s.o=r,Ru.set(i,s))}function EM(){let i=_t==="system"&&re===0&&(!G.tr||G.calm);eM.forEach((l,c)=>{if(!l)return;if(!i)return as(l,0,0,0);let h=de[c].id,u;h==="sun"?u=ui.set(0,-wn*1.2,0):h==="belt"?u=Iu(ui):u=ui.copy(Ke[h].root.position);let d=hs(u);as(l,d.x,d.y,d.z<1?1:0)});let t=_t==="earth"&&(!G.tr||G.calm),e=ko.subVectors(Qt.position,Wt.root.position).normalize(),n=us,s=kp;zt.sigVis=0;let r=-999,o=-999;if(t||_t==="dive"){tn.getWorldPosition(n),s.subVectors(n,Wt.root.position).normalize();let l=s.dot(e),c=hs(n);r=c.x,o=c.y,zt.sigVis=Bo(l,.3,.55);let h=Math.hypot(c.x-Me/2,c.y-Te/2)/Math.min(Me,Te);zt.sigNear=zt.sigVis>.8&&h<.2}ku.forEach(l=>{if(!t)return as(l.el,0,0,0);n.copy(l.p).applyMatrix4(Wt.spin.matrixWorld),s.subVectors(n,Wt.root.position).normalize();let c=s.dot(e),h=hs(n),u=zt.sigVis>.1&&Math.hypot(h.x-r,h.y-o)<(l.cont?150:96)?0:1;as(l.el,h.x,h.y,Bo(c,l.cont?.35:.45,l.cont?.6:.7)*u)}),t||_t==="dive"?(as(Hs,r,o,_t==="earth"?zt.sigVis:0),_t==="earth"&&zt.sigNear&&G.zoom<.42&&(!G.tr||G.calm)&&Vs("hyper"),_t==="earth"&&!zt.sigNear&&G.zoomT<.62&&(G.zoomT=.62)):as(Hs,0,0,0);let a=_t==="system"&&de[re].id==="mars";if($n.visible=a||_t==="dive"&&li&&li.kind==="mars",zt.marsVis=0,a){$n.getWorldPosition(n),s.subVectors(n,Ke.mars.root.position).normalize();let l=ko.subVectors(Qt.position,Ke.mars.root.position).normalize(),c=s.dot(l),h=hs(n);zt.marsVis=Bo(c,.3,.55),zt.marsNear=zt.marsVis>.8&&Math.hypot(h.x-(Me/2-mn.x),h.y-(Te/2-mn.y))/Math.min(Me,Te)<.3,$n.userData.glint.scale.setScalar(.06+.02*(.5+.5*Math.sin(Un*3.1))+(Math.sin(Un*9)>.93?.025:0)),as(ks,h.x,h.y,!G.tr||G.calm?zt.marsVis:0),zt.marsNear&&G.zoom<.6&&(!G.tr||G.calm)&&!We&&Vs("mars"),!zt.marsNear&&G.zoomT<.62&&(G.zoomT=.62)}else zt.marsNear=!1,as(ks,0,0,0)}var xp=["sun","mercury","venus","earth","night","clouds","spec","normal","moon","mars","jupiter","saturn","uranus","neptune","stars"];async function wM(){Gl(!0);let i=0,t=ee("#ldBar"),e=ee("#ldPct"),n=()=>{i++;let s=i/(xp.length+1);t.style.transform=`scaleX(${s})`,e.textContent=String(Math.round(s*100)).padStart(3,"0")};await Promise.all([...xp.map(s=>wp(s,"lo").then(n)),Ke.saturn.loadRing().then(n).catch(n),document.fonts?document.fonts.ready:0]),zt.loLoaded=!0,G.target.set(0,0,0),G.dist=Bu()*2.6,G.base=G.dist,G.ld=Math.log(G.dist),G.tr=null,G.yaw=G.yawT=G.yB=G.yBT=.9,G.pitch=G.pitchT=G.pB=G.pBT=.62,_t="boot";try{oe.compile(cn,Qt)}catch{}requestAnimationFrame(Wp),Xr(["stars","sun","earth","night","clouds","jupiter","saturn","mars","venus","mercury","uranus","neptune","moon","spec","normal",...be?[]:["earth:xl","night:xl"]]),setTimeout(()=>{zt.ready=!0,document.body.classList.add("ready"),window.__apReady&&window.__apReady()},120)}function Xp(i){_t==="boot"&&(he.unlock(),he.set(!!i),ee("#snd").classList.toggle("on",!!i),Nt.loader.classList.add("gone"),document.body.classList.add("began"),_t="intro",zt.mode=_t,re=0,zu({anchor:t=>t.set(0,0,0),dist:Bu(),yaw:G.yaw+.9,pitch:.72},ci?.4:2.4),he.whoosh(4.5))}window.__apBegin=Xp;ee("#snd").onclick=()=>{he.unlock(),he.set(!he.on),ee("#snd").classList.toggle("on",he.on)};window.__apWant!==void 0&&setTimeout(()=>Xp(window.__apWant),0);document.addEventListener("visibilitychange",()=>{he.ctx&&(document.hidden?he.ctx.suspend():he.on&&he.ctx.resume())});zt.go=i=>Ni(i);zt.enterEarth=()=>Fp();zt.dive=i=>Vs(i);zt.locate=()=>Np();zt.say=()=>Pi;zt.astroScreen=i=>!Se||!Se.astros?null:(Se.astros[i].g.getWorldPosition(ai),ai.y+=1.8,ai.project(Se.cam),{x:(ai.x*.5+.5)*Me,y:(-ai.y*.5+.5)*Te,z:ai.z});zt.tapHyper=()=>Lp();zt.exitHyper=()=>Wu();zt.get=()=>({alt:Zr,marsVis:zt.marsVis,marsNear:zt.marsNear,waving:Se&&Se.astros?Se.astros.map(i=>i.wt>0&&i.wd<=0?1:0):null,hAz:Se?Se.controls.getAzimuthalAngle():0,spinU:(Gp()||{}).u,tx:G.target.x,ty:G.target.y,tz:G.target.z,cx:Qt.position.x,cy:Qt.position.y,cz:Qt.position.z,calls:zt.calls,tris:zt.tris,yaw:G.yaw,pitch:G.pitch,yawT:G.yawT,mode:_t,stop:re,card:Zn,tr:!!G.tr,calm:G.calm,dist:G.dist,zoom:G.zoom,sigVis:zt.sigVis,dpr:Nn,fps:zt.fps,intro:Se&&!!Se.intro});zt.faceSignal=()=>{cn.updateMatrixWorld();let i=tn.getWorldPosition(new jt).sub(Wt.root.position).normalize();G.yaw=G.yawT=G.yB=G.yBT=Math.atan2(i.x,i.z),G.pitch=G.pitchT=G.pB=G.pBT=Math.asin(i.y),G.yU=G.yUT=G.pU=G.pUT=0,G.vy=G.vp=0,an.yB=an.pB=an.yU=an.pU=0};wM();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
