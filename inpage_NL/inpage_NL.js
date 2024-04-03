var InPageAdxNetlink = function (adUnit, _divElement, _divChilElement) {
  var _head = window.top.document.querySelector("head");
  $(document).ready(function () {
    $(document).ready(function () {
      $(window).on("scroll", function () {
        if (document.getElementById("content-ad") != null) {
          var top = $("#content-ad").offset().top - $(window).scrollTop() - 70;
          var bot = top > 0 ? 600 : 600 + top;
          if ($(window).width() < 768) {
            document
              .getElementById("content-ad")
              .style.setProperty("height", "600px", "important");
            $("#ad").css({
              display: `block`,
              clip: `rect(` + top + `px, 300px, ` + bot + `px, 0px)`,
              left: ($(window).width() - 300) / 2 + `px`,
            });
          }
        }
      });
    });

    var count = 0;
    var links = $(_divElement).find(_divChilElement);
    if (links.length <= 4) midpoint = 1;
    else midpoint = Math.floor(links.length / 2);
    for (var i = 0; i < links.length; i++) {
      count++;
      if (count == midpoint) {
        var ele = links[i];

        function insertAfter(referenceNode, newNode) {
          referenceNode.parentNode.insertBefore(
            newNode,
            referenceNode.nextSibling
          );
        }

        var el = document.createElement("div");
        el.setAttribute("id", "netlink");
        var div = links[i];
        insertAfter(div, el);
      }
    }
    var scriptTag = document.createElement("script");
    scriptTag.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
    scriptTag.async = true;

    var scriptTag2 = document.createElement("script");
    scriptTag2.innerHTML = `window.googletag = window.googletag || {cmd: []};googletag.cmd.push(function() {googletag.defineSlot("${adUnit}", [300, 600], 'div-gpt-ad-1712027483252-0').addService(googletag.pubads());googletag.pubads().enableSingleRequest();googletag.enableServices();});`;
    _head.appendChild(scriptTag);
    _head.appendChild(scriptTag2);
    var html = `<div id="content-ad" style="overflow: hidden; position: relative; z-index: 2; width: 100%;">`;
    html += `<div id="ad" style="position: fixed;z-index: 10000;top: 70px;display:none;">`;
    html += `<div id='div-gpt-ad-1712027483252-0' style='min-width: 300px; min-height: 600px;'>
    <script>
      googletag.cmd.push(function() { googletag.display('div-gpt-ad-1712027483252-0'); });
    </script>
    </div>`;
    html += `</div>`;
    html += `</div>`;
    $("#netlink").append(html);
  });
};
