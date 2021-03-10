!(function() {
  window.onload = function () {
    let before = `<b>最近新开了微信公众号，大家可以订阅一下呀，后续的文章会同步发送到微信公众号上</b>
    <img style="width: 100%;max-width:600px;" src="https://mohuishou-blog-sz.oss-cn-shenzhen.aliyuncs.com/custom/wechat_white.png" alt="wechat">`

    let after = `<h2 id="关注我获取更新"><a href="#关注我获取更新" class="headerlink" title="关注我获取更新"></a>关注我获取更新<a                class="anchorjs-link"                aria-label="Anchor"                data-anchorjs-icon=""                href="#关注我获取更新"                style="font: 1em / 1 anchorjs-icons; padding-left: 0.375em"              ></a></h2><div class="row"><div class="col-lg-6"><img style="width: 100%;" src="https://mohuishou-blog-sz.oss-cn-shenzhen.aliyuncs.com/custom/wechat_white.png" alt="wechat"></div><div class="col-lg-2 col-4"><a target="_blank" href="http://s.zhihu.com/B4RT3"><img style="width: 100%;" src="https://mohuishou-blog-sz.oss-cn-shenzhen.aliyuncs.com/custom/zhihu.png" alt="知乎"></a></div><div class="col-lg-2 col-4"><a target="_blank" href="https://toutiao.io/subjects/387401?f=new"><img style="width: 100%;" src="https://mohuishou-blog-sz.oss-cn-shenzhen.aliyuncs.com/custom/toutiaoio.png" alt="开发者头条"></a></div><div class="col-lg-2 col-4"><a target="_blank" href="https://github.com/mohuishou"><img style="width: 100%;" src="https://mohuishou-blog-sz.oss-cn-shenzhen.aliyuncs.com/custom/github.png" alt="github"></a></div></div>`
    
    let body = document.querySelector("#board > article > div.markdown-body")
    body.insertAdjacentHTML('beforebegin', before)
    body.insertAdjacentHTML('afterend', after)
  }
})();