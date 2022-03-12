'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a08b1a9443db0ad41dc6dddee81eef3e",
".git/config": "a6f7863d9424b7b9c6f82100c91f73dd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "32fc4b9b50d21d3186f9755ec97d2626",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "27c144947dbba97befeb715ce8d77ed4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "36ef1895a2c1e61c1600270c6d161089",
".git/logs/refs/heads/master": "36ef1895a2c1e61c1600270c6d161089",
".git/logs/refs/remotes/origin/master": "40599d7519e90ec7026c1ae276ffdc28",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/1f/7318136903d0d59071627090bb84aebf2c746a": "452cc04547e6cb49324422631de31d99",
".git/objects/25/2e34be906bc4c91a2533f22ae3841fd7fae7d5": "ac1d1a862b9d5e3a7636abdd894089fe",
".git/objects/25/4d57370e48f749c072304ec3060373332dd7f8": "1083dc16b19765e72b38cc573dd5da3e",
".git/objects/2b/14e77180ac381f96d7f915a355f93238ecd380": "e67de27922b01edb0ec0425ef28edc7b",
".git/objects/2b/4629b1d8472024ce06413e1c06c01980b715c5": "c39f6f1dd56fff3c33f30daa33cf03f4",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2e/5b9f163d6755786e219b435077d72633c19c18": "3590b084174d12f139d31e94eb0e375a",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/3c/882b534c226214f33e1d5beace3f0a925a0ab1": "18b12bcbe458a36bd197812b5c0ebae5",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/47/d3df178f8b7eb5f5f0bdd4238fc8a6921a535b": "4b2e409cd46352a67d3fbce69f19ba9e",
".git/objects/4d/d119932d3ba03fa4dc823d0b76a03b027f9080": "93c8feed8f51380bc338f2c4f3cd3a88",
".git/objects/4e/927e365bfded326568db657cabb08d41d3124b": "e7a92e7099e4b9e54541031a353e6312",
".git/objects/53/17cd3b6ed8cdb67addfba2bd113b172e789afe": "f001e69664c39ef3d2bc682e58553c70",
".git/objects/56/cff6d06f42926b9020cefc423ec3efdea8a1b9": "438b54c85e53a7d25d09759a3bc94d4a",
".git/objects/57/23e207b7bee4d896ae90bc2228822c010fc1ba": "8879eb8dcf8b04585066ce1133de747e",
".git/objects/61/cc7b472ba37f371ddf8e3ce739d2da9b276371": "bda391bdc52873f7906ee291d46a3418",
".git/objects/63/9900d13c6182e452e33a3bd638e70a0146c785": "488924a8ec51457535ebf377a60e23c8",
".git/objects/63/e45ec3f7910bbe3c4153661818e5a395d9f94a": "c19bf230887c912ecc22b1421dcc3ad0",
".git/objects/64/72c090a1e6657ac40e8a6ff9424f7e624fe189": "4848aba3c480ec0bb15161e30ac61b29",
".git/objects/64/cf99051332027ef0349813f60ae1dd3af5e23b": "6399a55e00a84c209f5d7e333581ea5b",
".git/objects/68/a5862ff4c88a851d732d222abcef2947a6a7c3": "01aa24c0da2f501031531b7814eedbce",
".git/objects/6b/e32efe3e4dc9a709b06df38b7e6814ea8aff83": "683d2dd587a4e07002854a71b7ce46cb",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/c5ae8b2c36219ccde5ec8b12e2c7e03bc0d325": "eae4e366809985c1f63c0fd23afe6d7e",
".git/objects/7d/b66a6ff73389c58edfbead45778c0c6f5a8cac": "c70d99327ae52c3b30934e81f257d929",
".git/objects/85/0119e6b6a683d35535feecdc0dbae7614c35ea": "70d4ed8096ad92a277706cc741f483dc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8c/2945e49de1ce31b398a392f735cc35a6674fc8": "58e184762a9c05520bd3c82483ca37c8",
".git/objects/8d/77ac1a646ba680ee9c2efd98ada22edb3b96d6": "14a279187d82770523c1a9252d87e795",
".git/objects/90/8e2a7954857695b8b9d33659926ce8ce19ee0b": "b38d25ba8359fc6665e92acd8c5b8533",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/94/a25f7f4cb416c083d265558da75d457237d671": "f4ba8c706b5e4a214d83e95a0099370a",
".git/objects/99/4761922386f6aa255e2001de5c6ec259f988be": "d3038ff6a7f94b9956aae256f2d25388",
".git/objects/99/ce2e55b269bec123228b5071b2d2c62df69026": "be7c2a9fe77dae616a7ac697e3d8e53f",
".git/objects/9b/1155b657ac818de6bdf1ab3959e40fc15c9539": "a269cb7cdbf6fcde534f7bf4a12db99d",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/9f/4e193655c5cc9b6e99c9a5ab96d10c1958d6ad": "25b72e31842b8a990b580db395976ff3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a6/308a431ddbbdfa7b451d4f05dd5a8736e80e5a": "e60c0422fbb09120d171d16c7332d63b",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/ad/af3e1f559c937552179c30e15888316bb58965": "ae61ec6f4208c6fc3bfc57cd03d1f63a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/74004b44e418c867fe75eb30de691826d5c923": "6e7f22aa40520fbf9226bdcd10b79b19",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/59a0f2764338b608d1f5a188533c6ca4f5563b": "059ff02e83851b20d60970e8ec040813",
".git/objects/bf/0dae0ab7174df650dea4e732d8a07f69286cea": "86ba535596907c598ef69aec6cce8db2",
".git/objects/c5/b61d47d0dcb0a188048bc02e7105ae2fbd095f": "c771fb92cec5b2564068f2816574b4b3",
".git/objects/cb/54d3d8b4ed66a4ed2e01155d26f7fb33633c8a": "ff78587377b92f87c29592b03bb9af20",
".git/objects/d0/9fe7f704a81fd12c7c877e4a00a122af749ae7": "1f11cac1121a2dd563275d5d31469bbc",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/ebd4805981b8400db3e3291c74a743fef9a824": "6c33f0e88a71d9ba8563eab3ee932f04",
".git/objects/d8/d83bfb8e3d9e8692d58307304ecdba787e5560": "a181e1cbe39330ef0108d0bc9fca03e7",
".git/objects/e2/49ca8b9fde4cd5709dc78a1d92025ed37c218f": "6f96d96368a62d4bf2e98915a1f0c45e",
".git/objects/e4/5bd8698a3b315f1066caccb48520aef46a8890": "dc290b585027439f0228d9e9da3238a2",
".git/objects/e4/a65ea59b8624e51809b0367fc75de45d2841c7": "66cd26e44a8bf72b02d3e805a34a0acd",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/ac8e86d8edcb792e84f25a58d1137e26727e81": "e4e7154ed512934518b03dfa48d9f9a1",
".git/objects/f1/25d90e22296e0c36520317786b0d1b0761aa09": "62921ce26ec9665e2facd24b935d7544",
".git/objects/f4/7f114ba6427f65fd6806cd4947c889368a721f": "96ba87fb276e1b0cd51879ce26cea3a2",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "8b8d21aac8e6cdbec1fc106163311c31",
".git/objects/f5/ae963a04ff5653518c07794239a9ba0c54c073": "def7357d6a83e1191269fd6976bca65b",
".git/objects/f8/84acd7f25bd4f6d6350ce7c1cb9f5b1385e05f": "9f562038c7adda0ff46b4f29facf2305",
".git/objects/fb/7712f46d1d4b4a59141edd2334f72e33c9b8f9": "d26ae736827cedb20f89c523455f6af2",
".git/ORIG_HEAD": "6f26303212db2df8e9e7de7b6f42253e",
".git/refs/heads/master": "42080767869e753c9a9ce331ef7ec058",
".git/refs/remotes/origin/master": "42080767869e753c9a9ce331ef7ec058",
".idea/misc.xml": "d4f288593ec15175e0ab2246a477dada",
".idea/modules.xml": "9e76b956e97dbf7d14a4b3d83c8c2375",
".idea/vcs.xml": "a8b625cb090fe904fb7338f6447f50ac",
".idea/web.iml": "24742e734b568c3f23d56498828ad0f3",
".idea/workspace.xml": "510bddab5cf67252a484c7855fe6eb47",
"assets/AssetManifest.json": "aef8788576ec8b009ccdaee1ca2b976b",
"assets/assets/fonts/lexend_exa_light.ttf": "3905e83bdf0f3f7d67c627f5c27eaab0",
"assets/assets/fonts/lexend_exa_medium.ttf": "f857135e3770116e66655d26e75337d6",
"assets/assets/fonts/lexend_exa_regular.ttf": "271a3de33ab2f8a65a887fae877f23e3",
"assets/assets/icons/favicon.png": "feb5332494988d4659dbeec042de5f40",
"assets/assets/icons/ic_launch.svg": "8489d1bd9013367f71237bd488d02e3f",
"assets/assets/images/logo.png": "919cf81d125e217c271cac469d122980",
"assets/FontManifest.json": "1e9f3dfc508ae12c91ea3a40a5290be8",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "67efa23f6ee57060233c568ed0a81ebd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "feb5332494988d4659dbeec042de5f40",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c0b616d0e3ed28d5daa7c740049000be",
"/": "c0b616d0e3ed28d5daa7c740049000be",
"main.dart.js": "e74547fc424889bd3ba9812b6e8843fe",
"manifest.json": "e879dd2c5121fc09584ac7ecc9e9ace0",
"version.json": "a5831a5278effce344b6e35d8a702d90"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
