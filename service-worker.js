/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "01.Install/index.html",
    "revision": "754be3f200ab270f30afbd7cafebc8f0"
  },
  {
    "url": "02.DocumentTranslation/index.html",
    "revision": "fe9419e0c3c622a43811b475c2c89062"
  },
  {
    "url": "03.Skills/index.html",
    "revision": "34772a2e2252ae0452023337948f7166"
  },
  {
    "url": "03.Skills/本科生论文阅读笔记.html",
    "revision": "b632b9eaddc56914b197b5ae9b04fbcd"
  },
  {
    "url": "404.html",
    "revision": "65cf5070bba25efed863666839a0750b"
  },
  {
    "url": "assets/css/0.styles.a52aa9a7.css",
    "revision": "e2a36570098c6b83f3c0162574bdbef1"
  },
  {
    "url": "assets/img/01.PEiD逆向结果VB.984209cc.png",
    "revision": "984209cc2673b0c6d044cc7ee1194f7c"
  },
  {
    "url": "assets/img/02.SRIM主界面.2ba2b6bd.png",
    "revision": "2ba2b6bdf92889e1a0abdce4b7edbea8"
  },
  {
    "url": "assets/img/04.解决方案.b8b37760.png",
    "revision": "b8b377603c3fd89e5a1f421bf886a7e3"
  },
  {
    "url": "assets/img/05.intl.52b792dc.png",
    "revision": "52b792dc707ee3b674606af0e633030b"
  },
  {
    "url": "assets/img/06.区域语言设置.2854154d.png",
    "revision": "2854154de935383a256d9b63545afacf"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.b610e97d.js",
    "revision": "ef0b95f6a1479111d997baadd5df6a1f"
  },
  {
    "url": "assets/js/3.270d5675.js",
    "revision": "47a6792fb98efb310db02d28abbda08f"
  },
  {
    "url": "assets/js/4.6ce07257.js",
    "revision": "cf7ff3c0242fbd6c047c545167668600"
  },
  {
    "url": "assets/js/5.46fcb958.js",
    "revision": "af532373b9d13453cb8570e744a27b05"
  },
  {
    "url": "assets/js/6.829cb61a.js",
    "revision": "2ed3a2ee78909efbb05478149fb9e7b2"
  },
  {
    "url": "assets/js/7.37988da1.js",
    "revision": "78965455947580e1d55c663714154aa9"
  },
  {
    "url": "assets/js/8.4c5e83b2.js",
    "revision": "093840a6a7f80a8fbfa4e6d39fa5113d"
  },
  {
    "url": "assets/js/9.395def40.js",
    "revision": "57f5c7230be1a219da0f5fabdcf272f0"
  },
  {
    "url": "assets/js/app.93e5c432.js",
    "revision": "fc5fda27e2cd80c5a0cc407a71e31313"
  },
  {
    "url": "guide.html",
    "revision": "695d41f8f4498ed7423f2762f7d6b73c"
  },
  {
    "url": "images/eg1.png",
    "revision": "b6e00451aa6e2fb07803babc3be44fe3"
  },
  {
    "url": "images/eg12.png",
    "revision": "716c3bede731ed6eecb026377f31aac1"
  },
  {
    "url": "images/eg13.png",
    "revision": "022c1e3380b12aa21dd816cd4f1aeaae"
  },
  {
    "url": "images/eg14.png",
    "revision": "c0b03bb9c818398235ae5ac24fe91204"
  },
  {
    "url": "images/eg2.png",
    "revision": "1c31890ab04672b5b9daad1f8216a89b"
  },
  {
    "url": "images/eg3.png",
    "revision": "c3145209954ef832a2c62740a2133a8b"
  },
  {
    "url": "images/eg4.png",
    "revision": "7b4a9dd311c20e60f1f67205845deca1"
  },
  {
    "url": "images/eg5.png",
    "revision": "d70a372965f420d2faaf40259dce9a1c"
  },
  {
    "url": "images/eg6.png",
    "revision": "64c96504fe466f4baa99423a71573892"
  },
  {
    "url": "images/eg7.png",
    "revision": "5814399d3ba9bdcedb588e2b65059e67"
  },
  {
    "url": "images/eg8.png",
    "revision": "cd30b75ad80917829755a2693a374b02"
  },
  {
    "url": "images/photo.jpg",
    "revision": "25a5f66ebedada36e443cf5e9e881c8f"
  },
  {
    "url": "index.html",
    "revision": "960de657fc9c34aef7886268d0e8db4e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
