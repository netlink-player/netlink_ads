var InImageNetlink = function (adUnit, _divElement, intImage, _isMbtop) {
  var _head = window.top.document.querySelector("head");
  var _body = window.top.document.querySelector("body");
  var mainContentDetail = _body.querySelector(_divElement);
  var images = mainContentDetail.querySelectorAll("img");

  var containerPar = document.createElement("div");
  containerPar.style.position = "relative";
  containerPar.style.display = "inline-block";
  containerPar.style.width = images[intImage].width + "px !important";
  containerPar.style.height = images[intImage].height + "px !important";

  var containerNL = document.createElement("div");
  containerNL.id = "containerNL";
  containerNL.style.position = "absolute";
  containerNL.style.bottom = 0;
  containerNL.style.zIndex = 8;
  containerNL.style.setProperty(
    "width",
    images[intImage].width + "px",
    "important"
  );
  containerNL.style.setProperty("height", "50px", "important");

  var scriptTag = document.createElement("script");
  scriptTag.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
  scriptTag.async = true;

  var scriptTag2 = document.createElement("script");
  scriptTag2.innerHTML =
    `window.googletag = window.googletag || {cmd: []};googletag.cmd.push(function() {googletag.defineSlot('${adUnit}', [300, 50], 'div-gpt-ad-1711076508079-0').addService(googletag.pubads());googletag.pubads().enableSingleRequest();googletag.enableServices();});`;

  _head.appendChild(scriptTag);
  _head.appendChild(scriptTag2);

  var divElement = document.createElement("div");
  divElement.id = "div-gpt-ad-1711076508079-0";
  // divElement.style.minWidth = "300px";
  //divElement.style.minHeight = "100px";
  //divElement.style.maxWidth = "300px";
  //divElement.style.maxHeight = "50px";
  divElement.style.setProperty("maxHeight", "50px", "important");
  divElement.style.setProperty("maxWidth", "300px", "important");
  divElement.style.setProperty("width", "300px", "important");
  //divElement.style.maxHeight = "50px";
  //divElement.style.maxHeight = "50px";

  var scriptElement2 = document.createElement("script");
  scriptElement2.innerHTML =
    "googletag.cmd.push(function() {googletag.display('div-gpt-ad-1711076508079-0');});";
  divElement.appendChild(scriptElement2);

  var btnCloseNL = document.createElement("span");
  btnCloseNL.innerHTML = "×";
  btnCloseNL.style.position = "absolute";
  btnCloseNL.style.display = "none";
  btnCloseNL.style.zIndex = 1;
  btnCloseNL.style.setProperty("width", "25px", "important");
  btnCloseNL.style.setProperty("height", "25px", "important");
  btnCloseNL.style.setProperty("right", "2px", "important");
  btnCloseNL.style.setProperty("top", "-27px", "important");
  btnCloseNL.style.cursor = "pointer";
  btnCloseNL.style.fontSize = "20px";
  btnCloseNL.style.textAlign = "center";
  btnCloseNL.style.background = "white";
  btnCloseNL.style.padding = "2px";
  btnCloseNL.style.borderRadius = "20px";

  containerNL.appendChild(divElement);

  containerNL.appendChild(btnCloseNL);

  var intervalImg = setInterval(function () {
    if (isImageFile(images[intImage].src)) {
      containerPar.appendChild(images[intImage].cloneNode(true));
      containerPar.appendChild(containerNL);
      images[intImage].parentNode.replaceChild(containerPar, images[intImage]);
      clearInterval(intervalImg);

      var adCheck = setIntervalWithTimeout(
        function () {
          var iframeAdx = divElement.querySelector("iframe");
          if (iframeAdx) {
            if (iframeAdx.getAttribute("data-load-complete") == "true") {
              containerNL.style.backgroundColor = "white";
              btnCloseNL.style.display = "block";
              clearInterval(adCheck.intervalId);
            }
          } else {
            console.log("Không tìm thấy thẻ iframe trong div container.");
          }
        },
        1000,
        10000
      );
    }
  }, 1000);

  btnCloseNL.addEventListener("click", function () {
    document.getElementById("containerNL").remove();
  });
};

function isImageFile(str) {
  return /\.(jpg|jpeg|png)$/i.test(str);
}

function setIntervalWithTimeout(callback, interval, timeout) {
  var timer = setInterval(function () {
    callback();
  }, interval);
  var timeoutId = setTimeout(function () {
    clearInterval(timer);
  }, timeout);
  return { intervalId: timer, timeoutId: timeoutId };
}
