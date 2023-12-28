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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2b9a3b5b13bca3b1b0b054c43ef92d5d"
  },
  {
    "url": "assets/css/0.styles.c7692449.css",
    "revision": "02865e8482ba3eaf651754512bf3e696"
  },
  {
    "url": "assets/img/alloc-by-time.aaedf1f6.png",
    "revision": "aaedf1f674028a1251c5d31541e2a372"
  },
  {
    "url": "assets/img/attestations.91fa42db.png",
    "revision": "91fa42dbc1e6e09eab64a39b8026fe95"
  },
  {
    "url": "assets/img/attestationstation.0d15355f.png",
    "revision": "0d15355f93c6b39d80685910106dd7ba"
  },
  {
    "url": "assets/img/ChooseBridgeType.5fb8662d.png",
    "revision": "5fb8662d9fc4ed551a7aad1fe0bf8be0"
  },
  {
    "url": "assets/img/danger-dark.86c63c40.svg",
    "revision": "86c63c4006d5cd5f860cdef57310696a"
  },
  {
    "url": "assets/img/danger.1c7d8a0f.svg",
    "revision": "1c7d8a0f45b8bee5d5b92334a16e2711"
  },
  {
    "url": "assets/img/default-skin.b257fa9c.svg",
    "revision": "b257fa9c5ac8c515ac4d77a667ce2943"
  },
  {
    "url": "assets/img/diagramChainlocks.831fb821.png",
    "revision": "831fb821ad0e0d9e230fb531c38d435b"
  },
  {
    "url": "assets/img/ecosystem_fund_process.75f94e93.jpeg",
    "revision": "75f94e93923791375febd5db3788919e"
  },
  {
    "url": "assets/img/eigan.b9a454d1.png",
    "revision": "b9a454d1967756ac0f54cd46a1f53053"
  },
  {
    "url": "assets/img/hero.b62ddd9c.jpg",
    "revision": "b62ddd9c4a72085202b5218e4c98fd68"
  },
  {
    "url": "assets/img/info-dark.a1decb69.svg",
    "revision": "a1decb69db82fb8eebb48704dd74e649"
  },
  {
    "url": "assets/img/info.6f2cfedb.svg",
    "revision": "6f2cfedb8e6d19d1b24eb73943f7ff4e"
  },
  {
    "url": "assets/img/input-data.8ea2ea58.png",
    "revision": "8ea2ea58e300232beebec70e9a702d8d"
  },
  {
    "url": "assets/img/mmwalkthrough1.a463c2ba.png",
    "revision": "a463c2ba98a06a7cfe3bc469b4bea60d"
  },
  {
    "url": "assets/img/mmwalkthrough10.b5e07310.png",
    "revision": "b5e073107735dbd2a190f766ef5445cc"
  },
  {
    "url": "assets/img/mmwalkthrough11.8752a186.png",
    "revision": "8752a186efb018916c20042f02a3898e"
  },
  {
    "url": "assets/img/mmwalkthrough2.68156d3c.png",
    "revision": "68156d3c5fcca8d82a2dfc324408a56a"
  },
  {
    "url": "assets/img/mmwalkthrough3.40f38bfe.png",
    "revision": "40f38bfe5d2c3c2b7e61cca8caa80616"
  },
  {
    "url": "assets/img/mmwalkthrough4.8863e46a.png",
    "revision": "8863e46a89c156620981744324834270"
  },
  {
    "url": "assets/img/mmwalkthrough5.121b8828.png",
    "revision": "121b8828331cda773865fd8c3fbce095"
  },
  {
    "url": "assets/img/mmwalkthrough6.635c6d4c.png",
    "revision": "635c6d4c1b1d824d50b14aa81ddaa59c"
  },
  {
    "url": "assets/img/mmwalkthrough7.52e19ab3.png",
    "revision": "52e19ab353f34bc845f1ccc9272bb594"
  },
  {
    "url": "assets/img/mmwalkthrough8.f2c9bd4a.png",
    "revision": "f2c9bd4a4db2d982707e2b6d96eb1637"
  },
  {
    "url": "assets/img/mmwalkthrough9.0dab59d2.png",
    "revision": "0dab59d236bd1ee06d4a59ec73357ca2"
  },
  {
    "url": "assets/img/network.527578cd.png",
    "revision": "527578cd7f858ca704d63bb76030da6e"
  },
  {
    "url": "assets/img/note-dark.8668720f.svg",
    "revision": "8668720f2e50ebd01173f11a89d9da6e"
  },
  {
    "url": "assets/img/note.32319b2e.svg",
    "revision": "32319b2e9c86860d8a4f1c8f660096cb"
  },
  {
    "url": "assets/img/overall.eb2d6e3e.png",
    "revision": "eb2d6e3e1925bcbf4ca652ca639a6b13"
  },
  {
    "url": "assets/img/pali_selectnetwork.482570f5.png",
    "revision": "482570f58b12bdfc8d7462a4e1c02c88"
  },
  {
    "url": "assets/img/paliwalkthrough1.032f772b.png",
    "revision": "032f772bd5510decbfa3e1b9a2b00788"
  },
  {
    "url": "assets/img/paliwalkthrough2.044fa44c.png",
    "revision": "044fa44ca0f312f0cbaaf5cfaa45b11f"
  },
  {
    "url": "assets/img/paliwalkthrough3.ad629c02.png",
    "revision": "ad629c026ec2da8a6a82216a25c75008"
  },
  {
    "url": "assets/img/paliwalkthrough4.3ee63ff1.png",
    "revision": "3ee63ff1e6baace54084103398bff978"
  },
  {
    "url": "assets/img/paliwalkthrough5.c4790b87.png",
    "revision": "c4790b875c8faba4ff19a3b26ec06f74"
  },
  {
    "url": "assets/img/paliwalkthrough6.658803bb.png",
    "revision": "658803bbb72c5b0e83054f1d394c8fc7"
  },
  {
    "url": "assets/img/pie2.1015b1b6.jpeg",
    "revision": "1015b1b6fe6d7d47c6f78d8d189b596f"
  },
  {
    "url": "assets/img/poda.b8a39fee.png",
    "revision": "b8a39fee4e7e8bb5116604d5e7a26636"
  },
  {
    "url": "assets/img/rollux-deployment.485df0c1.png",
    "revision": "485df0c1c294432967e8ab16ada36c95"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/Switch_RolluxToNEVM.0fc992c0.png",
    "revision": "0fc992c0cd4329c2a2c215f708a02375"
  },
  {
    "url": "assets/img/tip-dark.0d0028db.svg",
    "revision": "0d0028db13caec45ac1527d8b673fae0"
  },
  {
    "url": "assets/img/tip.a9004be5.svg",
    "revision": "a9004be5a8a5a83cc9c77bba88c816ff"
  },
  {
    "url": "assets/img/two-phase-withdrawals.e1b4a422.png",
    "revision": "e1b4a4220ed56d041b780b81a94b1963"
  },
  {
    "url": "assets/img/virt_cycle.61308786.png",
    "revision": "61308786c6d135701bff7795390f638d"
  },
  {
    "url": "assets/img/warning-dark.b995cb45.svg",
    "revision": "b995cb45fa552ac10ad35fa7716af15b"
  },
  {
    "url": "assets/img/warning.57a43d6d.svg",
    "revision": "57a43d6dcdee07d8db78a5dd3d6137ba"
  },
  {
    "url": "assets/js/13.27cea80b.js",
    "revision": "40f956cce392754601bcf4be8ff7f15b"
  },
  {
    "url": "assets/js/199.c5b99d08.js",
    "revision": "c31c899656746be41849a805b007eead"
  },
  {
    "url": "assets/js/app.4d6c95a3.js",
    "revision": "9786cb95d33c08b74a2826ea0b2bea59"
  },
  {
    "url": "assets/js/layout-Blog.cc38fa31.js",
    "revision": "757406d136e6de17a67fb8e454bafa9c"
  },
  {
    "url": "assets/js/layout-Blog~layout-NotFound~layout-components/Common.9cb591cd.js",
    "revision": "0bd62c13b326c1cb36b826877fabf34f"
  },
  {
    "url": "assets/js/layout-components/AlgoliaSearch/Dropdown.b25cb710.js",
    "revision": "82396e48cd17dfc830b8ed59e3de21bd"
  },
  {
    "url": "assets/js/layout-components/AlgoliaSearch/Full.70ee2a6e.js",
    "revision": "12835c04d5ee1b990aaa3a405bae49fb"
  },
  {
    "url": "assets/js/layout-components/Anchor.43d269ea.js",
    "revision": "641d8f9fced51549b30d8b28be6833ce"
  },
  {
    "url": "assets/js/layout-components/Blog/ArticleInfo.e54e36dc.js",
    "revision": "978ea9b762feb9af10016c57c68c1d07"
  },
  {
    "url": "assets/js/layout-components/Blog/ArticleItem.e47d3a5c.js",
    "revision": "c094cf56f13031c3e97ed5629be65f05"
  },
  {
    "url": "assets/js/layout-components/Blog/ArticleList.007a33cd.js",
    "revision": "8e972014127cfe8eb4b8c7b45e7744db"
  },
  {
    "url": "assets/js/layout-components/Blog/ArticleType.2351c586.js",
    "revision": "2b71a8ddc26ba313610f1ef2eaa07007"
  },
  {
    "url": "assets/js/layout-components/Blog/BloggerInfo.6f82dab9.js",
    "revision": "f18505dd5848c5bd65bb1f16a9f68d81"
  },
  {
    "url": "assets/js/layout-components/Blog/BlogHero.8011d728.js",
    "revision": "0015a48a822cea16b578a10d70dd6612"
  },
  {
    "url": "assets/js/layout-components/Blog/BlogHome.e395e69a.js",
    "revision": "b991708b273918119c269d6acb66d4b5"
  },
  {
    "url": "assets/js/layout-components/Blog/BlogInfo.03355230.js",
    "revision": "1e6787e6812b7688ebd18cae19810b0b"
  },
  {
    "url": "assets/js/layout-components/Blog/BlogInfoList.9afdd6a9.js",
    "revision": "73e077d632b001ef0443b5ac18302407"
  },
  {
    "url": "assets/js/layout-components/Blog/BlogPage.a6fc4510.js",
    "revision": "be1fe86c0629944d9d8c4ecea17d2cff"
  },
  {
    "url": "assets/js/layout-components/Blog/CategoryList.b9f88832.js",
    "revision": "296676f2f5f15c21d630b765b256e133"
  },
  {
    "url": "assets/js/layout-components/Blog/ProjectList.1d01acd0.js",
    "revision": "3f2a4c598b81d3a33086421639fdf78b"
  },
  {
    "url": "assets/js/layout-components/Blog/TagList.b1e0008a.js",
    "revision": "e5214a66e913de22272a040adef4d1ff"
  },
  {
    "url": "assets/js/layout-components/Blog/Timeline.364848d1.js",
    "revision": "c16bb8f5a0a572ef4c5644927e532e45"
  },
  {
    "url": "assets/js/layout-components/Blog/TimelineList.07df8831.js",
    "revision": "31f46b36882c389dc98820e76772530d"
  },
  {
    "url": "assets/js/layout-components/Clipboard.63adb008.js",
    "revision": "e3774dcfd1e48b5047d9a31b0694db39"
  },
  {
    "url": "assets/js/layout-components/Common.9d329061.js",
    "revision": "28043f5912e840178c49bce7392c4098"
  },
  {
    "url": "assets/js/layout-components/Home.02b3cd9d.js",
    "revision": "aa633685c14088d4a8e5051839e96063"
  },
  {
    "url": "assets/js/layout-components/MediaLinks.24cbe691.js",
    "revision": "e17d5c8e8075241779207ab4bdf79563"
  },
  {
    "url": "assets/js/layout-components/MyTransition.f5eac7ea.js",
    "revision": "6ceea5f7cb6d8818bb90b528a919de56"
  },
  {
    "url": "assets/js/layout-components/Navbar/DropdownLink.eeee0f79.js",
    "revision": "124f03347e11a82109977dfe299317e2"
  },
  {
    "url": "assets/js/layout-components/Navbar/Navbar.2ff0a8a1.js",
    "revision": "0473e6a8010c57a72fbe33083fa42a64"
  },
  {
    "url": "assets/js/layout-components/Navbar/NavLink.c3f43c5f.js",
    "revision": "770850a2666e25aa6fd9f9baa82931ab"
  },
  {
    "url": "assets/js/layout-components/Navbar/NavLinks.b449df21.js",
    "revision": "3a28aff3d2044f0a8bf6c86bac10c127"
  },
  {
    "url": "assets/js/layout-components/Navbar/RepoLink.85377d8d.js",
    "revision": "a4f770513afcf49a04f9ea884f32d64c"
  },
  {
    "url": "assets/js/layout-components/Navbar/SidebarButton.f90a2b05.js",
    "revision": "02bbbe9d61fe8940ae830fc3cff61593"
  },
  {
    "url": "assets/js/layout-components/Page.8ccfa11a.js",
    "revision": "069ffaf9a6517f99053541dd7df47b96"
  },
  {
    "url": "assets/js/layout-components/PageFooter.c05a321b.js",
    "revision": "f5bdcb041a9450d748286a6e1b221abe"
  },
  {
    "url": "assets/js/layout-components/PageMeta.c2ea224a.js",
    "revision": "d4833cbc7cd12a3c8bd1a9085ed6e0e7"
  },
  {
    "url": "assets/js/layout-components/PageNav.50b190fc.js",
    "revision": "bded12817f95745c9ab6a4e9b8b50e01"
  },
  {
    "url": "assets/js/layout-components/Password.523ff9d3.js",
    "revision": "3a040541da0c795fcec2bdfadd36a348"
  },
  {
    "url": "assets/js/layout-components/Sidebar/DropdownTransition.d6b22fb4.js",
    "revision": "1c3788a2e802a17375facc66b348b789"
  },
  {
    "url": "assets/js/layout-components/Sidebar/Sidebar.ae0d6943.js",
    "revision": "cd733f7f1f3b0d8368b83558f016ab0e"
  },
  {
    "url": "assets/js/layout-components/Sidebar/SidebarDropdownLink.6e8f48be.js",
    "revision": "2baeb3bd8e3895601517cfb5f1859ec6"
  },
  {
    "url": "assets/js/layout-components/Sidebar/SidebarGroup.7442af2c.js",
    "revision": "1b53e3bf9c997cc9341ffedcc4d83745"
  },
  {
    "url": "assets/js/layout-components/Sidebar/SidebarLink.09516023.js",
    "revision": "14fa944943325314eb6b92d01f551a1f"
  },
  {
    "url": "assets/js/layout-components/Sidebar/SidebarNavLinks.4ba81d39.js",
    "revision": "de8991b6cfca0fe2150e1202bd383862"
  },
  {
    "url": "assets/js/layout-components/Theme/DarkmodeSwitch.1a0f263c.js",
    "revision": "0c4497db7ae13ea3d728d6e10cbb9a09"
  },
  {
    "url": "assets/js/layout-components/Theme/ThemeColor.f23e4c39.js",
    "revision": "342e9101093fc300fe307bb42074e42b"
  },
  {
    "url": "assets/js/layout-components/Theme/ThemeOptions.d3bbb8a5.js",
    "revision": "914a218f2f618842c81758bab48e0236"
  },
  {
    "url": "assets/js/layout-icons/ArticleIcon.1efc5ad5.js",
    "revision": "363465a3529e53fee17463bff0ba68c5"
  },
  {
    "url": "assets/js/layout-icons/AutoIcon.e06e8cda.js",
    "revision": "ccf4e15d056f7317d51aabfea6105a4d"
  },
  {
    "url": "assets/js/layout-icons/BookIcon.0baaf101.js",
    "revision": "02d76509e11905116d8cff1b5a1c91f7"
  },
  {
    "url": "assets/js/layout-icons/DarkIcon.35fb404c.js",
    "revision": "795af6f426078657b7884f8d5f39b6cc"
  },
  {
    "url": "assets/js/layout-icons/EditIcon.fc2ce3e4.js",
    "revision": "eb30339054c7206644202979e26dfd31"
  },
  {
    "url": "assets/js/layout-icons/EmptyIcon.bdd4ec57.js",
    "revision": "1a325143e60e3d45ea452bdf80f430fb"
  },
  {
    "url": "assets/js/layout-icons/I18nIcon.c00436df.js",
    "revision": "db90f214190b6a375057a51fba079e2d"
  },
  {
    "url": "assets/js/layout-icons/LightIcon.493cffa0.js",
    "revision": "90eb725db934004340a65eaa89622831"
  },
  {
    "url": "assets/js/layout-icons/LinkIcon.fa1cba04.js",
    "revision": "c450192fb3830c50309313f0054331bb"
  },
  {
    "url": "assets/js/layout-icons/LockIcon.dbc3e975.js",
    "revision": "9ad35e6e93720ba2e02fdf15590de4fe"
  },
  {
    "url": "assets/js/layout-icons/media/Baidu.1e875fd3.js",
    "revision": "2c5f8b7da2e4b6d087bc6e1ad8ae40ac"
  },
  {
    "url": "assets/js/layout-icons/media/Bitbucket.5f91a1e4.js",
    "revision": "d97e3d73d657422e1f85af78627e1c30"
  },
  {
    "url": "assets/js/layout-icons/media/Dingding.e9488c63.js",
    "revision": "2c5e0ce0e8e9e3af7f73e963b67db91a"
  },
  {
    "url": "assets/js/layout-icons/media/Discord.6cfe8a36.js",
    "revision": "652c5cd1dffd2a86c547f032d0fdf633"
  },
  {
    "url": "assets/js/layout-icons/media/Dribbble.f250561a.js",
    "revision": "57ecbf2e1162d92ae7a5ca828f6ecbb0"
  },
  {
    "url": "assets/js/layout-icons/media/Email.8b99a713.js",
    "revision": "8f55995c384ca2694ee6abae9dce89fc"
  },
  {
    "url": "assets/js/layout-icons/media/Evernote.1c250233.js",
    "revision": "52677f168646216accb74808cd8480b2"
  },
  {
    "url": "assets/js/layout-icons/media/Facebook.fb9d8a20.js",
    "revision": "bdf9b180836b45d45a7c9dedf3aeee8e"
  },
  {
    "url": "assets/js/layout-icons/media/Flipboard.6a856038.js",
    "revision": "4436d58d05734f8885cc5184bd6e3b80"
  },
  {
    "url": "assets/js/layout-icons/media/Gitee.bcbb931f.js",
    "revision": "24248d69a49b3ab3fb1a3d8dd5e5cec4"
  },
  {
    "url": "assets/js/layout-icons/media/Github.823a9fad.js",
    "revision": "8166419ec6d7207226b6e19d988e1ad6"
  },
  {
    "url": "assets/js/layout-icons/media/Gitlab.7c9e7c03.js",
    "revision": "c216f45080245da99b613d3793e6363e"
  },
  {
    "url": "assets/js/layout-icons/media/Gmail.e5a60a0d.js",
    "revision": "6df006a86285492a33bc3409ec4fba95"
  },
  {
    "url": "assets/js/layout-icons/media/Instagram.b7f0d481.js",
    "revision": "0c034e4b41cd2febb93eec77a34f1a6c"
  },
  {
    "url": "assets/js/layout-icons/media/Lines.5134aa61.js",
    "revision": "d5665c39b809581f2183b221650460f3"
  },
  {
    "url": "assets/js/layout-icons/media/Linkedin.e0a5e8a7.js",
    "revision": "94363b9e0c75f83ba2d1dfb1cabd29d8"
  },
  {
    "url": "assets/js/layout-icons/media/Pinterest.57a824b1.js",
    "revision": "48a706c49c638f6368e12e40453f8829"
  },
  {
    "url": "assets/js/layout-icons/media/Pocket.6a212753.js",
    "revision": "26e516e8e88f4dfca2a46f760343c929"
  },
  {
    "url": "assets/js/layout-icons/media/QQ.e504e05a.js",
    "revision": "5575a2c652a9437f3869384a87a66d87"
  },
  {
    "url": "assets/js/layout-icons/media/Qzone.e3e1f7fd.js",
    "revision": "8c2e785c79450475b0fd9b679c1bcea0"
  },
  {
    "url": "assets/js/layout-icons/media/Reddit.cf7443be.js",
    "revision": "28e2dfe4ccc1588a432b992bbe2a97dd"
  },
  {
    "url": "assets/js/layout-icons/media/Rss.2d21157b.js",
    "revision": "d36b388c427727c2c5f2a9a0345a94d8"
  },
  {
    "url": "assets/js/layout-icons/media/Steam.57325848.js",
    "revision": "4beca71618c05d266280f00de1294491"
  },
  {
    "url": "assets/js/layout-icons/media/Twitter.ab77a892.js",
    "revision": "70685e3e0a24b945d166514846882498"
  },
  {
    "url": "assets/js/layout-icons/media/Wechat.3a45cbe4.js",
    "revision": "a71567123b5331fa293f42e154ff0bb5"
  },
  {
    "url": "assets/js/layout-icons/media/Weibo.8dad371a.js",
    "revision": "85281bda8966c98feff24997a6ccea84"
  },
  {
    "url": "assets/js/layout-icons/media/Whatsapp.d6636da7.js",
    "revision": "7f02a628b93dcdae59a428a247943d9c"
  },
  {
    "url": "assets/js/layout-icons/media/Youtube.fd8241d8.js",
    "revision": "848f9f54dc2337528bcc4c79133155bb"
  },
  {
    "url": "assets/js/layout-icons/media/Zhihu.0b4545fd.js",
    "revision": "bd0ec734fcb4dcf3f3f206b960423a7c"
  },
  {
    "url": "assets/js/layout-icons/NextIcon.d3f6f53b.js",
    "revision": "528a2c615585ce3b03c8583b1bab5d6b"
  },
  {
    "url": "assets/js/layout-icons/Page404Icon.2bae4ea4.js",
    "revision": "b344c132172b338f11a6b4d18e8d131b"
  },
  {
    "url": "assets/js/layout-icons/PresentationIcon.e737e5a2.js",
    "revision": "dbf6389ecb4347ee25010850f55d74f6"
  },
  {
    "url": "assets/js/layout-icons/PrevIcon.d0a4b528.js",
    "revision": "098f8a67dde6e3e07421fa6ff9915c6b"
  },
  {
    "url": "assets/js/layout-icons/ProjectIcon.9552a4a5.js",
    "revision": "0c8dba33e65d14d69f31b22dc93e3f9d"
  },
  {
    "url": "assets/js/layout-icons/StickyIcon.132760ff.js",
    "revision": "8a4565e39f14f0bbb590d835497bfed6"
  },
  {
    "url": "assets/js/layout-Layout.c1915e63.js",
    "revision": "48c046b8cd54b9dae1d33bc31409885e"
  },
  {
    "url": "assets/js/layout-NotFound.260fbaa0.js",
    "revision": "6ddee65b64e46d3f9fae2be219a25c08"
  },
  {
    "url": "assets/js/layout-Slide.dd5ce6f4.js",
    "revision": "2ab53dd98b6eb9474c19e2c372a1a622"
  },
  {
    "url": "assets/js/page--833491ca.1a378291.js",
    "revision": "efd3fe99021c4d96d4afebebfbb2ea30"
  },
  {
    "url": "assets/js/page-AddingacustombridgetoRollux.21bf9dd3.js",
    "revision": "3e8365101db5b1db297a45b4734f3ca9"
  },
  {
    "url": "assets/js/page-AddingRolluxtoyourCEX.db9cfcfd.js",
    "revision": "213deeb4234863711fb2700bd661d676"
  },
  {
    "url": "assets/js/page-Airdrop1.d9fdc355.js",
    "revision": "c2cc09330b36d81b0245e5540dd06b27"
  },
  {
    "url": "assets/js/page-Airdrop2.ad785b93.js",
    "revision": "618c43807f822406e1623e7ab21bb6b6"
  },
  {
    "url": "assets/js/page-AnkrSDKAPI.d2929316.js",
    "revision": "5eb14fbe287b35133ec98c0ce8a14c7f"
  },
  {
    "url": "assets/js/page-Backend.6d9d4875.js",
    "revision": "a0aab46e868330d84f8e1e7c06f5bf68"
  },
  {
    "url": "assets/js/page-BedrockDifferences.9f4bbbd7.js",
    "revision": "fb46fb2032d1155d799f22e2d5bd56be"
  },
  {
    "url": "assets/js/page-BedrockExplainer.22c3f33e.js",
    "revision": "237760f2995c2c4e2501ae62a8f6567a"
  },
  {
    "url": "assets/js/page-BlockExplorers.764a38d1.js",
    "revision": "772595c335fc7647db1a5176601472c9"
  },
  {
    "url": "assets/js/page-Bridgingbasics.03f9def1.js",
    "revision": "8faeed7bb1b8cc0b3656740b3a34d11b"
  },
  {
    "url": "assets/js/page-BugFixesMiscellaneous.f0bdf45d.js",
    "revision": "c6654531b61c8a847da3605532952395"
  },
  {
    "url": "assets/js/page-Citizenship.02c6ce27.js",
    "revision": "d03a80d3ceddc6713e2ac43ca497aabe"
  },
  {
    "url": "assets/js/page-ClientsSDKs.a134530f.js",
    "revision": "b36f111ce4be7f997c92003a7be7a80e"
  },
  {
    "url": "assets/js/page-CommunicationStrategies.29ad3ef8.js",
    "revision": "e335747dbdec1557b0f5ba1281ec65eb"
  },
  {
    "url": "assets/js/page-CommunityNotice.e1c96171.js",
    "revision": "b5ed9e2d1272b5c995e6355cf7505efa"
  },
  {
    "url": "assets/js/page-ContractOverview.6c1a6f6e.js",
    "revision": "3bc1f959e502a6da4f9ff8f14c17bf22"
  },
  {
    "url": "assets/js/page-ContributetoRollux.1b46473e.js",
    "revision": "7b561f06ba5374aeb576e3fe17540663"
  },
  {
    "url": "assets/js/page-Corechanges.c0ccd41d.js",
    "revision": "93e91b4892c5fa688be004b4a00620b6"
  },
  {
    "url": "assets/js/page-CreateaRolluxNFT.9fb54661.js",
    "revision": "85ee6bf24aa387052408de8dc94f8ef5"
  },
  {
    "url": "assets/js/page-DataPrivacyPolicy.c1325979.js",
    "revision": "9b3e9414e96d757e1ddfda8a73ec3462"
  },
  {
    "url": "assets/js/page-DesignPhilosophy.d998af4d.js",
    "revision": "c06a89c79ba9becde3f3e028a79fc290"
  },
  {
    "url": "assets/js/page-Developerdocs.0b1e7233.js",
    "revision": "1c6e21fa40cf2a2c2d7f6e8ae888d473"
  },
  {
    "url": "assets/js/page-Developertools.3e672451.js",
    "revision": "6c425e69b6d9b6641b9003fa3e7fae5e"
  },
  {
    "url": "assets/js/page-DeveloperVideos.a0a3876a.js",
    "revision": "9f58c30c06a42646f03590e937929835"
  },
  {
    "url": "assets/js/page-DifferencesbetweenEthereumandOptimism.2ffcbbf8.js",
    "revision": "c82b86b28a74a0072d7b3f88fb3fafe8"
  },
  {
    "url": "assets/js/page-DifferencesbetweenEthereumandRollux.d5e7cb72.js",
    "revision": "32435d98bf19a5e5884803601ee7a077"
  },
  {
    "url": "assets/js/page-ethersjs.4ebc14b3.js",
    "revision": "7857bb9226f69bb2083bb631e702b052"
  },
  {
    "url": "assets/js/page-ExistingDelegates.a431b465.js",
    "revision": "2c3f9e6073cfba2c7e44fa556d271af1"
  },
  {
    "url": "assets/js/page-Finality.8d97af77.js",
    "revision": "57ce8b31514449444f252367874abe7a"
  },
  {
    "url": "assets/js/page-FindandTrackYourDelegate.a6222420.js",
    "revision": "dbfa02076fd8165d5dbd7edf1d54592a"
  },
  {
    "url": "assets/js/page-Gas.557baddb.js",
    "revision": "95033c62abacaf4114934d30ca1c495a"
  },
  {
    "url": "assets/js/page-GetSupport.ee7deb88.js",
    "revision": "e2d372dac6da7893cb6aca222afcf081"
  },
  {
    "url": "assets/js/page-GovernanceFundOverview.cbf15688.js",
    "revision": "5f13cf258e3c14d29d2fe169c0702c35"
  },
  {
    "url": "assets/js/page-GoverningDocuments.9a16396d.js",
    "revision": "cb8509fdc0e58b2de81ccb3405d53d5d"
  },
  {
    "url": "assets/js/page-Home.98e54668.js",
    "revision": "26261b3b292eac18ea1125c2bdf1cff9"
  },
  {
    "url": "assets/js/page-HowdoIgetprojectsupport(marketingintegrationsetc).4aa26e69.js",
    "revision": "f7a73fef44c3f7d2de0fa264698c1b1e"
  },
  {
    "url": "assets/js/page-HowdoImoveSYSfromSyscoinUTXOtoRollux.549d5f78.js",
    "revision": "c87a3ec314d848938a503348efc42a49"
  },
  {
    "url": "assets/js/page-HowdoImoveSYSorTokensfromSyscoinNEVMtoRollux(RolluxPortal).171daec1.js",
    "revision": "9f0c32c27c3f82fad24a6d5760b50aef"
  },
  {
    "url": "assets/js/page-HowdoImovetokensfromotherecosystemstoRollux.79fb389d.js",
    "revision": "90152b9fd44c6e02b92790a1f464b80b"
  },
  {
    "url": "assets/js/page-HowdoIstartusingRolluxMainnet.13936246.js",
    "revision": "f8f37b7ca075cecfa182113cdc609661"
  },
  {
    "url": "assets/js/page-HowdoIstartusingRolluxTestnet.4a225955.js",
    "revision": "47a891644419d2ad762d439b229d54f2"
  },
  {
    "url": "assets/js/page-HowdoIuseRolluxMainnetwithMetaMask.2bbd3d5f.js",
    "revision": "6bd9748b76eb69fb389d39443c586c50"
  },
  {
    "url": "assets/js/page-HowdoIuseRolluxMainnetwithPaliWallet.ff77baca.js",
    "revision": "625154e1cb0de73678aa4fc0079f28bd"
  },
  {
    "url": "assets/js/page-Howtobeadelegate.52f15ed7.js",
    "revision": "f6c5de9a7dd55e30c7d0c05c7d71271f"
  },
  {
    "url": "assets/js/page-HowtoDelegateYourTokens.15f71837.js",
    "revision": "2e6c59c23a99a39126ec32030c887335"
  },
  {
    "url": "assets/js/page-InteractingwithOptimismcontracts.3b6d9fd3.js",
    "revision": "5b15d9f2d286156be4b1bb75a40b7ca9"
  },
  {
    "url": "assets/js/page-InteractingwithRolluxcontracts.015864dc.js",
    "revision": "d50b4bc8a330ad41d5212130f6c430a0"
  },
  {
    "url": "assets/js/page-IntroductiontoSyscoin.7a07e677.js",
    "revision": "beff3982976221d86079ab3bed1321d4"
  },
  {
    "url": "assets/js/page-JSON-RPCAPI.bae90a9e.js",
    "revision": "64d8677eac7bc02ffdacbf654d62a351"
  },
  {
    "url": "assets/js/page-KeydifferencesbetweenRolluxandOptimism.b4af19ea.js",
    "revision": "4c071e3c5b4b160e9252ba61cda17523"
  },
  {
    "url": "assets/js/page-KnownIssues(none).36f1de2e.js",
    "revision": "b1d57d1da27c92c9393f4f73381df7d4"
  },
  {
    "url": "assets/js/page-MakingOptimismDappsEvenCheaper.06605b9e.js",
    "revision": "c3640f6c0bd761a0edf0654e2e3d26b3"
  },
  {
    "url": "assets/js/page-MakingRolluxDappsEvenCheaper.5a26e168.js",
    "revision": "cf0349645a634393075396912007ee1c"
  },
  {
    "url": "assets/js/page-MetaTransactions.3cd4fb17.js",
    "revision": "750229cb7b3ea79b2bac50d3337a02e4"
  },
  {
    "url": "assets/js/page-Metrics.ae914e8c.js",
    "revision": "cb6a563c9553e1e47e96f28d62cf43d8"
  },
  {
    "url": "assets/js/page-Monitoring.40bda285.js",
    "revision": "c0ac498acd5a1d7d9a4bac277cd48e3e"
  },
  {
    "url": "assets/js/page-NetworkFaucets.bb68df93.js",
    "revision": "4bcbdd36430cd74f1271f1aa9c084667"
  },
  {
    "url": "assets/js/page-NodeOperatorGuide.91277dbd.js",
    "revision": "01cf2352dc5aacdda621aa863a27c592"
  },
  {
    "url": "assets/js/page-NodeProviders.8641eb6e.js",
    "revision": "b916ff596d4450809141da8d0f9ae292"
  },
  {
    "url": "assets/js/page-OPAllocations.e7c43fc7.js",
    "revision": "9caedc5fc192c652fee29b31ad1c6329"
  },
  {
    "url": "assets/js/page-OPEconomics.fefa1d0a.js",
    "revision": "2146b4b846020715c17fe95d6c4da6f3"
  },
  {
    "url": "assets/js/page-Oracles.6f4c489f.js",
    "revision": "826c6dd619625203a8a89757c2ee0adf"
  },
  {
    "url": "assets/js/page-Overview.f0d1d8e4.js",
    "revision": "29faa2504e49e4e8174bf0488583555a"
  },
  {
    "url": "assets/js/page-PoDA.378978c0.js",
    "revision": "787845a0ccf3431d7d36208bc6f2da62"
  },
  {
    "url": "assets/js/page-Protocolspecs.e336df50.js",
    "revision": "5e0193fd0aa67f8f410255ff64df88d8"
  },
  {
    "url": "assets/js/page-PublicRPC(HTTPWebsocket).cbe0da67.js",
    "revision": "21820cfa00e0c59fecbd08ef5c7b4c4e"
  },
  {
    "url": "assets/js/page-PublicTestnets.3437df29.js",
    "revision": "64cb607d162c32b80289e463507fdbd1"
  },
  {
    "url": "assets/js/page-Releases.4d51f59d.js",
    "revision": "50bf1fb0647814e5e9361f2db2bcc9d6"
  },
  {
    "url": "assets/js/page-RetroPGFRound2.f199730b.js",
    "revision": "9c5a055c448bf951627da94805df71cf"
  },
  {
    "url": "assets/js/page-RollupProtocol.e1b596f4.js",
    "revision": "0fad72f14560293fa656734d5ec55bc4"
  },
  {
    "url": "assets/js/page-RolluxDevGuidesTutorials.fdec5c95.js",
    "revision": "472cb563de0960ee7c488efadaf27f86"
  },
  {
    "url": "assets/js/page-RolluxHelpCenter.21e951e2.js",
    "revision": "4ee56355dce504b385925955bd527f8d"
  },
  {
    "url": "assets/js/page-RolluxMainnetBetastatus.99c38d88.js",
    "revision": "6eec69b68ecffa93798cbb252090a831"
  },
  {
    "url": "assets/js/page-RolluxPolicies,Terms,andNotices.7c61c855.js",
    "revision": "9328b40a8848b2cd61f0534fa2dcad16"
  },
  {
    "url": "assets/js/page-RolluxPortalTermsConditions.251cae5e.js",
    "revision": "de7f89340f0a65083816122df5ab97ed"
  },
  {
    "url": "assets/js/page-Runningalocaldevelopmentenvironment.bb35199a.js",
    "revision": "7a292e3786177912142876db557a680f"
  },
  {
    "url": "assets/js/page-Runningamainnetreplicanode.fb378616.js",
    "revision": "db56d3414aecc13f29466035ef282152"
  },
  {
    "url": "assets/js/page-Runningatestnetormainnetnode.8917b2e5.js",
    "revision": "ba1bc9f19058cdd0f08fcda0f13c6403"
  },
  {
    "url": "assets/js/page-SendingdatabetweenL1andL2.5a9e1047.js",
    "revision": "ee3a78bc6912bc7e7f7c4d7d58c9c4c4"
  },
  {
    "url": "assets/js/page-SubmittingProposals.6127baf8.js",
    "revision": "a9e1dedc16802ca52e427c5892ad7168"
  },
  {
    "url": "assets/js/page-SupportingRolluxinyourwallet.7704ccf8.js",
    "revision": "66f7bf402c6abd8effecea4ec2af3bb7"
  },
  {
    "url": "assets/js/page-TestingDecentralizedApplicationswithRollux.85865a0f.js",
    "revision": "d506092cbadebb4e4848dbd4b6b56783"
  },
  {
    "url": "assets/js/page-TestingontheRolluxTestNetwork.5babe872.js",
    "revision": "2255610ffac861ee130323e1434ce132"
  },
  {
    "url": "assets/js/page-TheCanonicalTransactionChain(CTC)Format.f3f12d59.js",
    "revision": "aea4c57900d0a46ac60c583e3b1ed873"
  },
  {
    "url": "assets/js/page-TheRolluxClientSDK.6163f5f4.js",
    "revision": "c02e5fd8375a615926646158b4aa6033"
  },
  {
    "url": "assets/js/page-thirdwebSDK.cfbc4565.js",
    "revision": "f6235acda19e27ecf4754bf1ff4f8c72"
  },
  {
    "url": "assets/js/page-TokenHouseHistory.3f4ea68c.js",
    "revision": "7b8d9676d9bbc225df1f24b261b6d6e7"
  },
  {
    "url": "assets/js/page-TransactionDebuggingTools.8d56240f.js",
    "revision": "1c54e5d55058aa0c80450a3f5d05dd7b"
  },
  {
    "url": "assets/js/page-TransactionfeesonL2.7c616da8.js",
    "revision": "3065d836ccef50aa06eeb28915b8f940"
  },
  {
    "url": "assets/js/page-UpgradeGuide.13ac56ce.js",
    "revision": "4cd52e8ea591ac235be9b110934cbb1d"
  },
  {
    "url": "assets/js/page-UsingtheStandardBridge.064e79f2.js",
    "revision": "be581fe47c5fd3f4171cc0c1ac6c01f8"
  },
  {
    "url": "assets/js/page-viem.7532ebf5.js",
    "revision": "92d9ec21e79fb464d5664d8902337260"
  },
  {
    "url": "assets/js/page-web3js.772b1903.js",
    "revision": "301b681d5667c8e842a9a81581806350"
  },
  {
    "url": "assets/js/page-WhatistheAttestationStation.fdd823bc.js",
    "revision": "25aad3b3bc1ba85022c01caca7ddc7d2"
  },
  {
    "url": "assets/js/page-WhatistheOptimismCollective.474ccdcf.js",
    "revision": "98d78c21b5e33bd06bffe3b7a2f91ff4"
  },
  {
    "url": "assets/js/page-WhatistheOptimismFoundation.66701aca.js",
    "revision": "91d507a28bd0e0f8d778da5cc1dd9489"
  },
  {
    "url": "assets/js/vendors~docsearch.a62799fa.js",
    "revision": "d3e33fe21cbce636995d75a03e33fc95"
  },
  {
    "url": "assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-components/Common~layout-components/Page.6a448481.js",
    "revision": "9a466c48c925b873eabfbb5e3c0261d4"
  },
  {
    "url": "assets/js/vendors~layout-components/AlgoliaSearch/Full.2ec4a4f8.js",
    "revision": "9569710681c45c7bcf5fe56e0a4f008a"
  },
  {
    "url": "assets/js/vendors~layout-components/Blog/ArticleList~layout-components/Blog/BlogHome~layout-components/Blog/Bl~92201a0e.98a028fe.js",
    "revision": "84ab5b18d721cdd5729c9967301e24b5"
  },
  {
    "url": "assets/js/vendors~layout-Layout~layout-components/Page.6f6d784e.js",
    "revision": "434883226c17c89202cc3e88178e17f1"
  },
  {
    "url": "assets/js/vendors~photo-swipe.ae49cb61.js",
    "revision": "2392b09369d9a2fbfe5751f9f76a2996"
  },
  {
    "url": "assets/logos/favicon.png",
    "revision": "32eed5be3ed1e35dc4c904c0051fc9be"
  },
  {
    "url": "assets/logos/header-rollux-old.png",
    "revision": "35d3a4879673904bd5cd63148d86b83a"
  },
  {
    "url": "assets/logos/header-rollux.png",
    "revision": "4d2b2fa616af6f87a8c01bd866e7b8cc"
  },
  {
    "url": "assets/logos/header.png",
    "revision": "c95d0ffbb53636d0a945239d33f17043"
  },
  {
    "url": "assets/logos/icon_small.png",
    "revision": "adc8a10672267b7b9ce172e4f84bdb5c"
  },
  {
    "url": "assets/logos/icon-1020x1020.png",
    "revision": "b1d7ec51775d88b036b68cded3a97180"
  },
  {
    "url": "assets/logos/icon-192x192.png",
    "revision": "ff9c6426488e76ab778cab245c628cbb"
  },
  {
    "url": "assets/logos/icon-256x256.png",
    "revision": "fd9bd00f386a8eff5b45cabf0a8418a6"
  },
  {
    "url": "assets/logos/icon-384x384.png",
    "revision": "fecb971246b0c10c9cf06a5f27266af1"
  },
  {
    "url": "assets/logos/icon-512x512.png",
    "revision": "cd2338839acc4cec78642aff03bc0272"
  },
  {
    "url": "assets/logos/logo.png",
    "revision": "04a5dca60f0ab8f3a25881b7a89e1d7e"
  },
  {
    "url": "assets/logos/rollux_icon@4x.png",
    "revision": "8b2f2705a498958be00dba7e7dcc0e6d"
  },
  {
    "url": "docs/biz/index.html",
    "revision": "d1b169690e367b41aff10796976c5a31"
  },
  {
    "url": "docs/contribute/index.html",
    "revision": "5f6161b4834ce51c962ca10a5175b4f5"
  },
  {
    "url": "docs/developers/bedrock/bedrock/index.html",
    "revision": "160d6e580559d8e947eb9bb03b2bd42b"
  },
  {
    "url": "docs/developers/bedrock/differences/index.html",
    "revision": "24d829f29836db664ec97a929ebd160b"
  },
  {
    "url": "docs/developers/bedrock/explainer/index.html",
    "revision": "1718a54dc779979297794f9c0e997dd2"
  },
  {
    "url": "docs/developers/bedrock/how-is-bedrock-different/index.html",
    "revision": "752a0e19d65d2f76e5ae37d4163b8828"
  },
  {
    "url": "docs/developers/bedrock/index.html",
    "revision": "f3184f3dda69725db7624d6df6bdf11c"
  },
  {
    "url": "docs/developers/bedrock/metrics/index.html",
    "revision": "09b38caa7d5c873c8b3b9d1817dc7337"
  },
  {
    "url": "docs/developers/bedrock/node-operator-guide/index.html",
    "revision": "59d0835274fd1c0989ba7fa9f739f538"
  },
  {
    "url": "docs/developers/bedrock/public-testnets/index.html",
    "revision": "cc4d024c9e59a490c959a62e695b0e0d"
  },
  {
    "url": "docs/developers/bedrock/upgrade-guide/index.html",
    "revision": "4af7d220b0a7a8f76c1f251757c19266"
  },
  {
    "url": "docs/developers/bridge/basics/index.html",
    "revision": "4052ee1f912e199f34e2a0ee1297003e"
  },
  {
    "url": "docs/developers/bridge/comm-strategies/index.html",
    "revision": "28f7778c3fe24621b4b8210342657a10"
  },
  {
    "url": "docs/developers/bridge/messaging/index.html",
    "revision": "0fbbf53dd9664c7a017330c8f9e9b0aa"
  },
  {
    "url": "docs/developers/bridge/standard-bridge/index.html",
    "revision": "c219f3fc059a605aa7c04cd84dbd4310"
  },
  {
    "url": "docs/developers/build/cheap-dapp/index.html",
    "revision": "e76927d987f83f7048c730f2008e2616"
  },
  {
    "url": "docs/developers/build/dev-node/index.html",
    "revision": "5186d4351f0413cafa055cba3f77f910"
  },
  {
    "url": "docs/developers/build/differences/index.html",
    "revision": "d8daaa0aa4fdf429481ac4b68c4247bc"
  },
  {
    "url": "docs/developers/build/json-rpc/index.html",
    "revision": "07a53d1b81ab4b8b517d30ecc794baf2"
  },
  {
    "url": "docs/developers/build/run-a-node/index.html",
    "revision": "b1e0cfe84eb681290065671dfa627c45"
  },
  {
    "url": "docs/developers/build/system-contracts/index.html",
    "revision": "204235336106f6aff818f61999e4b48f"
  },
  {
    "url": "docs/developers/build/testing-dapps/index.html",
    "revision": "e79690f60689b4bdb20393bd9d1c62d6"
  },
  {
    "url": "docs/developers/build/transaction-fees/index.html",
    "revision": "ab8bacabde01b3cb507513899bfd0f28"
  },
  {
    "url": "docs/developers/index.html",
    "revision": "f70e471952cb1d7f128722087c8880c5"
  },
  {
    "url": "docs/developers/known-issues/index.html",
    "revision": "ed95cbcfb31aa223f5e8bee5e911a330"
  },
  {
    "url": "docs/developers/media/index.html",
    "revision": "f421e82c96ee73edbf2639a2560e76cd"
  },
  {
    "url": "docs/developers/releases/index.html",
    "revision": "0fc23a7e69aeea069eec2c9e7975041e"
  },
  {
    "url": "docs/governance/airdrop-1/index.html",
    "revision": "0b239914b8580084865e8532a9715b3f"
  },
  {
    "url": "docs/governance/airdrop-2/index.html",
    "revision": "c2da207f286bf24d3af70eed2b83cfa6"
  },
  {
    "url": "docs/governance/allocations/index.html",
    "revision": "e5def9dc61a6070b356b6fba89fc5269"
  },
  {
    "url": "docs/governance/attestation-station/index.html",
    "revision": "ca7d079aa64de759aedd28a32451ed4e"
  },
  {
    "url": "docs/governance/citizens-house/index.html",
    "revision": "b2eabc5d13d8db23d31eb80933ac3543"
  },
  {
    "url": "docs/governance/citizenship/index.html",
    "revision": "9cfc0c2c4fa5d15b1e5a1bd0a59d3087"
  },
  {
    "url": "docs/governance/delegate-info/index.html",
    "revision": "faf7312ae748b5e601ab00c458aab3e6"
  },
  {
    "url": "docs/governance/delegate/index.html",
    "revision": "02b921a24a33d949f9fd3655d089d3e5"
  },
  {
    "url": "docs/governance/economics/index.html",
    "revision": "8ad08d3a24d58c80e659870bc15a5aa6"
  },
  {
    "url": "docs/governance/existing-delegate/index.html",
    "revision": "dd890c2b8a57edb665b5666513aaa930"
  },
  {
    "url": "docs/governance/gov-fund/index.html",
    "revision": "a2c645b92d59d51f2fe80bb99915100a"
  },
  {
    "url": "docs/governance/howto-delegate/index.html",
    "revision": "f892a4189926c52e040051d033dc8684"
  },
  {
    "url": "docs/governance/index.html",
    "revision": "02ac721411bbfa90dafff0bcf55903df"
  },
  {
    "url": "docs/governance/proposals/index.html",
    "revision": "825cc59b53db8fa3df6a8ff9e9037563"
  },
  {
    "url": "docs/governance/retropgf-2/index.html",
    "revision": "c94fb97b1e2ff0675527054d631de8f9"
  },
  {
    "url": "docs/governance/token-house-history/index.html",
    "revision": "6d6405e380cc370ce6ac643dc7480c0f"
  },
  {
    "url": "docs/governance/token-house/index.html",
    "revision": "2b87b5c99eb586a5ff88750ca73fbbdd"
  },
  {
    "url": "docs/governance/what-is-the-optimism-foundation/index.html",
    "revision": "dad7fa8b8e724156136975a106aecc66"
  },
  {
    "url": "docs/guides/bridge-dev/index.html",
    "revision": "2e1dae7cb4e3ef0e00bcd37f882eec51"
  },
  {
    "url": "docs/guides/cex-dev/index.html",
    "revision": "fa57a94719d4edd996978ee26797bdc5"
  },
  {
    "url": "docs/guides/index.html",
    "revision": "7342d683fc58794cd340d75eba303b53"
  },
  {
    "url": "docs/guides/nft/index.html",
    "revision": "b37783a04a3ef065688185c25f535409"
  },
  {
    "url": "docs/guides/testing/index.html",
    "revision": "1da7cd2fb16dad80e82ed77611cd4bd7"
  },
  {
    "url": "docs/guides/wallet-dev/index.html",
    "revision": "29b36d8fd6b1a65f3baba8dce6ec0b67"
  },
  {
    "url": "docs/help/connect-metamask/index.html",
    "revision": "29cc6fe9e95596b7073fa41b391f53a5"
  },
  {
    "url": "docs/help/connect-pali/index.html",
    "revision": "12b5e051efc2f39825526b5fc0067baa"
  },
  {
    "url": "docs/help/get-support/index.html",
    "revision": "2d67bd007316e7019d1b1320602a0000"
  },
  {
    "url": "docs/help/index.html",
    "revision": "e84697d5e2d012aaf3098f6d7ae45e92"
  },
  {
    "url": "docs/help/start-using-rollux-mainnet/index.html",
    "revision": "e4798008f4a32715e7bd1fcca9c8e0af"
  },
  {
    "url": "docs/help/start-using-rollux-testnet/index.html",
    "revision": "60aab9ef37aeefe83613f8de64f5bde8"
  },
  {
    "url": "docs/help/third-party-bridges/index.html",
    "revision": "4762b47bbdda00b7480c564dc9588e59"
  },
  {
    "url": "docs/help/using-rollux-portal/index.html",
    "revision": "c3c44cdd222b52df9d627c23505e2c38"
  },
  {
    "url": "docs/help/utxo-to-rollux/index.html",
    "revision": "682ad0b4f25cc5e179212d03d5a56c23"
  },
  {
    "url": "docs/key-differences/backend/index.html",
    "revision": "694bf01266aa5a059b4fb16b2d40c59f"
  },
  {
    "url": "docs/key-differences/changes/index.html",
    "revision": "37839d6108b68723b5d47783ef5e9888"
  },
  {
    "url": "docs/key-differences/index.html",
    "revision": "549e3c3be57918b97ac99712eba1fc00"
  },
  {
    "url": "docs/key-differences/misc/index.html",
    "revision": "821a163db33ffeea9b7c9e204e6c056e"
  },
  {
    "url": "docs/legal/community-notice-1/index.html",
    "revision": "f79494d4b9d47f31379f7e45a2a414fa"
  },
  {
    "url": "docs/legal/data-privacy-policy/index.html",
    "revision": "a3c93e363e0ab1ea41409fbea62d2425"
  },
  {
    "url": "docs/legal/index.html",
    "revision": "8f080959662b603b1be5899d510bf209"
  },
  {
    "url": "docs/legal/portal-terms/index.html",
    "revision": "d0d90fdc3d1c4ae455037cac3a599e6e"
  },
  {
    "url": "docs/protocol/1-design-philosophy/index.html",
    "revision": "e336eacf4f2ca787eb89fd7fb90cf1c4"
  },
  {
    "url": "docs/protocol/2-rollup-protocol/index.html",
    "revision": "36d37a26f41010505f9402048e1e289f"
  },
  {
    "url": "docs/protocol/compressed-ctc/index.html",
    "revision": "f6b85a9717929fa9a0f01b3a59e5387c"
  },
  {
    "url": "docs/protocol/index.html",
    "revision": "5714c405ca1dc9c20efdc5242c6cfba7"
  },
  {
    "url": "docs/protocol/protocol-2.0/index.html",
    "revision": "77d68ea16c5f5321198f51445105dd5e"
  },
  {
    "url": "docs/protocol/sequencing/index.html",
    "revision": "6ec5bc192025f7109bbd1491d5d51fb8"
  },
  {
    "url": "docs/rollux-developers/bedrock/bedrock/index.html",
    "revision": "ae47eb0e396c204c57be82b4292e2005"
  },
  {
    "url": "docs/rollux-developers/bedrock/differences/index.html",
    "revision": "cd8e4fa088fd5c29e62cbf19d696a6d7"
  },
  {
    "url": "docs/rollux-developers/bedrock/explainer/index.html",
    "revision": "5e219a14ae0832a8c70ff1e33796d00a"
  },
  {
    "url": "docs/rollux-developers/bedrock/how-is-bedrock-different/index.html",
    "revision": "9ba5b25a567f8954b5c5e55898c50e53"
  },
  {
    "url": "docs/rollux-developers/bedrock/index.html",
    "revision": "607ff35dace6e42a833196ee948cfd3b"
  },
  {
    "url": "docs/rollux-developers/bedrock/metrics/index.html",
    "revision": "a808ab27d821ddfe82cdb5bd71cc8ce1"
  },
  {
    "url": "docs/rollux-developers/bedrock/node-operator-guide/index.html",
    "revision": "39cd54cb30a6d5edff1e23c581442b1e"
  },
  {
    "url": "docs/rollux-developers/bedrock/public-testnets/index.html",
    "revision": "bd7f64a30e58a724d6035a1e44f09999"
  },
  {
    "url": "docs/rollux-developers/bedrock/upgrade-guide/index.html",
    "revision": "350467a12899165591274e1004984226"
  },
  {
    "url": "docs/rollux-developers/bridge/basics/index.html",
    "revision": "e5854bc5a8e2585d62f6467dbd1cb05e"
  },
  {
    "url": "docs/rollux-developers/bridge/comm-strategies/index.html",
    "revision": "f8c9631506cee4ffcb1d3264bc68f801"
  },
  {
    "url": "docs/rollux-developers/bridge/messaging/index.html",
    "revision": "2c22062322672fdbc353536b79797d34"
  },
  {
    "url": "docs/rollux-developers/bridge/standard-bridge/index.html",
    "revision": "0e28e622ca4d23115bf08e6b744cc338"
  },
  {
    "url": "docs/rollux-developers/build/cheap-dapp/index.html",
    "revision": "c88eef9d68b57a916f2c4079c07335b7"
  },
  {
    "url": "docs/rollux-developers/build/dev-node/index.html",
    "revision": "1ac8348218937831b107bc926ea3b84f"
  },
  {
    "url": "docs/rollux-developers/build/differences/index.html",
    "revision": "a878003517c7962449498474cf46b2e8"
  },
  {
    "url": "docs/rollux-developers/build/json-rpc/index.html",
    "revision": "91afa82c0293e7284a9a2dada7183d75"
  },
  {
    "url": "docs/rollux-developers/build/run-a-node/index.html",
    "revision": "727f61baad4f6d39a0d8d6a6afc9bd65"
  },
  {
    "url": "docs/rollux-developers/build/system-contracts/index.html",
    "revision": "0851b150364ca742c0bcc6e3aac4473d"
  },
  {
    "url": "docs/rollux-developers/build/testing-dapps/index.html",
    "revision": "0e7c3e4b69a51a350aaec2a4420c4841"
  },
  {
    "url": "docs/rollux-developers/build/transaction-fees/index.html",
    "revision": "f238686e324887238eeb934583fd3ecf"
  },
  {
    "url": "docs/rollux-developers/index.html",
    "revision": "994cd18d8d04d9ac93307a9faf95d0df"
  },
  {
    "url": "docs/rollux-developers/known-issues/index.html",
    "revision": "8b3fbde9c7c5448a070c2598cfa87b53"
  },
  {
    "url": "docs/rollux-developers/media/index.html",
    "revision": "6b183f98f6d0b7d9ebb623b9fe4a9b25"
  },
  {
    "url": "docs/rollux-developers/releases/index.html",
    "revision": "caefb9e9a5b6c80eb4e259bb8977ab33"
  },
  {
    "url": "docs/sdk/ankr/index.html",
    "revision": "d8ef0701a47a0421ab1de9c06b604490"
  },
  {
    "url": "docs/sdk/ethers/index.html",
    "revision": "ee7740564783c3ab60d402b82fcfaf0f"
  },
  {
    "url": "docs/sdk/index.html",
    "revision": "81ba5eca5518e3b2746953350880d647"
  },
  {
    "url": "docs/sdk/js-client/index.html",
    "revision": "fab4cb98fd1d9da1710aaa0e11b61de1"
  },
  {
    "url": "docs/sdk/thirdweb/index.html",
    "revision": "9dab11c25176a6464fdd0e31840e05a0"
  },
  {
    "url": "docs/sdk/viem/index.html",
    "revision": "fb49e83d6ee4a9073ca7e6e2d99cd0c5"
  },
  {
    "url": "docs/sdk/web3/index.html",
    "revision": "59df57fa82bc25c0b5f7bacb42cd90b1"
  },
  {
    "url": "docs/security-model/index.html",
    "revision": "c5560e2a1b77aa6d440eec0f263ef417"
  },
  {
    "url": "docs/sys/Finality/index.html",
    "revision": "42fcd79a3146d5d3ea114c58bb7fb6af"
  },
  {
    "url": "docs/sys/Gas/index.html",
    "revision": "062a6b3e5cfcd7f5f44df61bc08bc36a"
  },
  {
    "url": "docs/sys/index.html",
    "revision": "d03b13dcbe0b8d736d8e755dd5d19d20"
  },
  {
    "url": "docs/sys/Intro/index.html",
    "revision": "b6b05c3570b53978f5d8dae22983f42a"
  },
  {
    "url": "docs/sys/PoDA/index.html",
    "revision": "4738d6f21f279a75db23c8e42a265723"
  },
  {
    "url": "docs/useful-tools/debugging/index.html",
    "revision": "3fc17906248eacf2552d2fd51dffa74c"
  },
  {
    "url": "docs/useful-tools/explorers/index.html",
    "revision": "014b356b562b80673978353e78cf667f"
  },
  {
    "url": "docs/useful-tools/faucets/index.html",
    "revision": "07db0bc742ec9eac3532324fd87cc9b5"
  },
  {
    "url": "docs/useful-tools/index.html",
    "revision": "0dd81018e058c184c7c9524c86a1b405"
  },
  {
    "url": "docs/useful-tools/meta-tx/index.html",
    "revision": "c34469882fb0a8d092edcaeaa93d2221"
  },
  {
    "url": "docs/useful-tools/monitoring/index.html",
    "revision": "3eebfe819753068e2da0caae880bd0c6"
  },
  {
    "url": "docs/useful-tools/networks/index.html",
    "revision": "cd49ab60659b700c2cf0bc93292806e9"
  },
  {
    "url": "docs/useful-tools/oracles/index.html",
    "revision": "3715e4c5ebf209e6105f267e7e5083d3"
  },
  {
    "url": "docs/useful-tools/providers/index.html",
    "revision": "1ff40351c232e8eb1e125e529baff8b1"
  },
  {
    "url": "index.html",
    "revision": "ab8334ba78981882f2c978eaf9de23a5"
  },
  {
    "url": "workbox-582e555e.js",
    "revision": "93b0107a20e5e2d64f7b97cb07d18ee5"
  }
].concat(self.__precacheManifest || []);
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
