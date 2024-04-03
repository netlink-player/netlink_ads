var MultyRatioNetlink = function (adUnit, _divElement, ) {
  var gpt_script = document.createElement('script');
    gpt_script.async = true;
    gpt_script.src = 'https://securepubads.g.doubleclick.net/tag/js/gpt.js';
document.getElementsByTagName('head')[0].appendChild(gpt_script);

var netlink_style = document.createElement('style');
    netlink_style.type = 'text/css';
    netlink_style.innerHTML = 
    '.netlink-in-articles { margin-top:10px;margin-bottom:10px;margin-left:calc(50% - 50vw);margin-right:calc(50% - 50vw); }'+
    '.ia-content { position: relative;min-height: 600px; }'+
    '.in-articles { text-align: center; }'+
    '.netlink-in-articles::before { content: "Ads By Netlink";display: inline-block;width: 100%;height: 20px;font-size: 14px;text-align: center;color: #9e9e9e;background-color: #f1f1f1; }'+
    '.netlink-in-articles::after { content: "Scroll to Continue";display: inline-block;width: 100%;height: 20px;font-size: 14px;text-align: center;color: #9e9e9e;background-color: #f1f1f1; }';
document.getElementsByTagName('head')[0].appendChild(netlink_style);

document.addEventListener("DOMContentLoaded", () => {
    if(window.screen.width <= 768) {
        var ads_config = [
            {
                ad_unit: adUnit[0],
                size: [[300, 600], [300, 250]],
                id: random_id()
            }, 
            {
                ad_unit: adUnit[1],
                size: [[300, 600], [300, 250]],
                id: random_id()
            },
        ];

        window.googletag = window.googletag || {cmd: []};
        googletag.cmd.push(function() {
            for(var i = 0; i < ads_config.length; i++) {
                var c = ads_config[i];
                googletag.defineSlot(c.ad_unit, c.size, c.id).addService(googletag.pubads());
            }
            googletag.pubads().enableSingleRequest();
            googletag.enableServices();
        });

        var ac = 0;
        var sp = ap = 0;

        var links = document.querySelectorAll(_divElement);
        for (var i = 0; i < links.length; i++) {
            if(ac == ads_config.length) break;
            
            if(sp==0) {
                sp = links[i].offsetTop;
            }

            ap = links[i].offsetTop;

            if(sp + screen.height < ap) {
                function insertAfter(referenceNode, newNode) {
                    referenceNode.parentNode.insertBefore(newNode, referenceNode);
                }

                var c = ads_config[ac];

                var el = document.createElement("div");
                el.setAttribute('class','netlink-in-articles');
                insertAfter(links[i], el);

                var html =  '<div class="ia-content">'+
                                '<div class="in-articles">'+
                                    '<div id="'+c.id+'"></div>'+
                                '</div>'+
                            '</div>';

                el.innerHTML = html;

                googletag.cmd.push(function() { googletag.display(c.id); });

                ac++;
                sp = ap + el.clientHeight;
            }
        }

        if(document.getElementsByClassName("netlink-in-articles").length > 0) {
            in_articles();
        }
    }
});

function in_articles() {
    document.addEventListener('scroll', function(e) {
        var s = document.documentElement.scrollTop;

        for(var i = 0; i <document.getElementsByClassName("netlink-in-articles").length; i++) {
            var e = document.getElementsByClassName("netlink-in-articles")[i];

            var div = e.querySelector('.in-articles');
            var h = e.querySelector('.ia-content').clientHeight;
            var ch = e.querySelector('.in-articles').clientHeight;

            var ap = e.querySelector('.ia-content').getBoundingClientRect().top;
            if(ch < h) {
                if(ap >= 0) {
                    div.style.position = '';
                    div.style.top = '';
                    div.style.bottom = '';
                    div.style.left = "";
                    div.style.transform = "";
                } else if(ap < 0 && Math.abs(ap) + ch < h) {
                    div.style.position = 'fixed';
                    div.style.top = '0';
                    div.style.bottom = '';
                    div.style.left = "50%";
                    div.style.transform = "translateX(-50%)";
                } else if (Math.abs(ap) + ch >= h) {
                    div.style.position = 'absolute';
                    div.style.top = '';
                    div.style.bottom = '0';
                    div.style.left = "50%";
                    div.style.transform = "translateX(-50%)";
                }
            } else {
                div.style.position = '';
                div.style.top = '';
                div.style.bottom = '';
                    div.style.left = "";
                    div.style.transform = "";
            }
        }
    });
}

var ar = [];
function random_id() {
    var r = Math.random().toString().substring(2);
    while (1) {
        if(!ar.includes(r)) {
            break;
        }
        r = Math.random().toString().substring(2);
    }
    ar.push(r);

    return 'div-netlink-ia-'+r+'-0';
}
};
