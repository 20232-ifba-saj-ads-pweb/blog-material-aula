if(!self.define){let e,s={};const a=(a,f)=>(a=new URL(a+".js",f).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(f,d)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let r={};const c=e=>a(e,i),b={module:{uri:i},exports:r,require:c};s[i]=Promise.all(f.map((e=>b[e]||c(e)))).then((e=>(d(...e),r)))}}define(["./workbox-33d91895"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/01_jamstack.html-2e76f249.js",revision:"033be77a967ff0bd01c333d478667843"},{url:"assets/01_jamstack.html-54916526.js",revision:"3445dd08e5dd2900c5e635200cccd065"},{url:"assets/02_HInternet.html-d88789e1.js",revision:"635b35a99ed0e8f19a139f6a8340b191"},{url:"assets/02_HInternet.html-f077ced1.js",revision:"1b8526a45a2cbb3eff54829f778598db"},{url:"assets/02_trabalho.html-4210fef4.js",revision:"3603e68833cf9f19fff6564a6f9fd4b9"},{url:"assets/02_trabalho.html-65e40430.js",revision:"85dd975ace18e694377055b385051f71"},{url:"assets/03_crud.html-a7dc6d35.js",revision:"d415396eaaa1d6a0827e94b4e8c2ad4b"},{url:"assets/03_crud.html-e8e150be.js",revision:"603fe8a2f8af4d9203aee06e201cf785"},{url:"assets/03_HTTP.html-5c2ce385.js",revision:"0b24637af63b0408bc9264dd73e367c7"},{url:"assets/03_HTTP.html-e194db96.js",revision:"3521992ce121bc42da9c6a6da952f5b5"},{url:"assets/04_jamstack.html-6d1639ef.js",revision:"69c4237feaee7bf1fb9b0579aaf4cd3f"},{url:"assets/04_jamstack.html-d343be7b.js",revision:"8a85e93c6d2041a267a4a5c78cf0b66f"},{url:"assets/05_Wireframe.html-5a8ada18.js",revision:"f782425948f7421e5a39ef8b35965fe2"},{url:"assets/05_Wireframe.html-b491e21d.js",revision:"41c8903cfccd97562f32f58f3eedbe7e"},{url:"assets/06_HTML.html-989237a8.js",revision:"248fe0a2ef0d834837e55bcb8e6fdc95"},{url:"assets/06_HTML.html-bf63939b.js",revision:"681f014bd9ab6286085f55be161e668f"},{url:"assets/07_CSS.html-87f77072.js",revision:"ec5ca9f7f30ed0127771249d6922a2f1"},{url:"assets/07_CSS.html-ad17b643.js",revision:"1fc635fb8478af306b1bc1fec9a96b2a"},{url:"assets/08_CSSFlexbox.html-3e16314e.js",revision:"2b4f0dd951080adee5796bfa99693185"},{url:"assets/08_CSSFlexbox.html-9aa66cbc.js",revision:"d1426bcf310f1296e8d6f21c0f3ffbfd"},{url:"assets/09_CSSFrameworks.html-134a1b59.js",revision:"559f0f06ddc4e95e88be1167fdfea6f5"},{url:"assets/09_CSSFrameworks.html-dded36fe.js",revision:"46493e5db1cdcab5e664308c4fd521d9"},{url:"assets/10_JavaScript.html-248713a2.js",revision:"e80b4a0bbd99ebda7d09c9fc76768f2c"},{url:"assets/10_JavaScript.html-411bab5b.js",revision:"d349a835361b78e880acb4882d7729de"},{url:"assets/11_FrameWorksFrontend.html-95309ebb.js",revision:"68cba42daac4902a193abb91a98ff721"},{url:"assets/11_FrameWorksFrontend.html-cab0e7c0.js",revision:"4e50b19fd67f08169cf39caf327f61fb"},{url:"assets/12_HillaFramework.html-22cd73c7.js",revision:"84d91d0ad0bfc45ff8f9b306aa9fabb8"},{url:"assets/12_HillaFramework.html-74937ca7.js",revision:"c4af9b58dcd6f58f0d2beb7ccc137b31"},{url:"assets/13_HTML_Form.html-2b40b613.js",revision:"138982709c179b82f34114c8e5ca7839"},{url:"assets/13_HTML_Form.html-37f1ba41.js",revision:"7889d864c743f49201287015f9982fa6"},{url:"assets/404.html-23719e93.js",revision:"85359bbb1d837f2c73be0405ff79e4c4"},{url:"assets/404.html-31c85357.js",revision:"652781ba33c932333dc08ad2235d9d7c"},{url:"assets/app-fa57315c.js",revision:"891afa880335999886fe3a4a9baa0cce"},{url:"assets/arc-055420bd.js",revision:"0737ea806d9c6376b7b6c0a3dc7a43f7"},{url:"assets/array-9f3ba611.js",revision:"17dcebeaf673b09a1ca5da014d20022f"},{url:"assets/auto-fe80bb03.js",revision:"9d99a020735f021d88a203c78f7e0ee0"},{url:"assets/bib.html-28bd0a0f.js",revision:"aa7f8ea61517e9c2930149bd960bd69f"},{url:"assets/bib.html-358908ec.js",revision:"e76595a65d62bd990cc9d0d92f5aab6b"},{url:"assets/c4Diagram-c0b17d02-52cf4b05.js",revision:"4250d9c10d3dd7f3b8acd9e85546766a"},{url:"assets/classDiagram-a8cc8886-35dc1a8c.js",revision:"95ff54194f7f3cbf3344fff7822b4bfe"},{url:"assets/classDiagram-v2-802a48d3-532bb2c8.js",revision:"05963d41e571e71ec9d535a7bfe2a580"},{url:"assets/codemirror-editor-09740661.js",revision:"1bd5def80605bdfb8ed3c097cec84f13"},{url:"assets/commonjs-dynamic-modules-302442b1.js",revision:"2afbf9a8021b44e8591299a7a7dbfc94"},{url:"assets/commonjsHelpers-de833af9.js",revision:"e2be7f3e66571d8f9280caf91c5e9b86"},{url:"assets/createText-3b1f58a4-6e019d7d.js",revision:"7af38a368390df4f4183e461b7440909"},{url:"assets/edges-0005682e-1074d430.js",revision:"7cfcbf053f19ae69f034a0c051d02c8b"},{url:"assets/ementa.html-d348d112.js",revision:"d444eeee83f87db6c386be6e2617a83c"},{url:"assets/ementa.html-d4b4ff7b.js",revision:"3f22a238526e937d24d5cac1cf0ace70"},{url:"assets/erDiagram-dedf2781-0e0775b2.js",revision:"16d5da6996fa015ebc16d7b3ec546a8f"},{url:"assets/flowchart-c441f34d.js",revision:"d0922e56732b0ff9f2eb72eccb4e7e36"},{url:"assets/flowchart-elk-definition-56584a6c-35e60b7f.js",revision:"bbff9c5c86dff20c7949337e48389b0c"},{url:"assets/flowDb-ff651a22-eda51875.js",revision:"c1fe78fc5365507fa8c7aa4ac67d24fd"},{url:"assets/flowDiagram-d6f8fe3a-922a4588.js",revision:"810bcc012fba970183c6dff7c7d16f85"},{url:"assets/flowDiagram-v2-58f49b84-cda30e52.js",revision:"c17f47c805f626bdbf0bc64dc6eab014"},{url:"assets/ganttDiagram-088dbd90-97aefd44.js",revision:"c4120ca7b9f1037ffbdb1defd4cdf225"},{url:"assets/gitGraphDiagram-e0ffc2d1-cedd5b3e.js",revision:"f555d179c840d2f0e2e2cfa7dcd772dd"},{url:"assets/highlight.esm-75b11b9d.js",revision:"5d33e8aa724e0f03a23564f7c03bc7f5"},{url:"assets/index-2bf332f6.js",revision:"15b6a4a48574f26d02d692ce0cac07fb"},{url:"assets/index-e32a7948.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index-f58d48f9-774037df.js",revision:"c6a89826e9cbc1f8fe5121b043e2167b"},{url:"assets/index.html-00a64f49.js",revision:"3405072dc46e036f96edbf195a40b023"},{url:"assets/index.html-0128aa4f.js",revision:"1c18fdb7cb59c0ae14df55f6b86698b9"},{url:"assets/index.html-018ecc46.js",revision:"96b85afeefea728daca2c6afb22ed94f"},{url:"assets/index.html-08e78938.js",revision:"b89a703bb4a35ba4fb1eb91254623c56"},{url:"assets/index.html-09c5ef93.js",revision:"3405072dc46e036f96edbf195a40b023"},{url:"assets/index.html-0a491570.js",revision:"79955c03c3c9aaa019b17179b37f8925"},{url:"assets/index.html-1182eeb5.js",revision:"3405072dc46e036f96edbf195a40b023"},{url:"assets/index.html-1a6bad18.js",revision:"3405072dc46e036f96edbf195a40b023"},{url:"assets/index.html-1b421771.js",revision:"3405072dc46e036f96edbf195a40b023"},{url:"assets/index.html-1bf5228a.js",revision:"3405072dc46e036f96edbf195a40b023"},{url:"assets/index.html-235e7324.js",revision:"4aa6cd72e6c5166f4ca49d6e9375b6f7"},{url:"assets/index.html-2edb8412.js",revision:"3405072dc46e036f96edbf195a40b023"},{url:"assets/index.html-2f8ab32e.js",revision:"3405072dc46e036f96edbf195a40b023"},{url:"assets/index.html-30f29609.js",revision:"7d93cdd9d927302f09b1d8ddae1d5cee"},{url:"assets/index.html-376b5156.js",revision:"8304075c03e2449966effbcc8d17458b"},{url:"assets/index.html-3a7dc4f6.js",revision:"3405072dc46e036f96edbf195a40b023"},{url:"assets/index.html-3aab5c51.js",revision:"5385d54a65fe95ceaba52fb10f01a4a6"},{url:"assets/index.html-3d0d37c1.js",revision:"869d5c929906c4be1eeb8bf6530da57d"},{url:"assets/index.html-3ebf10b0.js",revision:"3405072dc46e036f96edbf195a40b023"},{url:"assets/index.html-40242471.js",revision:"27dcd2dee4bebe1cdcf3030d5b246dc8"},{url:"assets/index.html-4c22ca76.js",revision:"3405072dc46e036f96edbf195a40b023"},{url:"assets/index.html-4cc6da7b.js",revision:"3405072dc46e036f96edbf195a40b023"},{url:"assets/index.html-4e35b838.js",revision:"5cab9b1212d6d6c33a5c230a303b3e92"},{url:"assets/index.html-4f78eea6.js",revision:"3405072dc46e036f96edbf195a40b023"},{url:"assets/index.html-5421a0f1.js",revision:"5e99c66246ae021fd0bcb88b0a332152"},{url:"assets/index.html-5c577d75.js",revision:"27dcd2dee4bebe1cdcf3030d5b246dc8"},{url:"assets/index.html-60ef62ef.js",revision:"3405072dc46e036f96edbf195a40b023"},{url:"assets/index.html-61d92a5f.js",revision:"8dc78da75087b27bdadb484c45bf70f8"},{url:"assets/index.html-625e4f93.js",revision:"69f91d92b3c2167343a50147959d56d8"},{url:"assets/index.html-652c7bca.js",revision:"3405072dc46e036f96edbf195a40b023"},{url:"assets/index.html-65834d18.js",revision:"3405072dc46e036f96edbf195a40b023"},{url:"assets/index.html-65c68b25.js",revision:"37447e0373b29c31f2000d55b7f01ec0"},{url:"assets/index.html-6953dfbf.js",revision:"9524fcf08def981370e06ab26f0f4e9a"},{url:"assets/index.html-6958bfeb.js",revision:"24b4695de46b6fc13cf213f843808034"},{url:"assets/index.html-6ad9b735.js",revision:"3405072dc46e036f96edbf195a40b023"},{url:"assets/index.html-722e52c8.js",revision:"3405072dc46e036f96edbf195a40b023"},{url:"assets/index.html-785b9a7b.js",revision:"1fd9339644e4cd1a9240934e97839fe6"},{url:"assets/index.html-7cdffd90.js",revision:"21d09bed5faa312f2ec437e6ed4ad157"},{url:"assets/index.html-87205c94.js",revision:"ab2bc7ecc64dc908416279a96b13b161"},{url:"assets/index.html-8774a72d.js",revision:"2044ede173a110190a691b2531f3895d"},{url:"assets/index.html-986386dd.js",revision:"45c32d5cf3c35ffd8f80ec846d97086a"},{url:"assets/index.html-a0337583.js",revision:"3405072dc46e036f96edbf195a40b023"},{url:"assets/index.html-a08e9665.js",revision:"da1e0beca7dc6a824eb6f2d90cc305bc"},{url:"assets/index.html-a1113326.js",revision:"c6b16992ef017c2bc8ade2047197fd92"},{url:"assets/index.html-a355a4d9.js",revision:"27dcd2dee4bebe1cdcf3030d5b246dc8"},{url:"assets/index.html-a399f150.js",revision:"e635bb12ca5a75e945f6641d7006f13b"},{url:"assets/index.html-bb138b96.js",revision:"3405072dc46e036f96edbf195a40b023"},{url:"assets/index.html-c1889a64.js",revision:"3405072dc46e036f96edbf195a40b023"},{url:"assets/index.html-c6a55ad8.js",revision:"3405072dc46e036f96edbf195a40b023"},{url:"assets/index.html-c70d2753.js",revision:"3405072dc46e036f96edbf195a40b023"},{url:"assets/index.html-cd8ba5eb.js",revision:"3405072dc46e036f96edbf195a40b023"},{url:"assets/index.html-d0343e87.js",revision:"27dcd2dee4bebe1cdcf3030d5b246dc8"},{url:"assets/index.html-d42b3b97.js",revision:"5022cc1d2db5aee1716f09ef5e83f1c2"},{url:"assets/index.html-d53ca639.js",revision:"9d399fad572b5a2950fd219bdf9b26a6"},{url:"assets/index.html-d8392e34.js",revision:"3405072dc46e036f96edbf195a40b023"},{url:"assets/index.html-dbbf0653.js",revision:"be4aceaaf0274f2574d08b6729f13a63"},{url:"assets/index.html-dfed0ee6.js",revision:"ef368fc54222486624acfdd65674abe5"},{url:"assets/index.html-e5193922.js",revision:"3405072dc46e036f96edbf195a40b023"},{url:"assets/index.html-e62ddc56.js",revision:"3405072dc46e036f96edbf195a40b023"},{url:"assets/index.html-e6b6f51b.js",revision:"419739a44e74c53237386e331c01a6ed"},{url:"assets/index.html-e781df36.js",revision:"3405072dc46e036f96edbf195a40b023"},{url:"assets/index.html-e7a5554d.js",revision:"e108fcc5d518ea1cb244f65554912a65"},{url:"assets/index.html-e7c1015f.js",revision:"92002e1e80f2ebfbcd64317a9f996205"},{url:"assets/index.html-f00483fb.js",revision:"3405072dc46e036f96edbf195a40b023"},{url:"assets/index.html-f14ff23d.js",revision:"872483e3642e01ab9ab3b3f050049bc2"},{url:"assets/index.html-f15dc760.js",revision:"3405072dc46e036f96edbf195a40b023"},{url:"assets/index.html-f5b9a3f2.js",revision:"3a3a0c8d94c5ee7eebcc0595a8ecb7ac"},{url:"assets/index.html-f9ff9d88.js",revision:"3405072dc46e036f96edbf195a40b023"},{url:"assets/index.html-fb38af47.js",revision:"c7888afa76578e9a1aa5b0b18205eaff"},{url:"assets/index.html-fe35e8dd.js",revision:"3405072dc46e036f96edbf195a40b023"},{url:"assets/index.html-fed8fa2e.js",revision:"e693eda3c1e9dd689099c30b045121cd"},{url:"assets/index.html-ff66c0ec.js",revision:"2aa1f9634eda300153a2175f1a07bf53"},{url:"assets/infoDiagram-64895a6e-81062491.js",revision:"1e3b65e7aa246e2ad419bfaa3ef83f4f"},{url:"assets/init-77b53fdd.js",revision:"3ce28180466443e9b617d7b96e9f7b8f"},{url:"assets/intro.html-3b0940f6.js",revision:"dc248525900129f09d2adca7cff13a79"},{url:"assets/intro.html-7d04e741.js",revision:"1bc756a9dc45a2c9e67ee09338c7378e"},{url:"assets/journeyDiagram-adaa34f8-fe7328bb.js",revision:"139f7aacd27c80aab7f276b00c43686f"},{url:"assets/KaTeX_AMS-Regular-0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular-30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular-68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold-07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold-1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold-de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular-3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular-5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular-ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold-74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold-9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold-9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular-1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular-51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular-5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold-0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold-138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold-c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic-70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic-99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic-a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic-0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic-97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic-f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular-c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular-c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular-d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic-850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic-dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic-f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic-08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic-7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic-8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold-1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold-e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold-ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic-00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic-3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic-91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular-11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular-68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular-f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular-036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular-1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular-d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular-6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular-95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular-c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular-2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular-a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular-d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular-500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular-6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular-99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular-a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular-c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular-71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular-e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular-f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/Keycloak.html-33d928e9.js",revision:"9ee0434fe4397ce0a2eea0fccd6e58fa"},{url:"assets/Keycloak.html-de0b4734.js",revision:"cc701a02f0921ef6c13b0f3d4c3bbb72"},{url:"assets/layout-b3d33fb7.js",revision:"99b18177a381573c2d93fb8bfa81759f"},{url:"assets/league-gothic-38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic-5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic-8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/line-7c0bad64.js",revision:"a42606b404d5caebc686518cf006d66f"},{url:"assets/linear-199938f8.js",revision:"20176e9683886bc0419c07c068c389f6"},{url:"assets/markdown.esm-abe06b83.js",revision:"3e2668565c994b015ab82cac0075bf97"},{url:"assets/math.esm-70a288c8.js",revision:"c5f77dc064ac53005c0e5446bb6715b0"},{url:"assets/mermaid.core-8d29ab69.js",revision:"f3568477c6dae7c8657f216d3078e2d4"},{url:"assets/mindmap-definition-57868176-87c00740.js",revision:"13b4daae2959f8153ebc8f25a33e32d9"},{url:"assets/notes.esm-a106bb2c.js",revision:"7c95fadebe38cabad55423002748625b"},{url:"assets/ordinal-ba9b4969.js",revision:"3a57ceba2c0d70da5e704aad84f79b46"},{url:"assets/path-53f90ab3.js",revision:"f86c0243cb45746453c6b4f7dbd9f34d"},{url:"assets/photoswipe.esm-5794cde2.js",revision:"2687434a99577ed4fa4b1050a3f0ac90"},{url:"assets/pieDiagram-3fca7ce7-b62fd1fe.js",revision:"b73ef14288fd15869c2fffeba844d1ed"},{url:"assets/plugin-vue_export-helper-c27b6911.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/quadrantDiagram-0ca4be02-7a8a8b77.js",revision:"808a18a848533296c2b74e6de2348d00"},{url:"assets/requirementDiagram-e13af0f0-02b77dfa.js",revision:"0b9fb1b3557a65bcc338ecadccdabbbb"},{url:"assets/reveal.esm-ec5549c1.js",revision:"40498a0448b327f408a5db6b67491b8a"},{url:"assets/sankeyDiagram-a7f8e230-193aa4c8.js",revision:"92d79b7d1b94bc6ebe31f9a5fd94e138"},{url:"assets/search-0782d0d1.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/search.esm-7e6792e2.js",revision:"f1a5e92b2857fcc2c457f7dd03f762f3"},{url:"assets/sequenceDiagram-84aa38e3-fb39a8fe.js",revision:"dd14996ed6c55dc943dcb578885e3676"},{url:"assets/source-sans-pro-italic-05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic-ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic-d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular-c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular-d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular-dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold-a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold-b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold-ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic-7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic-dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic-e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/stateDiagram-9a586ac6-c736e33d.js",revision:"b8f24579dd25fe975e57e8effc171db6"},{url:"assets/stateDiagram-v2-96f2b9df-98133600.js",revision:"74a531f8acb5b2f3a137396f967cfefd"},{url:"assets/style-2d30a605.css",revision:"68948347c059f77a0719feabfcf26737"},{url:"assets/styles-1b0c237a-fa33fd0b.js",revision:"96cc99fb8b9a40d5cabfb0aeb93e17b2"},{url:"assets/styles-622362e4-28cd15f7.js",revision:"de04e1c9dadd5093ffd9dbd8b2f1c9d0"},{url:"assets/styles-a1a6e33f-66c2f498.js",revision:"d0207504dbb198d39455c771af5925b8"},{url:"assets/svgDraw-70101091-e541b946.js",revision:"0251edea9c1dfd51499b220d259ea6eb"},{url:"assets/svgDrawCommon-42e92da3-25fa64e7.js",revision:"d96ac249c2c135675a08aa01b4ed53fc"},{url:"assets/timeline-definition-1a90b03d-fae63e7a.js",revision:"e58869b069c01f49358bfcf08836f3ee"},{url:"assets/utils-a5e1dbae-143be013.js",revision:"7c6f998ca9a809acdca07301595257b8"},{url:"assets/vue-repl-eb42b27d.js",revision:"db117daaa72b641fd202c2845f6476ef"},{url:"assets/VuePlayground-af77a067.js",revision:"82a799c4a1fa380f53b53c2add679c24"},{url:"assets/zoom.esm-b83b91d0.js",revision:"9ea0d576c1bddb5122016122d8a24c68"},{url:"logo.svg",revision:"d158cad89bd4ee16f84caad47d744e7f"},{url:"404.html",revision:"66c29dbaa3dd7bee77ebd8344d626f1a"},{url:"article/index.html",revision:"519937fe1f5dbfcd9f7bc25492828f7f"},{url:"bib/bib.html",revision:"a6ea307d8ce41ed17eebd7d6b33a3404"},{url:"bib/index.html",revision:"c6323ccfeb22e0026ed22184a84e5ab5"},{url:"category/aula/index.html",revision:"d0c1471e423ab9685341661854c50498"},{url:"category/entrega/index.html",revision:"0ab4e349a9542621e8d72b6663a764ee"},{url:"category/exercicio/index.html",revision:"2881bc0c5f21d291b68e74aa7b48b339"},{url:"category/index.html",revision:"3c004454f2cae04990cd1a944c5688fb"},{url:"category/plano-de-curso/index.html",revision:"18250700312b4dd68afabcfe251607d6"},{url:"category/pweb/index.html",revision:"0ae4c599e9330e2eb0575d11482ee216"},{url:"draft/index.html",revision:"8dc3b0aea37e1e5a47ce763605dcd10c"},{url:"draft/Keycloak.html",revision:"b32cf37bd07d360afe3e6787679b2481"},{url:"index.html",revision:"8ef0745c3d2974c3210cb4d5998868d6"},{url:"intro.html",revision:"96c877d98f57c1a84c805f712546ed5a"},{url:"posts/02_HInternet.html",revision:"763fdf7984419e5a83c14aee91a5e465"},{url:"posts/03_HTTP.html",revision:"0d6060dd9cce98512bd503bcc0b6ae3e"},{url:"posts/04_jamstack.html",revision:"5966b7988b4278fd7003a73af423bbf0"},{url:"posts/05_Wireframe.html",revision:"b03920efce5fb71afa0379bbd5883bc8"},{url:"posts/06_HTML.html",revision:"18fdf4194302e484821af96c56f83f7a"},{url:"posts/07_CSS.html",revision:"b847afffe7476db09ed6656ab0908cec"},{url:"posts/08_CSSFlexbox.html",revision:"5f2c1c1a19afa463259b876a680f762f"},{url:"posts/09_CSSFrameworks.html",revision:"30495507808541781771025daef31eb6"},{url:"posts/10_JavaScript.html",revision:"df5b2ad451a355ca1408e650bd23d2fe"},{url:"posts/11_FrameWorksFrontend.html",revision:"b30835497d7c4481978944f1b9d3a249"},{url:"posts/12_HillaFramework.html",revision:"88742bf950e40c97ccc663d494bc3fb7"},{url:"posts/13_HTML_Form.html",revision:"a271b845a59f96ffb2a5e3c5928edf53"},{url:"posts/ementa.html",revision:"7af55f6ff9fd5001c0809964b73cba1a"},{url:"posts/exercicios/01_jamstack.html",revision:"144e991c32f3893e7e0550103d07b76b"},{url:"posts/exercicios/02_trabalho.html",revision:"af8a92ff6fcad1072eb7d14f8f1e2111"},{url:"posts/exercicios/03_crud.html",revision:"c7ba29a881534f69ee58ba1696916855"},{url:"posts/exercicios/index.html",revision:"d79a6e39ed9720ac03316467b9711402"},{url:"posts/index.html",revision:"f0f9f54faab4a7740a81e7f1d4bb2e51"},{url:"star/index.html",revision:"f16de387b978ce05ee9aee15404835eb"},{url:"tag/crud/index.html",revision:"3d8839f4c6e8bec71de1a994ed61da68"},{url:"tag/css/index.html",revision:"71932a7451f9561a61b2c214e0dbc0e1"},{url:"tag/ementa/index.html",revision:"4e98b4784df0279f9964976fdfd50b3f"},{url:"tag/flexbox/index.html",revision:"cb4d5a530780c3bb73a494f1d4ef2766"},{url:"tag/form/index.html",revision:"fafb05a99da3918b940333ac3a905807"},{url:"tag/frameworks/index.html",revision:"534e665754639458f05f8ab257ee985d"},{url:"tag/frontend/index.html",revision:"5f1a21994d5845dc92a09b88a4e79cdd"},{url:"tag/hilla/index.html",revision:"5158b994c53b2e1c5ba9a8b83f6eb877"},{url:"tag/história/index.html",revision:"e41051908f3f351bb297569bb73b898b"},{url:"tag/html/index.html",revision:"a5d39a84d1e191a40aa4aeb3c5507c01"},{url:"tag/http/index.html",revision:"002c1a12dce69f56b098844e3c71c4ab"},{url:"tag/index.html",revision:"7aecf1848572dd7414dce2631cf73350"},{url:"tag/internet/index.html",revision:"253209459a4617540547a765018a0892"},{url:"tag/jamstack/index.html",revision:"2597e8f4200c8feb86e6e8d6d8e82a14"},{url:"tag/javascript/index.html",revision:"f4cd51a09a866c09e13c6d823e7413a1"},{url:"tag/less/index.html",revision:"1e6427e91bed98c0877faa10681bc7bb"},{url:"tag/preprocessador/index.html",revision:"02cbe998ecafc37c12c699288a641592"},{url:"tag/sass/index.html",revision:"f001eab8be0322c42231ca22a0412266"},{url:"tag/scss/index.html",revision:"d5ab372cfcaf46dfe64cddc05293bf40"},{url:"tag/typescript/index.html",revision:"d402548d4d3bff04af43460bc6b1162c"},{url:"tag/vaadin/index.html",revision:"6fccd38f46f55db347e7cba52112c5fa"},{url:"tag/wireframe/index.html",revision:"1486c499c699bf32722e2183fe2f00e1"},{url:"timeline/index.html",revision:"4cf6fcfbf0f8ec43f74bb4b9a449e9b2"},{url:"assets/hero-197a9d2d.jpg",revision:"b62ddd9c4a72085202b5218e4c98fd68"},{url:"assets/icon/icon-144.png",revision:"8445ad1fa6f2a4c5f33a71aad9a30e45"},{url:"assets/icon/icon-152.png",revision:"c3b91b876e7227c8c7cec6b1756c9f41"},{url:"assets/icon/icon-192.png",revision:"285dca4adb0e201e01374f9dd769d652"},{url:"assets/icon/icon-512.png",revision:"c88b22ef4e834ea4bbb4d9152f14d048"},{url:"assets/Image_0-44135785.png",revision:"2b1d524d8b55bb9decb8ac58e55126f0"},{url:"logo.png",revision:"bbb2548edfb38614fa2c5348b4734609"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map