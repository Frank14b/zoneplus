
/* 
 Created on : 18 nov. 2016, 16:25:00
 Author     : Frank Donald Fontcha
 Copyright  : ZoneStyle 2016
 */

$(document).ready(function() {
    $('.bt_effet').effetZs({
        "type": "bt_effet"
    });
    $('.lien_effet').append('<div class="lien_effet"></div>');
    $('.mnd_effet').append('<div class="mnd_effet"></div>');
    $('.mlc_effet').append('<div class="mlc_effet"></div>');
    $('.mn_boutton').before('<span class="pt_menu icone arrow_carrot-2down" title="Menu"></span>');
    $('.menu_accordeon').append('<a class="lien_accordeon close_accord"><i class="icone arrow_carrot-2up"></i></a>');
    $('.zs_radio').after('<span class="zs-radio"></span>');
    $('.zs_checkbox').after('<span class="zs-check"></span>');
    $('.zs_image').after('<img src="#" id="preview" />');
});

$(function() {

    var txt = $('textarea'),
            hiddenDiv = $(document.createElement('div')),
            content = null;
    txt.addClass('txtstuff');
    hiddenDiv.addClass('hiddendiv common');
    $('body').append(hiddenDiv);
    txt.on('keyup', function() {

        content = $(this).val();
        content = content.replace(/\n/g, '<br>');
        hiddenDiv.html(content + '<br class="lbr">');
        $(this).css('height', hiddenDiv.height());
    });
});
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $(this).next("#preview").attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    } else {
        $(this).parent().children('#preview').fadeIn();
    }
}

$(document).ready(function() {
    $('video').videoPlayer({
        'playerWidth': 0.95,
        'videoClass': 'video'
    });
});
////////////////////: wow js animation //////////////////////////

(function() {
    var MutationObserver, Util, WeakMap, getComputedStyle, getComputedStyleRX,
            bind = function(fn, me) {
                return function() {
                    return fn.apply(me, arguments);
                };
            },
            indexOf = [].indexOf || function(item) {
        for (var i = 0, l = this.length; i < l; i++) {
            if (i in this && this[i] === item)
                return i;
        }
        return -1;
    };
    Util = (function() {
        function Util() {
        }

        Util.prototype.extend = function(custom, defaults) {
            var key, value;
            for (key in defaults) {
                value = defaults[key];
                if (custom[key] == null) {
                    custom[key] = value;
                }
            }
            return custom;
        };
        Util.prototype.isMobile = function(agent) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent);
        };
        Util.prototype.createEvent = function(event, bubble, cancel, detail) {
            var customEvent;
            if (bubble == null) {
                bubble = false;
            }
            if (cancel == null) {
                cancel = false;
            }
            if (detail == null) {
                detail = null;
            }
            if (document.createEvent != null) {
                customEvent = document.createEvent('CustomEvent');
                customEvent.initCustomEvent(event, bubble, cancel, detail);
            } else if (document.createEventObject != null) {
                customEvent = document.createEventObject();
                customEvent.eventType = event;
            } else {
                customEvent.eventName = event;
            }
            return customEvent;
        };
        Util.prototype.emitEvent = function(elem, event) {
            if (elem.dispatchEvent != null) {
                return elem.dispatchEvent(event);
            } else if (event in (elem != null)) {
                return elem[event]();
            } else if (("on" + event) in (elem != null)) {
                return elem["on" + event]();
            }
        };
        Util.prototype.addEvent = function(elem, event, fn) {
            if (elem.addEventListener != null) {
                return elem.addEventListener(event, fn, false);
            } else if (elem.attachEvent != null) {
                return elem.attachEvent("on" + event, fn);
            } else {
                return elem[event] = fn;
            }
        };
        Util.prototype.removeEvent = function(elem, event, fn) {
            if (elem.removeEventListener != null) {
                return elem.removeEventListener(event, fn, false);
            } else if (elem.detachEvent != null) {
                return elem.detachEvent("on" + event, fn);
            } else {
                return delete elem[event];
            }
        };
        Util.prototype.innerHeight = function() {
            if ('innerHeight' in window) {
                return window.innerHeight;
            } else {
                return document.documentElement.clientHeight;
            }
        };
        return Util;
    })();
    WeakMap = this.WeakMap || this.MozWeakMap || (WeakMap = (function() {
        function WeakMap() {
            this.keys = [];
            this.values = [];
        }

        WeakMap.prototype.get = function(key) {
            var i, item, j, len, ref;
            ref = this.keys;
            for (i = j = 0, len = ref.length; j < len; i = ++j) {
                item = ref[i];
                if (item === key) {
                    return this.values[i];
                }
            }
        };
        WeakMap.prototype.set = function(key, value) {
            var i, item, j, len, ref;
            ref = this.keys;
            for (i = j = 0, len = ref.length; j < len; i = ++j) {
                item = ref[i];
                if (item === key) {
                    this.values[i] = value;
                    return;
                }
            }
            this.keys.push(key);
            return this.values.push(value);
        };
        return WeakMap;
    })());
    MutationObserver = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (MutationObserver = (function() {
        function MutationObserver() {
            if (typeof console !== "undefined" && console !== null) {
                console.warn('MutationObserver is not supported by your browser.');
            }
            if (typeof console !== "undefined" && console !== null) {
                console.warn('WOW.js cannot detect dom mutations, please call .sync() after loading new content.');
            }
        }

        MutationObserver.notSupported = true;
        MutationObserver.prototype.observe = function() {
        };
        return MutationObserver;
    })());
    getComputedStyle = this.getComputedStyle || function(el, pseudo) {
        this.getPropertyValue = function(prop) {
            var ref;
            if (prop === 'float') {
                prop = 'styleFloat';
            }
            if (getComputedStyleRX.test(prop)) {
                prop.replace(getComputedStyleRX, function(_, _char) {
                    return _char.toUpperCase();
                });
            }
            return ((ref = el.currentStyle) != null ? ref[prop] : void 0) || null;
        };
        return this;
    };
    getComputedStyleRX = /(\-([a-z]){1})/g;
    this.WOW = (function() {
        WOW.prototype.defaults = {
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true,
            callback: null
        };
        function WOW(options) {
            if (options == null) {
                options = {};
            }
            this.scrollCallback = bind(this.scrollCallback, this);
            this.scrollHandler = bind(this.scrollHandler, this);
            this.resetAnimation = bind(this.resetAnimation, this);
            this.start = bind(this.start, this);
            this.scrolled = true;
            this.config = this.util().extend(options, this.defaults);
            this.animationNameCache = new WeakMap();
            this.wowEvent = this.util().createEvent(this.config.boxClass);
        }

        WOW.prototype.init = function() {
            var ref;
            this.element = window.document.documentElement;
            if ((ref = document.readyState) === "interactive" || ref === "complete") {
                this.start();
            } else {
                this.util().addEvent(document, 'DOMContentLoaded', this.start);
            }
            return this.finished = [];
        };
        WOW.prototype.start = function() {
            var box, j, len, ref;
            this.stopped = false;
            this.boxes = (function() {
                var j, len, ref, results;
                ref = this.element.querySelectorAll("." + this.config.boxClass);
                results = [];
                for (j = 0, len = ref.length; j < len; j++) {
                    box = ref[j];
                    results.push(box);
                }
                return results;
            }).call(this);
            this.all = (function() {
                var j, len, ref, results;
                ref = this.boxes;
                results = [];
                for (j = 0, len = ref.length; j < len; j++) {
                    box = ref[j];
                    results.push(box);
                }
                return results;
            }).call(this);
            if (this.boxes.length) {
                if (this.disabled()) {
                    this.resetStyle();
                } else {
                    ref = this.boxes;
                    for (j = 0, len = ref.length; j < len; j++) {
                        box = ref[j];
                        this.applyStyle(box, true);
                    }
                }
            }
            if (!this.disabled()) {
                this.util().addEvent(window, 'scroll', this.scrollHandler);
                this.util().addEvent(window, 'resize', this.scrollHandler);
                this.interval = setInterval(this.scrollCallback, 50);
            }
            if (this.config.live) {
                return new MutationObserver((function(_this) {
                    return function(records) {
                        var k, len1, node, record, results;
                        results = [];
                        for (k = 0, len1 = records.length; k < len1; k++) {
                            record = records[k];
                            results.push((function() {
                                var l, len2, ref1, results1;
                                ref1 = record.addedNodes || [];
                                results1 = [];
                                for (l = 0, len2 = ref1.length; l < len2; l++) {
                                    node = ref1[l];
                                    results1.push(this.doSync(node));
                                }
                                return results1;
                            }).call(_this));
                        }
                        return results;
                    };
                })(this)).observe(document.body, {
                    childList: true,
                    subtree: true
                });
            }
        };
        WOW.prototype.stop = function() {
            this.stopped = true;
            this.util().removeEvent(window, 'scroll', this.scrollHandler);
            this.util().removeEvent(window, 'resize', this.scrollHandler);
            if (this.interval != null) {
                return clearInterval(this.interval);
            }
        };
        WOW.prototype.sync = function(element) {
            if (MutationObserver.notSupported) {
                return this.doSync(this.element);
            }
        };
        WOW.prototype.doSync = function(element) {
            var box, j, len, ref, results;
            if (element == null) {
                element = this.element;
            }
            if (element.nodeType !== 1) {
                return;
            }
            element = element.parentNode || element;
            ref = element.querySelectorAll("." + this.config.boxClass);
            results = [];
            for (j = 0, len = ref.length; j < len; j++) {
                box = ref[j];
                if (indexOf.call(this.all, box) < 0) {
                    this.boxes.push(box);
                    this.all.push(box);
                    if (this.stopped || this.disabled()) {
                        this.resetStyle();
                    } else {
                        this.applyStyle(box, true);
                    }
                    results.push(this.scrolled = true);
                } else {
                    results.push(void 0);
                }
            }
            return results;
        };
        WOW.prototype.show = function(box) {
            this.applyStyle(box);
            box.className = box.className + " " + this.config.animateClass;
            if (this.config.callback != null) {
                this.config.callback(box);
            }
            this.util().emitEvent(box, this.wowEvent);
            this.util().addEvent(box, 'animationend', this.resetAnimation);
            this.util().addEvent(box, 'oanimationend', this.resetAnimation);
            this.util().addEvent(box, 'webkitAnimationEnd', this.resetAnimation);
            this.util().addEvent(box, 'MSAnimationEnd', this.resetAnimation);
            return box;
        };
        WOW.prototype.applyStyle = function(box, hidden) {
            var delay, duration, iteration;
            duration = box.getAttribute('data-wow-duration');
            delay = box.getAttribute('data-wow-delay');
            iteration = box.getAttribute('data-wow-iteration');
            return this.animate((function(_this) {
                return function() {
                    return _this.customStyle(box, hidden, duration, delay, iteration);
                };
            })(this));
        };
        WOW.prototype.animate = (function() {
            if ('requestAnimationFrame' in window) {
                return function(callback) {
                    return window.requestAnimationFrame(callback);
                };
            } else {
                return function(callback) {
                    return callback();
                };
            }
        })();
        WOW.prototype.resetStyle = function() {
            var box, j, len, ref, results;
            ref = this.boxes;
            results = [];
            for (j = 0, len = ref.length; j < len; j++) {
                box = ref[j];
                results.push(box.style.visibility = 'visible');
            }
            return results;
        };
        WOW.prototype.resetAnimation = function(event) {
            var target;
            if (event.type.toLowerCase().indexOf('animationend') >= 0) {
                target = event.target || event.srcElement;
                return target.className = target.className.replace(this.config.animateClass, '').trim();
            }
        };
        WOW.prototype.customStyle = function(box, hidden, duration, delay, iteration) {
            if (hidden) {
                this.cacheAnimationName(box);
            }
            box.style.visibility = hidden ? 'hidden' : 'visible';
            if (duration) {
                this.vendorSet(box.style, {
                    animationDuration: duration
                });
            }
            if (delay) {
                this.vendorSet(box.style, {
                    animationDelay: delay
                });
            }
            if (iteration) {
                this.vendorSet(box.style, {
                    animationIterationCount: iteration
                });
            }
            this.vendorSet(box.style, {
                animationName: hidden ? 'none' : this.cachedAnimationName(box)
            });
            return box;
        };
        WOW.prototype.vendors = ["moz", "webkit"];
        WOW.prototype.vendorSet = function(elem, properties) {
            var name, results, value, vendor;
            results = [];
            for (name in properties) {
                value = properties[name];
                elem["" + name] = value;
                results.push((function() {
                    var j, len, ref, results1;
                    ref = this.vendors;
                    results1 = [];
                    for (j = 0, len = ref.length; j < len; j++) {
                        vendor = ref[j];
                        results1.push(elem["" + vendor + (name.charAt(0).toUpperCase()) + (name.substr(1))] = value);
                    }
                    return results1;
                }).call(this));
            }
            return results;
        };
        WOW.prototype.vendorCSS = function(elem, property) {
            var j, len, ref, result, style, vendor;
            style = getComputedStyle(elem);
            result = style.getPropertyCSSValue(property);
            ref = this.vendors;
            for (j = 0, len = ref.length; j < len; j++) {
                vendor = ref[j];
                result = result || style.getPropertyCSSValue("-" + vendor + "-" + property);
            }
            return result;
        };
        WOW.prototype.animationName = function(box) {
            var animationName;
            try {
                animationName = this.vendorCSS(box, 'animation-name').cssText;
            } catch (_error) {
                animationName = getComputedStyle(box).getPropertyValue('animation-name');
            }
            if (animationName === 'none') {
                return '';
            } else {
                return animationName;
            }
        };
        WOW.prototype.cacheAnimationName = function(box) {
            return this.animationNameCache.set(box, this.animationName(box));
        };
        WOW.prototype.cachedAnimationName = function(box) {
            return this.animationNameCache.get(box);
        };
        WOW.prototype.scrollHandler = function() {
            return this.scrolled = true;
        };
        WOW.prototype.scrollCallback = function() {
            var box;
            if (this.scrolled) {
                this.scrolled = false;
                this.boxes = (function() {
                    var j, len, ref, results;
                    ref = this.boxes;
                    results = [];
                    for (j = 0, len = ref.length; j < len; j++) {
                        box = ref[j];
                        if (!(box)) {
                            continue;
                        }
                        if (this.isVisible(box)) {
                            this.show(box);
                            continue;
                        }
                        results.push(box);
                    }
                    return results;
                }).call(this);
                if (!(this.boxes.length || this.config.live)) {
                    return this.stop();
                }
            }
        };
        WOW.prototype.offsetTop = function(element) {
            var top;
            while (element.offsetTop === void 0) {
                element = element.parentNode;
            }
            top = element.offsetTop;
            while (element = element.offsetParent) {
                top += element.offsetTop;
            }
            return top;
        };
        WOW.prototype.isVisible = function(box) {
            var bottom, offset, top, viewBottom, viewTop;
            offset = box.getAttribute('data-wow-offset') || this.config.offset;
            viewTop = window.pageYOffset;
            viewBottom = viewTop + Math.min(this.element.clientHeight, this.util().innerHeight()) - offset;
            top = this.offsetTop(box);
            bottom = top + box.clientHeight;
            return top <= viewBottom && bottom >= viewTop;
        };
        WOW.prototype.util = function() {
            return this._util != null ? this._util : this._util = new Util();
        };
        WOW.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent);
        };
        return WOW;
    })();
}).call(this);

(function($) {

    $.fn.videoPlayer = function(options) { // videoPlayer est le nom de notre plugin

        var settings = {
            playerWidth: '0.95', // Par d�faut 95 %
            videoClass: 'video'  // Classe CSS de la vid�o
        }

// Fusionne les options pour qu'elles soient prises en compte par le plugin
        if (options) {
            $.extend(settings, options);
        }

// Nous utilisons .each() pour permettre le chainage
        return this.each(function() {

            $(this)[0].addEventListener('loadedmetadata', function() {

// Variables de base
                var $this = $(this);
                var $settings = settings;
                // Entourer la balise <video> d'une balise <div> ayant la classe CSS pr�cis�e en option
                $this.wrap('<div class="' + $settings.videoClass + '"></div>');
                // S�lectionner la div contenant la vid�o pour faciliter son utilisation
                var $that = $this.parent('.' + $settings.videoClass);
                // Quelques autres variables diverses pour connaitre l'�tat du lecteur
                var $mclicking = false,
                        $vclicking = false,
                        $vidhover = false,
                        $volhover = false,
                        $playing = false,
                        $drop = false,
                        $begin = false,
                        $draggingProgess = false,
                        $storevol,
                        x = 0,
                        y = 0,
                        vtime = 0,
                        updProgWidth = 0,
                        volume = 0;
// Structure du lecteur
                {

                    $('<div class="player">'
                            + '<div class="play-pause play">'
                            + '<span class="play-button" title="play">&#9658;</span>'
                            + '<div class="pause-button" title="pause">'
                            + '<span> </span>'
                            + '<span> </span>'
                            + '</div>'
                            + '</div>'
                            + '<div class="progress">'
                            + '<div class="time">'
                            + '<span class="ctime">00:00</span>'
                            + '<span class="stime"> / </span>'
                            + '<span class="ttime">00:00</span>'
                            + '</div>'
                            + '<div class="progress-bar">'
                            + '<div class="button-holder">'
                            + '<div class="progress-button"> </div>'
                            + '</div>'
                            + '</div>'
                            + '</div>'
                            + '<div class="volume">'
                            + '<div class="volume-holder">'
                            + '<div class="volume-bar-holder">'
                            + '<div class="volume-bar">'
                            + '<div class="volume-button-holder">'
                            + '<div class="volume-button"> </div>'
                            + '</div>'
                            + '</div>'
                            + '</div>'
                            + '</div>'
                            + '<div class="volume-icon v-change-0">'
                            + '<span> </span>'
                            + '</div>'
                            + '</div>'
                            + '<div class="fullscreen" title="plein ecran"> '
                            + '<a href="#"></a>'
                            + '</div>'
                            + '</div>'
                            + '<div class="video_cover"><h1 style="top: 30%;">ZS<sub>Video<sub><sup>Player</sup></h1></div>'
                            + '<div class="lecteur_name"><a href="http://zoneplus.hol.es">ZS<sub>Video<sub><sup>Player</sup></a></div>').appendTo($that);
                }


// Ajustement de la largeur de la vid�o
                $videoWidth = $this.width();
                $that.width($videoWidth + 'px');
// Ajustement de la largeur du lecteur en fonction des options
                $that.find('.player').css({'width': ($settings.playerWidth * 100) + '%', 'left': ((100 - $settings.playerWidth * 100) / 2) + '%'});
// Informations sur la vid�o
                var $spc = $(this)[0], // Balise <video> en cours
                        $duration = $spc.duration, // Dur�e de la vid�o
                        $volume = $spc.volume, // Volume de la vid�o
                        currentTime;
// Largeur de la barre de progression
                var progWidth = $that.find('.progress').width();
                var bufferLength = function() {

                    // Les parties de la vid�o en tampon
                    var buffered = $spc.buffered;
                    // R�initialiser les zones en tampon � chaque appel de la fonction
                    $that.find('[class^=buffered]').remove();
                    // S'il existe un tampon
                    if (buffered.length > 0) {

                        // On affecte sa taille � i
                        var i = buffered.length;
                        while (i--) {
                            // D�but et fin du tampon
                            $maxBuffer = buffered.end(i);
                            $minBuffer = buffered.start(i);
                            // Le d�calage et la largeur de la partie en tampon
                            var bufferOffset = ($minBuffer / $duration) * 100;
                            var bufferWidth = (($maxBuffer - $minBuffer) / $duration) * 100;
                            // Ins�rer la zone en tampon dans le lecteur
                            $('<div class="buffered"></div>').css({"left": bufferOffset + '%', 'width': bufferWidth + '%'}).appendTo($that.find('.progress'));
                        }
                    }
                }

// Lancer la fonction de gestion du tampon
                bufferLength();
// La fonction de gestion du temps, met � jour le compteur
                var timeUpdate = function($ignore) {

                    // Le temps actuel de la vid�o, bas� sur la barre de progression
                    var time = Math.round(($('.progress-bar').width() / progWidth) * $duration);
                    // Le temps "r�el" de la vid�o
                    var curTime = $spc.currentTime;
                    // Les secondes sont initialis�es � 0 par d�faut, les minutes correspondent � la dur�e divis�e par 60
                    // tminutes et tseconds sont les minutes et secondes totales
                    var seconds = 0,
                            minutes = Math.floor(time / 60),
                            tminutes = Math.round($duration / 60),
                            tseconds = Math.round(($duration) - (tminutes * 60));
                    // Si le temps existe (enfin, la dur�e de la vid�o !)
                    if (time) {
                        // Les secondes valent la dur�e moins les minutes
                        seconds = Math.round(time) - (60 * minutes);
                        // Si nous avons plus de 59 secondes
                        if (seconds > 59) {
                            // On augmente les minutes et on soustrait les secondes en trop
                            seconds = Math.round(time) - (60 * minutes);
                            if (seconds == 60) {
                                minutes = Math.round(time / 60);
                                seconds = 0;
                            }
                        }

                    }

                    // Mise � jour de la barre de progression
                    updProgWidth = (curTime / $duration) * progWidth

                    // Ajout des z�ros initiaux pour les valeurs inf�rieures � 10
                    if (seconds < 10) {
                        seconds = '0' + seconds;
                    }
                    if (tseconds < 10) {
                        tseconds = '0' + tseconds;
                    }

                    // Une variable que nous verrons plus tard
                    if ($ignore != true) {
                        $that.find('.progress-bar').css({'width': updProgWidth + 'px'});
                        $that.find('.progress-button').css({'left': (updProgWidth - $that.find('.progress-button').width()) + 'px'});
                    }

                    // Ajustement des dur�es
                    $that.find('.ctime').html(minutes + ':' + seconds)
                    $that.find('.ttime').html(tminutes + ':' + tseconds);
                    // En mode lecture, mise � jour des valeurs du tampon
                    if ($spc.currentTime > 0 && $spc.paused == false && $spc.ended == false) {
                        bufferLength();
                    }

                }

// Lancer la fonction de temps au d�marrage puis � chaque �v�nement li�
                timeUpdate();
                $spc.addEventListener('timeupdate', timeUpdate);
// Lorsque l'utilisateur clique sur lecture, g�n�rer un �v�nement clic
                $that.find('.play-pause').bind('click', function() {

                    $that.find('.video_cover').css({'display': 'none'});
                    $that.find('.lecteur_name').animate({opacity: '0.6'}, 600);
                    // Affectation d'une variable de lecture
                    if ($spc.currentTime > 0 && $spc.paused == false && $spc.ended == false) {
                        $playing = false;
                    } else {
                        $playing = true;
                    }

                    // Modifier les classes CSS pour afficher le bouton lecture ou pause
                    if ($playing == false) {
                        $spc.pause();
                        $(this).addClass('play').removeClass('pause');
                        bufferLength();
                    } else {
                        $begin = true;
                        $spc.play();
                        $(this).addClass('pause').removeClass('play');
                    }

                });
// Affecter un �v�nement sur la barre de progression pour que l'utilisateur puisse choisir un point pr�cis de la vid�o
                $that.find('.progress').bind('mousedown', function(e) {

                    // Lorsque l'on clique sur la barre
                    $mclicking = true;
                    // Si la vid�o est en cours de lecture, on met en pause pendant le changement de timestamp
                    if ($playing == true) {
                        $spc.pause();
                    }

                    // Position x de la souris lors du clic
                    x = e.pageX - $that.find('.progress').offset().left;
                    // Mise � jour du temps actuel
                    currentTime = (x / progWidth) * $duration;
                    $spc.currentTime = currentTime;
                });
// Si l'on clique sur le volume, d�clencher un �v�nement de changement de volume
                $that.find('.volume-bar-holder').bind('mousedown', function(e) {

                    // On a cliqu� sur le volume
                    $vclicking = true;
                    // Position y de la souris sur le slider
                    y = $that.find('.volume-bar-holder').height() - (e.pageY - $that.find('.volume-bar-holder').offset().top);
                    // On annule (return false) si le clic se fait en dehors de la zone autoris�e
                    if (y < 0 || y > $(this).height()) {
                        $vclicking = false;
                        return false;
                    }

                    // Ajustement des CSS pour refl�ter les modifications
                    $that.find('.volume-bar').css({'height': y + 'px'});
                    $that.find('.volume-button').css({'top': (y - ($that.find('.volume-button').height() / 2)) + 'px'});
                    // Mise � jour de quelques variables
                    $spc.volume = $that.find('.volume-bar').height() / $(this).height();
                    $storevol = $that.find('.volume-bar').height() / $(this).height();
                    $volume = $that.find('.volume-bar').height() / $(this).height();
                    // Animation de l'ic�ne de volume
                    volanim();
                });
// Gestion de l'animation de l'ic�ne de volume
                var volanim = function() {

                    // Ajuster les classes CSS en fonction de la valeur du volume
                    for (var i = 0; i < 1; i += 0.1) {

                        var fi = parseInt(Math.floor(i * 10)) / 10;
                        var volid = (fi * 10) + 1;
                        if ($volume == 1) {
                            if ($volhover == true) {
                                $that.find('.volume-icon').removeClass().addClass('volume-icon volume-icon-hover v-change-11');
                            } else {
                                $that.find('.volume-icon').removeClass().addClass('volume-icon v-change-11');
                            }
                        }
                        else if ($volume == 0) {
                            if ($volhover == true) {
                                $that.find('.volume-icon').removeClass().addClass('volume-icon volume-icon-hover v-change-1');
                            } else {
                                $that.find('.volume-icon').removeClass().addClass('volume-icon v-change-1');
                            }
                        }
                        else if ($volume > (fi - 0.1) && volume < fi && !$that.find('.volume-icon').hasClass('v-change-' + volid)) {
                            if ($volhover == true) {
                                $that.find('.volume-icon').removeClass().addClass('volume-icon volume-icon-hover v-change-' + volid);
                            } else {
                                $that.find('.volume-icon').removeClass().addClass('volume-icon v-change-' + volid);
                            }
                        }

                    }
                }
// Lancer l'animation
                volanim();
// Gestion du survol du bouton de volume
                $that.find('.volume').hover(function() {
                    $volhover = true;
                }, function() {
                    $volhover = false;
                });
// Pour des raisons d'ergonomie, nous affectons l'�v�nement au document entier car nous consid�rons que l'utilisateur peut se d�placer en dehors de la vid�o
// lors du d�placement des curseurs de progression et de volume
                $('body, html').bind('mousemove', function(e) {

                    // Masquer le lecteur si la lecture est en cours et que la souris quitte la vid�o
                    if ($begin == true) {
                        $that.hover(function() {
                            $that.find('.player').stop(true, false).animate({'opacity': '1'}, 0.5);
                        }, function() {
                            $that.find('.player').stop(true, false).animate({'opacity': '0'}, 0.5);
                        });
                    }

                    // Contr�le de la barre de progression
                    if ($mclicking == true) {

                        // D�placement de la souris
                        $draggingProgress = true;
                        // La valeur � appliquer aux CSS (les changements se feront dans les conditions)
                        var progMove = 0;
                        // Largeur du bouton de progression (le bouton au bout de la barre)
                        var buttonWidth = $that.find('.progress-button').width();
                        // La position de la souris d�termine la valeur de x
                        x = e.pageX - $that.find('.progress').offset().left;
                        // Si la lecture est en cours
                        if ($playing == true) {
                            // et que le temps actuel est inf�rieur � la dur�e
                            if (currentTime < $duration) {
                                // alors le bouton lecture/pause doit �tre sur pause
                                $that.find('.play-pause').addClass('pause').removeClass('play');
                            }
                        }


                        if (x < 0) { // Si x est inf�rieur � z�ro, la barre de progression reste � z�ro
                            progMove = 0;
                            $spc.currentTime = 0;
                        }
                        else if (x > progWidth) { // Si x est sup�rieur � la largeur de la barre, alors progMove vaut progWidth
                            $spc.currentTime = $duration;
                            progMove = progWidth;
                        }
                        else { // Sinon, progMove vaut x
                            progMove = x;
                            currentTime = (x / progWidth) * $duration;
                            $spc.currentTime = currentTime;
                        }

                        // Changement de CSS en fonction des conditions pr�c�dentes
                        $that.find('.progress-bar').css({'width': $progMove + 'px'});
                        $that.find('.progress-button').css({'left': ($progMove - buttonWidth) + 'px'});
                    }

                    // Contr�le du volume
                    if ($vclicking == true) {

                        // Position de la souris sur le slider
                        y = $that.find('.volume-bar-holder').height() - (e.pageY - $that.find('.volume-bar-holder').offset().top);
                        // Position � affecter au slider
                        var volMove = 0;
                        // Si la bo�te contenant le contr�le du volume est masqu�e, on ne fait rien
                        if ($that.find('.volume-holder').css('display') == 'none') {
                            $vclicking = false;
                            return false;
                        }

                        // Ajout de la classe correspondant au survol
                        if (!$that.find('.volume-icon').hasClass('volume-icon-hover')) {
                            $that.find('.volume-icon').addClass('volume-icon-hover');
                        }

                        // Si y est inf�rieur � z�ro, alors volMove vaut 0
                        if (y < 0 || y == 0) {

                            $volume = 0;
                            volMove = 0;
                            $that.find('.volume-icon').removeClass().addClass('volume-icon volume-icon-hover v-change-11');
                            // Si y est sup�rieur � la hauteur, alors volMove vaut la hauteur maximale
                        } else if (y > $(this).find('.volume-bar-holder').height() || (y / $that.find('.volume-bar-holder').height()) == 1) {

                            $volume = 1;
                            volMove = $that.find('.volume-bar-holder').height();
                            $that.find('.volume-icon').removeClass().addClass('volume-icon volume-icon-hover v-change-1');
                        } else { // Sinon, volMove vaut y

                            $volume = $that.find('.volume-bar').height() / $that.find('.volume-bar-holder').height();
                            volMove = y;
                        }

                        // Changement de CSS en fonction des conditions pr�c�dentes
                        $that.find('.volume-bar').css({'height': volMove + 'px'});
                        $that.find('.volume-button').css({'top': (volMove + $that.find('.volume-button').height()) + 'px'});
                        // Lancer l'animation
                        volanim();
                        // Change et stocke le volume
                        // La valeur stock�e correspond � la valeur choisie par l'utilisateur
                        // s'il veut couper le son, alors il retrouvera la derni�re valeur s'il le remet
                        $spc.volume = $volume;
                        $storevol = $volume;
                    }

                    // Lors du survol de la barre de volume, faire apparaitre/disparaitre et modifier la classe CSS

                    if ($volhover == false) {

                        $that.find('.volume-holder').stop(true, false).fadeOut(100);
                        $that.find('.volume-icon').removeClass('volume-icon-hover');
                    }

                    else {
                        $that.find('.volume-icon').addClass('volume-icon-hover');
                        $that.find('.volume-holder').fadeIn(100);
                    }


                });
// � la fin de la lecture, le bouton lecture devient un bouton pause
                $spc.addEventListener('ended', function() {

                    $playing = false;
                    // S'il n'y a pas de d�placement du curseur
                    if ($draggingProgress == false) {
                        $that.find('.play-pause').addClass('play').removeClass('pause');
                        $that.find('.video_cover').css({'display': 'block'});
                        $that.find('.lecteur_name').animate({opacity: '0'}, 600);
                    }

                });
// Si l'utilisateur clique sur l'ic�ne de volume, on coupe le son et on stocke la valeur du volume
// lorsque l'on r�active le son, on lui affecte le volume stock�
                $that.find('.volume-icon').bind('mousedown', function() {

                    $volume = $spc.volume; // Mise � jour du volume

                    // Si besoin, on initialise la m�morisation du volume
                    if (typeof $storevol == 'undefined') {
                        $storevol = $spc.volume;
                    }

                    // Si le volume est sup�rieur � z�ro
                    if ($volume > 0) {
                        // alors il faut couper le son, le volume passe alors � z�ro
                        $spc.volume = 0;
                        $volume = 0;
                        $that.find('.volume-bar').css({'height': '0'});
                        volanim();
                    }
                    else {
                        // sinon, on veut r�activer le son, on affecte au volume la valeur stock�e
                        $spc.volume = $storevol;
                        $volume = $storevol;
                        $that.find('.volume-bar').css({'height': ($storevol * 100) + '%'});
                        volanim();
                    }


                });
                $('body, html').bind('mouseup', function(e) {

                    $mclicking = false;
                    $vclicking = false;
                    $draggingProgress = false;
                    if ($playing == true) {
                        $spc.play();
                    }

                    bufferLength();
                });
// V�rifie le support du mode plein �cran. Si ce mode n'est pas support�, le bouton n'est pas affich�
                if (!$spc.requestFullscreen && !$spc.mozRequestFullScreen && !$spc.webkitRequestFullScreen) {
                    $('.fullscreen').hide();
                }

// On appelle le mode plein �cran en pr�voyant les pr�fixes vendeurs
                $('.fullscreen').click(function() {

                    if ($spc.requestFullscreen) {
                        $spc.requestFullscreen();
                    }

                    else if ($spc.mozRequestFullScreen) {
                        $spc.mozRequestFullScreen();
                    }

                    else if ($spc.webkitRequestFullScreen) {
                        $spc.webkitRequestFullScreen();
                    }

                });
            });
        });
    }

})(jQuery);

(function($)
{
    $.fn.hoverFade = function(options)
    {
        var defauts =
                {
                    "vitesseFadeOut": "300",
                    "vitesseFadeIn": "300"
                };
        var parametres = $.extend(defauts, options);
        return this.each(function()
        {
            $(this).mouseover(function()
            {
                $(this).fadeOut(parametres.vitesseFadeOut, function()
                {
                    $(this).fadeIn(parametres.vitesseFadeIn);
                });
            });
        });
    };
    $.fn.ouvrirElement = function(options)
    {
        var defauts =
                {
                    "vitesse": "300",
                    "elementToOpen": ".barre_menu"

                };
        var parametres = $.extend(defauts, options);
        return this.each(function() {
            $(this).click(function() {
                $(parametres.elementToOpen).slideToggle(parametres.vitesse);
            });
        });
    };
    $.fn.derouleBoutton = function(options)
    {
        var defauts =
                {
                    "vitesse": "300",
                    "elementToOpen": ".groupe_element"

                };
        var parametres = $.extend(defauts, options);
        return this.each(function() {
            $(this).click(function() {
                $(this).next(parametres.elementToOpen).slideToggle(parametres.vitesse);
            });
        });
    };
    $.fn.derouleMenu = function(options)
    {
        var defauts =
                {
                    "vitesse": "300",
                    "elementToOpen": ".barre_menu"

                };
        var parametres = $.extend(defauts, options);
        return this.each(function() {
            $(this).click(function() {
                $(this).children(parametres.elementToOpen).slideToggle(parametres.vitesse);
            });
        });
    };
    $.fn.closeObject = function(options)
    {
        var defauts =
                {
                    "vitesseFadeOut": "300"
                };
        var parametres = $.extend(defauts, options);
        return this.each(function() {
            $(this).click(function() {
                $(this).parent().fadeOut(parametres.vitesseFadeOut);
            });
        });
    };
    $.fn.autoModal = function(options)
    {
        var defauts =
                {
                    "vitesseFadeIn": "300"
                };
        var parametres = $.extend(defauts, options);
        return this.each(function() {
            //$(this).children('.modale_contenaire').before('<span class="fermer_modale">&times;</span>');
            $(this).before('<div class="modale_back"></div>');
            $(this).prev('.modale_back').fadeIn(parametres.vitesseFadeIn);
            $(this).prev('.modale_back').prev().hide();
            $(this).fadeIn(parametres.vitesseFadeIn);
            $(document).keypress(function(event) {
                if (event.keyCode === 17) {
                    $('.zs_modale').fadeOut(parametres.vitesseFadeOut);
                    $('.modale_alert').fadeOut(parametres.vitesseFadeOut);
                    $(".modale").fadeOut(parametres.vitesseFadeOut);
                    $(".modale_back").fadeOut(parametres.vitesseFadeOut);
                }
            });
            $(".modale_back").click(function() {
                $(this).fadeOut(parametres.vitesseFadeOut)
                $(this).next(".show_modale").fadeOut(parametres.vitesseFadeOut);
            });
        });
    };
    $.fn.fenetreModal = function(options)
    {
        var defauts =
                {
                    "vitesseFadeIn": "300",
                    "vitesseFadeOut": "300"
                };
        var parametres = $.extend(defauts, options);
        return this.each(function() {
            $(this).children('.modale_contenaire').before('<span class="fermer_modale">&times;</span>');
            $(this).before('<div class="modale"></div>');
            $('[data-modal]').click(function(e) {
                e.preventDefault();
                $('#' + $(this).data('target')).fadeIn(parametres.vitesseFadeIn);
                $('#' + $(this).data('target')).prev(".modale").fadeIn(parametres.vitesseFadeIn);
            });
            $(".fermer_modale").click(function(e) {
                e.preventDefault();
                $(".modale").fadeOut(parametres.vitesseFadeOut);
                $(".modale_back").fadeOut(parametres.vitesseFadeOut);
            });
            $(".modale").click(function() {
                $(this).fadeOut(parametres.vitesseFadeOut);
                $(this).next('.zs_modale').fadeOut(parametres.vitesseFadeOut);
            });
            $(".modale_back").click(function() {
                $(this).fadeOut(parametres.vitesseFadeOut);
                $(".zs_modale").fadeOut(parametres.vitesseFadeOut);
            });
            $(".fermer_modale").click(function() {
                $(this).parent().fadeOut(parametres.vitesseFadeOut);
                $(".modale").fadeOut(parametres.vitesseFadeOut);
                $(".modale_back").fadeOut(parametres.vitesseFadeOut);
            });
            $(".modale").click(function() {
                $(this).fadeOut(parametres.vitesseFadeOut);
                $(this).$(".modale_alert").fadeOut(parametres.vitesseFadeOut);
                $(this).next("zs_modale").fadeOut(parametres.vitesseFadeOut);
            });
            $('[data-alert]').on('click', function(e) {
                e.preventDefault();
                $('#' + $(this).data('target')).fadeIn(parametres.vitesseFadeIn);
                $(".modale").fadeIn(parametres.vitesseFadeIn);
            });
            $(document).keypress(function(event) {
                if (event.keyCode === 17) {
                    $('.zs_modale').fadeOut(parametres.vitesseFadeOut);
                    $('.modale_alert').fadeOut(parametres.vitesseFadeOut);
                    $(".modale").fadeOut(parametres.vitesseFadeOut);
                    $(".modale_back").fadeOut(parametres.vitesseFadeOut);
                }
            });
        });
    };
    $.fn.accordeonMenu = function(options)
    {
        var defauts =
                {
                    "vitesse": "300",
                    "element": ".menu_accordeon"
                };
        var parametres = $.extend(defauts, options);
        return this.each(function() {
            $(this).on('click', function(e) {
                e.preventDefault();
                $(this).parent().children(parametres.element).slideUp(parametres.vitesse);
                $('#' + $(this).data('target')).slideDown(parametres.vitesse);
            });
        });
    };
    $.fn.onglets = function(options)
    {
        var defauts =
                {
                    "vitesse": "300",
                    "fontWeight": "bolder",
                    "normatFont": "normal",
                    "elementChild": ".corps-onglet"
                };
        var parametres = $.extend(defauts, options);
        return this.each(function() {
            $(this).on('click', function(e) {
                e.preventDefault();
                $(this).parent().parent().parent().children(parametres.elementChild).hide();
                $('#' + $(this).data('target')).fadeIn(parametres.vitesse);
            });
            $(this).click(function(event) {
                event.preventDefault();
                $(this).parent().css({'font-weight': parametres.fontWeight});
                $(this).parent().addClass('actif');
                $(this).parent().prevUntil().removeClass('actif');
                $(this).parent().nextUntil().removeClass('actif');
                $(this).parent().prevUntil().css({'font-weight': parametres.normatFont});
                $(this).parent().nextUntil().css({'font-weight': parametres.normatFont});
            });
        });
    };
    $.fn.progressBar = function(options)
    {
        var defauts =
                {
                    "vitesse": "300",
                    "div": '<span class="progress"></span>',
                    "childern": ".progress"
                };
        var data = $.extend(defauts, options);
        return this.each(function() {
            var $a = $(this).find('div').attr('data-value');
            $(this).append(data.div);
            $(this).children(data.children).text($a + '%');
            $('#' + $(this).data('target')).animate({width: $a + '%'}, data.vitesse);
        });
    };
    $.fn.navbarAffix = function(options)
    {
        var $top = $('[data-affix]').attr('data-position');
        if ($top == 0) {
            $top = 200;
        }
        var defauts =
                {
                    "vitesse": "300",
                    "height": $top + 'px',
                    "position": $top,
                    "effet": "fixed"
                };
        var parametres = $.extend(defauts, options);
        return this.each(function() {
            $('#' + $(this).data('target')).css({'height': parametres.height}, 500);
            setInterval(function() {
                var posScroll = $(document).scrollTop();
                if (posScroll >= $top) {
                    $(this).addClass(parametres.effet);
                } else {
                    $(this).removeClass(parametres.effet);
                }
            }, 10);
        });
    };
    $.fn.navBar = function(options)
    {
        var defauts =
                {
                    "vitesse": "300",
                    "position": "100",
                    "effet": "fixed"
                };
        var parametres = $.extend(defauts, options);
        return this.each(function() {
            var posScroll = $(document).scrollTop();
            if (posScroll >= parametres.position) {
                $(this).addClass(parametres.effet).fadeIn(parametres.vitesse);
                $(this).addClass(parametres.effet).fadeIn(parametres.vitesse);
                $('.barre_cover').fadeIn(parametres.vitesse);
            } else {
                $(this).removeClass(parametres.effet);
                $(this).removeClass(parametres.effet);
                $('.barre_cover').fadeOut(parametres.vitesse);
            }
        });
    };
    $.fn.zoneGauche = function(options)
    {
        var defauts =
                {
                    "vitesse": "300",
                    "btOuvrir": ".bt_zone-gauche",
                    "zsGauche": ".zone_gauche",
                    "width": "310px"
                };
        var datas = $.extend(defauts, options);
        return this.each(function() {
            $('.bt_zone-gauche').before('<button class="zs_boutton bt_rond bt_effet-g bt_infos bt_close-zone">'
                    + '<i class="icone icon_close" >'
                    + '</i>'
                    + '</button>');
            $(this).before('<div class="zs_gauche-cover">'
                    + '</div>');
            $(datas.btOuvrir).on('click', function(e) {
                e.preventDefault();
                $(datas.zsGauche).animate({marginLeft: datas.width}, datas.vitesse);
                $('.bt_close-zone').fadeIn(datas.vitesse);
                $(this).hide();
                $('.zone_droite').addClass('zone_droite-o');
                $('.zs_gauche-cover').fadeIn(datas.vitesse);
            });
            $('.bt_close-zone').on('click', function(e) {
                e.preventDefault();
                $(datas.zsGauche).animate({marginLeft: '-' + datas.width}, datas.vitesse);
                $(this).hide();
                $('.bt_zone-gauche').fadeIn(datas.vitesse);
                $('.zs_gauche-cover').fadeOut(datas.vitesse);
                $('.zone_droite').removeClass('zone_droite-o');
            });
            $('.zs_gauche-cover').on('click', function(e) {
                e.preventDefault();
                $('.zone_gauche').animate({marginLeft: '-' + datas.width}, datas.vitesse);
                $('.bt_close-zone').hide();
                $('.bt_zone-gauche').fadeIn(datas.vitesse);
                $(this).fadeOut(datas.vitesse);
                $('.zone_droite').removeClass('zone_droite-o');
            });
            $(document).keypress(function(event) {
                if (event.keyCode === 17) {
                    $('.zone_gauche').animate({marginLeft: '-310px'}, datas.vitesse);
                    $('.bt_close-zone').hide(datas.vitesse);
                    $('.bt_zone-gauche').fadeIn(datas.vitesse);
                    $('.zs_gauche-cover').fadeOut(datas.vitesse);
                    $('.zone_droite').removeClass('zone_droite-o');
                }
            });
        });
    };
    $.fn.zsOpenClose = function(options)
    {
        var defauts =
                {
                    "vitesseClose": "9500",
                    "vitesseOpen": "slow",
                    "element": ""
                };
        var datas = $.extend(defauts, options);
        return this.each(function()
        {
            $(this).click(function(e) {
                e.preventDefault();
                $(this).parent().children(datas.element).fadeIn(datas.vitesseOpen, function()
                {
                    $(this).parent().children(datas.element).fadeOut(datas.vitesseClose);
                });
            });
        });
    };
    $.fn.zsFadeToggle = function(options)
    {
        var defauts =
                {
                    "vitesse": "300",
                    "elementToFade": " "
                };
        var parametres = $.extend(defauts, options);
        return this.each(function() {
            $(this).on('click', function(e) {
                e.preventDefault();
                $(this).parent().children(parametres.elementToFade).fadeToggle(parametres.vitesse);
            });
        });
    };
    $.fn.autoClignote = function(options)
    {
        var defauts =
                {
                    "vitesse": "1000",
                    "refeshTime": "10"
                };
        var datas = $.extend(defauts, options);
        return this.each(function() {
            $(this).fadeOut(datas.vitesseFadeOut);
        });
    };
    $.fn.zsScrollTop = function(options)
    {
        var defauts =
                {
                    "vitesse": "400",
                    "refeshTime": "10",
                    "position": "150",
                    "animation": "-=450px"
                };
        var datas = $.extend(defauts, options);
        return this.each(function() {
            var posScroll = $(document).scrollTop();
            if (posScroll >= datas.position) {
                $(this).fadeIn(datas.vitesse);
            } else {
                $(this).fadeOut(datas.vitesse);
            }
            $(this).click(function() {
                $('html, body').animate({
                    scrollTop: datas.animation}, datas.vitesse);
                return false;
            });
        });
    };
    $.fn.zsScrollBottom = function(options)
    {
        var defauts =
                {
                    "vitesse": "400",
                    "refeshTime": "10",
                    "animation": "+=450px"
                };
        var datas = $.extend(defauts, options);
        return this.each(function() {
            var posScroll = $(document).scrollTop();
            var winHeight = $(document).height();
            var a = winHeight - 300;
            if (posScroll < a) {
                $(this).fadeIn(datas.vitesse);
            } else {
                $(this).fadeOut(datas.vitesse);
            }
            $(this).click(function() {
                $('html, body').animate({
                    scrollTop: datas.animation}, datas.vitesse);
                return false;
            });
        });
    };
    
    $.fn.barChargement = function(options)
    {
        var defauts =
                {
                    "vitesse": "10000",
                    "width": "100"
                };
        var datas = $.extend(defauts, options);
        return this.each(function() {
             $(this).css({'width': '1%'});            
             $(this).animate({width: datas.width + '%'}, datas.vitesse);
        });
    };
    $.fn.zsAncre = function(options)
    {
        var defauts =
                {
                    "vitesse": "300",
                    "event": "click"
                };
        var data = $.extend(defauts, options);
        return this.each(function() {
            $(this).on(data.event, function() {
                var id = $(this).attr("href");
                $('html, body').animate({scrollTop: $(id).offset().top}, data.vitesse);
                return false;
            });
        });
    };
    $.fn.imageHover = function(options)
    {
        var defauts =
                {
                    //"vitesse": "300",
                    //"event": "click"
                };
        var data = $.extend(defauts, options);
        return this.each(function() {
            $(this).mouseover(function() {
                $(this).children('.image_fond').animate({opacity: '0.6'});
                $(this).children('.image_texte').animate({opacity: '1'});
            });
            $(this).mouseleave(function() {
                $(this).children('.image_fond').animate({opacity: '0'});
                $(this).children('.image_texte').animate({opacity: '0'});
            });
        });
    };
    $.fn.zsChat = function(options)
    {
        var defauts =
                {
                    "vitesse": "300",
                    "event": "click"
                };
        var data = $.extend(defauts, options);
        return this.each(function() {
            $('.zs_chat').before('<div class="shadow_chat">'
                    + '</div>');
            $('.boutton_chat').on(data.event, function() {
                $(this).parent().children('.mini_chat').animate({opacity: '1'}, data.vitesse);
                $(this).parent().prev('.shadow_chat').fadeIn(data.vitesse);
                $(this).parent().animate({marginRight: '150px', marginBottom: '210px'}, data.vitesse);
            });
            $('.shadow_chat').on(data.event, function() {
                $(this).next('.zs_chat').animate({marginRight: '-50px', marginBottom: '-40px'}, data.vitesse);
                $(this).next('.mini_chat').animate({opacity: '0.5'}, data.vitesse);
                $(this).fadeOut(data.vitesse);
                $(this).next('.zs_chat').children('.chat_content').fadeOut(data.vitesse);
            });
            $('[data-chat]').on(data.event, function() {
                $('#' + $(this).data('target')).children('.mini_chat').animate({opacity: '1'}, data.vitesse);
                $('#' + $(this).data('target')).prev('.shadow_chat').fadeIn(data.vitesse);
                $('#' + $(this).data('target')).animate({marginRight: '150px', marginBottom: '210px'}, data.vitesse);
            });
            $('[data-tools]').on(data.event, function() {
                $('#' + $(this).data('target')).fadeIn(data.vitesse);
            });
            $(document).keypress(function(event) {
                if (event.keyCode === 17) {
                    $('.shadow_chat').fadeOut(data.vitesse);
                    $('.chat_content').fadeOut(data.vitesse);
                    $('.zs_chat').animate({marginRight: '-30px', marginBottom: '-30px'}, data.vitesse);
                    $('.mini_chat').animate({opacity: '0.5'}, data.vitesse);
                }
            });
        });
    };

    $.fn.formCheck = function(options)
    {
        var defauts =
                {
                    "vitesse": "300",
                    "event": "click"
                };
        var data = $.extend(defauts, options);
        return this.each(function() {

            $('.zs_image').after('<div class="zs_alert" id="input_image_verify">'
                    + '<div class="alert_contenu fond_blanc hover scroll scroll_v">'
                    + 'Erreur veuillez choisir une image valide'
                    + '</div>'
                    + '</div>');
            $('.text').after('<div class="zs_alert" id="input_text_verify">'
                    + '<div class="alert_contenu fond_blanc hover scroll scroll_v">'
                    + 'Erreur veuillez entrer uniquement des entiers'
                    + '</div>'
                    + '</div>');
            $('.textNumero').after('<div class="zs_alert" id="input_textNumero_verify">'
                    + '<div class="alert_contenu fond_blanc hover scroll scroll_v">'
                    + 'Erreur entrer uniquement des entiers et chiffres'
                    + '</div>'
                    + '</div>');
            $('.email').after('<div class="zs_alert" id="input_email_verify">'
                    + '<div class="alert_contenu fond_blanc hover scroll scroll_v">'
                    + 'Erreur veuillez entrer une adresse valide'
                    + '</div>'
                    + '</div>');
            $('.password').after('<div class="zs_alert" id="input_password_verify">'
                    + '<div class="alert_contenu fond_blanc hover scroll scroll_v">'
                    + 'Erreur 6 caracteres aumoins (1 chiffres, 1 minuscule, 1 majuscule) requis'
                    + '</div>'
                    + '</div>');
            $('.zs_image').change(function() {

                var ext = ['png', 'jpeg', 'jpg', 'gif', 'bmp'];
                if ($.inArray($(this).val().split('.').pop().toLowerCase(), ext) === -1) {
                    $(this).parent().children('#input_image_verify').fadeIn();
                    $(this).parent().children('#preview').fadeOut();
                } else {
                    $(this).parent().children('#input_image_verify').fadeOut();
                    $(this).parent().children('#preview').fadeIn();
                    readURL(this);
                }
            });
            $('.email').keyup(function() {
                var val = this.value;
                var ext = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$");
                var vide = '';
                if (ext.test(val)) {
                    $(this).parent().children('#input_email_verify').fadeOut();
                } else if (vide === val) {
                    $(this).parent().children('#input_email_verify').fadeOut();
                } else {
                    $(this).parent().children('#input_email_verify').fadeIn();
                }
            });
            $('.textNumero').keyup(function() {
                var val = this.value;
                var ext = new RegExp("[A-Za-z]*\[0-9].{2,}");
                var vide = '';
                if (ext.test(val)) {
                    $(this).parent().children('#input_textNumero_verify').fadeOut();
                } else if (vide === val) {
                    $(this).parent().children('#input_textNumero_verify').fadeOut();
                } else {
                    $(this).parent().children('#input_textNumero_verify').fadeIn();
                }
            });
            $('.text').keyup(function() {
                var val = this.value;
                var ext = new RegExp("[A-Za-z].{2,}");
                var vide = '';
                if (ext.test(val)) {
                    $(this).parent().children('#input_text_verify').fadeOut();
                } else if (vide === val) {
                    $(this).parent().children('#input_text_verify').fadeOut();
                } else {
                    $(this).parent().children('#input_text_verify').fadeIn();
                }
            });
            $('.password').keyup(function() {
                var val = this.value;
                var ext = new RegExp("([A-Z][a-z])*\[0-9].{5,}");
                var vide = '';
                if (ext.test(val)) {
                    $(this).parent().children('#input_password_verify').fadeOut();
                } else if (vide === val) {
                    $(this).parent().children('#input_password_verify').fadeOut();
                } else {
                    $(this).parent().children('#input_password_verify').fadeIn();
                }
            });
        });
    };

    $.fn.effetZs = function(options)
    {
        var defauts =
                {
                    "vitesse": "300",
                    "type": ""
                };
        var data = $.extend(defauts, options);
        return this.each(function() {
            $(this).append('<div class="' + data.element + '"></div>');
        });
    };

    $.fn.clickToOpen = function(options)
    {
        var defauts =
                {
                    "vitesse": "300",
                    "elementToOpen": "q"

                };
        var parametres = $.extend(defauts, options);
        return this.each(function() {
            $(this).click(function() {
                $(parametres.elementToOpen).fadeToggle(parametres.vitesse);
            });
        });
    };

})(jQuery);


$(document).ready(function() {
    $('.centrer_texte').css({'text-align': 'center'});
    $('a').hoverFade();
    $('h1').hoverFade();
    $('.pt_menu').ouvrirElement({
        "vitesse": "fast",
        "elementToOpen": ".barre_menu"
    });
    $('.barre_navigation').navBar();
    $('.barre_navigation').navbarAffix();
    $('[data-progress]').progressBar();
    $('.show_modale').autoModal();
    $('.zs_modale').fenetreModal();
    $('[data-onglet]').onglets();
    $('.zone_gauche').zoneGauche();
    $(".alert_close").closeObject();
    $('.show_modale').autoModal();
    ///$('.modale_back').autoModal();
    $(".close_accord").closeObject();
    $(".bt_share").zsFadeToggle({
        "vitesse": "slow",
        "elementToFade": ".share_items"
    });
    $(".bt_alert_open").zsOpenClose({
        "vitesseClose": "9500",
        "vitesseOpen": "slow",
        "element": ".alert_mssg"
    });
    $('.bt_deroule').derouleBoutton({
        "vitesse": "fast",
        "elementToOpen": ".groupe_element"
    });
    $('.mnd_deroule').derouleMenu({
        "vitesse": "fast",
        "elementToOpen": ".groupe_element"
    });
    $('.clignote').autoClignote({
        "vitesse": "1000",
        "refeshTime": "10"
    });
    $('.to_bottom').zsScrollBottom({
        "vitesse": "400",
        "refeshTime": "10",
        "position": "150",
        "animation": "+=450px"
    });
    $('.to_top').zsScrollTop({
        "vitesse": "400",
        "refeshTime": "10",
        "position": "150",
        "animation": "0"
    });

//    setInterval(function() {
//        $('.ch_barre').barChargement({
//            "vitesse": "2500",
//            "width": "100"
//        });
//    }, 10000);

    $('[data-accordeon]').accordeonMenu();

    $('.cards_image').imageHover();
    $('.ancre').zsAncre({
        "vitesse": "300",
        "event": "click"
    });
    $('.zs_chat').zsChat({
        "vitesse": "300",
        "event": "click"
    });
});
                                 