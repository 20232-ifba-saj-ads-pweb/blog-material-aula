if(!self.define){let e,s={};const a=(a,d)=>(a=new URL(a+".js",d).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,i)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(s[f])return;let c={};const r=e=>a(e,f),b={module:{uri:f},exports:c,require:r};s[f]=Promise.all(d.map((e=>b[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-33d91895"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/01_jamstack.html-54916526.js",revision:"3445dd08e5dd2900c5e635200cccd065"},{url:"assets/01_jamstack.html-76a4a785.js",revision:"93676e16a4168f74d68d6eedf5e67703"},{url:"assets/02_HInternet.html-f077ced1.js",revision:"1b8526a45a2cbb3eff54829f778598db"},{url:"assets/02_HInternet.html-fcb7a0b5.js",revision:"0a6c40818f374a258444ba11a1ccfc5f"},{url:"assets/02_trabalho.html-09a964c8.js",revision:"de9af293370faa07b502160bd26e6394"},{url:"assets/02_trabalho.html-9db581ff.js",revision:"3f1b73943ccacb9b6dcc7c96986970ba"},{url:"assets/03_HTTP.html-5c2ce385.js",revision:"0b24637af63b0408bc9264dd73e367c7"},{url:"assets/03_HTTP.html-ab55dc55.js",revision:"5fecbc6bc6792c02371591040a9a34ff"},{url:"assets/04_jamstack.html-d343be7b.js",revision:"8a85e93c6d2041a267a4a5c78cf0b66f"},{url:"assets/04_jamstack.html-f63ffef0.js",revision:"6e5f9893a165c7c6dbcc43b946e9e231"},{url:"assets/05_Wireframe.html-39aa3018.js",revision:"26226a7074fd1f64b4d45c757a68ccf6"},{url:"assets/05_Wireframe.html-b491e21d.js",revision:"41c8903cfccd97562f32f58f3eedbe7e"},{url:"assets/06_HTML.html-bf63939b.js",revision:"681f014bd9ab6286085f55be161e668f"},{url:"assets/06_HTML.html-c5c9ba03.js",revision:"686e7e6a72006b7e36f4f852777cd65c"},{url:"assets/07_CSS.html-74b462a4.js",revision:"9bdd098d3312e9762fdb239da3ed0dc1"},{url:"assets/07_CSS.html-ad17b643.js",revision:"1fc635fb8478af306b1bc1fec9a96b2a"},{url:"assets/08_CSSFlexbox.html-3e16314e.js",revision:"2b4f0dd951080adee5796bfa99693185"},{url:"assets/08_CSSFlexbox.html-ebc4f7ae.js",revision:"af1a9365af75c3c267b56cb6d49fa304"},{url:"assets/09_CSSFrameworks.html-134a1b59.js",revision:"559f0f06ddc4e95e88be1167fdfea6f5"},{url:"assets/09_CSSFrameworks.html-f39fe0e6.js",revision:"ac7e925d6b020287a0adfc1db5f61fba"},{url:"assets/10_JavaScript.html-18494e0f.js",revision:"2c662ab44a164bbf2bb4e3b0fb98accf"},{url:"assets/10_JavaScript.html-411bab5b.js",revision:"d349a835361b78e880acb4882d7729de"},{url:"assets/11_FrameWorksFrontend.html-4f44541f.js",revision:"4ebfbc1f3f9e1c945bc5fad58c1a568a"},{url:"assets/11_FrameWorksFrontend.html-956c0d31.js",revision:"de4ade0f80bed75bb392fc0c214fcecd"},{url:"assets/12_HillaFramework.html-22cd73c7.js",revision:"84d91d0ad0bfc45ff8f9b306aa9fabb8"},{url:"assets/12_HillaFramework.html-ac294746.js",revision:"1cdf75eed0c6f7c71432d6749794abc8"},{url:"assets/404.html-1ca1a11a.js",revision:"5f20ccc7054807ad72786984995a539a"},{url:"assets/404.html-23719e93.js",revision:"85359bbb1d837f2c73be0405ff79e4c4"},{url:"assets/app-26450bcf.js",revision:"c70d81d9dd816c9ca5758ea603d7dd8b"},{url:"assets/arc-f55e0d78.js",revision:"45d7935adc9f7bef5ac1cbc2c8b75f72"},{url:"assets/array-9f3ba611.js",revision:"17dcebeaf673b09a1ca5da014d20022f"},{url:"assets/auto-fe80bb03.js",revision:"9d99a020735f021d88a203c78f7e0ee0"},{url:"assets/bib.html-3d388b47.js",revision:"eeabe42798ccfc2d7a7c53ca5e8cea88"},{url:"assets/bib.html-665a94aa.js",revision:"4e620df7d70b67bba93fa58bed6d5c68"},{url:"assets/c4Diagram-c0b17d02-a1ba2051.js",revision:"280ec44a61d7a8093913cfe45439c181"},{url:"assets/classDiagram-a8cc8886-24220455.js",revision:"7c1f2fff65584185c6dd2021d3c29880"},{url:"assets/classDiagram-v2-802a48d3-7c39394a.js",revision:"44805e65af40e93b1cd6ca66593d7f66"},{url:"assets/codemirror-editor-e5d54501.js",revision:"c629132f0597e4c212ab2d01b83cfd56"},{url:"assets/commonjs-dynamic-modules-302442b1.js",revision:"2afbf9a8021b44e8591299a7a7dbfc94"},{url:"assets/commonjsHelpers-de833af9.js",revision:"e2be7f3e66571d8f9280caf91c5e9b86"},{url:"assets/createText-3b1f58a4-9a30804d.js",revision:"0d6650febae0bb23f359dabb73a90905"},{url:"assets/edges-0005682e-8a997ded.js",revision:"a189368ab719a353bafd9e5db9cb7ba9"},{url:"assets/ementa.html-d4b4ff7b.js",revision:"3f22a238526e937d24d5cac1cf0ace70"},{url:"assets/ementa.html-f77aecaa.js",revision:"2be48a9983febcd58e84aa36349297f8"},{url:"assets/erDiagram-dedf2781-d623aab5.js",revision:"1fb165e5bac10f6fefd96d12eee66880"},{url:"assets/flowchart-c441f34d.js",revision:"d0922e56732b0ff9f2eb72eccb4e7e36"},{url:"assets/flowchart-elk-definition-56584a6c-258e3914.js",revision:"fe26053db8ba6b5e1f0e6ee0fc65830c"},{url:"assets/flowDb-ff651a22-60c8080d.js",revision:"71d2fd80fe76ea8134b74bcfb44508ce"},{url:"assets/flowDiagram-d6f8fe3a-36dae0e8.js",revision:"c4cf3bdc878eccfd2ee239f12d41cd27"},{url:"assets/flowDiagram-v2-58f49b84-131ea85e.js",revision:"5091c945db451b693a8197e07606ba48"},{url:"assets/ganttDiagram-088dbd90-5aae2409.js",revision:"851c2d17685ad227005bda0d13df0da4"},{url:"assets/gitGraphDiagram-e0ffc2d1-21d7e850.js",revision:"0b9bc52f35ed22b6182f167d48ff134f"},{url:"assets/highlight.esm-75b11b9d.js",revision:"5d33e8aa724e0f03a23564f7c03bc7f5"},{url:"assets/index-2bf332f6.js",revision:"15b6a4a48574f26d02d692ce0cac07fb"},{url:"assets/index-e32a7948.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index-f58d48f9-93bbe374.js",revision:"7f21edc90478fd8ee3e6fbba1644aa7c"},{url:"assets/index.html-0128aa4f.js",revision:"1c18fdb7cb59c0ae14df55f6b86698b9"},{url:"assets/index.html-018ecc46.js",revision:"96b85afeefea728daca2c6afb22ed94f"},{url:"assets/index.html-0436a454.js",revision:"4529059dae76bed03cfab3093de861c7"},{url:"assets/index.html-08e78938.js",revision:"b89a703bb4a35ba4fb1eb91254623c56"},{url:"assets/index.html-0a491570.js",revision:"79955c03c3c9aaa019b17179b37f8925"},{url:"assets/index.html-0f88efc3.js",revision:"4529059dae76bed03cfab3093de861c7"},{url:"assets/index.html-0fed3e10.js",revision:"4529059dae76bed03cfab3093de861c7"},{url:"assets/index.html-1b3c7d2b.js",revision:"4529059dae76bed03cfab3093de861c7"},{url:"assets/index.html-1d232d1c.js",revision:"4529059dae76bed03cfab3093de861c7"},{url:"assets/index.html-2326db96.js",revision:"4529059dae76bed03cfab3093de861c7"},{url:"assets/index.html-235e7324.js",revision:"4aa6cd72e6c5166f4ca49d6e9375b6f7"},{url:"assets/index.html-23d4b725.js",revision:"4529059dae76bed03cfab3093de861c7"},{url:"assets/index.html-24c2e53f.js",revision:"4529059dae76bed03cfab3093de861c7"},{url:"assets/index.html-28c5e4a7.js",revision:"4529059dae76bed03cfab3093de861c7"},{url:"assets/index.html-30f29609.js",revision:"7d93cdd9d927302f09b1d8ddae1d5cee"},{url:"assets/index.html-376b5156.js",revision:"8304075c03e2449966effbcc8d17458b"},{url:"assets/index.html-3aab5c51.js",revision:"5385d54a65fe95ceaba52fb10f01a4a6"},{url:"assets/index.html-3bcdf6a6.js",revision:"4529059dae76bed03cfab3093de861c7"},{url:"assets/index.html-3d353283.js",revision:"4529059dae76bed03cfab3093de861c7"},{url:"assets/index.html-4bcac062.js",revision:"4529059dae76bed03cfab3093de861c7"},{url:"assets/index.html-4e35b838.js",revision:"5cab9b1212d6d6c33a5c230a303b3e92"},{url:"assets/index.html-5421a0f1.js",revision:"5e99c66246ae021fd0bcb88b0a332152"},{url:"assets/index.html-605569e3.js",revision:"4529059dae76bed03cfab3093de861c7"},{url:"assets/index.html-61d92a5f.js",revision:"8dc78da75087b27bdadb484c45bf70f8"},{url:"assets/index.html-625e4f93.js",revision:"69f91d92b3c2167343a50147959d56d8"},{url:"assets/index.html-65c68b25.js",revision:"37447e0373b29c31f2000d55b7f01ec0"},{url:"assets/index.html-67de46b5.js",revision:"4529059dae76bed03cfab3093de861c7"},{url:"assets/index.html-6953dfbf.js",revision:"9524fcf08def981370e06ab26f0f4e9a"},{url:"assets/index.html-6958bfeb.js",revision:"24b4695de46b6fc13cf213f843808034"},{url:"assets/index.html-6d4affd1.js",revision:"4529059dae76bed03cfab3093de861c7"},{url:"assets/index.html-75615c81.js",revision:"4529059dae76bed03cfab3093de861c7"},{url:"assets/index.html-785b9a7b.js",revision:"1fd9339644e4cd1a9240934e97839fe6"},{url:"assets/index.html-78dfcd1e.js",revision:"003c243786559e91cca3e72ccfa13f50"},{url:"assets/index.html-87205c94.js",revision:"ab2bc7ecc64dc908416279a96b13b161"},{url:"assets/index.html-8774a72d.js",revision:"2044ede173a110190a691b2531f3895d"},{url:"assets/index.html-8a572871.js",revision:"4529059dae76bed03cfab3093de861c7"},{url:"assets/index.html-8df7e48c.js",revision:"4529059dae76bed03cfab3093de861c7"},{url:"assets/index.html-8e848920.js",revision:"4529059dae76bed03cfab3093de861c7"},{url:"assets/index.html-925e1351.js",revision:"4529059dae76bed03cfab3093de861c7"},{url:"assets/index.html-986386dd.js",revision:"45c32d5cf3c35ffd8f80ec846d97086a"},{url:"assets/index.html-99696045.js",revision:"003c243786559e91cca3e72ccfa13f50"},{url:"assets/index.html-9a86d945.js",revision:"4529059dae76bed03cfab3093de861c7"},{url:"assets/index.html-a0154d4d.js",revision:"4529059dae76bed03cfab3093de861c7"},{url:"assets/index.html-a08e9665.js",revision:"da1e0beca7dc6a824eb6f2d90cc305bc"},{url:"assets/index.html-a1113326.js",revision:"c6b16992ef017c2bc8ade2047197fd92"},{url:"assets/index.html-a399f150.js",revision:"e635bb12ca5a75e945f6641d7006f13b"},{url:"assets/index.html-a93a0f03.js",revision:"4529059dae76bed03cfab3093de861c7"},{url:"assets/index.html-a96e897e.js",revision:"4529059dae76bed03cfab3093de861c7"},{url:"assets/index.html-bd4b517d.js",revision:"4529059dae76bed03cfab3093de861c7"},{url:"assets/index.html-d0f332e1.js",revision:"4529059dae76bed03cfab3093de861c7"},{url:"assets/index.html-d0f9f6a8.js",revision:"003c243786559e91cca3e72ccfa13f50"},{url:"assets/index.html-d42b3b97.js",revision:"5022cc1d2db5aee1716f09ef5e83f1c2"},{url:"assets/index.html-dbbf0653.js",revision:"be4aceaaf0274f2574d08b6729f13a63"},{url:"assets/index.html-dfed0ee6.js",revision:"ef368fc54222486624acfdd65674abe5"},{url:"assets/index.html-e6b6f51b.js",revision:"419739a44e74c53237386e331c01a6ed"},{url:"assets/index.html-e7a5554d.js",revision:"e108fcc5d518ea1cb244f65554912a65"},{url:"assets/index.html-e7c1015f.js",revision:"92002e1e80f2ebfbcd64317a9f996205"},{url:"assets/index.html-ec5759ba.js",revision:"4529059dae76bed03cfab3093de861c7"},{url:"assets/index.html-ee2d4387.js",revision:"4529059dae76bed03cfab3093de861c7"},{url:"assets/index.html-f14ff23d.js",revision:"872483e3642e01ab9ab3b3f050049bc2"},{url:"assets/index.html-f3b44f1c.js",revision:"4529059dae76bed03cfab3093de861c7"},{url:"assets/index.html-f5b9a3f2.js",revision:"3a3a0c8d94c5ee7eebcc0595a8ecb7ac"},{url:"assets/index.html-fa17a024.js",revision:"4529059dae76bed03cfab3093de861c7"},{url:"assets/index.html-fb38af47.js",revision:"c7888afa76578e9a1aa5b0b18205eaff"},{url:"assets/index.html-fed8fa2e.js",revision:"e693eda3c1e9dd689099c30b045121cd"},{url:"assets/index.html-ff66c0ec.js",revision:"2aa1f9634eda300153a2175f1a07bf53"},{url:"assets/infoDiagram-64895a6e-619cb86c.js",revision:"9da0a8287805d3fe6da9afb68b438a6a"},{url:"assets/init-77b53fdd.js",revision:"3ce28180466443e9b617d7b96e9f7b8f"},{url:"assets/intro.html-3b0940f6.js",revision:"dc248525900129f09d2adca7cff13a79"},{url:"assets/intro.html-598dd692.js",revision:"28cae22abbeeedfe6cb790629d916f21"},{url:"assets/journeyDiagram-adaa34f8-8016490b.js",revision:"048536d546adaa8cd4b64d79d1042c24"},{url:"assets/KaTeX_AMS-Regular-0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular-30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular-68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold-07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold-1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold-de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular-3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular-5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular-ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold-74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold-9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold-9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular-1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular-51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular-5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold-0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold-138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold-c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic-70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic-99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic-a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic-0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic-97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic-f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular-c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular-c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular-d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic-850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic-dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic-f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic-08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic-7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic-8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold-1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold-e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold-ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic-00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic-3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic-91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular-11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular-68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular-f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular-036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular-1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular-d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular-6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular-95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular-c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular-2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular-a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular-d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular-500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular-6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular-99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular-a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular-c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular-71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular-e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular-f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/layout-e54ab584.js",revision:"e00d4e8449e493d4953399876bcf6342"},{url:"assets/league-gothic-38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic-5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic-8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/line-06216c88.js",revision:"e8b9a70e1e249fbc513f86c7498e0e60"},{url:"assets/linear-d3a971f0.js",revision:"ef460a470ed8b59b7bc00b96d5374b28"},{url:"assets/markdown.esm-abe06b83.js",revision:"3e2668565c994b015ab82cac0075bf97"},{url:"assets/math.esm-70a288c8.js",revision:"c5f77dc064ac53005c0e5446bb6715b0"},{url:"assets/mermaid.core-d776022d.js",revision:"a3221c75e1172f4a204d17abd9709eb5"},{url:"assets/mindmap-definition-57868176-b98f3822.js",revision:"6a85ee58923b9b1f5e312e8086e06cfa"},{url:"assets/notes.esm-a106bb2c.js",revision:"7c95fadebe38cabad55423002748625b"},{url:"assets/ordinal-ba9b4969.js",revision:"3a57ceba2c0d70da5e704aad84f79b46"},{url:"assets/path-53f90ab3.js",revision:"f86c0243cb45746453c6b4f7dbd9f34d"},{url:"assets/photoswipe.esm-5794cde2.js",revision:"2687434a99577ed4fa4b1050a3f0ac90"},{url:"assets/pieDiagram-3fca7ce7-86981274.js",revision:"b87f94a3ba4fc83953a36d06f69fb552"},{url:"assets/plugin-vue_export-helper-c27b6911.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/quadrantDiagram-0ca4be02-bae9edbd.js",revision:"0e50e412464d4f7f51b48a1371db23dc"},{url:"assets/requirementDiagram-e13af0f0-9d378ed6.js",revision:"69e3b17708d6f55ec41931167001562f"},{url:"assets/reveal.esm-ec5549c1.js",revision:"40498a0448b327f408a5db6b67491b8a"},{url:"assets/sankeyDiagram-a7f8e230-994120bc.js",revision:"a7308b1c181f3975d56172191bb1acf7"},{url:"assets/search-0782d0d1.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/search.esm-7e6792e2.js",revision:"f1a5e92b2857fcc2c457f7dd03f762f3"},{url:"assets/sequenceDiagram-84aa38e3-e829a318.js",revision:"065d26df51f34b51c8366eb7211947e6"},{url:"assets/source-sans-pro-italic-05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic-ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic-d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular-c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular-d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular-dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold-a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold-b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold-ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic-7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic-dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic-e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/stateDiagram-9a586ac6-f3d325a3.js",revision:"4ac8d9272cb14d9e7f7f1897470e3370"},{url:"assets/stateDiagram-v2-96f2b9df-a7cfe3d9.js",revision:"fa7a0249329e6015041f479fe0b444f7"},{url:"assets/style-2d30a605.css",revision:"68948347c059f77a0719feabfcf26737"},{url:"assets/styles-1b0c237a-efb414ae.js",revision:"229d14828b1538580710ec3e6f157ef1"},{url:"assets/styles-622362e4-d2e677ce.js",revision:"a3294a305b057d87537458c09ced0489"},{url:"assets/styles-a1a6e33f-d17d3fe5.js",revision:"22ca2aafc120962378deb1e6834ced59"},{url:"assets/svgDraw-70101091-8fa8ff27.js",revision:"1049b6200ece72109ce44c271a2ad56b"},{url:"assets/svgDrawCommon-42e92da3-9d4e4af6.js",revision:"68ad753aa1bf4bffabbe76d2ee61cb3e"},{url:"assets/timeline-definition-1a90b03d-bc87de20.js",revision:"190e70593e5c87e967a5b955e38f8347"},{url:"assets/utils-a5e1dbae-143be013.js",revision:"7c6f998ca9a809acdca07301595257b8"},{url:"assets/vue-repl-984b7e58.js",revision:"816595b25d0700210be4e8e66de01629"},{url:"assets/VuePlayground-1c4c59cf.js",revision:"8b233d5f5ee0ba86219e5a3046f861f7"},{url:"assets/zoom.esm-b83b91d0.js",revision:"9ea0d576c1bddb5122016122d8a24c68"},{url:"logo.svg",revision:"d158cad89bd4ee16f84caad47d744e7f"},{url:"404.html",revision:"93efb21274c8b3331993af76a0687779"},{url:"article/index.html",revision:"f4722c04cfe910f206e96c362fcaf6bc"},{url:"bib/bib.html",revision:"13c83d27d8ad078d23bca1ae468fb2f5"},{url:"bib/index.html",revision:"36d24a5edb200a62e5068223dd16cfe1"},{url:"category/aula/index.html",revision:"a8442ef078fa276f3cbe19abc6d9ddfb"},{url:"category/entrega/index.html",revision:"3bc1b9d49a46aedb3c8b3ce7ceb2267e"},{url:"category/exercicio/index.html",revision:"93ceeb99ced321699064c194702cd4eb"},{url:"category/index.html",revision:"05562a464a4782eea2508ba457715271"},{url:"category/plano-de-curso/index.html",revision:"45ff4664edddfb00c9695406bed7c2b5"},{url:"category/pweb/index.html",revision:"a69090111f2849aaa23875889d807584"},{url:"index.html",revision:"722a4925e37935163aee3554081ebe85"},{url:"intro.html",revision:"faeefc22e6889cb7f6edbc978a952ccd"},{url:"posts/02_HInternet.html",revision:"c3ff1370e5e0cb486ca59c7f3e6f41d2"},{url:"posts/03_HTTP.html",revision:"700cb589f8eecc418d90e4a5f94254d4"},{url:"posts/04_jamstack.html",revision:"7e2978ab37aff48e445f58bd6802bd2c"},{url:"posts/05_Wireframe.html",revision:"846fb1c48958060db9a1e9d4be2434a0"},{url:"posts/06_HTML.html",revision:"8eedd26b21d869b4e6fb6b30d00a78df"},{url:"posts/07_CSS.html",revision:"a7c4ef76a8d0207968eb58a5025afbcc"},{url:"posts/08_CSSFlexbox.html",revision:"a88d7aa4b2009cc23b01e7057d334d0f"},{url:"posts/09_CSSFrameworks.html",revision:"b8435df011c72d43349c1ade5c52f0e1"},{url:"posts/10_JavaScript.html",revision:"5d6d1f3c67de7bc1cbd2d65acffeb991"},{url:"posts/11_FrameWorksFrontend.html",revision:"2859740705ae917f199133c8ad3f3aa2"},{url:"posts/12_HillaFramework.html",revision:"0895094db901d37702c2832d05ae8ad3"},{url:"posts/ementa.html",revision:"344c258c5d69f2db818754e13ba72ea0"},{url:"posts/exercicios/01_jamstack.html",revision:"ec977432dc357a934109e16a7bce9edf"},{url:"posts/exercicios/02_trabalho.html",revision:"d3071c8a1fcab873b8fca15fc8f9fcc6"},{url:"posts/exercicios/index.html",revision:"9eff97efc8443852c26a47cbaf7f32e8"},{url:"posts/index.html",revision:"b6a1d6f377e18eb8bd59aa7351632e93"},{url:"star/index.html",revision:"3ed10ef21e1f45e38b9b6c08e9e4275d"},{url:"tag/css/index.html",revision:"a4021657c1d5e97e998496b52e4d1a38"},{url:"tag/ementa/index.html",revision:"75065b3252f104d3327afc3b8ef352df"},{url:"tag/flexbox/index.html",revision:"db3d2bbbaae838902b3af816ef27a6b3"},{url:"tag/frameworks/index.html",revision:"59ca6ad0c318096cfd961147a2a6359a"},{url:"tag/frontend/index.html",revision:"a7d04a6ffacfb1034c7464db211b82db"},{url:"tag/hilla/index.html",revision:"bc3f788dc904bd19b664a5240cd947b6"},{url:"tag/história/index.html",revision:"ac3afb0236a4c02885dd5dfd227538a3"},{url:"tag/html/index.html",revision:"3bc020fffdf65ccf1b3f28fba7f5cd64"},{url:"tag/http/index.html",revision:"45f6b80350dc62b5451a5c35dfb965ec"},{url:"tag/index.html",revision:"766defd5a650ae19a4baeaf5e4f341b2"},{url:"tag/internet/index.html",revision:"d44072862c16cbb5c91c58c20d8c0a0e"},{url:"tag/jamstack/index.html",revision:"e09d233a1c48aad087678444d1d5440b"},{url:"tag/javascript/index.html",revision:"277dbe3f9988c3f71aff1133f1e198a8"},{url:"tag/less/index.html",revision:"6dca7830597f6e5227206932e8e943d4"},{url:"tag/preprocessador/index.html",revision:"decd91f58be4108cdd9c8eb917073cc0"},{url:"tag/sass/index.html",revision:"027268a6813bae938b6b5bd475a26dd8"},{url:"tag/scss/index.html",revision:"dfbd658df3cbd643b8a7b870ddb009a6"},{url:"tag/typescript/index.html",revision:"eb0f000a36213085f14403b7b7ff1abb"},{url:"tag/vaadin/index.html",revision:"bf35c3fcdb46a1e8eaa40334ec63711e"},{url:"tag/wireframe/index.html",revision:"03a3f46c5c516d1e2f089d0218608547"},{url:"timeline/index.html",revision:"0a007ee97ee2866537f2fe3ac6786ad4"},{url:"assets/hero-197a9d2d.jpg",revision:"b62ddd9c4a72085202b5218e4c98fd68"},{url:"assets/icon/icon-144.png",revision:"8445ad1fa6f2a4c5f33a71aad9a30e45"},{url:"assets/icon/icon-152.png",revision:"c3b91b876e7227c8c7cec6b1756c9f41"},{url:"assets/icon/icon-192.png",revision:"285dca4adb0e201e01374f9dd769d652"},{url:"assets/icon/icon-512.png",revision:"c88b22ef4e834ea4bbb4d9152f14d048"},{url:"assets/Image_0-44135785.png",revision:"2b1d524d8b55bb9decb8ac58e55126f0"},{url:"logo.png",revision:"bbb2548edfb38614fa2c5348b4734609"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
