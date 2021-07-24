
<div class="note note-info">
            <p>注：本文所有示例代码都可以在 <a href="https://github.com/mohuishou/blog-code">blog-code</a> 仓库中找到</p>
          </div>

importScripts('https://cdn.webpushr.com/sw-server.min.js');
<h2 id="关注我获取更新">
  <a href="#关注我获取更新" class="headerlink" title="关注我获取更新"></a>关注我获取更新<a
    class="anchorjs-link"
    aria-label="Anchor"
    data-anchorjs-icon=""
    href="#关注我获取更新"
    style="font: 1em / 1 anchorjs-icons; padding-left: 0.375em"
  ></a>
</h2>
<div class="row">
  <div class="col-lg-6">
    <img
      style="width: 100%"
      src="https://img.lailin.xyz/custom/wechat_white.png"
      alt="wechat"
    />
  </div>
  <div class="col-lg-2 col-4">
    <a target="_blank" href="http://s.zhihu.com/B4RT3"
      ><img
        style="width: 100%"
        src="https://img.lailin.xyz/custom/zhihu.png"
        alt="知乎"
    /></a>
  </div>
  <div class="col-lg-2 col-4">
    <a target="_blank" href="https://toutiao.io/subjects/387401?f=new"
      ><img
        style="width: 100%"
        src="https://img.lailin.xyz/custom/toutiaoio.png"
        alt="开发者头条"
    /></a>
  </div>
  <div class="col-lg-2 col-4">
    <a target="_blank" href="https://github.com/mohuishou"
      ><img
        style="width: 100%"
        src="https://img.lailin.xyz/custom/github.png"
        alt="github"
    /></a>
  </div>
</div>

<!-- Add wechat img after categories -->
<script>
document.addEventListener('DOMContentLoaded', (event) => {
  let toc = $("#toc");
  if (toc.height() >= 1){
    toc.append(`
    <a
      class="fancybox fancybox.image"
      href="https://img.lailin.xyz/custom/wechat_white.png"
      itemscope=""
      itemtype="http://schema.org/ImageObject"
      itemprop="url"
      data-fancybox="default"
      rel="default"
      title="wechat"
      data-caption="wechat"
      ><img
        style="width: 100%"
        src="https://img.lailin.xyz/custom/wechat_white.png"
        srcset="https://img.lailin.xyz/custom/wechat_white.png"
        alt="wechat"
      />
    `)
  }
})
</script>
