/* global Fluid, Debouncer */

Fluid.utils = {

  listenScroll: function(callback) {
    const dbc = new Debouncer(callback);
    window.addEventListener('scroll', dbc, false);
    dbc.handleEvent();
  },

  scrollToElement: function(target, offset) {
    var of = $(target).offset();
    if (of) {
      $('html,body').animate({
        scrollTop: of.top + (offset || 0),
        easing   : 'swing'
      });
    }
  },

  waitElementVisible: function(targetId, callback) {
    var runningOnBrowser = typeof window !== 'undefined';
    var isBot = (runningOnBrowser && !('onscroll' in window)) || (typeof navigator !== 'undefined'
    && /(gle|ing|ro|msn)bot|crawl|spider|yand|duckgo/i.test(navigator.userAgent));
    var supportsIntersectionObserver = runningOnBrowser && 'IntersectionObserver' in window;
    if (!isBot && supportsIntersectionObserver) {
      var io = new IntersectionObserver(function(entries, ob) {
        if (entries[0].isIntersecting) {
          callback && callback();
          ob.disconnect();
        }
      }, {
        threshold : [0],
        rootMargin: (window.innerHeight || document.documentElement.clientHeight) + 'px'
      });
      io.observe(document.getElementById(targetId));
    } else {
      callback && callback();
    }
  },

  waitElementLoaded: function(targetId, callback) {
    var runningOnBrowser = typeof window !== 'undefined';
    var isBot = (runningOnBrowser && !('onscroll' in window)) || (typeof navigator !== 'undefined'
    && /(gle|ing|ro|msn)bot|crawl|spider|yand|duckgo/i.test(navigator.userAgent));
    if (!runningOnBrowser || isBot) {
      return;
    }

    if ('MutationObserver' in window) {
      var mo = new MutationObserver(function(records, ob) {
        var ele = document.getElementById(targetId);
        if (ele) {
          callback && callback();
          ob.disconnect();
        }
      });
      mo.observe(document, { childList: true, subtree: true });
    } else {
      document.addEventListener('DOMContentLoaded', function() {
        callback && callback();
      });
    }
  },

  createScript: function(url, onload) {
    var s = document.createElement('script');
    s.setAttribute('src', url);
    s.setAttribute('type', 'text/javascript');
    s.setAttribute('charset', 'UTF-8');
    s.async = false;
    if (typeof onload === 'function') {
      if (window.attachEvent) {
        s.onreadystatechange = function() {
          var e = s.readyState;
          if (e === 'loaded' || e === 'complete') {
            s.onreadystatechange = null;
            onload();
          }
        };
      } else {
        s.onload = onload;
      }
    }
    var e = document.getElementsByTagName('script')[0]
    || document.getElementsByTagName('head')[0]
    || document.head || document.documentElement;
    e.parentNode.insertBefore(s, e);
  },

  createCssLink: function(url) {
    var l = document.createElement('link');
    l.setAttribute('rel', 'stylesheet');
    l.setAttribute('type', 'text/css');
    l.setAttribute('href', url);
    var e = document.getElementsByTagName('link')[0]
    || document.getElementsByTagName('head')[0]
    || document.head || document.documentElement;
    e.parentNode.insertBefore(l, e);
  }

};
/* global Fluid */

/**
 * Modify by https://blog.skk.moe/post/hello-darkmode-my-old-friend/
 */
(function(window, document) {
  var rootElement = document.documentElement;
  var colorSchemaStorageKey = 'Fluid_Color_Scheme';
  var colorSchemaMediaQueryKey = '--color-mode';
  var userColorSchemaAttributeName = 'data-user-color-scheme';
  var defaultColorSchemaAttributeName = 'data-default-color-scheme';
  var colorToggleButtonName = 'color-toggle-btn';
  var colorToggleIconName = 'color-toggle-icon';

  function setLS(k, v) {
    try {
      localStorage.setItem(k, v);
    } catch (e) {}
  }

  function removeLS(k) {
    try {
      localStorage.removeItem(k);
    } catch (e) {}
  }

  function getLS(k) {
    try {
      return localStorage.getItem(k);
    } catch (e) {
      return null;
    }
  }

  function getSchemaFromHTML() {
    var res = rootElement.getAttribute(defaultColorSchemaAttributeName);
    if (typeof res === 'string') {
      return res.replace(/["'\s]/g, '');
    }
    return null;
  }

  function getSchemaFromCSSMediaQuery() {
    var res = getComputedStyle(rootElement).getPropertyValue(
      colorSchemaMediaQueryKey
    );
    if (typeof res === 'string') {
      return res.replace(/["'\s]/g, '');
    }
    return null;
  }

  function resetSchemaAttributeAndLS() {
    rootElement.setAttribute(userColorSchemaAttributeName, getDefaultColorSchema());
    removeLS(colorSchemaStorageKey);
  }

  var validColorSchemaKeys = {
    dark : true,
    light: true
  };

  function getDefaultColorSchema() {
    // 取默认字段的值
    var schema = getSchemaFromHTML();
    // 如果明确指定了 schema 则返回
    if (validColorSchemaKeys[schema]) {
      return schema;
    }
    // 默认优先按 prefers-color-scheme
    schema = getSchemaFromCSSMediaQuery();
    if (validColorSchemaKeys[schema]) {
      return schema;
    }
    // 否则按本地时间是否大于 18 点或凌晨 0 ~ 6 点
    var hours = new Date().getHours();
    if (hours >= 18 || (hours >= 0 && hours <= 6)) {
      return 'dark';
    }
    return 'light';
  }

  function applyCustomColorSchemaSettings(schema) {
    // 接受从「开关」处传来的模式，或者从 localStorage 读取，否则按默认设置值
    var current = schema || getLS(colorSchemaStorageKey) || getDefaultColorSchema();

    if (current === getDefaultColorSchema()) {
      // 当用户切换的显示模式和默认模式相同时，则恢复为自动模式
      resetSchemaAttributeAndLS();
    } else if (validColorSchemaKeys[current]) {
      rootElement.setAttribute(
        userColorSchemaAttributeName,
        current
      );
    } else {
      // 特殊情况重置
      resetSchemaAttributeAndLS();
      return;
    }

    // 根据当前模式设置图标
    setButtonIcon(current);

    // 设置其他应用
    setApplications(current);
  }

  var invertColorSchemaObj = {
    dark : 'light',
    light: 'dark'
  };

  function toggleCustomColorSchema() {
    var currentSetting = getLS(colorSchemaStorageKey);

    if (validColorSchemaKeys[currentSetting]) {
      // 从 localStorage 中读取模式，并取相反的模式
      currentSetting = invertColorSchemaObj[currentSetting];
    } else if (currentSetting === null) {
      // 当 localStorage 中没有相关值，或者 localStorage 抛了 Error
      // 先按照按钮的状态进行切换
      var iconElement = document.getElementById(colorToggleIconName);
      if (iconElement) {
        currentSetting = iconElement.getAttribute('data');
      }
      if (!iconElement || !validColorSchemaKeys[currentSetting]) {
        // 当 localStorage 中没有相关值，或者 localStorage 抛了 Error，则读取默认值并切换到相反的模式
        currentSetting = invertColorSchemaObj[getSchemaFromCSSMediaQuery()];
      }
    } else {
      return;
    }
    // 将相反的模式写入 localStorage
    setLS(colorSchemaStorageKey, currentSetting);

    return currentSetting;
  }

  function setButtonIcon(schema) {
    if (validColorSchemaKeys[schema]) {
      // 切换图标
      var icon = 'icon-dark';
      if (schema) {
        icon = 'icon-' + invertColorSchemaObj[schema];
      }
      var iconElement = document.getElementById(colorToggleIconName);
      if (iconElement) {
        iconElement.setAttribute(
          'class',
          'iconfont ' + icon
        );
        iconElement.setAttribute(
          'data',
          invertColorSchemaObj[schema]
        );
      } else {
        // 如果图标不存在则说明图标还没加载出来，等到页面全部加载再尝试切换
        Fluid.utils.waitElementLoaded(colorToggleIconName, function() {
          var iconElement = document.getElementById(colorToggleIconName);
          if (iconElement) {
            iconElement.setAttribute(
              'class',
              'iconfont ' + icon
            );
            iconElement.setAttribute(
              'data',
              invertColorSchemaObj[schema]
            );
          }
        });
      }
    }
  }

  function setApplications(schema) {
    // 设置 remark42 评论主题
    if (window.REMARK42) {
      window.REMARK42.changeTheme(schema);
    }

    // 设置 utterances 评论主题
    var utterances = document.querySelector('iframe');
    if (utterances) {
      var theme = window.UtterancesThemeLight;
      if (schema === 'dark') {
        theme = window.UtterancesThemeDark;
      }
      const message = {
        type : 'set-theme',
        theme: theme
      };
      utterances.contentWindow.postMessage(message, 'https://utteranc.es');
    }
  }

  // 当页面加载时，将显示模式设置为 localStorage 中自定义的值（如果有的话）
  applyCustomColorSchemaSettings();

  Fluid.utils.waitElementLoaded(colorToggleButtonName, function() {
    applyCustomColorSchemaSettings();
    var button = document.getElementById(colorToggleButtonName);
    if (button) {
      // 当用户点击切换按钮时，获得新的显示模式、写入 localStorage、并在页面上生效
      button.addEventListener('click', () => {
        applyCustomColorSchemaSettings(toggleCustomColorSchema());
      });
    }
  });
})(window, document);
window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;

/**
 * Handles debouncing of events via requestAnimationFrame
 * @see http://www.html5rocks.com/en/tutorials/speed/animations/
 * @param {Function} callback The callback to handle whichever event
 */
function Debouncer(callback) {
  this.callback = callback;
  this.ticking = false;
}
Debouncer.prototype = {
  constructor: Debouncer,

  /**
   * dispatches the event to the supplied callback
   * @private
   */
  update: function() {
    this.callback && this.callback();
    this.ticking = false;
  },

  /**
   * ensures events don't get stacked
   * @private
   */
  requestTick: function() {
    if (!this.ticking) {
      requestAnimationFrame(this.rafCallback || (this.rafCallback = this.update.bind(this)));
      this.ticking = true;
    }
  },

  /**
   * Attach this as the event listeners
   */
  handleEvent: function() {
    this.requestTick();
  }
};
/* global Fluid */

HTMLElement.prototype.wrap = function(wrapper) {
  this.parentNode.insertBefore(wrapper, this);
  this.parentNode.removeChild(this);
  wrapper.appendChild(this);
};

Fluid.events = {

  registerNavbarEvent: function() {
    var navbar = $('#navbar');
    var submenu = $('#navbar .dropdown-menu');
    if (navbar.offset().top > 0) {
      navbar.removeClass('navbar-dark');
      submenu.removeClass('navbar-dark');
    }
    Fluid.utils.listenScroll(function() {
      navbar[navbar.offset().top > 50 ? 'addClass' : 'removeClass']('top-nav-collapse');
      submenu[navbar.offset().top > 50 ? 'addClass' : 'removeClass']('dropdown-collapse');
      if (navbar.offset().top > 0) {
        navbar.removeClass('navbar-dark');
        submenu.removeClass('navbar-dark');
      } else {
        navbar.addClass('navbar-dark');
        submenu.removeClass('navbar-dark');
      }
    });
    $('#navbar-toggler-btn').on('click', function() {
      $('.animated-icon').toggleClass('open');
      $('#navbar').toggleClass('navbar-col-show');
    });
  },

  registerParallaxEvent: function() {
    var bg = $('#banner[parallax="true"]');
    if (bg.length === 0) {
      return;
    }
    var board = $('#board');
    if (board.length === 0) {
      return;
    }
    var parallax = function() {
      var oVal = $(window).scrollTop() / 5;
      var offset = parseInt(board.css('margin-top'), 0);
      var max = 96 + offset;
      if (oVal > max) {
        oVal = max;
      }
      bg.css({
        transform          : 'translate3d(0,' + oVal + 'px,0)',
        '-webkit-transform': 'translate3d(0,' + oVal + 'px,0)',
        '-ms-transform'    : 'translate3d(0,' + oVal + 'px,0)',
        '-o-transform'     : 'translate3d(0,' + oVal + 'px,0)'
      });
      var toc = $('#toc');
      if (toc) {
        $('#toc-ctn').css({
          'padding-top': oVal + 'px'
        });
      }
    };
    Fluid.utils.listenScroll(parallax);
  },

  registerScrollDownArrowEvent: function() {
    var scrollbar = $('.scroll-down-bar');
    if (scrollbar.length === 0) {
      return;
    }
    scrollbar.on('click', function() {
      Fluid.utils.scrollToElement('#board', -$('#navbar').height());
    });
  },

  registerScrollTopArrowEvent: function() {
    var topArrow = $('#scroll-top-button');
    if (topArrow.length === 0) {
      return;
    }
    var board = $('#board');
    if (board.length === 0) {
      return;
    }
    var posDisplay = false;
    var scrollDisplay = false;
    // Position
    var setTopArrowPos = function() {
      var boardRight = board[0].getClientRects()[0].right;
      var bodyWidth = document.body.offsetWidth;
      var right = bodyWidth - boardRight;
      posDisplay = right >= 50;
      topArrow.css({
        'bottom': posDisplay && scrollDisplay ? '20px' : '-60px',
        'right' : right - 64 + 'px'
      });
    };
    setTopArrowPos();
    $(window).resize(setTopArrowPos);
    // Display
    var headerHeight = board.offset().top;
    Fluid.utils.listenScroll(function() {
      var scrollHeight = document.body.scrollTop + document.documentElement.scrollTop;
      scrollDisplay = scrollHeight >= headerHeight;
      topArrow.css({
        'bottom': posDisplay && scrollDisplay ? '20px' : '-60px'
      });
    });
    // Click
    topArrow.on('click', function() {
      $('body,html').animate({
        scrollTop: 0,
        easing   : 'swing'
      });
    });
  }
};
/* global Fluid, CONFIG */

HTMLElement.prototype.wrap = function(wrapper) {
  this.parentNode.insertBefore(wrapper, this);
  this.parentNode.removeChild(this);
  wrapper.appendChild(this);
};

Fluid.plugins = {

  typing: function(text) {
    if (!window.Typed) { return; }

    var typed = new window.Typed('#subtitle', {
      strings: [
        '  ',
        text + '&nbsp;'
      ],
      cursorChar: CONFIG.typing.cursorChar,
      typeSpeed : CONFIG.typing.typeSpeed,
      loop      : CONFIG.typing.loop
    });
    typed.stop();
    var subtitle = document.getElementById('subtitle');
    if (subtitle) {
      subtitle.innerText = '';
    }
    $(document).ready(function() {
      $('.typed-cursor').addClass('h2');
      typed.start();
    });
  },

  initTocBot: function() {
    var toc = $('#toc');
    if (toc.length === 0 || !window.tocbot) { return; }
    var boardCtn = $('#board-ctn');
    var boardTop = boardCtn.offset().top;

    window.tocbot.init({
      tocSelector     : '#toc-body',
      contentSelector : '.markdown-body',
      headingSelector : CONFIG.toc.headingSelector || 'h1,h2,h3,h4,h5,h6',
      linkClass       : 'tocbot-link',
      activeLinkClass : 'tocbot-active-link',
      listClass       : 'tocbot-list',
      isCollapsedClass: 'tocbot-is-collapsed',
      collapsibleClass: 'tocbot-is-collapsible',
      collapseDepth   : CONFIG.toc.collapseDepth || 0,
      scrollSmooth    : true,
      headingsOffset  : -boardTop
    });
    if ($('.toc-list-item').length > 0) {
      toc.css('visibility', 'visible');
    }
  },

  wrapImageWithFancyBox: function() {
    if (!$.fancybox) { return; }

    $('.markdown-body :not(a) > img, .markdown-body > img').each(function() {
      var $image = $(this);
      var imageLink = $image.attr('data-src') || $image.attr('src');
      var $imageWrapLink = $image.wrap(`
        <a class="fancybox fancybox.image" href="${imageLink}"
          itemscope itemtype="http://schema.org/ImageObject" itemprop="url"></a>`
      ).parent('a');
      if ($image.is('.group-image-container img')) {
        $imageWrapLink.attr('data-fancybox', 'group').attr('rel', 'group');
      } else {
        $imageWrapLink.attr('data-fancybox', 'default').attr('rel', 'default');
      }

      var imageTitle = $image.attr('title') || $image.attr('alt');
      if (imageTitle) {
        $imageWrapLink.append(`<p class="image-caption">${imageTitle}</p>`);
        $imageWrapLink.attr('title', imageTitle).attr('data-caption', imageTitle);
      }
    });

    $.fancybox.defaults.hash = false;
    $('.fancybox').fancybox({
      loop   : true,
      helpers: {
        overlay: {
          locked: false
        }
      }
    });
  },

  registerAnchor: function() {
    if (!window.anchors) { return; }

    window.anchors.options = {
      placement: CONFIG.anchorjs.placement,
      visible  : CONFIG.anchorjs.visible
    };
    if (CONFIG.anchorjs.icon) {
      window.anchors.options.icon = CONFIG.anchorjs.icon;
    }
    var el = (CONFIG.anchorjs.element || 'h1,h2,h3,h4,h5,h6').split(',');
    var res = [];
    for (const item of el) {
      res.push('.markdown-body > ' + item);
    }
    window.anchors.add(res.join(', '));
  },

  registerCopyCode: function() {
    if (!window.ClipboardJS) { return; }
    function getBgClass(ele) {
      if (ele.length === 0) {
        return 'copy-btn-dark';
      }
      var rgbArr = ele.css('background-color').replace(/rgba*\(/, '').replace(')', '').split(',');
      var color = (0.213 * rgbArr[0]) + (0.715 * rgbArr[1]) + (0.072 * rgbArr[2]) > 255 / 2;
      return color ? 'copy-btn-dark' : 'copy-btn-light';
    }

    var copyHtml = '';
    copyHtml += '<button class="copy-btn" data-clipboard-snippet="">';
    copyHtml += '<i class="iconfont icon-copy"></i><span>Copy</span>';
    copyHtml += '</button>';
    var blockElement = $('.markdown-body pre');
    blockElement.each(function() {
      const pre = $(this);
      if (pre.find('code.mermaid').length > 0) {
        return;
      }
      pre.append(copyHtml);
    });
    var clipboard = new window.ClipboardJS('.copy-btn', {
      target: function(trigger) {
        return trigger.previousElementSibling;
      }
    });
    $('.copy-btn').addClass(getBgClass(blockElement));
    clipboard.on('success', function(e) {
      e.clearSelection();
      var tmp = e.trigger.outerHTML;
      e.trigger.innerHTML = 'Success';
      setTimeout(function() {
        e.trigger.outerHTML = tmp;
      }, 2000);
    });
  },

  registerImageLoaded: function() {
    var bg = document.getElementById('banner');
    if (bg) {
      var src = bg.style.backgroundImage;
      var url = src.match(/\((.*?)\)/)[1].replace(/(['"])/g, '');
      var img = new Image();
      img.onload = function() {
        window.NProgress && window.NProgress.inc(0.2);
      };
      img.src = url;
      if (img.complete) { img.onload(); }
    }

    var images = $('main img:not([srcset])');
    var notLazyImages = [];
    for (const img of images) {
      if (!img.srcset) {
        notLazyImages.push(img);
      }
    }
    var total = notLazyImages.length;
    for (const img of notLazyImages) {
      const old = img.onload;
      img.onload = function() {
        old && old();
        window.NProgress && window.NProgress.inc(0.5 / total);
      };
      if (img.complete) { img.onload(); }
    }
  }

};
/* global Debouncer */

(function(window, document) {
  var runningOnBrowser = typeof window !== 'undefined';
  var supportsIntersectionObserver = runningOnBrowser && 'IntersectionObserver' in window;

  var images = Array.prototype.slice.call(document.querySelectorAll('img[srcset]'));
  if (!images || images.length === 0) {
    return;
  }

  if (supportsIntersectionObserver) {
    var io = new IntersectionObserver(function(changes) {
      changes.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return;
        target.setAttribute('srcset', target.src);
        target.onload = target.onerror = () => io.unobserve(target);
      });
    }, {
      threshold : [0],
      rootMargin: (window.innerHeight || document.documentElement.clientHeight) + 'px'
    });
    images.map((item) => io.observe(item));
  } else {
    // eslint-disable-next-line no-inner-declarations
    function elementInViewport(el) {
      var rect = el.getBoundingClientRect();
      var height = window.innerHeight || document.documentElement.clientHeight;
      var top = rect.top;
      return (top >= 0 && top <= height * 3) || (top <= 0 && top <= -(height * 2) - rect.height);
    }

    // eslint-disable-next-line no-inner-declarations
    function loadImage(el, fn) {
      var img = new Image();
      var src = el.getAttribute('src');
      img.onload = function() {
        el.srcset = src;
        fn && fn();
      };
      img.srcset = src;
    }

    var lazyLoader = new Debouncer(processImages);

    // eslint-disable-next-line no-inner-declarations
    function processImages() {
      for (var i = 0; i < images.length; i++) {
        if (elementInViewport(images[i])) {
          // eslint-disable-next-line no-loop-func
          (function(index) {
            var loadingImage = images[index];
            loadImage(loadingImage, function() {
              images = images.filter(function(t) {
                return loadingImage !== t;
              });
            });
          })(i);
        }
      }
      if (images.length === 0) {
        window.removeEventListener('scroll', lazyLoader, false);
      }
    }

    window.addEventListener('scroll', lazyLoader, false);
    lazyLoader.handleEvent();
  }

})(window, document);
// A local search script with the help of [hexo-generator-search](https://github.com/PaicHyperionDev/hexo-generator-search)
// Copyright (C) 2017
// Liam Huang <https://github.com/Liam0205>
// This library is free software; you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as
// published by the Free Software Foundation; either version 2.1 of the
// License, or (at your option) any later version.
//
// This library is distributed in the hope that it will be useful, but
// WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
// Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public
// License along with this library; if not, write to the Free Software
// Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA
// 02110-1301 USA
//
// Updated by Rook1e <https://github.com/0x2E>

// eslint-disable-next-line no-unused-vars
var searchFunc = function(path, search_id, content_id) {
  // 0x00. environment initialization
  'use strict';
  var $input = document.getElementById(search_id);
  var $resultContent = document.getElementById(content_id);
  $resultContent.innerHTML = '<div class="m-auto text-center"><div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div><br/>Loading...</div>';
  $.ajax({
    // 0x01. load xml file
    url     : path,
    dataType: 'xml',
    success : function(xmlResponse) {
      // 0x02. parse xml file
      var dataList = $('entry', xmlResponse).map(function() {
        return {
          title  : $('title', this).text(),
          content: $('content', this).text(),
          url    : $('url', this).text()
        };
      }).get();
      $resultContent.innerHTML = '';

      $input.addEventListener('input', function() {
        // 0x03. parse query to keywords list
        var str = '';
        var keywords = this.value.trim().toLowerCase().split(/[\s-]+/);
        $resultContent.innerHTML = '';
        if (this.value.trim().length <= 0) {
          return;
        }
        // 0x04. perform local searching
        dataList.forEach(function(data) {
          var isMatch = true;
          if (!data.title || data.title.trim() === '') {
            data.title = 'Untitled';
          }
          var orig_data_title = data.title.trim();
          var data_title = orig_data_title.toLowerCase();
          var orig_data_content = data.content.trim().replace(/<[^>]+>/g, '');
          var data_content = orig_data_content.toLowerCase();
          var data_url = data.url;
          var index_title = -1;
          var index_content = -1;
          var first_occur = -1;
          // only match articles with not empty contents
          if (data_content !== '') {
            keywords.forEach(function(keyword, i) {
              index_title = data_title.indexOf(keyword);
              index_content = data_content.indexOf(keyword);

              if (index_title < 0 && index_content < 0) {
                isMatch = false;
              } else {
                if (index_content < 0) {
                  index_content = 0;
                }
                if (i === 0) {
                  first_occur = index_content;
                }
                //content_index.push({index_content:index_content, keyword_len:keyword_len});
              }
            });
          } else {
            isMatch = false;
          }
          // 0x05. show search results
          if (isMatch) {
            str += '<a href=\'' + data_url + '\' class=\'list-group-item list-group-item-action font-weight-bolder search-list-title\'>' + orig_data_title + '</a>';
            var content = orig_data_content;
            if (first_occur >= 0) {
              // cut out 100 characters
              var start = first_occur - 20;
              var end = first_occur + 80;

              if (start < 0) {
                start = 0;
              }

              if (start === 0) {
                end = 100;
              }

              if (end > content.length) {
                end = content.length;
              }

              var match_content = content.substring(start, end);

              // highlight all keywords
              keywords.forEach(function(keyword) {
                var regS = new RegExp(keyword, 'gi');
                match_content = match_content.replace(regS, '<span class="search-word">' + keyword + '</span>');
              });

              str += '<p class=\'search-list-content\'>' + match_content + '...</p>';
            }
          }
        });
        const input = $('#local-search-input');
        if (str.indexOf('list-group-item') === -1) {
          return input.addClass('invalid').removeClass('valid');
        }
        input.addClass('valid').removeClass('invalid');
        $resultContent.innerHTML = str;
      });
    }
  });
  $(document).on('click', '#local-search-close', function() {
    $('#local-search-input').val('').removeClass('invalid').removeClass('valid');
    $('#local-search-result').html('');
  });
};
/* global Fluid, CONFIG */

Fluid.boot = {};

Fluid.boot.registerEvents = function() {
  Fluid.events.registerNavbarEvent();
  Fluid.events.registerParallaxEvent();
  Fluid.events.registerScrollDownArrowEvent();
  Fluid.events.registerScrollTopArrowEvent();
};

Fluid.boot.refresh = function() {
  CONFIG.toc.enable && Fluid.plugins.initTocBot();
  CONFIG.image_zoom && Fluid.plugins.wrapImageWithFancyBox();
  CONFIG.anchorjs.enable && Fluid.plugins.registerAnchor();
  CONFIG.copy_btn && Fluid.plugins.registerCopyCode();
  CONFIG.progressbar && Fluid.plugins.registerImageLoaded();
};

document.addEventListener('DOMContentLoaded', function() {
  Fluid.boot.registerEvents();
  Fluid.boot.refresh();
});
