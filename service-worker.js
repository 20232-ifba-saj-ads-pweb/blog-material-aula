if(!self.define){let e,s={};const a=(a,f)=>(a=new URL(a+".js",f).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(f,i)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let c={};const r=e=>a(e,d),b={module:{uri:d},exports:c,require:r};s[d]=Promise.all(f.map((e=>b[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-33d91895"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/02_HInternet.html-9db9f129.js",revision:"db3d5616eebdffc825af8e5fec71e208"},{url:"assets/02_HInternet.html-eb214daf.js",revision:"535fbd84a8c906bc33f92140273965f8"},{url:"assets/03_HTTP.html-5b1c3c2a.js",revision:"1d6a66a5f035e9dcf34e37f130225a77"},{url:"assets/03_HTTP.html-a08a2d80.js",revision:"e316b23bb6c2096f81ff65221ded7698"},{url:"assets/404.html-23719e93.js",revision:"85359bbb1d837f2c73be0405ff79e4c4"},{url:"assets/404.html-f1a94ddf.js",revision:"669a494a4ded93a83ec0a152499fb6cd"},{url:"assets/app-79b17321.js",revision:"9bdb256287159b576786a3e3818d6a47"},{url:"assets/arc-baf130b6.js",revision:"bbb4ff015f6124ad55513924f0211af0"},{url:"assets/array-9f3ba611.js",revision:"17dcebeaf673b09a1ca5da014d20022f"},{url:"assets/auto-fe80bb03.js",revision:"9d99a020735f021d88a203c78f7e0ee0"},{url:"assets/bib.html-91b822d4.js",revision:"65f266cb4eeda2f41d04db6a3724555b"},{url:"assets/bib.html-c3c33670.js",revision:"6731deadd635f744b45bcf2c11a7855b"},{url:"assets/c4Diagram-c0b17d02-57a6f03a.js",revision:"b2a2b75bffac0698a7e0c36779134693"},{url:"assets/classDiagram-a8cc8886-42376393.js",revision:"767be923e095679c4c35628e32669de1"},{url:"assets/classDiagram-v2-802a48d3-4bbc004a.js",revision:"7f6219ee85ca00af92953db487395b93"},{url:"assets/codemirror-editor-dd6af3fe.js",revision:"46de06afc38019148f9855a26f5e7dad"},{url:"assets/commonjs-dynamic-modules-302442b1.js",revision:"2afbf9a8021b44e8591299a7a7dbfc94"},{url:"assets/commonjsHelpers-de833af9.js",revision:"e2be7f3e66571d8f9280caf91c5e9b86"},{url:"assets/createText-3b1f58a4-c98ba2d3.js",revision:"77ceadfcbe858fa4d4d4dcc9ab61c473"},{url:"assets/edges-0005682e-4d2a912d.js",revision:"f1fce6127687e7b763700581ec95935c"},{url:"assets/ementa.html-414accdd.js",revision:"8539376f589e4022466bc0ba48242095"},{url:"assets/ementa.html-b26a5209.js",revision:"cd758f06f3073ebbebcd7dd945a7a4f0"},{url:"assets/erDiagram-dedf2781-e6259bb9.js",revision:"23e77b7c0602eb724688df8684fda11d"},{url:"assets/flowchart-c441f34d.js",revision:"d0922e56732b0ff9f2eb72eccb4e7e36"},{url:"assets/flowchart-elk-definition-56584a6c-5b3992af.js",revision:"169eabca95cabd68970bc62531b50f39"},{url:"assets/flowDb-ff651a22-07ae83f9.js",revision:"ab9cfd11f06044a16153fb4fdc958128"},{url:"assets/flowDiagram-d6f8fe3a-70f9c187.js",revision:"c4992a57562ead0ed177936b7cc7af9d"},{url:"assets/flowDiagram-v2-58f49b84-9e3b7b51.js",revision:"5e8770362f568a2ad3e1689489cfb2da"},{url:"assets/ganttDiagram-088dbd90-c0150da2.js",revision:"1622a2d05b76179d9832b4fe1ab271ad"},{url:"assets/gitGraphDiagram-e0ffc2d1-0473668b.js",revision:"1d462ace02674b82eb158d44bf7b33d5"},{url:"assets/highlight.esm-75b11b9d.js",revision:"5d33e8aa724e0f03a23564f7c03bc7f5"},{url:"assets/index-2bf332f6.js",revision:"15b6a4a48574f26d02d692ce0cac07fb"},{url:"assets/index-e32a7948.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index-f58d48f9-92e858bd.js",revision:"8a255cfc08c01dfed1fdb837cc5e8862"},{url:"assets/index.html-0128aa4f.js",revision:"1c18fdb7cb59c0ae14df55f6b86698b9"},{url:"assets/index.html-13cce7b7.js",revision:"da072c5031850cdbdbc42e79564e8cc9"},{url:"assets/index.html-1b8df8b8.js",revision:"da072c5031850cdbdbc42e79564e8cc9"},{url:"assets/index.html-30f29609.js",revision:"7d93cdd9d927302f09b1d8ddae1d5cee"},{url:"assets/index.html-32e90e9c.js",revision:"da072c5031850cdbdbc42e79564e8cc9"},{url:"assets/index.html-376b5156.js",revision:"8304075c03e2449966effbcc8d17458b"},{url:"assets/index.html-3aab5c51.js",revision:"5385d54a65fe95ceaba52fb10f01a4a6"},{url:"assets/index.html-5a812d63.js",revision:"da072c5031850cdbdbc42e79564e8cc9"},{url:"assets/index.html-61557090.js",revision:"da072c5031850cdbdbc42e79564e8cc9"},{url:"assets/index.html-61d92a5f.js",revision:"8dc78da75087b27bdadb484c45bf70f8"},{url:"assets/index.html-669a36d0.js",revision:"f3a73b64c46d79016e0910f09e388341"},{url:"assets/index.html-785b9a7b.js",revision:"1fd9339644e4cd1a9240934e97839fe6"},{url:"assets/index.html-a0eee8d3.js",revision:"da072c5031850cdbdbc42e79564e8cc9"},{url:"assets/index.html-a1113326.js",revision:"c6b16992ef017c2bc8ade2047197fd92"},{url:"assets/index.html-a399f150.js",revision:"e635bb12ca5a75e945f6641d7006f13b"},{url:"assets/index.html-bbfc727c.js",revision:"da072c5031850cdbdbc42e79564e8cc9"},{url:"assets/index.html-cb07bef7.js",revision:"f3a73b64c46d79016e0910f09e388341"},{url:"assets/index.html-d42b3b97.js",revision:"5022cc1d2db5aee1716f09ef5e83f1c2"},{url:"assets/index.html-d9af8f67.js",revision:"da072c5031850cdbdbc42e79564e8cc9"},{url:"assets/index.html-dbbf0653.js",revision:"be4aceaaf0274f2574d08b6729f13a63"},{url:"assets/index.html-dfd6e67f.js",revision:"da072c5031850cdbdbc42e79564e8cc9"},{url:"assets/index.html-e4f451ae.js",revision:"da072c5031850cdbdbc42e79564e8cc9"},{url:"assets/index.html-e5b62189.js",revision:"da072c5031850cdbdbc42e79564e8cc9"},{url:"assets/index.html-f14ff23d.js",revision:"872483e3642e01ab9ab3b3f050049bc2"},{url:"assets/index.html-f5b9a3f2.js",revision:"3a3a0c8d94c5ee7eebcc0595a8ecb7ac"},{url:"assets/index.html-f679f535.js",revision:"da072c5031850cdbdbc42e79564e8cc9"},{url:"assets/index.html-fed8fa2e.js",revision:"e693eda3c1e9dd689099c30b045121cd"},{url:"assets/index.html-ff66c0ec.js",revision:"2aa1f9634eda300153a2175f1a07bf53"},{url:"assets/infoDiagram-64895a6e-81b182cf.js",revision:"f48bb6516bad1cbe65effa9da763c056"},{url:"assets/init-77b53fdd.js",revision:"3ce28180466443e9b617d7b96e9f7b8f"},{url:"assets/intro.html-074d908c.js",revision:"450e66e06455d0efb76c9bdc9ff2280e"},{url:"assets/intro.html-3b0940f6.js",revision:"dc248525900129f09d2adca7cff13a79"},{url:"assets/journeyDiagram-adaa34f8-fbfd8ff1.js",revision:"562a17c950b2a5502525a7d3157768aa"},{url:"assets/KaTeX_AMS-Regular-0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular-30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular-68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold-07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold-1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold-de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular-3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular-5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular-ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold-74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold-9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold-9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular-1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular-51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular-5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold-0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold-138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold-c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic-70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic-99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic-a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic-0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic-97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic-f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular-c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular-c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular-d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic-850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic-dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic-f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic-08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic-7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic-8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold-1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold-e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold-ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic-00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic-3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic-91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular-11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular-68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular-f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular-036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular-1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular-d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular-6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular-95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular-c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular-2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular-a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular-d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular-500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular-6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular-99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular-a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular-c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular-71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular-e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular-f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/layout-47187fb3.js",revision:"11807fd856e8ec2bde229e38dff970fb"},{url:"assets/league-gothic-38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic-5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic-8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/line-fb1d285f.js",revision:"d0b9280ecdebe43998e5bb9d653c55e1"},{url:"assets/linear-51689331.js",revision:"4de1020523998410d6dcc5c2c6b7c2f1"},{url:"assets/markdown.esm-abe06b83.js",revision:"3e2668565c994b015ab82cac0075bf97"},{url:"assets/math.esm-70a288c8.js",revision:"c5f77dc064ac53005c0e5446bb6715b0"},{url:"assets/mermaid.core-7f68fee8.js",revision:"0e0c61803e87408a18c89635a19b9f1e"},{url:"assets/mindmap-definition-57868176-7dfc1d03.js",revision:"d6e6bbb2a3d3d89da535cefcf080789f"},{url:"assets/notes.esm-a106bb2c.js",revision:"7c95fadebe38cabad55423002748625b"},{url:"assets/ordinal-ba9b4969.js",revision:"3a57ceba2c0d70da5e704aad84f79b46"},{url:"assets/path-53f90ab3.js",revision:"f86c0243cb45746453c6b4f7dbd9f34d"},{url:"assets/photoswipe.esm-5794cde2.js",revision:"2687434a99577ed4fa4b1050a3f0ac90"},{url:"assets/pieDiagram-3fca7ce7-015f0039.js",revision:"e3a14db85ff80dcc8442407232ca4e47"},{url:"assets/plugin-vue_export-helper-c27b6911.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/quadrantDiagram-0ca4be02-50aa4858.js",revision:"dc8fbdcdccb3f7af53506692edfb2a31"},{url:"assets/requirementDiagram-e13af0f0-ea97199d.js",revision:"6f7c81cba90a945074f981ee566a7731"},{url:"assets/reveal.esm-ec5549c1.js",revision:"40498a0448b327f408a5db6b67491b8a"},{url:"assets/sankeyDiagram-a7f8e230-351a38de.js",revision:"f6f82b34705f48aef90e49b2a4e0e296"},{url:"assets/search-0782d0d1.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/search.esm-7e6792e2.js",revision:"f1a5e92b2857fcc2c457f7dd03f762f3"},{url:"assets/sequenceDiagram-84aa38e3-3694a01b.js",revision:"e9dd0ed544425c5c973472c48847eda4"},{url:"assets/source-sans-pro-italic-05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic-ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic-d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular-c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular-d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular-dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold-a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold-b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold-ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic-7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic-dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic-e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/stateDiagram-9a586ac6-0c68650d.js",revision:"818b65bf7989b6358370e547c1445ecf"},{url:"assets/stateDiagram-v2-96f2b9df-87ec8458.js",revision:"24dcf8857f5db74894b5c0bbacb529a7"},{url:"assets/style-26ead7b2.css",revision:"58095e3757e77baaca26bcfcf8fda7ed"},{url:"assets/styles-1b0c237a-5d0426a4.js",revision:"01ee41e3eeb10c6458f405148e0ca03b"},{url:"assets/styles-622362e4-72822c46.js",revision:"9fbe0d4fb9fc8aa41f35745438c13c7b"},{url:"assets/styles-a1a6e33f-edb483fa.js",revision:"8a3be884f35d509ab5852d84fc5b19b4"},{url:"assets/svgDraw-70101091-e2f58920.js",revision:"a2e16cc5a2243a429907684eb119572e"},{url:"assets/svgDrawCommon-42e92da3-f68f9136.js",revision:"3ac83dfe265de180a265441ab314fe49"},{url:"assets/timeline-definition-1a90b03d-2f94155c.js",revision:"6f45f454f77dad4416edce2370480c88"},{url:"assets/utils-a5e1dbae-143be013.js",revision:"7c6f998ca9a809acdca07301595257b8"},{url:"assets/vue-repl-0f11e036.js",revision:"957c481146b8789e605745d1e99a46bd"},{url:"assets/VuePlayground-47b579e2.js",revision:"ef5377a72afa51b2d2853c74c9b6941f"},{url:"assets/zoom.esm-b83b91d0.js",revision:"9ea0d576c1bddb5122016122d8a24c68"},{url:"logo.svg",revision:"d158cad89bd4ee16f84caad47d744e7f"},{url:"404.html",revision:"2d6e9af8bd8324d70f12622a14ee5742"},{url:"article/index.html",revision:"043c1fd153448e747e926a27c346a260"},{url:"bib/bib.html",revision:"19a9b630ce78d805af4a7515058f83ad"},{url:"bib/index.html",revision:"134253c0fa19c91d0c795f2002ea0b1e"},{url:"category/index.html",revision:"0a80ef457ea11566fc5d3ac38db7b74f"},{url:"category/plano-de-curso/index.html",revision:"7bc3b58395d1094a03187c26318ae44a"},{url:"category/pweb/index.html",revision:"20f71cb9701c9ea42e34a2f58d804908"},{url:"index.html",revision:"8fbc218fe3ef0616006f31c9665357c5"},{url:"intro.html",revision:"9ed70dbd3d4e7a439dc6fc33f1c9cb74"},{url:"posts/02_HInternet.html",revision:"c3e81dd1a89ea9793926644edf859f7b"},{url:"posts/03_HTTP.html",revision:"e479844f6527333a698b3eafbf2f0109"},{url:"posts/ementa.html",revision:"37fde8c11698b0381f92b18302e4ccba"},{url:"posts/index.html",revision:"9e8962a6324c699aed0e4683967866a4"},{url:"star/index.html",revision:"bf8faaa7ff5c7173c4265a9c7474123c"},{url:"tag/ementa/index.html",revision:"b7ed2033dd4c30b298ad3ad1d2bb9d43"},{url:"tag/história/index.html",revision:"f484242b7fccdf9bcceb1e18fac5fd16"},{url:"tag/http/index.html",revision:"1c540e6209bd5a9ddd8e1da03f0663ed"},{url:"tag/index.html",revision:"b82c8d124a1b3aec18ece277010f1133"},{url:"tag/internet/index.html",revision:"fcb5750a8636453355f7bc0b2006ada9"},{url:"timeline/index.html",revision:"d7cbc966559e3fdd40945498f1224e10"},{url:"assets/hero-197a9d2d.jpg",revision:"b62ddd9c4a72085202b5218e4c98fd68"},{url:"assets/icon/icon-144.png",revision:"8445ad1fa6f2a4c5f33a71aad9a30e45"},{url:"assets/icon/icon-152.png",revision:"c3b91b876e7227c8c7cec6b1756c9f41"},{url:"assets/icon/icon-192.png",revision:"285dca4adb0e201e01374f9dd769d652"},{url:"assets/icon/icon-512.png",revision:"c88b22ef4e834ea4bbb4d9152f14d048"},{url:"logo.png",revision:"bbb2548edfb38614fa2c5348b4734609"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
