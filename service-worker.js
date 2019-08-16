/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/design-first-docs/2014/03/22/vuejs-010-release/index.html","a5aea39078f55e9a01895a7792c044c5"],["/design-first-docs/2014/07/29/vue-next/index.html","a742b6ecbcfc85342650f83b575e5f04"],["/design-first-docs/2014/11/09/vue-011-release/index.html","7e2cec4dd8b672486f9c76f6e2a6884b"],["/design-first-docs/2014/12/08/011-component/index.html","c855df7fdc5d6cf45bad1243f9287347"],["/design-first-docs/2015/06/11/012-release/index.html","7bb620d889e0451bb1e0025b6e869186"],["/design-first-docs/2015/10/26/1.0.0-release/index.html","41217c843c28862b5b2a4ecb82e39aae"],["/design-first-docs/2015/10/28/why-no-template-url/index.html","11edff80a6c5bd611874b7f5a49afaa1"],["/design-first-docs/2015/12/28/vue-cli/index.html","f984bf95582542314abb3f7118dac7a1"],["/design-first-docs/2016/02/06/common-gotchas/index.html","d9660c5c8f081f303a021d214ec9ab10"],["/design-first-docs/2016/03/14/march-update/index.html","11e29d32c66c0b5c2df4ac4470d05f13"],["/design-first-docs/2016/04/27/announcing-2.0/index.html","9d1ed8572031b81b908486ecb4760bd7"],["/design-first-docs/api/index.html","5bd8945b312069b3c7038f30c9f188a4"],["/design-first-docs/archives/2014/03/index.html","158e73d282b3fa9d0198aed550e1c913"],["/design-first-docs/archives/2014/07/index.html","2fb0de7cb218fdaccaa03249fbed5d01"],["/design-first-docs/archives/2014/11/index.html","29176af7c753d546601de18e784dd949"],["/design-first-docs/archives/2014/12/index.html","854d0f9484fcbc4ba65762cd4a354fc4"],["/design-first-docs/archives/2014/index.html","7af875dae4c56881aa7b183ef265f95c"],["/design-first-docs/archives/2015/06/index.html","a41d3040d2e0ca791000b4a53c87aeb8"],["/design-first-docs/archives/2015/10/index.html","92b9850504e02de6f45266ce8eef1720"],["/design-first-docs/archives/2015/12/index.html","fae9f3db1815e56832ce46bd79d3d296"],["/design-first-docs/archives/2015/index.html","882acc968d92354ff9ff1dbec51b7256"],["/design-first-docs/archives/2016/02/index.html","bf6ab306fb0ed9a4f804b4ce9c0f3d89"],["/design-first-docs/archives/2016/03/index.html","ada0f6c16af7ea449a21cb24fe3a6a78"],["/design-first-docs/archives/2016/04/index.html","365922442f1844dd7ebe32780047ec30"],["/design-first-docs/archives/2016/index.html","98932c1e67e6a6c776e9a057f0aa6731"],["/design-first-docs/archives/index.html","051451b5e02e930a330130a7639a9bc8"],["/design-first-docs/archives/page/2/index.html","049fa0eb25dc28a96f6f130b26638168"],["/design-first-docs/atom.xml","5afeef036c0274529d04c08e87ca42ba"],["/design-first-docs/browserconfig.xml","a9461fcba28550a616a19a0aee8450ac"],["/design-first-docs/coc/index.html","b5536901b9931d9e83fca37d3e7d6279"],["/design-first-docs/css/benchmark.css","b083e0006589a5ba88a250eb8ee12cc5"],["/design-first-docs/css/index.css","a6b018b24d3bd5d58f6edeb65790ac25"],["/design-first-docs/css/page.css","d6c6d7455c037348554099d3e908a3c1"],["/design-first-docs/css/search.css","98bc5fed33d9deaea04ed36de435afd7"],["/design-first-docs/examples/commits.html","0e092092324e951041d3ee5cb25fea36"],["/design-first-docs/examples/passport-todos.html","d9c54ff1cf5c0cd9f3bf6c137f960aec"],["/design-first-docs/examples/todos.html","a2c1143978a638ec7e023dec000d002c"],["/design-first-docs/images/aaha.png","77bfeb59f772f37444c9cefe00785cf2"],["/design-first-docs/images/accelebrate.png","e030e08131cebe8b43c89df18d710ded"],["/design-first-docs/images/alligator_io.svg","1ffe0191e22a65337f9cb224790f5222"],["/design-first-docs/images/bacancy_technology.png","9a0590eb4ce29289b454240415611162"],["/design-first-docs/images/bestvpn_co.png","afbe252b6b59bc3cdac2e7dec69eac39"],["/design-first-docs/images/bit.png","9638a3f44bf471876effb80ea0659f73"],["/design-first-docs/images/blokt_cryptocurrency_news.png","1517a40ef0fafa2968313c2febef3ad3"],["/design-first-docs/images/breakpoint_hit.png","114924925a4ec0f23236012bc3dc8422"],["/design-first-docs/images/breakpoint_set.png","6439856732303cfeb3806d52dd681191"],["/design-first-docs/images/chaitin.png","549e43997790dc624c477424acbfe228"],["/design-first-docs/images/check.png","c634675b753a1a03b587c43d8b535600"],["/design-first-docs/images/cloudstudio.png","fc480cf4c2b06591f58e7e91666226af"],["/design-first-docs/images/coding.png","10c55345da3c2374563b096f5c86d781"],["/design-first-docs/images/coin-bch.png","ddfab54149483e02f3cd540a47e2782b"],["/design-first-docs/images/coin-btc.png","d90559bb202766dd6ddabf71dd1680be"],["/design-first-docs/images/coin-eth.png","70ae70292937880fe9e77c2c7dc38f86"],["/design-first-docs/images/coin-ltc.png","9e756bd611ac7355515153cecbc20d36"],["/design-first-docs/images/components.png","b5c08269dfc26ae6d7db3801e9efd296"],["/design-first-docs/images/config_add.png","353cd8b2a1bdf9fc4c74a80c5f38090a"],["/design-first-docs/images/daily.png","c9a8b2a897dba41c7d5aa6f9cd876d82"],["/design-first-docs/images/data.png","5de7af21d4c2de951720c006f84b98fc"],["/design-first-docs/images/dcloud.gif","ade7c64e66506b6cff10292efea16ee8"],["/design-first-docs/images/derek_pollard.png","b1c4d535b619865d80d6cf1b2e370300"],["/design-first-docs/images/devexpress.png","a6d9c786a373088c8d238ca643293c17"],["/design-first-docs/images/devsquad.png","e639ea4fd0d7053fc0928d4ff9fefb2a"],["/design-first-docs/images/devtools-storage-chrome.png","ac1f3b275b87e2fec9c4df951347be81"],["/design-first-docs/images/devtools-storage-edge.png","3e92a3bea017b8398e71db0a2419a191"],["/design-first-docs/images/devtools-storage.png","e742c3b1d526bee7be77c050f4bffc92"],["/design-first-docs/images/devtools-timetravel.gif","fca84f3fb8a8d10274eb2fc7ed9b65f9"],["/design-first-docs/images/dom-tree.png","f70b86bfbbfe1962dc5d6125105f1122"],["/design-first-docs/images/dopamine.png","17222090b66cfca59f1ccf8b9843f595"],["/design-first-docs/images/down.png","2f948222df409af3121254d5fe0ed377"],["/design-first-docs/images/earthlink.png","88f1bd15252b11484834176965844e22"],["/design-first-docs/images/energy_comparison.png","1f3f2809057b867842c99679e2723b3e"],["/design-first-docs/images/fastcoding_inc.svg","ff35e14cb519fe5d76e6e8d9444e4fa6"],["/design-first-docs/images/feed.png","a9bbd11a96e1cbcc49bf8fa857a0d70f"],["/design-first-docs/images/firestick_tricks.png","1ee05223a5b12fe910cb8428d57223d8"],["/design-first-docs/images/frontend_love.png","b514babc53a0f3ddc854b0b14a54a489"],["/design-first-docs/images/gitee.png","429b3c31a180461c4fb66e5ac20e1385"],["/design-first-docs/images/gridsome.png","e82a2f872ec319bbb5d0a804288cd9b7"],["/design-first-docs/images/hn-architecture.png","b42f49a4e265649f870685b171e4b170"],["/design-first-docs/images/hn.png","99176cdebac521e823be519aef514bb3"],["/design-first-docs/images/html_burger.png","c7ce1344d001e7a236a89694ed59d988"],["/design-first-docs/images/icons.png","ad6ee8c400066e15712cdef4342023da"],["/design-first-docs/images/icons/android-icon-144x144.png","e67b8d54852c2fbf40be2a8eb0590f5b"],["/design-first-docs/images/icons/android-icon-192x192.png","5d10eaab941eb596ee59ffc53652d035"],["/design-first-docs/images/icons/android-icon-36x36.png","bb757d234def1a6b53d793dbf4879578"],["/design-first-docs/images/icons/android-icon-48x48.png","0d33c4fc51e2bb020bf8dd7cd05db875"],["/design-first-docs/images/icons/android-icon-72x72.png","702c4fafca31d670f9bd8b2d185ced39"],["/design-first-docs/images/icons/android-icon-96x96.png","0ebff702851985ea6ba891cf6e6e7ddd"],["/design-first-docs/images/icons/apple-icon-114x114.png","f4fd30f3a26b932843b8c5cef9f2186e"],["/design-first-docs/images/icons/apple-icon-120x120.png","b6a574d63d52ef9c89189b67bcac5cbd"],["/design-first-docs/images/icons/apple-icon-144x144.png","e67b8d54852c2fbf40be2a8eb0590f5b"],["/design-first-docs/images/icons/apple-icon-152x152.png","f53787bf41febf2b044931a305ccaf2a"],["/design-first-docs/images/icons/apple-icon-180x180.png","9f6b1e3b92b2c5bd5b7d79501bb6e612"],["/design-first-docs/images/icons/apple-icon-57x57.png","83f622ba0994866abc56ace068b6551c"],["/design-first-docs/images/icons/apple-icon-60x60.png","643f761bc39f86c70f17cd1fed3b8e08"],["/design-first-docs/images/icons/apple-icon-72x72.png","702c4fafca31d670f9bd8b2d185ced39"],["/design-first-docs/images/icons/apple-icon-76x76.png","94d9af047b86d99657b5efb88a0d1c7b"],["/design-first-docs/images/icons/apple-icon-precomposed.png","707758f591323153a4f1cb3a8d9641fa"],["/design-first-docs/images/icons/apple-icon.png","707758f591323153a4f1cb3a8d9641fa"],["/design-first-docs/images/icons/bacancy_technology.png","5810bb8253b1e35ba437373ff83f82d3"],["/design-first-docs/images/icons/favicon-16x16.png","a5a9da66870189b0539223c38c8a7749"],["/design-first-docs/images/icons/favicon-32x32.png","3d60db0d77303b2414ddd50cf2472bf7"],["/design-first-docs/images/icons/favicon-96x96.png","0ebff702851985ea6ba891cf6e6e7ddd"],["/design-first-docs/images/icons/ms-icon-144x144.png","e67b8d54852c2fbf40be2a8eb0590f5b"],["/design-first-docs/images/icons/ms-icon-150x150.png","e8cdf492981122a2548bc247c7b4067d"],["/design-first-docs/images/icons/ms-icon-310x310.png","1721f8303ec2349002b5980a01f27cef"],["/design-first-docs/images/icons/ms-icon-70x70.png","a110cf0132b00b23a8605ca72a8874ba"],["/design-first-docs/images/icons_8.png","ffcdd01817ecdb32b92bd2f1e4d75e84"],["/design-first-docs/images/inkoop.png","1cff77d2c927657d3aceeba2c12db892"],["/design-first-docs/images/intygrate.png","fdd390b44a4aeed763f53f4e8f6529e4"],["/design-first-docs/images/isle_of_code.png","42f662ab71b943889f8f8b56515350f2"],["/design-first-docs/images/jqwidgets_.png","b6a0a55c85816adb196e1f7450a7f3d7"],["/design-first-docs/images/jqwidgets_ltd.png","6d209e39ca89483f3677ae859edca4d7"],["/design-first-docs/images/laravel.png","9a2fba3eca41e26743dc731e3a4469b6"],["/design-first-docs/images/lifecycle.png","6f2c97f045ba988851b02056c01c8d62"],["/design-first-docs/images/logged-proxied-data.png","716e3c41aacf453cfaedd61c2795f0ec"],["/design-first-docs/images/logo.png","be767b1e4fd352d5f2263ce82f0cc9aa"],["/design-first-docs/images/marcus_hiles.png","8b55f40abd154200ce72b8cdb6a8d90f"],["/design-first-docs/images/memory-leak-example.png","c2fae8bd6d8fa50632f9cde80be8b3f6"],["/design-first-docs/images/menu.png","0b414c367f5e7c0eb1b40f1076216b08"],["/design-first-docs/images/modus.png","6498c04fee5b8542449b350e77180379"],["/design-first-docs/images/mvvm.png","4fbd3c1bc80d47038f3e66cf1478a1a3"],["/design-first-docs/images/nativescript.png","05c94493b428db55bb441faaca4b02d8"],["/design-first-docs/images/neds.png","1f1a2a46c2575019ae07a90205f60b65"],["/design-first-docs/images/onsen_ui.png","e41569bcb10fbca3f361d818b29ed7fd"],["/design-first-docs/images/opteo.png","e80eaa359d4722af5fd8fed79fb9eec5"],["/design-first-docs/images/passionate_people.png","03e59e28347e1dcd165e4e1525afb545"],["/design-first-docs/images/patreon.png","99eb0cdcab5f46697e07bec273607903"],["/design-first-docs/images/paypal.png","067bd556ce9e4c76538a8057adb6d596"],["/design-first-docs/images/props-events.png","8996ef20503fbf264a0bfdeafccca74a"],["/design-first-docs/images/search-by-algolia.png","3f22d84b817bb896bd5bef0705ff8fc7"],["/design-first-docs/images/search.png","3a38056b0f3ec4fcac63c4d1c3841cab"],["/design-first-docs/images/shopware_ag.png","e2ded483c0660bd629938e37f388d9fb"],["/design-first-docs/images/shopware_ag.svg","5d2a8176b6e1b0a348339746de3edf28"],["/design-first-docs/images/special-sponsor-spot.png","860ea231e9bd1b3ff35e627eb83bb936"],["/design-first-docs/images/state.png","6a05b01942c7d2cff4ea0033ded59ebb"],["/design-first-docs/images/stdlib.png","8693858c969505b29339bf84c0a5cbdf"],["/design-first-docs/images/storekit.png","cacf47116e5efe9fc2dcd60ebc197707"],["/design-first-docs/images/syncfusion.png","fd1617455479c2e3265656c167faeb91"],["/design-first-docs/images/tee__.png","ea5fd763d459d3942e50c323fa32988a"],["/design-first-docs/images/tidelift.png","831935bd53d7d2d4eea9427c5f874816"],["/design-first-docs/images/tighten_co.png","003364e7044150e2979cbfe03d640cec"],["/design-first-docs/images/tooltwist.png","b81bfd5ae608e965d03aaa5a4164373e"],["/design-first-docs/images/transition.png","5990c1dff7dc7a8fb3b34b4462bd0105"],["/design-first-docs/images/typescript-type-error.png","1665e7350370c091d397383a7355d3a6"],["/design-first-docs/images/usave.png","5cffd5053b1d75ae49c9b6eb176e0ccf"],["/design-first-docs/images/valuecoders.png","818ca42a745e018ace0c55c36a7ae3dd"],["/design-first-docs/images/vehikl.png","3bd1b88aa9d242d308e838f2342d7660"],["/design-first-docs/images/vpnranks.png","a657f71ef96eb8c22c7f1496c01ca53a"],["/design-first-docs/images/vue-component-with-preprocessors.png","a5cb959052c9cda793e23a6e3a6a122c"],["/design-first-docs/images/vue-component.png","6a7040cfd4330a536d980c69e2e8dd18"],["/design-first-docs/images/vuejobs.png","77ed618e17571d1a2d77ad7bc53e8fc4"],["/design-first-docs/images/vuemastery.png","6f09ce143467fba22039bde3f2070c19"],["/design-first-docs/images/vueschool.png","3d92b4f1a8fcbe3be0d0e89950a1a705"],["/design-first-docs/images/vuetify.png","c7cfff77abb10162cb0b7c2ed3b6ac51"],["/design-first-docs/images/webdock.png","6b8d3d271ba4d05daf83ad75d21221d1"],["/design-first-docs/images/wilderminds.png","cd98b69653b51369da2e765097f13d6f"],["/design-first-docs/images/x_team.png","a6cfaebb0c0dc17d348bc9c6fd5758ef"],["/design-first-docs/images/y8.png","3cdd8826d3419751f40a8aa7f90cd539"],["/design-first-docs/images/yakaz.png","f1918919114e35d6091e67370450e8bd"],["/design-first-docs/index.html","2b4fb9417a8d4e481d5c468af6ab4a70"],["/design-first-docs/js/common.js","3fd6eb4d90b6ad57886c6ede0670d59e"],["/design-first-docs/js/css.escape.js","fe4db48c9e3f272a6d12cf1312de889e"],["/design-first-docs/js/smooth-scroll.min.js","ecaa94f311c27bd2ac704a9658ff9cef"],["/design-first-docs/js/vue.js","d5c38adb09ff79efa1c4d0745dfd308c"],["/design-first-docs/js/vue.min.js","17e942ea0854bd9dce2070bae6826937"],["/design-first-docs/manifest.json","9d3996c7c84581efe8646577fdcac72d"],["/design-first-docs/menu/index.html","36205c5d1d173adef0690782ca42124f"],["/design-first-docs/page/2/index.html","b248d2580c29963aa88d81dd6f48bebd"],["/design-first-docs/perf/index.html","d272478d16f052ef511a9ccb3fa13ae0"],["/design-first-docs/support-vuejs/index.html","be24be2972a1d2d8019efdc299a78318"],["/design-first-docs/v0/api/index.html","87da3bf3186d635cb3413deaf23b74f9"],["/design-first-docs/v0/cookbook/adding-instance-properties.html","a93a470ab78709c2368be0cc9666770c"],["/design-first-docs/v0/cookbook/avoiding-memory-leaks.html","21395118aa0adabbcdeca330dfda40ed"],["/design-first-docs/v0/cookbook/client-side-storage.html","eb7779e032b7cfdf7b5971c839d63f00"],["/design-first-docs/v0/cookbook/creating-custom-scroll-directives.html","f77dbdb37d17579f60e18069d918511b"],["/design-first-docs/v0/cookbook/debugging-in-vscode.html","1b4287839663cc35ef2ea22fbcb8f6f2"],["/design-first-docs/v0/cookbook/dockerize-vuejs-app.html","924c5ef9dfc287deda91a85637818c2f"],["/design-first-docs/v0/cookbook/editable-svg-icons.html","3bbccb2e80ec7ca7decae9f9c1421bc6"],["/design-first-docs/v0/cookbook/form-validation.html","7f0638b1f0c7582021d29ac80a752bf1"],["/design-first-docs/v0/cookbook/index.html","20e09e854c1e1d37de086cca5b13e6b9"],["/design-first-docs/v0/cookbook/packaging-sfc-for-npm.html","15c0dcaa6efeb6629b1bc651c2f69a53"],["/design-first-docs/v0/cookbook/practical-use-of-scoped-slots.html","a7b6fbbac351fd63ff487b49acbd5611"],["/design-first-docs/v0/cookbook/serverless-blog.html","ef9efcde36cfb39842c529c708d8def5"],["/design-first-docs/v0/cookbook/unit-testing-vue-components.html","1f446a21ece75901161661ab75064c8c"],["/design-first-docs/v0/cookbook/using-axios-to-consume-apis.html","4cb3636ca1485526bf8b62582c3acb61"],["/design-first-docs/v0/examples/commits.html","cd219290e3109d8793b58a5fb1cc59e5"],["/design-first-docs/v0/examples/deepstream.html","f5404f27837d7ba0b12f189b8256584c"],["/design-first-docs/v0/examples/firebase.html","bbea245647f24c1550c354b9548a9ed5"],["/design-first-docs/v0/examples/grid-component.html","d4a4031295dd8e29674dc8838345af7d"],["/design-first-docs/v0/examples/hackernews.html","07daf529afd7f51554240be00073d574"],["/design-first-docs/v0/examples/index.html","4450cad046c60cba3932ad2e02600594"],["/design-first-docs/v0/examples/modal.html","fb2f2b6e46db793907bfa2dcb21641a8"],["/design-first-docs/v0/examples/select2.html","f287d3c4620365d94bc95094302732df"],["/design-first-docs/v0/examples/svg.html","2fed3f92fd94590a1dba9e1ab5b57321"],["/design-first-docs/v0/examples/themes.html","884433072469310a6b5e340dece3e45b"],["/design-first-docs/v0/examples/todomvc.html","b5d3faa62f09c773d25d5c34270fd113"],["/design-first-docs/v0/examples/todos.html","99f167ef17466c6fb4603aeee93726bf"],["/design-first-docs/v0/examples/tree-view.html","bec8d7a42b2cc257cf9cb2ca88ffbccb"],["/design-first-docs/v0/guide/command-line-gen.html","6572e6bd4b0cd3d6233be7b18ae044c2"],["/design-first-docs/v0/guide/command-line-init.html","a035d754ec2173839214e7c0dad10ccf"],["/design-first-docs/v0/guide/command-line.html","ad57947d0e79c96d176211265a890ac0"],["/design-first-docs/v0/guide/concerns.html","36d3a4e13f2f2a2a17c2cba94248f579"],["/design-first-docs/v0/guide/context.html","fd6fe81c5830af3cae8fc7f1d26cd211"],["/design-first-docs/v0/guide/design-file.html","74c3ccc306aeaf18dc5a293584f71eed"],["/design-first-docs/v0/guide/directory-structure-authentication.html","41623ba4ba88c7eaad8d9ee229bab754"],["/design-first-docs/v0/guide/directory-structure-authorization.html","b8067c8660017c09c25fa206d66b2a4b"],["/design-first-docs/v0/guide/directory-structure-context.html","edd1045933b2ac093f84593dbaaf5238"],["/design-first-docs/v0/guide/directory-structure-handlers.html","f2a152a6fd2a06a1131f4bd7880c08e9"],["/design-first-docs/v0/guide/directory-structure-internal.html","c298c5a2c59623876571b3cad59e52cc"],["/design-first-docs/v0/guide/directory-structure-middleware.html","cecad517c1d0a9ac8db938dd84f1c347"],["/design-first-docs/v0/guide/directory-structure-models.html","83043668ab6008072e2e0ec852438aff"],["/design-first-docs/v0/guide/directory-structure.html","4dcec8e5de56b36135e4206723ee9ff1"],["/design-first-docs/v0/guide/examples.html","c7f96c1df0a78c4379e5ec793dee3eca"],["/design-first-docs/v0/guide/index.html","ad2274c999bccc2443d9bc8c6f7c9506"],["/design-first-docs/v0/guide/installation.html","1a81c237a37257fff39448a1fbeef01b"],["/design-first-docs/v0/guide/models.html","027be4eb9b73837e7cc68ecbfb747140"],["/design-first-docs/v0/guide/payloads.html","81e75f02cf031b3b5ee78d02652c4cdc"],["/design-first-docs/v0/guide/team.html","7509dcba070ef8641231789bfc7251df"],["/design-first-docs/v0/search/index.html","429236f568021912b17197921ffb60e9"],["/design-first-docs/v0/style-guide/index.html","d9c81aabba2b5f03339e1f08e167c059"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.networkFirst, {"origin":"sendgrid.sp1.convertro.com"});
toolbox.router.get("/*", toolbox.networkFirst, {"origin":"ad.doubleclick.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"fonts.googleapis.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"fonts.gstatic.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdnjs.cloudflare.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"maxcdn.bootstrapcdn.com"});




