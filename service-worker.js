if(!self.define){let e,s={};const a=(a,d)=>(a=new URL(a+".js",d).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,f)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let r={};const c=e=>a(e,i),b={module:{uri:i},exports:r,require:c};s[i]=Promise.all(d.map((e=>b[e]||c(e)))).then((e=>(f(...e),r)))}}define(["./workbox-33d91895"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/01_jamstack.html-54916526.js",revision:"3445dd08e5dd2900c5e635200cccd065"},{url:"assets/01_jamstack.html-d3168869.js",revision:"d528c555ac216adedb9c7a59d25e1549"},{url:"assets/02_HInternet.html-ab2d7c64.js",revision:"24442ecfa6fab0d1300e9d8209fcf9b5"},{url:"assets/02_HInternet.html-f077ced1.js",revision:"1b8526a45a2cbb3eff54829f778598db"},{url:"assets/02_trabalho.html-50884529.js",revision:"d0d3b5da4215758acd07e91152086d30"},{url:"assets/02_trabalho.html-7dd231dc.js",revision:"835dd64a5dbc70cb71887dab152a7e85"},{url:"assets/03_HTTP.html-5c2ce385.js",revision:"0b24637af63b0408bc9264dd73e367c7"},{url:"assets/03_HTTP.html-8d44d72c.js",revision:"556c846b9b85012a2747143eeacb26a8"},{url:"assets/04_jamstack.html-58771ceb.js",revision:"26db7d998c4e20ce9afeca75db8de777"},{url:"assets/04_jamstack.html-f0b59801.js",revision:"acc53b544ef87a328097fbf05751963e"},{url:"assets/05_Wireframe.html-979c8842.js",revision:"ef06ad54b3cce071aebbeacb173da2d8"},{url:"assets/05_Wireframe.html-aa025d58.js",revision:"4c4fd595d83fea77b850fbb4c96689bc"},{url:"assets/06_HTML.html-1dd47166.js",revision:"ad8278e57e237df7c1082f48863db712"},{url:"assets/06_HTML.html-bf63939b.js",revision:"681f014bd9ab6286085f55be161e668f"},{url:"assets/07_CSS.html-d21de1a4.js",revision:"1c9535334a862ea01881c00b8c480ff0"},{url:"assets/07_CSS.html-e9900939.js",revision:"7fca78bd224adbc92349aaf7b655e738"},{url:"assets/404.html-23719e93.js",revision:"85359bbb1d837f2c73be0405ff79e4c4"},{url:"assets/404.html-43c93882.js",revision:"78e58080a8eec70b2c868351977618ad"},{url:"assets/app-da4de3d4.js",revision:"8bd18a5c1dc676d8982dc679491b3e9f"},{url:"assets/arc-c773fa2d.js",revision:"bc522ad46919bce1065d06c56ae9a304"},{url:"assets/array-9f3ba611.js",revision:"17dcebeaf673b09a1ca5da014d20022f"},{url:"assets/auto-fe80bb03.js",revision:"9d99a020735f021d88a203c78f7e0ee0"},{url:"assets/bib.html-119e11d3.js",revision:"56a65cb2e7f2a5571d64073c31ea8ee7"},{url:"assets/bib.html-7eed2904.js",revision:"d56e4b8fecbe6f6e51e274078e260042"},{url:"assets/c4Diagram-c0b17d02-eafb6c1c.js",revision:"8740eeda6ed896f05902f596e008913b"},{url:"assets/classDiagram-a8cc8886-9460b55f.js",revision:"8ee6435a008d534e645cd052cf9145fd"},{url:"assets/classDiagram-v2-802a48d3-d72854b8.js",revision:"6f233912f79dd2a538d3680767ad9651"},{url:"assets/codemirror-editor-97a8210f.js",revision:"b259df76db2c6ed2eb53e74d9e31cdcb"},{url:"assets/commonjs-dynamic-modules-302442b1.js",revision:"2afbf9a8021b44e8591299a7a7dbfc94"},{url:"assets/commonjsHelpers-de833af9.js",revision:"e2be7f3e66571d8f9280caf91c5e9b86"},{url:"assets/createText-3b1f58a4-87ba6340.js",revision:"66fd5df167efc4ccfd5cea764832a2b2"},{url:"assets/edges-0005682e-a16a3d9d.js",revision:"e95821fbad4b6162aee4ca0bd108770a"},{url:"assets/ementa.html-ac66f046.js",revision:"e4a4190064c70c2537a6f6db95b29714"},{url:"assets/ementa.html-d4b4ff7b.js",revision:"3f22a238526e937d24d5cac1cf0ace70"},{url:"assets/erDiagram-dedf2781-5fff68f4.js",revision:"c9e435b0205d2d9f2dbf7a2e4871a8f7"},{url:"assets/flowchart-c441f34d.js",revision:"d0922e56732b0ff9f2eb72eccb4e7e36"},{url:"assets/flowchart-elk-definition-56584a6c-1c805797.js",revision:"7dd79244dd13410e4862e72362295c6e"},{url:"assets/flowDb-ff651a22-5e48b294.js",revision:"bc4efa3ac153b7eec7ca8d0d21209eba"},{url:"assets/flowDiagram-d6f8fe3a-eee913e3.js",revision:"fe3f5b3715e016946fc1a4f61f56f903"},{url:"assets/flowDiagram-v2-58f49b84-a0ce60ad.js",revision:"a08f9dfe6b1d5b9ac4031d28f0007721"},{url:"assets/ganttDiagram-088dbd90-bd90a506.js",revision:"aee88936a0712975b44b7a83673bed84"},{url:"assets/gitGraphDiagram-e0ffc2d1-497a1634.js",revision:"a2f5a210e73a6e543ce80f57e04df550"},{url:"assets/highlight.esm-75b11b9d.js",revision:"5d33e8aa724e0f03a23564f7c03bc7f5"},{url:"assets/index-2bf332f6.js",revision:"15b6a4a48574f26d02d692ce0cac07fb"},{url:"assets/index-e32a7948.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index-f58d48f9-a357334b.js",revision:"d60c86bf9c96bed40ad1e7a13b40009c"},{url:"assets/index.html-0128aa4f.js",revision:"1c18fdb7cb59c0ae14df55f6b86698b9"},{url:"assets/index.html-018ecc46.js",revision:"96b85afeefea728daca2c6afb22ed94f"},{url:"assets/index.html-0a491570.js",revision:"79955c03c3c9aaa019b17179b37f8925"},{url:"assets/index.html-11faaa3b.js",revision:"e6921d8fd3d80e879756b10f08e4fdc2"},{url:"assets/index.html-158051b2.js",revision:"8cfb1a13065e483194908f86e764de0a"},{url:"assets/index.html-235e7324.js",revision:"4aa6cd72e6c5166f4ca49d6e9375b6f7"},{url:"assets/index.html-2c3cadf8.js",revision:"e6921d8fd3d80e879756b10f08e4fdc2"},{url:"assets/index.html-30f29609.js",revision:"7d93cdd9d927302f09b1d8ddae1d5cee"},{url:"assets/index.html-33cce8c0.js",revision:"e6921d8fd3d80e879756b10f08e4fdc2"},{url:"assets/index.html-34e252c2.js",revision:"8cfb1a13065e483194908f86e764de0a"},{url:"assets/index.html-376b5156.js",revision:"8304075c03e2449966effbcc8d17458b"},{url:"assets/index.html-3aab5c51.js",revision:"5385d54a65fe95ceaba52fb10f01a4a6"},{url:"assets/index.html-492c8438.js",revision:"e6921d8fd3d80e879756b10f08e4fdc2"},{url:"assets/index.html-4b8d3642.js",revision:"e6921d8fd3d80e879756b10f08e4fdc2"},{url:"assets/index.html-4e35b838.js",revision:"5cab9b1212d6d6c33a5c230a303b3e92"},{url:"assets/index.html-5421a0f1.js",revision:"5e99c66246ae021fd0bcb88b0a332152"},{url:"assets/index.html-5c9cb593.js",revision:"e6921d8fd3d80e879756b10f08e4fdc2"},{url:"assets/index.html-61d92a5f.js",revision:"8dc78da75087b27bdadb484c45bf70f8"},{url:"assets/index.html-656644cc.js",revision:"e6921d8fd3d80e879756b10f08e4fdc2"},{url:"assets/index.html-67883b02.js",revision:"8cfb1a13065e483194908f86e764de0a"},{url:"assets/index.html-756e68fc.js",revision:"e6921d8fd3d80e879756b10f08e4fdc2"},{url:"assets/index.html-785b9a7b.js",revision:"1fd9339644e4cd1a9240934e97839fe6"},{url:"assets/index.html-7ba5edff.js",revision:"e6921d8fd3d80e879756b10f08e4fdc2"},{url:"assets/index.html-7c1d6f1b.js",revision:"e6921d8fd3d80e879756b10f08e4fdc2"},{url:"assets/index.html-986386dd.js",revision:"45c32d5cf3c35ffd8f80ec846d97086a"},{url:"assets/index.html-a08e9665.js",revision:"da1e0beca7dc6a824eb6f2d90cc305bc"},{url:"assets/index.html-a1113326.js",revision:"c6b16992ef017c2bc8ade2047197fd92"},{url:"assets/index.html-a399f150.js",revision:"e635bb12ca5a75e945f6641d7006f13b"},{url:"assets/index.html-a532d2eb.js",revision:"e6921d8fd3d80e879756b10f08e4fdc2"},{url:"assets/index.html-ac9d8a88.js",revision:"e6921d8fd3d80e879756b10f08e4fdc2"},{url:"assets/index.html-b5fce1ba.js",revision:"e6921d8fd3d80e879756b10f08e4fdc2"},{url:"assets/index.html-c9fe6718.js",revision:"e6921d8fd3d80e879756b10f08e4fdc2"},{url:"assets/index.html-ccc7ac9e.js",revision:"e6921d8fd3d80e879756b10f08e4fdc2"},{url:"assets/index.html-cdec1324.js",revision:"e6921d8fd3d80e879756b10f08e4fdc2"},{url:"assets/index.html-d42b3b97.js",revision:"5022cc1d2db5aee1716f09ef5e83f1c2"},{url:"assets/index.html-dbbf0653.js",revision:"be4aceaaf0274f2574d08b6729f13a63"},{url:"assets/index.html-dccd9818.js",revision:"e6921d8fd3d80e879756b10f08e4fdc2"},{url:"assets/index.html-dd4efad0.js",revision:"e6921d8fd3d80e879756b10f08e4fdc2"},{url:"assets/index.html-dfed0ee6.js",revision:"ef368fc54222486624acfdd65674abe5"},{url:"assets/index.html-e8bd7677.js",revision:"e6921d8fd3d80e879756b10f08e4fdc2"},{url:"assets/index.html-f14ff23d.js",revision:"872483e3642e01ab9ab3b3f050049bc2"},{url:"assets/index.html-f5b9a3f2.js",revision:"3a3a0c8d94c5ee7eebcc0595a8ecb7ac"},{url:"assets/index.html-fed8fa2e.js",revision:"e693eda3c1e9dd689099c30b045121cd"},{url:"assets/index.html-ff66c0ec.js",revision:"2aa1f9634eda300153a2175f1a07bf53"},{url:"assets/infoDiagram-64895a6e-0adf1bc9.js",revision:"b7f810d1c1426c6ba4c3c7e60de43e42"},{url:"assets/init-77b53fdd.js",revision:"3ce28180466443e9b617d7b96e9f7b8f"},{url:"assets/intro.html-3b0940f6.js",revision:"dc248525900129f09d2adca7cff13a79"},{url:"assets/intro.html-cbc464d3.js",revision:"d7dd3709e1ccfe542638ad412dda97d7"},{url:"assets/journeyDiagram-adaa34f8-3b834933.js",revision:"1f5a1ba4462377fbba8f8657ec909b5d"},{url:"assets/KaTeX_AMS-Regular-0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular-30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular-68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold-07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold-1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold-de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular-3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular-5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular-ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold-74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold-9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold-9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular-1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular-51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular-5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold-0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold-138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold-c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic-70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic-99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic-a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic-0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic-97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic-f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular-c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular-c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular-d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic-850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic-dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic-f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic-08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic-7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic-8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold-1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold-e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold-ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic-00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic-3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic-91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular-11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular-68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular-f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular-036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular-1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular-d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular-6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular-95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular-c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular-2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular-a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular-d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular-500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular-6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular-99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular-a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular-c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular-71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular-e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular-f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/layout-08b2c7f4.js",revision:"19ae784ff09f7feca42224f02fc7f615"},{url:"assets/league-gothic-38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic-5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic-8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/line-2491c0f7.js",revision:"165cb7fab89a857e584e56d2b0a865fa"},{url:"assets/linear-badbebf7.js",revision:"2dc5950b0cb5da6e7f0f1fba6254048b"},{url:"assets/markdown.esm-abe06b83.js",revision:"3e2668565c994b015ab82cac0075bf97"},{url:"assets/math.esm-70a288c8.js",revision:"c5f77dc064ac53005c0e5446bb6715b0"},{url:"assets/mermaid.core-9b410666.js",revision:"c84360ce348153911defa48a74b3dea5"},{url:"assets/mindmap-definition-57868176-ee1bc1f2.js",revision:"d0c746046643d0b46fd7425ecb99a664"},{url:"assets/notes.esm-a106bb2c.js",revision:"7c95fadebe38cabad55423002748625b"},{url:"assets/ordinal-ba9b4969.js",revision:"3a57ceba2c0d70da5e704aad84f79b46"},{url:"assets/path-53f90ab3.js",revision:"f86c0243cb45746453c6b4f7dbd9f34d"},{url:"assets/photoswipe.esm-5794cde2.js",revision:"2687434a99577ed4fa4b1050a3f0ac90"},{url:"assets/pieDiagram-3fca7ce7-69e318bd.js",revision:"74d5cde239a761adbaec350a7c589585"},{url:"assets/plugin-vue_export-helper-c27b6911.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/quadrantDiagram-0ca4be02-efbfc154.js",revision:"e8b19c505abfa5870c0afd1877d637ca"},{url:"assets/requirementDiagram-e13af0f0-f5e29842.js",revision:"60463a12927b941a9f59b82a5b4695d7"},{url:"assets/reveal.esm-ec5549c1.js",revision:"40498a0448b327f408a5db6b67491b8a"},{url:"assets/sankeyDiagram-a7f8e230-50c4b2d8.js",revision:"aec1697719f97b9362f2e6b3d1c66672"},{url:"assets/search-0782d0d1.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/search.esm-7e6792e2.js",revision:"f1a5e92b2857fcc2c457f7dd03f762f3"},{url:"assets/sequenceDiagram-84aa38e3-9049e98d.js",revision:"a6a537f6736105a9e3d1abe750cc0980"},{url:"assets/source-sans-pro-italic-05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic-ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic-d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular-c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular-d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular-dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold-a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold-b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold-ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic-7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic-dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic-e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/stateDiagram-9a586ac6-9e086f8e.js",revision:"7d1b885adb02022076e7abab2838f401"},{url:"assets/stateDiagram-v2-96f2b9df-1448d7b2.js",revision:"252384954bd22332719bf16b64f9ce29"},{url:"assets/style-26ead7b2.css",revision:"58095e3757e77baaca26bcfcf8fda7ed"},{url:"assets/styles-1b0c237a-ddff8912.js",revision:"cbeccf3fe3fbbd174f6f2d6e722aa826"},{url:"assets/styles-622362e4-2aa8d0fa.js",revision:"d2bb272f9cb925b945d514e0ecc047fe"},{url:"assets/styles-a1a6e33f-f1a24d89.js",revision:"26c1a4fb45516257eb78067aea878bcc"},{url:"assets/svgDraw-70101091-8ca44f20.js",revision:"d00d7109c1e93ed9cb86fc415b7ae8b5"},{url:"assets/svgDrawCommon-42e92da3-a7c7f195.js",revision:"975d424339f722b0153a9a69691523a5"},{url:"assets/timeline-definition-1a90b03d-2584e7aa.js",revision:"9064a0d0ded654519e7071e663d0158b"},{url:"assets/utils-a5e1dbae-143be013.js",revision:"7c6f998ca9a809acdca07301595257b8"},{url:"assets/vue-repl-b9dd8ceb.js",revision:"616f7861a637af2f4aab4f06d17dd70f"},{url:"assets/VuePlayground-6a5b2c51.js",revision:"5b917c634cc267f6a39e26fb6a26ee78"},{url:"assets/zoom.esm-b83b91d0.js",revision:"9ea0d576c1bddb5122016122d8a24c68"},{url:"logo.svg",revision:"d158cad89bd4ee16f84caad47d744e7f"},{url:"404.html",revision:"0fc522c5223292685ce249d3dfe84129"},{url:"article/index.html",revision:"0f7aec82db5038fd92247e6bc4d695f6"},{url:"bib/bib.html",revision:"e8ec614a5892584ae067e59004000885"},{url:"bib/index.html",revision:"4b3a53326d02141d65d3b208c35c1d3a"},{url:"category/aula/index.html",revision:"ddd2a44786f572f97f34b21bfecb0d58"},{url:"category/entrega/index.html",revision:"0ea3432db1805b136aa15e71dc77b5a9"},{url:"category/exercicio/index.html",revision:"4a25f29292b9a9975ab2674b8b52421a"},{url:"category/index.html",revision:"00fa9467b1331bba81346d952ff8f1f0"},{url:"category/plano-de-curso/index.html",revision:"5efa2261c37d460bc049d442dc964404"},{url:"category/pweb/index.html",revision:"73e47e9a375bc8bd9adc26f4a59c2a8b"},{url:"index.html",revision:"a5010d3000068c6441aa5d8e163c9624"},{url:"intro.html",revision:"0b7f1f6ac8e7059909e649f056bf1578"},{url:"posts/02_HInternet.html",revision:"5a6444940720e0adade2c795a856c624"},{url:"posts/03_HTTP.html",revision:"9b7e03a0cc2648751327a6af08f140a4"},{url:"posts/04_jamstack.html",revision:"b135469bedd325a0038123f503bc011a"},{url:"posts/05_Wireframe.html",revision:"e4b40ef71452a99ff8895d485213a2cb"},{url:"posts/06_HTML.html",revision:"4b1b646ec791b3e18ad190a87e0e7805"},{url:"posts/07_CSS.html",revision:"f06568626f8c29f5f8d9faf4ae1abbdb"},{url:"posts/ementa.html",revision:"c25f992afee293b47ee786182fc5cdbf"},{url:"posts/exercicios/01_jamstack.html",revision:"d5f8d128fdd4d8d3ee8cfc926260de71"},{url:"posts/exercicios/02_trabalho.html",revision:"e3e302c9bead92f2cfe3797cc4c759df"},{url:"posts/exercicios/index.html",revision:"bde119b31bfeb23965191e656af4a7c3"},{url:"posts/index.html",revision:"e5f3fecde01d670d1b7e5bcc6f39f7d4"},{url:"star/index.html",revision:"1e06839765daad41ef08657cda732d63"},{url:"tag/css/index.html",revision:"ae07c5bc5f8fffde56af1e8374c51ca9"},{url:"tag/ementa/index.html",revision:"5f4f9487bcb0ff6816bc6a35ab258606"},{url:"tag/história/index.html",revision:"057cce1681d279315f6ca95779275aee"},{url:"tag/html/index.html",revision:"5f7497f268c9dae84a0ce361b4d0ce77"},{url:"tag/http/index.html",revision:"570e9770948bf74e692c7f5dbfb7d309"},{url:"tag/index.html",revision:"ba5b1ba829e57d3682e497cdaffdd9dd"},{url:"tag/internet/index.html",revision:"66c24438ebd3580cb8be68188655da6c"},{url:"tag/jamstack/index.html",revision:"be5a000417dc29ed479e0985511e94b7"},{url:"tag/wireframe/index.html",revision:"4bc00d2ab312acb1fc9133012080cb42"},{url:"timeline/index.html",revision:"6fd94b8a7e2202b81d0c9ac636ec9c2c"},{url:"assets/hero-197a9d2d.jpg",revision:"b62ddd9c4a72085202b5218e4c98fd68"},{url:"assets/icon/icon-144.png",revision:"8445ad1fa6f2a4c5f33a71aad9a30e45"},{url:"assets/icon/icon-152.png",revision:"c3b91b876e7227c8c7cec6b1756c9f41"},{url:"assets/icon/icon-192.png",revision:"285dca4adb0e201e01374f9dd769d652"},{url:"assets/icon/icon-512.png",revision:"c88b22ef4e834ea4bbb4d9152f14d048"},{url:"logo.png",revision:"bbb2548edfb38614fa2c5348b4734609"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
