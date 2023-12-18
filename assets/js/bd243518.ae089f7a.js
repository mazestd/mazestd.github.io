"use strict";(self.webpackChunkmazestd_github_io=self.webpackChunkmazestd_github_io||[]).push([[9866],{4571:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=r(5893),o=r(1151);const i={},s="Soyu 8K",c={id:"keyboard/pcb/pcb_soyu8k",title:"Soyu 8K",description:"TKL+ Keyboard PCB for Geonworks F1-8K ( HS Model of Fuyu PCB by Zykrah )",source:"@site/docs/keyboard/pcb/pcb_soyu8k.md",sourceDirName:"keyboard/pcb",slug:"/keyboard/pcb/pcb_soyu8k",permalink:"/docs/keyboard/pcb/pcb_soyu8k",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PCB",permalink:"/docs/category/pcb"},next:{title:"Stellar60",permalink:"/docs/keyboard/pcb/pcb_stellar60"}},a={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Technical Spesification",id:"technical-spesification",level:2},{value:"Render &amp; Prototype",id:"render--prototype",level:2},{value:"Render",id:"render",level:3},{value:"Firmware &amp; Software Information",id:"firmware--software-information",level:2}];function d(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"soyu-8k",children:"Soyu 8K"}),"\n",(0,t.jsxs)(e.p,{children:["TKL+ Keyboard PCB for Geonworks F1-8K ( HS Model of ",(0,t.jsx)("a",{href:"https://github.com/zykrah/fuyu",children:"Fuyu PCB by Zykrah"})," )"]}),"\n",(0,t.jsx)(e.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsxs)(e.p,{children:["This PCB was made by request for one of our customer. They need PCB for ",(0,t.jsx)(e.strong,{children:"Geonworks F1-8K"})," that currently no available hotswap PCB in the market.\n",(0,t.jsx)(e.img,{alt:"Layout option",src:r(3384).Z+"",width:"1260",height:"474"})]}),"\n",(0,t.jsx)(e.h2,{id:"technical-spesification",children:"Technical Spesification"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Layout Size"})," : TKL+"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Multi-Layout Option"})," : Split Backspace, Split Right-Shift, and Arrow Cluster"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Compatible Switches"})," : MX Style Switches"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Firmware"})," : QMK Firmware"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Microcontroller"})," : Generic RP2040"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Connector"})," : USB Type-C"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Hardware Protection"})," : Fused Power-Line & ESD Protection"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Other"})," : Caps-Lock & Num-Lock Indicator, Underglow RGB"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"render--prototype",children:"Render & Prototype"}),"\n",(0,t.jsx)(e.h3,{id:"render",children:"Render"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"Stellar60",src:r(4868).Z+"",width:"1918",height:"975"})}),"\n",(0,t.jsx)(e.h2,{id:"firmware--software-information",children:"Firmware & Software Information"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",metastring:'title="VIA JSON"',children:'{\n    "name": "Soyu 8K",\n    "vendorId": "0x70F5",\n    "productId": "0x4A04",\n    "matrix": {\n        "rows": 6,\n        "cols": 18\n    },\n    "menus": ["qmk_rgblight"],\n    "layouts": {\n        "labels": [\n          "Split Backspacce",\n          "Split Right-Shift",\n          "8K Layout"\n        ],\n        "keymap": [\n          [\n            "0,0",\n            {\n              "x": 1\n            },\n            "0,2",\n            "0,3",\n            "0,4",\n            "0,5",\n            {\n              "x": 0.5\n            },\n            "0,6",\n            "0,7",\n            "0,8",\n            "0,9",\n            {\n              "x": 0.5\n            },\n            "0,10",\n            "0,11",\n            "0,12",\n            "0,14",\n            {\n              "x": 0.25\n            },\n            "0,15",\n            "0,16",\n            "0,17"\n          ],\n          [\n            {\n              "y": 0.25\n            },\n            "1,0",\n            "1,1",\n            "1,2",\n            "1,3",\n            "1,4",\n            "1,5",\n            "1,6",\n            "1,7",\n            "1,8",\n            "1,9",\n            "1,10",\n            "1,11",\n            "1,12",\n            {\n              "w": 2\n            },\n            "1,14\\n\\n\\n0,0",\n            {\n              "x": 0.25\n            },\n            "1,15",\n            "1,16",\n            "1,17",\n            {\n              "x": 1\n            },\n            "1,13\\n\\n\\n0,1",\n            "1,14\\n\\n\\n0,1"\n          ],\n          [\n            {\n              "w": 1.5\n            },\n            "2,0",\n            "2,1",\n            "2,2",\n            "2,3",\n            "2,4",\n            "2,5",\n            "2,6",\n            "2,7",\n            "2,8",\n            "2,9",\n            "2,10",\n            "2,11",\n            "2,12",\n            {\n              "w": 1.5\n            },\n            "2,14",\n            {\n              "x": 0.25\n            },\n            "2,15",\n            "2,16",\n            "2,17"\n          ],\n          [\n            {\n              "w": 1.75\n            },\n            "3,0",\n            "3,1",\n            "3,2",\n            "3,3",\n            "3,4",\n            "3,5",\n            "3,6",\n            "3,7",\n            "3,8",\n            "3,9",\n            "3,10",\n            "3,11",\n            {\n              "w": 2.25\n            },\n            "3,13",\n            {\n              "x": 0.25,\n              "d": true\n            },\n            "3,15\\n\\n\\n2,0",\n            {\n              "d": true\n            },\n            "3,16\\n\\n\\n2,0",\n            {\n              "d": true\n            },\n            "3,17\\n\\n\\n2,0",\n            {\n              "x": 3.25\n            },\n            "3,15\\n\\n\\n2,1",\n            "3,16\\n\\n\\n2,1",\n            "3,17\\n\\n\\n2,1"\n          ],\n          [\n            {\n              "w": 2.25\n            },\n            "4,0",\n            "4,2",\n            "4,3",\n            "4,4",\n            "4,5",\n            "4,6",\n            "4,7",\n            "4,8",\n            "4,9",\n            "4,10",\n            "4,11",\n            {\n              "w": 2.75\n            },\n            "4,12\\n\\n\\n1,0",\n            {\n              "x": 0.25,\n              "d": true\n            },\n            "4,15\\n\\n\\n2,0",\n            "4,16",\n            {\n              "d": true\n            },\n            "4,17\\n\\n\\n2,0",\n            {\n              "x": 0.25,\n              "w": 1.75\n            },\n            "4,12\\n\\n\\n1,1",\n            "4,14\\n\\n\\n1,1",\n            {\n              "x": 0.25\n            },\n            "4,15\\n\\n\\n2,1",\n            {\n              "x": 1\n            },\n            "4,17\\n\\n\\n2,1"\n          ],\n          [\n            {\n              "w": 1.5\n            },\n            "5,0",\n            "5,1",\n            {\n              "w": 1.5\n            },\n            "5,2",\n            {\n              "w": 7\n            },\n            "5,7",\n            {\n              "w": 1.5\n            },\n            "5,11",\n            "5,12",\n            {\n              "w": 1.5\n            },\n            "5,14",\n            {\n              "x": 0.25\n            },\n            "5,15",\n            "5,16",\n            "5,17"\n          ]\n        ]\n    }\n}\n'})})]})}function u(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},3384:(n,e,r)=>{r.d(e,{Z:()=>t});const t=r.p+"assets/images/soyu8k_kle-e3600b2b0b6d6b3187c89249f5b5853f.png"},4868:(n,e,r)=>{r.d(e,{Z:()=>t});const t=r.p+"assets/images/soyu8k_render-12e24276b5ba8c0a3e9b4643f8490f7a.png"},1151:(n,e,r)=>{r.d(e,{Z:()=>c,a:()=>s});var t=r(7294);const o={},i=t.createContext(o);function s(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);