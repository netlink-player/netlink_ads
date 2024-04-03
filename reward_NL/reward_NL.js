var RewardAdxNetlink = function (adunit) {
  var _body = window.top.document.querySelector("body");
  var _head = window.top.document.querySelector("head");
  var scriptTag = document.createElement("script");
  scriptTag.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
  scriptTag.async = true;

  _head.appendChild(scriptTag);
  var scriptElement = document.createElement("script");
  scriptElement.innerHTML =
    `window.googletag = window.googletag || { cmd: [] }; let rewardedSlot; let rewardPayload;googletag.cmd.push(() => { rewardedSlot = googletag.defineOutOfPageSlot('${adunit}', googletag.enums.OutOfPageFormat.REWARDED); if (rewardedSlot) { rewardedSlot.addService(googletag.pubads()); googletag.pubads().addEventListener('rewardedSlotReady', (event) => { console.log('Rewarded ad slot is ready.'); event.makeRewardedVisible(); }); googletag.pubads().addEventListener('rewardedSlotClosed', dismissRewardedAd); googletag.pubads().addEventListener('rewardedSlotGranted', (event) => { rewardPayload = event.payload; console.log('Reward granted.'); }); googletag.pubads().addEventListener('slotRenderEnded', (event) => { if (event.slot === rewardedSlot && event.isEmpty) { console.log('No ad returned for rewarded ad slot.'); } }); googletag.enableServices(); googletag.display(rewardedSlot); } else { console.log('Rewarded ads are not supported on this page.'); } }); function dismissRewardedAd() { if (rewardPayload) { rewardPayload = null; } if (rewardedSlot) { googletag.destroySlots([rewardedSlot]); } }`;
  _body.appendChild(scriptElement);
};
