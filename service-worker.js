if(!self.define){let e,a={};const s=(s,f)=>(s=new URL(s+".js",f).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(f,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(a[i])return;let d={};const r=e=>s(e,i),b={module:{uri:i},exports:d,require:r};a[i]=Promise.all(f.map((e=>b[e]||r(e)))).then((e=>(c(...e),d)))}}define(["./workbox-33d91895"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-23719e93.js",revision:"85359bbb1d837f2c73be0405ff79e4c4"},{url:"assets/404.html-911be369.js",revision:"15517b81a84009e00cd8ca0777d234d2"},{url:"assets/app-daffdc45.js",revision:"dc96b565d109fd0c63c0ecd549134fec"},{url:"assets/arc-bd044964.js",revision:"bfaed2e683588f826b0df9e6b4f16d9a"},{url:"assets/array-9f3ba611.js",revision:"17dcebeaf673b09a1ca5da014d20022f"},{url:"assets/auto-fe80bb03.js",revision:"9d99a020735f021d88a203c78f7e0ee0"},{url:"assets/c4Diagram-c0b17d02-a4a3ead7.js",revision:"773a416e7777d4cecb5373a9c4325834"},{url:"assets/classDiagram-a8cc8886-32f0c646.js",revision:"a28877c22a1efd65393bd797b180e89a"},{url:"assets/classDiagram-v2-802a48d3-6da08887.js",revision:"156c3f3fba36eb91c5bdb41bbc2ab8bf"},{url:"assets/codemirror-editor-fb35883a.js",revision:"30370a9a395852a9978d6f604456a540"},{url:"assets/commonjs-dynamic-modules-302442b1.js",revision:"2afbf9a8021b44e8591299a7a7dbfc94"},{url:"assets/commonjsHelpers-de833af9.js",revision:"e2be7f3e66571d8f9280caf91c5e9b86"},{url:"assets/createText-3b1f58a4-727a859c.js",revision:"03ae0bd8049a399ef3a70e07ef15fca7"},{url:"assets/edges-0005682e-36e36bb9.js",revision:"d1a966136d413e8f9c4fb760be8b2ca0"},{url:"assets/ementa.html-377104f6.js",revision:"3a3ee26ee3a3dda5a8badcd292ff796f"},{url:"assets/ementa.html-99535b1e.js",revision:"1ba93ca2a968b011d904dcf710db9aa7"},{url:"assets/erDiagram-dedf2781-626fdb24.js",revision:"17385aa80eb192e8537659cc7d4c0df1"},{url:"assets/flowchart-c441f34d.js",revision:"d0922e56732b0ff9f2eb72eccb4e7e36"},{url:"assets/flowchart-elk-definition-56584a6c-40700218.js",revision:"e569e533423b07cc605cbc05133a23d8"},{url:"assets/flowDb-ff651a22-557561c2.js",revision:"c30a2d6a78417f0f4fd8d0777de9f22b"},{url:"assets/flowDiagram-d6f8fe3a-c10faa25.js",revision:"0acade2d1321d2872e5b0f154ac738fa"},{url:"assets/flowDiagram-v2-58f49b84-65b37f4c.js",revision:"6ac07657eade3abd4759b505df862c34"},{url:"assets/ganttDiagram-088dbd90-68c635ee.js",revision:"192a1de486396e4a819465ee898bc566"},{url:"assets/gitGraphDiagram-e0ffc2d1-b6691105.js",revision:"e03fdbdabedc04902abde7d6bd2a51e5"},{url:"assets/highlight.esm-75b11b9d.js",revision:"5d33e8aa724e0f03a23564f7c03bc7f5"},{url:"assets/index-2bf332f6.js",revision:"15b6a4a48574f26d02d692ce0cac07fb"},{url:"assets/index-e32a7948.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index-f58d48f9-84794aa3.js",revision:"ab8e946d358a59f02369922ee0561de8"},{url:"assets/index.html-0128aa4f.js",revision:"1c18fdb7cb59c0ae14df55f6b86698b9"},{url:"assets/index.html-0b2974a7.js",revision:"2476c1b4eec117f5cabc5cc67b10fd41"},{url:"assets/index.html-271bd3ec.js",revision:"2476c1b4eec117f5cabc5cc67b10fd41"},{url:"assets/index.html-30f29609.js",revision:"7d93cdd9d927302f09b1d8ddae1d5cee"},{url:"assets/index.html-376b5156.js",revision:"8304075c03e2449966effbcc8d17458b"},{url:"assets/index.html-3aab5c51.js",revision:"5385d54a65fe95ceaba52fb10f01a4a6"},{url:"assets/index.html-4861bc68.js",revision:"95f9b91b626b60eacdad4489cff5e1d8"},{url:"assets/index.html-4eee5c8e.js",revision:"2476c1b4eec117f5cabc5cc67b10fd41"},{url:"assets/index.html-4f4ff130.js",revision:"2476c1b4eec117f5cabc5cc67b10fd41"},{url:"assets/index.html-61d92a5f.js",revision:"8dc78da75087b27bdadb484c45bf70f8"},{url:"assets/index.html-7bcda344.js",revision:"2476c1b4eec117f5cabc5cc67b10fd41"},{url:"assets/index.html-86363ab7.js",revision:"2476c1b4eec117f5cabc5cc67b10fd41"},{url:"assets/index.html-a1113326.js",revision:"c6b16992ef017c2bc8ade2047197fd92"},{url:"assets/index.html-a399f150.js",revision:"e635bb12ca5a75e945f6641d7006f13b"},{url:"assets/index.html-c9866755.js",revision:"2476c1b4eec117f5cabc5cc67b10fd41"},{url:"assets/index.html-e500ee39.js",revision:"fc17d1ea0d38471fab534dfb998ecff9"},{url:"assets/index.html-f71a7b0c.js",revision:"2476c1b4eec117f5cabc5cc67b10fd41"},{url:"assets/index.html-fed8fa2e.js",revision:"e693eda3c1e9dd689099c30b045121cd"},{url:"assets/infoDiagram-64895a6e-33983752.js",revision:"2eb8a672f65ba11d300cfa7531c619c3"},{url:"assets/init-77b53fdd.js",revision:"3ce28180466443e9b617d7b96e9f7b8f"},{url:"assets/intro.html-381fc392.js",revision:"5b91fde202c06a75cf9609161f77522b"},{url:"assets/intro.html-3b0940f6.js",revision:"dc248525900129f09d2adca7cff13a79"},{url:"assets/journeyDiagram-adaa34f8-2b0bea89.js",revision:"2be0c2b6e6a5d2ff98768209a9088ea0"},{url:"assets/KaTeX_AMS-Regular-0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular-30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular-68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold-07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold-1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold-de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular-3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular-5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular-ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold-74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold-9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold-9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular-1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular-51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular-5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold-0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold-138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold-c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic-70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic-99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic-a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic-0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic-97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic-f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular-c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular-c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular-d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic-850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic-dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic-f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic-08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic-7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic-8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold-1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold-e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold-ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic-00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic-3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic-91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular-11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular-68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular-f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular-036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular-1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular-d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular-6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular-95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular-c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular-2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular-a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular-d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular-500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular-6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular-99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular-a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular-c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular-71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular-e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular-f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/layout-ee7a64af.js",revision:"a5d18e0ae86b25b2b2bc944500ba965b"},{url:"assets/league-gothic-38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic-5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic-8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/line-ec2f04be.js",revision:"69e420b65631d0b2bc8d2e85a18c82d0"},{url:"assets/linear-7a3b983d.js",revision:"1a58c173efeb56691e9cb5378515318d"},{url:"assets/markdown.esm-abe06b83.js",revision:"3e2668565c994b015ab82cac0075bf97"},{url:"assets/math.esm-70a288c8.js",revision:"c5f77dc064ac53005c0e5446bb6715b0"},{url:"assets/mermaid.core-cf7b6a8a.js",revision:"dd46dd9d7fa8c8b0cc0f9bc672def028"},{url:"assets/mindmap-definition-57868176-8cda1f04.js",revision:"a2fe16738a74e95f711210ca8194c486"},{url:"assets/notes.esm-a106bb2c.js",revision:"7c95fadebe38cabad55423002748625b"},{url:"assets/ordinal-ba9b4969.js",revision:"3a57ceba2c0d70da5e704aad84f79b46"},{url:"assets/path-53f90ab3.js",revision:"f86c0243cb45746453c6b4f7dbd9f34d"},{url:"assets/photoswipe.esm-5794cde2.js",revision:"2687434a99577ed4fa4b1050a3f0ac90"},{url:"assets/pieDiagram-3fca7ce7-e3857f83.js",revision:"6fac9ebf4b392a71bd7efdc5b74f2b3d"},{url:"assets/plugin-vue_export-helper-c27b6911.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/quadrantDiagram-0ca4be02-b6225a8c.js",revision:"eaf8086dbdd5270242a865fa5fe73abc"},{url:"assets/requirementDiagram-e13af0f0-eada5152.js",revision:"af5dc5f7e04d7acb8f582b5a3eb7ff95"},{url:"assets/reveal.esm-ec5549c1.js",revision:"40498a0448b327f408a5db6b67491b8a"},{url:"assets/sankeyDiagram-a7f8e230-c21de1ef.js",revision:"6423787e14cf110a2147d93377125588"},{url:"assets/search-0782d0d1.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/search.esm-7e6792e2.js",revision:"f1a5e92b2857fcc2c457f7dd03f762f3"},{url:"assets/sequenceDiagram-84aa38e3-6f975da4.js",revision:"f41b180b4afb584f7b357ced27259ce8"},{url:"assets/source-sans-pro-italic-05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic-ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic-d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular-c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular-d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular-dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold-a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold-b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold-ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic-7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic-dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic-e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/stateDiagram-9a586ac6-e5d4bc35.js",revision:"4c61bf0edd7320ef256d8c1ecdaa9807"},{url:"assets/stateDiagram-v2-96f2b9df-46fc5441.js",revision:"c029055ca9a9a7edd7a6b915b790bc6e"},{url:"assets/style-26ead7b2.css",revision:"58095e3757e77baaca26bcfcf8fda7ed"},{url:"assets/styles-1b0c237a-83583bbd.js",revision:"16abe5f93d57ac4144ec5a2342c7d673"},{url:"assets/styles-622362e4-a6ad5b98.js",revision:"653581466c78ea3e44c9ac800ef5db83"},{url:"assets/styles-a1a6e33f-df0076cd.js",revision:"670cd9d0a75c6401adadb95b24aa0d12"},{url:"assets/svgDraw-70101091-17626bcf.js",revision:"b0734914bfd0b3ecbaf6588e471aa6a5"},{url:"assets/svgDrawCommon-42e92da3-f9bf0330.js",revision:"74a3caff4e5ed1fc8aae2e0e8e8eb31f"},{url:"assets/timeline-definition-1a90b03d-ba79ce78.js",revision:"bbd8bd23563ad91a22facb96920d2567"},{url:"assets/utils-a5e1dbae-143be013.js",revision:"7c6f998ca9a809acdca07301595257b8"},{url:"assets/vue-repl-c519ffa3.js",revision:"63dc2fb57e833b3d7bd6954e4064804e"},{url:"assets/VuePlayground-13ed2268.js",revision:"3726c61bb8544e948a2175cb4f46f832"},{url:"assets/zoom.esm-b83b91d0.js",revision:"9ea0d576c1bddb5122016122d8a24c68"},{url:"logo.svg",revision:"d158cad89bd4ee16f84caad47d744e7f"},{url:"404.html",revision:"cb8df4aa473d2998f0ad1a4a7c03ae25"},{url:"article/index.html",revision:"18ea9fcc91420dbe320f823d787c28d3"},{url:"category/index.html",revision:"4b8977f3ab4746ebdd747f65d0e81d4a"},{url:"category/plano-de-curso/index.html",revision:"f7ced06d83fba0f82f1ec20923423c7d"},{url:"index.html",revision:"a579bc165792e8b2f40fca3f7cce414b"},{url:"intro.html",revision:"959b0ea40a6e5351ee458e2065321ff9"},{url:"posts/ementa.html",revision:"27b94edeb5934a26517d7a6dc0e82e6f"},{url:"posts/index.html",revision:"11b9d8a5ca60fae78670b6c740b6aed2"},{url:"star/index.html",revision:"18d84c3d1032c2051748ad81f4145980"},{url:"tag/ementa/index.html",revision:"61b7bac2e2f946c5a32535cc75a9ee4a"},{url:"tag/index.html",revision:"8bf0f5829a35a0da1c5007c395d38c1a"},{url:"timeline/index.html",revision:"8bcbd522a0c2db016491b63b3feea806"},{url:"assets/hero-197a9d2d.jpg",revision:"b62ddd9c4a72085202b5218e4c98fd68"},{url:"assets/icon/icon-144.png",revision:"8445ad1fa6f2a4c5f33a71aad9a30e45"},{url:"assets/icon/icon-152.png",revision:"c3b91b876e7227c8c7cec6b1756c9f41"},{url:"assets/icon/icon-192.png",revision:"285dca4adb0e201e01374f9dd769d652"},{url:"assets/icon/icon-512.png",revision:"c88b22ef4e834ea4bbb4d9152f14d048"},{url:"logo.png",revision:"bbb2548edfb38614fa2c5348b4734609"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
