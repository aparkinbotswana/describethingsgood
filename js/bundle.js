(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
  const allCards = {
    topic: [' Object', 'Nature', 'Random', 'Person', 'Action', 'World'],
    card: { 
      Objects:['object0', 'object1', 'object2', 'object3', 'object4'],
      Nature:['nature0', 'nature1', 'nature2', 'nature3', 'nature4'],
      Random:['random0', 'random1', 'random2', 'random3', 'random4'],
      Person:['person0', 'person1', 'person2', 'person3', 'person4'],
      Action:['action0', 'action1', 'action2', 'action3', 'action4'],
      World:['Statue of Liberty', 'Eiffel Tower', 'Big Ben', 'Leaning Tower of Pisa', 'Colosseum', 'Empire State Building', 'Hollywood Sign', 'Golden Gate Bridge', 'Notre Dame', 'Tokyo Tower', 'London Eye', "St. Peter's Basilica", 'Sagrada Familia', 'Little Mermaid', 'Great Wall of China', 'Terracotta Army', 'Hagia Sophia', 'Oriental Pearl Tower', 'Ponte Vecchio', 'Wailing Wall', 'Loch Ness', 'Mecca', 'Sydney Harbor Bridge', 'Sistine Chapel', 'Spanish Steps', 'Bridge of Sighs', 'Summer Palace', 'Mount Etna', 'Lascaux Caves', 'Bryce Canyon National Park', 'Freedom Tower', 'Mykonos Windmills', 'Gateway Arch', 'Shanghai World Finacial Center', 'Moulin Rouge', 'Redwood National Park', 'Santorini', "Juliet's Balcony", 'Berlin Cathedral', 'Helsinki Cathedral', 'Tivoli Gardens', 'Yellowstone National Park', 'Petra', 'Potala Palace', 'Victoria Falls', 'Angkor Wat', 'Cloud Gate', 'Mayan Pyramids', 'Vesuvio', 'Pentagon', 'Cologne Cathedral', 'Brandenburg Gate', 'Temple of Luxor', 'Central Park', 'The Gherkin', 'The Shard', 'Washington Monument', 'Iguazu National Park', 'White Cliffs of Dover', 'Alcatraz', 'Rock of Gibraltar', 'Westminster Abbey', 'Space Needle', 'Arena Di Verona', 'Rialto Bridge', 'Mount Fuji', 'Mount Rushmore', "St. Paul's Cathedral", 'Sacre Coeur', 'Windsor Castle', 'Great Barrier Reef', 'Petronas Twin Towers', 'Las Vegas', 'Mont St. Michel', 'Madrid Palace', 'Tower of London', 'Niagara Falls', 'The Grand Canyon', 'CN Tower', 'Christ the Redeemer', 'Machu Picchu', 'Edinburgh Castle', 'Florence Cathedral', 'Pompeii', 'Matterhorn', 'Versailles', 'Buckingham Palace', 'Manneken Pis', 'Louvre Museum', 'The White House', 'Times Square', "St. Mark's Basilica", 'Trevi Fountain', 'Acropolis', 'Brooklyn Bridge', 'Willis Tower', 'Capitol Hill', 'Mount Everest', 'The Forbidden City', 'Tower Bridge', 'The Great Sphinx', 'Pyramids of Giza', 'Taj Mahal', 'Uluru', 'Kilimanjaro', 'Stonehenge', 'Berlin Wall', 'Arc de Triomphe', "St. Basil's Cathedral", 'Sydney Opera House', 'Bath, England', 'Disneyland', 'Portofino', 'Atomium', 'Piazza Del Campo', 'Chapel Bridge', 'Pond Du Garre', 'Papel Palace', 'Brighton Pier', 'Everglades National Park', 'Table Mountain', 'Newgrange', 'Trafalgar Square', 'Piccadilly Circus', 'Kremlin', 'Blue Lagoon', 'Blue Mosque', 'Oxford University', 'British Museum', 'Winter Palace', 'Hollywood Walk of Fame', 'Death Valley', 'Guggenheim Museum', "Giant's Causeway"]
    }
  };
  
  module.exports={allCards}

},{}],2:[function(require,module,exports){
// let Bounce = require('bounce.js');
const Oridomi = require('oridomi')
let cards = require('./cards')


document.addEventListener('DOMContentLoaded', function(){
  const topic = Object.entries(cards)[0][1].topic
  const card = Object.entries(cards)[0][1].card
  // console.log(topic); // This is an object with all the topics. Whoop.
  // console.log(card.World[0]);

    // console.log(Object.entries(cards)[0][1].topic);
    // console.log(Object.entries(cards)[0][1].card.World);
    
  function changeAttr(el, attr, attrProperty){
    document.querySelector(el).setAttribute(attr, attrProperty);
  }


  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


  function topicSelect() {
    let choosenTopic = topic[getRandomInt(topic.length)]
    console.log(choosenTopic);
  }


  function drawCard(){
    var cardNum = getRandomInt(card.Random.length) //grabs random number to act as index for all cards
    if (card.Random.length <= 0) {
      console.log('No more cards');
      return
    }
    topicSelect()

    for (const key in card) {
      if (card.hasOwnProperty(key)) {
        // const element = card[key];
        // console.log(card[key]);
        // ui rendering goes in here.... MAYBE
      }
    }
    discardCard(cardNum)
  }


  function discardCard(cardNum) {
    for (const key in card) {
      let removed = `${card[key].splice(cardNum, 1)}`
    }
  } // takes drawn card out of card array so that it is not drawn again


  // function animationPlay() {
  //   let bounce = new Bounce();
  //   bounce
  //   .rotate({
  //       from: 0,
  //       to: 360,
  //       easing: "bounce",
  //       duration: 1000,
  //       delay: 0,
  //       bounce: 4,
  //       stiffness: 3
  //   })
  //   .skew({
  //       easing: "sway",
  //       duration: 1000,
  //       delay: 0,
  //       bounce: 4,
  //       stiffness: 3
  //   })
  //   .applyTo(document.querySelectorAll(".animation-target"));
  // } //animation for cards


  document.getElementById('draw').addEventListener('click', drawCard);
  // document.getElementById('draw').addEventListener('click', animationPlay);
}, false);

},{"./cards":1,"oridomi":3}],3:[function(require,module,exports){
// Generated by CoffeeScript 1.7.1
(function() {
  var $, OriDomi, addStyle, anchorList, anchorListH, anchorListV, baseName, capitalize, cloneEl, createEl, css, defaults, defer, elClasses, getGradient, hideEl, isSupported, k, libName, noOp, prefixList, prep, showEl, styleBuffer, supportWarning, testEl, testProp, v, _ref,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
    __slice = [].slice;

  libName = 'OriDomi';

  isSupported = true;

  supportWarning = function(prop) {
    if (typeof console !== "undefined" && console !== null) {
      console.warn("" + libName + ": Missing support for `" + prop + "`.");
    }
    return isSupported = false;
  };

  testProp = function(prop) {
    var full, prefix, _i, _len;
    for (_i = 0, _len = prefixList.length; _i < _len; _i++) {
      prefix = prefixList[_i];
      if ((full = prefix + capitalize(prop)) in testEl.style) {
        return full;
      }
    }
    if (prop in testEl.style) {
      return prop;
    }
    return false;
  };

  addStyle = function(selector, rules) {
    var prop, style, val;
    style = "." + selector + "{";
    for (prop in rules) {
      val = rules[prop];
      if (prop in css) {
        prop = css[prop];
        if (prop.match(/^(webkit|moz|ms)/i)) {
          prop = '-' + prop;
        }
      }
      style += "" + (prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()) + ":" + val + ";";
    }
    return styleBuffer += style + '}';
  };

  getGradient = function(anchor) {
    return "" + css.gradientProp + "(" + anchor + ", rgba(0, 0, 0, .5) 0%, rgba(255, 255, 255, .35) 100%)";
  };

  capitalize = function(s) {
    return s[0].toUpperCase() + s.slice(1);
  };

  createEl = function(className) {
    var el;
    el = document.createElement('div');
    el.className = elClasses[className];
    return el;
  };

  cloneEl = function(parent, deep, className) {
    var el;
    el = parent.cloneNode(deep);
    el.classList.add(elClasses[className]);
    return el;
  };

  hideEl = function(el) {
    return el.style[css.transform] = 'translate3d(-99999px, 0, 0)';
  };

  showEl = function(el) {
    return el.style[css.transform] = 'translate3d(0, 0, 0)';
  };

  prep = function(fn) {
    return function() {
      var a0, a1, a2, anchor, angle, opt;
      if (this._touchStarted) {
        return fn.apply(this, arguments);
      } else {
        a0 = arguments[0], a1 = arguments[1], a2 = arguments[2];
        opt = {};
        angle = anchor = null;
        switch (fn.length) {
          case 1:
            opt.callback = a0;
            if (!this.isFoldedUp) {
              return typeof opt.callback === "function" ? opt.callback() : void 0;
            }
            break;
          case 2:
            if (typeof a0 === 'function') {
              opt.callback = a0;
            } else {
              anchor = a0;
              opt.callback = a1;
            }
            break;
          case 3:
            angle = a0;
            if (arguments.length === 2) {
              if (typeof a1 === 'object') {
                opt = a1;
              } else if (typeof a1 === 'function') {
                opt.callback = a1;
              } else {
                anchor = a1;
              }
            } else if (arguments.length === 3) {
              anchor = a1;
              if (typeof a2 === 'object') {
                opt = a2;
              } else if (typeof a2 === 'function') {
                opt.callback = a2;
              }
            }
        }
        if (angle == null) {
          angle = this._lastOp.angle || 0;
        }
        anchor || (anchor = this._lastOp.anchor);
        this._queue.push([fn, this._normalizeAngle(angle), this._getLonghandAnchor(anchor), opt]);
        this._step();
        return this;
      }
    };
  };

  defer = function(fn) {
    return setTimeout(fn, 0);
  };

  noOp = function() {};

  $ = (typeof window !== "undefined" && window !== null ? (_ref = window.$) != null ? _ref.data : void 0 : void 0) ? window.$ : null;

  anchorList = ['left', 'right', 'top', 'bottom'];

  anchorListV = anchorList.slice(0, 2);

  anchorListH = anchorList.slice(2);

  testEl = document.createElement('div');

  styleBuffer = '';

  prefixList = ['Webkit', 'Moz', 'ms'];

  baseName = libName.toLowerCase();

  elClasses = {
    active: 'active',
    clone: 'clone',
    holder: 'holder',
    stage: 'stage',
    stageLeft: 'stage-left',
    stageRight: 'stage-right',
    stageTop: 'stage-top',
    stageBottom: 'stage-bottom',
    content: 'content',
    mask: 'mask',
    maskH: 'mask-h',
    maskV: 'mask-v',
    panel: 'panel',
    panelH: 'panel-h',
    panelV: 'panel-v',
    shader: 'shader',
    shaderLeft: 'shader-left',
    shaderRight: 'shader-right',
    shaderTop: 'shader-top',
    shaderBottom: 'shader-bottom'
  };

  for (k in elClasses) {
    v = elClasses[k];
    elClasses[k] = "" + baseName + "-" + v;
  }

  css = new function() {
    var key, _i, _len, _ref1;
    _ref1 = ['transform', 'transformOrigin', 'transformStyle', 'transitionProperty', 'transitionDuration', 'transitionDelay', 'transitionTimingFunction', 'perspective', 'perspectiveOrigin', 'backfaceVisibility', 'boxSizing', 'mask'];
    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
      key = _ref1[_i];
      this[key] = key;
    }
    return this;
  };

  (function() {
    var anchor, key, p3d, prefix, styleEl, value, _i, _len, _ref1, _ref2;
    for (key in css) {
      value = css[key];
      css[key] = testProp(value);
      if (!css[key]) {
        return supportWarning(value);
      }
    }
    p3d = 'preserve-3d';
    testEl.style[css.transformStyle] = p3d;
    if (testEl.style[css.transformStyle] !== p3d) {
      return supportWarning(p3d);
    }
    css.gradientProp = (function() {
      var hyphenated, prefix, _i, _len;
      for (_i = 0, _len = prefixList.length; _i < _len; _i++) {
        prefix = prefixList[_i];
        hyphenated = "-" + (prefix.toLowerCase()) + "-linear-gradient";
        testEl.style.backgroundImage = "" + hyphenated + "(left, #000, #fff)";
        if (testEl.style.backgroundImage.indexOf('gradient') !== -1) {
          return hyphenated;
        }
      }
      return 'linear-gradient';
    })();
    _ref1 = (function() {
      var grabValue, plainGrab, prefix, _i, _len;
      for (_i = 0, _len = prefixList.length; _i < _len; _i++) {
        prefix = prefixList[_i];
        plainGrab = 'grab';
        testEl.style.cursor = (grabValue = "-" + (prefix.toLowerCase()) + "-" + plainGrab);
        if (testEl.style.cursor === grabValue) {
          return [grabValue, "-" + (prefix.toLowerCase()) + "-grabbing"];
        }
      }
      testEl.style.cursor = plainGrab;
      if (testEl.style.cursor === plainGrab) {
        return [plainGrab, 'grabbing'];
      } else {
        return ['move', 'move'];
      }
    })(), css.grab = _ref1[0], css.grabbing = _ref1[1];
    css.transformProp = (prefix = css.transform.match(/(\w+)Transform/i)) ? "-" + (prefix[1].toLowerCase()) + "-transform" : 'transform';
    css.transitionEnd = (function() {
      switch (css.transitionProperty.toLowerCase()) {
        case 'transitionproperty':
          return 'transitionEnd';
        case 'webkittransitionproperty':
          return 'webkitTransitionEnd';
        case 'moztransitionproperty':
          return 'transitionend';
        case 'mstransitionproperty':
          return 'msTransitionEnd';
      }
    })();
    addStyle(elClasses.active, {
      backgroundColor: 'transparent !important',
      backgroundImage: 'none !important',
      boxSizing: 'border-box !important',
      border: 'none !important',
      outline: 'none !important',
      padding: '0 !important',
      position: 'relative',
      transformStyle: p3d + ' !important',
      mask: 'none !important'
    });
    addStyle(elClasses.clone, {
      margin: '0 !important',
      boxSizing: 'border-box !important',
      overflow: 'hidden !important',
      display: 'block !important'
    });
    addStyle(elClasses.holder, {
      width: '100%',
      position: 'absolute',
      top: '0',
      bottom: '0',
      transformStyle: p3d
    });
    addStyle(elClasses.stage, {
      width: '100%',
      height: '100%',
      position: 'absolute',
      transform: 'translate3d(-9999px, 0, 0)',
      margin: '0',
      padding: '0',
      transformStyle: p3d
    });
    _ref2 = {
      Left: '0% 50%',
      Right: '100% 50%',
      Top: '50% 0%',
      Bottom: '50% 100%'
    };
    for (k in _ref2) {
      v = _ref2[k];
      addStyle(elClasses['stage' + k], {
        perspectiveOrigin: v
      });
    }
    addStyle(elClasses.shader, {
      width: '100%',
      height: '100%',
      position: 'absolute',
      opacity: '0',
      top: '0',
      left: '0',
      pointerEvents: 'none',
      transitionProperty: 'opacity'
    });
    for (_i = 0, _len = anchorList.length; _i < _len; _i++) {
      anchor = anchorList[_i];
      addStyle(elClasses['shader' + capitalize(anchor)], {
        background: getGradient(anchor)
      });
    }
    addStyle(elClasses.content, {
      margin: '0 !important',
      position: 'relative !important',
      float: 'none !important',
      boxSizing: 'border-box !important',
      overflow: 'hidden !important'
    });
    addStyle(elClasses.mask, {
      width: '100%',
      height: '100%',
      position: 'absolute',
      overflow: 'hidden',
      transform: 'translate3d(0, 0, 0)',
      outline: '1px solid transparent'
    });
    addStyle(elClasses.panel, {
      width: '100%',
      height: '100%',
      padding: '0',
      position: 'absolute',
      transitionProperty: css.transformProp,
      transformOrigin: 'left',
      transformStyle: p3d
    });
    addStyle(elClasses.panelH, {
      transformOrigin: 'top'
    });
    addStyle("" + elClasses.stageRight + " ." + elClasses.panel, {
      transformOrigin: 'right'
    });
    addStyle("" + elClasses.stageBottom + " ." + elClasses.panel, {
      transformOrigin: 'bottom'
    });
    styleEl = document.createElement('style');
    styleEl.type = 'text/css';
    if (styleEl.styleSheet) {
      styleEl.styleSheet.cssText = styleBuffer;
    } else {
      styleEl.appendChild(document.createTextNode(styleBuffer));
    }
    return document.head.appendChild(styleEl);
  })();

  defaults = {
    vPanels: 3,
    hPanels: 3,
    perspective: 1000,
    shading: 'hard',
    speed: 700,
    maxAngle: 90,
    ripple: 0,
    oriDomiClass: libName.toLowerCase(),
    shadingIntensity: 1,
    easingMethod: '',
    gapNudge: 1,
    touchEnabled: true,
    touchSensitivity: .25,
    touchStartCallback: noOp,
    touchMoveCallback: noOp,
    touchEndCallback: noOp
  };

  OriDomi = (function() {
    function OriDomi(el, options) {
      var a, anchor, anchorSet, axis, classSuffix, content, contentHolder, count, i, index, mask, maskProto, metric, offsets, panel, panelConfig, panelKey, panelN, panelProto, percent, prev, proto, rightOrBottom, shaderProto, shaderProtos, side, stageProto, _i, _j, _k, _l, _len, _len1, _len2, _len3, _len4, _len5, _len6, _len7, _m, _n, _o, _p, _q, _ref1, _ref2;
      this.el = el;
      if (options == null) {
        options = {};
      }
      this._onMouseOut = __bind(this._onMouseOut, this);
      this._onTouchLeave = __bind(this._onTouchLeave, this);
      this._onTouchEnd = __bind(this._onTouchEnd, this);
      this._onTouchMove = __bind(this._onTouchMove, this);
      this._onTouchStart = __bind(this._onTouchStart, this);
      this._stageReset = __bind(this._stageReset, this);
      this._conclude = __bind(this._conclude, this);
      this._onTransitionEnd = __bind(this._onTransitionEnd, this);
      this._step = __bind(this._step, this);
      if (!isSupported) {
        return;
      }
      if (!(this instanceof OriDomi)) {
        return new OriDomi(this.el, options);
      }
      if (typeof this.el === 'string') {
        this.el = document.querySelector(this.el);
      }
      if (!(this.el && this.el.nodeType === 1)) {
        if (typeof console !== "undefined" && console !== null) {
          console.warn("" + libName + ": First argument must be a DOM element");
        }
        return;
      }
      this._config = new function() {
        for (k in defaults) {
          v = defaults[k];
          if (k in options) {
            this[k] = options[k];
          } else {
            this[k] = v;
          }
        }
        return this;
      };
      this._config.ripple = Number(this._config.ripple);
      this._queue = [];
      this._panels = {};
      this._stages = {};
      this._lastOp = {
        anchor: anchorList[0]
      };
      this._shading = this._config.shading;
      if (this._shading === true) {
        this._shading = 'hard';
      }
      if (this._shading) {
        this._shaders = {};
        shaderProtos = {};
        shaderProto = createEl('shader');
        shaderProto.style[css.transitionDuration] = this._config.speed + 'ms';
        shaderProto.style[css.transitionTimingFunction] = this._config.easingMethod;
      }
      stageProto = createEl('stage');
      stageProto.style[css.perspective] = this._config.perspective + 'px';
      for (_i = 0, _len = anchorList.length; _i < _len; _i++) {
        anchor = anchorList[_i];
        this._panels[anchor] = [];
        this._stages[anchor] = cloneEl(stageProto, false, 'stage' + capitalize(anchor));
        if (this._shading) {
          this._shaders[anchor] = {};
          if (__indexOf.call(anchorListV, anchor) >= 0) {
            for (_j = 0, _len1 = anchorListV.length; _j < _len1; _j++) {
              side = anchorListV[_j];
              this._shaders[anchor][side] = [];
            }
          } else {
            for (_k = 0, _len2 = anchorListH.length; _k < _len2; _k++) {
              side = anchorListH[_k];
              this._shaders[anchor][side] = [];
            }
          }
          shaderProtos[anchor] = cloneEl(shaderProto, false, 'shader' + capitalize(anchor));
        }
      }
      contentHolder = cloneEl(this.el, true, 'content');
      maskProto = createEl('mask');
      maskProto.appendChild(contentHolder);
      panelProto = createEl('panel');
      panelProto.style[css.transitionDuration] = this._config.speed + 'ms';
      panelProto.style[css.transitionTimingFunction] = this._config.easingMethod;
      offsets = {
        left: [],
        top: []
      };
      _ref1 = ['x', 'y'];
      for (_l = 0, _len3 = _ref1.length; _l < _len3; _l++) {
        axis = _ref1[_l];
        if (axis === 'x') {
          anchorSet = anchorListV;
          metric = 'width';
          classSuffix = 'V';
        } else {
          anchorSet = anchorListH;
          metric = 'height';
          classSuffix = 'H';
        }
        panelConfig = this._config[panelKey = classSuffix.toLowerCase() + 'Panels'];
        if (typeof panelConfig === 'number') {
          count = Math.abs(parseInt(panelConfig, 10));
          percent = 100 / count;
          panelConfig = this._config[panelKey] = (function() {
            var _m, _results;
            _results = [];
            for (_m = 0; 0 <= count ? _m < count : _m > count; 0 <= count ? _m++ : _m--) {
              _results.push(percent);
            }
            return _results;
          })();
        } else {
          count = panelConfig.length;
          if (!((99 <= (_ref2 = panelConfig.reduce(function(p, c) {
            return p + c;
          })) && _ref2 <= 100.1))) {
            throw new Error("" + libName + ": Panel percentages do not sum to 100");
          }
        }
        mask = cloneEl(maskProto, true, 'mask' + classSuffix);
        if (this._shading) {
          for (_m = 0, _len4 = anchorSet.length; _m < _len4; _m++) {
            anchor = anchorSet[_m];
            mask.appendChild(shaderProtos[anchor]);
          }
        }
        proto = cloneEl(panelProto, false, 'panel' + classSuffix);
        proto.appendChild(mask);
        for (rightOrBottom = _n = 0, _len5 = anchorSet.length; _n < _len5; rightOrBottom = ++_n) {
          anchor = anchorSet[rightOrBottom];
          for (panelN = _o = 0; 0 <= count ? _o < count : _o > count; panelN = 0 <= count ? ++_o : --_o) {
            panel = proto.cloneNode(true);
            content = panel.children[0].children[0];
            content.style.width = content.style.height = '100%';
            if (rightOrBottom) {
              panel.style[css.origin] = anchor;
              index = panelConfig.length - panelN - 1;
              prev = index + 1;
            } else {
              index = panelN;
              prev = index - 1;
              if (panelN === 0) {
                offsets[anchor].push(0);
              } else {
                offsets[anchor].push((offsets[anchor][prev] - 100) * (panelConfig[prev] / panelConfig[index]));
              }
            }
            if (panelN === 0) {
              panel.style[anchor] = '0';
              panel.style[metric] = panelConfig[index] + '%';
            } else {
              panel.style[anchor] = '100%';
              panel.style[metric] = panelConfig[index] / panelConfig[prev] * 100 + '%';
            }
            if (this._shading) {
              for (i = _p = 0, _len6 = anchorSet.length; _p < _len6; i = ++_p) {
                a = anchorSet[i];
                this._shaders[anchor][a][panelN] = panel.children[0].children[i + 1];
              }
            }
            content.style[metric] = content.style['max' + capitalize(metric)] = (count / panelConfig[index] * 10000 / count) + '%';
            content.style[anchorSet[0]] = offsets[anchorSet[0]][index] + '%';
            this._transformPanel(panel, 0, anchor);
            this._panels[anchor][panelN] = panel;
            if (panelN !== 0) {
              this._panels[anchor][panelN - 1].appendChild(panel);
            }
          }
          this._stages[anchor].appendChild(this._panels[anchor][0]);
        }
      }
      this._stageHolder = createEl('holder');
      this._stageHolder.setAttribute('aria-hidden', 'true');
      for (_q = 0, _len7 = anchorList.length; _q < _len7; _q++) {
        anchor = anchorList[_q];
        this._stageHolder.appendChild(this._stages[anchor]);
      }
      if (window.getComputedStyle(this.el).position === 'absolute') {
        this.el.style.position = 'absolute';
      }
      this.el.classList.add(elClasses.active);
      showEl(this._stages.left);
      this._cloneEl = cloneEl(this.el, true, 'clone');
      this._cloneEl.classList.remove(elClasses.active);
      hideEl(this._cloneEl);
      this.el.innerHTML = '';
      this.el.appendChild(this._cloneEl);
      this.el.appendChild(this._stageHolder);
      this.el.parentNode.style[css.transformStyle] = 'preserve-3d';
      this.accordion(0);
      if (this._config.ripple) {
        this.setRipple(this._config.ripple);
      }
      if (this._config.touchEnabled) {
        this.enableTouch();
      }
    }

    OriDomi.prototype._step = function() {
      var anchor, angle, fn, next, options, _ref1;
      if (this._inTrans || !this._queue.length) {
        return;
      }
      this._inTrans = true;
      _ref1 = this._queue.shift(), fn = _ref1[0], angle = _ref1[1], anchor = _ref1[2], options = _ref1[3];
      if (this.isFrozen) {
        this.unfreeze();
      }
      next = (function(_this) {
        return function() {
          var args;
          _this._setCallback({
            angle: angle,
            anchor: anchor,
            options: options,
            fn: fn
          });
          args = [angle, anchor, options];
          if (fn.length < 3) {
            args.shift();
          }
          return fn.apply(_this, args);
        };
      })(this);
      if (this.isFoldedUp) {
        if (fn.length === 2) {
          return next();
        } else {
          return this._unfold(next);
        }
      } else if (anchor !== this._lastOp.anchor) {
        return this._stageReset(anchor, next);
      } else {
        return next();
      }
    };

    OriDomi.prototype._isIdenticalOperation = function(op) {
      var key, _i, _len, _ref1, _ref2;
      if (!this._lastOp.fn) {
        return true;
      }
      if (this._lastOp.reset) {
        return false;
      }
      _ref1 = ['angle', 'anchor', 'fn'];
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        key = _ref1[_i];
        if (this._lastOp[key] !== op[key]) {
          return false;
        }
      }
      _ref2 = op.options;
      for (k in _ref2) {
        v = _ref2[k];
        if (v !== this._lastOp.options[k] && k !== 'callback') {
          return false;
        }
      }
      return true;
    };

    OriDomi.prototype._setCallback = function(operation) {
      if (!this._config.speed || this._isIdenticalOperation(operation)) {
        this._conclude(operation.options.callback);
      } else {
        this._panels[this._lastOp.anchor][0].addEventListener(css.transitionEnd, this._onTransitionEnd, false);
      }
      return (this._lastOp = operation).reset = false;
    };

    OriDomi.prototype._onTransitionEnd = function(e) {
      e.currentTarget.removeEventListener(css.transitionEnd, this._onTransitionEnd, false);
      return this._conclude(this._lastOp.options.callback, e);
    };

    OriDomi.prototype._conclude = function(cb, event) {
      return defer((function(_this) {
        return function() {
          _this._inTrans = false;
          _this._step();
          return typeof cb === "function" ? cb(event, _this) : void 0;
        };
      })(this));
    };

    OriDomi.prototype._transformPanel = function(el, angle, anchor, fracture) {
      var transPrefix, x, y, z;
      x = y = z = 0;
      switch (anchor) {
        case 'left':
          y = angle;
          transPrefix = 'X(-';
          break;
        case 'right':
          y = -angle;
          transPrefix = 'X(';
          break;
        case 'top':
          x = -angle;
          transPrefix = 'Y(-';
          break;
        case 'bottom':
          x = angle;
          transPrefix = 'Y(';
      }
      if (fracture) {
        x = y = z = angle;
      }
      return el.style[css.transform] = "rotateX(" + x + "deg) rotateY(" + y + "deg) rotateZ(" + z + "deg) translate" + transPrefix + this._config.gapNudge + "px)";
    };

    OriDomi.prototype._normalizeAngle = function(angle) {
      var max;
      angle = parseFloat(angle, 10);
      max = this._config.maxAngle;
      if (isNaN(angle)) {
        return 0;
      } else if (angle > max) {
        return max;
      } else if (angle < -max) {
        return -max;
      } else {
        return angle;
      }
    };

    OriDomi.prototype._setTrans = function(duration, delay, anchor) {
      if (anchor == null) {
        anchor = this._lastOp.anchor;
      }
      return this._iterate(anchor, (function(_this) {
        return function(panel, i, len) {
          return _this._setPanelTrans.apply(_this, [anchor].concat(__slice.call(arguments), [duration], [delay]));
        };
      })(this));
    };

    OriDomi.prototype._setPanelTrans = function(anchor, panel, i, len, duration, delay) {
      var delayMs, shader, side, _i, _len, _ref1;
      delayMs = (function() {
        switch (delay) {
          case 0:
            return 0;
          case 1:
            return this._config.speed / len * i;
          case 2:
            return this._config.speed / len * (len - i - 1);
        }
      }).call(this);
      panel.style[css.transitionDuration] = duration + 'ms';
      panel.style[css.transitionDelay] = delayMs + 'ms';
      if (this._shading) {
        _ref1 = (__indexOf.call(anchorListV, anchor) >= 0 ? anchorListV : anchorListH);
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          side = _ref1[_i];
          shader = this._shaders[anchor][side][i];
          shader.style[css.transitionDuration] = duration + 'ms';
          shader.style[css.transitionDelay] = delayMs + 'ms';
        }
      }
      return delayMs;
    };

    OriDomi.prototype._setShader = function(n, anchor, angle) {
      var a, abs, b, opacity;
      abs = Math.abs(angle);
      opacity = abs / 90 * this._config.shadingIntensity;
      if (this._shading === 'hard') {
        opacity *= .15;
        if (this._lastOp.angle < 0) {
          angle = abs;
        } else {
          angle = -abs;
        }
      } else {
        opacity *= .4;
      }
      if (__indexOf.call(anchorListV, anchor) >= 0) {
        if (angle < 0) {
          a = opacity;
          b = 0;
        } else {
          a = 0;
          b = opacity;
        }
        this._shaders[anchor].left[n].style.opacity = a;
        return this._shaders[anchor].right[n].style.opacity = b;
      } else {
        if (angle < 0) {
          a = 0;
          b = opacity;
        } else {
          a = opacity;
          b = 0;
        }
        this._shaders[anchor].top[n].style.opacity = a;
        return this._shaders[anchor].bottom[n].style.opacity = b;
      }
    };

    OriDomi.prototype._showStage = function(anchor) {
      if (anchor !== this._lastOp.anchor) {
        hideEl(this._stages[this._lastOp.anchor]);
        this._lastOp.anchor = anchor;
        this._lastOp.reset = true;
        return this._stages[anchor].style[css.transform] = 'translate3d(' + (function() {
          switch (anchor) {
            case 'left':
              return '0, 0, 0)';
            case 'right':
              return "-" + this._config.vPanels.length + "px, 0, 0)";
            case 'top':
              return '0, 0, 0)';
            case 'bottom':
              return "0, -" + this._config.hPanels.length + "px, 0)";
          }
        }).call(this);
      }
    };

    OriDomi.prototype._stageReset = function(anchor, cb) {
      var fn;
      fn = (function(_this) {
        return function(e) {
          if (e) {
            e.currentTarget.removeEventListener(css.transitionEnd, fn, false);
          }
          _this._showStage(anchor);
          return defer(cb);
        };
      })(this);
      if (this._lastOp.angle === 0) {
        return fn();
      }
      this._panels[this._lastOp.anchor][0].addEventListener(css.transitionEnd, fn, false);
      return this._iterate(this._lastOp.anchor, (function(_this) {
        return function(panel, i) {
          _this._transformPanel(panel, 0, _this._lastOp.anchor);
          if (_this._shading) {
            return _this._setShader(i, _this._lastOp.anchor, 0);
          }
        };
      })(this));
    };

    OriDomi.prototype._getLonghandAnchor = function(shorthand) {
      switch (shorthand.toString()) {
        case 'left':
        case 'l':
        case '4':
          return 'left';
        case 'right':
        case 'r':
        case '2':
          return 'right';
        case 'top':
        case 't':
        case '1':
          return 'top';
        case 'bottom':
        case 'b':
        case '3':
          return 'bottom';
        default:
          return 'left';
      }
    };

    OriDomi.prototype._setCursor = function(bool) {
      if (bool == null) {
        bool = this._touchEnabled;
      }
      if (bool) {
        return this.el.style.cursor = css.grab;
      } else {
        return this.el.style.cursor = 'default';
      }
    };

    OriDomi.prototype._setTouch = function(toggle) {
      var eString, eventPair, eventPairs, listenFn, mouseLeaveSupport, _i, _j, _len, _len1;
      if (toggle) {
        if (this._touchEnabled) {
          return this;
        }
        listenFn = 'addEventListener';
      } else {
        if (!this._touchEnabled) {
          return this;
        }
        listenFn = 'removeEventListener';
      }
      this._touchEnabled = toggle;
      this._setCursor();
      eventPairs = [['TouchStart', 'MouseDown'], ['TouchEnd', 'MouseUp'], ['TouchMove', 'MouseMove'], ['TouchLeave', 'MouseLeave']];
      mouseLeaveSupport = 'onmouseleave' in window;
      for (_i = 0, _len = eventPairs.length; _i < _len; _i++) {
        eventPair = eventPairs[_i];
        for (_j = 0, _len1 = eventPair.length; _j < _len1; _j++) {
          eString = eventPair[_j];
          if (!(eString === 'TouchLeave' && !mouseLeaveSupport)) {
            this.el[listenFn](eString.toLowerCase(), this['_on' + eventPair[0]], false);
          } else {
            this.el[listenFn]('mouseout', this._onMouseOut, false);
            break;
          }
        }
      }
      return this;
    };

    OriDomi.prototype._onTouchStart = function(e) {
      var axis1, _ref1;
      if (!this._touchEnabled || this.isFoldedUp) {
        return;
      }
      e.preventDefault();
      this.emptyQueue();
      this._touchStarted = true;
      this.el.style.cursor = css.grabbing;
      this._setTrans(0, 0);
      this._touchAxis = (_ref1 = this._lastOp.anchor, __indexOf.call(anchorListV, _ref1) >= 0) ? 'x' : 'y';
      this["_" + this._touchAxis + "Last"] = this._lastOp.angle;
      axis1 = "_" + this._touchAxis + "1";
      if (e.type === 'mousedown') {
        this[axis1] = e["page" + (this._touchAxis.toUpperCase())];
      } else {
        this[axis1] = e.targetTouches[0]["page" + (this._touchAxis.toUpperCase())];
      }
      return this._config.touchStartCallback(this[axis1], e);
    };

    OriDomi.prototype._onTouchMove = function(e) {
      var current, delta, distance;
      if (!(this._touchEnabled && this._touchStarted)) {
        return;
      }
      e.preventDefault();
      if (e.type === 'mousemove') {
        current = e["page" + (this._touchAxis.toUpperCase())];
      } else {
        current = e.targetTouches[0]["page" + (this._touchAxis.toUpperCase())];
      }
      distance = (current - this["_" + this._touchAxis + "1"]) * this._config.touchSensitivity;
      if (this._lastOp.angle < 0) {
        if (this._lastOp.anchor === 'right' || this._lastOp.anchor === 'bottom') {
          delta = this["_" + this._touchAxis + "Last"] - distance;
        } else {
          delta = this["_" + this._touchAxis + "Last"] + distance;
        }
        if (delta > 0) {
          delta = 0;
        }
      } else {
        if (this._lastOp.anchor === 'right' || this._lastOp.anchor === 'bottom') {
          delta = this["_" + this._touchAxis + "Last"] + distance;
        } else {
          delta = this["_" + this._touchAxis + "Last"] - distance;
        }
        if (delta < 0) {
          delta = 0;
        }
      }
      this._lastOp.angle = delta = this._normalizeAngle(delta);
      this._lastOp.fn.call(this, delta, this._lastOp.anchor, this._lastOp.options);
      return this._config.touchMoveCallback(delta, e);
    };

    OriDomi.prototype._onTouchEnd = function(e) {
      if (!this._touchEnabled) {
        return;
      }
      this._touchStarted = this._inTrans = false;
      this.el.style.cursor = css.grab;
      this._setTrans(this._config.speed, this._config.ripple);
      return this._config.touchEndCallback(this["_" + this._touchAxis + "Last"], e);
    };

    OriDomi.prototype._onTouchLeave = function(e) {
      if (!(this._touchEnabled && this._touchStarted)) {
        return;
      }
      return this._onTouchEnd(e);
    };

    OriDomi.prototype._onMouseOut = function(e) {
      if (!(this._touchEnabled && this._touchStarted)) {
        return;
      }
      if (e.toElement && !this.el.contains(e.toElement)) {
        return this._onTouchEnd(e);
      }
    };

    OriDomi.prototype._unfold = function(callback) {
      var anchor;
      this._inTrans = true;
      anchor = this._lastOp.anchor;
      return this._iterate(anchor, (function(_this) {
        return function(panel, i, len) {
          var delay;
          delay = _this._setPanelTrans.apply(_this, [anchor].concat(__slice.call(arguments), [_this._config.speed], [1]));
          return (function(panel, i, delay) {
            return defer(function() {
              _this._transformPanel(panel, 0, _this._lastOp.anchor);
              return setTimeout(function() {
                showEl(panel.children[0]);
                if (i === len - 1) {
                  _this._inTrans = _this.isFoldedUp = false;
                  if (typeof callback === "function") {
                    callback();
                  }
                  _this._lastOp.fn = _this.accordion;
                  _this._lastOp.angle = 0;
                }
                return defer(function() {
                  return panel.style[css.transitionDuration] = _this._config.speed;
                });
              }, delay + _this._config.speed * .25);
            });
          })(panel, i, delay);
        };
      })(this));
    };

    OriDomi.prototype._iterate = function(anchor, fn) {
      var i, panel, panels, _i, _len, _ref1, _results;
      _ref1 = panels = this._panels[anchor];
      _results = [];
      for (i = _i = 0, _len = _ref1.length; _i < _len; i = ++_i) {
        panel = _ref1[i];
        _results.push(fn.call(this, panel, i, panels.length));
      }
      return _results;
    };

    OriDomi.prototype.enableTouch = function() {
      return this._setTouch(true);
    };

    OriDomi.prototype.disableTouch = function() {
      return this._setTouch(false);
    };

    OriDomi.prototype.setSpeed = function(speed) {
      var anchor, _i, _len;
      for (_i = 0, _len = anchorList.length; _i < _len; _i++) {
        anchor = anchorList[_i];
        this._setTrans((this._config.speed = speed), this._config.ripple, anchor);
      }
      return this;
    };

    OriDomi.prototype.freeze = function(callback) {
      if (this.isFrozen) {
        if (typeof callback === "function") {
          callback();
        }
      } else {
        this._stageReset(this._lastOp.anchor, (function(_this) {
          return function() {
            _this.isFrozen = true;
            hideEl(_this._stageHolder);
            showEl(_this._cloneEl);
            _this._setCursor(false);
            return typeof callback === "function" ? callback() : void 0;
          };
        })(this));
      }
      return this;
    };

    OriDomi.prototype.unfreeze = function() {
      if (this.isFrozen) {
        this.isFrozen = false;
        hideEl(this._cloneEl);
        showEl(this._stageHolder);
        this._setCursor();
        this._lastOp.angle = 0;
      }
      return this;
    };

    OriDomi.prototype.destroy = function(callback) {
      this.freeze((function(_this) {
        return function() {
          _this._setTouch(false);
          if ($) {
            $.data(_this.el, baseName, null);
          }
          _this.el.innerHTML = _this._cloneEl.innerHTML;
          _this.el.classList.remove(elClasses.active);
          return typeof callback === "function" ? callback() : void 0;
        };
      })(this));
      return null;
    };

    OriDomi.prototype.emptyQueue = function() {
      this._queue = [];
      defer((function(_this) {
        return function() {
          return _this._inTrans = false;
        };
      })(this));
      return this;
    };

    OriDomi.prototype.setRipple = function(dir) {
      if (dir == null) {
        dir = 1;
      }
      this._config.ripple = Number(dir);
      this.setSpeed(this._config.speed);
      return this;
    };

    OriDomi.prototype.constrainAngle = function(angle) {
      this._config.maxAngle = parseFloat(angle, 10) || defaults.maxAngle;
      return this;
    };

    OriDomi.prototype.wait = function(ms) {
      var fn;
      fn = (function(_this) {
        return function() {
          return setTimeout(_this._conclude, ms);
        };
      })(this);
      if (this._inTrans) {
        this._queue.push([fn, this._lastOp.angle, this._lastOp.anchor, this._lastOp.options]);
      } else {
        fn();
      }
      return this;
    };

    OriDomi.prototype.modifyContent = function(fn) {
      var anchor, i, panel, selectors, set, _i, _j, _len, _len1, _ref1;
      if (typeof fn !== 'function') {
        selectors = fn;
        set = function(el, content, style) {
          var key, value;
          if (content) {
            el.innerHTML = content;
          }
          if (style) {
            for (key in style) {
              value = style[key];
              el.style[key] = value;
            }
            return null;
          }
        };
        fn = function(el) {
          var content, match, selector, style, value, _i, _len, _ref1;
          for (selector in selectors) {
            value = selectors[selector];
            content = style = null;
            if (typeof value === 'string') {
              content = value;
            } else {
              content = value.content, style = value.style;
            }
            if (selector === '') {
              set(el, content, style);
              continue;
            }
            _ref1 = el.querySelectorAll(selector);
            for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
              match = _ref1[_i];
              set(match, content, style);
            }
          }
          return null;
        };
      }
      for (_i = 0, _len = anchorList.length; _i < _len; _i++) {
        anchor = anchorList[_i];
        _ref1 = this._panels[anchor];
        for (i = _j = 0, _len1 = _ref1.length; _j < _len1; i = ++_j) {
          panel = _ref1[i];
          fn(panel.children[0].children[0], i, anchor);
        }
      }
      return this;
    };

    OriDomi.prototype.accordion = prep(function(angle, anchor, options) {
      return this._iterate(anchor, (function(_this) {
        return function(panel, i) {
          var deg;
          if (i % 2 !== 0 && !options.twist) {
            deg = -angle;
          } else {
            deg = angle;
          }
          if (options.sticky) {
            if (i === 0) {
              deg = 0;
            } else if (i > 1 || options.stairs) {
              deg *= 2;
            }
          } else {
            if (i !== 0) {
              deg *= 2;
            }
          }
          if (options.stairs) {
            deg *= -1;
          }
          _this._transformPanel(panel, deg, anchor, options.fracture);
          if (_this._shading) {
            if (options.twist || options.fracture || (i === 0 && options.sticky)) {
              return _this._setShader(i, anchor, 0);
            } else if (Math.abs(deg) !== 180) {
              return _this._setShader(i, anchor, deg);
            }
          }
        };
      })(this));
    });

    OriDomi.prototype.curl = prep(function(angle, anchor, options) {
      angle /= __indexOf.call(anchorListV, anchor) >= 0 ? this._config.vPanels.length : this._config.hPanels.length;
      return this._iterate(anchor, (function(_this) {
        return function(panel, i) {
          _this._transformPanel(panel, angle, anchor);
          if (_this._shading) {
            return _this._setShader(i, anchor, 0);
          }
        };
      })(this));
    });

    OriDomi.prototype.ramp = prep(function(angle, anchor, options) {
      this._transformPanel(this._panels[anchor][1], angle, anchor);
      return this._iterate(anchor, (function(_this) {
        return function(panel, i) {
          if (i !== 1) {
            _this._transformPanel(panel, 0, anchor);
          }
          if (_this._shading) {
            return _this._setShader(i, anchor, 0);
          }
        };
      })(this));
    });

    OriDomi.prototype.foldUp = prep(function(anchor, callback) {
      if (this.isFoldedUp) {
        return typeof callback === "function" ? callback() : void 0;
      }
      return this._stageReset(anchor, (function(_this) {
        return function() {
          _this._inTrans = _this.isFoldedUp = true;
          return _this._iterate(anchor, function(panel, i, len) {
            var delay, duration;
            duration = _this._config.speed;
            if (i === 0) {
              duration /= 2;
            }
            delay = _this._setPanelTrans.apply(_this, [anchor].concat(__slice.call(arguments), [duration], [2]));
            return (function(panel, i, delay) {
              return defer(function() {
                _this._transformPanel(panel, (i === 0 ? 90 : 170), anchor);
                return setTimeout(function() {
                  if (i === 0) {
                    _this._inTrans = false;
                    return typeof callback === "function" ? callback() : void 0;
                  } else {
                    return hideEl(panel.children[0]);
                  }
                }, delay + _this._config.speed * .25);
              });
            })(panel, i, delay);
          });
        };
      })(this));
    });

    OriDomi.prototype.unfold = prep(function(callback) {
      return this._unfold.apply(this, arguments);
    });

    OriDomi.prototype.map = function(fn) {
      return prep((function(_this) {
        return function(angle, anchor, options) {
          return _this._iterate(anchor, function(panel, i, len) {
            return _this._transformPanel(panel, fn(angle, i, len), anchor, options.fracture);
          });
        };
      })(this)).bind(this);
    };

    OriDomi.prototype.reset = function(callback) {
      return this.accordion(0, {
        callback: callback
      });
    };

    OriDomi.prototype.reveal = function(angle, anchor, options) {
      if (options == null) {
        options = {};
      }
      options.sticky = true;
      return this.accordion(angle, anchor, options);
    };

    OriDomi.prototype.stairs = function(angle, anchor, options) {
      if (options == null) {
        options = {};
      }
      options.stairs = options.sticky = true;
      return this.accordion(angle, anchor, options);
    };

    OriDomi.prototype.fracture = function(angle, anchor, options) {
      if (options == null) {
        options = {};
      }
      options.fracture = true;
      return this.accordion(angle, anchor, options);
    };

    OriDomi.prototype.twist = function(angle, anchor, options) {
      if (options == null) {
        options = {};
      }
      options.fracture = options.twist = true;
      return this.accordion(angle / 10, anchor, options);
    };

    OriDomi.prototype.collapse = function(anchor, options) {
      if (options == null) {
        options = {};
      }
      options.sticky = false;
      return this.accordion(-this._config.maxAngle, anchor, options);
    };

    OriDomi.prototype.collapseAlt = function(anchor, options) {
      if (options == null) {
        options = {};
      }
      options.sticky = false;
      return this.accordion(this._config.maxAngle, anchor, options);
    };

    OriDomi.VERSION = '1.1.2';

    OriDomi.isSupported = isSupported;

    return OriDomi;

  })();

  if (typeof module !== "undefined" && module !== null ? module.exports : void 0) {
    module.exports = OriDomi;
  } else if (typeof define !== "undefined" && define !== null ? define.amd : void 0) {
    define(function() {
      return OriDomi;
    });
  } else {
    window.OriDomi = OriDomi;
  }

  if (!$) {
    return;
  }

  $.prototype.oriDomi = function(options) {
    var el, instance, method, methodName, _i, _j, _len, _len1;
    if (!isSupported) {
      return this;
    }
    if (options === true) {
      return $.data(this[0], baseName);
    }
    if (typeof options === 'string') {
      methodName = options;
      if (typeof (method = OriDomi.prototype[methodName]) !== 'function') {
        if (typeof console !== "undefined" && console !== null) {
          console.warn("" + libName + ": No such method `" + methodName + "`");
        }
        return this;
      }
      for (_i = 0, _len = this.length; _i < _len; _i++) {
        el = this[_i];
        if (!(instance = $.data(el, baseName))) {
          instance = $.data(el, baseName, new OriDomi(el, options));
        }
        method.apply(instance, Array.prototype.slice.call(arguments).slice(1));
      }
    } else {
      for (_j = 0, _len1 = this.length; _j < _len1; _j++) {
        el = this[_j];
        if (instance = $.data(el, baseName)) {
          continue;
        } else {
          $.data(el, baseName, new OriDomi(el, options));
        }
      }
    }
    return this;
  };

}).call(this);



},{}]},{},[2]);
