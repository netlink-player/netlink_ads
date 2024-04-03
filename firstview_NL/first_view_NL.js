var FirstViewAdxNetlink = function (adUnit) {
  var body = window.top.document.querySelector("body");
  var _head = window.top.document.querySelector("head");
  // Tạo phần tử div chứa hình ảnh
  var mobileFVAdxElement = document.createElement("div");
  mobileFVAdxElement.style.setProperty("width", "100%", "important");
  mobileFVAdxElement.style.setProperty("position", "fixed", "important");
  mobileFVAdxElement.style.setProperty("top", "0", "important");
  mobileFVAdxElement.style.setProperty("left", "0", "important");
  mobileFVAdxElement.style.zIndex = "10000000000";
  mobileFVAdxElement.style.textAlign = "center";
  mobileFVAdxElement.style.opacity = 1;
  mobileFVAdxElement.style.height = "100vh";
  mobileFVAdxElement.style.setProperty("min-height", "300px", "important");
  mobileFVAdxElement.style.backgroundColor = "#ffffffb3";
  mobileFVAdxElement.style.visibility = "hidden";

  var scriptTag = document.createElement("script");
  scriptTag.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
  scriptTag.async = true;

  var scriptTag2 = document.createElement("script");
  scriptTag2.innerHTML = `window.googletag = window.googletag || {cmd: []};googletag.cmd.push(function() {googletag.defineSlot("${adUnit}", [300, 600], 'div-gpt-ad-1711681469270-0').addService(googletag.pubads());googletag.pubads().enableSingleRequest();googletag.enableServices();});`;

  _head.appendChild(scriptTag);
  _head.appendChild(scriptTag2);

  var divElement = document.createElement("div");
  divElement.id = "div-gpt-ad-1711681469270-0";
  //divElement.style.setProperty("minHeight", "600px", "important");
  //divElement.style.setProperty("width", "300px", "important");
  divElement.style.minWidth = "300px";
  divElement.style.minHeight = "600px";
  divElement.style.position = "absolute";
  divElement.style.left = "50%";
  divElement.style.top = "50%";
  divElement.style.transform = "translate(-50%, -50%)";

  var scriptElement2 = document.createElement("script");
  scriptElement2.innerHTML =
    "googletag.cmd.push(function() {googletag.display('div-gpt-ad-1711681469270-0');});";
  divElement.appendChild(scriptElement2);

  // Tạo nút xóa

  var btnCloseNLFVAdx = document.createElement("div");
  btnCloseNLFVAdx.style.position = "absolute";
  btnCloseNLFVAdx.style.setProperty("display", "none", "important");
  btnCloseNLFVAdx.style.zIndex = 99;
  btnCloseNLFVAdx.style.setProperty("width", "60px", "important");
  btnCloseNLFVAdx.style.setProperty("height", "25px", "important");
  btnCloseNLFVAdx.style.setProperty("right", "0px", "important");
  btnCloseNLFVAdx.style.setProperty("top", "5%", "important");
  btnCloseNLFVAdx.style.cursor = "pointer";

  btnCloseNLFVAdx.style.background = "#b7b7b7b5";
  btnCloseNLFVAdx.style.padding = "2px";
  btnCloseNLFVAdx.style.borderRadius = "20px 0px 0px 20px";

  var spanCloseNLFVAdx = document.createElement("span");
  spanCloseNLFVAdx.innerHTML = "close";
  spanCloseNLFVAdx.style.position = "absolute";
  spanCloseNLFVAdx.style.fontSize = "15px";
  spanCloseNLFVAdx.style.top = "50%";
  spanCloseNLFVAdx.style.left = "50%";
  spanCloseNLFVAdx.style.transform = "translate(-50%, -50%)";

  btnCloseNLFVAdx.appendChild(spanCloseNLFVAdx);
  

  mobileFVAdxElement.appendChild(btnCloseNLFVAdx);
  mobileFVAdxElement.appendChild(divElement);
  mobileFVAdxElement.appendChild(scriptElement2);

  body.appendChild(mobileFVAdxElement);
  if (window.innerWidth <= 768) {
    mobileFVAdxElement.style.setProperty("display", "block", "important");
  } else {
    mobileFVAdxElement.style.setProperty("display", "none", "important");
  }

  window.addEventListener("scroll", function () {
    mobileFVAdxElement.style.height = "100vh";
  });
  btnCloseNLFVAdx.addEventListener("click", function () {
    mobileFVAdxElement.remove();
  });

  var adCheck = setIntervalWithTimeout(
    function () {
      var iframeAdx = divElement.querySelector("iframe");
      if (iframeAdx) {
        if (iframeAdx.getAttribute("data-load-complete") == "true") {
          // containerNL.style.backgroundColor = "white";
          mobileFVAdxElement.style.visibility = "visible";
          btnCloseNLFVAdx.style.display = "block";
          clearInterval(adCheck.intervalId);
        }
      }
    },
    1000,
    10000
  );
  function setIntervalWithTimeout(callback, interval, timeout) {
    var timer = setInterval(function () {
      callback();
    }, interval);
    var timeoutId = setTimeout(function () {
      clearInterval(timer);
    }, timeout);
    return { intervalId: timer, timeoutId: timeoutId };
  }
};
