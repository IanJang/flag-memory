/* 세계 국기 SVG — 모두 직접 그린 벡터 도형 */
(function(g){
let uid=0;
const S=(w,h,b)=>`<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" style="aspect-ratio:${w}/${h}">${b}</svg>`;
const R=(x,y,w,h,f)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${f}"/>`;
const C=(cx,cy,r,f)=>`<circle cx="${cx}" cy="${cy}" r="${r}" fill="${f}"/>`;
const P=(pts,f)=>`<polygon points="${pts}" fill="${f}"/>`;
const H=(w,h,cols,wts)=>{wts=wts||cols.map(()=>1);const t=wts.reduce((a,b)=>a+b,0);let y=0;return cols.map((c,i)=>{const hh=h*wts[i]/t,r=R(0,+y.toFixed(3),w,+(hh+.02).toFixed(3),c);y+=hh;return r}).join("")};
const V=(w,h,cols,wts)=>{wts=wts||cols.map(()=>1);const t=wts.reduce((a,b)=>a+b,0);let x=0;return cols.map((c,i)=>{const ww=w*wts[i]/t,r=R(+x.toFixed(3),0,+(ww+.02).toFixed(3),h,c);x+=ww;return r}).join("")};
function starPts(cx,cy,r,rot=0,n=5,ratio=.382){const p=[];for(let i=0;i<n*2;i++){const a=(-90+rot+i*180/n)*Math.PI/180,rr=i%2?r*ratio:r;p.push((cx+rr*Math.cos(a)).toFixed(3)+","+(cy+rr*Math.sin(a)).toFixed(3))}return p.join(" ")}
const ST=(cx,cy,r,f,rot,n,ratio)=>P(starPts(cx,cy,r,rot,n,ratio),f);
// 초승달: 바깥 원에서 안쪽 원을 뺀 모양 (mask)
function cres(cx,cy,r,dx,dy,r2,f){const id="m"+(++uid);return `<mask id="${id}"><rect x="-999" y="-999" width="3000" height="3000" fill="#fff"/><circle cx="${cx+dx}" cy="${cy+dy}" r="${r2}" fill="#000"/></mask><circle cx="${cx}" cy="${cy}" r="${r}" fill="${f}" mask="url(#${id})"/>`}
// 유니언 잭 (60x30 좌표)
function UJ(){const a="c"+(++uid),b="c"+(++uid);return `<clipPath id="${a}"><rect width="60" height="30"/></clipPath><clipPath id="${b}"><path d="M30,15h30v15zv15h-30zh-30v-15zv-15h30z"/></clipPath><g clip-path="url(#${a})"><rect width="60" height="30" fill="#012169"/><path d="M0,0L60,30M60,0L0,30" stroke="#fff" stroke-width="6"/><path d="M0,0L60,30M60,0L0,30" clip-path="url(#${b})" stroke="#C8102E" stroke-width="4"/><path d="M30,0v30M0,15h60" stroke="#fff" stroke-width="10"/><path d="M30,0v30M0,15h60" stroke="#C8102E" stroke-width="6"/></g>`}
const nordic=(w,h,bg,cr,x,t,inner)=>{let s=R(0,0,w,h,bg)+R(x,0,t,h,cr)+R(0,(h-t)/2,w,t,cr);if(inner){const [c,ti]=inner,o=(t-ti)/2;s+=R(x+o,0,ti,h,c)+R(0,(h-ti)/2,w,ti,c)}return s};
function sun(cx,cy,r,ray,n,f,face){let s="";for(let i=0;i<n;i++){const a=i*360/n;s+=`<polygon points="${cx-r*.28},${cy} ${cx},${cy-r-ray} ${cx+r*.28},${cy}" fill="${f}" transform="rotate(${a} ${cx} ${cy})"/>`}return s+C(cx,cy,r,f)+(face?C(cx,cy,r*.72,face):"")}

const F={
KR:()=>{const b="k"+(++uid),b2="k"+(++uid);return `<svg viewBox="-36 -24 72 48" xmlns="http://www.w3.org/2000/svg" style="aspect-ratio:3/2"><rect x="-36" y="-24" width="72" height="48" fill="#fff"/><g transform="rotate(-56.3099325)"><g id="${b2}"><path id="${b}" d="M-6-25H6M-6-22H6M-6-19H6" stroke="#000" stroke-width="2"/><use href="#${b}" y="44"/></g><path stroke="#fff" d="M0,17v10"/><circle fill="#CD2E3A" r="12"/><path fill="#0047A0" d="M0-12A6,6 0 0 0 0,0A6,6 0 0 1 0,12A12,12 0 0 1 0-12Z"/></g><g transform="rotate(-123.6900675)"><use href="#${b2}"/><path stroke="#fff" d="M0-23.5v3M0,17v3.5M0,23.5v3"/></g></svg>`},
JP:()=>S(30,20,R(0,0,30,20,"#fff")+C(15,10,6,"#BC002D")),
CN:()=>{let s=R(0,0,30,20,"#EE1C25")+ST(5,5,3,"#FFFF00");for(const [x,y] of [[10,2],[12,4],[12,7],[10,9]]){const r=Math.atan2(5-y,5-x)*180/Math.PI+90;s+=ST(x,y,1,"#FFFF00",r)}return S(30,20,s)},
IN:()=>{let s=H(225,150,["#FF9933","#fff","#138808"]);let sp="";for(let i=0;i<24;i++)sp+=`<line x1="112.5" y1="75" x2="112.5" y2="57.5" transform="rotate(${i*15} 112.5 75)"/>`;s+=`<g stroke="#000080" fill="none"><circle cx="112.5" cy="75" r="20" stroke-width="3"/><g stroke-width="1.1">${sp}</g></g>`+C(112.5,75,3.5,"#000080");return S(225,150,s)},
VN:()=>S(30,20,R(0,0,30,20,"#DA251D")+ST(15,10,6,"#FFFF00")),
TH:()=>S(36,24,H(36,24,["#A51931","#F4F5F8","#2D2A4A","#F4F5F8","#A51931"],[1,1,2,1,1])),
ID:()=>S(30,20,H(30,20,["#CE1126","#fff"])),
PH:()=>{let s=R(0,0,60,15,"#0038A8")+R(0,15,60,15,"#CE1126")+P("0,0 0,30 25.98,15","#fff");s+=sun(8.66,15,2.6,2.6,8,"#FCD116");for(const [x,y,r] of [[3,4.2,0],[3,25.8,0],[21.7,15,0]])s+=ST(x,y,1.5,"#FCD116",r);return S(60,30,s)},
MY:()=>{let s=H(28,14,Array.from({length:14},(_,i)=>i%2?"#fff":"#CC0001"));s+=R(0,0,14,8,"#010066")+cres(5.2,4,3.1,1,0,2.6,"#FC0")+ST(10.2,4,2.3,"#FC0",0,14,.45);return S(28,14,s)},
SG:()=>{let s=R(0,0,30,10,"#EF3340")+R(0,10,30,10,"#fff")+cres(5,5,3.6,1.2,0,3.4,"#fff");for(let i=0;i<5;i++){const a=(-90+i*72)*Math.PI/180;s+=ST(8+1.9*Math.cos(a),5+1.9*Math.sin(a),.6,"#fff")}return S(30,20,s)},
BD:()=>S(50,30,R(0,0,50,30,"#006A4E")+C(22.5,15,10,"#F42A41")),
PK:()=>S(30,20,R(0,0,30,20,"#01411C")+R(0,0,7.5,20,"#fff")+cres(18.75,10,6,1.6,-1.6,5.2,"#fff")+ST(21.9,6.9,1.9,"#fff",-45)),
LA:()=>S(30,20,H(30,20,["#CE1126","#002868","#CE1126"],[1,2,1])+C(15,10,4,"#fff")),
MM:()=>S(30,20,H(30,20,["#FECB00","#34B233","#EA2839"])+ST(15,10.8,8.5,"#fff")),
TR:()=>S(30,20,R(0,0,30,20,"#E30A17")+cres(10,10,5,1.25,0,4,"#fff")+ST(16.9,10,2.5,"#fff",-90)),

GB:()=>S(60,30,UJ()),
FR:()=>S(30,20,V(30,20,["#0055A4","#fff","#EF4135"])),
DE:()=>S(50,30,H(50,30,["#000","#DD0000","#FFCE00"])),
IT:()=>S(30,20,V(30,20,["#009246","#fff","#CE2B37"])),
ES:()=>{const e="e"+(++uid);return S(30,20,H(30,20,["#AA151B","#F1BF00","#AA151B"],[1,2,1])+`<rect x="6.5" y="8.05" width=".7" height="4.55" fill="#ececec" stroke="#7d7d7d" stroke-width=".1"/><rect x="6.3" y="7.7" width="1.1" height=".38" fill="#F1BF00" stroke="#8a6a00" stroke-width=".08"/><rect x="6.25" y="12.6" width="1.2" height=".45" fill="#F1BF00" stroke="#8a6a00" stroke-width=".08"/><path d="M6.35,7.7L6.35,7.15L6.6,7.4L6.85,7.0L7.1,7.4L7.35,7.15L7.35,7.7Z" fill="#F1BF00" stroke="#8a6a00" stroke-width=".07"/><circle cx="6.85" cy="6.85" r=".16" fill="#F1BF00"/><path d="M5.8999999999999995,10.55Q6.85,9.6 7.8,10.15" stroke="#C8102E" stroke-width=".42" fill="none"/><rect x="12.8" y="8.05" width=".7" height="4.55" fill="#ececec" stroke="#7d7d7d" stroke-width=".1"/><rect x="12.6" y="7.7" width="1.1" height=".38" fill="#F1BF00" stroke="#8a6a00" stroke-width=".08"/><rect x="12.55" y="12.6" width="1.2" height=".45" fill="#F1BF00" stroke="#8a6a00" stroke-width=".08"/><path d="M12.65,7.7L12.65,7.15L12.9,7.4L13.15,7.0L13.4,7.4L13.65,7.15L13.65,7.7Z" fill="#F1BF00" stroke="#8a6a00" stroke-width=".07"/><rect x="13.09" y="6.6" width=".12" height=".45" fill="#F1BF00"/><path d="M12.200000000000001,10.55Q13.15,9.6 14.1,10.15" stroke="#C8102E" stroke-width=".42" fill="none"/><rect x="8.15" y="7.05" width="3.7" height=".55" rx=".1" fill="#F1BF00" stroke="#8a6a00" stroke-width=".08"/><path d="M8.75,7.05Q9,6.15 10,6.1Q11,6.15 11.25,7.05Z" fill="#C8102E"/><path d="M8.3,7.05Q8.55,5.7 10,5.6Q11.45,5.7 11.7,7.05" fill="none" stroke="#F1BF00" stroke-width=".28"/><path d="M10,5.6V6.95" stroke="#F1BF00" stroke-width=".22"/><rect x="9.9" y="4.95" width=".2" height=".7" fill="#F1BF00"/><rect x="9.72" y="5.15" width=".56" height=".18" fill="#F1BF00"/><clipPath id="${e}"><path d="M8,7.7H12V11.5Q12,13.45 10,13.65Q8,13.45 8,11.5Z"/></clipPath><g clip-path="url(#${e})"><rect x="8" y="7.7" width="4" height="6" fill="#fff"/><rect x="8" y="7.7" width="2" height="2.15" fill="#C8102E"/><g fill="#F1BF00"><rect x="8.55" y="8.55" width=".9" height=".95"/><rect x="8.45" y="8.25" width=".28" height=".4"/><rect x="8.86" y="8.1" width=".28" height=".5"/><rect x="9.27" y="8.25" width=".28" height=".4"/></g><ellipse cx="11" cy="8.85" rx=".5" ry=".6" fill="#8E3A92"/><circle cx="11.15" cy="8.25" r=".22" fill="#8E3A92"/><rect x="8" y="9.85" width="2" height="2.35" fill="#F1BF00"/><g fill="#C8102E"><rect x="8.222" y="9.85" width=".222" height="2.35"/><rect x="8.667" y="9.85" width=".222" height="2.35"/><rect x="9.111" y="9.85" width=".222" height="2.35"/><rect x="9.556" y="9.85" width=".222" height="2.35"/></g><rect x="10" y="9.85" width="2" height="2.35" fill="#C8102E"/><path d="M10.25,10.1H11.75V11.95H10.25ZM10.25,10.1L11.75,11.95M11.75,10.1L10.25,11.95M11,10.1V11.95M10.25,11.03H11.75" fill="none" stroke="#F1BF00" stroke-width=".14"/><circle cx="11" cy="11.03" r=".16" fill="#1a7a3a"/><ellipse cx="10" cy="12.85" rx=".38" ry=".32" fill="#C8102E"/><path d="M10,12.55q.25-.35.45-.25" stroke="#1a7a3a" stroke-width=".12" fill="none"/><ellipse cx="10" cy="9.85" rx=".55" ry=".66" fill="#003DA5" stroke="#C8102E" stroke-width=".12"/><g fill="#F1BF00"><circle cx="9.82" cy="9.65" r=".1"/><circle cx="10.18" cy="9.65" r=".1"/><circle cx="10" cy="10.05" r=".1"/></g></g><path d="M8,7.7H12V11.5Q12,13.45 10,13.65Q8,13.45 8,11.5Z" fill="none" stroke="#8a6a00" stroke-width=".14"/>`)},
NL:()=>S(30,20,H(30,20,["#AE1C28","#fff","#21468B"])),
BE:()=>S(15,13,V(15,13,["#000","#FAE042","#ED2939"])),
CH:()=>S(32,32,R(0,0,32,32,"#DA291C")+R(13,6,6,20,"#fff")+R(6,13,20,6,"#fff")),
SE:()=>S(16,10,nordic(16,10,"#006AA7","#FECC00",5,2)),
NO:()=>S(22,16,nordic(22,16,"#BA0C2F","#fff",6,4,["#00205B",2])),
FI:()=>S(18,11,nordic(18,11,"#fff","#002F6C",5,3)),
DK:()=>S(37,28,nordic(37,28,"#C8102E","#fff",12,4)),
IS:()=>S(25,18,nordic(25,18,"#02529C","#fff",7,4,["#DC1E35",2])),
PL:()=>S(16,10,H(16,10,["#fff","#DC143C"])),
GR:()=>S(27,18,H(27,18,Array.from({length:9},(_,i)=>i%2?"#fff":"#0D5EAF"))+R(0,0,10,10,"#0D5EAF")+R(4,0,2,10,"#fff")+R(0,4,10,2,"#fff")),
IE:()=>S(30,15,V(30,15,["#169B62","#fff","#FF883E"])),
AT:()=>S(30,20,H(30,20,["#ED2939","#fff","#ED2939"])),
UA:()=>S(30,20,H(30,20,["#0057B7","#FFD700"])),
CZ:()=>S(30,20,R(0,0,30,10,"#fff")+R(0,10,30,10,"#D7141A")+P("0,0 15,10 0,20","#11457E")),
RU:()=>S(30,20,H(30,20,["#fff","#0039A6","#D52B1E"])),
HU:()=>S(30,15,H(30,15,["#CE2939","#fff","#477050"])),
RO:()=>S(30,20,V(30,20,["#002B7F","#FCD116","#CE1126"])),
BG:()=>S(25,15,H(25,15,["#fff","#00966E","#D62612"])),
EE:()=>S(33,21,H(33,21,["#0072CE","#000","#fff"])),
LT:()=>S(25,15,H(25,15,["#FDB913","#006A44","#C1272D"])),
LV:()=>S(20,10,H(20,10,["#9E3039","#fff","#9E3039"],[2,1,2])),
MT:()=>S(30,20,R(0,0,15,20,"#fff")+R(15,0,15,20,"#CF142B")+`<g stroke="#9a9a9a" stroke-width=".35" fill="#cfcfcf"><path d="M2.6,2h1.6v1.7h1.7v1.6h-1.7v1.7h-1.6v-1.7h-1.7v-1.6h1.7z"/></g>`),

US:()=>{let s=H(247,130,Array.from({length:13},(_,i)=>i%2?"#fff":"#B22234"))+R(0,0,98.8,70,"#3C3B6E");const hx=98.8/12;for(let i=0;i<9;i++){const y=7*(i+1),n=i%2?5:6;for(let k=0;k<n;k++)s+=ST(hx*(i%2?2*k+2:2*k+1),y,4,"#fff")}return S(247,130,s)},
CA:()=>S(9600,4800,R(0,0,9600,4800,"#D52B1E")+R(2400,0,4800,4800,"#fff")+`<path fill="#D52B1E" d="m4890 4430-45-863a95 95 0 0 1 111-98l859 151-116-320a65 65 0 0 1 20-73l941-762-212-99a65 65 0 0 1-34-79l186-572-542 115a65 65 0 0 1-73-38l-105-247-423 454a65 65 0 0 1-111-57l204-1052-327 189a65 65 0 0 1-91-27l-332-652-332 652a65 65 0 0 1-91 27l-327-189 204 1052a65 65 0 0 1-111 57l-423-454-105 247a65 65 0 0 1-73 38l-542-115 186 572a65 65 0 0 1-34 79l-212 99 941 762a65 65 0 0 1 20 73l-116 320 859-151a95 95 0 0 1 111 98l-45 863z"/>`),
BR:()=>{const c="c"+(++uid);let st="";for(const [x,y,r] of [[8.6,8.4,.28],[9.6,9.3,.3],[10.6,8.8,.26],[11.4,9.8,.3],[10,10.2,.24],[8.9,9.6,.22],[11.9,8.7,.22],[10.3,7.9,.2],[11.5,5.65,.22]])st+=ST(x,y,r,"#fff");return S(20,14,R(0,0,20,14,"#009C3B")+P("1.7,7 10,1.7 18.3,7 10,12.3","#FFDF00")+C(10,7,3.5,"#002776")+`<clipPath id="${c}"><circle cx="10" cy="7" r="3.5"/></clipPath><g clip-path="url(#${c})"><path d="M6,6.4Q10,5.4 14,7.6" stroke="#fff" stroke-width=".7" fill="none"/>${st}</g>`)},
AR:()=>S(28,18,H(28,18,["#74ACDF","#fff","#74ACDF"])+sun(14,9,1.5,1.4,16,"#F6B40E")),
CL:()=>S(30,20,R(0,0,30,10,"#fff")+R(0,10,30,10,"#D52B1E")+R(0,0,10,10,"#0039A6")+ST(5,5,2.5,"#fff")),
CO:()=>S(30,20,H(30,20,["#FCD116","#003893","#CE1126"],[2,1,1])),
PE:()=>S(30,20,V(30,20,["#D91023","#fff","#D91023"])),
CU:()=>S(30,15,H(30,15,["#002A8F","#fff","#002A8F","#fff","#002A8F"])+P("0,0 13,7.5 0,15","#CF142B")+ST(4.4,7.5,2,"#fff")),
JM:()=>S(24,12,R(0,0,24,12,"#009B3A")+P("0,0 12,6 0,12","#000")+P("24,0 12,6 24,12","#000")+`<path d="M0,0L24,12M24,0L0,12" stroke="#FED100" stroke-width="1.6"/>`),
UY:()=>S(27,18,H(27,18,Array.from({length:9},(_,i)=>i%2?"#0038A8":"#fff"))+R(0,0,9,10,"#fff")+sun(4.5,5,1.4,1.5,16,"#FCD116")),
VE:()=>{let s=H(30,20,["#FFCC00","#00247D","#CF142B"]);for(let i=0;i<8;i++){const a=(-158+i*136/7)*Math.PI/180;s+=ST(15+6.2*Math.cos(a),15.2+6.2*Math.sin(a),.6,"#fff",(-158+i*136/7)+90)}return S(30,20,s)},
PA:()=>S(30,20,R(0,0,30,20,"#fff")+R(15,0,15,10,"#D21034")+R(0,10,15,10,"#005293")+ST(7.5,5,2.2,"#005293")+ST(22.5,15,2.2,"#D21034")),
BS:()=>S(24,12,H(24,12,["#00778B","#FFC72C","#00778B"])+P("0,0 10.4,6 0,12","#000")),

ZA:()=>S(900,600,R(0,0,900,300,"#E03C31")+R(0,300,900,300,"#001489")+`<path d="M0,0L450,300H900M0,600L450,300" stroke="#fff" stroke-width="200" fill="none"/>`+P("0,0 450,300 0,600","#FFB612")+`<path d="M0,0L450,300H900M0,600L450,300" stroke="#007749" stroke-width="120" fill="none"/>`+P("0,120 270,300 0,480","#000")),
NG:()=>S(30,15,V(30,15,["#008751","#fff","#008751"])),
GH:()=>S(30,20,H(30,20,["#CE1126","#FCD116","#006B3F"])+ST(15,10.4,3.3,"#000")),
SN:()=>S(30,20,V(30,20,["#00853F","#FDEF42","#E31B23"])+ST(15,10.3,3,"#00853F")),
CI:()=>S(30,20,V(30,20,["#F77F00","#fff","#009E60"])),
ML:()=>S(30,20,V(30,20,["#14B53A","#FCD116","#CE1126"])),
CM:()=>S(30,20,V(30,20,["#007A5E","#CE1126","#FCD116"])+ST(15,10.3,2.6,"#FCD116")),
BW:()=>S(36,24,R(0,0,36,24,"#6DA9D2")+R(0,9,36,6,"#fff")+R(0,10,36,4,"#000")),
DZ:()=>S(30,20,R(0,0,15,20,"#006233")+R(15,0,15,20,"#fff")+cres(15,10,5,1.25,0,4,"#D21034")+ST(17.4,10,2.4,"#D21034",-90)),
TN:()=>S(30,20,R(0,0,30,20,"#E70013")+C(15,10,5,"#fff")+cres(14.4,10,3.75,.95,0,3,"#E70013")+ST(16.3,10,2.25,"#E70013",-90)),
MA:()=>{const p=[];for(let i=0;i<5;i++){const a=(-90+i*144)*Math.PI/180;p.push((15+4*Math.cos(a)).toFixed(3)+","+(10.5+4*Math.sin(a)).toFixed(3))}return S(30,20,R(0,0,30,20,"#C1272D")+`<polygon points="${p.join(" ")}" fill="none" stroke="#006233" stroke-width=".75" stroke-linejoin="miter"/>`)},
ET:()=>{const p=[];for(let i=0;i<5;i++){const a=(-90+i*144)*Math.PI/180;p.push((12+2.6*Math.cos(a)).toFixed(3)+","+(6.2+2.6*Math.sin(a)).toFixed(3))}let rays="";for(let i=0;i<5;i++)rays+=`<line x1="12" y1="6.2" x2="12" y2="2.9" transform="rotate(${36+i*72} 12 6.2)"/>`;return S(24,12,H(24,12,["#078930","#FCDD09","#DA121A"])+C(12,6,3.4,"#0F47AF")+`<g stroke="#FCDD09" stroke-width=".38" fill="none" stroke-linejoin="round"><polygon points="${p.join(" ")}"/></g>`)},
TZ:()=>S(30,20,R(0,0,30,20,"#1EB53A")+P("30,0 30,20 0,20","#00A3DD")+`<path d="M-2,21.3L32,-1.3" stroke="#FCD116" stroke-width="6.4"/><path d="M-2,21.3L32,-1.3" stroke="#000" stroke-width="4.4"/>`),
SO:()=>S(30,20,R(0,0,30,20,"#4189DD")+ST(15,10.5,4.2,"#fff")),
AE:()=>S(24,12,H(24,12,["#00732F","#fff","#000"])+R(0,0,6,12,"#FF0000")),
QA:()=>{let d="M0,0H8";for(let i=0;i<9;i++){const y=11/9*i;d+=`L11,${(y+11/18).toFixed(3)}L8,${(y+11/9).toFixed(3)}`}d+="H0Z";return S(28,11,R(0,0,28,11,"#8A1538")+`<path d="${d}" fill="#fff"/>`)},
BH:()=>{let d="M0,0H6";for(let i=0;i<5;i++){const y=12/5*i;d+=`L9,${(y+1.2).toFixed(3)}L6,${(y+2.4).toFixed(3)}`}d+="H0Z";return S(20,12,R(0,0,20,12,"#CE1126")+`<path d="${d}" fill="#fff"/>`)},
KW:()=>S(24,12,H(24,12,["#007A3D","#fff","#CE1126"])+P("0,0 6,4 6,8 0,12","#000")),
JO:()=>S(24,12,H(24,12,["#000","#fff","#007A3D"])+P("0,0 12,6 0,12","#CE1126")+ST(4,6,1.2,"#fff",0,7,.5)),

AU:()=>{let s=R(0,0,120,60,"#012169")+UJ()+ST(30,45,9,"#fff",0,7,.44);for(const [x,y,r,n] of [[90,50,4.2,7],[75,30,4.2,7],[90,12,4.2,7],[103.5,26,4.2,7],[98,36,2.2,5]])s+=ST(x,y,r,"#fff",0,n,n===7?.44:.4);return S(120,60,s)},
NZ:()=>{let s=R(0,0,120,60,"#012169")+UJ();for(const [x,y,r] of [[90,49,4.6],[78,28,4],[102,25,3.6],[90,12,4]])s+=ST(x,y,r+1,"#fff")+ST(x,y,r,"#C8102E");return S(120,60,s)},
WS:()=>{let s=R(0,0,24,12,"#CE1126")+R(0,0,12,6,"#002B7F");for(const [x,y,r] of [[6,1.3,.75],[3.9,2.9,.75],[7.9,2.6,.65],[7,3.8,.4],[6,4.8,.85]])s+=ST(x,y,r,"#fff");return S(24,12,s)},
TO:()=>S(24,12,R(0,0,24,12,"#C10000")+R(0,0,10,6,"#fff")+R(4.2,1,1.6,4,"#C10000")+R(3,2.2,4,1.6,"#C10000")),
PW:()=>S(40,25,R(0,0,40,25,"#4AADD6")+C(17,12.5,7.5,"#FFDE00")),
NR:()=>S(24,12,R(0,0,24,12,"#002B7F")+R(0,5.75,24,.5,"#FFC61E")+ST(6,8.9,1.6,"#fff",0,12,.5)),
SB:()=>{let s=R(0,0,30,15,"#0051BA")+P("30,0 30,15 0,15","#215B33")+`<path d="M0,15L30,0" stroke="#FCD116" stroke-width="1.6"/>`;for(const [x,y] of [[3,2.2],[9,2.2],[6,4.7],[3,7.2],[9,7.2]])s+=ST(x,y,1.1,"#fff");return S(30,15,s)},
MV:()=>S(30,20,R(0,0,30,20,"#D21034")+R(5,5,20,10,"#007E3A")+cres(15.5,10,3.6,1.2,0,3.1,"#fff")),
FM:()=>{let s=R(0,0,38,20,"#6797D6");for(const [x,y] of [[19,4.6],[19,15.4],[13.6,10],[24.4,10]])s+=ST(x,y,2.1,"#fff");return S(38,20,s)},
SC:()=>S(24,12,P("0,12 0,0 8,0","#003F87")+P("0,12 8,0 16,0","#FCD856")+P("0,12 16,0 24,0 24,4","#D62828")+P("0,12 24,4 24,8","#fff")+P("0,12 24,8 24,12","#007A3D")),
MU:()=>S(30,20,H(30,20,["#EA2839","#1A206D","#FFD500","#00A551"])),
TT:()=>S(30,18,R(0,0,30,18,"#DA1A35")+`<path d="M3.5,-1L27,19" stroke="#fff" stroke-width="5.6"/><path d="M3.5,-1L27,19" stroke="#000" stroke-width="4"/>`)
};
g.flagSVG=code=>F[code]?F[code]():"";
})(window);
