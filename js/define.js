let pluginMap = {
  // built-in plugins
  "notes": "reveal/plugin/notes/notes.js",
  "markdown": "reveal/plugin/markdown/markdown.js",
  "math": "reveal/plugin/math/math.js",
  "highlight": "reveal/plugin/highlight/highlight.js",
  // third-party plugins
  "menu": "plugin/menu/menu.js",
  "appearance": "plugin/appearance/plugin/appearance/appearance.js",
  // my plugins
  "load-code": "plugin/load-code/load-code.js",
  "code-tips": "plugin/code-tips/code-tips.js",
  "fragment-order": "plugin/fragment-order/fragment-order.js",
  "fragment-group": "plugin/fragment-group/fragment-group.js",
  "asciinema-fragment": "plugin/asciinema-fragment/asciinema-fragment.js",
  "video-fragment": "plugin/video-fragment/video-fragment.js",
  "lottie-fragment": "plugin/lottie-fragment/lottie-fragment.js",
  "ace-editor": "plugin/ace-editor/ace-editor.js"
};

let libs = ["reveal/dist/reveal.js", "theme/mytheme.js"];

let aIns = [];  // asciinema instances
let vIns = [];  // video instances
let lIns = [];  // lottie instances

let courseName;
let chapterName;

let toc = [];
let cindex = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", 
    "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九", "二十"];

let language = 'cn';

let commonConfig = {
  width: 1024,
  height: 768,
  hash: true,
  slideNumber: 'c/t',
  autoAnimateEasing: 'ease-out',
  autoAnimateDuration: 0.8,
  autoAnimateUnmatched: false,
};

let math = {
  mathjax: 'js/MathJax-2.7.9/MathJax.js',
  config: 'TeX-AMS-MML_SVG-full',
  // pass other options into `MathJax.Hub.Config()`
  extensions: ["tex2jax.js"],
  jax: ["input/TeX", "output/SVG"],
  SVG: { 
    font: "TeX",
    linebreaks: { automatic: true } 
  },
  MathMenu: {showRenderer: false},
  TeX: { Macros: { RR: "{\\bf R}" } }
};

let commonPlugins;

let myPreloadPlugins;
let myPlugins;
let defineMyPlugins = function() {};

function scriptPath(name) {
  // obtain plugin path from the script element
  let path;

  let sel = document.querySelector('script[src$="' + name + '.js"]');
  if (sel) {
    path = sel.src.slice(0, -(name.length + 3));
  } else {
    // path = import.meta.url.slice(0, import.meta.url.lastIndexOf('/') + 1);
  }

  return path;
}

// modified from math plugin, do not consider IE any more
function loadResource(url, type, callback) {
  let head = document.querySelector('head');
  let resource;

  if (type === 'script') {
    resource = document.createElement('script');
    resource.type = 'text/javascript';
    resource.src = url;
  } else if (type === 'stylesheet') {
    resource = document.createElement('link');
    resource.rel = 'stylesheet';
    resource.href = url;
  }

  // Wrapper for callback to make sure it only fires once
  let finish = function () {
    if (typeof callback === 'function') {
      callback.call();
      callback = null;
    }
  };

  resource.onload = finish;

  // Normal browsers
  head.appendChild(resource);
}

function loadScript(url) {
  return new Promise(function(resolve, reject) {
    let script = document.createElement('script');
    script.src = url;
    script.async = false;
    script.onload = function() {
      resolve(url);
    };
    script.onerror = function() {
      reject(url);
    };
    let insertPoint = document.head || document.getElementsByTagName("head")[0];
    if(!insertPoint) {
      insertPoint = document.body;
      console.error("no head element found in document, insert script to body!!");
    }
    insertPoint.appendChild(script);
  });
}

function loadScripts(scripts) {
  let promises = [];
  scripts.forEach(function(url) {
    promises.push(loadScript(url));
  });

  return Promise.all(promises);
}

function includeCommonLibraries(cb) {
  loadScripts(libs).then(function(){
    loadScripts(Object.values(pluginMap)).then(function(){
      commonPlugins = [
        /**** built-in plugins ****/
        RevealMarkdown, RevealHighlight, RevealNotes, 
        /**** third-party plugins ****/
        RevealMenu, Appearance,
      ];
      if(typeof cb === "function") {
        cb && cb();
      }
    });
  });
}

function initReveal(myConfig, myPreloadPlugins, myPlugins) {
  let revealConfig = Object.assign({}, commonConfig, myConfig);
  let revealPlugins = myPreloadPlugins.concat(commonPlugins).concat(myPlugins);
  if(revealConfig.math) {
    revealPlugins.push(RevealMath);
  }
  // for asciinema
  if(aIns.length > 0 && RevealAsciinemaFragment) {
    if (revealConfig.asciinema) {
      revealConfig.asciinema.instances = aIns;
    } else {
      revealConfig.asciinema = {instances: vIns};
    }
    revealPlugins.push(RevealAsciinemaFragment);
  }
  // for video
  if(vIns.length > 0 && RevealVideoFragment) {
    revealConfig.video= {instances: vIns};
    revealPlugins.push(RevealVideoFragment);
  }
  // for lottie animation
  if(lIns.length > 0 && RevealLottieFragment) {
    revealConfig.lottie= {instances: lIns};
    revealPlugins.push(RevealLottieFragment);
  }
  revealConfig.plugins = revealPlugins;

  Reveal.initialize(revealConfig);
}

/*** ignore leading spaces for code ***/
function rmCodeLeadingSpaces() {
  Array.prototype.forEach.call(
    document.querySelectorAll('pre code'),
    function (element) {
      if (!element.hasAttribute('data-notrim')) {
        element.setAttribute('data-trim', '');
      }
      if (!element.hasAttribute('data-noescape')) {
        element.setAttribute('data-escape', '');
      }
      /*
      if(!element.hasAttribute('data-no-line-numbers')) {
        element.setAttribute('data-line-numbers', '');
      }
      */
  });
}

function changePageTitle() {
  let title = document.querySelector("title");
  title.innerText = courseName + " " + chapterName;
}

function createLink(content) {
  return '<a href="">' + content + '</a>';
}

function createSectionName(index, name, link) {
  let section;
  if(language == "en") {
    section = `Section ${index + 1}.&nbsp;&nbsp;${name}`;
  } else if(language == "cn"){
    section = `第${cindex[index]}节&nbsp;&nbsp;${name}`;
  }
  if(link) {
    return createLink(section);
  } else {
    return section;
  }
}

function createMenuTitleClass(i, j) {
  if(i == j) {
    return "menu-title";
  }
  return "";
}

function createTocLabel() {
  if(language == "en") {
    return "Table<br>of<br>Contents";
  } else if(language == "cn"){
    return "目录";
  }
}

function createCover() {
  let cover = document.querySelector("#cover:not([data-self-control])");
  if(cover) {
    let coverHtml = 
`
          <div class="grid-wrapper">
            <div class="header">
              <div class="logo--full"></div>
            </div>
            <div class="content">
              <h1>${courseName}</h1>
              <h2>${chapterName}</h2>
            </div>
            <div class="credit">
              <hr/>
              <div class="label">Lectured By</div>
              <div class="name">夏羽</div>
              <div class="affiliation">四川师范大学</div>
            </div>
          </div>
`;
    cover.innerHTML = coverHtml;
  }
}

function createToc() {
  let tocSection = document.querySelector('#toc:not([data-self-control])');
  if(tocSection) {
    let tocPrefix =
`
          <div class="grid-wrapper">
            <div class="logo"></div>
            <div class="content full-height">
              <div class="toc-name">
                <h1>${createTocLabel()}</h1>
              </div>
              <div id="toc-table" class="toc-table">
`;
    let tocSurfix =
`
              </div>
            </div>
          </div>
        </section>
`;
    let tocHtml = 
`${toc.map((item, index)=>{
    return `
<h2 class="toc-${toc.length}">
  ${createSectionName(index, item.name, true)}
</h2>`;
}).join("\n")}`;

    tocSection.innerHTML = tocPrefix + tocHtml + tocSurfix; 
  }
}

function createSubsections() {
  let subsections = document.querySelectorAll('.subsection:not([data-self-control])')

  if(subsections.length > 0) {
    let tocLinks = document.querySelectorAll("div#toc-table a");

    let subSectionPrefix = 
  `  <div class="grid-wrapper">
      <div class="logo"></div>
      <div class="title-container">`;
    let subSectionSurfix =
  `    </div>
      <div class="description">
      </div>
    </div>`;

    for(let i = 0; i < subsections.length; i++) {
      if(toc[i]) {
        // presections
        let presections = `<div class="sec-previous">\n`;
        for(let j = 0; j < i - 1; j++) {
          presections += `<div class="animated section-title" data-delay="0">` + 
            createSectionName(j, toc[j].name, false) + `</div>\n`;
        }
        presections += `</div>\n`;
        // currsection
        let currsection = `<div class="sec-current">\n`;
        if(i > 0) {
          currsection += `<div class="animated section-title" data-delay="0">${createSectionName(i - 1, toc[i - 1].name, false)}</div>\n`;
        }
        currsection += `</div>`;
        // nextsections
        let nextsections = `<div class="sec-next">\n`;
        for(let j = i; j < toc.length; j++) {
          nextsections += `<div class="animated section-title ${createMenuTitleClass(i, j)}" data-delay="0">${createSectionName(j, toc[j].name, false)}</div>\n`;
        }
        nextsections += `</div>\n`;

        var subsection = subsections[i];
        subsection.id = "subsection" + i;
        subsection.innerHTML = subSectionPrefix + presections + currsection + nextsections + subSectionSurfix; 

        if(tocLinks.length > 0) {
          tocLinks[i].href = "#" + subsection.id;
        }
      } else {
        console.log("subsection ", i , "has no title");
      }
    }
  }
}

function createThankYouPage() {
  let thankYouSlide = document.querySelector("#thank-you-slide:not([data-self-control])");
  if(thankYouSlide) {
    let thankYouPage = 
`
          <div class="grid-wrapper">
            <div class="header">
              <div class="logo"></div>
              <h1 class="header">Thank You!</h1>
            </div>
            <div class="content">
              <div class="box">
                <div class="item animated" data-delay="0">
                  <div class="good animated" data-delay="0">
                    <div class="up animated" data-delay="0"></div>
                  </div>
                  <div class="circle animated" data-delay="0">
                    <width class="right-circlr"></width>
                    <width class="left-circlr"></width>
                  </div>
                  <div class="ring animated" data-delay="0"></div>
                  <div class="oval-bar-box-little animated" data-delay="0">
                    <div class="oval-bar-little animated" data-delay="0"></div>
                    <div class="oval-bar-little animated" data-delay="0"></div>
                    <div class="oval-bar-little animated" data-delay="0"></div>
                    <div class="oval-bar-little animated" data-delay="0"></div>
                  </div>
                  <div class="oval-bar-box-larger animated" data-delay="0">
                    <div class="oval-bar-larger animated" data-delay="0"></div>
                    <div class="oval-bar-larger animated" data-delay="0"></div>
                    <div class="oval-bar-larger animated" data-delay="0"></div>
                    <div class="oval-bar-larger animated" data-delay="0"></div>
                  </div>
                </div>
                <div class="item animated" data-delay="0">
                  <div class="coin animated" data-delay="0">
                    <div class="half-circle"></div>
                    <div class="circle-bar"></div>
                  </div>
                  <div class="circle animated" data-delay="0">
                    <width class="right-circlr"></width>
                    <width class="left-circlr"></width>
                  </div>
                  <div class="ring animated" data-delay="0"></div>
                  <div class="oval-bar-box-little animated" data-delay="0">
                    <div class="oval-bar-little animated" data-delay="0"></div>
                    <div class="oval-bar-little animated" data-delay="0"></div>
                    <div class="oval-bar-little animated" data-delay="0"></div>
                    <div class="oval-bar-little animated" data-delay="0"></div>
                  </div>
                  <div class="oval-bar-box-larger animated" data-delay="0">
                    <div class="oval-bar-larger animated" data-delay="0"></div>
                    <div class="oval-bar-larger animated" data-delay="0"></div>
                    <div class="oval-bar-larger animated" data-delay="0"></div>
                    <div class="oval-bar-larger animated" data-delay="0"></div>
                  </div>
                </div>
                <div class="item animated" data-delay="0" data-delay="0">
                  <div class="start animated" data-delay="0">
                    <div class="angle top"></div>
                    <div class="angle right"></div>
                    <div class="angle left"></div>
                    <div class="angle right-bottom"></div>
                    <div class="angle left-bottom"></div>
                  </div>
                  <div class="circle animated" data-delay="0">
                    <width class="right-circlr"></width>
                    <width class="left-circlr"></width>
                  </div>
                  <div class="ring animated" data-delay="0"></div>
                  <div class="oval-bar-box-little animated" data-delay="0">
                    <div class="oval-bar-little animated" data-delay="0"></div>
                    <div class="oval-bar-little animated" data-delay="0"></div>
                    <div class="oval-bar-little animated" data-delay="0"></div>
                    <div class="oval-bar-little animated" data-delay="0"></div>
                  </div>
                  <div class="oval-bar-box-larger animated" data-delay="0">
                    <div class="oval-bar-larger animated" data-delay="0"></div>
                    <div class="oval-bar-larger animated" data-delay="0"></div>
                    <div class="oval-bar-larger animated" data-delay="0"></div>
                    <div class="oval-bar-larger animated" data-delay="0"></div>
                  </div>
                </div>
              </div>
              <div>
                <p style="color: rgb(0, 161, 214); font-size: 80px; text-align: center;">The end!</p>
                <p style="color: rgb(0, 161, 214); font-size: 80px; text-align: center;">Enjoy the course!</p>
              </div>
            </div>
          </div>
`;
    thankYouSlide.innerHTML = thankYouPage;
  }

}
