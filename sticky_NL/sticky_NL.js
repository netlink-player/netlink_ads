var StickyNetlink = function (adUnit, _isMbtop) {
  var _body = window.top.document.querySelector("body");
  var _head = window.top.document.querySelector("head");
  var scriptTag = document.createElement("script");
  scriptTag.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
  scriptTag.async = true;

  _head.appendChild(scriptTag);
  var scriptTagElement = document.createElement("script");
  scriptTagElement.innerHTML = ` window.googletag = window.googletag || { cmd: [] };
  let anchorSlot;
  googletag.cmd.push(() => {
    anchorSlot = googletag.defineOutOfPageSlot(
      "${adUnit}",
      document.body.clientWidth <= 768
        ? (${_isMbtop} ? googletag.enums.OutOfPageFormat.TOP_ANCHOR : googletag.enums.OutOfPageFormat.BOTTOM_ANCHOR)
        : googletag.enums.OutOfPageFormat.BOTTOM_ANCHOR
    );
    if (anchorSlot) {
      anchorSlot.setTargeting("test", "anchor").addService(googletag.pubads());
    }
    googletag.pubads().enableSingleRequest();
    googletag.enableServices();
  });

  googletag.cmd.push(() => {
    googletag.display(anchorSlot);
  });`;
  _body.appendChild(scriptTagElement);
};
