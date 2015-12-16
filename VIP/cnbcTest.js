/* File BEGIN: http://fm.cnbc.com/applications/cnbc.com/staticcontent/scripts/libraries/Common/common_utils.1.js?t=1450133677 */
var CNBC_Common = {};
(function ($) {
    CNBC_Common.NewsDefaultView = 'regular';
    CNBC_Common.genericService = function (secure) {
        var settings = CNBC_Settings, url;
        if (secure == 'secure') {
            url = settings ? settings.baseurls.cnbc_base_secure + '/services/' : 'https://www.cnbc.com/services/';
        } else {
            url = settings ? settings.baseurls.cnbc_base + '/services/' : 'http://www.cnbc.com/services/';
        }
        return url;
    };
    CNBC_Common.gotoPage = function (url) {
        if (url != "") {
            setTimeout('window.location.href = "' + url + '"', 0);
        }
    };
    CNBC_Common.openWindow = function (url, windowName, options) {
        if (windowName == '') {
            windowName = "print";
        }
        ;
        var x = window.open(url, windowName, options);
        x.focus();
    };
    CNBC_Common.isNull = function (str) {
        if (typeof str == 'undefined' || str == '' || str == null) {
            return true;
        }
        ;
        return false;
    };
    CNBC_Common.isFunction = function (fn) {
        var checker = {};
        return fn && checker.toString.call(fn) == '[object Function]';
    };
    CNBC_Common.setCSS = function ($el, config) {
        for (style in config) {
            if (typeof style === 'string') {
                $el.css(style, config[style]);
            }
        }
    };
    CNBC_Common.watch = function (interval, condition, callback) {
        var watcher = function () {
            return window.setInterval(function () {
                if (condition()) {
                    callback();
                    clearInterval(watcher());
                }
            }, interval);
        }
        return watcher();
    };
    CNBC_Common.ConsoleLog = function (msg) {
        if (typeof(console) != 'undefined' && typeof console.log == 'function') {
            console.log(msg);
        }
        else if (typeof(window) != 'undefined' && typeof window.log == 'function') {
            window.log(msg);
        }
        else {
        }
    }
    CNBC_Common.validateStr = function (str, replace) {
        replace = replace || "--";
        if (typeof str === 'undefined' || str == '' || str === null) {
            return replace;
        }
        ;
        return str;
    };
    CNBC_Common.focus = function ($el, defaultText) {
        if (CNBC_Common.checkForDefault($el.val(), defaultText)) {
            $el.val('');
        }
    };
    CNBC_Common.blur = function ($el, defaultText, checkEmpty) {
        var val = $.trim($el.val());
        if (CNBC_Common.checkForDefault(val, defaultText, checkEmpty)) {
            $el.val(defaultText);
        }
    };
    CNBC_Common.checkForDefault = function (val, defaultText, checkEmpty) {
        var flag = (val == defaultText);
        if (checkEmpty && !flag) {
            flag = val == '';
        }
        ;
        return flag;
    };
    CNBC_Common.isArray = function (array) {
        return (array !== null && array instanceof Array);
    };
    CNBC_Common.formatDecimalZeros = function (num, digits) {
        var digits = digits || 2;
        var stringRepeat = function (str, num) {
            return new Array(isNaN(num) ? 1 : ++num).join(str);
        }
        var result = num;
        var n = String(num);
        if (n.lastIndexOf('.') > 0) {
            var lastDec = n.substr(n.lastIndexOf('.'));
            var decimals = lastDec.length - 1;
            if (decimals < digits) {
                var diff = digits - decimals;
                result = num + stringRepeat("0", diff);
            }
        }
        else {
            result = num + '.00';
        }
        return result;
    };
    CNBC_Common.includeString = function (str, array, tag) {
        var i, length = array.length;
        switch (tag) {
            case'any':
                for (i = 0; i < length; i++) {
                    if (str.indexOf(array[i]) != -1)return true;
                }
                return false;
            case'all':
                for (i = 0; i < length; i++) {
                    if (str.indexOf(array[i]) === -1)return false;
                }
                return true;
            case'none':
                for (i = 0; i < length; i++) {
                    if (str.indexOf(array[i]) != -1)return false;
                }
                return true;
            default:
                return false;
        }
    }
    CNBC_Common.getAttrs = function (elem) {
        var attr = elem.attributes || {}, hash = {};
        for (var i = 0, len = attr.length; i < len; i++) {
            hash[attr[i].nodeName] = attr[i].value;
        }
        return hash;
    }
})(jQuery);
var CNBC_Utils = {};
(function ($) {
    CNBC_Utils.loaderText = 'Loading ...';
    CNBC_Utils._fontSizeLabel = 'USERFONTSIZE';
    CNBC_Utils._domain = '.cnbc.com';
    CNBC_Utils._path = '/';
    CNBC_Utils.currUserAgent = navigator.userAgent.toLowerCase();
    CNBC_Utils.nonSupportedBrowsers = ['msie 8'];
    CNBC_Utils.proCookieName = 'ispro';
    CNBC_Utils.startTime = new Date().getTime();
    CNBC_Utils.isSupportedBrowser = function () {
        var matched = true;
        if (this.nonSupportedBrowsers && this.nonSupportedBrowsers.length) {
            for (var i in this.nonSupportedBrowsers) {
                if (this.currUserAgent.indexOf(this.nonSupportedBrowsers[i]) >= 0) {
                    matched = false;
                    break;
                }
            }
        }
        return matched;
    };
    CNBC_Utils.equalColumnHeight = function ($container) {
        var group = $container || $("section.cols2 > div.unit"), groupLength = group.length, tallest = 0, thisHeight = 0;
        for (i = 0; i < groupLength; ++i) {
            $group = $(group).eq(i);
            $group.height('auto');
            thisHeight = $group.height();
            if (thisHeight > tallest) {
                tallest = thisHeight;
            }
        }
        if (tallest) {
            for (i = 0; i < groupLength; ++i) {
                $group = $(group).eq(i);
                thisHeight = $group.height();
                if (thisHeight < tallest) {
                    $group.height(tallest);
                }
            }
        }
    }
    CNBC_Utils.pageControl = {};
    CNBC_Utils.initEvents = function () {
        $('table.data tbody tr').bind('mouseover', function () {
            CNBC_Utils.highlightRow($(this), true);
        }).bind('mouseout', function () {
            CNBC_Utils.highlightRow($(this));
        });
        CNBC_Utils.pageControl.initEvents();
    };
    CNBC_Utils.showLoader = function (el, text, loaderClass) {
        var $el;
        if (el) {
            $el = (typeof el === 'string') ? $('#' + el) : el;
            if ($el.find("div.loader").length == 0) {
                text = text || CNBC_Utils.loaderText;
                loaderClass = loaderClass || "";
                var div = $('<div class="loader ' + loaderClass + ' contain"><span class="loading">&nbsp;</span><span class="loadingTxt">' + text + '</span></div>');
                var pos = $el.position();
                div.css('top', pos.top + 'px').css('left', pos.left + 'px').css('width', $el.outerWidth() + 'px').css('height', $el.outerHeight() + 'px');
                $el.append(div);
                return div;
            }
        }
    };
    CNBC_Utils.hideLoader = function ($div, $container) {
        if ($div) {
            $div.remove();
        } else if ($container && $container.length == 1) {
            $('div.loader').remove();
        }
    };
    CNBC_Utils.isStorageAvailable = function () {
        if (CNBC_Utils.isStorage === undefined) {
            try {
                if ('Storage'in window && window['Storage'] !== null) {
                    CNBC_Utils.isStorage = true;
                } else {
                    CNBC_Utils.isStorage = false;
                }
            } catch (e) {
                CNBC_Utils.isStorage = false;
            }
        }
        return CNBC_Utils.isStorage;
    };
    CNBC_Utils.createLocalStorage = function (name, value) {
        if (CNBC_Utils.isStorage) {
            localStorage.setItem(name, value);
        }
    };
    CNBC_Utils.readLocalStorage = function (name) {
        var result = null;
        if (CNBC_Utils.isStorage) {
            result = localStorage.getItem(name);
        }
        return result;
    };
    CNBC_Utils.eraseLocalStorage = function (name) {
        if (CNBC_Utils.isStorage) {
            localStorage.removeItem(name);
        }
    };
    CNBC_Utils.createCookie = function (name, value, h, checkLocalStorage) {
        if (!checkLocalStorage || !CNBC_Utils.isStorageAvailable()) {
            var expires = "";
            if (!CNBC_Common.isNull(h)) {
                var date = new Date();
                date.setTime($.now() + (h * 60 * 60 * 1000));
                expires = "; expires=" + date.toGMTString();
            }
            ;
            document.cookie = name + "=" + value + expires + ";domain=" + this._domain + ";path=" + this._path;
        } else {
            CNBC_Utils.createLocalStorage(name, value);
        }
    };
    CNBC_Utils.readCookie = function (name, checkLocalStorage) {
        var result = null;
        if (!checkLocalStorage || !CNBC_Utils.isStorageAvailable()) {
            var nameEQ = name + "=";
            var result = CNBC_Utils.parseCookieValues(nameEQ, document.cookie.split(';'));
            if (result == null) {
                var unescaped = unescape(document.cookie);
                result = CNBC_Utils.parseCookieValues(nameEQ, unescaped.split(';'));
            }
            ;
        } else {
            result = CNBC_Utils.readLocalStorage(name);
        }
        return result;
    };
    CNBC_Utils.parseCookieValues = function (name, data) {
        for (var i = 0, len = data.length; i < len; i++) {
            var c = data[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1, c.length);
            }
            ;
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        ;
        return null;
    };
    CNBC_Utils.eraseCookie = function (name, p, d, checkLocalStorage) {
        if (!checkLocalStorage || !CNBC_Utils.isStorageAvailable()) {
            if (CNBC_Utils.readCookie(name)) {
                var params = name + "=;path=" + this._path + ";domain=" + this._domain + ";expires=Thu, 01-Jan-1970 00:00:01 GMT";
                document.cookie = params;
            }
        } else {
            CNBC_Utils.eraseLocalStorage(name);
        }
    };
    CNBC_Utils.deleteAllLoginCookies = function () {
        var allCNBCCookies = ["c_sna", "c_ipb_pass_hash", "c_ipb_session_id", "c_ipb_member_id", "snas", "c_ws", "SUBSCRIBERINFO3", "SUBSCRIBERINFO2", "SUBSCRIBERINFO", "CASTOKEN", "c_enc", CNBC_Utils.proCookieName];
        for (var i = 0, len = allCNBCCookies.length; i < len; i++) {
            var name = unescape(allCNBCCookies[i]);
            CNBC_Utils.eraseCookie(name, this._path, this._domain);
        }
        ;
        CNBC_Utils.deleteAllProCookies();
        window.location.reload();
    };
    CNBC_Utils.deleteAllProCookies = function () {
        var allCNBCCookies = [CNBC_Utils.proCookieName, "bedrockAccessToken", "bedrockVideoToken"];
        for (var i = 0, len = allCNBCCookies.length; i < len; i++) {
            var name = unescape(allCNBCCookies[i]);
            CNBC_Utils.eraseCookie(name, this._path, this._domain);
        }
        ;
    };
    CNBC_Utils.saveData = function (key, value, expirationTime, forceLocalStorage) {
        if (forceLocalStorage && CNBC_Utils.isStorageAvailable()) {
            if (expirationTime) {
                var date = new Date();
                var schedule = Math.round(date.setSeconds(date.getSeconds() + (expirationTime * 60 * 60)) / 1000);
                localStorage.setItem(key, JSON.stringify({data: value, expiration: schedule}));
            } else {
                sessionStorage.setItem(key, value);
            }
        } else {
            var expirationTime = expirationTime || 1;
            var expires = "";
            if (!CNBC_Common.isNull(expirationTime)) {
                var date = new Date();
                date.setTime($.now() + (expirationTime * 60 * 60 * 1000));
                expires = "; expires=" + date.toGMTString();
            }
            ;
            document.cookie = key + "=" + value + expires + ";domain=" + this._domain + ";path=" + this._path;
        }
    };
    CNBC_Utils.readData = function (key) {
        var data = null;
        if (CNBC_Utils.isStorageAvailable()) {
            dataStorage = JSON.parse(localStorage.getItem(key));
            if (dataStorage) {
                var date = new Date();
                var current = Math.round(+date / 1000);
                var storedTime = dataStorage.expiration;
                if (storedTime == undefined || storedTime == 'null') {
                    var storedTime = 0;
                }
                if (storedTime > current) {
                    data = dataStorage.data;
                }
            }
        }
        if (data == null && CNBC_Utils.isStorageAvailable()) {
            data = sessionStorage.getItem(key);
        }
        if (data == null) {
            var nameEQ = key + "=";
            var data = CNBC_Utils.parseCookieValues(nameEQ, document.cookie.split(';'));
            if (data == null) {
                var unescaped = unescape(document.cookie);
                data = CNBC_Utils.parseCookieValues(nameEQ, unescaped.split(';'));
            }
            ;
        }
        return data;
    };
    CNBC_Utils.deleteData = function (key) {
        var isSuccessful = false;
        if (CNBC_Utils.isStorageAvailable() && localStorage.getItem(key)) {
            localStorage.removeItem(key);
            isSuccessful = true;
        }
        if (CNBC_Utils.isStorageAvailable() && sessionStorage.getItem(key)) {
            sessionStorage.removeItem(key);
            isSuccessful = true;
        }
        if (CNBC_Utils.readData(key)) {
            var params = key + "=;path=" + this._path + ";domain=" + this._domain + ";expires=Thu, 01-Jan-1970 00:00:01 GMT";
            document.cookie = params;
            isSuccessful = true;
        }
        return isSuccessful;
    };
    CNBC_Utils.getRelativeTime = function (pubDate, calcTimeLimit) {
        var airDate = new Date(parseInt(pubDate));
        var diffInMinutes = Math.floor((Math.abs(new Date() - airDate) / 1000) / 60);
        var lastUpdatedString = '';
        var hourStr, minuteStr = 'Min', days, dayStr;
        if (diffInMinutes >= 2) {
            minuteStr = 'Mins'
        }
        if (diffInMinutes == 0) {
            lastUpdatedString = 'Just Now';
            return lastUpdatedString;
        }
        else {
            lastUpdatedString = diffInMinutes + ' ' + minuteStr + ' Ago';
        }
        var hours = Math.floor(diffInMinutes / 60);
        if (hours >= 1 && hours < 24) {
            hourStr = 'Hr';
            if (hours >= 2) {
                hourStr = 'Hrs';
            }
            lastUpdatedString = hours + ' ' + hourStr + ' Ago';
        }
        else if (hours >= 24 && hours < calcTimeLimit) {
            days = Math.floor(hours / 24);
            dayStr = 'Day';
            if (days >= 2) {
                dayStr = 'Days';
            }
            lastUpdatedString = days + ' ' + dayStr + ' Ago';
        }
        if (hours >= 24 || hours >= calcTimeLimit) {
            var month_short = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            lastUpdatedString = month_short[airDate.getMonth()] + ' ' + airDate.getDate() + ', ' + airDate.getFullYear();
        }
        return lastUpdatedString;
    };
    CNBC_Utils.initFontSizeEvents = function () {
        if ($('div.font-content').length > 0) {
            CNBC_Utils.setFontSize();
            $('a.icon-font').live('click', function () {
                CNBC_Utils.toggleFontSize($(this).attr('data-font'));
            });
        }
    };
    CNBC_Utils.toggleFontSize = function (dir, val) {
        var $text = $('div.font-content');
        var style = $text.attr('style');
        var font = style ? parseFloat(style.split(':')[1]) : val;
        var newFont = (val) ? val : (dir == '+') ? (font + 0.25) : (font - 0.25);
        if (newFont >= 0.75 && newFont <= 1.50) {
            $text.css('font-size', newFont + 'em');
            document.cookie = CNBC_Utils._fontSizeLabel + '=' + newFont;
        }
    };
    CNBC_Utils.setFontSize = function () {
        var font = CNBC_Utils.getFontSizeCookie() || 1;
        CNBC_Utils.toggleFontSize(null, font);
    };
    CNBC_Utils.getFontSizeCookie = function () {
        var search = CNBC_Utils._fontSizeLabel;
        var cookie = document.cookie;
        if (cookie.length > 0 && cookie.indexOf(search) != -1) {
            var crumb = cookie.split(';');
            for (var i = 0, len = crumb.length; i < len; ++i) {
                var key = crumb[i];
                if (key.match(search)) {
                    var font = key.split('=');
                    return parseFloat(font[1]);
                }
            }
        }
    };
    CNBC_Utils.toolTipShow = function (id, parentid, $container, info, adjustTop, adjustLeft) {
        $container.append('<div id="' + id + '"></div>');
        var $tooltipDiv = $('#' + id);
        var offset = $('#' + parentid).offset();
        $tooltipDiv.html(info);
        $tooltipDiv.offset({top: offset.top + adjustTop, left: offset.left + adjustLeft});
    };
    CNBC_Utils.toolTipHide = function (id) {
        $container = $('#' + id);
        if (!CNBC_Common.isNull($container)) {
            $container.remove();
        }
    };
    CNBC_Utils.highlightRow = function ($el, highlight) {
        var cName = 'hlight';
        $el.siblings('tr').removeClass(cName);
        if (highlight) {
            $el.addClass(cName);
        } else {
            $el.removeClass(cName);
        }
    };
    CNBC_Utils.pageControl.host_url = location.host;
    CNBC_Utils.pageControl.initEvents = function () {
        var parent = $("#article-tools");
        if (!CNBC_Common.isNull(parent)) {
            $("a.print", parent).bind("click", function () {
                CNBC_Utils.pageControl.print($(this).attr("data-nodeID"));
            });
            $("a.email", parent).bind("click", function () {
                CNBC_Utils.pageControl.email($(this).attr("data-nodeID"));
            });
        }
    };
    CNBC_Utils.pageControl.print = function (nodeID) {
        var url = "http://" + this.host_url + "/id/" + nodeID + "/print";
        CNBC_Common.openWindow(url, 'print', 'width=800,height=600,scrollbars=1,resizable=1');
    };
    CNBC_Utils.pageControl.email = function (nodeID) {
        var data = this.getEmailData(nodeID);
        document.location.href = "mailto:?subject=" + data.subject + "&body=" + data.body + "%0d%0a%0d%0a Read More: " + data.loc;
    };
    CNBC_Utils.pageControl.getEmailData = function (nodeID) {
        var title = $("h1.title", "div.story").text();
        var etitle = title.replace(/\u2013/g, '-').replace(/\u2014/g, '-').replace(/\u2018/g, '\'').replace(/\u2019/g, '\'').replace(/\u201C/g, '"').replace(/\u201D/g, '"');
        etitle = escape($.trim(etitle).replace(/\s+/gi, ' '));
        var ebody = $("#article_description").text();
        var encodeBody = ebody.replace(/\u2013/g, '-').replace(/\u2014/g, '-').replace(/\u2018/g, '\'').replace(/\u2019/g, '\'').replace(/\u201C/g, '"').replace(/\u201D/g, '"');
        encodeBody = escape($.trim(encodeBody).replace(/\s+/gi, ' '));
        encodeBody = etitle + '%0D%0A%0D%0A' + encodeBody;
        return {
            subject: "CNBC.com Article: " + etitle,
            pubdate: $("#publish-date", "div.story").text(),
            body: encodeBody,
            loc: encodeURIComponent('http://' + location.host + "/id/" + nodeID + '/')
        };
    };
    CNBC_Utils.pageControl.showPrintMenu = function () {
        window.print();
    };
    CNBC_Utils.execute = function () {
        var con = window.console, isWarnOk = (con && typeof con.warn == "function"), warn = function (msg) {
            if (isWarnOk) {
                console.warn(msg);
            }
        };
        return function (component, func, lazyLoadingContainer) {
            try {
                if (!lazyLoadingContainer) {
                    func();
                } else {
                    cnbc = cnbc || {};
                    cnbc.worker = cnbc.worker || {};
                    cnbc.worker.lazyInits = cnbc.worker.lazyInits || {};
                    cnbc.worker.lazyInitKeys = cnbc.worker.lazyInitKeys || [];
                    cnbc.worker.lazyInitKeys.push(lazyLoadingContainer);
                    cnbc.worker.lazyInits[lazyLoadingContainer] = func;
                }
            } catch (e) {
                warn("error initializing " + component + " due to: " + e);
            }
        }
    }();
    CNBC_Utils.attachMultipleEvents = function () {
    }
    CNBC_Utils.executeLazyLoadFunctions = function () {
        if (window.postLoadFunctions) {
            for (var key in postLoadFunctions) {
                if (typeof postLoadFunctions[key] == 'function') {
                    postLoadFunctions[key]();
                }
            }
            postLoadFunctions = {};
        }
    };
    CNBC_Utils.getElement = function (selector, context, property) {
        var prop = '_$';
        prop += property || selector;
        if (CNBC_Common.isNull(context._elements) || !CNBC_Common.isArray(context._elements)) {
            context._elements = [];
        }
        ;
        if (!context._elements[prop]) {
            context._elements[prop] = $(selector);
        }
        ;
        return context._elements[prop];
    };
    CNBC_Utils.initEvents();
    CNBC_Utils.adjustHeight = function (container) {
        var type = typeof container;
        var $container;
        if (type == 'string') {
            $container = $('#' + container);
        } else if (type == 'object' && container.length == 1) {
            $container = container;
        } else {
            $container = $(container);
        }
        var maxHeight = parseInt($container.height()), $lastSubSection = $('div.subsection:last', $container), $li = $lastSubSection.children('ul').children('li'), $liFirst = $lastSubSection.children('ul').children('li:first');
        $lastSubSection.removeClass('hide');
        $li.each(function () {
            var $currLi = $(this);
            $currLi.removeClass('hide');
            var pos = $currLi.position().top, height = parseInt($currLi.outerHeight(true));
            if ((pos + height) > maxHeight) {
                $currLi.addClass('hide');
            }
        });
        if ($liFirst.is(':hidden')) {
            $lastSubSection.addClass('hide');
        }
    };
    CNBC_Utils.getQueryStringParams = function () {
        var queryString = window.location.search.substring(1);
        var paramPairs = queryString.split('&');
        var params = {};
        for (var i = 0, n = paramPairs.length; i < n; i++) {
            var paramPair = paramPairs[i].split('=');
            params[paramPair[0]] = paramPair[1];
        }
        return params;
    };
    CNBC_Utils.getQueryStringParamValue = function (queryStringParamName) {
        return CNBC_Utils.getQueryStringParams()[queryStringParamName];
    };
    CNBC_Utils.replaceBrowserUrl = function (url) {
        if (typeof window.history === 'object' && window.history.length && typeof window.history.pushState === 'function') {
            window.history.replaceState('windowPushState', "", url);
        } else {
        }
    };
    CNBC_Utils.removeUrlParam = function (url, paramName) {
        var result, urlArr, paramsArr, newParamsArr;
        result = url;
        urlArr = url.split('?');
        if (urlArr[1]) {
            paramsArr = urlArr[1].split('&');
            newParamsArr = [];
            $.each(paramsArr, function (index, value) {
                if (value.indexOf(paramName + '=') != 0) {
                    newParamsArr.push(value);
                }
            })
            if (newParamsArr.length == 0) {
                result = urlArr[0];
            } else {
                urlArr[1] = newParamsArr.join('&');
                result = urlArr.join('?');
            }
        }
        return result;
    };
    CNBC_Utils.removeUrlParams = function (url, paramNames) {
        var result, urlArr, paramsArr;
        result = url;
        if (paramNames && paramNames.length > 0) {
            urlArr = url.split('?');
            if (urlArr[1]) {
                paramsArr = urlArr[1].split('&');
                $.each(paramNames, function (paramNameIndex, paramName) {
                    $.each(paramsArr, function (urlParamIndex, urlParam) {
                        if (urlParam.indexOf(paramName + '=') == 0) {
                            paramsArr.splice(urlParamIndex, 1);
                            return false;
                        }
                    });
                });
                if (paramsArr.length == 0) {
                    result = urlArr[0];
                } else {
                    urlArr[1] = paramsArr.join('&');
                    result = urlArr.join('?');
                }
            }
        }
        return result;
    };
    CNBC_Utils.quickView = function (args) {
        var cookie_name = 'news_default_view_' + args.nid;
        var quickViewCookie = CNBC_Utils.readCookie(cookie_name);
        if (CNBC_Common.isNull(quickViewCookie)) {
            CNBC_Common.NewsDefaultView = 'regular';
            CNBC_Utils.createCookie(cookie_name, 'regular', 10 * 365 * 24);
        }
        else {
            CNBC_Common.NewsDefaultView = quickViewCookie;
        }
        $('div.top-news li.quickView').click(function () {
            CNBC_Utils.createCookie(cookie_name, 'quick', 10 * 365 * 24);
            document.location.reload();
            return false;
        });
        $('div.top-news li.regularView').click(function () {
            CNBC_Utils.createCookie(cookie_name, 'regular', 10 * 365 * 24);
            document.location.reload();
            return false;
        });
    };
    CNBC_Utils.watchLiveView = function (args) {
        var cookie_name = 'home_view_pref';
        var watchLiveViewCookie = CNBC_Utils.readCookie(cookie_name);
        $('div.top-news li.cnbclive').click(function () {
            CNBC_Utils.createCookie(cookie_name, 'watch-live', 10 * 365 * 24);
            window.cnbc.track.homepage("pro home:cnbc live::" + args.nid);
            document.location.reload();
            return false;
        });
        $('div.top-news li.topnews').click(function () {
            CNBC_Utils.createCookie(cookie_name, 'topnews', 10 * 365 * 24);
            window.cnbc.track.homepage("pro home:top story::" + args.nid);
            document.location.reload();
            return false;
        });
    };
    CNBC_Utils.appendTrkNavParam = function (key, val) {
        var resultURL = '';
        var url = document.location.href;
        if (url.indexOf(key) == -1) {
            var delimiter = url.indexOf('?') == -1 ? '?' : '&';
            resultURL = url + delimiter + key + '="' + val + '"';
        }
        else {
            resultURL = url;
        }
        return resultURL;
    };
    CNBC_Utils.isIE9OrBelow = function () {
        return /MSIE\s/.test(navigator.userAgent) && parseFloat(navigator.appVersion.split("MSIE")[1]) < 10;
    }
    CNBC_Utils.isTouchEnabled = function () {
        return "ontouchend"in document;
    };
    CNBC_Utils.clearTrkNav = function () {
        if (s.Util.cookieRead('linktrk')) {
            s.Util.cookieWrite('linktrk', '', 0);
        }
    };
    CNBC_Utils.showRedirectPopup = function (paramName) {
        var paramValue, popup, options, domString, logMsg, url;
        paramValue = CNBC_Utils.getQueryStringParamValue(paramName);
        if (paramValue == "1") {
            url = CNBC_Utils.removeUrlParam(window.location.href, paramName);
            CNBC_Utils.replaceBrowserUrl(url);
            domString = '<div id="cnbc-popup-background">' + '<div id="cnbc-popup-lightbox">' + '<a id="cnbc-popup-close-btn">x</a>' + '<div id="cnbc-popup-content">' + '<p><img src="http://fm.cnbc.com/applications/cnbc.com/staticcontent/img/login-cnbc-logo.png"></p>' + '<p>We are sorry, the page you requested is no longer available.</p>' + '<p>Close message for related content, or go to <a id="cnbc-popup-inner-link" href="/">www.cnbc.com</a> for the latest business news.</p>' + '</div>' + '</div>' + '</div>';
            $('body').append(domString);
            popup = new CNBC_Popup();
            options = {};
            options.closeOnBackgroudClick = true;
            popup.init(options);
            popup.execute();
        }
    };
    CNBC_Utils.viewMobileVersionLink = function () {
        var override = CNBC_Utils.readCookie('X-UA-Rewrite-Override');
        if (override) {
            var link = $('.cnbc-new-footer-res .sec-footer-content .view-mobile');
            link.css('display', 'block');
            link.click(function () {
                if (CNBC_Utils && CNBC_Utils.eraseCookie) {
                    CNBC_Utils.eraseCookie('X-UA-Rewrite-Override');
                    window.location.href = window.location.href;
                }
            });
        }
    };
    CNBC_Utils.viewMobileVersionLink();
    CNBC_Utils.showBrowserUpgradeMsg = function (msg) {
        if (!document.addEventListener && CNBC_Utils.readCookie("old_browser_msg", true) != "dismissed") {
            $('header#cnbc-new-header').prepend('<div class="brwsr-up-ban"><div class="brwsr-up-msg"><a href="javascript:void(0);" class="brwsr-up-close">&times;</a>' + msg + '</div></div>');
        }
        $(".brwsr-up-ban .brwsr-up-close").click(function () {
            CNBC_Utils.createCookie("old_browser_msg", "dismissed", 10 * 365 * 24, true);
            $(".brwsr-up-ban").remove();
        });
    };
    CNBC_Utils.isTabletMobile = function () {
        return navigator.userAgent.toLowerCase().match(/iphone|ipad|ipod|android|webos|palm|googletv|silk|windows phone|trident.*wp[1-9]|blackberry|bb10/) ? true : false;
    };
    CNBC_Utils.isMobile = function () {
        if (this.isTablet()) {
            return false;
        }
        return this.isTabletMobile();
    };
    CNBC_Utils.hasMinimumTabletDimensions = function () {
        var mediaQ = (typeof window.matchMedia !== "undefined") ? window.matchMedia("(min-device-width: 500px)") : {matches: false};
        return (mediaQ.matches) ? true : false;
    };
    CNBC_Utils.isTablet = function () {
        return (this.isTabletMobile() && this.hasMinimumTabletDimensions());
    };
    CNBC_Utils.getPlatform = function () {
        return CNBC_Utils.isMobile() ? 'Mobile' : 'PC';
    };
    CNBC_Utils.track = {
        nav: function (data, label) {
            if (window.s !== undefined) {
                s.linkTrackVars = 'eVar48,prop48';
                s.eVar48 = s.prop48 = data;
                s.tl(this, 'o', label);
            }
        }, symbolLookup: function (data) {
            if (window.s !== undefined) {
                s.linkTrackVars = 'prop7';
                s.prop7 = data;
                s.linkTrackEvents = 'event43';
                s.events = 'event43';
                s.tl(this, 'o', 'Quote search');
            }
        }
    };
    CNBC_Utils.isEmailAddress = function (val) {
        val = $.trim(val);
        var regExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/igm;
        var result = regExp.test(val);
        return result;
    };
    CNBC_Utils.urlParam = function (name, url) {
        if (!url) {
            url = window.location.href;
        }
        var results = new RegExp('[\\?&]' + name + '=([^&#]*)', "i").exec(url);
        return (results === null) ? null : (results[1] || 0);
    };
    CNBC_Utils.isUserPremium = function () {
        var premiumUserCookie = CNBC_Utils.readCookie(CNBC_Utils.proCookieName);
        return (premiumUserCookie && premiumUserCookie == 'true');
    };
    CNBC_Utils.isSignedIn = function () {
        return !!(CNBC_Utils.readCookie('c_to') && window.SURF && window.SURF.globals.session);
    };
    CNBC_Utils.isPremium = function () {
        return !!(window.SURF && SURF.globals.user && SURF.globals.user.brand_data && SURF.globals.user.brand_data.app_access);
    };
    CNBC_Utils.isHomePage = function () {
        return $('body').attr('id') === 'page_home_page_redesign';
    };
    CNBC_Utils.isSpecialEventPage = function () {
        return $('body').attr('id') === 'page_special_event';
    };
    CNBC_Utils.isVideoGallery = function () {
        return $('body').attr('id') === 'page_video_gallery';
    };
    CNBC_Utils.isVideoSectionFront = function () {
        return $('body').attr('id') === 'page_video_section_front';
    };
    CNBC_Utils.isXfinityPage = function () {
        return $('body').attr('id') === 'page_xfinity_page';
    };
    CNBC_Utils.isLegacyPro = function () {
        return !!(CNBC_Utils.isPremium() && SURF.globals.user.brand_data.app_access.indexOf('LEGACY') > -1);
    };
    CNBC_Utils.isLegacyProFirstTimeVisit = function () {
        return !!(CNBC_Utils.isLegacyPro() && !SURF.globals.user.brand_data.pro_first_time_visited);
    };
    CNBC_Utils.IS_IPAD = function () {
        return (navigator.userAgent.match(/iPad/i) != null) || (navigator.platform && navigator.platform.toLowerCase() == 'ipad');
    };
    CNBC_Utils.IS_IPHONE = function () {
        return (navigator.userAgent.match(/iPhone/i) != null) || (navigator.userAgent.match(/iPod/i) != null) || (navigator.platform && navigator.platform.toLowerCase() == 'iphone') || (navigator.platform && navigator.platform.toLowerCase() == 'ipod touch');
    };
    CNBC_Utils.IS_ANDROID = function () {
        return (navigator.userAgent.match(/android/i) != null) || (navigator.platform && navigator.platform.toLowerCase().indexOf('arm') >= 0);
    };
    CNBC_Utils.createProCookie = function () {
        CNBC_Utils.deleteData(CNBC_Utils.proCookieName);
        var rememberMe = !!window.CNBC_Surf_Mediator && !!CNBC_Surf_Mediator.rememberMe;
        var cookieExpiration = rememberMe ? (90 * 24) : "";
        CNBC_Utils.createCookie(CNBC_Utils.proCookieName, 'true', cookieExpiration, false);
    };
    CNBC_Utils.refreshProCookie = function () {
        if (CNBC_Utils.isUserPremium()) {
            CNBC_Utils.createProCookie();
        }
    };
    CNBC_Utils.dockLeaderboardAd = function () {
        var theWindow = $(window);
        var banner = $('#dart_wrapper_Top_Banner');
        var bannerState = 'normal';
        var bannerInitialOffset = banner.offset().top;
        var bannerInitialMarginBottom = banner.css('margin-bottom');
        var bannerInitialBackgroundColor = banner.css('background-color');
        var bannerInitialZIndex = banner.css('z-index');

        function switchBannerState(newBannerState) {
            if (bannerState !== newBannerState) {
                bannerState = newBannerState;
                if (bannerState == 'normal') {
                    banner.css({
                        position: 'relative',
                        'margin-bottom': bannerInitialMarginBottom,
                        'background-color': bannerInitialBackgroundColor,
                        'z-index': bannerInitialZIndex
                    });
                } else {
                    banner.css({
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        'margin-bottom': '0px',
                        'background-color': '#FFF',
                        'z-index': '1000'
                    });
                }
            }
        }

        function windowScrolled() {
            var windowScrollTop = theWindow.scrollTop();
            if (bannerState == 'fixed') {
                if (windowScrollTop < bannerInitialOffset) {
                    switchBannerState('normal');
                }
            } else {
                var bannerTop = banner.offset().top - windowScrollTop;
                if (bannerTop <= 0) {
                    switchBannerState('fixed');
                }
            }
        }

        theWindow.scroll(windowScrolled);
        windowScrolled();
    };
    CNBC_Utils.dockRightRailAd = function () {
        var theAd = $("#dart_wrapper_Flex_Ad_First");
        if (theAd.length != 1) {
            return;
        }
        var col2 = $('div.unit.col2');
        if (col2.length != 1) {
            return;
        }
        var lastAd = $('div.unit.col2 > div').last();
        if (lastAd.length != 1) {
            return;
        }
        var theWindow = $(window);
        var adFloating = false;
        var placeholder = $('<div>&nbsp;</div>');
        var initialTop = theAd.css('top');
        var initialLeft = theAd.css('left');

        function isLastAdAboveBottom() {
            var docViewTop = theWindow.scrollTop();
            var docViewBottom = docViewTop + theWindow.height();
            var elemTop = lastAd.offset().top;
            var elemBottom = elemTop + lastAd.height();
            return (elemBottom < docViewBottom);
        }

        function getLastAdBottomLeftCoordinates() {
            var result = {};
            result.bottom = lastAd.offset().top + lastAd.height() - theWindow.scrollTop();
            result.left = lastAd.offset().left - theWindow.scrollLeft();
            return result;
        }

        function switchAdState(pFloating) {
            if (adFloating != pFloating) {
                adFloating = pFloating;
                if (adFloating) {
                    placeholder.css({display: 'block', height: theAd.height()});
                    theAd.css({position: 'fixed'});
                } else {
                    theAd.css({position: 'relative', top: initialTop, left: initialLeft});
                    placeholder.css({display: 'none'});
                }
            }
        }

        function windowScrolled() {
            var floatIt = isLastAdAboveBottom();
            switchAdState(floatIt);
            if (adFloating) {
                var lastAdLoc = getLastAdBottomLeftCoordinates();
                var theLeft = Math.max(lastAdLoc.left, 0);
                var theTop = Math.max(lastAdLoc.bottom + 10, 5);
                theAd.css({top: theTop, left: theLeft});
            }
        }

        theAd.before(placeholder);
        placeholder.css({display: 'none'});
        theWindow.scroll(windowScrolled);
        windowScrolled();
    };
    CNBC_Utils.logElapsedTime = function (event) {
        var start = CNBC_Utils.startTime;
        var current = new Date().getTime();
        var elapsed = (current - start) / 1000;
        if (console) {
        }
    };
    CNBC_Utils.pageRefreshLogic = function (args) {
        var prInterval = (args.prNodeIdInterval ? args.prNodeIdInterval : args.prTemplateInterval) * 1000;
        var brInterval = (args.brNodeIdInterval ? args.brNodeIdInterval : args.brTemplateInterval) * 1000;
        var blurTime = new Date().valueOf();
        var refreshHold = null;

        function onPageFocus() {
            var now = new Date().valueOf();
            if (now - blurTime > brInterval) {
                refreshPage();
            } else {
                clearInterval(refreshHold);
                refreshHold = setInterval(refreshPage, prInterval);
            }
        }

        function onPageBlur() {
            clearInterval(refreshHold);
            blurTime = new Date().valueOf();
        }

        function refreshPage() {
            var refreshFlag = true;
            if (window.CNBC_VideoStates && CNBC_VideoStates.videoPlaying && CNBC_VideoStates.videoPlaying.length) {
                for (var i in CNBC_VideoStates.videoPlaying) {
                    if (CNBC_VideoStates.videoPlaying[i] && CNBC_VideoStates.videoPlaying[i] == 1) {
                        refreshFlag = false;
                        break;
                    }
                }
            }
            else if ($('#live_player').length && $('#live_player')[0].contentWindow.CNBC_uplynk.playStatus == 'playing') {
                refreshFlag = false;
            }
            else if ($('#live_player_universal').length && document.getElementById('live_player_universal').contentWindow.CNBC_livePlayer.playStatus == 'playing') {
                refreshFlag = false;
            }
            else if (typeof CNBC_Platform_Video_Gallery === 'function' && typeof CNBC_Platform_Video_Gallery.videoObj === 'object' && CNBC_Platform_Video_Gallery.videoObj.playerStatus == 'playing') {
                refreshFlag = false;
            }
            if (refreshFlag) {
                document.location.reload(true);
            }
        }

        if (prInterval) {
            refreshHold = setInterval(refreshPage, prInterval);
            if (brInterval) {
                window.addEventListener('focus', onPageFocus, true);
                window.addEventListener('blur', onPageBlur, true);
                if (!document.hasFocus()) {
                    onPageBlur();
                }
            }
        }
    };
    CNBC_Utils.initPersistentSiteHeader = function (product, productTypes) {
        if (product == productTypes.web) {
            if ($('.immersive-cols2').length == 0) {
                window.setTimeout(CNBC_Utils.createPersistentSiteHeaderWeb, 2000);
            }
            else {
                window.setTimeout(CNBC_Utils.createPersistentRightRailAd, 2000);
                window.setTimeout(CNBC_Utils.createPersistentSiteHeaderWebImmersive, 2000);
            }
        }
        else if (product == productTypes.mobile) {
            CNBC_Utils.createPersistentAdRibbonMobile();
        }
    }
    CNBC_Utils.createPersistentSiteHeaderWeb = function () {
        if ("ontouchstart"in window) {
            $('.web .cnbc-body').on('click', function () {
            });
        }
        var realHeader = $('#cnbc-new-header');
        if (realHeader.length < 1) {
            return;
        }
        var nadAssetBanner = $('.nad-asset-banner');
        if (nadAssetBanner.length > 0) {
            nadAssetBanner = $(nadAssetBanner[0]);
        }
        else {
            nadAssetBanner = null;
        }
        var mainHeaderNav = realHeader.find('.main-header-nav');
        var headerStHeight = mainHeaderNav.position().top;
        var ribbonStHeight = (nadAssetBanner) ? nadAssetBanner.position().top : 0;
        var isHeaderPersistent = false;
        var isRibbonPersistent = false;
        var cnbc_small_logo = "<a id='sm-logo' href='" + CNBC_Settings.baseurls.pub_base_protocol_agnostic + "'><img src='http://fm.cnbc.com/applications/cnbc.com/resources/styles/skin/INTERNAL/EXPERIMENTS/PERSISTENT-HEADER/cnbc-logo-small-2x.png' width='123'></a>";
        realHeader.find('.cnbc-menu').prepend(cnbc_small_logo);
        var navSpacer;
        var ribbonSpacer;

        function onWindowScroll() {
            var st = $(window).scrollTop();
            if (st >= headerStHeight) {
                if (!isHeaderPersistent) {
                    if (!navSpacer) {
                        navSpacer = $('<div id="nav_spacer">&nbsp;</div>');
                        mainHeaderNav.after(navSpacer);
                        $('#nav_spacer').outerHeight(mainHeaderNav.outerHeight());
                    } else {
                        $('#nav_spacer').show();
                    }
                    mainHeaderNav.addClass('persistentHeader');
                    ribbonStHeight = ribbonStHeight - mainHeaderNav.outerHeight();
                    isHeaderPersistent = true;
                }
            } else {
                if (isHeaderPersistent) {
                    ribbonStHeight = ribbonStHeight + mainHeaderNav.outerHeight();
                    mainHeaderNav.removeClass('persistentHeader');
                    $('#nav_spacer').hide();
                    isHeaderPersistent = false;
                }
            }
            if (nadAssetBanner) {
                if (st >= ribbonStHeight) {
                    if (!isRibbonPersistent) {
                        if (!ribbonSpacer) {
                            ribbonSpacer = $('<div id="ribbon_spacer">&nbsp;</div>');
                            nadAssetBanner.after(ribbonSpacer);
                            $('#ribbon_spacer').outerHeight(nadAssetBanner.outerHeight());
                        } else {
                            $('#ribbon_spacer').show();
                        }
                        nadAssetBanner.addClass('persistentRibbon');
                        isRibbonPersistent = true;
                    }
                }
                else {
                    if (isRibbonPersistent) {
                        nadAssetBanner.removeClass('persistentRibbon');
                        $('#ribbon_spacer').hide();
                        isRibbonPersistent = false;
                    }
                }
            }
        }

        window.addEventListener('scroll', onWindowScroll, true);
        onWindowScroll();
    };
    CNBC_Utils.createPersistentSiteHeaderWebImmersive = function () {
        if ("ontouchstart"in window) {
            $('.web .cnbc-body').on('click', function () {
            });
        }
        var realHeader = $('#cnbc-new-header');
        if (realHeader.length < 1) {
            return;
        }
        var nadAssetBanner = $('.nad-asset-banner');
        if (nadAssetBanner.length > 0) {
            nadAssetBanner = $(nadAssetBanner[0]);
        }
        else {
            nadAssetBanner = null;
        }
        var mainHeaderNav = realHeader.find('.main-header-nav');
        var headerStHeight = mainHeaderNav.position().top;
        var ribbonStHeight = (nadAssetBanner) ? nadAssetBanner.position().top : 0;
        var isHeaderPersistent = false;
        var isRibbonPersistent = false;
        var cnbc_small_logo = "<a id='sm-logo' href='" + CNBC_Settings.baseurls.pub_base_protocol_agnostic + "'><img src='http://fm.cnbc.com/applications/cnbc.com/resources/styles/skin/INTERNAL/EXPERIMENTS/PERSISTENT-HEADER/cnbc-logo-small-2x.png' width='123'></a>";
        realHeader.find('.cnbc-menu').prepend(cnbc_small_logo);
        var navSpacer;
        var ribbonSpacer;

        function onWindowScroll() {
            var st = $(window).scrollTop();
            if (st > headerStHeight) {
                if (!isHeaderPersistent) {
                    if (!navSpacer) {
                        navSpacer = $('<div id="nav_spacer">&nbsp;</div>');
                        mainHeaderNav.after(navSpacer);
                        $('#nav_spacer').outerHeight(40);
                    } else {
                        $('#nav_spacer').show();
                    }
                    mainHeaderNav.addClass('persistentHeader');
                    ribbonStHeight = ribbonStHeight - mainHeaderNav.outerHeight();
                    isHeaderPersistent = true;
                }
            } else {
                if (isHeaderPersistent) {
                    ribbonStHeight = ribbonStHeight + mainHeaderNav.outerHeight();
                    mainHeaderNav.removeClass('persistentHeader');
                    $('#nav_spacer').hide();
                    isHeaderPersistent = false;
                }
            }
            if (nadAssetBanner) {
                if (st >= ribbonStHeight) {
                    if (!isRibbonPersistent) {
                        if (!ribbonSpacer) {
                            ribbonSpacer = $('<div id="ribbon_spacer">&nbsp;</div>');
                            nadAssetBanner.after(ribbonSpacer);
                            $('#ribbon_spacer').outerHeight(nadAssetBanner.outerHeight());
                        } else {
                            $('#ribbon_spacer').show();
                        }
                        nadAssetBanner.addClass('persistentRibbon');
                        isRibbonPersistent = true;
                    }
                }
                else {
                    if (isRibbonPersistent) {
                        nadAssetBanner.removeClass('persistentRibbon');
                        $('#ribbon_spacer').hide();
                        isRibbonPersistent = false;
                    }
                }
            }
        }

        window.addEventListener('scroll', onWindowScroll, true);
        onWindowScroll();
    };
    CNBC_Utils.createPersistentAdRibbonMobile = function () {
        if ("ontouchstart"in window) {
            $('.web .cnbc-body').on('click', function () {
            });
        }
        var nadAssetBanner = $('.nad-asset-banner');
        if (nadAssetBanner.length > 0) {
            nadAssetBanner = $(nadAssetBanner[0]);
        }
        else {
            return;
        }
        var isRibbonPersistent = false;
        var header = $('#pageHeader');
        var ribbonSpacer;
        var ribbonStHeight;

        function onWindowResize() {
            function getAdRibbonPosition() {
                if (isRibbonPersistent) {
                    return ribbonSpacer.position();
                }
                else {
                    return nadAssetBanner.position();
                }
            }

            ribbonStHeight = (nadAssetBanner) ? getAdRibbonPosition().top : 0;
            if (header) {
                ribbonStHeight -= header.outerHeight();
            }
        }

        function onWindowScroll() {
            var st = $(window).scrollTop();
            if (nadAssetBanner) {
                if (st >= ribbonStHeight) {
                    if (!isRibbonPersistent) {
                        if (!ribbonSpacer) {
                            ribbonSpacer = $('<div id="ribbon_spacer">&nbsp;</div>');
                            nadAssetBanner.after(ribbonSpacer);
                            $('#ribbon_spacer').outerHeight(nadAssetBanner.outerHeight());
                        } else {
                            $('#ribbon_spacer').show();
                        }
                        nadAssetBanner.addClass('persistentRibbon');
                        isRibbonPersistent = true;
                    }
                }
                else {
                    if (isRibbonPersistent) {
                        nadAssetBanner.removeClass('persistentRibbon');
                        $('#ribbon_spacer').hide();
                        isRibbonPersistent = false;
                    }
                }
            }
        }

        $(window).on('scroll', onWindowScroll);
        $(window).on('resize orientationchange', onWindowResize);
        onWindowResize();
        onWindowScroll();
    };
    CNBC_Utils.createPersistentRightRailAd = function () {
        if ("ontouchstart"in window) {
            $('.web .cnbc-body').on('click', function () {
            });
        }
        var container = $('.cols2');
        var rightRail = $('.immersive-cols2 .unit.col2');
        var rightRailStHeight;
        var rightRailHeight;
        if (rightRail.length > 0) {
            rightRail = $(rightRail[0]);
            rightRailStHeight = rightRail.offset().top;
            rightRailHeight = rightRail.outerHeight();
        }
        else {
            return;
        }
        var footer = $('.cnbc-new-footer-res');
        var footerTop;
        var persistentRightRailTopMargin = 60;
        var persistentRightRailBottom;
        var st;
        var states = {NOT_POSITIONED: "not positioned", FIXED: "fixed", ABSOLUTE: "absolute"};

        function switchRightRailState() {
            switchRightRailState.previousState = switchRightRailState.previousState || states.NOT_POSITIONED;
            switchRightRailState.currentState = switchRightRailState.currentState || states.NOT_POSITIONED;
            function changeState(newState) {
                switchRightRailState.currentState = newState;
            }

            st = $(window).scrollTop();
            switch (switchRightRailState.currentState) {
                case states.NOT_POSITIONED:
                    if (st + persistentRightRailTopMargin >= rightRailStHeight) {
                        changeState(states.FIXED);
                        rightRail.addClass('persistent');
                    }
                    break;
                case states.FIXED:
                    persistentRightRailBottom = rightRailHeight + rightRail.offset().top;
                    footerTop = footer.offset().top;
                    if (((st + rightRailHeight + 50) > (footerTop))) {
                        changeState(states.ABSOLUTE);
                        rightRail.removeClass('persistent');
                        container.addClass('pos');
                        rightRail.addClass('stick-footer');
                    }
                    else if (st + persistentRightRailTopMargin < rightRailStHeight) {
                        changeState(states.NOT_POSITIONED);
                        rightRail.removeClass('persistent');
                    }
                    break;
                case states.ABSOLUTE:
                    if (st + persistentRightRailTopMargin < rightRail.offset().top) {
                        changeState(states.FIXED);
                        rightRail.removeClass('stick-footer');
                        container.removeClass('pos');
                        rightRail.addClass('persistent');
                    }
                    break;
            }
        }

        if (rightRail) {
            window.addEventListener('scroll', switchRightRailState, true);
            switchRightRailState();
        }
    };
    CNBC_Utils.savedViewedSymbolsCookieName = "savedViewedSymbols";
    CNBC_Utils.saveSymbols = function (symbols, limit) {
        if ((Object.prototype.toString.call(symbols) != '[object Array]')) {
            return false;
        }
        ;
        function removeDuplicates(array) {
            var tempObj = {};
            var tempArray = [];
            for (var i = 0; i < array.length; i++) {
                tempObj[array[i]['symbol']] = {'symbol': array[i]['symbol'], 'name': array[i]['name']};
            }
            ;
            for (item in tempObj) {
                if (tempObj.hasOwnProperty(item)) {
                    tempArray.push(tempObj[item])
                }
                ;
            }
            ;
            return tempArray;
        };
        var limit = limit || 25;
        var savedViewedSymbols = (CNBC_Utils.readSavedSymbols().length > 0) ? CNBC_Utils.readSavedSymbols() : [];
        var mergedArray = (savedViewedSymbols) ? removeDuplicates(symbols.concat(savedViewedSymbols)) : removeDuplicates(symbols);
        if (mergedArray.length > limit) {
            mergedArray.length = limit;
        }
        ;
        CNBC_Utils.createCookie(CNBC_Utils.savedViewedSymbolsCookieName, JSON.stringify(mergedArray), (2000 * 24 * 60 * 60 * 1000), false);
    };
    CNBC_Utils.readSavedSymbols = function () {
        var rawCookie = CNBC_Utils.readCookie(CNBC_Utils.savedViewedSymbolsCookieName);
        return (rawCookie && rawCookie.length > 1) ? JSON.parse(rawCookie) : false;
    };
    CNBC_Utils.isArray = function (val) {
        return !!(Object.prototype.toString.call(val) == "[object Array]");
    };
    CNBC_Utils.isElementInViewport = function (el) {
        if (!el || !el[0]) {
            return false;
        }
        var rect = el[0].getBoundingClientRect(), width = rect.right - rect.left, height = rect.bottom - rect.top;
        return (rect.top >= 0 && rect.left >= 0 && (rect.bottom - height) <= (window.innerHeight || document.documentElement.clientHeight) && (rect.right - width) <= (window.innerWidth || document.documentElement.clientWidth));
    };
    CNBC_Utils.isElementVisible = function (el) {
        if (!(el instanceof jQuery)) {
            el = $(el);
        }
        return el.is(':visible');
    };
    CNBC_Utils.hasStyles = function (el, styles) {
        if (typeof el == 'object') {
            var keys = Object.keys(styles);
            for (var i = 0; i < keys.length; i++) {
                if (el.css(keys[i])) {
                    if (el.css(keys[i]) != styles[keys[i]])return false;
                }
            }
            return true;
        }
    };
    CNBC_Utils.appendClassesOnUserLoggedInOrPro = function () {
        if (CNBC_Utils.isSignedIn()) {
            $(document.body).removeClass('anonymous');
            if (CNBC_Utils.readCookie("ispro")) {
                $(document.body).addClass('pro-user');
            } else {
                $(document.body).addClass('logged-in');
            }
        }
        else {
            $(document.body).addClass('anonymous');
        }
    };
    CNBC_Utils.removeUrlHash = function () {
        if ('pushState'in history) {
            history.pushState("", document.title, window.location.pathname + window.location.search);
        } else {
            window.location.hash = '/';
        }
    };
    CNBC_Utils.searchProp = function (obj, prop) {
        var currentProp = obj, propForwards = prop.split('*'), propLayers = propForwards.length;
        if (propLayers > 1) {
            for (var i = 0; i < propLayers; i++) {
                var index = parseInt(propForwards[i].charAt(0));
                if (index || index === 0) {
                    currentProp = this.searchProp(currentProp[index], ' ' + propForwards[i].substr('1'));
                } else {
                    currentProp = this.searchProp(currentProp, propForwards[i]);
                }
            }
        } else {
            propForwards = propForwards[0].split('->');
            propLayers = propForwards.length;
            for (var j = 0; j < propLayers; j++) {
                if (propForwards[j] === ' ') {
                    continue;
                }
                if (currentProp[propForwards[j]] != undefined) {
                    currentProp = currentProp[propForwards[j]];
                } else {
                    currentProp = null;
                    break;
                }
            }
        }
        return currentProp;
    };
    CNBC_Utils.mergeSort = function (array) {
        if (array.length <= 1) {
            return array;
        }
        var segment = array, length = segment.length, mid = Math.round(length / 2);

        function merge(left, right) {
            var temp = [], l = left, r = right;
            while (l.length && r.length) {
                if (l.length > 1)var test = 1;
                if (l[0] < r[0]) {
                    temp.push(l[0]);
                    l.shift();
                } else {
                    temp.push(r[0]);
                    r.shift();
                }
            }
            temp = l.length ? temp.concat(l) : temp.concat(r);
            return temp;
        }

        return merge(this.mergeSort(segment.slice(0, mid)), this.mergeSort(segment.slice(mid, length)));
    };
    CNBC_Utils.sortObjectsByProperty = function (objs, prop, order) {
        var temp = [], sortedTemp, sorted = [];
        for (obj in objs) {
            temp.push(this.searchProp(objs[obj], prop));
        }
        sortedTemp = this.mergeSort(temp);
        while (sortedTemp.length && sortedTemp[0] != null) {
            for (obj in objs) {
                if (this.searchProp(objs[obj], prop) == sortedTemp[0]) {
                    sorted.push(objs[obj]);
                    sortedTemp.shift();
                }
            }
        }
        if (sortedTemp.length)sorted.concat(sortedTemp);
        if (order && order === 1)sorted.reverse();
        return sorted;
    };
    CNBC_Utils.compareOrder = function (array1, array2, key) {
        var length = (array1.length > array2.length) ? array2.length : array1.length;
        for (var i = 0; i < length; i++) {
            if (this.searchProp(array1[i], key) != this.searchProp(array2[i]), key)return false;
        }
        return true;
    };
    CNBC_Utils.isEmpty = function (obj) {
        if (CNBC_Common.isArray(obj)) {
            if (obj.length == 0)return true;
        } else if (typeof obj === 'object') {
            for (p in obj) {
                if (obj[p] !== null)return false;
            }
            return true;
        }
        return false;
    };
    CNBC_Utils.on = function () {
        target.addEventListener(type, listener, false);
    }
    CNBC_Utils.onWindowMessage = function (callback) {
        on(window, 'message', function (e) {
            console.log(e);
        })
    }
})(jQuery);
$(document).ready(function () {
    CNBC_Utils.logElapsedTime("document ready");
});
$(window).load(function () {
    CNBC_Utils.logElapsedTime("window load");
});
(function () {
    this.linkList = $('[data-trkNavAttr]');
    $.each(linkList, function (i, v) {
        var $element = $(v);
        var attrValue = $element.attr('data-trkNavAttr');
        $element.on('click', function () {
            s.Util.cookieWrite('linktrk', attrValue, 0);
        });
    });
})();
/* File BEGIN: http://fm.cnbc.com/applications/cnbc.com/staticcontent/scripts/libraries/Common/cnbc.base.js?t=1450133677 */
;
(function (jQuery, undefined) {
    window.cnbc = window.cnbc || {};
    cnbc.config = cnbc.config || {};
    cnbc.jq = jQuery;
    cnbc.object = function () {
    };
    cnbc.object.prototype.log = function (message, trace) {
        console.log(message);
        if (typeof trace == "Boolean" && trace === true) {
            console.trace();
        }
    };
    cnbc.uuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    cnbc.track = {
        stl: function (tlArgs, config) {
            try {
                if (typeof config == "object" && typeof window.s == "object") {
                    var keys = Object.keys(config);
                    for (iii in keys) {
                        window.s[keys[iii]] = config[keys[iii]];
                    }
                    window.s.tl.apply(window, tlArgs);
                    if (typeof window.s.manageVars != "function") {
                        CNBC_Omniture.sManageVars();
                    }
                    window.s.manageVars("clearVars");
                }
            } catch (e) {
            }
        }, portfolio: function (context) {
            var config = {"linkTrackVars": "contextData.cnbc.trknav", "contextData": {"cnbc.trknav": context}};
            var tlArgs = [true, 'o', 'Model Portfolio', null, 'navigate'];
            this.stl(tlArgs, config);
        }, homepage: function (context) {
            var config = {"linkTrackVars": "contextData.cnbc.trknav", "contextData": {"cnbc.trknav": context}};
            var tlArgs = [true, 'o', 'Home Page', null, 'navigate'];
            this.stl(tlArgs, config);
        }
    };
    cnbc.utils = {};
    cnbc.utils.amendMenu = function () {
        if (CNBC_Utils.isLegacyPro() && cnbc.config.menuAmendments != undefined) {
            for (iii in cnbc.config.menuAmendments) {
                var tmp = "";
                for (jjj in cnbc.config.menuAmendments[iii]) {
                    tmp += "<li><a href=\"" + cnbc.config.menuAmendments[iii][jjj].url + "\">" + cnbc.config.menuAmendments[iii][jjj].label + "</a></li>";
                }
                $("ul#nav ." + iii + " ul").append(tmp);
            }
        }
        if (CNBC_Utils.isPremium()) {
            var mb = null;
            cnbc.jq("#nav .pro a:contains('Live TV'), .menu a:contains('Live TV')").on('click', function (e) {
                if (cnbc.config.isWeekendMode) {
                    e.preventDefault();
                    if (!mb) {
                        mb = new cnbc.messageBox({"initCallback": "weekendMode"});
                    }
                    mb.show();
                } else {
                    CNBC_Utils.createCookie('home_view_pref', 'watch-live', 10 * 365 * 24);
                }
            });
            cnbc.jq("#nav .pro a:contains('Subscribe')").remove();
        }
    };
})(jQuery);
/* File BEGIN: http://fm.cnbc.com/applications/cnbc.com/staticcontent/scripts/libraries/Common/cnbc.url.js?t=1450133677 */
;
(function ($, undefined) {
    window.cnbc = window.cnbc || {};
    cnbc.url = {};
    cnbc.url.parse = function (url, breakdownSearch) {
        breakdownSearch = typeof breakdownSearch !== "undefined" ? breakdownSearch : false;
        var a = document.createElement("a");
        a.href = url;
        a.qsp = {};
        if (breakdownSearch) {
            a.qsp = cnbc.url.breakdownSearch(a.search);
        }
        return a;
    };
    cnbc.url.breakdownSearch = function (search) {
        var qsp = {};
        if (typeof search !== "undefined" && search.length > 1) {
            var params = search.substr(1).split("&");
            for (var iii = 0; iii < params.length; iii++) {
                if (params[iii].length > 0) {
                    idx = params[iii].indexOf('=');
                    if (idx == -1) {
                        idx = params[iii].length;
                    }
                    qsp[decodeURIComponent(params[iii].substr(0, idx))] = decodeURIComponent(params[iii].substr(idx + 1));
                }
            }
        }
        return qsp;
    };
    cnbc.url.mergeSearch = function (qsp) {
        var search = "";
        for (var iii in qsp) {
            search = search.concat(encodeURIComponent(iii), "=", encodeURIComponent(qsp[iii]), "&");
        }
        return search.substr(0, search.length - 1);
    };
    cnbc.url.getParameter = function (url, parameter) {
        var urlObject = cnbc.url.parse(url, true);
        return (typeof urlObject.qsp[parameter] == 'undefined') ? "" : urlObject.qsp[parameter];
    };
    cnbc.url.setParameter = function (url, parameter, value) {
        var urlObject = cnbc.url.parse(url, true);
        urlObject.qsp[parameter] = value;
        urlObject.search = "?" + cnbc.url.mergeSearch(urlObject.qsp);
        return urlObject.href;
    };
    cnbc.url.deleteParameter = function (url, parameter) {
        var urlObject = cnbc.url.parse(url, true);
        delete urlObject.qsp[parameter];
        urlObject.search = "?" + cnbc.url.mergeSearch(urlObject.qsp);
        return urlObject.href;
    };
})(jQuery);
/* File BEGIN: http://fm.cnbc.com/applications/cnbc.com/staticcontent/scripts/libraries/Common/cnbc.messagebox.js?t=1450133677 */
;
cnbc.messageBox = function (config) {
    cnbc.jq.extend(true, this.config, config || {});
    if (typeof config.initCallback == "string") {
        try {
            this[config.initCallback].call(this);
        } catch (e) {
            this.log("Init method: `" + config.initCallback + "` not found.");
        }
    } else {
        this.__constructDOM();
    }
};
cnbc.messageBox.prototype = new cnbc.object;
cnbc.messageBox.prototype.domReady = false;
cnbc.messageBox.prototype.config = {
    "type": "inline",
    "container": "body",
    "header": "cnbc-standard",
    "message": "No message configured.",
    "controls": []
};
cnbc.messageBox.prototype.templates = {
    "inline": "<div class=\"mb-container\">" + "<div class=\"mb-header\"><div class=\"logo\"></div></div>" + "<div class=\"mb-text\"></div>" + "<div class=\"mb-controls\"></div>" + "</div>",
    "dialog": "<div class=\"mb-container\">" + "<div class=\"mb-header\"><div class=\"logo\"></div></div>" + "<div class=\"mb-text\"></div>" + "<div class=\"mb-controls\"></div>" + "</div>"
};
cnbc.messageBox.prototype.__constructDOM = function () {
    try {
        this.$mb = cnbc.jq(this.templates[this.config.type]);
    } catch (e) {
        this.log('Unknown message box type: ' + this.config.type);
    }
    this.$mb.find(".mb-header .logo").addClass(this.config.header);
    this.$mb.find('.mb-text').append(this.config.message);
    if (this.config.controls instanceof Array) {
        for (iii in this.config.controls) {
            var controlConfig = this.config.controls[iii];
            var $control = null;
            if (typeof controlConfig.type != "undefined" && controlConfig.type == "link") {
                $control = cnbc.jq("<a></a>");
                if (typeof controlConfig.uri != "undefined" && controlConfig.uri.length > 0) {
                    $control.href = controlConfig.uri;
                }
            } else {
                $control = cnbc.jq("<button></button>");
            }
            if (typeof controlConfig.label != "undefined" && controlConfig.label.length > 0) {
                $control.html(controlConfig.label);
            }
            if (typeof controlConfig.className != "undefined") {
                $control.addClass(controlConfig.className);
            }
            if (typeof controlConfig.onClick == "function") {
                $control.on("click", controlConfig.onClick);
            }
            this.$mb.find('.mb-controls').append($control);
        }
    }
    if (this.config.type === "dialog") {
        this.dialog = new CNBC_Popup2();
        this.dialog.init({
            "closeOnBackgroudClick": false,
            "initCallback": null,
            "autoAlignPopup": true,
            "autoHide": true,
            "minHeight": '200px',
            "minWidth": (cnbc.config.product === 'web') ? '400px' : '25%',
            "popupId": "dlgMessagebox",
            "popupContent": this.$mb
        });
        this.objectRef = this.dialog;
    } else {
        cnbc.jq(this.config.container).append(this.$mb);
        this.objectRef = this.$mb;
    }
    this.domReady = true;
};
cnbc.messageBox.prototype.show = function () {
    this.objectRef.show();
};
cnbc.messageBox.prototype.hide = function () {
    this.objectRef.hide();
};
cnbc.messageBox.prototype.premiumPayloadError = function (config) {
    if (!this.domReady) {
        this.config.container = "#articlePayload";
        this.config.header = "cnbc-pro";
        this.config.message = "We're sorry, but this Pro content is not available. If you are a Pro subscriber, please try again or contact " + "<a href=\"mailto:cnbcllca2@mailmw.custhelp.com?subject=CNBC%20PRO%20Help%20Request%20-%20Error%20Message\" title=\"CNBC PRO Help Request - Error Message\">Customer Care</a> ";
        this.config.controls = [{
            "type": "button",
            "label": "try again",
            "uri": window.location.href,
            "onClick": function (e) {
                CNBC_AppInterface.refreshView();
            }
        }];
        this.__constructDOM();
    }
};
cnbc.messageBox.prototype.weekendMode = function () {
    if (!this.domReady) {
        this.config.type = "dialog";
        this.config.header = "cnbc-pro";
        this.config.message = "Live TV will resume when Asia business day programming begins at 6AM, Singapore (SGT) time";
        this.config.controls = [{
            "type": "button",
            "label": "CLOSE",
            "className": "grey",
            "onClick": cnbc.jq.proxy(this.hide, this)
        }];
        this.__constructDOM();
    }
};
/* File BEGIN: http://fm.cnbc.com/applications/cnbc.com/staticcontent/scripts/libraries/ThePlatForm/video_state.js?t=1450133677 */
var CNBC_VideoStates = {};
(function ($) {
    CNBC_VideoStates.pdkObjs = [];
    CNBC_VideoStates.currentPlayerObj = null;
    CNBC_VideoStates.videoPlaying = [];
    CNBC_VideoStates.setCookieVal = {};
    CNBC_VideoStates.cookieName = 'playerStatus';
    CNBC_VideoStates.showEndSlate = false;
    CNBC_VideoStates.$mainImgContainer = null;
    CNBC_VideoStates.playerController = null;
    CNBC_VideoStates.errorMsgContainerHTML = '<div class="player-error-placeholder"><div class="error-msg"><p>YOUR BROWSER IS NOT SUPPORTED.</p><p><strong><a href="http://cnbcllca.custhelp.com/app/answers/detail/a_id/335/" target="_blank">Please upgrade to watch video.</a></strong></p></div></div>';
    CNBC_VideoStates.videoErrorMsgContainerHTML = '<div class="player-error-placeholder"><div class="error-msg"><p>The requested video is unable to play.</p><p>The video does not exist in the system.</p></div></div>';
    CNBC_VideoStates.isAd = false;
    CNBC_VideoStates.isPageVisible = true;
    CNBC_VideoStates.isFullScreen = null;
    CNBC_VideoStates.init = function (args) {
        var self = this;
        if (args && $('iframe.player').length) {
            self.showEndSlate = args.showEndSlate || false;
            self.errorMsgContainerHTML = args.errorMsgContainerHTML || self.errorMsgContainerHTML;
            self.videoErrorMsgContainerHTML = args.videoErrorMsgContainerHTML || self.videoErrorMsgContainerHTML;
        }
        self.getpdkObjs();
        self.initpdkEventsAllPlayers();
        $.winFocus(function (event, isVisible) {
            if (isVisible) {
                self.isPageVisible = true;
                $.each(self.pdkObjs, function (i, value) {
                    setTimeout(function () {
                        self.pdkObjs[i].dispatchEvent("resumeTimer", 1);
                    }, 200);
                });
            } else {
                self.isPageVisible = false;
                $.each(self.pdkObjs, function (i, value) {
                    setTimeout(function () {
                        self.pdkObjs[i].dispatchEvent("pauseTimer", 1);
                    }, 200);
                });
            }
        });
    };
    CNBC_VideoStates.initHomePagePlayer = function (args) {
        var self = this;
        self.$mainImgContainer = args.mainImgContainer;
        var isIE9 = navigator.userAgent.toLowerCase().indexOf('msie 9');
        var iframeUrl = $('iframe.player-lazy-loaded').attr('data-src');
        var chkproVideo = CNBC_Utils.urlParam('playerType', iframeUrl);
        if (isIE9 != -1 || (chkproVideo == 'premium')) {
            var videoId = CNBC_Utils.urlParam('byGuid', iframeUrl);
            var videoGalleryUrl = CNBC_Settings.baseurls.cnbcvideo_url_base + '?video=' + videoId;
            self.$mainImgContainer.find('a').attr('href', videoGalleryUrl);
        } else {
            if ($('iframe.player-lazy-loaded').length) {
                self.showEndSlate = args.showEndSlate || false;
                self.errorMsgContainerHTML = args.errorMsgContainerHTML || self.errorMsgContainerHTML;
                self.videoErrorMsgContainerHTML = args.videoErrorMsgContainerHTML || self.videoErrorMsgContainerHTML;
                if (CNBC_Utils.isTablet() || CNBC_Utils.isMobile()) {
                    $('.loaderOverlayHP').show();
                }
                if (self.$mainImgContainer) {
                    self.setContainer(self.$mainImgContainer);
                    self.initLazyLoadingEvents();
                }
            }
        }
    };
    CNBC_VideoStates.setContainer = function (container) {
        var type = typeof container;
        if (type == 'string') {
            this.$mainImgContainer = $('#' + container);
        } else if (type == 'object' && container.length == 1) {
            this.$mainImgContainer = container;
        } else {
            this.$mainImgContainer = $(container);
        }
    };
    CNBC_VideoStates.initLazyLoadingEvents = function () {
        var self = this;
        if (CNBC_Utils.isTablet() || CNBC_Utils.isMobile()) {
            var $videoPlayer;
            $videoPlayer = $('iframe.player-lazy-loaded');
            if ($videoPlayer.length) {
                var playerId = $videoPlayer.attr('id');
                var userExp = self.getExperience();
                if (userExp != undefined) {
                    $videoPlayer.attr('data-src', $videoPlayer.attr('data-src') + '&param=' + userExp);
                }
                $videoPlayer.attr('src', $videoPlayer.attr('data-src'));
                $('iframe.player-lazy-loaded').show();
                self.playerController = $pdk.bind(playerId);
                self.removepdkEvents(self.playerController);
                self.initpdkEvents(self.playerController, 1);
            }
        }
        self.$mainImgContainer.unbind().click(function (e) {
            e.preventDefault();
            $('.loaderOverlayHP').show();
            $videoPlayer = $(this).parent().parent().find('iframe.player-lazy-loaded');
            $videoPlayer.show().css('display', 'block');
            if ($videoPlayer.length) {
                var playerId = $videoPlayer.attr('id');
                var userExp = self.getExperience();
                if (userExp != undefined) {
                    $videoPlayer.attr('data-src', $videoPlayer.attr('data-src') + '&param=' + userExp);
                }
                $videoPlayer.attr('src', $videoPlayer.attr('data-src'));
                self.playerController = $pdk.bind(playerId);
                self.initpdkEvents(self.playerController, 1);
            }
            e.stopPropagation();
            return false;
        });
    };
    CNBC_VideoStates.getExperience = function () {
        if (CNBC_Utils.isUserPremium()) {
            return "premium";
        } else if (window.activePartnerExperience == 'xfinity') {
            return "xfinity";
        }
    };
    CNBC_VideoStates.getpdkObjs = function () {
        var self = this;
        $('iframe.player').each(function () {
            if (!$(this).attr('src')) {
                var userExp = self.getExperience();
                if (userExp != undefined) {
                    $(this).attr('data-src', $(this).attr('data-src') + '&param=' + userExp);
                }
                var playerId = $(this).attr('id');
                if (typeof $pdk != 'undefined' && $pdk && $pdk.controller) {
                    if (CNBC_Utils.isSupportedBrowser()) {
                        $(this).attr('src', $(this).attr('data-src'));
                        if (playerId) {
                            self.pdkObjs.push($pdk.bind(playerId));
                        }
                    }
                    else {
                        $(this).replaceWith(self.errorMsgContainerHTML);
                    }
                }
                else {
                    $(this).replaceWith(self.errorMsgContainerHTML);
                }
            }
        });
    };
    CNBC_VideoStates.onPlayerLoaded = function (pdkObj, i) {
        var self = this;
        pdkObj.addEventListener("OnPlayerLoaded", function (e) {
            var playerCookieData = CNBC_Utils.readCookie(self.cookieName, 1);
            var playerStatus = JSON.parse(playerCookieData);
            if (playerStatus && playerStatus.mute) {
                pdkObj.mute(true);
            }
            if (playerStatus && playerStatus.volume) {
                pdkObj.setVolume(playerStatus.volume);
            }
            if ($('.loaderOverlayHP').length) {
                $('.loaderOverlayHP').remove();
            }
            if (CNBC_Utils.isTablet() || CNBC_Utils.isMobile()) {
                if ($('iframe.player-lazy-loaded').length) {
                    $('iframe.player-lazy-loaded').css({"opacity": "0"});
                }
            } else {
                if ($('iframe.player-lazy-loaded').length) {
                    $('iframe.player-lazy-loaded').css({"opacity": "1"});
                }
            }
        });
    };
    CNBC_VideoStates.onSetVolume = function (pdkObj, i) {
        var self = this;
        pdkObj.addEventListener("OnSetVolume", function (e) {
            self.setCookieVal.volume = e.data;
            CNBC_Utils.createCookie(self.cookieName, JSON.stringify(self.setCookieVal), null, 1);
        });
    };
    CNBC_VideoStates.onMute = function (pdkObj, i) {
        var self = this;
        pdkObj.addEventListener("OnMute", function (e) {
            var muteStatus = e.data;
            if (muteStatus) {
                muteStatus = 1;
            } else {
                muteStatus = 0;
            }
            self.setCookieVal.mute = muteStatus;
            CNBC_Utils.createCookie(self.cookieName, JSON.stringify(self.setCookieVal), null, 1);
        });
    };
    CNBC_VideoStates.onMediaPlay = function (pdkObj, i) {
        var self = this;
        pdkObj.addEventListener("OnMediaPlay", function (e) {
            if ($('iframe.player-lazy-loaded').length) {
                $('iframe.player-lazy-loaded').css({"opacity": "1"});
            }
            if (self.currentPlayerObj && (pdkObj.iframe.id != self.currentPlayerObj.iframe.id)) {
                self.currentPlayerObj.pause(true);
            }
            self.currentPlayerObj = pdkObj;
            self.videoPlaying[i] = 1;
        });
    };
    CNBC_VideoStates.onMediaStart = function (pdkObj, i) {
        var self = this;
        pdkObj.addEventListener("OnMediaStart", function (e) {
            self.isAd = e.data.baseClip.isAd;
            if ($('iframe.player-lazy-loaded').length) {
                $('iframe.player-lazy-loaded').css({"opacity": "1"});
            }
            var globalInfo = e.data;
            var vidTitle = globalInfo.baseClip.title;
            var containerId = $('#' + pdkObj.iframe.id).parent().prev().attr('id');
            if (containerId == 'show-title' && vidTitle && vidTitle != null) {
                $('#' + pdkObj.iframe.id).parent().prev().html(vidTitle);
            }
            if (self.currentPlayerObj && (pdkObj.iframe.id != self.currentPlayerObj.iframe.id)) {
                self.currentPlayerObj.pause(true);
            }
            self.currentPlayerObj = pdkObj;
            self.videoPlaying[i] = 1;
            cnbc.vod.notifier.publish(cnbc.vod.events.player.ON_RELEASE_START, pdkObj.iframe);
        });
    };
    CNBC_VideoStates.onMediaPlaying = function (pdkObj, i) {
        var self = this;
        pdkObj.addEventListener("OnMediaPlaying", function (e) {
        });
    };
    CNBC_VideoStates.onEndCardAppear = function (pdkObj, i) {
        var self = this;
        pdkObj.addEventListener("endCardAppear", function (e) {
            var topOfElement, bottomOfElement, element;
            var scrollTopPosition = $(window).scrollTop() + $(window).height();
            var windowScrollTop = $(window).scrollTop();
            element = $("#" + pdkObj.iframe.id);
            if (element.length) {
                topOfElement = element.offset().top;
                bottomOfElement = element.offset().top + element.outerHeight(true);
                if (windowScrollTop > bottomOfElement - (element.outerHeight(true) / 2) && windowScrollTop > topOfElement) {
                    self.pdkObjs[i].dispatchEvent("pauseTimer", 1);
                } else if (scrollTopPosition < topOfElement + (element.outerHeight(true) / 2) && scrollTopPosition < bottomOfElement) {
                    self.pdkObjs[i].dispatchEvent("pauseTimer", 1);
                }
                else {
                    self.pdkObjs[i].dispatchEvent("resumeTimer", 1);
                }
            }
            if (self.isPageVisible) {
                $.each(self.pdkObjs, function (i, value) {
                    setTimeout(function () {
                        self.pdkObjs[i].dispatchEvent("resumeTimer", 1);
                    }, 200);
                });
            }
            else {
                $.each(self.pdkObjs, function (i, value) {
                    setTimeout(function () {
                        self.pdkObjs[i].dispatchEvent("pauseTimer", 1);
                    }, 200);
                });
            }
        });
    };
    CNBC_VideoStates.onReleaseStart = function (pdkObj, i) {
        var self = this;
        pdkObj.addEventListener("OnReleaseStart", function (e) {
            $.each(self.pdkObjs, function (i, value) {
                if (typeof s === 'object') {
                    self.pdkObjs[i].dispatchEvent("getSPageName", {OmniSPageName: s.pageName});
                }
                self.pdkObjs[i].dispatchEvent("stopTimer", 1);
            });
            if (CNBC_Utils.isTablet() || CNBC_Utils.isMobile()) {
                if ($('iframe.player-lazy-loaded').length) {
                    $('iframe.player-lazy-loaded').css({"opacity": "1"});
                }
            }
            var globalInfo = e.data;
            var vidTitle = globalInfo.title;
            var containerId = $('#' + pdkObj.iframe.id).parent().prev().attr('id');
            if (containerId == 'show-title' && vidTitle && vidTitle != null) {
                $('#' + pdkObj.iframe.id).parent().prev().html(vidTitle);
            }
            cnbc.vod.notifier.publish(cnbc.vod.events.player.ON_RELEASE_START, pdkObj.iframe);
        });
    };
    CNBC_VideoStates.onMediaUnpause = function (pdkObj, i) {
        var self = this;
        pdkObj.addEventListener("OnMediaUnpause", function (e) {
            $.each(self.pdkObjs, function (i, value) {
                self.pdkObjs[i].dispatchEvent("stopTimer", 1);
            });
            if (self.currentPlayerObj && (pdkObj.iframe.id != self.currentPlayerObj.iframe.id)) {
                self.currentPlayerObj.pause(true);
            }
            self.currentPlayerObj = pdkObj;
            self.videoPlaying[i] = 1;
            cnbc.vod.notifier.publish(cnbc.vod.events.player.ON_MEDIA_UNPAUSE, pdkObj.iframe);
        });
    };
    CNBC_VideoStates.onMediaEnd = function (pdkObj, i) {
        var self = this;
        pdkObj.addEventListener("OnMediaEnd", function (e) {
        });
    };
    CNBC_VideoStates.onReleaseEnd = function (pdkObj, i) {
        var self = this;
        pdkObj.addEventListener("OnReleaseEnd", function (e) {
            self.videoPlaying[i] = 0;
            if ($('iframe.player-lazy-loaded').length) {
                $('iframe.player-lazy-loaded').css({"opacity": "0"});
            }
        });
    };
    CNBC_VideoStates.onShowFullScreen = function (pdkObj, i) {
        var self = this;
        pdkObj.addEventListener("OnShowFullScreen", function (e) {
            if (typeof e.data !== 'undefined') {
                if (e.data) {
                    self.isFullScreen = true;
                }
                else {
                    self.isFullScreen = false;
                }
            }
        });
    };
    CNBC_VideoStates.onMediaPause = function (pdkObj, i) {
        var self = this;
        pdkObj.addEventListener("OnMediaPause", function (e) {
            if (e.data.userInitiated) {
                self.videoPlaying[i] = 0;
                if (self.currentPlayerObj && (pdkObj.iframe.id == self.currentPlayerObj.iframe.id)) {
                    self.currentPlayerObj = null;
                }
            }
        });
    };
    CNBC_VideoStates.initpdkEvents = function (pdkObj, index) {
        this.onPlayerLoaded(pdkObj, index);
        this.onSetVolume(pdkObj, index);
        this.onMute(pdkObj, index);
        this.onReleaseStart(pdkObj, index);
        this.onEndCardAppear(pdkObj, index);
        this.onMediaPlay(pdkObj, index);
        this.onMediaStart(pdkObj, index);
        this.onMediaUnpause(pdkObj, index);
        this.onMediaEnd(pdkObj, index);
        this.onMediaPause(pdkObj, index);
        this.onReleaseEnd(pdkObj, index);
        this.onMediaPlaying(pdkObj, index);
        this.onShowFullScreen(pdkObj, index);
    };
    CNBC_VideoStates.initpdkEventsAllPlayers = function () {
        var self = this;
        $.each(self.pdkObjs, function (i, value) {
            self.removepdkEvents(self.pdkObjs[i]);
            self.initpdkEvents(self.pdkObjs[i], i);
        });
    };
    CNBC_VideoStates.removepdkEvents = function (pdkObj) {
        pdkObj.removeEventListener("OnPlayerLoaded");
        pdkObj.removeEventListener("OnSetVolume");
        pdkObj.removeEventListener("OnMute");
        pdkObj.removeEventListener("OnMediaPlay");
        pdkObj.removeEventListener("OnReleaseStart");
        pdkObj.removeEventListener("OnMediaStart");
        pdkObj.removeEventListener("OnMediaUnpause");
        pdkObj.removeEventListener("OnMediaEnd");
        pdkObj.removeEventListener("OnMediaPause");
        pdkObj.removeEventListener("OnReleaseEnd");
        pdkObj.removeEventListener("OnMediaPlaying");
    };
})(jQuery);
/* File BEGIN: http://fm.cnbc.com/applications/cnbc.com/staticcontent/scripts/jquery/plugins/jquery.browser.js?t=1450133677 */
var matched, browser;
jQuery.uaMatch = function (ua) {
    ua = ua.toLowerCase();
    var match = /(chrome)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
    return {browser: match[1] || "", version: match[2] || "0"};
};
matched = jQuery.uaMatch(navigator.userAgent);
browser = {};
if (matched.browser) {
    browser[matched.browser] = true;
    browser.version = matched.version;
}
if (browser.chrome) {
    browser.webkit = true;
} else if (browser.webkit) {
    browser.safari = true;
}
jQuery.browser = browser;
/* File BEGIN: http://fm.cnbc.com/applications/cnbc.com/staticcontent/scripts/jquery/plugins/jquery.hashchange.min.js?t=1450133677 */
;
(function ($) {
    var methods = {
        init: function (options) {
            var settings = $.extend({
                "hash": "", "onSet": function () {
                }, "onRemove": function () {
                }
            }, options);
            if (!settings.hash) {
                return this;
            }
            if (!$.hashchange) {
                $.hashchange = {};
                $.hashchange.onSet = {};
                $.hashchange.onRemove = {};
                $.hashchange.prevHash = "";
                $.hashchange.listener = function () {
                    if (window.location.hash === $.hashchange.prevHash) {
                        return;
                    }
                    var onRemove = $.hashchange.onRemove[$.hashchange.prevHash], onSet = $.hashchange.onSet[window.location.hash];
                    if (onRemove) {
                        onRemove();
                    }
                    if (onSet) {
                        onSet();
                    }
                    $.hashchange.prevHash = window.location.hash;
                };
                this.bind("hashchange", $.hashchange.listener);
            }
            $.hashchange.onSet[settings.hash] = settings.onSet;
            $.hashchange.onRemove[settings.hash] = settings.onRemove;
            if (window.location.hash === settings.hash && window.location.hash !== $.hashchange.prevHash) {
                $.hashchange.listener();
            }
            return this;
        }
    };
    $.fn.hashchange = function (options) {
        if (Object.prototype.toString.call(options) === "[object Array]") {
            for (var i = options.length - 1; i >= 0; i--) {
                methods.init.apply(this, [options[i]]);
            }
            return this;
        }
        return methods.init.apply(this, arguments);
    };
})(jQuery);
/* File BEGIN: http://fm.cnbc.com/applications/cnbc.com/staticcontent/scripts/jquery/plugins/jquery.base64.min.js?t=1450133677 */
(function ($) {
    var keyString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var uTF8Encode = function (string) {
        string = string.replace(/\x0d\x0a/g, "\x0a");
        var output = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                output += String.fromCharCode(c);
            } else if ((c > 127) && (c < 2048)) {
                output += String.fromCharCode((c >> 6) | 192);
                output += String.fromCharCode((c & 63) | 128);
            } else {
                output += String.fromCharCode((c >> 12) | 224);
                output += String.fromCharCode(((c >> 6) & 63) | 128);
                output += String.fromCharCode((c & 63) | 128);
            }
        }
        return output;
    };
    var uTF8Decode = function (input) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;
        while (i < input.length) {
            c = input.charCodeAt(i);
            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            } else if ((c > 191) && (c < 224)) {
                c2 = input.charCodeAt(i + 1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            } else {
                c2 = input.charCodeAt(i + 1);
                c3 = input.charCodeAt(i + 2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
        }
        return string;
    };
    $.extend({
        base64Encode: function (input) {
            var output = "";
            var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
            var i = 0;
            input = uTF8Encode(input);
            while (i < input.length) {
                chr1 = input.charCodeAt(i++);
                chr2 = input.charCodeAt(i++);
                chr3 = input.charCodeAt(i++);
                enc1 = chr1 >> 2;
                enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                enc4 = chr3 & 63;
                if (isNaN(chr2)) {
                    enc3 = enc4 = 64;
                } else if (isNaN(chr3)) {
                    enc4 = 64;
                }
                output = output + keyString.charAt(enc1) + keyString.charAt(enc2) + keyString.charAt(enc3) + keyString.charAt(enc4);
            }
            return output;
        }, base64Decode: function (input) {
            var output = "";
            var chr1, chr2, chr3;
            var enc1, enc2, enc3, enc4;
            var i = 0;
            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
            while (i < input.length) {
                enc1 = keyString.indexOf(input.charAt(i++));
                enc2 = keyString.indexOf(input.charAt(i++));
                enc3 = keyString.indexOf(input.charAt(i++));
                enc4 = keyString.indexOf(input.charAt(i++));
                chr1 = (enc1 << 2) | (enc2 >> 4);
                chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                chr3 = ((enc3 & 3) << 6) | enc4;
                output = output + String.fromCharCode(chr1);
                if (enc3 != 64) {
                    output = output + String.fromCharCode(chr2);
                }
                if (enc4 != 64) {
                    output = output + String.fromCharCode(chr3);
                }
            }
            output = uTF8Decode(output);
            return output;
        }
    });
})(jQuery);
/* File BEGIN: http://fm.cnbc.com/applications/cnbc.com/staticcontent/scripts/jquery/plugins/jquery.cookie.js?t=1450133677 */
jQuery.cookie = function (name, value, options) {
    if (typeof value != 'undefined') {
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString();
        }
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};
/* File BEGIN: http://fm.cnbc.com/applications/cnbc.com/staticcontent/scripts/jquery/plugins/jquery.notify.js?t=1450133677 */
(function ($) {
    $.widget("ech.notify", {
        options: {speed: 500, expires: 5000, stack: "below", custom: false, queue: false}, _create: function () {
            var self = this;
            this.templates = {};
            this.keys = [];
            this.element.addClass("ui-notify").children().addClass("ui-notify-message ui-notify-message-style").each(function (i) {
                var key = this.id || i;
                self.keys.push(key);
                self.templates[key] = $(this).removeAttr("id").wrap("<div></div>").parent().html();
            }).end().empty().show();
        }, create: function (template, msg, opts) {
            if (typeof template === "object") {
                opts = msg;
                msg = template;
                template = null;
            }
            var tpl = this.templates[template || this.keys[0]];
            if (opts && opts.custom) {
                tpl = $(tpl).removeClass("ui-notify-message-style").wrap("<div></div>").parent().html();
            }
            this.openNotifications = this.openNotifications || 0;
            return new $.ech.notify.instance(this)._create(msg, $.extend({}, this.options, opts), tpl);
        }
    });
    $.extend($.ech.notify, {
        instance: function (widget) {
            this.__super = widget;
            this.isOpen = false;
        }
    });
    $.extend($.ech.notify.instance.prototype, {
        _create: function (params, options, template) {
            this.options = options;
            var self = this, html = template.replace(/#(?:\[|%7B)(.*?)(?:\]|%7D)/g, function ($1, $2) {
                return ($2 in params) ? params[$2] : '';
            }), m = (this.element = $(html)), closelink = m.find(".ui-notify-close");
            if (typeof this.options.click === "function") {
                m.addClass("ui-notify-click").bind("click", function (e) {
                    self._trigger("click", e, self);
                });
            }
            if (closelink.length) {
                closelink.bind("click", function () {
                    self.close();
                    return false;
                });
            }
            this.__super.element.queue("notify", function () {
                self.open();
                if (typeof options.expires === "number" && options.expires > 0) {
                    setTimeout($.proxy(self.close, self), options.expires);
                }
            });
            if (!this.options.queue || this.__super.openNotifications <= this.options.queue - 1) {
                this.__super.element.dequeue("notify");
            }
            return this;
        }, close: function () {
            var speed = this.options.speed;
            this.element.fadeTo(speed, 0).slideUp(speed, $.proxy(function () {
                this._trigger("close");
                this.isOpen = false;
                this.element.remove();
                this.__super.openNotifications -= 1;
                this.__super.element.dequeue("notify");
            }, this));
            return this;
        }, open: function () {
            if (this.isOpen || this._trigger("beforeopen") === false) {
                return this;
            }
            var self = this;
            this.__super.openNotifications += 1;
            this.element[this.options.stack === "above" ? "prependTo" : "appendTo"](this.__super.element).css({
                display: "none",
                opacity: ""
            }).fadeIn(this.options.speed, function () {
                self._trigger("open");
                self.isOpen = true;
            });
            return this;
        }, widget: function () {
            return this.element;
        }, _trigger: function (type, e, instance) {
            return this.__super._trigger.call(this, type, e, instance);
        }
    });
})(jQuery);
/* File BEGIN: http://fm.cnbc.com/applications/cnbc.com/staticcontent/scripts/libraries/Mordenizr/customModernizr.js?t=1450133677 */
;
window.Modernizr = function (a, b, c) {
    function z(a) {
        j.cssText = a
    }

    function A(a, b) {
        return z(m.join(a + ";") + (b || ""))
    }

    function B(a, b) {
        return typeof a === b
    }

    function C(a, b) {
        return !!~("" + a).indexOf(b)
    }

    function D(a, b) {
        for (var d in a) {
            var e = a[d];
            if (!C(e, "-") && j[e] !== c)return b == "pfx" ? e : !0
        }
        return !1
    }

    function E(a, b, d) {
        for (var e in a) {
            var f = b[a[e]];
            if (f !== c)return d === !1 ? a[e] : B(f, "function") ? f.bind(d || b) : f
        }
        return !1
    }

    function F(a, b, c) {
        var d = a.charAt(0).toUpperCase() + a.slice(1), e = (a + " " + o.join(d + " ") + d).split(" ");
        return B(b, "string") || B(b, "undefined") ? D(e, b) : (e = (a + " " + p.join(d + " ") + d).split(" "), E(e, b, c))
    }

    var d = "2.7.1", e = {}, f = !0, g = b.documentElement, h = "modernizr", i = b.createElement(h), j = i.style, k, l = {}.toString, m = " -webkit- -moz- -o- -ms- ".split(" "), n = "Webkit Moz O ms", o = n.split(" "), p = n.toLowerCase().split(" "), q = {}, r = {}, s = {}, t = [], u = t.slice, v, w = function (a, c, d, e) {
        var f, i, j, k, l = b.createElement("div"), m = b.body, n = m || b.createElement("body");
        if (parseInt(d, 10))while (d--)j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j);
        return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i
    }, x = {}.hasOwnProperty, y;
    !B(x, "undefined") && !B(x.call, "undefined") ? y = function (a, b) {
        return x.call(a, b)
    } : y = function (a, b) {
        return b in a && B(a.constructor.prototype[b], "undefined")
    }, Function.prototype.bind || (Function.prototype.bind = function (b) {
        var c = this;
        if (typeof c != "function")throw new TypeError;
        var d = u.call(arguments, 1), e = function () {
            if (this instanceof e) {
                var a = function () {
                };
                a.prototype = c.prototype;
                var f = new a, g = c.apply(f, d.concat(u.call(arguments)));
                return Object(g) === g ? g : f
            }
            return c.apply(b, d.concat(u.call(arguments)))
        };
        return e
    }), q.csstransforms = function () {
        return !!F("transform")
    }, q.csstransitions = function () {
        return F("transition")
    };
    for (var G in q)y(q, G) && (v = G.toLowerCase(), e[v] = q[G](), t.push((e[v] ? "" : "no-") + v));
    return e.addTest = function (a, b) {
        if (typeof a == "object")for (var d in a)y(a, d) && e.addTest(d, a[d]); else {
            a = a.toLowerCase();
            if (e[a] !== c)return e;
            b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
        }
        return e
    }, z(""), i = k = null, function (a, b) {
        function l(a, b) {
            var c = a.createElement("p"), d = a.getElementsByTagName("head")[0] || a.documentElement;
            return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
        }

        function m() {
            var a = s.elements;
            return typeof a == "string" ? a.split(" ") : a
        }

        function n(a) {
            var b = j[a[h]];
            return b || (b = {}, i++, a[h] = i, j[i] = b), b
        }

        function o(a, c, d) {
            c || (c = b);
            if (k)return c.createElement(a);
            d || (d = n(c));
            var g;
            return d.cache[a] ? g = d.cache[a].cloneNode() : f.test(a) ? g = (d.cache[a] = d.createElem(a)).cloneNode() : g = d.createElem(a), g.canHaveChildren && !e.test(a) && !g.tagUrn ? d.frag.appendChild(g) : g
        }

        function p(a, c) {
            a || (a = b);
            if (k)return a.createDocumentFragment();
            c = c || n(a);
            var d = c.frag.cloneNode(), e = 0, f = m(), g = f.length;
            for (; e < g; e++)d.createElement(f[e]);
            return d
        }

        function q(a, b) {
            b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) {
                return s.shivMethods ? o(c, a, b) : b.createElem(c)
            }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + m().join().replace(/[\w\-]+/g, function (a) {
                return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
            }) + ");return n}")(s, b.frag)
        }

        function r(a) {
            a || (a = b);
            var c = n(a);
            return s.shivCSS && !g && !c.hasCSS && (c.hasCSS = !!l(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), k || q(a, c), a
        }

        var c = "3.7.0", d = a.html5 || {}, e = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, g, h = "_html5shiv", i = 0, j = {}, k;
        (function () {
            try {
                var a = b.createElement("a");
                a.innerHTML = "<xyz></xyz>", g = "hidden"in a, k = a.childNodes.length == 1 || function () {
                    b.createElement("a");
                    var a = b.createDocumentFragment();
                    return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
                }()
            } catch (c) {
                g = !0, k = !0
            }
        })();
        var s = {
            elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
            version: c,
            shivCSS: d.shivCSS !== !1,
            supportsUnknownElements: k,
            shivMethods: d.shivMethods !== !1,
            type: "default",
            shivDocument: r,
            createElement: o,
            createDocumentFragment: p
        };
        a.html5 = s, r(b)
    }(this, b), e._version = d, e._prefixes = m, e._domPrefixes = p, e._cssomPrefixes = o, e.testProp = function (a) {
        return D([a])
    }, e.testAllProps = F, e.testStyles = w, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + t.join(" ") : ""), e
}(this, this.document), function (a, b, c) {
    function d(a) {
        return "[object Function]" == o.call(a)
    }

    function e(a) {
        return "string" == typeof a
    }

    function f() {
    }

    function g(a) {
        return !a || "loaded" == a || "complete" == a || "uninitialized" == a
    }

    function h() {
        var a = p.shift();
        q = 1, a ? a.t ? m(function () {
            ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
        }, 0) : (a(), h()) : q = 0
    }

    function i(a, c, d, e, f, i, j) {
        function k(b) {
            if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                "img" != a && m(function () {
                    t.removeChild(l)
                }, 50);
                for (var d in y[c])y[c].hasOwnProperty(d) && y[c][d].onload()
            }
        }

        var j = j || B.errorTimeout, l = b.createElement(a), o = 0, r = 0, u = {t: d, s: c, e: f, a: i, x: j};
        1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function () {
            k.call(this, r)
        }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
    }

    function j(a, b, c, d, f) {
        return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
    }

    function k() {
        var a = B;
        return a.loader = {load: j, i: 0}, a
    }

    var l = b.documentElement, m = a.setTimeout, n = b.getElementsByTagName("script")[0], o = {}.toString, p = [], q = 0, r = "MozAppearance"in l.style, s = r && !!b.createRange().compareNode, t = s ? l : n.parentNode, l = a.opera && "[object Opera]" == o.call(a.opera), l = !!b.attachEvent && !l, u = r ? "object" : l ? "script" : "img", v = l ? "script" : u, w = Array.isArray || function (a) {
            return "[object Array]" == o.call(a)
        }, x = [], y = {}, z = {
        timeout: function (a, b) {
            return b.length && (a.timeout = b[0]), a
        }
    }, A, B;
    B = function (a) {
        function b(a) {
            var a = a.split("!"), b = x.length, c = a.pop(), d = a.length, c = {
                url: c,
                origUrl: c,
                prefixes: a
            }, e, f, g;
            for (f = 0; f < d; f++)g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
            for (f = 0; f < b; f++)c = x[f](c);
            return c
        }

        function g(a, e, f, g, h) {
            var i = b(a), j = i.autoCallback;
            i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function () {
                k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
            })))
        }

        function h(a, b) {
            function c(a, c) {
                if (a) {
                    if (e(a))c || (j = function () {
                        var a = [].slice.call(arguments);
                        k.apply(this, a), l()
                    }), g(a, j, b, 0, h); else if (Object(a) === a)for (n in m = function () {
                        var b = 0, c;
                        for (c in a)a.hasOwnProperty(c) && b++;
                        return b
                    }(), a)a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function () {
                        var a = [].slice.call(arguments);
                        k.apply(this, a), l()
                    } : j[n] = function (a) {
                        return function () {
                            var b = [].slice.call(arguments);
                            a && a.apply(this, b), l()
                        }
                    }(k[n])), g(a[n], j, b, n, h))
                } else!c && l()
            }

            var h = !!a.test, i = a.load || a.both, j = a.callback || f, k = j, l = a.complete || f, m, n;
            c(h ? a.yep : a.nope, !!i), i && c(i)
        }

        var i, j, l = this.yepnope.loader;
        if (e(a))g(a, 0, l, 0); else if (w(a))for (i = 0; i < a.length; i++)j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l); else Object(a) === a && h(a, l)
    }, B.addPrefix = function (a, b) {
        z[a] = b
    }, B.addFilter = function (a) {
        x.push(a)
    }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function () {
        b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
    }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function (a, c, d, e, i, j) {
        var k = b.createElement("script"), l, o, e = e || B.errorTimeout;
        k.src = a;
        for (o in d)k.setAttribute(o, d[o]);
        c = j ? h : c || f, k.onreadystatechange = k.onload = function () {
            !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
        }, m(function () {
            l || (l = 1, c(1))
        }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
    }, a.yepnope.injectCss = function (a, c, d, e, g, i) {
        var e = b.createElement("link"), j, c = i ? h : c || f;
        e.href = a, e.rel = "stylesheet", e.type = "text/css";
        for (j in d)e.setAttribute(j, d[j]);
        g || (n.parentNode.insertBefore(e, n), m(c, 0))
    }
}(this, document), Modernizr.load = function () {
    yepnope.apply(window, [].slice.call(arguments, 0))
};
/* File BEGIN: http://fm.cnbc.com/applications/cnbc.com/staticcontent/scripts/jquery/plugins/jquery.hammer.min.js?t=1450133677 */
/* Hammer.JS - v1.0.5 - 2013-04-07
 * http://eightmedia.github.com/hammer.js
 *
 * Copyright (c) 2013 Jorik Tangelder <j.tangelder@gmail.com>;
 * Licensed under the MIT license */
(function (t, e) {
    "use strict";
    function n() {
        if (!i.READY) {
            i.event.determineEventTypes();
            for (var t in i.gestures)i.gestures.hasOwnProperty(t) && i.detection.register(i.gestures[t]);
            i.event.onTouch(i.DOCUMENT, i.EVENT_MOVE, i.detection.detect), i.event.onTouch(i.DOCUMENT, i.EVENT_END, i.detection.detect), i.READY = !0
        }
    }

    var i = function (t, e) {
        return new i.Instance(t, e || {})
    };
    i.defaults = {
        stop_browser_behavior: {
            userSelect: "none",
            touchAction: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    }, i.HAS_POINTEREVENTS = navigator.pointerEnabled || navigator.msPointerEnabled, i.HAS_TOUCHEVENTS = "ontouchstart"in t, i.MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i, i.NO_MOUSEEVENTS = i.HAS_TOUCHEVENTS && navigator.userAgent.match(i.MOBILE_REGEX), i.EVENT_TYPES = {}, i.DIRECTION_DOWN = "down", i.DIRECTION_LEFT = "left", i.DIRECTION_UP = "up", i.DIRECTION_RIGHT = "right", i.POINTER_MOUSE = "mouse", i.POINTER_TOUCH = "touch", i.POINTER_PEN = "pen", i.EVENT_START = "start", i.EVENT_MOVE = "move", i.EVENT_END = "end", i.DOCUMENT = document, i.plugins = {}, i.READY = !1, i.Instance = function (t, e) {
        var r = this;
        return n(), this.element = t, this.enabled = !0, this.options = i.utils.extend(i.utils.extend({}, i.defaults), e || {}), this.options.stop_browser_behavior && i.utils.stopDefaultBrowserBehavior(this.element, this.options.stop_browser_behavior), i.event.onTouch(t, i.EVENT_START, function (t) {
            r.enabled && i.detection.startDetect(r, t)
        }), this
    }, i.Instance.prototype = {
        on: function (t, e) {
            for (var n = t.split(" "), i = 0; n.length > i; i++)this.element.addEventListener(n[i], e, !1);
            return this
        }, off: function (t, e) {
            for (var n = t.split(" "), i = 0; n.length > i; i++)this.element.removeEventListener(n[i], e, !1);
            return this
        }, trigger: function (t, e) {
            var n = i.DOCUMENT.createEvent("Event");
            n.initEvent(t, !0, !0), n.gesture = e;
            var r = this.element;
            return i.utils.hasParent(e.target, r) && (r = e.target), r.dispatchEvent(n), this
        }, enable: function (t) {
            return this.enabled = t, this
        }
    };
    var r = null, o = !1, s = !1;
    i.event = {
        bindDom: function (t, e, n) {
            for (var i = e.split(" "), r = 0; i.length > r; r++)t.addEventListener(i[r], n, !1)
        }, onTouch: function (t, e, n) {
            var a = this;
            this.bindDom(t, i.EVENT_TYPES[e], function (c) {
                var u = c.type.toLowerCase();
                if (!u.match(/mouse/) || !s) {
                    (u.match(/touch/) || u.match(/pointerdown/) || u.match(/mouse/) && 1 === c.which) && (o = !0), u.match(/touch|pointer/) && (s = !0);
                    var h = 0;
                    o && (i.HAS_POINTEREVENTS && e != i.EVENT_END ? h = i.PointerEvent.updatePointer(e, c) : u.match(/touch/) ? h = c.touches.length : s || (h = u.match(/up/) ? 0 : 1), h > 0 && e == i.EVENT_END ? e = i.EVENT_MOVE : h || (e = i.EVENT_END), h || null === r ? r = c : c = r, n.call(i.detection, a.collectEventData(t, e, c)), i.HAS_POINTEREVENTS && e == i.EVENT_END && (h = i.PointerEvent.updatePointer(e, c))), h || (r = null, o = !1, s = !1, i.PointerEvent.reset())
                }
            })
        }, determineEventTypes: function () {
            var t;
            t = i.HAS_POINTEREVENTS ? i.PointerEvent.getEvents() : i.NO_MOUSEEVENTS ? ["touchstart", "touchmove", "touchend touchcancel"] : ["touchstart mousedown", "touchmove mousemove", "touchend touchcancel mouseup"], i.EVENT_TYPES[i.EVENT_START] = t[0], i.EVENT_TYPES[i.EVENT_MOVE] = t[1], i.EVENT_TYPES[i.EVENT_END] = t[2]
        }, getTouchList: function (t) {
            return i.HAS_POINTEREVENTS ? i.PointerEvent.getTouchList() : t.touches ? t.touches : [{
                identifier: 1,
                pageX: t.pageX,
                pageY: t.pageY,
                target: t.target
            }]
        }, collectEventData: function (t, e, n) {
            var r = this.getTouchList(n, e), o = i.POINTER_TOUCH;
            return (n.type.match(/mouse/) || i.PointerEvent.matchType(i.POINTER_MOUSE, n)) && (o = i.POINTER_MOUSE), {
                center: i.utils.getCenter(r),
                timeStamp: (new Date).getTime(),
                target: n.target,
                touches: r,
                eventType: e,
                pointerType: o,
                srcEvent: n,
                preventDefault: function () {
                    this.srcEvent.preventManipulation && this.srcEvent.preventManipulation(), this.srcEvent.preventDefault && this.srcEvent.preventDefault()
                },
                stopPropagation: function () {
                    this.srcEvent.stopPropagation()
                },
                stopDetect: function () {
                    return i.detection.stopDetect()
                }
            }
        }
    }, i.PointerEvent = {
        pointers: {}, getTouchList: function () {
            var t = this, e = [];
            return Object.keys(t.pointers).sort().forEach(function (n) {
                e.push(t.pointers[n])
            }), e
        }, updatePointer: function (t, e) {
            return t == i.EVENT_END ? this.pointers = {} : (e.identifier = e.pointerId, this.pointers[e.pointerId] = e), Object.keys(this.pointers).length
        }, matchType: function (t, e) {
            if (!e.pointerType)return !1;
            var n = {};
            return n[i.POINTER_MOUSE] = e.pointerType == e.MSPOINTER_TYPE_MOUSE || e.pointerType == i.POINTER_MOUSE, n[i.POINTER_TOUCH] = e.pointerType == e.MSPOINTER_TYPE_TOUCH || e.pointerType == i.POINTER_TOUCH, n[i.POINTER_PEN] = e.pointerType == e.MSPOINTER_TYPE_PEN || e.pointerType == i.POINTER_PEN, n[t]
        }, getEvents: function () {
            return ["pointerdown MSPointerDown", "pointermove MSPointerMove", "pointerup pointercancel MSPointerUp MSPointerCancel"]
        }, reset: function () {
            this.pointers = {}
        }
    }, i.utils = {
        extend: function (t, n, i) {
            for (var r in n)t[r] !== e && i || (t[r] = n[r]);
            return t
        }, hasParent: function (t, e) {
            for (; t;) {
                if (t == e)return !0;
                t = t.parentNode
            }
            return !1
        }, getCenter: function (t) {
            for (var e = [], n = [], i = 0, r = t.length; r > i; i++)e.push(t[i].pageX), n.push(t[i].pageY);
            return {
                pageX: (Math.min.apply(Math, e) + Math.max.apply(Math, e)) / 2,
                pageY: (Math.min.apply(Math, n) + Math.max.apply(Math, n)) / 2
            }
        }, getVelocity: function (t, e, n) {
            return {x: Math.abs(e / t) || 0, y: Math.abs(n / t) || 0}
        }, getAngle: function (t, e) {
            var n = e.pageY - t.pageY, i = e.pageX - t.pageX;
            return 180 * Math.atan2(n, i) / Math.PI
        }, getDirection: function (t, e) {
            var n = Math.abs(t.pageX - e.pageX), r = Math.abs(t.pageY - e.pageY);
            return n >= r ? t.pageX - e.pageX > 0 ? i.DIRECTION_LEFT : i.DIRECTION_RIGHT : t.pageY - e.pageY > 0 ? i.DIRECTION_UP : i.DIRECTION_DOWN
        }, getDistance: function (t, e) {
            var n = e.pageX - t.pageX, i = e.pageY - t.pageY;
            return Math.sqrt(n * n + i * i)
        }, getScale: function (t, e) {
            return t.length >= 2 && e.length >= 2 ? this.getDistance(e[0], e[1]) / this.getDistance(t[0], t[1]) : 1
        }, getRotation: function (t, e) {
            return t.length >= 2 && e.length >= 2 ? this.getAngle(e[1], e[0]) - this.getAngle(t[1], t[0]) : 0
        }, isVertical: function (t) {
            return t == i.DIRECTION_UP || t == i.DIRECTION_DOWN
        }, stopDefaultBrowserBehavior: function (t, e) {
            var n, i = ["webkit", "khtml", "moz", "ms", "o", ""];
            if (e && t.style) {
                for (var r = 0; i.length > r; r++)for (var o in e)e.hasOwnProperty(o) && (n = o, i[r] && (n = i[r] + n.substring(0, 1).toUpperCase() + n.substring(1)), t.style[n] = e[o]);
                "none" == e.userSelect && (t.onselectstart = function () {
                    return !1
                })
            }
        }
    }, i.detection = {
        gestures: [], current: null, previous: null, stopped: !1, startDetect: function (t, e) {
            this.current || (this.stopped = !1, this.current = {
                inst: t,
                startEvent: i.utils.extend({}, e),
                lastEvent: !1,
                name: ""
            }, this.detect(e))
        }, detect: function (t) {
            if (this.current && !this.stopped) {
                t = this.extendEventData(t);
                for (var e = this.current.inst.options, n = 0, r = this.gestures.length; r > n; n++) {
                    var o = this.gestures[n];
                    if (!this.stopped && e[o.name] !== !1 && o.handler.call(o, t, this.current.inst) === !1) {
                        this.stopDetect();
                        break
                    }
                }
                return this.current && (this.current.lastEvent = t), t.eventType == i.EVENT_END && !t.touches.length - 1 && this.stopDetect(), t
            }
        }, stopDetect: function () {
            this.previous = i.utils.extend({}, this.current), this.current = null, this.stopped = !0
        }, extendEventData: function (t) {
            var e = this.current.startEvent;
            if (e && (t.touches.length != e.touches.length || t.touches === e.touches)) {
                e.touches = [];
                for (var n = 0, r = t.touches.length; r > n; n++)e.touches.push(i.utils.extend({}, t.touches[n]))
            }
            var o = t.timeStamp - e.timeStamp, s = t.center.pageX - e.center.pageX, a = t.center.pageY - e.center.pageY, c = i.utils.getVelocity(o, s, a);
            return i.utils.extend(t, {
                deltaTime: o,
                deltaX: s,
                deltaY: a,
                velocityX: c.x,
                velocityY: c.y,
                distance: i.utils.getDistance(e.center, t.center),
                angle: i.utils.getAngle(e.center, t.center),
                direction: i.utils.getDirection(e.center, t.center),
                scale: i.utils.getScale(e.touches, t.touches),
                rotation: i.utils.getRotation(e.touches, t.touches),
                startEvent: e
            }), t
        }, register: function (t) {
            var n = t.defaults || {};
            return n[t.name] === e && (n[t.name] = !0), i.utils.extend(i.defaults, n, !0), t.index = t.index || 1e3, this.gestures.push(t), this.gestures.sort(function (t, e) {
                return t.index < e.index ? -1 : t.index > e.index ? 1 : 0
            }), this.gestures
        }
    }, i.gestures = i.gestures || {}, i.gestures.Hold = {
        name: "hold",
        index: 10,
        defaults: {hold_timeout: 500, hold_threshold: 1},
        timer: null,
        handler: function (t, e) {
            switch (t.eventType) {
                case i.EVENT_START:
                    clearTimeout(this.timer), i.detection.current.name = this.name, this.timer = setTimeout(function () {
                        "hold" == i.detection.current.name && e.trigger("hold", t)
                    }, e.options.hold_timeout);
                    break;
                case i.EVENT_MOVE:
                    t.distance > e.options.hold_threshold && clearTimeout(this.timer);
                    break;
                case i.EVENT_END:
                    clearTimeout(this.timer)
            }
        }
    }, i.gestures.Tap = {
        name: "tap",
        index: 100,
        defaults: {
            tap_max_touchtime: 250,
            tap_max_distance: 10,
            tap_always: !0,
            doubletap_distance: 20,
            doubletap_interval: 300
        },
        handler: function (t, e) {
            if (t.eventType == i.EVENT_END) {
                var n = i.detection.previous, r = !1;
                if (t.deltaTime > e.options.tap_max_touchtime || t.distance > e.options.tap_max_distance)return;
                n && "tap" == n.name && t.timeStamp - n.lastEvent.timeStamp < e.options.doubletap_interval && t.distance < e.options.doubletap_distance && (e.trigger("doubletap", t), r = !0), (!r || e.options.tap_always) && (i.detection.current.name = "tap", e.trigger(i.detection.current.name, t))
            }
        }
    }, i.gestures.Swipe = {
        name: "swipe",
        index: 40,
        defaults: {swipe_max_touches: 1, swipe_velocity: .7},
        handler: function (t, e) {
            if (t.eventType == i.EVENT_END) {
                if (e.options.swipe_max_touches > 0 && t.touches.length > e.options.swipe_max_touches)return;
                (t.velocityX > e.options.swipe_velocity || t.velocityY > e.options.swipe_velocity) && (e.trigger(this.name, t), e.trigger(this.name + t.direction, t))
            }
        }
    }, i.gestures.Drag = {
        name: "drag",
        index: 50,
        defaults: {
            drag_min_distance: 10,
            drag_max_touches: 1,
            drag_block_horizontal: !1,
            drag_block_vertical: !1,
            drag_lock_to_axis: !1,
            drag_lock_min_distance: 25
        },
        triggered: !1,
        handler: function (t, n) {
            if (i.detection.current.name != this.name && this.triggered)return n.trigger(this.name + "end", t), this.triggered = !1, e;
            if (!(n.options.drag_max_touches > 0 && t.touches.length > n.options.drag_max_touches))switch (t.eventType) {
                case i.EVENT_START:
                    this.triggered = !1;
                    break;
                case i.EVENT_MOVE:
                    if (t.distance < n.options.drag_min_distance && i.detection.current.name != this.name)return;
                    i.detection.current.name = this.name, (i.detection.current.lastEvent.drag_locked_to_axis || n.options.drag_lock_to_axis && n.options.drag_lock_min_distance <= t.distance) && (t.drag_locked_to_axis = !0);
                    var r = i.detection.current.lastEvent.direction;
                    t.drag_locked_to_axis && r !== t.direction && (t.direction = i.utils.isVertical(r) ? 0 > t.deltaY ? i.DIRECTION_UP : i.DIRECTION_DOWN : 0 > t.deltaX ? i.DIRECTION_LEFT : i.DIRECTION_RIGHT), this.triggered || (n.trigger(this.name + "start", t), this.triggered = !0), n.trigger(this.name, t), n.trigger(this.name + t.direction, t), (n.options.drag_block_vertical && i.utils.isVertical(t.direction) || n.options.drag_block_horizontal && !i.utils.isVertical(t.direction)) && t.preventDefault();
                    break;
                case i.EVENT_END:
                    this.triggered && n.trigger(this.name + "end", t), this.triggered = !1
            }
        }
    }, i.gestures.Transform = {
        name: "transform",
        index: 45,
        defaults: {transform_min_scale: .01, transform_min_rotation: 1, transform_always_block: !1},
        triggered: !1,
        handler: function (t, n) {
            if (i.detection.current.name != this.name && this.triggered)return n.trigger(this.name + "end", t), this.triggered = !1, e;
            if (!(2 > t.touches.length))switch (n.options.transform_always_block && t.preventDefault(), t.eventType) {
                case i.EVENT_START:
                    this.triggered = !1;
                    break;
                case i.EVENT_MOVE:
                    var r = Math.abs(1 - t.scale), o = Math.abs(t.rotation);
                    if (n.options.transform_min_scale > r && n.options.transform_min_rotation > o)return;
                    i.detection.current.name = this.name, this.triggered || (n.trigger(this.name + "start", t), this.triggered = !0), n.trigger(this.name, t), o > n.options.transform_min_rotation && n.trigger("rotate", t), r > n.options.transform_min_scale && (n.trigger("pinch", t), n.trigger("pinch" + (1 > t.scale ? "in" : "out"), t));
                    break;
                case i.EVENT_END:
                    this.triggered && n.trigger(this.name + "end", t), this.triggered = !1
            }
        }
    }, i.gestures.Touch = {
        name: "touch",
        index: -1 / 0,
        defaults: {prevent_default: !1, prevent_mouseevents: !1},
        handler: function (t, n) {
            return n.options.prevent_mouseevents && t.pointerType == i.POINTER_MOUSE ? (t.stopDetect(), e) : (n.options.prevent_default && t.preventDefault(), t.eventType == i.EVENT_START && n.trigger(this.name, t), e)
        }
    }, i.gestures.Release = {
        name: "release", index: 1 / 0, handler: function (t, e) {
            t.eventType == i.EVENT_END && e.trigger(this.name, t)
        }
    }, "object" == typeof module && "object" == typeof module.exports ? module.exports = i : (t.Hammer = i, "function" == typeof t.define && t.define.amd && t.define("hammer", [], function () {
        return i
    }))
})(this), function (t, e) {
    "use strict";
    t !== e && (Hammer.event.bindDom = function (n, i, r) {
        t(n).on(i, function (t) {
            var n = t.originalEvent || t;
            n.pageX === e && (n.pageX = t.pageX, n.pageY = t.pageY), n.target || (n.target = t.target), n.which === e && (n.which = n.button), n.preventDefault || (n.preventDefault = t.preventDefault), n.stopPropagation || (n.stopPropagation = t.stopPropagation), r.call(this, n)
        })
    }, Hammer.Instance.prototype.on = function (e, n) {
        return t(this.element).on(e, n)
    }, Hammer.Instance.prototype.off = function (e, n) {
        return t(this.element).off(e, n)
    }, Hammer.Instance.prototype.trigger = function (e, n) {
        var i = t(this.element);
        return i.has(n.target).length && (i = t(n.target)), i.trigger({type: e, gesture: n})
    }, t.fn.hammer = function (e) {
        return this.each(function () {
            var n = t(this), i = n.data("hammer");
            i ? i && e && Hammer.utils.extend(i.options, e) : n.data("hammer", new Hammer(this, e || {}))
        })
    })
}(window.jQuery || window.Zepto);
/* File BEGIN: http://fm.cnbc.com/applications/cnbc.com/staticcontent/scripts/libraries/SWFObject/swfobject.2.2.js?t=1450133677 */
var swfobject = function () {
    var D = "undefined", r = "object", S = "Shockwave Flash", W = "ShockwaveFlash.ShockwaveFlash", q = "application/x-shockwave-flash", R = "SWFObjectExprInst", x = "onreadystatechange", O = window, j = document, t = navigator, T = false, U = [h], o = [], N = [], I = [], l, Q, E, B, J = false, a = false, n, G, m = true, M = function () {
        var aa = typeof j.getElementById != D && typeof j.getElementsByTagName != D && typeof j.createElement != D, ah = t.userAgent.toLowerCase(), Y = t.platform.toLowerCase(), ae = Y ? /win/.test(Y) : /win/.test(ah), ac = Y ? /mac/.test(Y) : /mac/.test(ah), af = /webkit/.test(ah) ? parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false, X = !+"\v1", ag = [0, 0, 0], ab = null;
        if (typeof t.plugins != D && typeof t.plugins[S] == r) {
            ab = t.plugins[S].description;
            if (ab && !(typeof t.mimeTypes != D && t.mimeTypes[q] && !t.mimeTypes[q].enabledPlugin)) {
                T = true;
                X = false;
                ab = ab.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                ag[0] = parseInt(ab.replace(/^(.*)\..*$/, "$1"), 10);
                ag[1] = parseInt(ab.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                ag[2] = /[a-zA-Z]/.test(ab) ? parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
            }
        } else {
            if (typeof O.ActiveXObject != D) {
                try {
                    var ad = new ActiveXObject(W);
                    if (ad) {
                        ab = ad.GetVariable("$version");
                        if (ab) {
                            X = true;
                            ab = ab.split(" ")[1].split(",");
                            ag = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                        }
                    }
                } catch (Z) {
                }
            }
        }
        return {w3: aa, pv: ag, wk: af, ie: X, win: ae, mac: ac}
    }(), k = function () {
        if (!M.w3) {
            return
        }
        if ((typeof j.readyState != D && j.readyState == "complete") || (typeof j.readyState == D && (j.getElementsByTagName("body")[0] || j.body))) {
            f()
        }
        if (!J) {
            if (typeof j.addEventListener != D) {
                j.addEventListener("DOMContentLoaded", f, false)
            }
            if (M.ie && M.win) {
                j.attachEvent(x, function () {
                    if (j.readyState == "complete") {
                        j.detachEvent(x, arguments.callee);
                        f()
                    }
                });
                if (O == top) {
                    (function () {
                        if (J) {
                            return
                        }
                        try {
                            j.documentElement.doScroll("left")
                        } catch (X) {
                            setTimeout(arguments.callee, 0);
                            return
                        }
                        f()
                    })()
                }
            }
            if (M.wk) {
                (function () {
                    if (J) {
                        return
                    }
                    if (!/loaded|complete/.test(j.readyState)) {
                        setTimeout(arguments.callee, 0);
                        return
                    }
                    f()
                })()
            }
            s(f)
        }
    }();

    function f() {
        if (J) {
            return
        }
        try {
            var Z = j.getElementsByTagName("body")[0].appendChild(C("span"));
            Z.parentNode.removeChild(Z)
        } catch (aa) {
            return
        }
        J = true;
        var X = U.length;
        for (var Y = 0; Y < X; Y++) {
            U[Y]()
        }
    }

    function K(X) {
        if (J) {
            X()
        } else {
            U[U.length] = X
        }
    }

    function s(Y) {
        if (typeof O.addEventListener != D) {
            O.addEventListener("load", Y, false)
        } else {
            if (typeof j.addEventListener != D) {
                j.addEventListener("load", Y, false)
            } else {
                if (typeof O.attachEvent != D) {
                    i(O, "onload", Y)
                } else {
                    if (typeof O.onload == "function") {
                        var X = O.onload;
                        O.onload = function () {
                            X();
                            Y()
                        }
                    } else {
                        O.onload = Y
                    }
                }
            }
        }
    }

    function h() {
        if (T) {
            V()
        } else {
            H()
        }
    }

    function V() {
        var X = j.getElementsByTagName("body")[0];
        var aa = C(r);
        aa.setAttribute("type", q);
        var Z = X.appendChild(aa);
        if (Z) {
            var Y = 0;
            (function () {
                if (typeof Z.GetVariable != D) {
                    var ab = Z.GetVariable("$version");
                    if (ab) {
                        ab = ab.split(" ")[1].split(",");
                        M.pv = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                    }
                } else {
                    if (Y < 10) {
                        Y++;
                        setTimeout(arguments.callee, 10);
                        return
                    }
                }
                X.removeChild(aa);
                Z = null;
                H()
            })()
        } else {
            H()
        }
    }

    function H() {
        var ag = o.length;
        if (ag > 0) {
            for (var af = 0; af < ag; af++) {
                var Y = o[af].id;
                var ab = o[af].callbackFn;
                var aa = {success: false, id: Y};
                if (M.pv[0] > 0) {
                    var ae = c(Y);
                    if (ae) {
                        if (F(o[af].swfVersion) && !(M.wk && M.wk < 312)) {
                            w(Y, true);
                            if (ab) {
                                aa.success = true;
                                aa.ref = z(Y);
                                ab(aa)
                            }
                        } else {
                            if (o[af].expressInstall && A()) {
                                var ai = {};
                                ai.data = o[af].expressInstall;
                                ai.width = ae.getAttribute("width") || "0";
                                ai.height = ae.getAttribute("height") || "0";
                                if (ae.getAttribute("class")) {
                                    ai.styleclass = ae.getAttribute("class")
                                }
                                if (ae.getAttribute("align")) {
                                    ai.align = ae.getAttribute("align")
                                }
                                var ah = {};
                                var X = ae.getElementsByTagName("param");
                                var ac = X.length;
                                for (var ad = 0; ad < ac; ad++) {
                                    if (X[ad].getAttribute("name").toLowerCase() != "movie") {
                                        ah[X[ad].getAttribute("name")] = X[ad].getAttribute("value")
                                    }
                                }
                                P(ai, ah, Y, ab)
                            } else {
                                p(ae);
                                if (ab) {
                                    ab(aa)
                                }
                            }
                        }
                    }
                } else {
                    w(Y, true);
                    if (ab) {
                        var Z = z(Y);
                        if (Z && typeof Z.SetVariable != D) {
                            aa.success = true;
                            aa.ref = Z
                        }
                        ab(aa)
                    }
                }
            }
        }
    }

    function z(aa) {
        var X = null;
        var Y = c(aa);
        if (Y && Y.nodeName == "OBJECT") {
            if (typeof Y.SetVariable != D) {
                X = Y
            } else {
                var Z = Y.getElementsByTagName(r)[0];
                if (Z) {
                    X = Z
                }
            }
        }
        return X
    }

    function A() {
        return !a && F("6.0.65") && (M.win || M.mac) && !(M.wk && M.wk < 312)
    }

    function P(aa, ab, X, Z) {
        a = true;
        E = Z || null;
        B = {success: false, id: X};
        var ae = c(X);
        if (ae) {
            if (ae.nodeName == "OBJECT") {
                l = g(ae);
                Q = null
            } else {
                l = ae;
                Q = X
            }
            aa.id = R;
            if (typeof aa.width == D || (!/%$/.test(aa.width) && parseInt(aa.width, 10) < 310)) {
                aa.width = "310"
            }
            if (typeof aa.height == D || (!/%$/.test(aa.height) && parseInt(aa.height, 10) < 137)) {
                aa.height = "137"
            }
            j.title = j.title.slice(0, 47) + " - Flash Player Installation";
            var ad = M.ie && M.win ? "ActiveX" : "PlugIn", ac = "MMredirectURL=" + O.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + ad + "&MMdoctitle=" + j.title;
            if (typeof ab.flashvars != D) {
                ab.flashvars += "&" + ac
            } else {
                ab.flashvars = ac
            }
            if (M.ie && M.win && ae.readyState != 4) {
                var Y = C("div");
                X += "SWFObjectNew";
                Y.setAttribute("id", X);
                ae.parentNode.insertBefore(Y, ae);
                ae.style.display = "none";
                (function () {
                    if (ae.readyState == 4) {
                        ae.parentNode.removeChild(ae)
                    } else {
                        setTimeout(arguments.callee, 10)
                    }
                })()
            }
            u(aa, ab, X)
        }
    }

    function p(Y) {
        if (M.ie && M.win && Y.readyState != 4) {
            var X = C("div");
            Y.parentNode.insertBefore(X, Y);
            X.parentNode.replaceChild(g(Y), X);
            Y.style.display = "none";
            (function () {
                if (Y.readyState == 4) {
                    Y.parentNode.removeChild(Y)
                } else {
                    setTimeout(arguments.callee, 10)
                }
            })()
        } else {
            Y.parentNode.replaceChild(g(Y), Y)
        }
    }

    function g(ab) {
        var aa = C("div");
        if (M.win && M.ie) {
            aa.innerHTML = ab.innerHTML
        } else {
            var Y = ab.getElementsByTagName(r)[0];
            if (Y) {
                var ad = Y.childNodes;
                if (ad) {
                    var X = ad.length;
                    for (var Z = 0; Z < X; Z++) {
                        if (!(ad[Z].nodeType == 1 && ad[Z].nodeName == "PARAM") && !(ad[Z].nodeType == 8)) {
                            aa.appendChild(ad[Z].cloneNode(true))
                        }
                    }
                }
            }
        }
        return aa
    }

    function u(ai, ag, Y) {
        var X, aa = c(Y);
        if (M.wk && M.wk < 312) {
            return X
        }
        if (aa) {
            if (typeof ai.id == D) {
                ai.id = Y
            }
            if (M.ie && M.win) {
                var ah = "";
                for (var ae in ai) {
                    if (ai[ae] != Object.prototype[ae]) {
                        if (ae.toLowerCase() == "data") {
                            ag.movie = ai[ae]
                        } else {
                            if (ae.toLowerCase() == "styleclass") {
                                ah += ' class="' + ai[ae] + '"'
                            } else {
                                if (ae.toLowerCase() != "classid") {
                                    ah += " " + ae + '="' + ai[ae] + '"'
                                }
                            }
                        }
                    }
                }
                var af = "";
                for (var ad in ag) {
                    if (ag[ad] != Object.prototype[ad]) {
                        af += '<param name="' + ad + '" value="' + ag[ad] + '" />'
                    }
                }
                aa.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + ah + ">" + af + "</object>";
                N[N.length] = ai.id;
                X = c(ai.id)
            } else {
                var Z = C(r);
                Z.setAttribute("type", q);
                for (var ac in ai) {
                    if (ai[ac] != Object.prototype[ac]) {
                        if (ac.toLowerCase() == "styleclass") {
                            Z.setAttribute("class", ai[ac])
                        } else {
                            if (ac.toLowerCase() != "classid") {
                                Z.setAttribute(ac, ai[ac])
                            }
                        }
                    }
                }
                for (var ab in ag) {
                    if (ag[ab] != Object.prototype[ab] && ab.toLowerCase() != "movie") {
                        e(Z, ab, ag[ab])
                    }
                }
                aa.parentNode.replaceChild(Z, aa);
                X = Z
            }
        }
        return X
    }

    function e(Z, X, Y) {
        var aa = C("param");
        aa.setAttribute("name", X);
        aa.setAttribute("value", Y);
        Z.appendChild(aa)
    }

    function y(Y) {
        var X = c(Y);
        if (X && X.nodeName == "OBJECT") {
            if (M.ie && M.win) {
                X.style.display = "none";
                (function () {
                    if (X.readyState == 4) {
                        b(Y)
                    } else {
                        setTimeout(arguments.callee, 10)
                    }
                })()
            } else {
                X.parentNode.removeChild(X)
            }
        }
    }

    function b(Z) {
        var Y = c(Z);
        if (Y) {
            for (var X in Y) {
                if (typeof Y[X] == "function") {
                    Y[X] = null
                }
            }
            Y.parentNode.removeChild(Y)
        }
    }

    function c(Z) {
        var X = null;
        try {
            X = j.getElementById(Z)
        } catch (Y) {
        }
        return X
    }

    function C(X) {
        return j.createElement(X)
    }

    function i(Z, X, Y) {
        Z.attachEvent(X, Y);
        I[I.length] = [Z, X, Y]
    }

    function F(Z) {
        var Y = M.pv, X = Z.split(".");
        X[0] = parseInt(X[0], 10);
        X[1] = parseInt(X[1], 10) || 0;
        X[2] = parseInt(X[2], 10) || 0;
        return (Y[0] > X[0] || (Y[0] == X[0] && Y[1] > X[1]) || (Y[0] == X[0] && Y[1] == X[1] && Y[2] >= X[2])) ? true : false
    }

    function v(ac, Y, ad, ab) {
        if (M.ie && M.mac) {
            return
        }
        var aa = j.getElementsByTagName("head")[0];
        if (!aa) {
            return
        }
        var X = (ad && typeof ad == "string") ? ad : "screen";
        if (ab) {
            n = null;
            G = null
        }
        if (!n || G != X) {
            var Z = C("style");
            Z.setAttribute("type", "text/css");
            Z.setAttribute("media", X);
            n = aa.appendChild(Z);
            if (M.ie && M.win && typeof j.styleSheets != D && j.styleSheets.length > 0) {
                n = j.styleSheets[j.styleSheets.length - 1]
            }
            G = X
        }
        if (M.ie && M.win) {
            if (n && typeof n.addRule == r) {
                n.addRule(ac, Y)
            }
        } else {
            if (n && typeof j.createTextNode != D) {
                n.appendChild(j.createTextNode(ac + " {" + Y + "}"))
            }
        }
    }

    function w(Z, X) {
        if (!m) {
            return
        }
        var Y = X ? "visible" : "hidden";
        if (J && c(Z)) {
            c(Z).style.visibility = Y
        } else {
            v("#" + Z, "visibility:" + Y)
        }
    }

    function L(Y) {
        var Z = /[\\\"<>\.;]/;
        var X = Z.exec(Y) != null;
        return X && typeof encodeURIComponent != D ? encodeURIComponent(Y) : Y
    }

    var d = function () {
        if (M.ie && M.win) {
            window.attachEvent("onunload", function () {
                var ac = I.length;
                for (var ab = 0; ab < ac; ab++) {
                    I[ab][0].detachEvent(I[ab][1], I[ab][2])
                }
                var Z = N.length;
                for (var aa = 0; aa < Z; aa++) {
                    y(N[aa])
                }
                for (var Y in M) {
                    M[Y] = null
                }
                M = null;
                for (var X in swfobject) {
                    swfobject[X] = null
                }
                swfobject = null
            })
        }
    }();
    return {
        registerObject: function (ab, X, aa, Z) {
            if (M.w3 && ab && X) {
                var Y = {};
                Y.id = ab;
                Y.swfVersion = X;
                Y.expressInstall = aa;
                Y.callbackFn = Z;
                o[o.length] = Y;
                w(ab, false)
            } else {
                if (Z) {
                    Z({success: false, id: ab})
                }
            }
        }, getObjectById: function (X) {
            if (M.w3) {
                return z(X)
            }
        }, embedSWF: function (ab, ah, ae, ag, Y, aa, Z, ad, af, ac) {
            var X = {success: false, id: ah};
            if (M.w3 && !(M.wk && M.wk < 312) && ab && ah && ae && ag && Y) {
                w(ah, false);
                K(function () {
                    ae += "";
                    ag += "";
                    var aj = {};
                    if (af && typeof af === r) {
                        for (var al in af) {
                            aj[al] = af[al]
                        }
                    }
                    aj.data = ab;
                    aj.width = ae;
                    aj.height = ag;
                    var am = {};
                    if (ad && typeof ad === r) {
                        for (var ak in ad) {
                            am[ak] = ad[ak]
                        }
                    }
                    if (Z && typeof Z === r) {
                        for (var ai in Z) {
                            if (typeof am.flashvars != D) {
                                am.flashvars += "&" + ai + "=" + Z[ai]
                            } else {
                                am.flashvars = ai + "=" + Z[ai]
                            }
                        }
                    }
                    if (F(Y)) {
                        var an = u(aj, am, ah);
                        if (aj.id == ah) {
                            w(ah, true)
                        }
                        X.success = true;
                        X.ref = an
                    } else {
                        if (aa && A()) {
                            aj.data = aa;
                            P(aj, am, ah, ac);
                            return
                        } else {
                            w(ah, true)
                        }
                    }
                    if (ac) {
                        ac(X)
                    }
                })
            } else {
                if (ac) {
                    ac(X)
                }
            }
        }, switchOffAutoHideShow: function () {
            m = false
        }, ua: M, getFlashPlayerVersion: function () {
            return {major: M.pv[0], minor: M.pv[1], release: M.pv[2]}
        }, hasFlashPlayerVersion: F, createSWF: function (Z, Y, X) {
            if (M.w3) {
                return u(Z, Y, X)
            } else {
                return undefined
            }
        }, showExpressInstall: function (Z, aa, X, Y) {
            if (M.w3 && A()) {
                P(Z, aa, X, Y)
            }
        }, removeSWF: function (X) {
            if (M.w3) {
                y(X)
            }
        }, createCSS: function (aa, Z, Y, X) {
            if (M.w3) {
                v(aa, Z, Y, X)
            }
        }, addDomLoadEvent: K, addLoadEvent: s, getQueryParamValue: function (aa) {
            var Z = j.location.search || j.location.hash;
            if (Z) {
                if (/\?/.test(Z)) {
                    Z = Z.split("?")[1]
                }
                if (aa == null) {
                    return L(Z)
                }
                var Y = Z.split("&");
                for (var X = 0; X < Y.length; X++) {
                    if (Y[X].substring(0, Y[X].indexOf("=")) == aa) {
                        return L(Y[X].substring((Y[X].indexOf("=") + 1)))
                    }
                }
            }
            return ""
        }, expressInstallCallback: function () {
            if (a) {
                var X = c(R);
                if (X && l) {
                    X.parentNode.replaceChild(l, X);
                    if (Q) {
                        w(Q, true);
                        if (M.ie && M.win) {
                            l.style.display = "block"
                        }
                    }
                    if (E) {
                        E(B)
                    }
                }
                a = false
            }
        }
    }
}();
/* File BEGIN: http://fm.cnbc.com/applications/cnbc.com/staticcontent/scripts/libraries/Common/domTools.1.js?t=1450133677 */
var domToolsName = "CNBC_domTools";
window["tracking_" + domToolsName] = {enterFrame: {}, instances: 0, framerate: 30};
;
window[domToolsName] = (function () {
    var docObjectConst = function (elems, fdDOM) {
        var elems = elems || document.body;
        if (elems.length) {
            if (typeof elems === "object") {
                this.collection = Array.prototype.slice.call(elems);
            } else {
                this.collection = [document.getElementById(elems)];
            }
        } else {
            this.collection = [elems];
        }
        this.forceDefaultDOM = fdDOM || false;
        this.self = this.collection[0];
        return this;
    };
    var docObject = function (elems, fdDOM) {
        if (typeof elems === "string" && elems.charAt(0) === "#") {
            return document.getElementById(elems.slice(1)) || document.documentElement;
        }
        return new docObjectConst(elems, fdDOM);
    };
    docObjectConst.prototype.checkCssProps = function (props) {
        var elm = document.documentElement;
        if (typeof props == "string" && !!props.length) {
            if (typeof elm.style[props] == "string") {
                return props;
            }
        } else if (typeof props == "object") {
            var propsLength = props.length, i;
            for (i = 0; i < propsLength; i++) {
                if (typeof elm.style[props[i]] == "string") {
                    return props[i];
                }
            }
        }
        return false;
    };
    docObjectConst.prototype.insertText = function (text) {
        var elm = this.collection[0], txt = text.toString() || "";
        if (document.body.innerText) {
            elm.innerText += txt;
        } else {
            elm.innerHTML += txt.replace(/\&lt;br\&gt;/gi, "\n").replace(/(&lt;([^&gt;]+)&gt;)/gi, "");
        }
        return this;
    };
    docObjectConst.prototype.hex3to6 = function (h4) {
        if (h4.charAt(0) === "#" && h4.length === 4) {
            return "#" + h4.charAt(1) + h4.charAt(1) + h4.charAt(2) + h4.charAt(2) + h4.charAt(3) + h4.charAt(3);
        }
        return h4;
    };
    docObjectConst.prototype.averageHexColor = function (c1, c2) {
        if (c1.charAt(0) === "#" && c2.charAt(0) === "#") {
            if (c1.length === 4) {
                c1 = this.hex3to6(c1);
            }
            if (c2.length === 4) {
                c2 = this.hex3to6(c2);
            }
            var c1_1 = parseInt(c1.substr(1, 2), 16), c1_2 = parseInt(c1.substr(3, 2), 16), c1_3 = parseInt(c1.substr(5, 2), 16), c2_1 = parseInt(c2.substr(1, 2), 16), c2_2 = parseInt(c2.substr(3, 2), 16), c2_3 = parseInt(c2.substr(5, 2), 16), color = [(~~((c1_1 + c2_1) / 2)).toString(16), (~~((c1_2 + c2_2) / 2)).toString(16), (~~((c1_3 + c2_3) / 2)).toString(16)];
            for (var n = 0; n <= 2; n++) {
                if (color[n].length === 1) {
                    color[n] = "0" + color[n];
                }
            }
            return "#" + color.join("");
        } else {
            return "#000000";
        }
    };
    docObjectConst.prototype.rgbToHex = function (rgb) {
        var color = (typeof rgb === "string" && rgb.length > 9) ? rgb : "rgb(0, 0, 0)";
        color = color.slice(4).split(", ");
        color[0] = parseInt(color[0]).toString(16);
        color[1] = parseInt(color[1]).toString(16);
        color[2] = parseInt(color[2]).toString(16);
        return "#" + color.join("");
    };
    docObjectConst.prototype.hexToRgb = function (hex) {
    };
    docObjectConst.prototype.applyCustomStyles = function (CSSrules) {
        if (CSSrules.length && typeof CSSrules === "string") {
            var ssheet = document.getElementById("custom_gui") || document.createElement('style'), sheet = CSSrules || "";
            ssheet.setAttribute("type", "text/css");
            ssheet.id = "custom_gui";
            document.getElementsByTagName('head')[0].appendChild(ssheet);
            if (ssheet.styleSheet) {
                ssheet.styleSheet.cssText = sheet;
            } else {
                ssheet.appendChild(document.createTextNode(sheet));
            }
        }
        return this;
    };
    docObjectConst.prototype.dashToCamelCase = function (dashedString) {
        if (typeof dashedString === "string" && dashedString.length) {
            var dsArr = dashedString.split("-"), dsArrLength = dsArr.length, dsArrN, dsArr_0, newStringCased, n;
            for (n = 1; n < dsArrLength; n++) {
                dsArrN = dsArr[n];
                dsArr_upperFirstChar = dsArrN.charAt(0).toUpperCase();
                dsArr[n] = dsArr_upperFirstChar + dsArrN.slice(1);
            }
            newStringCased = dsArr.join("");
        }
        return newStringCased || "";
    };
    docObjectConst.prototype.getBackgroundColor = function () {
        return this.computedStyle("background-color") || "#000000";
    };
    docObjectConst.prototype.computedStyle = function (styleKey) {
        var elm = this.collection[0], padMarComplete = false;
        if (typeof elm === "object") {
            if (document.defaultView && document.defaultView.getComputedStyle) {
                var elmStyles = document.defaultView.getComputedStyle(elm, '');
                if (styleKey === "padding") {
                    if (!elmStyles.getPropertyValue("padding").length) {
                        padMarComplete = elmStyles.getPropertyValue("padding-top") + " " + elmStyles.getPropertyValue("padding-right") + " "
                        + elmStyles.getPropertyValue("padding-bottom") + " " + elmStyles.getPropertyValue("padding-left");
                    }
                    return padMarComplete || elmStyles.getPropertyValue(styleKey);
                }
            } else if (document.uniqueID && elm.currentStyle) {
                return elm.currentStyle[this.dashToCamelCase(styleKey)];
            }
        }
        return "";
    };
    docObjectConst.prototype.average = function () {
        var numbers = (typeof arguement[0] === "object" && arguement[0].length) ? arguement[0] : arguement;
        var n = 0, average = 0, numbersLength = numbers.length;
        if (numbers.length) {
            for (n = 0; n < numbersLength; n++) {
                numbersN = numbers[n];
                average += (typeof numbersN === "number") ? numbersN : 0;
            }
            return average / n;
        }
        return 0;
    };
    docObjectConst.prototype.protectType = function (data, type) {
        var returnData;
        if (type === "undefined" || type === "object" || type === "boolean" || type === "number" || type === "string" || type === "function") {
            if (typeof data === type) {
                returnData = data;
            } else {
                switch (type) {
                    case"undefined":
                        returnData = null;
                        break;
                    case"object":
                        returnData = {};
                        break;
                    case"boolean":
                        returnData = !!data;
                        break;
                    case"number":
                        returnData = Number(!!data);
                        break;
                    case"string":
                        returnData = (!!data) ? data.toString() : "";
                        break;
                    case"function":
                        returnData = function () {
                        };
                        break;
                    default:
                        returnData = null;
                        break;
                }
            }
        } else {
            returnData = null;
        }
        return returnData;
    };
    docObjectConst.prototype.enterFrame = function (func) {
        var tracking = window["tracking_" + domToolsName];
        tracking.func = func;
        tracking.efFunc = function () {
            var efTracking = window["tracking_" + domToolsName], start = (new Date()).getTime();
            efTracking.func();
            var framerate = (new Date()).getTime() - start;
            window.clearTimeout(efTracking.enterFrame);
            efTracking.enterFrame = window.setTimeout(efTracking.efFunc, framerate + 5);
        };
        tracking.efFunc();
    };
    docObjectConst.prototype.bindEvent = function (type, eventHandle) {
        if (typeof type === "string" && typeof eventHandle === "function") {
            type = type.toLowerCase();
            var elm = (type === "resize" || type === "onresize") ? window : this.collection[0], onType;
            if (type.charAt(0) === "o" && type.charAt(1) === "n") {
                type = type.slice(2);
            }
            onType = "on" + type;
            if (elm.addEventListener) {
                elm.addEventListener(type, eventHandle, false);
            } else if (elm.attachEvent) {
                elm.attachEvent(onType, eventHandle);
            } else {
                elm[onType] = eventHandle;
            }
        }
        return this;
    };
    docObjectConst.prototype.applyRadius = function (csArgu) {
        var supportRadius = this.checkCssProps(['MozBorderRadius', 'borderRadius', 'WebkitBorderRadius']), cornerSize = csArgu;
        var multiVals = (typeof cornerSize === "object" && cornerSize.length) ? true : false, elm = this.collection[0];
        var offSetPadding = 0, ToffSetPadding = 0, BoffSetPadding = 0, elmPadding;
        elmPadding = [parseInt(this.computedStyle("padding-left")), parseInt(this.computedStyle("padding-right"))];
        var expGr = (multiVals) ? [(2 - cornerSize[0] / 25), (2 - cornerSize[1] / 25), (2 - cornerSize[2] / 25), (2 - cornerSize[3] / 25)] : (2 - cornerSize / 25);
        if (!supportRadius || this.forceDefaultDOM) {
            var bgColor = this.getBackgroundColor(), top = [], bottom = [], contWrap;
            var styleSheet = ".CSS2rounded {display:block;background:" + bgColor + " top left repeat fixed " + this.computedStyle("background-image") + ";height:1px;font-size:0;"
                + "border-right:thin solid;border-left:thin solid;overflow:hidden}";
            this.applyCustomStyles(styleSheet);
            var borderColor = this.averageHexColor("#111", bgColor);
            if (multiVals) {
                var cornerSize0 = cornerSize[0], cornerSize1 = cornerSize[1], cornerSize2 = cornerSize[2], cornerSize3 = cornerSize[3];
                var border = "border:" + borderColor + ";border-right-width:1px;border-left-width:1px;";
                while (Math.max(cornerSize0, cornerSize1) > 0.5) {
                    if (!tl && cornerSize0 < .8) {
                        var tl = true;
                        border = "border-left:none 0;border-right:none 0;";
                    }
                    if (!tr && cornerSize1 < .8) {
                        var tr = true;
                        border = "border-left:none 0;border-right:none 0;";
                    }
                    top.push("<div class=\"CSS2rounded\" style=\"" + border + ";margin:0 " + ~~cornerSize0 + "px 0 " + ~~cornerSize1 + "px \"></div>");
                    cornerSize0 /= expGr[0];
                    cornerSize1 /= expGr[1];
                    ToffSetPadding++;
                }
                var border = "border:" + borderColor + ";border-right-width:1px;border-left-width:1px;";
                while (Math.max(cornerSize2, cornerSize3) > 0.5) {
                    if (!bl && cornerSize2 < .8) {
                        var bl = true;
                        border = "border-left:none 0;border-right:none 0;";
                    }
                    if (!br && cornerSize3 < .8) {
                        var br = true;
                        border = "border-left:none 0;border-right:none 0;";
                    }
                    bottom.push("<div class=\"CSS2rounded\" style=\"" + border + ";margin:0 " + ~~cornerSize2 + "px 0 " + ~~cornerSize3 + "px \"></div>");
                    cornerSize2 /= expGr[2];
                    cornerSize3 /= expGr[3];
                    BoffSetPadding++;
                }
            } else {
                while (cornerSize > 0.5) {
                    top.push("<div class=\"CSS2rounded\" style=\"border-color:" + borderColor + ";margin:0 " + ~~cornerSize + "px \"></div>");
                    cornerSize /= expGr;
                    offSetPadding++;
                }
                bottom = top;
            }
            contWrap = this.sandwhich(top.join(""), bottom.reverse().join(""));
            document.getElementById(contWrap).style.padding = ToffSetPadding + "px " + elmPadding[1] + "px " + BoffSetPadding + "px " + elmPadding[0] + "px";
            elm.style.padding = "0";
        } else if (multiVals) {
            elm.style[supportRadius] = cornerSize.join("px ") + "px";
        }
        return this;
    };
    docObjectConst.prototype.applyShadow = function (bsArgu) {
        var nativeShadow = this.checkCssProps(['MozBoxShadow', 'boxShadow', 'WebkitBoxShadow']), nativeFilter = this.checkCssProps('filter'), shadowStrength = bsArgu || 4, elm = this.collection[0];
        if (!nativeShadow && nativeFilter) {
            var shadDiv = document.createElement("DIV");
            shadDiv.className = "playerRollShadow";
            shadDiv.style[nativeFilter] = "progid:DXImageTransform.Microsoft.Blur(pixelRadius=" + shadowStrength + ")";
            elm.parentNode.insertBefore(shadDiv, elm);
        }
        return this;
    };
    docObjectConst.prototype.randomIdendifier = function (srt) {
        var startString = (typeof str === "string" && str.length) ? srt : "cnbc_";
        return startString + Math.floor(Math.random() * 10000000000);
    };
    docObjectConst.prototype.sandwhich = function (pre, app, dynId) {
        var elm = this.collection[0], wrapDiv = document.createElement("DIV");
        var id = dynId || this.randomIdendifier("sandwhich");
        wrapDiv.style.backgroundColor = this.getBackgroundColor();
        wrapDiv.innerHTML = elm.innerHTML;
        wrapDiv.id = id;
        wrapDiv.className = id;
        elm.innerHTML = (pre || "");
        elm.style.backgroundColor = "transparent";
        elm.appendChild(wrapDiv);
        elm.innerHTML += (app || "")
        return (dynId) ? this : id;
    };
    docObjectConst.prototype.wrap = function (dynId, erase) {
        var elm = this.collection[0], wrapDiv = document.createElement("DIV");
        var id = dynId || this.randomIdendifier("wrap"), cNode, elmParent = elm.parentNode;
        if (!erase) {
            cNode = elm.cloneNode(true);
            wrapDiv.appendChild(cNode);
        }
        wrapDiv.id = id;
        wrapDiv.className = dynId || this.randomIdendifier("wrap");
        elmParent.insertBefore(wrapDiv, elm);
        elmParent.removeChild(elm);
        this.collection[0] = wrapDiv;
        return (dynId) ? this : id;
    };
    docObject.func = docObjectConst.prototype;
    return docObject;
})();
/* File BEGIN: http://fm.cnbc.com/applications/cnbc.com/staticcontent/scripts/libraries/PageState/pagestate.1.js?t=1450133677 */
function CNBC_PageState() {
};
(function ($) {
    CNBC_PageState.prototype._callback = null;
    CNBC_PageState.prototype._context = null;
    CNBC_PageState.prototype._forceCallback = false;
    CNBC_PageState.prototype._isJson = false;
    CNBC_PageState.prototype.init = function (args) {
        args = args || {};
        this._setCallback(args);
        this._initEvent();
        if (!CNBC_Common.isNull(this.getHash()) || this._forceCallback) {
            this.initCallback();
            this._forceCallback = false;
        }
    };
    CNBC_PageState.prototype.getHash = function () {
        var hash = $.base64Decode(window.location.hash).replace(/#/, '');
        if (!CNBC_Common.isNull(hash)) {
            return (this._isJson) ? JSON.parse(hash) : hash;
        }
    };
    CNBC_PageState.prototype.setHash = function (data) {
        if (!CNBC_Common.isNull(data)) {
            window.location.hash = this.createHash(data);
        }
    };
    CNBC_PageState.prototype.createHash = function (data) {
        var hash = data;
        if (!CNBC_Common.isNull(data)) {
            if (typeof data === 'object') {
                this._isJson = true;
                hash = JSON.stringify(data);
            }
            return $.base64Encode(hash);
        }
    };
    CNBC_PageState.prototype._setCallback = function (args) {
        if (args.callback) {
            this._callback = args.callback;
            if (args.context) {
                this._context = args.context;
            }
        } else {
        }
        ;
        if (args.forceCallback) {
            this._forceCallback = args.forceCallback;
        }
        ;
        if (args.isJson) {
            this._isJson = args.isJson;
        }
        ;
    };
    CNBC_PageState.prototype.initCallback = function () {
        var hash = this.getHash();
        if (!CNBC_Common.isNull(hash) || this._forceCallback) {
            this._callback.call(this._context, hash);
        }
    };
    CNBC_PageState.prototype._initEvent = function () {
        var self = this._context;
        $(window).hashchange(function () {
            self.pageState.initCallback();
        });
    };
})(jQuery);
/* File BEGIN: http://fm.cnbc.com/applications/cnbc.com/staticcontent/scripts/libraries/SearchBox/searchbox.1.js?t=1450133677 */
function CNBC_Searchbox() {
};
(function ($) {
    CNBC_Searchbox.prototype._defaultText = 'Enter Keywords';
    CNBC_Searchbox.prototype._inputSelector;
    CNBC_Searchbox.prototype._buttonSelector;
    CNBC_Searchbox.prototype._searchURL;
    CNBC_Searchbox.prototype._callback = null;
    CNBC_Searchbox.prototype._context = null;
    CNBC_Searchbox.prototype._inputCallback = null;
    CNBC_Searchbox.prototype._keyword = null;
    CNBC_Searchbox.prototype._flag = false;
    CNBC_Searchbox.prototype.init = function (args) {
        args = args || {};
        this._setCallback(args);
        this._setVariables(args);
        if (this._flag) {
            alert("Missing required field(s)");
        } else {
            this.resetInput();
            this.initEvents();
            this.initSubmitButton();
        }
    };
    CNBC_Searchbox.prototype._setCallback = function (args) {
        if (args.callback) {
            this._callback = args.callback;
            if (args.context) {
                this._context = args.context;
            }
            ;
            if (args.inputCallback) {
                this._inputCallback = args.inputCallback;
            }
            ;
        }
    };
    CNBC_Searchbox.prototype._setVariables = function (args) {
        if (args.id) {
            this._inputSelector = args.id;
        } else {
            this._flag = true;
        }
        ;
        if (args.button) {
            this._buttonSelector = args.button;
        } else {
            this._flag = true;
        }
        ;
        if (args.defaultText) {
            this._defaultText = args.defaultText;
        }
        ;
        if (args.url) {
            this._searchURL = args.url;
        } else if (!args.callback) {
            this._flag = true;
        }
        ;
    };
    CNBC_Searchbox.prototype.initEvents = function ($input) {
        var self = this;
        var $input = this.getKeywordInput();
        $input.bind('focus', function () {
            CNBC_Common.focus($(this), self._defaultText);
        }).bind('blur', function () {
            CNBC_Common.blur($(this), self._defaultText, 1);
        }).bind('keyup', function (e) {
            if (self._inputCallback) {
                self._inputCallback.call(self._context, e);
            } else {
                if (e.keyCode == 13) {
                    self.getButtonSubmit().click();
                }
            }
        });
    };
    CNBC_Searchbox.prototype.initSubmitButton = function () {
        var self = this;
        this.getButtonSubmit().bind('click', function (e) {
            e.preventDefault();
            var val = self.getKeywordInput().val();
            if (self._callback) {
                if (!CNBC_Common.checkForDefault(val, self._defaultText, 1)) {
                    self._callback.call(self._context, e);
                }
            } else {
                if (!CNBC_Common.checkForDefault(val, self._defaultText, 1)) {
                    var url = self._searchURL + encodeURIComponent(val);
                    CNBC_Common.gotoPage(url);
                }
            }
        });
    };
    CNBC_Searchbox.prototype.resetInput = function () {
        this.getKeywordInput().val(this._defaultText).blur();
    };
    CNBC_Searchbox.prototype.getKeywordInput = function () {
        if (!this._$keywordInput) {
            this._$keywordInput = $('#' + this._inputSelector);
        }
        ;
        return this._$keywordInput;
    };
    CNBC_Searchbox.prototype.getButtonSubmit = function () {
        if (!this._$submitButton) {
            this._$submitButton = $('#' + this._buttonSelector);
        }
        ;
        return this._$submitButton;
    };
})(jQuery);
/* File BEGIN: http://fm.cnbc.com/applications/cnbc.com/staticcontent/scripts/libraries/SymbolLookup/lookup.1.js?t=1450133677 */
function CNBC_Lookup() {
};
(function ($) {
    CNBC_Lookup._initCount = 0;
    CNBC_Lookup._hoverClass = 'hover';
    CNBC_Lookup._hiddenClass = 'hidden';
    CNBC_Lookup.prototype._defaultText = 'Search Quotes, News & Video';
    CNBC_Lookup.prototype._noResultsTxt = 'There are no results for ';
    CNBC_Lookup.prototype._inputSelector = 'cnbc_hdqbox';
    CNBC_Lookup.prototype._buttonSelector = 'btn-adv-lookup';
    CNBC_Lookup.prototype._lookupURL = 'http://symlookup.cnbc.com/symlookup.do';
    CNBC_Lookup.prototype._advancedURL = 'http://www.cnbc.com/id/15837272?q=';
    CNBC_Lookup.prototype._quoteURL = 'http://data.cnbc.com/quotes/';
    CNBC_Lookup.prototype._searchUrl = 'http://search.cnbc.com/main.do?target=all&categories=exclude&partnerId=2000&keywords=';
    CNBC_Lookup.prototype._resultPositionSet = false;
    CNBC_Lookup.prototype._resetPosition = false;
    CNBC_Lookup.prototype._timeoutIDs = [];
    CNBC_Lookup.prototype._maxResults = 10;
    CNBC_Lookup.prototype._keyword = null;
    CNBC_Lookup.prototype._defaultKeyword = null;
    CNBC_Lookup.prototype._multiSupport = true;
    CNBC_Lookup.prototype._isAdvanced = 0;
    CNBC_Lookup.prototype._callback = null;
    CNBC_Lookup.prototype._context = null;
    CNBC_Lookup.prototype._callbackResultUpdate = null;
    CNBC_Lookup.prototype._keepPageState = false;
    CNBC_Lookup.prototype._elements = [];
    CNBC_Lookup.prototype._resultContainer = null;
    CNBC_Lookup.prototype._jsonpCallback = 'symbolLookUp';
    CNBC_Lookup.prototype._showPagination = true;
    CNBC_Lookup.prototype.init = function (args) {
        args = args || {};
        this._setCallback(args);
        this._setOverrides(args);
        this.setResultContainer(args.resultContainer);
        CNBC_Lookup._initCount = CNBC_Lookup._initCount++;
        var $input = $('#' + this._inputSelector);
        if (args.advanced) {
            this._setMultiSupport(false);
            this._initAdvanced($input);
        } else if ($input.attr('type') != 'hidden') {
            this._setMultiSupport(args.multi);
            this._initSuggestiveEvents();
        } else {
        }
        ;
        if (!this.pageState) {
            this._initAutoLookup();
        }
    };
    CNBC_Lookup.prototype.reset = function () {
        var $input = $('#' + this._inputSelector);
        if ($input.val() != this._defaultText) {
            $input.val('');
        }
        this.hide();
        this._keyword = '';
    };
    CNBC_Lookup.prototype._setCallback = function (args) {
        this._context = this;
        if (args.callback) {
            this._callback = args.callback;
            if (args.context) {
                this._context = args.context;
            }
        }
        if (args.callbackResultUpdate) {
            this._callbackResultUpdate = args.callbackResultUpdate;
        }
    };
    CNBC_Lookup.prototype._setMultiSupport = function (support) {
        this._multiSupport = (support || support == false) ? support : true;
    };
    CNBC_Lookup.prototype._setOverrides = function (args) {
        if (args.id) {
            this._inputSelector = args.id;
        }
        ;
        if (args.button) {
            this._buttonSelector = args.button;
        }
        ;
        if (args.max) {
            this._maxResults = args.max;
        }
        ;
        if (args.pagestate) {
            this._keepPageState = args.pagestate;
        }
        ;
        if (args.positionReset) {
            this._resetPosition = args.positionReset;
        }
        ;
        if (args.defaultText) {
            this._defaultText = args.defaultText;
        }
        ;
        if (args.advancedURL) {
            this._advancedURL = args.advancedURL;
        }
        ;
        if (args.lookupURL) {
            this._lookupURL = args.lookupURL;
        }
        ;
        if (args.quoteURL) {
            this._quoteURL = args.quoteURL;
        }
        ;
        if (args.searchUrl) {
            this._searchUrl = args.searchUrl;
        }
        ;
        if (args.showPagination !== undefined) {
            this._showPagination = args.showPagination;
        }
        ;
    };
    CNBC_Lookup.prototype._initAdvanced = function ($input) {
        this._isAdvanced = 1;
        this._initAdvancedEvents($input);
        if (this._keepPageState) {
            this.pageState = new CNBC_PageState();
            this.pageState.init({callback: this.updateState, context: this._context});
        }
    };
    CNBC_Lookup.prototype.setResultContainer = function (container) {
        var type = typeof container;
        if (type == 'string') {
            this._resultContainer = $('#' + container);
        } else if (type == 'object' && container.length == 1) {
            this._resultContainer = container;
        } else {
            this._resultContainer = this.getResultDiv();
        }
    };
    CNBC_Lookup.prototype._initAutoLookup = function () {
        var val = this.getElement('#' + this._inputSelector).val();
        if (!CNBC_Common.checkForDefault(val, this._defaultText, 1)) {
            this.setKeyword(val);
            this.initLoadAdvanced();
        }
    };
    CNBC_Lookup.prototype._initSuggestiveEvents = function () {
        var cnbc_searchbox = new CNBC_Searchbox();
        cnbc_searchbox.init({
            defaultText: this._defaultText,
            id: this._inputSelector,
            button: this._buttonSelector,
            inputCallback: this.initLoad,
            callback: this._loadSubmit,
            context: this._context
        });
        this._initAutoCloseEvents();
    };
    CNBC_Lookup.prototype._loadSubmit = function (e) {
        var self = this;
        e.preventDefault();
        var val = self.getElement('#' + this._inputSelector).val();
        self.hide();
        if (self._callback) {
            if (!CNBC_Common.checkForDefault(val, self._defaultText, 1)) {
                self._callback.call(self._context, e);
            }
        } else {
            var url = self._advancedURL;
            if (!CNBC_Common.checkForDefault(val, self._defaultText, 1)) {
                url = self._quoteURL + val;
            }
            var isEmailAddress = CNBC_Utils.isEmailAddress(val);
            if (!isEmailAddress) {
                CNBC_Common.gotoPage(url);
            }
        }
    };
    CNBC_Lookup.prototype._initAdvancedEvents = function ($input) {
        var cnbc_advSearchbox = new CNBC_Searchbox();
        cnbc_advSearchbox.init({
            defaultText: this._defaultText,
            id: this._inputSelector,
            button: this._buttonSelector,
            callback: this.initLoadAdvanced,
            context: this._context
        });
    };
    CNBC_Lookup.prototype._initAutoCloseEvents = function () {
        var self = this;
        var $div = this._resultContainer;
        var $div_inputSelector = $('#' + this._inputSelector);
        $div.bind('mouseover', function () {
            self.resetAutoClose();
        }).bind('mouseout', function () {
            self.initHide(self);
        }).bind('click', function () {
            self.hide(self);
        });
        $div_inputSelector.bind('mouseout', function () {
            self.initHide(self);
        });
    };
    CNBC_Lookup.prototype._initResultEvents = function ($container) {
        $container = ($container && $container.length == 1) ? $container : this._resultContainer;
        var self = this;
        $('tbody tr', $container).bind('click', function (e) {
            if (self._callback) {
                self._callback.call(self._context, e);
            } else {
                self.gotoPage(e);
            }
        }).bind('mouseover mouseout', function (e) {
            self.hover(e);
        });
    };
    CNBC_Lookup.prototype.getElement = function (selector, property) {
        var prop = '_$';
        prop += property || selector;
        if (!this._elements[prop]) {
            this._elements[prop] = $(selector);
        }
        return this._elements[prop];
    };
    CNBC_Lookup.prototype.getElContainer = function () {
        if (!this._$containerDiv) {
            this._$containerDiv = this.getLookupContainer(this.getElement('#' + this._inputSelector));
        }
        return this._$containerDiv;
    };
    CNBC_Lookup.prototype.getLookupContainer = function ($el) {
        var $parent = $el.parent();
        while ($parent.length == 1 && !$parent.hasClass('lookup-container') && $parent[0].tagName != 'BODY') {
            $parent = $parent.parent();
        }
        return $parent;
    };
    CNBC_Lookup.prototype.getResultDiv = function () {
        if (!this._$resultDiv) {
            this._$resultDiv = $('div.lookup-results', this.getElContainer());
        }
        ;
        return this._$resultDiv;
    };
    CNBC_Lookup.prototype.getResultTable = function () {
        if (!this._$resultTable) {
            var resultDiv = this._resultContainer;
            this._$resultTable = $('table', resultDiv);
            if (this._$resultTable.length == 0) {
                resultDiv.append('<table></table>');
                this._$resultTable = $('table', resultDiv);
            }
        }
        return this._$resultTable;
    };
    CNBC_Lookup.prototype._getRow = function (target) {
        var $el = $(target);
        while ($el[0].tagName != 'TR') {
            $el = $el.parent();
        }
        ;
        return $el;
    };
    CNBC_Lookup.prototype.getSymbol = function (el) {
        var $el = $(el);
        if ($el.hasClass('btn') || $el.parent('a.btn').length == 1 || el.tagName == 'INPUT') {
            return this._keyword;
        } else {
            return this._getRow(el).attr('symbol');
        }
    };
    CNBC_Lookup.prototype.hover = function (e) {
        var $el = this._getRow(e.target);
        if ($el.hasClass(CNBC_Lookup._hoverClass)) {
            $el.removeClass(CNBC_Lookup._hoverClass);
        } else {
            var $parent = this._resultContainer;
            $('tbody tr', $parent).removeClass(CNBC_Lookup._hoverClass);
            $el.addClass(CNBC_Lookup._hoverClass);
        }
    };
    CNBC_Lookup.prototype.gotoPage = function (e) {
        var sym = this.getSymbol(this._getRow(e.target));
        if (sym && sym != "") {
            CNBC_Common.gotoPage(this._quoteURL + sym);
        }
    };
    CNBC_Lookup.prototype.getLastSymbol = function () {
        var str = this._keyword;
        if (!CNBC_Common.isNull(str)) {
            var strArr = str.split(',');
            if (strArr && strArr.length > 1) {
                str = strArr[strArr.length - 1];
            }
        }
        ;
        return $.trim(str);
    };
    CNBC_Lookup.prototype.setKeyword = function (val) {
        this._keyword = val || this.getElement('#' + this._inputSelector).val();
    };
    CNBC_Lookup.prototype.initLoad = function (e) {
        var code = e.keyCode;
        this.setKeyword();
        if (code == 13) {
            this.handleEnterKey();
        } else if (code == 188) {
            this.hide();
        } else if (code == 27) {
            this.reset();
        } else if (code == 38 || code == 40) {
            this.highlightRow(code == 40);
        } else if ((code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 187 && code <= 192) || code == 8 || code == 46 || code == 222) {
            var sym = this.getLastSymbol();
            if (CNBC_Common.isNull(sym)) {
                this.hide();
            } else {
                this.load(sym);
            }
        }
    };
    CNBC_Lookup.prototype.handleEnterKey = function () {
        var isEmailAddress = CNBC_Utils.isEmailAddress(this._keyword);
        if (isEmailAddress) {
            return;
        }
        this.hide();
        var $rows = $('tr', this.getResultTable());
        var $selected = $rows.filter('.' + CNBC_Lookup._hoverClass);
        var isHighlighted = ($selected.length == 1);
        if (isHighlighted) {
            var theSymbol = $selected.attr('symbol');
            if (!theSymbol) {
                var theUrl = $selected.find('a').attr('href');
                if (theUrl) {
                    CNBC_Common.gotoPage(theUrl);
                    return;
                }
            }
        }
        if (!CNBC_Common.isNull(this._keyword)) {
            if (this._callback) {
                this._callback.call(this._context, e);
            } else {
                CNBC_Common.gotoPage(this._quoteURL + encodeURIComponent(this._keyword));
            }
        }
    };
    CNBC_Lookup.prototype.initLoadAdvanced = function () {
        this._lastPage = 1;
        this._paging = null;
        this.loadAdvanced(1);
    };
    CNBC_Lookup.prototype.loadAdvanced = function (page) {
        this._currentPage = Number(page);
        var val = this.getElement('#' + this._inputSelector).val();
        this.load(val);
    };
    CNBC_Lookup.prototype.load = function (keyword) {
        var self = this;
        self._keyword = keyword;
        if (keyword && keyword != "" && keyword != this._defaultText) {
            var args = self.setLoadArgs(keyword);
            $.ajax({
                url: self._lookupURL,
                type: 'get',
                dataType: 'jsonp',
                jsonpCallback: self._jsonpCallback + CNBC_Lookup._initCount,
                cache: true,
                data: args,
                success: function (json) {
                    self.update(json);
                },
                error: null
            });
        }
    };
    CNBC_Lookup.prototype.setLoadArgs = function (keyword) {
        var args = {output: 'jsonp', prefix: keyword};
        if (this._isAdvanced) {
            args.pgok = 1;
            args.pgsize = this._perPage;
            args.pg = this._currentPage;
        } else {
            args.maxresults = this._maxResults;
        }
        ;
        return args;
    };
    CNBC_Lookup.prototype.position = function ($el) {
        if (!this._resultPositionSet) {
            var $input = this.getElement('#' + this._inputSelector);
            var $div = $el || this._resultContainer;
            var height = $input.height();
            var offset = $input.offset();
            var position = $input.position();
            $div.css({top: offset.top + (height + 9), left: position.left});
            if (!this._resetPosition) {
                this._resultPositionSet = true;
            }
        }
    };
    CNBC_Lookup.prototype.resetAutoClose = function () {
        for (var i = 0, len = this._timeoutIDs.length; i < len; ++i) {
            clearTimeout(this._timeoutIDs[i]);
        }
        this._timeoutIDs = [];
    };
    CNBC_Lookup.prototype.initHide = function (self) {
        self = self || this;
        var id = setTimeout(function () {
            self.hide(self);
        }, 2000);
        this._timeoutIDs.push(id);
    };
    CNBC_Lookup.prototype.hide = function (self) {
        self = self || this;
        self.getResultTable().empty();
        self._resultContainer.addClass('hide');
    };
    CNBC_Lookup.prototype.show = function ($div) {
        this.resetAutoClose();
        var $div = $div || this._resultContainer;
        $div.removeClass('hide');
    };
    CNBC_Lookup.prototype.resetInput = function () {
        this.getElement('#' + this._inputSelector).val(this._defaultText).blur();
    };
    CNBC_Lookup.prototype.setTotals = function (obj) {
        this._totals = obj;
    };
    CNBC_Lookup.prototype.update = function (result) {
        if (this._isAdvanced) {
            this.updateAdvanced(result);
        } else {
            this.updateSuggestive(result);
        }
    };
    CNBC_Lookup.prototype.highlightTerm = function (str) {
        if (str != "" && typeof str === 'string') {
            try {
                var strMatch = (this._isAdvanced) ? this.getElement('#' + this._inputSelector).val() : this.getLastSymbol();
                var regex = new RegExp(strMatch, "i");
                return str.replace(regex, '<span class="hlight">$&</span>');
            } catch (e) {
            }
        }
        return str;
    };
    CNBC_Lookup.prototype.updateSuggestive = function (result) {
        if (result && result.length > 0) {
            var $div = this._resultContainer;
            this.position($div);
            this.getResultTable().html(this.renderTableData(result));
            this.show();
            this._initResultEvents();
        } else {
            this.hide();
        }
    };
    CNBC_Lookup.prototype.highlightRow = function (desc) {
        var $rows = $('tr', this.getResultTable());
        var $selected = $rows.filter('.' + CNBC_Lookup._hoverClass);
        var $nextSelect = $rows.first();
        var isHighlighted = ($selected.length == 1) ? true : false;
        if ($rows.length > 0) {
            if (isHighlighted) {
                if (desc) {
                    $nextSelect = $selected.next();
                    if ($nextSelect.length == 0) {
                        $nextSelect = $rows.first();
                    }
                } else {
                    $nextSelect = $selected.prev();
                    if ($nextSelect.length == 0) {
                        $nextSelect = $rows.last();
                    }
                }
            }
            $rows.removeClass(CNBC_Lookup._hoverClass);
            $nextSelect.addClass(CNBC_Lookup._hoverClass);
            this.updateSearchTerm($nextSelect.attr('symbol'));
        }
    };
    CNBC_Lookup.prototype.updateSearchTerm = function (str) {
        var theKeyword = str || this._defaultKeyword;
        var text = (this._multiSupport) ? ', ' : '';
        this.getElement('#' + this._inputSelector).val(theKeyword + text);
        this.setKeyword();
    };
    CNBC_Lookup.prototype.updateAdvanced = function (result) {
        var $div = this._resultContainer;
        this.setTotals(result[0]);
        if (result && result.length > 1) {
            if (this._callbackResultUpdate) {
                this._callbackResultUpdate.call(this, result.length);
            }
            if (CNBC_Common.isNull(this._paging)) {
                this.renderTable($div, result);
            } else {
                this.updateTable($div, result);
                this._initResultEvents();
            }
        } else {
            $div.html(this.renderNoResults(this.getElement('#' + this._inputSelector).val()));
        }
    };
    CNBC_Lookup.prototype.renderTable = function ($el, data) {
        var html = ['<table cellspacing="0">'];
        html.push('<thead>');
        html.push('<tr>');
        html.push('<th>Symbol</th>');
        html.push('<th>Name</th>');
        html.push('<th>Exchange</th>');
        html.push('<th>Country</th>');
        html.push('</tr>');
        html.push('</thead>');
        html.push(this.renderTableData(data));
        html.push('</table>');
        $el.html(html.join(''));
        if (this._showPagination) {
            var pagination = '<div id="pagination"></div>';
            $pagination = $(pagination);
            $el.append($pagination);
        }
        this._initResultEvents($el);
        if (this._showPagination) {
            this.initPagination($pagination);
        }
    };
    CNBC_Lookup.prototype.updateTable = function ($el, data) {
        this._paging.updatePaging(this._totals.CurrentPage);
        var $table = $('table', $el);
        $('tbody', $table).remove();
        $table.append(this.renderTableData(data));
    };
    CNBC_Lookup.prototype.initPagination = function ($el) {
        this._paging = new CNBC_Pagination();
        var args = {
            container: $el,
            context: this,
            callback: this.loadAdvanced,
            total: this._totals.TotalMatchAvailable,
            start: this._currentPage
        };
        this._paging.init(args);
    };
    CNBC_Lookup.prototype.renderTableData = function (result) {
        var obj, sym, country, url, html;
        this._defaultKeyword = this._keyword;
        html = ['<tbody>'];
        html.push('<tr><td colspan="3" class="nonResult">');
        url = this._searchUrl + encodeURIComponent(this._keyword);
        html.push('<a href="' + url + '">Search News &amp; Video for: ' + this.htmlEntities(this._keyword) + '</a>');
        html.push('</td></tr>');
        for (var i = 1, len = result.length; i < len; ++i) {
            obj = result[i];
            sym = obj.symbolName;
            country = obj.countryCode;
            html.push('<tr symbol="' + sym + '">');
            html.push('<td class="col-symbol">');
            html.push(this.highlightTerm(sym));
            html.push('</td>');
            html.push('<td>');
            html.push(this.highlightTerm(obj.companyName));
            html.push('</td>');
            if (this._isAdvanced) {
                html.push('<td class="col-exchange">' + obj.exchangeName + '</td>');
            }
            html.push('<td class="last">');
            html.push(CNBC_Common.validateStr(country));
            html.push('</td>');
            html.push('</tr>');
        }
        html.push('<tr><td colspan="3" class="nonResult">');
        url = this._advancedURL + encodeURIComponent(this._keyword) + '&nq=1';
        html.push('<a href="' + url + '">View All Quote Results for: ' + this.htmlEntities(this._keyword) + '</a>');
        html.push('</td></tr>');
        html.push('</tbody>');
        return html.join('');
    };
    CNBC_Lookup.prototype._escapeRegEx = /[\u00A0-\u9999<>\&]/gm;
    CNBC_Lookup.prototype._charAsEntity = function (c) {
        return '&#' + c.charCodeAt(0) + ';';
    };
    CNBC_Lookup.prototype.htmlEntities = function (s) {
        return s.replace(this._escapeRegEx, this._charAsEntity);
    };
    CNBC_Lookup.prototype.renderNoResults = function (str) {
        return '<div class="error">' + this._noResultsTxt + '"' + escape(str) + '"</div>';
    };
    CNBC_Lookup.prototype.updateState = function () {
        var hash = String(this.pageState.getHash()).split('-');
        this.getElement('#' + this._inputSelector).val(hash[0]);
        if (hash.length > 1) {
            this.loadAdvanced(hash[1]);
        }
    };
})(jQuery);
/* File BEGIN: http://fm.cnbc.com/applications/cnbc.com/staticcontent/scripts/libraries/Pagination/pagination.1.js?t=1450133677 */
function CNBC_Pagination() {
};
(function ($) {
    CNBC_Pagination._hiddenClass = 'hidden';
    CNBC_Pagination._prevClass = 'leftPagCol';
    CNBC_Pagination._nextClass = 'rightPagCol';
    CNBC_Pagination._pageNumClass = 'centerPagCol';
    CNBC_Pagination.prototype._showNumItems = false;
    CNBC_Pagination.prototype._totalItems;
    CNBC_Pagination.prototype._perPage = 20;
    CNBC_Pagination.prototype._currentPage = 1;
    CNBC_Pagination.prototype._initialPage = 1;
    CNBC_Pagination.prototype._lastPage = 1;
    CNBC_Pagination.prototype._maxPages = 5;
    CNBC_Pagination.prototype._context = null;
    CNBC_Pagination.prototype._callback = null;
    CNBC_Pagination.prototype._container = null;
    CNBC_Pagination.prototype._divider = '&nbsp;|&nbsp;';
    CNBC_Pagination.prototype._textLinks = ['&laquo;&nbsp;First', '&laquo;&nbsp;Previous', 'Next&nbsp;&raquo;', 'Last&nbsp;&raquo;'];
    CNBC_Pagination.prototype.init = function (args) {
        args = args || {};
        if (args.callback != null && args.container != null && args.total != null) {
            this.setContainer(args.container);
            if (Number(args.total) > 0) {
                this.setOptionalOverrides(args);
                this.setTotals(args.total);
                this.setCallback(args.callback, args.context);
                this.render();
                this.toggleAdvanceLinks();
                this.initEvents();
            } else {
                this._container.empty();
            }
        } else {
        }
        ;
    };
    CNBC_Pagination.prototype.setHistoryEvents = function () {
        if (window.CNBC_Settings && CNBC_Settings.disableAjaxPagination) {
            return false;
        }
        ;
        var self = this;
        if (window.history) {
            self._initialPage = self._currentPage;
            if (history.state && history.state.page) {
                self.initNewPage(history.state.page);
            }
            ;
            $(window).on('popstate', function () {
                if (history.state && history.state.page) {
                    self.initNewPage(history.state.page);
                } else {
                    self.initNewPage(self._initialPage);
                }
                ;
            });
        }
        ;
    };
    CNBC_Pagination.prototype.historyAdd = function (index) {
        if (window.CNBC_Settings && CNBC_Settings.disableAjaxPagination) {
            return false;
        }
        ;
        if (window.history) {
            if (history.state && history.state.page && history.state.page == index || !window.history.state && this._initialPage == this._currentPage) {
                return false;
            }
            ;
            history.pushState({'page': index}, '', '');
        }
        ;
    };
    CNBC_Pagination.prototype.setTotals = function (total) {
        this._totalItems = total;
        this.calculatePages();
        this.updateLastLink();
    };
    CNBC_Pagination.prototype.setCallback = function (callback, context) {
        if (context) {
            this._context = context;
        }
        ;
        this._callback = callback;
    };
    CNBC_Pagination.prototype.setContainer = function (container) {
        var type = typeof container;
        if (type == 'string') {
            this._container = $('#' + container);
        } else if (type == 'object' && container.length == 1) {
            this._container = container;
        } else {
            this._container = $(container);
        }
    };
    CNBC_Pagination.prototype.setCurrentPage = function (index) {
        this._currentPage = Number(index);
    };
    CNBC_Pagination.prototype.setOptionalOverrides = function (args) {
        var textLinks = args.textLinks;
        if (textLinks && textLinks instanceof Array && textLinks.length == 4) {
            this._textLinks = textLinks;
        }
        ;
        var divider = args.divider;
        if (divider && typeof divider == 'string') {
            this._divider = divider;
        }
        ;
        if (args.maxPages) {
            this._maxPages = args.maxPages;
        }
        ;
        if (args.start) {
            this.setCurrentPage(args.start);
        }
        ;
        if (args.perPage) {
            this._perPage = args.perPage;
        }
        ;
        if (args.showItems) {
            this._showNumItems = args.showItems;
        }
        ;
    };
    CNBC_Pagination.prototype.initEvents = function () {
        this.addPageLinkEvents();
        this.addAdvanceLinkEvents();
    }
    CNBC_Pagination.prototype.getElLeftCol = function () {
        if (!this._$leftCol) {
            this._$leftCol = $('div.' + CNBC_Pagination._prevClass, this._container);
        }
        return this._$leftCol;
    }
    CNBC_Pagination.prototype.getElRightCol = function () {
        if (!this._$rightCol) {
            this._$rightCol = $('div.' + CNBC_Pagination._nextClass, this._container);
        }
        ;
        return this._$rightCol;
    };
    CNBC_Pagination.prototype.addPageLinkEvents = function () {
        var self = this;
        $('div.centerPagCol a', this._container).bind('click', function (e) {
            e.preventDefault();
            self.initNewPage($(this).attr('page'));
        });
    }
    CNBC_Pagination.prototype.addAdvanceLinkEvents = function () {
        var self = this;
        $('div.quickPagJump a', this._container).bind('click', function (e) {
            e.preventDefault();
            var page = $(this).attr('page');
            if (page == '+') {
                page = Number(self._currentPage) + 1;
            } else if (page == '-') {
                page = Number(self._currentPage) - 1;
            }
            self.initNewPage(page);
        });
    };
    CNBC_Pagination.prototype.initNewPage = function (index) {
        this.setCurrentPage(index);
        this._callback.call(this._context, index);
    };
    CNBC_Pagination.prototype.render = function () {
        var html = ['<div class="paging-container"><div class="pagination contain">'];
        html.push('<div class="quickPagJump ' + CNBC_Pagination._prevClass + '">');
        html.push('<a page="1" href="javascript:void(0);">' + this._textLinks[0] + '</a>' + this._divider);
        html.push('<a page="-" href="javascript:void(0);">' + this._textLinks[1] + '</a>');
        html.push('</div>');
        html.push('<div class="' + CNBC_Pagination._pageNumClass + '">')
        html.push(this.renderPageLinks());
        html.push('</div>');
        html.push('<div class="quickPagJump ' + CNBC_Pagination._nextClass + '">');
        html.push('<a page="+" href="javascript:void(0);">' + this._textLinks[2] + '</a>' + this._divider);
        html.push('<a class="lastLink" page="' + this._lastPage + '" href="javascript:void(0);">' + this._textLinks[3] + '</a>');
        html.push('</div>');
        html.push('</div></div>');
        this._container.empty();
        this._container.append(html.join(''));
    };
    CNBC_Pagination.prototype.updatePaging = function (index) {
        if (index != this._currentPage) {
            this.setCurrentPage(index);
        }
        ;
        this.toggleAdvanceLinks();
        $('div.' + CNBC_Pagination._pageNumClass, this._container).html(this.renderPageLinks());
        this.addPageLinkEvents();
    };
    CNBC_Pagination.prototype.renderPageLinks = function () {
        var html = [];
        var start = this.calculateStart();
        var end = this.calculateEnd(start);
        for (var i = start; i <= end; ++i) {
            html.push(this.renderLink(i, end));
        }
        html.push(this.renderTotalCount());
        return html.join('');
    };
    CNBC_Pagination.prototype.calculatePages = function () {
        var pages = this._totalItems / this._perPage;
        if (!pages.isNaN) {
            this._lastPage = Math.ceil(pages);
        }
    }
    CNBC_Pagination.prototype.calculateStart = function () {
        var index = 1;
        var start = index;
        var endCheck = this._lastPage - this._maxPages + 1;
        if (this._currentPage > index) {
            if (this._currentPage + this._maxPages >= this._lastPage) {
                index = (this._currentPage + this._maxPages) - this._lastPage;
            }
            start = this._currentPage - index;
        }
        ;
        if (this._currentPage > endCheck) {
            start = endCheck;
        }
        ;
        if (this._currentPage == start) {
            start -= 1;
        }
        ;
        if (start <= 0) {
            start = 1;
        }
        ;
        return start;
    };
    CNBC_Pagination.prototype.calculateEnd = function (start) {
        var end = this._lastPage;
        if (start + this._maxPages <= this._lastPage) {
            end = start + this._maxPages - 1;
        }
        ;
        return end;
    };
    CNBC_Pagination.prototype.updateLastLink = function () {
        $('a.lastLink', this._container).attr('page', this._lastPage);
    }
    CNBC_Pagination.prototype.renderLink = function (page, end) {
        var str;
        if (page == this._currentPage) {
            str = '<span>' + page + '</span>';
        } else {
            str = this.renderHrefLink(page);
        }
        ;
        if (page != end) {
            str += this._divider;
        }
        ;
        return str;
    };
    CNBC_Pagination.prototype.renderHrefLink = function (index) {
        return '<a page="' + index + '" href="javascript:void(0);">' + index + '</a>';
    };
    CNBC_Pagination.prototype.toggleAdvanceLinks = function () {
        var rVisible = true, lVisible = true;
        if (this._currentPage == 1 && this._lastPage <= 1) {
            lVisible = false;
            rVisible = false;
        } else if (this._currentPage == 1) {
            lVisible = false;
        } else if (this._currentPage == this._lastPage && this._lastPage > 1) {
            rVisible = false;
        }
        ;
        this.setVisibility(this.getElLeftCol(), lVisible);
        this.setVisibility(this.getElRightCol(), rVisible);
    };
    CNBC_Pagination.prototype.setVisibility = function ($el, isVisible) {
        var view = (isVisible) ? 'visible' : 'hidden';
        $el.css('visibility', view);
    }
    CNBC_Pagination.prototype.renderTotalCount = function () {
        if (this._lastPage > this._maxPages && this._currentPage < this._lastPage) {
            var html = ['<span class="pageCount">of '];
            html.push(this.renderHrefLink(this._lastPage));
            html.push(this.renderNumItems());
            html.push('</span>');
            return html.join('');
        }
    };
    CNBC_Pagination.prototype.renderNumItems = function () {
        if (this._showNumItems) {
            return '<span class="pagNumItems">(' + this._totalItems + ' Items)</span>';
        }
    };
})(jQuery);
/* File BEGIN: http://fm.cnbc.com/applications/cnbc.com/staticcontent/scripts/libraries/SignIn/signin_surf.js?t=1450133677 */
var CNBC_Signin = {};
(function ($) {
    CNBC_Signin._domain = "cnbc.com";
    CNBC_Signin._CASTOKEN = "CASTOKEN";
    CNBC_Signin._ACEGI_SECURITY = "ACEGI_SECURITY_HASHED_REMEMBER_ME_COOKIE";
    CNBC_Signin._SUBSCRIBERINFO = "SUBSCRIBERINFO";
    CNBC_Signin._SUBSCRIBERINFO3 = "SUBSCRIBERINFO3";
    CNBC_Signin._MemberCenterURL = "https://register.cnbc.com/memberCenter.do";
    CNBC_Signin._UserCheckURL = "https://login.cnbc.com/cas/checkCasTicket?";
    CNBC_Signin._SignInURL = 'https://register.cnbc.com/refreshlogin.jsp';
    CNBC_Signin._SignOutURL = 'https://login.cnbc.com/cas/logout';
    CNBC_Signin._CookieUser = 'Guest';
    CNBC_Signin.UserCheckTimeout = (3 * 60 * 60 * 1000);
    CNBC_Signin.isRegister = false;
    CNBC_Signin.isValidUser = false;
    CNBC_Signin.signInCont = null;
    CNBC_Signin.isCreated = false;
    CNBC_Signin.Disqus = {};
    CNBC_Signin.Disqus._publicKeyEndpoint = (window.CNBC_Settings && CNBC_Settings.baseurls) ? CNBC_Settings.baseurls.register_base + '/rs/sso/publicKey/view.js' : "https://register.cnbc.com/rs/sso/publicKey/view.js";
    CNBC_Signin.Disqus._publicKeyCookie = 'disqusPublicKey';
    CNBC_Signin.Disqus._payloadEndpoint = (window.CNBC_Settings && CNBC_Settings.baseurls) ? CNBC_Settings.baseurls.register_base + '/auth/api/40015/payload' : "https://register.cnbc.com/auth/api/40015/payload";
    CNBC_Signin.Disqus._payloadCookie = 'disqusSSOPayload';
    CNBC_Signin.Disqus._payloadCookieExpire = 1;
    CNBC_Signin.init = function (args) {
    };
    CNBC_Signin.initSettings = function (args) {
        var globalsettings = args.baseurls;
        CNBC_Signin._MemberCenterURL = globalsettings.register_base + '/memberCenter.do';
        CNBC_Signin._UserCheckURL = globalsettings.login_base + '/cas/checkCasTicket?';
        CNBC_Signin._SignInURL = globalsettings.register_base + '/refreshlogin.jsp';
        CNBC_Signin._SignOutURL = globalsettings.login_base + '/cas/logout';
        CNBC_Signin.Disqus._publicKeyEndpoint = globalsettings.register_base + '/rs/sso/publicKey/view.js';
        CNBC_Signin.Disqus._payloadEndpoint = globalsettings.register_base + '/auth/api/40015/payload';
    };
    CNBC_Signin.initElements = function () {
        this.$container = $('#login-container');
        this.$regState = $('#reg-user');
        this.$unregState = $('#unreg-user');
        this.$signInBtn = this.$unregState.find("li.last a");
        this.isRegister = CNBC_Signin.isRegistered();
        this.isValidUser = CNBC_Signin.isLoggedIn();
    };
    CNBC_Signin.initEvents = function () {
        if (typeof window.activePartnerExperience != 'undefined' && window.activePartnerExperience == 'xfinity') {
            return;
        }
        $('#signin').click(function (event) {
            event.preventDefault();
            event.stopPropagation();
            CNBC_Signin.signInPopup(CNBC_Signin._SignInURL, '?source=new-header&service=url');
        });
        $('#signout').click(function (event) {
            event.preventDefault();
            CNBC_Signin.gotoRegistrationURL(CNBC_Signin._SignOutURL, '?service=url');
        });
        $('body').bind('click', function (event) {
            var $target = $(event.target);
            if (!$target.is('#signInDiv')) {
                CNBC_Signin.hideOverLay();
            }
        });
        $('#toPopup div.close').bind('click', function (event) {
            CNBC_Signin.disablePopup();
        });
        $(window).resize(function () {
        });
    };
    CNBC_Signin.isRegistered = function () {
        return ((CNBC_Utils.readCookie(CNBC_Signin._CASTOKEN)) || CNBC_Utils.readCookie(CNBC_Signin._ACEGI_SECURITY));
    };
    CNBC_Signin.isLoggedIn = function () {
        var loggedIn = false;
        var SessionCookie = CNBC_Utils.readCookie(CNBC_Signin._SUBSCRIBERINFO);
        if (!CNBC_Common.isNull(SessionCookie)) {
            CNBC_Signin._CookieUser = SessionCookie;
            loggedIn = true;
            $.ajax({
                url: CNBC_Signin._UserCheckURL, data: "output=json", dataType: 'jsonp', success: function (data) {
                }, error: function (data) {
                }
            });
        }
        ;
        return loggedIn;
    };
    CNBC_Signin.GetStaleResponseHandler = function (data) {
        if (data != null && data != 'null' && data != '') {
            if (data["cnbc-global-login-response"] == 1) {
                CNBC_Utils.deleteAllLoginCookies("/");
            }
        } else {
            CNBC_Utils.deleteAllLoginCookies("/");
        }
        ;
        setTimeout("CNBC_Signin.isLoggedIn()", CNBC_Signin.UserCheckTimeout);
    };
    CNBC_Signin.showUserInfo = function () {
        var text, isValidUser = CNBC_Signin.isLoggedIn();
        if (isValidUser && this.isRegister) {
            var subscriberInfoCookie = CNBC_Utils.readCookie(CNBC_Signin._SUBSCRIBERINFO);
            var acegiCookie = CNBC_Utils.readCookie(CNBC_Signin._ACEGI_SECURITY);
            if (!CNBC_Common.isNull(acegiCookie)) {
                CNBC_Signin._CookieUser = acegiCookie.split(":")[0];
            } else if (!CNBC_Common.isNull(subscriberInfoCookie)) {
                CNBC_Signin._CookieUser = subscriberInfoCookie;
            }
            text = 'Welcome, ' + CNBC_Signin._CookieUser;
            if (text.length > 25) {
                text = text.substr(0, 22) + "...";
            }
        }
        ;
        this.$container.find('span').html(text);
    };
    CNBC_Signin.toggleUserLinks = function (signin) {
        this.$signInBtn.removeClass('btn');
        if (signin) {
            this.$regState.addClass('hide');
            this.$signInBtn.addClass('btn');
            this.$unregState.css("margin-top", "0px");
        } else if (this.isRegister) {
            this.$regState.removeClass('hide');
            this.$unregState.addClass('hide');
        } else {
            this.$regState.addClass('hide');
            this.$unregState.removeClass('hide');
        }
    };
    CNBC_Signin.signInPopup = function (url, params) {
        var finalURL = this.createRegistrationURL(url, params);
        if (finalURL != "") {
            this.toggleUserLinks(true);
            if (!this.isCreated) {
                this.renderPopup();
                $('#signInFrame').attr('src', finalURL);
                this.isCreated = true;
            }
            else {
                $("#toPopup").fadeIn(0500);
                $("#backgroundPopup").css("opacity", "0.7");
                $("#backgroundPopup").fadeIn(0001);
                popupStatus = 1;
            }
        }
    };
    CNBC_Signin.renderPopup = function () {
        var overLayCode = '<div class="contentDiv"><iframe id="signInFrame" name="signInFrame" frameborder="0" scrolling="no" width="460px" height="313px"></iframe></div>';
        var overlayShadow = $('#signInDivHidden').html();
        var overLayElm = $('<div id="signInDiv" class="signInDiv">' + overLayCode + '</div>');
        $('#toPopup #popup_content').html(overLayElm);
        $("#toPopup").fadeIn(0500);
        $("#backgroundPopup").css("opacity", "0.7");
        $("#backgroundPopup").fadeIn(0001);
        popupStatus = 1;
    };
    CNBC_Signin.positionPopup = function () {
        this.signInCont = $('#signInDiv');
        var pos = this.$unregState.offset();
        this.signInCont.css({'top': (pos.top + 30), 'left': (pos.left - 140)});
    };
    CNBC_Signin.hideOverLay = function () {
        var overlay = this.$unregState;
        if (overlay.length > 0 && !overlay.hasClass('hide')) {
            this.toggleUserLinks();
            if (!CNBC_Common.isNull(this.signInCont)) {
                this.signInCont.addClass('hide');
            }
        }
    };
    CNBC_Signin.createRegistrationURL = function (url, params) {
        var cnbc_curURL = location.href;
        var index = params.indexOf("url");
        var cnbc_index = cnbc_curURL.indexOf(CNBC_Signin._domain);
        if (index != -1) {
            if (cnbc_index != -1) {
                url = url + params.replace(/url/, encodeURIComponent(cnbc_curURL));
                return url;
            } else {
                var qindex = cnbc_curURL.indexOf("?");
                var serviceURL = cnbc_curURL;
                if (qindex != -1) {
                    serviceURL = cnbc_curURL.substring(0, index);
                }
                return url + params.replace(/url/, encodeURIComponent(serviceURL));
            }
        }
        ;
        return "";
    };
    CNBC_Signin.disablePopup = function () {
        if (popupStatus == 1) {
            $("#toPopup").fadeOut("normal");
            $("#backgroundPopup").fadeOut("normal");
            popupStatus = 0;
        }
    };
    CNBC_Signin.gotoRegistrationURL = function (url, params) {
        var finalURL = this.createRegistrationURL(url, params);
        if (finalURL != "") {
            window.location = finalURL;
        }
    };
    CNBC_Signin.displayUsername = function (addtext, id) {
        if (this.isRegistered()) {
            var CookieUser = CNBC_Utils.readCookie(CNBC_Signin._SUBSCRIBERINFO3);
            document.getElementById(id).innerHTML = addtext + CookieUser;
        }
    };
    CNBC_Signin.Disqus.login = function (payloadTimeout, loginConfig) {
        var deferred = $.Deferred();
        var disqusData = CNBC_Utils.readCookie(CNBC_Signin.Disqus._payloadCookie, true);
        if (disqusData !== null) {
            disqusData = JSON.parse(disqusData);
            if (disqusData.timestamp - (new Date().getTime()) > 0) {
                deferred.resolveWith(this, [disqusData.value]);
                return deferred.promise();
            } else {
                CNBC_Utils.eraseCookie(CNBC_Signin.Disqus._payloadCookie, null, null, true);
            }
        }
        $.ajax({
            url: CNBC_Signin.Disqus._payloadEndpoint + '?token=' + (loginConfig.session || '') + '&uid=' + (loginConfig.uid || ''),
            dataType: 'jsonp',
            jsonpCallback: 'jsonp_callback'
        }).fail(function () {
            deferred.reject();
        }).done(function (data) {
            if (payloadTimeout == undefined || payloadTimeout === null) {
                payloadTimeout = CNBC_Signin.Disqus._payloadCookieExpire;
            }
            data = {payload: data['payload_token'], publicKey: data['public_key']};
            var disqusData = {value: data, timestamp: new Date().getTime() + parseFloat(payloadTimeout) * 3600000};
            disqusData = JSON.stringify(disqusData);
            deferred.resolveWith(this, [data]);
        });
        return deferred.promise();
    };
    CNBC_Signin.Disqus.logout = function () {
        CNBC_Utils.eraseCookie(CNBC_Signin.Disqus._payloadCookie, null, null, true);
    };
    CNBC_Signin.Disqus.getPublicKey = function (payloadTimeout) {
        var deferred = $.Deferred();
        var disqusData = CNBC_Utils.readCookie(CNBC_Signin.Disqus._publicKeyCookie, true);
        if (disqusData !== null) {
            disqusData = JSON.parse(disqusData);
            if (disqusData.timestamp - (new Date().getTime()) > 0) {
                deferred.resolveWith(this, [disqusData.value]);
                return deferred.promise();
            } else {
                CNBC_Utils.eraseCookie(CNBC_Signin.Disqus._publicKeyCookie, null, null, true);
            }
        }
        $.ajax({url: CNBC_Signin.Disqus._publicKeyEndpoint, dataType: 'jsonp'}).fail(function () {
            deferred.reject();
        }).done(function (data) {
            if (payloadTimeout == undefined || payloadTimeout === null) {
                payloadTimeout = CNBC_Signin.Disqus._payloadCookieExpire;
            }
            data = {publicKey: data['cnbc-public-key']};
            var disqusData = {value: data, timestamp: new Date().getTime() + parseFloat(payloadTimeout) * 3600000};
            disqusData = JSON.stringify(disqusData);
            CNBC_Utils.createCookie(CNBC_Signin.Disqus._publicKeyCookie, disqusData, null, true);
            deferred.resolveWith(this, [data]);
        });
        return deferred.promise();
    };
})(jQuery);
/* File BEGIN: http://fm.cnbc.com/applications/cnbc.com/staticcontent/scripts/libraries/Comments/disqus.js?t=1450133677 */
var CNBC_Disqus = {};
(function ($) {
    CNBC_Disqus._API_VERSION = "3.0";
    CNBC_Disqus.component = function (settings) {
        window.disqus_identifier = settings.disqus.identifier;
        window.disqus_title = settings.disqus.title;
        window.disqus_url = settings.disqus.url;
        window.disqus_config = function () {
            if (settings.sso !== undefined) {
                this.sso = settings.sso;
            }
            if (settings.sso_payload !== undefined) {
                this.page.remote_auth_s3 = settings.sso_payload.payload;
                this.page.api_key = settings.sso_payload.publicKey;
            }
            if (settings.eventTracking !== undefined && $.isPlainObject(settings.eventTracking) == true) {
                for (var e in settings.eventTracking.events) {
                    if (this.callbacks[e] !== undefined) {
                        this.callbacks[e].push(function () {
                            settings.eventTracking.callback(settings.eventTracking.events[e]);
                        });
                    }
                }
            }
        };
        (function () {
            var dsq = document.createElement('script');
            dsq.type = 'text/javascript';
            dsq.async = true;
            dsq.src = '//' + settings.disqus.shortname + '.disqus.com/embed.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
        })();
    };
    CNBC_Disqus.counts = function (disqusThreads, settings) {
        var self = this;
        var deferred = $.Deferred();
        if (disqusThreads.length) {
            self._api({
                url: settings.provider.apiEndpoint + '/api/' + self._API_VERSION + '/threads/set.jsonp',
                data: {api_key: settings.provider.apiKey, forum: settings.disqus.shortname, thread: disqusThreads},
                dataType: "jsonp",
                cache: true,
                jsonpCallback: 'countsHandler'
            }).fail(function () {
                deferred.reject();
            }).done(function (data) {
                var counts = self._extractCounts(data.response);
                deferred.resolveWith(this, [counts]);
            });
        } else {
            deferred.reject();
        }
        return deferred.promise();
    };
    CNBC_Disqus._api = function (settings) {
        return $.ajax(settings).fail(function () {
            $.error('Disqus API request failed');
        }).done(function (data) {
            if (data.code != 0) {
                $.error('Disqus API response code !zero');
            }
        });
    };
    CNBC_Disqus._extractCounts = function (apiResponse) {
        var counts = {};
        $.each(apiResponse, function (key, value) {
            $.each(value.identifiers, function (k, v) {
                counts[v] = value.posts;
            });
        });
        return counts;
    };
})(jQuery);
/* File BEGIN: http://fm.cnbc.com/applications/cnbc.com/staticcontent/scripts/libraries/Comments/comments.js?t=1450133677 */
function CNBC_Comments() {
};
(function ($) {
    CNBC_Comments.prototype._provider = null;
    CNBC_Comments.prototype._settings = {};
    CNBC_Comments.prototype._identifiers = [];
    CNBC_Comments.prototype.component = function (settings, commentsObj) {
        var self = this, toggler = $("#disqus_visibility_toggle");
        if (this._init(settings)) {
            self._settings.eventTracking = {callback: self._omnitureTrackLink, events: {onNewComment: 'event56'}};
            toggler.click(function () {
                if (CNBC_Utils.isSignedIn() && !SURF.globals.user.username) {
                    var form = commentsObj._getUserForm();
                    toggler.addClass("disabled_toggler");
                    if (!form.isReady) {
                        form.ready();
                    }
                    if (!form.isVisible)form.container.slideDown('slow');
                } else {
                    $('#disqus_thread').toggle('slow');
                    if (toggler.text() == "SHOW COMMENTS") {
                        toggler.text("HIDE COMMENTS");
                    } else {
                        toggler.text("SHOW COMMENTS");
                    }
                    ;
                }
            });
            if (CNBC_Utils.isSignedIn()) {
                var loginConfig = {
                    session: (typeof SURF === 'undefined' || !SURF.globals.session) ? '' : SURF.globals.session.session_token,
                    uid: (typeof SURF === 'undefined' || !SURF.globals.session) ? '' : SURF.globals.session.uid
                };
                if (window.activePartnerExperience !== undefined && window.activePartnerExperience === "xfinity") {
                    self._settings.sso.logout = CNBC_Xfinity_Experience.getLogoutUrl();
                }
                CNBC_Signin.Disqus.login(self._settings.provider.authTimeout, loginConfig).fail(function (error) {
                }).done(function (data) {
                    self._settings.sso_payload = {};
                    self._settings.sso_payload.payload = data.payload;
                    self._settings.sso_payload.publicKey = data.publicKey;
                }).always(function () {
                    self._provider.component(self._settings, commentsObj);
                });
            } else {
                CNBC_Signin.Disqus.logout();
                this._provider.component(self._settings, commentsObj);
            }
        }
    };
    CNBC_Comments.prototype.counts = function (settings) {
        var self = this;
        if (self._init(settings)) {
            CNBC_Signin.Disqus.getPublicKey().fail(function () {
                $.error('Unable to get public key');
            }).done(function (data) {
                self._settings.provider.apiKey = data.publicKey;
                var scope = null;
                if (self._settings.scope) {
                    scope = self._settings.scope;
                }
                self.getCounts(scope);
                self.initEvents();
            });
        }
    };
    CNBC_Comments.prototype.getCounts = function (scope) {
        var self = this;
        var disqusThreads = self._getIDs(scope);
        self._provider.counts(disqusThreads, self._settings).done(function (data) {
            self._renderCounts(data);
        });
    };
    CNBC_Comments.prototype._init = function (settings) {
        try {
            this._settings = settings;
            this._provider = window[this._settings.provider.lib];
            return true;
        } catch (e) {
            $.error('comments provider library: ' + this._settings.provider.lib + ' not found');
            return false;
        }
    };
    CNBC_Comments.prototype._getIDs = function (scope) {
        var self = this;
        if (self._settings.anchorAttrName !== undefined) {
            var threads = $("a[" + self._settings.anchorAttrName + "]", scope);
            var list = [];
            self._identifiers = {};
            $.each(threads, function (index, value) {
                var identifier = $(this).attr(self._settings.anchorAttrName);
                if (self._identifiers[identifier] == undefined) {
                    self._identifiers[identifier] = [];
                }
                self._identifiers[identifier].push(this);
            });
            $.each(self._identifiers, function (key, value) {
                list.push('ident:' + key);
            });
            return list;
        } else {
            return null;
        }
    };
    CNBC_Comments.prototype._renderCounts = function (data) {
        var self = this;
        var subset = {};
        var label = '';
        if (self._settings.label && self._settings.label.showZero) {
            subset = self._identifiers;
        } else {
            $.each(data, function (key, value) {
                if (value > 0) {
                    subset[key] = value;
                }
            });
        }
        for (iii in subset) {
            var templates = 'templates';
            if ($(subset[iii])[0].hasAttribute('data-comments-label')) {
                templates = 'templates' + $(subset[iii]).attr('data-comments-label');
            }
            var count = parseInt(data[iii]) || 0;
            switch (count) {
                case 0:
                    label = self._settings.label[templates].zero;
                    break;
                case 1:
                    label = self._settings.label[templates].singular;
                    break;
                default:
                    label = self._settings.label[templates].plural;
            }
            if (count > 99999) {
                count = parseInt(count / 1000000) + 'M';
            } else if (count > 999) {
                count = parseInt(count / 1000) + 'K';
            }
            label = label.replace('$COUNT$', count);
            for (jjj in this._identifiers[iii]) {
                $(this._identifiers[iii][jjj])[self._settings.label.position](label);
            }
        }
    };
    CNBC_Comments.prototype._omnitureTrackLink = function (e) {
        s.linkTrackVars = 'events,prop56';
        s.linkTrackEvents = e;
        s.prop56 = s.pageName;
        s.events = e;
        s.tl(this, 'o', 'Disqus Comment');
    };
    CNBC_Comments.prototype._getUserForm = function () {
        var container = $("#disqus_form_container"), userField = $('.disqus_form_user_field .disqus_form_input_body'), commit = $('.disqus_form_confirm'), errMsg = $('.disqus_form_error_msg'), isReady = false, isVisible = (function () {
            return container.is(':visible');
        }()), validationState = 0, errorIndicator = {'userNameIsTaken': ['The username', 'associated with another member in this brand', 'Sorry, that user name is already taken']}, errorMsgConfig = ['', 'Username not available', 'Enter username', 'Inappropriate language - please try again'];

        function createUsernameTrackingObj(username, pev2) {
            var tracking = {'cnbc': {}, 'link': {}};
            if (username)tracking.cnbc['username'] = username;
            if (pev2)tracking['link'].pev2 = pev2;
            return tracking;
        }

        function ready() {
            commit.on('click', function () {
                disqusJoinHandler();
            })
            CNBC_Omniture.genericClickTracking(createUsernameTrackingObj('prompt', 'Registration Module'));
            isReady = true;
        }

        function disqusJoinHandler() {
            var userInput = userField.val();
            updateDisplayUsername(userInput);
            popupErrorMsg(validationState);
        }

        function popupErrorMsg(state) {
            if (state < errorMsgConfig.length) {
                errMsg.text(errorMsgConfig[state]);
                errMsg.removeClass('disqus_transparent');
            }
        }

        function updateDisplayUsername(input) {
            var length = $.trim(input).length, validator = $.Deferred(), updateObj = {
                'uid': SURF.globals.user._id,
                'signature': SURF.globals.user._auth_signature,
                'success': function (data) {
                    validationState = 0;
                    errMsg.addClass('disqus_transparent');
                    popupErrorMsg(validationState);
                    CNBC_Omniture.genericClickTracking(createUsernameTrackingObj('selected', 'Registration Module'));
                    container.slideUp(500, function () {
                        SURF.getUserInfo({
                            'success': function () {
                                var commentsObj = new CNBC_Comments();
                                $("#disqus_visibility_toggle").removeClass("disabled_toggler");
                                commentsObj.component(CNBC_Settings.commentsParam);
                                CNBC_Comments.showComments();
                            }
                        })
                    });
                },
                'error': function (err) {
                    if (err.error && typeof err.error === 'string') {
                        var updateErr = err.error;
                        if (CNBC_Common.includeString(updateErr, errorIndicator['userNameIsTaken'], 'any')) {
                            validationState = 1;
                        } else {
                            validationState = 3;
                        }
                    }
                    popupErrorMsg(validationState);
                }
            };
            if (!length) {
                validationState = 2;
            } else {
                updateObj.user_data = {username: input}
                CNBC_Surf_Mediator.surfUpdate(updateObj);
            }
        }

        return {'ready': ready, 'isReady': isReady, 'container': container}
    }
    CNBC_Comments.prototype.initEvents = function () {
        $('div.cnbc-body').delegate('#discussion', 'click', function () {
            if ($('#disqus_thread').length) {
                CNBC_Comments.initComments();
                $('html, body').stop().animate({scrollTop: $('#disqus_thread').position().top}, 500);
            }
            CNBC_Gigya_Omniture.disqusDiscussionScroll();
        });
    };
    CNBC_Comments.initComments = function () {
        var toggler = $("#disqus_visibility_toggle");
        if (!$('#disqus_thread iframe').length) {
            var commentsObj = new CNBC_Comments(), form = commentsObj._getUserForm();
            if (!CNBC_Utils.isSignedIn() || SURF.globals.user.username) {
                commentsObj.component(CNBC_Settings.commentsParam, commentsObj);
                CNBC_Comments.showComments();
            } else {
                toggler.addClass("disabled_toggler");
                if (!form.isReady) {
                    form.ready();
                }
                if (!form.isVisible)form.container.slideDown('slow');
            }
        }
        ;
    };
    CNBC_Comments.showComments = function () {
        $('#disqus_visibility_toggle').text("HIDE COMMENTS");
        $('#disqus_thread').show();
    };
    CNBC_Comments.hideComments = function () {
        $('#disqus_visibility_toggle').text("SHOW COMMENTS");
        $('#disqus_thread').hide();
    };
})(jQuery);
/* File BEGIN: http://fm.cnbc.com/applications/cnbc.com/staticcontent/scripts/libraries/Quotes/AbstractQuoteRenderer.js?t=1450133677 */
var CNBC_Quotes = (typeof CNBC_Quotes !== "undefined") ? CNBC_Quotes : {};
CNBC_Quotes.AbstractQuoteRenderer = function () {
    this.symbolDomMap = {};
};
(function ($) {
    "use strict";
    var AbstractQuoteRenderer = CNBC_Quotes.AbstractQuoteRenderer;

    function panic(msg) {
    }

    AbstractQuoteRenderer.prototype.parseData = function (jsonData) {
        panic("parseData() needs to be overriden!");
    }
    AbstractQuoteRenderer.prototype.renderDomElt = function ($elt, data) {
        panic("renderDomElt() needs to be overriden!");
    };
    AbstractQuoteRenderer.prototype.attachEvents = function () {
    };
    AbstractQuoteRenderer.prototype.updateTickerColor = function ($elt, value, classes) {
        if ($elt && classes && classes.length == 2) {
            var color;
            $elt.removeClass(classes.join(' '));
            if (typeof value === "number" && !isNaN(value) && value !== 0) {
                color = (value > 0) ? classes[0] : classes[1];
                $elt.addClass(color);
            }
        }
    }
    AbstractQuoteRenderer.prototype.getFieldValue = function (data, field) {
        var value = null;
        if (field) {
            var parts = field.split('.');
            value = data;
            for (var i = 0; i < parts.length; i++) {
                value = value[parts[i]];
            }
            if (typeof value === 'object') {
                value = '---';
            }
        }
        return value;
    };
    AbstractQuoteRenderer.prototype.setChartApiUrl = function (chartapi) {
        this.chartApiUrl = chartapi;
    };
    AbstractQuoteRenderer.prototype.updateChartImage = function ($flexChart, symbol, regSymbol, companyName) {
        var $img = $('img', $flexChart);
        var chartparams = $img.data('chartparams');
        var loc = this.chartApiUrl + "?" + chartparams + "&symbol=" + symbol;
        $img.attr('src', loc);
        $img.attr('symbol', regSymbol);
        if (companyName) {
            var $note = $('p.note', $flexChart);
            $note.text(companyName);
        }
    };
    AbstractQuoteRenderer.prototype.setEventImage = function ($flexChart, quoteBaseURL) {
        var $img = $('img', $flexChart);
        $img.unbind('click');
        $img.click(function () {
            window.location.href = quoteBaseURL + encodeURIComponent($img.attr('symbol'));
        });
    };
    AbstractQuoteRenderer.prototype.getSymbols = function () {
        var symbols = [];
        for (var s in this.symbolDomMap) {
            symbols.push(s);
        }
        return symbols;
    };
    AbstractQuoteRenderer.prototype.collectSymbols = function () {
        var selector = this.symbolSelector;
        if (!selector) {
            if (typeof console !== 'undefined') {
                console.error(">>>> Missing this.symbolSelector in QuoteRenderer!");
            }
        }
        var self = this;
        this.selector = selector;
        var attrSelector = "[" + this.selector + "]";
        var $symbols = $(attrSelector);
        $symbols.each(function (i, elt) {
            var $elt = $(this);
            var symbol = $elt.attr(selector);
            if (symbol) {
                self.addSymbolToDomMap(symbol, $elt);
            }
            else {
                panic("Couldn't find symbol in selector: " + selector);
            }
        });
    };
    AbstractQuoteRenderer.prototype.addSymbolToDomMap = function (symbol, $elt) {
        var domList = this.symbolDomMap[symbol];
        if (!domList) {
            domList = this.symbolDomMap[symbol] = [];
        }
        domList.push($elt);
    };
    AbstractQuoteRenderer.prototype.onRender = function (data, quoteBaseURL) {
        var quoteDataMap = this.parseData(data);
        if (quoteDataMap) {
            var nonStreamableSymbolListTemp = [];
            var streamableSymbolListTemp = [];
            for (var symbol in this.symbolDomMap) {
                var domList = this.symbolDomMap[symbol];
                for (var i = 0; i < domList.length; i++) {
                    var $row = domList[i];
                    var sym = $row.attr(this.selector);
                    var quote = quoteDataMap[sym];
                    if (quote) {
                        if ($.trim(quote.streamable) == "0") {
                            nonStreamableSymbolListTemp[nonStreamableSymbolListTemp.length || 0] = symbol;
                        } else {
                            streamableSymbolListTemp[streamableSymbolListTemp.length || 0] = symbol;
                        }
                        this.renderDomElt($row, quote);
                    }
                }
            }
            if (streamableSymbolListTemp.length > 0) {
                CNBC_Quotes.streamableSymbolList = streamableSymbolListTemp;
            }
            if (nonStreamableSymbolListTemp.length > 0) {
                CNBC_Quotes.nonStreamableSymbolList = nonStreamableSymbolListTemp;
            }
            this.attachEvents(quoteBaseURL);
        }
    };
    AbstractQuoteRenderer.prototype.getQuoteDataForSingleAjaxRequest = function (data, getter) {
        var quoteData = data;
        for (var i = 0; i < getter.length; i++) {
            if (quoteData[getter[i]] != undefined) {
                quoteData = quoteData[getter[i]];
            }
        }
        return quoteData;
    };
    AbstractQuoteRenderer.prototype.getQuoteDataList = function (data, getter) {
        var quoteData = [];
        for (var i = 0; i < data.length; i++) {
            var qd = this.getQuoteDataForSingleAjaxRequest(data[i], getter);
            quoteData = quoteData.concat(qd);
        }
        if (!$.isArray(quoteData)) {
            quoteData = [quoteData];
        }
        return quoteData;
    };
    AbstractQuoteRenderer.prototype.getQuoteDataMap = function (data, params) {
        var quoteData = this.getQuoteDataList(data, params);
        var map = {};
        for (var i = 0; i < quoteData.length; i++) {
            var quote = quoteData[i];
            var sym = quote.symbol;
            map[sym] = quote;
        }
        return map;
    };
    AbstractQuoteRenderer.prototype.renderArrow = function ($elt, change) {
        var $sel = $('div.icon', $elt).removeClass();
        if (change > 0) {
            $sel.addClass('icon arrow_up').html('&nbsp;');
        } else if (change < 0) {
            $sel.addClass('icon arrow_down').html('&nbsp;');
        } else {
            $sel.addClass('icon unch').text('---');
        }
    };
}(jQuery));
/* File BEGIN: http://fm.cnbc.com/applications/cnbc.com/staticcontent/scripts/libraries/Quotes/InlineQuoteRenderer.js?t=1450133677 */
var CNBC_Quotes = (typeof CNBC_Quotes !== "undefined") ? CNBC_Quotes : {};
CNBC_Quotes.InlineQuoteRenderer = function () {
    this.symbolSelector = 'data-inline-quote-symbol';
};
(function ($) {
    "use strict";
    var InlineQuoteRenderer = CNBC_Quotes.InlineQuoteRenderer;
    InlineQuoteRenderer.prototype = new CNBC_Quotes.AbstractQuoteRenderer();
    InlineQuoteRenderer.prototype.parseData = function (data) {
        return this.getQuoteDataMap(data, ["QuickQuoteResult", "QuickQuote"]);
    };
    InlineQuoteRenderer.prototype.init = function (settings) {
        this.settings = settings;
    };
    InlineQuoteRenderer.prototype.renderDomElt = function ($elt, quote) {
        var quoteFields = this.settings.quoteFields;
        this.mapInlineQuotes($elt, quote, quoteFields);
        if (this.settings) {
            var chartParams = this.settings.chartParams;
            var chartImgUrl = this.chartApiUrl + '?' + chartParams;
            var quoteUrl = this.settings.quoteUrl;
            if (chartImgUrl && quoteUrl) {
                this.generatePopup(quote, chartImgUrl, quoteUrl);
            }
            else {
            }
        }
    };
    InlineQuoteRenderer.prototype.mapInlineQuotes = function ($elt, quote, quoteFields) {
        var qcObj = [];
        var qd = quote;
        var $assocSym = $elt;
        var sym = qd.symbol;
        $assocSym.find('span.data-name').html(qd.name);
        var $assocSymData = $assocSym.find('span.inlineQuoteData');
        if ($assocSymData.length == 0) {
            $assocSym.append("<span class='inlineQuoteData'></span>");
            $assocSymData = $assocSym.find('span.inlineQuoteData');
        }
        var qf = quoteFields;
        if (qf != null && qf.length > 0) {
            var qfLen = qf.length;
            qcObj.push(" [");
            qcObj.push("<span class='quote_sym'>" + sym + "</span>");
            var arrowFlag = false;
            var price = qd.change;
            var negpos = "", qfObj, chng, pctChng, arrow;
            for (var k = 0; k < qfLen; k++) {
                negpos = "";
                qfObj = qf[k];
                if ((qfObj == "change" || qfObj == "change_pct")) {
                    negpos = " neg";
                    arrow = " arrowDwn";
                    if (price > 0) {
                        arrow = " arrowUp";
                        negpos = " pos";
                    }
                    else if (price < 0) {
                        arrow = " arrowDwn";
                        negpos = " neg";
                    }
                    else {
                        arrow = '';
                        negpos = '';
                        arrowFlag = true;
                    }
                    if (!arrowFlag) {
                        qcObj.push('<span class="icon arrow' + arrow + '">&nbsp;</span>');
                        arrowFlag = true;
                    }
                }
                qcObj.push('<span class="quote_' + qfObj + negpos + '">');
                if (qfObj == "change_pct") {
                    if (qd[qfObj]) {
                        qcObj.push("(" + qd[qfObj] + "%)");
                    }
                }
                else {
                    qcObj.push(qd[qfObj]);
                }
                qcObj.push('</span>');
            }
            if (qd.realTime == true) {
                qcObj.push('<span class="quote_sym_rt">&nbsp;</span>');
            }
            qcObj.push("]");
            $assocSymData.html(qcObj.join(''));
        }
    };
    InlineQuoteRenderer.prototype.generatePopup = function (qd, chartImgUrl, quoteURL) {
        var popupStr = [];
        var sym = qd.symbol;
        sym = this.removeSpecialChars(sym);
        var id = "quotes_popup_" + sym;
        var imgSrc = chartImgUrl + "&symbol=" + qd.altSymbol;
        var ref = quoteURL + escape(sym);
        var price = parseFloat(qd.change);
        if (!$("#" + id).length) {
            popupStr.push('<div id="' + id + '" class="inline_quotes_popup">');
            popupStr.push('<div class="popup_header">');
            popupStr.push('<div class="popup_header_exch">');
            popupStr.push('<span class="popup_sym_abr">');
            popupStr.push(sym);
            popupStr.push('</span>');
            popupStr.push('<span class="popup_sym_exch">');
            popupStr.push(qd.exchange);
            popupStr.push('</span>');
            popupStr.push('</div>');
            popupStr.push('<div class="popup_header_price">');
            popupStr.push('<span class="popup_sym_name">');
            popupStr.push(qd.name);
            popupStr.push('</span>');
            popupStr.push('<span class="popup_sym_last">');
            popupStr.push(qd.last);
            popupStr.push('</span>');
            if (price < 0) {
                popupStr.push('<span class="popup_sym_price neg">');
            }
            else if (price > 0) {
                popupStr.push('<span class="popup_sym_price pos">');
            }
            else {
                price = 'UNCH';
            }
            popupStr.push(price);
            popupStr.push('</span>');
            if (price < 0) {
                popupStr.push('<span class="popup_sym_perc_chng neg">');
            }
            else if (price == 'UNCH') {
                popupStr.push('<span class="popup_sym_perc_chng">');
            }
            else {
                popupStr.push('<span class="popup_sym_chng pos">+');
            }
            popupStr.push(qd.change_pct + '%');
            popupStr.push('</span>');
            popupStr.push('</div>');
            popupStr.push('</div>');
            popupStr.push('<div class="popup_chart">');
            popupStr.push('<img src="' + imgSrc + '" />');
            popupStr.push('</div>');
            popupStr.push('<div class="popup_footer">');
            popupStr.push('<ul class="popup_footer_links">');
            popupStr.push('<li class="first"><a class="popup_footer_quote" href="' + ref + '">Quote</a></li>');
            popupStr.push('<li><a class="popup_footer_chart" href="' + ref + '/tab/2">Chart</a></li>');
            popupStr.push('<li><a class="popup_footer_news" href="' + ref + '/tab/3">News</a></li>');
            popupStr.push('<li><a class="popup_footer_profile" href="' + ref + '/tab/4">Profile</a></li>');
            popupStr.push('</ul>');
            popupStr.push('</div>');
            popupStr.push('</div>');
            $("body").append(popupStr.join(''));
        }
        else {
            $("#" + id + ' .popup_sym_price').text(price);
            $("#" + id + ' .popup_sym_chng').text(qd.last);
            $("#" + id + ' .popup_sym_perc_chng').text(qd.change_pct + '%');
            $("#" + id + ' .popup_chart img').attr('src', imgSrc);
            if (price < 0) {
                $("#" + id + ' .icon').removeClass('arrowUp unch').addClass('arrow arrowDwn').html('');
                $("#" + id + ' .popup_sym_chng').removeClass('pos').addClass('neg');
                $("#" + id + ' .popup_sym_perc_chng').removeClass('pos').addClass('neg');
            }
            else if (price > 0) {
                $("#" + id + ' .icon').removeClass('arrowDwn unch').addClass('arrow arrowUp').html('');
                $("#" + id + ' .popup_sym_chng').removeClass('neg').addClass('pos');
                $("#" + id + ' .popup_sym_perc_chng').removeClass('neg').addClass('pos');
            }
            else {
                $("#" + id + ' .icon').removeClass('arrow arrowUp arrowDwn').addClass('unch').html('---');
                $("#" + id + ' .popup_sym_chng').removeClass('neg pos').html('UNCH');
                $("#" + id + ' .popup_sym_perc_chng').removeClass('neg pos').html('0');
            }
        }
    }
    InlineQuoteRenderer.prototype.removeSpecialChars = function (sym) {
        if (sym && sym != undefined && sym != null) {
            sym = sym.replace(/[^a-zA-Z 0-9]+/g, '');
            return sym;
        }
        return false;
    }
    InlineQuoteRenderer.popupInterval = 2000;
    InlineQuoteRenderer.canHidePopup = true;
    InlineQuoteRenderer.prototype.attachEvents = function () {
        var self = this;
        var $iq = $("a[" + this.symbolSelector + "]");
        var $popups = $("div.inline_quotes_popup");
        $popups.live("mouseenter", function () {
            InlineQuoteRenderer.canHidePopup = false;
            $(this).show();
        });
        $popups.live("mouseleave", function () {
            $popups.hide();
            InlineQuoteRenderer.canHidePopup = true;
        });
        $iq.bind('mousemove', function () {
            $popups.hide();
            self.showPopup($(this));
        });
        $iq.mouseleave(function () {
            self.hidePopup($(this));
        });
    };
    InlineQuoteRenderer.prototype.getPopup = function ($inlineQuote) {
        var sym = $inlineQuote.attr(this.symbolSelector);
        sym = this.removeSpecialChars(sym);
        var $popup = $('#quotes_popup_' + sym);
        return $popup;
    };
    InlineQuoteRenderer.prototype.showPopup = function ($inlineQuote) {
        var $popup = this.getPopup($inlineQuote);
        var offset = $inlineQuote.offset();
        offset.top += $inlineQuote.height();
        $popup.css(offset);
        $popup.show();
    };
    InlineQuoteRenderer.prototype.hidePopup = function ($inlineQuote) {
        var $popup = this.getPopup($inlineQuote);
        setTimeout(function () {
            if (InlineQuoteRenderer.canHidePopup) {
                $popup.hide();
            }
        }, InlineQuoteRenderer.popupInterval);
    };
}(jQuery));
/* File BEGIN: http://fm.cnbc.com/applications/cnbc.com/staticcontent/scripts/libraries/Quotes/TableChartRenderer.js?t=1450133677 */
var CNBC_Quotes = (typeof CNBC_Quotes !== "undefined") ? CNBC_Quotes : {};
CNBC_Quotes.TableChartRenderer = function () {
    this.symbolSelector = 'data-table-chart-symbol';
};
(function ($) {
    "use strict";
    var TableChartRenderer = CNBC_Quotes.TableChartRenderer;
    var formatPercent = function (num) {
        var result = '';
        if (num == 0) {
            result = '0';
        }
        else {
            result = Number(num).toFixed(2);
        }
        return result;
    }
    TableChartRenderer.prototype = new CNBC_Quotes.AbstractQuoteRenderer();
    TableChartRenderer.prototype.parseData = function (data) {
        return this.getQuoteDataMap(data, ["QuickQuoteResult", "QuickQuote"]);
    };
    TableChartRenderer.prototype.renderDomElt = function ($row, quote) {
        var self = this;
        var company = quote.name;
        $row.data('company-name', company);
        var realTime = "true";
        if (quote.realTime != undefined) {
            realTime = quote.realTime;
        }
        var isFirstRow = ($row.index() === 0);
        if (isFirstRow) {
            var $flexChart = $row.closest('.flex_chart');
            var $name = $('[data-field="company-name"]', $flexChart);
            $name.text(company);
        }
        var $td_fields = $row.children();
        $td_fields.each(function (i, elt) {
            var $elt = $(elt);
            var name = $elt.data('field');
            if (name) {
                var isArrow = (name.indexOf('_arrow') > 0);
                if (isArrow) {
                    var idx = name.indexOf('_arrow');
                    var value = quote[name.substr(0, idx)];
                    var change = parseFloat(value);
                    self.renderArrow($elt, change);
                }
                else {
                    switch (name) {
                        case'symbol':
                            if (realTime === "false") {
                                $elt.addClass("delayed_quotes");
                            }
                            break;
                        case'change':
                            var value = (quote[name] == 0) ? 'UNCH' : ((quote[name]) ? (CNBC_Common.formatDecimalZeros(quote[name])) : '---');
                            $elt.text(value);
                            break;
                        case'change_pct':
                            var value = (quote[name]) ? (formatPercent(quote[name]) + '%') : '---';
                            $elt.text(value);
                            break;
                        default:
                            var value = (quote[name]) ? (quote[name]) : '---';
                            if (typeof value != "object") {
                                $elt.text(value);
                            } else {
                                $elt.text('');
                            }
                            break;
                    }
                }
            }
        });
    };
    TableChartRenderer.prototype.getFlexCharts = function () {
        var $flexCharts = $('div.flex_chart[data-quote-type="quick-quote"]');
        return $flexCharts;
    };
    TableChartRenderer.prototype.attachEvents = function () {
        var self = this;
        var $flexCharts = this.getFlexCharts();
        $flexCharts.each(function (i, elt) {
            var $flexChart = $(this);
            var $symLinks = $('table tbody tr a', $flexChart);
            $symLinks.mouseenter(function () {
                var $this = $(this);
                var $row = $this.closest('tr');
                if ($row) {
                    var symbol = $row.data('table-chart-alt-symbol');
                    self.updateChartImage($flexChart, symbol);
                    var companyName = $row.data('company-name');
                    if (companyName) {
                        var $company = $('[data-field="company-name"]', $flexChart);
                        $company.text(companyName);
                    }
                }
            });
        });
    };
    TableChartRenderer.prototype.loadImage = function () {
        var self = this;
        var $flexCharts = this.getFlexCharts();
        $flexCharts.each(function (i, elt) {
            var $flexChart = $(this);
            var symbol = $flexChart.data('symbol');
            var imgSrc = $('img', $flexChart).attr('src') || false;
            if (!imgSrc) {
                $('table tbody tr:first', $flexChart).each(function (i, elt) {
                    var $firstRow = $(this);
                    var symbol = $firstRow.data('table-chart-alt-symbol');
                    self.updateChartImage($flexChart, symbol);
                    return false;
                });
            }
        });
    };
}(jQuery));
/* File BEGIN: http://fm.cnbc.com/applications/cnbc.com/staticcontent/scripts/libraries/Quotes/FutureTableChartRenderer.js?t=1450133677 */
var CNBC_Quotes = (typeof CNBC_Quotes !== "undefined") ? CNBC_Quotes : {};
CNBC_Quotes.FutureTableChartRenderer = function () {
    this.symbolSelector = 'data-future-table-chart-symbol';
};
(function ($) {
    "use strict";
    var FutureTableChartRenderer = CNBC_Quotes.FutureTableChartRenderer;
    FutureTableChartRenderer.prototype = new CNBC_Quotes.AbstractQuoteRenderer();
    FutureTableChartRenderer.prototype.parseData = function (data) {
        return this.getQuoteDataMap(data, ["FairValueQuoteResult", "FairValueQuote"]);
    };
    FutureTableChartRenderer.prototype.renderDomElt = function ($elt, quote) {
        var self = this;
        var isInlineSpan = ($elt.get(0).tagName.toLowerCase() === "span");
        if (isInlineSpan) {
            renderInline($elt, quote);
        }
        else {
            renderRow($elt, quote);
        }
        function renderRow($row, quote) {
            var $fields = $row.children();
            $fields.each(function (i, elt) {
                var $elt = $(elt);
                var name = $elt.data('field');
                if (name) {
                    var isArrow = (name.indexOf('_arrow') > 0);
                    if (isArrow) {
                        var idx = name.indexOf('_arrow');
                        var value = quote[name.substr(0, idx)];
                        var change = parseFloat(value);
                        self.renderArrow($elt, change);
                    }
                    else {
                        var value = (quote[name]) ? (quote[name]) : '---';
                        if (name === 'change' || name == 'fv_change') {
                            var formatted = value;
                            if (formatted !== '---') {
                                formatted = CNBC_Common.formatDecimalZeros(value);
                            }
                            $elt.text(formatted);
                            changeColor($elt, value);
                        }
                        else {
                            $elt.text(value);
                        }
                    }
                }
            });
        }

        function changeColor($elt, value) {
            $elt.removeClass('pos neg');
            value = parseFloat(value);
            if (value) {
                var cls = "";
                if (value > 0)cls = "pos";
                if (value < 0)cls = "neg";
                if (cls) {
                    $elt.addClass(cls);
                }
            }
        }

        function getTimestamp(quote) {
            var lastTimeMsec = Number(quote['last_time_msec']);
            var lastTimeDate = quote['last_timedate'];
            var dtObj = new Date(lastTimeMsec);
            var dnum = dtObj.getDate();
            var year = dtObj.getFullYear().toString();
            var dt = new Date(lastTimeMsec).toDateString();
            var dtParts = dt.split(' ');
            var dddd = dtParts[0];
            var month = dtParts[1];
            var day = dddd + ", " + dnum + " " + month + " '" + year.substr(2);
            var lastSpaceIdx = lastTimeDate.lastIndexOf(' ');
            var hour = lastTimeDate.substr(0, lastSpaceIdx);
            var timeStamp = day + " | " + hour + " ET";
            return timeStamp;
        };
        function renderInline($elt, quote) {
            var field = $elt.data('field'), value = quote[field];
            if (field && quote[field]) {
                if (field === 'fv_spread') {
                    value = '(' + value + ')';
                }
                else if (field === 'last_time') {
                    try {
                        value = getTimestamp(quote);
                    }
                    catch (e) {
                    }
                }
                $elt.text(value);
            }
        }
    };
    FutureTableChartRenderer.prototype.loadImage = function () {
        var self = this;
        var $flexCharts = $('div.flex_chart[data-quote-type="future-quote"]');
        $flexCharts.each(function (i, elt) {
            var $flexChart = $(this);
            $('table tbody tr:first', $flexChart).each(function (i, elt) {
                var $firstRow = $(this);
                var symbol = $firstRow.data('future-table-chart-alt-symbol');
                self.updateChartImage($flexChart, symbol);
                return false;
            });
        });
    };
}(jQuery));
/* File BEGIN: http://fm.cnbc.com/applications/cnbc.com/staticcontent/scripts/libraries/Quotes/MarketsRenderer.js?t=1450133677 */
var CNBC_Quotes = (typeof CNBC_Quotes !== "undefined") ? CNBC_Quotes : {};
CNBC_Quotes.MarketsRenderer = function () {
    this.symbolSelector = 'data-markets-symbol';
};
(function ($) {
    "use strict";
    var MarketsRenderer = CNBC_Quotes.MarketsRenderer;
    MarketsRenderer.prototype = new CNBC_Quotes.AbstractQuoteRenderer();
    MarketsRenderer.prototype.parseData = function (data) {
        return this.getQuoteDataMap(data, ["QuickQuoteResult", "QuickQuote"]);
    };
    MarketsRenderer.prototype.renderDomElt = function ($row, quote) {
        var self = this;
        var prefix = "";
        var company = quote.name;
        var realTime = "true";
        $row.data('company-name', company);
        var $fields = $row.find('[data-field]');
        if (quote.assetType) {
            $row.addClass(quote.assetType.toLowerCase());
        }
        var getField = function (field) {
            return self.getFieldValue(quote, field);
        };
        var change_pct = parseFloat(getField('change_pct'));
        var change = parseFloat(getField('change'));
        $row.removeClass('hide');
        $fields.each(function (i, elt) {
            var $elt = $(elt);
            var value;
            var name = $elt.data('field');
            if (name) {
                switch (name) {
                    case'change_pct':
                        value = (getField(name)) ? (Number(getField(name)).toFixed(2)) : '---';
                        if (Number(value) > 0)
                            $elt.text("+" + value + '%'); else
                            $elt.text(value + '%');
                        break;
                    case'change':
                        value = getField(name) ? getField(name) : '---';
                        self.updateTickerColor($row, change, ['green', 'red']);
                        self.renderArrow($row, change);
                        if (Number(value) > 0)
                            $elt.text("+" + value); else if (Number(value) == 0)
                            $elt.text("UNCH"); else
                            $elt.text(value);
                        break;
                    case'last':
                        value = getField(name) ? getField(name) : '---';
                        $elt.text(value);
                        if (quote.realTime === "false")
                            $elt.addClass('astricks');
                        break;
                    default:
                        value = getField(name) ? getField(name) : '---';
                        $elt.text(value);
                        break;
                }
            }
        });
    };
    MarketsRenderer.prototype.attachEvents = function (quoteBaseURL) {
        var self = this;
        var $marketCharts = $("[data-quote-type='ticker-quotes']").find("div.tickers");
        $marketCharts.each(function (i, elt) {
            var $tickersChart = $(this);
            $tickersChart.mouseenter(function () {
                var strSymbol = $(this).attr("data-markets-alt-symbol");
                var strRegSymbol = $(this).attr("data-markets-symbol");
                var companyName = $(this).data("company-name");
                self.updateChartImage($(this).parent().parent(), encodeURIComponent(strSymbol), strRegSymbol, companyName);
            });
            self.setEventImage($tickersChart.parent().parent(), quoteBaseURL);
        });
        $("[data-quote-type='ticker-quotes']").delegate('div.tickers', 'click', function () {
            var strSymbol = $(this).attr("data-markets-symbol");
            window.location.href = quoteBaseURL + encodeURIComponent(strSymbol);
        });
        $("[data-quote-type='ticker-quotes']").delegate('div.tickers', 'tap', function () {
            var strSymbol = $(this).attr("data-markets-symbol");
            window.location.href = quoteBaseURL + encodeURIComponent(strSymbol);
        });
        this.loadImageChart();
    };
    MarketsRenderer.prototype.loadImageChart = function () {
        var self = this;
        var $marketCharts = $('[data-quote-type="ticker-quotes"]');
        $marketCharts.each(function (i, elt) {
            var $flexChart = $(this);
            var imgSrc = $('img', $flexChart).attr('src') || false;
            if (!imgSrc) {
                $('.tickers:first', $flexChart).each(function (i, elt) {
                    var strSymbol = $(this).attr("data-markets-alt-symbol");
                    var strRegSymbol = $(this).attr("data-markets-symbol");
                    var companyName = $(this).data("company-name");
                    self.updateChartImage($flexChart, strSymbol, strRegSymbol, companyName);
                    return false;
                });
            }
            $('img', $flexChart).css('visibility', 'visible');
        });
    };
}(jQuery));
/* File BEGIN: http://fm.cnbc.com/applications/cnbc.com/staticcontent/scripts/libraries/Quotes/QuoteRetriever.js?t=1450133677 */
var CNBC_Quotes = (typeof CNBC_Quotes !== "undefined") ? CNBC_Quotes : {};
CNBC_Quotes.QuoteRetriever = function () {
};
(function ($) {
    "use strict";
    CNBC_Quotes.QuoteRetriever.ajaxCounter = 0;
    var QuoteRetriever = CNBC_Quotes.QuoteRetriever;
    $.ajaxSetup({timeout: 120000});
    QuoteRetriever.prototype.init = function (url, listeners, settings) {
        if (!url || !listeners || !settings) {
            throw new Error("QuoteRetriever() constructor: expecting <url, listeners, settings>");
        }
        this.url = url;
        this.listeners = listeners;
        this.settings = settings;
        this.urlList = [];
        this.resetAjax();
    };
    QuoteRetriever.prototype.run = function () {
        if (this.listeners.length) {
            this.setSymbols(this.listeners);
            this.getData();
            var s = this.settings;
            if (s && s.streamingInterval) {
                this.streamData();
            }
        }
    };
    function QuoteUrl(path) {
        var idx = path.indexOf('&symbols=');
        if (idx < 0 || (idx != path.length - '&symbols='.length)) {
            throw new Error('&symbols needs to be the last argument');
        }
        this.getUrl = function (symbols) {
            var encodedSymbols = [];
            for (var i = 0; i < symbols.length; i++) {
                encodedSymbols.push(encodeURIComponent(symbols[i]));
            }
            var symbolUrl = encodedSymbols.join('|');
            var url = path + symbolUrl;
            return url;
        };
    }

    QuoteRetriever.prototype.setSymbols = function (listeners) {
        var symbols = [];
        for (var i = 0; i < listeners.length; i++) {
            if (listeners[i] != null) {
                var list = listeners[i].getSymbols();
                symbols = symbols.concat(list);
            }
        }
        this.getSymbolList(symbols);
    };
    QuoteRetriever.prototype.getSymbolList = function (symbols) {
        var symbols = this.removeDuplicateSymbols(symbols);
        var maxSymbols = this.settings.maxSymbolsPerRequest || 30;
        var splitLists = this.splitSymbols(symbols, maxSymbols);
        var quoteUrl = new QuoteUrl(this.url);
        this.urlList = [];
        for (var i = 0; i < splitLists.length; i++) {
            var symbols = splitLists[i];
            var url = quoteUrl.getUrl(symbols);
            this.urlList.push(url);
        }
    }
    QuoteRetriever.prototype.removeDuplicateSymbols = function (symbols) {
        var uniqueMap = {};
        for (var i = 0; i < symbols.length; i++) {
            var s = symbols[i];
            uniqueMap[s] = 1;
        }
        var unique = [];
        for (var s in uniqueMap) {
            unique.push(s);
        }
        return unique;
    };
    QuoteRetriever.prototype.splitSymbols = function (symbols, maxSymbolsPerRequest) {
        var result = [];
        var start = 0;
        var maxSyms = maxSymbolsPerRequest;
        var numRequests = Math.ceil(symbols.length / maxSyms);
        for (var i = 0; i < numRequests; i++) {
            result[result.length] = symbols.slice(start, start + maxSyms);
            start += maxSyms;
        }
        return result;
    };
    QuoteRetriever.prototype.resetAjax = function () {
        this.ajaxInProgress = false;
        this.numAjaxRequests = 0;
        this.ajaxData = [];
    };
    QuoteRetriever.prototype.getData = function (callback) {
        var self = this;
        var urlList = self.urlList;
        if (!self.ajaxInProgress) {
            self.resetAjax();
            self.ajaxInProgress = true;
            for (var i = 0; i < urlList.length; i++) {
                CNBC_Quotes.QuoteRetriever.ajaxCounter++;
                var deferred = $.ajax({
                    url: urlList[i],
                    dataType: 'jsonp',
                    jsonpCallback: 'quoteHandler' + CNBC_Quotes.QuoteRetriever.ajaxCounter,
                    cache: true,
                    async: true
                });
                deferred.done(function (data) {
                    if (callback) {
                        callback(data);
                    }
                    else {
                        self.collectData(data, urlList.length);
                    }
                    self.ajaxInProgress = false;
                });
                deferred.fail(function (data) {
                    self.resetAjax();
                });
            }
        }
    };
    QuoteRetriever.prototype.collectData = function (data, urlListLength) {
        this.ajaxData.push(data);
        this.numAjaxRequests++;
        if (this.numAjaxRequests === urlListLength) {
            this.onRender(this.ajaxData);
            this.resetAjax();
        }
    };
    QuoteRetriever.prototype.onRender = function (data) {
        var listeners = this.listeners;
        for (var i = 0; i < listeners.length; i++) {
            if (listeners[i] != null) {
                listeners[i].onRender(data, this.settings.detailedQuoteBase);
            }
        }
    };
    QuoteRetriever.prototype.streamData = function () {
        var self = this;
        var interval = this.settings.streamingInterval;
        if (interval >= 5000) {
            this.streamingInterval = setInterval(function () {
                try {
                    CNBC_Quotes.QuoteRetriever.ajaxCounter = 0;
                    self.getSymbolList(CNBC_Quotes.streamableSymbolList);
                    self.getData();
                    self.urlList = [];
                }
                catch (e) {
                    if (typeof console !== 'undefined') {
                        console.error("Something happened in streamData");
                    }
                }
            }, interval);
        }
    };
    QuoteRetriever.prototype.stopStreamingData = function () {
        if (this.streamingInterval) {
            clearInterval(this.streamingInterval);
            this.streamingInterval = null;
        }
    };
}(jQuery));
/* File BEGIN: http://fm.cnbc.com/applications/cnbc.com/staticcontent/scripts/libraries/Quotes/Quotes.js?t=1450133677 */
var CNBC_Quotes = (typeof CNBC_Quotes !== "undefined") ? CNBC_Quotes : function () {
};
CNBC_Quotes.QuoteRetrivers = {};
CNBC_Quotes.streamableSymbolList = [];
CNBC_Quotes.nonStreamableSymbolList = [];
CNBC_Quotes.init = function (chartapi, services) {
    for (var i = 0; i < services.length; i++) {
        var s = services[i];
        for (var j = 0; j < s.listeners.length; j++) {
            var renderer = s.listeners[j];
            if (renderer != null) {
                renderer.setChartApiUrl(chartapi);
                renderer.collectSymbols();
                if (typeof renderer.loadImage === "function") {
                    renderer.loadImage();
                }
            }
        }
        var retriever = new CNBC_Quotes.QuoteRetriever();
        retriever.init(s.url, s.listeners, s.settings);
        retriever.run();
        CNBC_Quotes.QuoteRetrivers[renderer.symbolSelector] = retriever;
    }
};
CNBC_Quotes.reRender = function (nonStreamable) {
    for (var i in CNBC_Quotes.QuoteRetrivers) {
        if (CNBC_Quotes.QuoteRetrivers[i] != null) {
            if (nonStreamable) {
                CNBC_Quotes.QuoteRetrivers[i].getSymbolList(CNBC_Quotes.nonStreamableSymbolList);
            } else {
                CNBC_Quotes.QuoteRetrivers[i].getSymbolList(CNBC_Quotes.streamableSymbolList);
            }
            CNBC_Quotes.QuoteRetrivers[i].getData();
        }
    }
};
/* File BEGIN: http://fm.cnbc.com/applications/cnbc.com/staticcontent/scripts/libraries/Alerts/Alerts.js?t=1450133677 */
CNBC_Alerts = {};
(function ($) {
    var closeAction = {};
    var url = CNBC_Settings.baseurls.pub_base_protocol_agnostic + '/services/alerts', popOutPlayerUrl = CNBC_Settings.baseurls.pub_base_protocol_agnostic + '/watch-live?size=530_300&channel=UPLYNK-US', modeConfig = {
        breaking_news: {
            nid: '20991458',
            title: 'BREAKING:',
            tag: 'breaking-news'
        },
        pro_alert: {nid: '201', title: 'PRO:', tag: 'pro-alert'},
        watch_live: {nid: '202', title: 'WATCH:', tag: 'watch-live'},
        watch_live_intl: {nid: '102831987', title: 'WATCH:', tag: 'watch-live-international'},
    }, isProUser = (function () {
        return CNBC_Utils.isUserPremium();
    }()), isUSAUser = (function () {
        var geo_cookie = CNBC_Utils.readCookie('geo_cookie');
        return (geo_cookie == null || geo_cookie == "USA");
    }()), checkFranchiseByUserLocation = (function () {
        return isUSAUser ? 'watch-live' : 'watch-live-international';
    }()), hasCorrectTimeIfWatchLive = function (container) {
        return ($(".alert-banner", container).attr("data-correcttime") == "1") ? true : false;
    }, override = false, count = 0, visited = null, preferences = [], refreshing = true, globalConfig = [], interval = 5000, simulating = false, simulateModes = [], simulator = {"alerts": {}};

    function settings() {
        return {
            nid: null,
            container: 'cnbc-alert-container',
            count: 1,
            interval: '5',
            mode: null,
            data: 'json',
            target: false,
            callback: null,
            cache: false,
            animate: false,
            dismiss: false,
            hide: false,
            cookie: false,
            fetch_now: false
        }
    };
    CNBC_Alerts.init = function (interval, configs) {
        interval = parseInt(interval) * 1000;
        for (var i = 0; i < configs.length; i++) {
            var alertConfig = $.extend({}, settings(), configs[i]);
            if (alertConfig.mode) {
                if (!alertConfig.nid)alertConfig.nid = modeConfig[alertConfig.mode].nid;
                if (!configs[i].container)alertConfig.container = alertConfig.container + '-' + modeConfig[alertConfig.mode].tag;
                alertConfig.interval = parseInt(alertConfig.interval) * 1000;
                alertConfig.url = url;
                this.configure(alertConfig);
            } else {
                return false;
            }
        }
        function pollAlertData() {
            if (alertConfig.fetch_now) {
                fetchAlertData();
                alertConfig.fetch_now = false;
            }
            if (interval > 5000) {
                setInterval(function () {
                    if (refreshing)fetchAlertData();
                }, interval);
            }
        }

        function fetchAlertData() {
            var self = this;
            $.ajax({
                url: alertConfig.url,
                type: 'get',
                dataType: alertConfig.data,
                jsonpCallback: alertConfig.callback,
                cache: alertConfig.cache,
                data: {},
                success: function (data) {
                    var d = {'alerts': {}};
                    for (var i = 0; i < globalConfig.length; i++) {
                        var mode = modeConfig[globalConfig[i].mode].tag;
                        if ($.inArray(globalConfig[i].mode.replace(/_/g, '-'), simulateModes) != -1) {
                            if (simulator.alerts[mode])d.alerts[mode] = simulator.alerts[mode];
                        } else {
                            d.alerts[mode] = data.alerts[mode];
                        }
                    }
                    if (globalConfig && globalConfig.length) {
                        for (var i = 0; i < globalConfig.length; i++) {
                            globalConfig[i].updateDynamicData(d);
                        }
                    }
                }
            });
        }

        pollAlertData();
    }
    CNBC_Alerts.simulateAlert = function (args, alerts) {
        simulateModes = args ? args.split(',') : [];
        var modes = ['breaking-news', 'pro-alert', 'watch-live', 'watch-live-international'], types = {
            'default': 3,
            'featured': 1
        };
        for (var i = 0; i < modes.length; i++) {
            if (alerts[modes[i]]) {
                var alert = {
                    "headline": alerts[modes[i]].headline || 'testing alert',
                    "nid": alerts[modes[i]].nid ? alerts[modes[i]].nid.toString() : '000000',
                    "node_classification": null,
                    "notification": 0,
                    "props": [],
                    "pubDate": '000000',
                    "region_id": types[alerts[modes[i]].type] || 3,
                    "type": "cnbcnewsstory",
                    "url": alerts[modes[i]].url
                };
                simulator.alerts[modes[i]] = [alert];
            } else {
                simulator.alerts[modes[i]] = null;
            }
        }
    }
    CNBC_Alerts.togglePolling = function () {
        refreshing = refreshing ? false : true;
    }
    CNBC_Alerts.configure = function (config) {
        var thisObj = this, container = config.container, type = typeof container, slideVisible = false, index = null, tag = modeConfig[config.mode].tag, $a;

        function configDynamicBehavior(data, callback) {
            var product = window.cnbc.config.product;
            if (!checkAlertInCookie(data) || (tag == "pro-alert" && !checkAlertType(data))) {
                container.slideUp(function () {
                    container.addClass('hide');
                    container.addClass('blocked');
                    if (callback)callback();
                });
            } else {
                if (!container.is(':visible') && data) {
                    if (data.nid || data.alerts[tag])container.removeClass('blocked');
                }
                if (tag === "breaking-news" || tag === "pro-alert" || configureWatchLive(product, data, config.nid)) {
                    container.slideDown(function () {
                        if (callback)callback();
                    });
                }
            }
        }

        function configureWatchLive(product, data, nid) {
            function hasNoUrl(data) {
                var noUrl = true;
                if (filterAlertByType(data)) {
                    noUrl = (filterAlertByType(data).url === null);
                } else {
                    noUrl = ($a.attr('href') === "");
                }
                return noUrl;
            }

            if (!hasNoUrl(data)) {
                if (hasCorrectTimeIfWatchLive(container)) {
                    if (isProUser) {
                        $a.attr('data-openlive', "1");
                        return true;
                    } else if (checkFranchiseByUserLocation === tag) {
                        isUSAUser ? setLinkTo('tv') : setLinkTo('marketing');
                        return true;
                    }
                } else if (checkFranchiseByUserLocation === tag) {
                    setLinkTo('tv');
                    return true;
                }
            } else if (checkFranchiseByUserLocation === tag || (isProUser && hasCorrectTimeIfWatchLive(container))) {
                setLinkTo();
                $a.addClass("noclick");
                return true;
            }
            return false;
        }

        function checkAlertInCookie(data) {
            if (!config.cookie)return true;
            visited = CNBC_Utils.readCookie("alert_preferences");
            if (visited != null) {
                preferences = visited.toString().split(",");
            } else {
                preferences = [];
            }
            if (!data || (data.alerts && !data.alerts[tag])) {
                index = preferences.indexOf($a.attr('data-nodeid'));
            } else {
                var nid = (data.alerts && filterAlertByType(data)) ? filterAlertByType(data).nid : data.nid;
                index = preferences.indexOf(nid.toString());
            }
            return index == -1 ? true : false;
        }

        function checkAlertType(data) {
            var pro_only;
            if (config['target'] && filterAlertByType(data)) {
                pro_only = filterAlertByType(data).pro_only;
                if (!isProUser && !!pro_only) {
                    return false;
                }
            } else {
                if (!isProUser && $a.attr('pro-only') == "true")return false;
            }
            return true;
        }

        function setLinkTo(page) {
            var linkTo;
            switch (page) {
                case'home':
                    linkTo = CNBC_Settings.baseurls.pub_base_protocol_agnostic;
                    break;
                case'marketing':
                    linkTo = CNBC_Settings.baseurls.pub_base_protocol_agnostic + '/application/pro';
                    break;
                case'tv':
                    break;
                default:
                    linkTo = 'javascript:void(0)';
                    break;
            }
            $a.attr('href', linkTo);
        }

        function updateAlertBanner(data, check) {
            $a.attr('data-nodeid', parseInt(data.nid)).attr('data-regionid', data.pro_only);
            $('.alert-title', container).text(modeConfig[config.mode].title);
            $('.alert-headline', container).text(data.headline);
            if (tag !== 'watch-live' && tag !== 'watch-live-international') {
                $a.attr('href', data.url || 'javascript:void(0)');
            }
            if (data.pro_live_stream_active !== undefined) {
                active_time = (data.pro_live_stream_active) ? "1" : "0";
                $a.attr("data-correcttime", active_time).attr("data-area", data.pro_live_stream_active);
            }
            toggleNoLinkAttribute(data.url);
        }

        function toggleNoLinkAttribute(url) {
            var noUrl = $a.hasClass("noclick");
            if (noUrl && url != null) {
                $a.removeClass("noclick");
            } else if (!noUrl && url == null) {
                $a.addClass("noclick");
            }
        }

        function renderAlertData(data) {
            count++;
            var latestNodeId = parseInt(getLatestNodeId()), latestHeadline = String(getLatestHeadline());
            if (data == null || data == undefined) {
                if (container.is(':visible')) {
                    if (config.animate) {
                        container.slideUp();
                    } else {
                        container.fadeOut(500, function () {
                            $(this).addClass('hide');
                        });
                    }
                }
                $('.alert-banner', container).attr('href', '').attr('data-nodeid', '');
                $('.alert-title', container).text('');
                $('.alert-headline', container).text('');
                container.addClass('hide');
            } else {
                if (parseInt(data.nid) !== latestNodeId || $.trim(data.headline) != latestHeadline) {
                    if (checkAlertInCookie(data)) {
                        if (container.is(':visible')) {
                            container.fadeOut(500, function () {
                                updateAlertBanner(data);
                                container.fadeIn(500, function () {
                                    $(this).removeClass('hide');
                                });
                            });
                        } else if (!container.hasClass('blocked')) {
                            updateAlertBanner(data);
                            container.removeClass('hide');
                            container.slideDown();
                        }
                    }
                } else if (!container.hasClass('blocked')) {
                    container.removeClass('hide');
                }
            }
        }

        function updateDynamicData(data) {
            configDynamicBehavior(data, function () {
                renderAlertData(filterAlertByType(data));
            });
        }

        function configCloseEvent(tag, headline, action) {
            if (config.cookie && tag != "breaking-news") {
                visited = CNBC_Utils.readCookie("alert_preferences");
                visited = visited ? visited + ',' + $('.alert-banner', container).attr('data-nodeid') : $('.alert-banner', container).attr('data-nodeid');
                CNBC_Utils.createCookie("alert_preferences", visited);
            }
            if (config.hide) {
                container.hide();
            }
            var omnitag = (tag == "breaking-news") ? "breaking" : (tag == "pro-alert") ? "pro" : "livestream", nid = $a.attr('data-nodeid');
            var trackParam = $a.hasClass('noclick') ? nid : (nid + '|' + $a.attr('href'));
            CNBC_Omniture.genericClickTracking({
                'params': {'l1': 'alert-pro'},
                'link': {"pev2": "Alert", "trkNav": "alerts|" + omnitag + '|' + headline + '|' + trackParam,},
                'cnbc': {"alertaction": action}
            });
        }

        function filterAlertByType(data, debug) {
            if (data && data.nid)return data;
            var alerts = data ? data.alerts : null, i;
            if (alerts != null && alerts[tag] && alerts[tag].length) {
                return alerts[tag][0];
            } else {
                return null;
            }
        }

        function getLatestNodeId() {
            return $a.attr('data-nodeID') || "";
        }

        function getLatestHeadline() {
            return $.trim($('.alert-headline', container).text()) || "";
        }

        if (type == 'string') {
            container = $('#' + container);
        } else if (type == 'object' && container.length == 1) {
            container = container;
        }
        $a = $('.alert-banner', container);
        if (config.dismiss) {
            var closeButton = $('#' + tag + '-close-button');
            closeButton.on('click', function () {
                configCloseEvent(tag, getLatestHeadline(), 'dismiss');
            });
            $a.on('click', function (event) {
                var nolink = $(this).hasClass("noclick");
                event.preventDefault();
                if (!nolink) {
                    configCloseEvent(tag, getLatestHeadline(), 'click');
                }
                closeAction[tag] = true;
                if ($(this).attr('data-openlive') == "1") {
                    showLivePlayer();
                } else if (!nolink) {
                    window.location.href = $(this).attr('href');
                }
            });
        }
        function showLivePlayer() {
            if (window.cnbc.config.product == "web") {
                var channel = "US";
                if (tag === 'watch-live-international') {
                    channel = $a.attr('data-area');
                }
                var popupWidth = 530, popupHeight = 300, popupLeftPos = 0, popupTopPos = 0;
                popupLeftPos = $('body').offset().left + 40;
                popupTopPos = $('body').offset().top;
                var currentPopOutPlayerURL = CNBC_Settings.baseurls.pub_base_protocol_agnostic + "/watch-live?size=530_300&channel=UPLYNK-" + channel.toUpperCase();
                var popup = window.open(currentPopOutPlayerURL, 'Live_Player', 'width=' + popupWidth + ',height=' + popupHeight + ',left=' + popupLeftPos + ',top=' + popupTopPos + ',directories=no,titlebar=no,status=no,toolbar=no,menubar=no,location=no,resizable=yes,scrollbars=no');
                if (window.focus)handler.focus();
                CNBC_Utils.removeUrlHash();
            } else {
                var channel = 0;
                if (tag === 'watch-live-international') {
                    channel = ($a.attr('data-area').toLowerCase() === 'europe') ? 1 : 2;
                }
                if ($('#live_player').length && $('#live_player')[0].contentWindow.CNBC_uplynk.playStatus != 'playing') {
                    var $channelSpan = $('#live_player')[0].contentWindow.CNBC_uplynk.$channelSpan;
                    $channelSpan.each(function (i, el) {
                        if (i === channel) {
                            $(el).addClass('selected');
                        } else {
                            $(el).removeClass('selected');
                        }
                    })
                    $('#live_player')[0].contentWindow.CNBC_uplynk.$overlayImgId.trigger('click');
                } else {
                    window.location.href = CNBC_Settings.baseurls.pub_base_protocol_agnostic;
                }
            }
        }

        configDynamicBehavior();
        globalConfig.push({'mode': config.mode, 'updateDynamicData': updateDynamicData});
    }
})(jQuery);
/* File BEGIN: http://fm.cnbc.com/applications/cnbc.com/staticcontent/scripts/libraries/FragmentUpdater/fragmentUpdater.1.js?t=1450133677 */
function CNBC_fragmentUpdater() {
};
(function ($) {
    CNBC_fragmentUpdater.prototype.fragmentRefreshMode = 0;
    CNBC_fragmentUpdater.prototype.nodeId = null;
    CNBC_fragmentUpdater.prototype.fragmentId = "";
    CNBC_fragmentUpdater.prototype.showLoader = false;
    CNBC_fragmentUpdater.prototype.showLoaderContainer = "";
    CNBC_fragmentUpdater.prototype._context = null;
    CNBC_fragmentUpdater.prototype.fragment_refresh = 1;
    CNBC_fragmentUpdater.prototype._refreshURL = "";
    CNBC_fragmentUpdater.prototype.updateMethod = "replace";
    CNBC_fragmentUpdater.prototype._createURL = function () {
        this._refreshURL = "/id/" + this.nodeId + "/fragment/";
    }
    CNBC_fragmentUpdater.prototype.init = function (args) {
        var args = args || {};
        if (args.fragmentId) {
            this.fragmentId = args.fragmentId;
        }
        if (args.showLoader) {
            this.showLoader = args.showLoader;
        }
        if (args.showLoaderContainer) {
            this.showLoaderContainer = args.showLoaderContainer;
        }
        this.setCallback(args.callback, args.context);
        if (args.nodeId) {
            this.nodeId = args.nodeId;
            this._createURL();
        } else {
            return null;
        }
        if (args.updateMethod) {
            this.updateMethod = args.updateMethod;
        }
        if (args.refresh != null && args.refresh === 0) {
            this.fragment_refresh = args.refresh;
        }
        if (args.fragmentRefreshMode != undefined && args.fragmentRefreshMode != null && args.fragmentRefreshMode == 1) {
            this.fragmentRefreshMode = 1;
            this._setIntervalDataRefresh();
        }
        else {
            this.fragmentRefreshMode = 0;
        }
    };
    CNBC_fragmentUpdater.prototype.setCallback = function (callback, context) {
        if (context) {
            this._context = context;
        }
        ;
        this._callback = callback;
    };
    CNBC_fragmentUpdater.prototype._callAjax = function (container, url, pro) {
        var self = this, containerClass = ".show ." + container.toLowerCase(), $container = $(containerClass).length ? $(containerClass) : $('#' + container), $loaderContainer = $('#' + this.showLoaderContainer).length ? $('#' + this.showLoaderContainer) : $container;
        if (this.showLoader) {
            CNBC_Utils.showLoader($container, "", "fragmentLoader");
        }
        var ajaxURL = this._refreshURL + container;
        if (this.fragmentRefreshMode != 1 && url != undefined) {
            ajaxURL = url;
        }
        if ($container.length) {
            $.ajax({
                url: ajaxURL, success: function (data) {
                    if (!($.trim($container.text()) == $.trim($(data).text()))) {
                        if (self.updateMethod == "append") {
                            $container.find('li').each(function () {
                                $(this).removeClass('last');
                            });
                            var tmp = $(data);
                            if (pro)tmp.find('.icon-cnbc-pro').remove();
                            $container.append(tmp.html());
                        } else {
                            $container.replaceWith(data);
                        }
                    }
                }, complete: function () {
                    if (self.showLoader) {
                        CNBC_Utils.hideLoader(null, $loaderContainer);
                    }
                    if (self._callback) {
                        self._callback.call(self._context);
                    }
                }
            });
        }
    };
    CNBC_fragmentUpdater.prototype._setIntervalDataRefresh = function () {
        var $this, id;
        var self = this;
        $("[data-refresh]").each(function () {
            $this = $(this);
            var id = $this.attr("id");
            var datarefresh = parseInt($this.attr("data-refresh")) * 1000;
            if (datarefresh > 5000) {
                var interval = setInterval(function () {
                    if (id != undefined) {
                        self._callAjax(id);
                    }
                    if (!self.fragment_refresh) {
                        clearInterval(interval);
                    }
                }, datarefresh);
            }
        });
    };
    CNBC_fragmentUpdater.prototype.updateFragment = function (url, pro) {
        if (this.fragmentId) {
            this._callAjax(this.fragmentId, url, pro);
        }
    };
})(jQuery);
/* File BEGIN: http://fm.cnbc.com/applications/cnbc.com/staticcontent/scripts/libraries/Poll/poll.2.js?t=1450133677 */
function CNBC_Poll() {
};
(function ($) {
    CNBC_Poll._callback = 'pollReqHandl';
    CNBC_Poll.errorString = "This poll is currenly unavailable. Please check back again later";
    CNBC_Poll.surveyText = 'Not a Scientific Survey. Results may not total 100% due to rounding.';
    CNBC_Poll.polls_settings;
    CNBC_Poll.polls = [];
    CNBC_Poll.pollServiceBase = "http://cnbc.com/services/polls";
    CNBC_Poll.jsonpCount = 0;
    CNBC_Poll.init = function (p_s) {
        CNBC_Poll.getPollIds(p_s.id);
        CNBC_Poll.pollServiceBase = p_s.pollservicebaseurl || CNBC_Poll.pollServiceBase;
        if (CNBC_Poll.polls.length > 0) {
            CNBC_Poll.updateDiv();
        }
    };
    CNBC_Poll.getPollIds = function (id) {
        var jqSelector = (id) ? "div#" + id : "div[data-pollId]";
        $(jqSelector).each(function (i, val) {
            CNBC_Poll.polls[i] = $(this).attr("data-pollId");
        });
    }
    CNBC_Poll.updateDiv = function () {
        var polls = CNBC_Poll.polls;
        var currPoll, pid, pCookie, hasPid;
        var pollLen = polls.length;
        for (var i = 0; i < pollLen; i++) {
            currPoll = polls[i];
            pCookie = CNBC_Utils.readCookie('CNBC_poll_config', true);
            if (pCookie) {
                hasPid = pCookie.indexOf(currPoll);
                if (hasPid >= 0) {
                    this.showPollResults(currPoll);
                } else {
                    this.showPollTable(currPoll);
                }
            } else {
                this.showPollTable(currPoll);
            }
        }
    };
    CNBC_Poll.showPollResults = function (pollId) {
        var url = CNBC_Poll.pollServiceBase + "/" + pollId;
        var pollObject;
        $.ajax({
            url: url,
            type: "get",
            dataType: "jsonp",
            jsonpCallback: CNBC_Poll._callback + CNBC_Poll.jsonpCount++,
            cache: true,
            success: function (response) {
                pollObject = CNBC_Poll.getPollObject(response);
                if (pollObject) {
                    $("#" + pollId + " .poll-question").html(pollObject.data.node.title);
                    CNBC_Poll.getResultsHtml(pollObject, null, pollId);
                }
            },
            error: function (request, error) {
                CNBC_Poll.populateError();
            }
        });
    };
    CNBC_Poll.getPollObject = function (response) {
        var responseText = JSON.stringify(response);
        var pollObject = eval('(' + responseText.replace(/#/g, "") + ')');
        if (pollObject.error == true) {
            CNBC_Poll.populateError();
            return false;
        }
        return pollObject;
    };
    CNBC_Poll.showPollTable = function (pollId) {
        var url = CNBC_Poll.pollServiceBase + "/" + pollId;
        var votesObject, total_votes, pollObject;
        $.ajax({
            url: url,
            type: "get",
            dataType: "jsonp",
            jsonpCallback: CNBC_Poll._callback + CNBC_Poll.jsonpCount++,
            cache: true,
            success: function (response) {
                pollObject = CNBC_Poll.getPollObject(response);
                if (pollObject) {
                    votesObject = pollObject.data.votes;
                    $("#" + pollId + " .container-options").css('display', "block");
                    if ($("#" + pollId).length) {
                        $("#" + pollId + " .poll-question").html(pollObject.data.node.title);
                        $("#" + pollId + " .poll-options").html(CNBC_Poll.getPollOptionsHtml(pollObject.data.node, pollId));
                        $("#" + pollId + " .poll-control a").attr("href", "javascript:CNBC_Poll.performVote('" + pollId + "')");
                    }
                }
            },
            error: function (request, error) {
                CNBC_Poll.populateError();
            }
        });
    };
    CNBC_Poll.performVote = function (pId) {
        var flag = 0;
        var rad_val, currOpt;
        var formObj = document.getElementById("pollform_" + pId);
        var opt = formObj.pollOptions;
        var optLen = opt.length;
        for (var i = 0; i < optLen; i++) {
            currOpt = opt[i];
            if (currOpt.checked) {
                rad_val = currOpt.value;
                flag = 1;
            }
        }
        if (flag == 0) {
            alert('Please select an option to vote');
            return;
        }
        var url = CNBC_Poll.pollServiceBase + "/" + pId + "/" + rad_val + "/" + pId;
        $.ajax({
            url: url, type: "get", dataType: "jsonp", success: function (response) {
                var pollObject = CNBC_Poll.getPollObject(response);
                if (pollObject) {
                    CNBC_Poll.getResultsHtml(pollObject, rad_val, pId);
                    CNBC_Poll.setCookie(pollObject.data.node.nid);
                }
            }, error: function (request, error) {
                CNBC_Poll.populateError();
            }
        });
    };
    CNBC_Poll.setCookie = function (nid) {
        var cookieValue = nid;
        var c = CNBC_Utils.readCookie('CNBC_poll_config', true);
        if (!CNBC_Common.isNull(c)) {
            cookieValue = c + ',' + nid;
        }
        CNBC_Utils.createCookie('CNBC_poll_config', cookieValue, 10000, true);
    }
    CNBC_Poll.getLabel = function (resultObj, myoffset) {
        var label;
        $.each(resultObj, function (xx, yy) {
            if (myoffset == yy['vote_offset']) {
                label = yy.label;
            }
        });
        return label;
    };
    CNBC_Poll.getPollOptionsHtml = function (pollObject, pollId) {
        var tableHtml = [];
        tableHtml.push('<form name="pollform_' + pollId + '" id="pollform_' + pollId + '">');
        $.each(pollObject.choice, function (i, c) {
            tableHtml.push('<div class="optionWrapper">');
            tableHtml.push('<input type="radio" name="pollOptions" value=' + c['vote_offset'] + '>');
            tableHtml.push(c.label);
            tableHtml.push('</input>');
            tableHtml.push('</div>');
        });
        tableHtml.push('</form>');
        return tableHtml.join('');
    };
    CNBC_Poll.getTotalVotes = function (votesObject) {
        var total_votes = 0;
        if (!CNBC_Common.isNull(votesObject)) {
            $.each(votesObject, function (i, j) {
                total_votes += parseInt(j);
            });
        }
        return total_votes;
    };
    CNBC_Poll.getResultsHtml = function (pollObject, rad_val, pId) {
        var self = this;
        var total_votes = 0;
        var percent = 0;
        var votesObject = pollObject.data.votes || {};
        var results_html = [];
        var currVotes;
        total_votes = CNBC_Poll.getTotalVotes(votesObject);
        if (rad_val != null) {
            ++total_votes;
        }
        var pChoice = pollObject.data.node.choice || [];
        if (total_votes) {
            var index = 0;
            $.each(pChoice, function (i, j) {
                index = i + 1;
                currVotes = pollObject.data.votes[index];
                if ((!currVotes && rad_val && index != rad_val) || (!currVotes && !rad_val)) {
                    percent = 0;
                } else if (!currVotes && rad_val && index == rad_val) {
                    percent = CNBC_Poll.getPercentage(total_votes, 1.00);
                } else if (rad_val && index == rad_val) {
                    percent = CNBC_Poll.getPercentage(total_votes, parseFloat(currVotes) + 1);
                } else {
                    percent = CNBC_Poll.getPercentage(total_votes, parseFloat(currVotes));
                }
                CNBC_Poll.displayBar(results_html, j.label, percent);
            });
        } else {
            $.each(pChoice, function (i, j) {
                CNBC_Poll.displayBar(results_html, j.label, percent);
            });
        }
        $("#" + pId + " .container-result .pollTotalVotes .poll-count").html(total_votes);
        $("#" + pId + " .container-options").css('display', "none");
        $("#" + pId + " .container-result").css('display', "block");
        if ($("#" + pId + " .container-result .graph").length) {
            $("#" + pId + " .container-result .graph").html(results_html.join('')).fadeIn("slow", function () {
                CNBC_Poll.animateResults(this);
            });
        }
    };
    CNBC_Poll.getPercentage = function (total_votes, currVotes) {
        return Math.round((currVotes / total_votes) * 100);
    }
    CNBC_Poll.displayBar = function (results_html, label, percent) {
        results_html.push('<p class="bar-title">');
        results_html.push(label);
        results_html.push('</p><div class="pollPercentText">' + percent + '%</div><div class="bar-container">');
        results_html.push('<div class="pollBar" data-percent="' + percent + '"></div></div>');
    };
    CNBC_Poll.animateResults = function ($obj) {
        var percentage, $this;
        $("div.pollBar", $obj).each(function () {
            $this = $(this);
            percentage = $this.attr('data-percent') + "%";
            $this.css({width: "0%"}).animate({width: percentage}, 'slow');
        });
    };
    CNBC_Poll.populateError = function () {
        var errorDiv = '<div class="pollerror">' + CNBC_Poll.errorString + '</div>';
        if ($('#polltable').length) {
            $('#polltable').html(errorDiv);
        }
    };
})(jQuery);
/* File BEGIN: http://fm.cnbc.com/applications/cnbc.com/staticcontent/scripts/libraries/tabs/tab.1.js?t=1450133677 */
function CNBC_Tab() {
};
(function ($) {
    CNBC_Tab.prototype._container = null;
    CNBC_Tab.prototype._callback = null;
    CNBC_Tab.prototype._tabIndex = 1;
    CNBC_Tab.prototype.$tabContainer = null;
    CNBC_Tab.prototype._tabPrefix = 'tab_';
    CNBC_Tab.selectedTabClass = 'selected';
    CNBC_Tab.prototype.initiateSwipeOnTabs = false;
    CNBC_Tab.prototype.init = function (args) {
        var thisObj = this;
        var args = args || {};
        if (args.container != null) {
            thisObj.setContainer(args.container);
            thisObj.setOptionalOverrides(args);
            thisObj.initElements();
            thisObj.showDefaultTab();
            thisObj.initEvents();
        }
        else {
            CNBC_Common.ConsoleLog('Missing Arguments in Tab Library...');
        }
    };
    CNBC_Tab.prototype.setOptionalOverrides = function (args) {
        var thisObj = this;
        if (args.tabIndex) {
            thisObj._tabIndex = args.tabIndex;
        }
        if (args.callback) {
            thisObj.setCallback(args.callback, args.context);
        }
        if (args.tabPrefix) {
            thisObj._tabPrefix = args.tabPrefix;
        }
    };
    CNBC_Tab.prototype.setCallback = function (callback, context) {
        var thisObj = this;
        if (context) {
            thisObj._context = context;
        }
        ;
        thisObj._callback = eval(callback);
    };
    CNBC_Tab.prototype.setContainer = function (container) {
        var thisObj = this;
        var type = typeof container;
        var container;
        if (type == 'string') {
            container = $('#' + container);
        } else if (type == 'object' && container.length == 1) {
            container = container;
        } else {
            container = $(container);
        }
        thisObj._container = container;
    };
    CNBC_Tab.prototype.showDefaultTab = function () {
        var thisObj = this;
        if (thisObj._tabIndex) {
            var sizeTabs = thisObj.$tabs.children().length;
            if (thisObj._tabIndex > sizeTabs) {
                thisObj._tabIndex = 1;
            }
            thisObj.toggleTab($('ul >:eq(' + (thisObj._tabIndex - 1) + ')', thisObj._container));
        }
        else {
            thisObj.$tabs.removeClass(CNBC_Tab.selectedTabClass);
        }
    };
    CNBC_Tab.prototype.initEvents = function () {
        var thisObj = this;
        thisObj.$tabs.on('click', function () {
            thisObj.toggleTab($(this));
            if (thisObj._callback) {
                thisObj._callback.call(thisObj._context);
            }
            return false;
        });
    };
    CNBC_Tab.prototype.getMaxWidthOfTabs = function () {
        var thisObj = this;
        var maxTabWidth = 0;
        thisObj.$tabs.each(function () {
            maxTabWidth += $(this).outerWidth(true);
        });
        return maxTabWidth + 10;
    };
    CNBC_Tab.prototype.initElements = function () {
        var thisObj = this;
        thisObj.$tabUL = $('>:eq(0)', thisObj._container);
        thisObj.$tabs = $('> li', thisObj.$tabUL);
        thisObj.$tabContainer = $('>:eq(1)', thisObj._container);
        thisObj.$listContents = $('> li', thisObj.$tabContainer);
    };
    CNBC_Tab.prototype.toggleTab = function ($el) {
        var thisObj = this;
        var $selectedTab = $('>:eq(' + $el.index() + ')', thisObj.$tabContainer);
        thisObj.$listContents = $('> li', thisObj.$tabContainer);
        $el.siblings().removeClass(CNBC_Tab.selectedTabClass);
        $el.addClass(CNBC_Tab.selectedTabClass);
        thisObj.$listContents.removeClass('show');
        if ($selectedTab != undefined && $selectedTab != null && $selectedTab) {
            $selectedTab.addClass('show');
        }
    };
})(jQuery);
/* File BEGIN: http://fm.cnbc.com/applications/cnbc.com/staticcontent/scripts/libraries/Carousel2/CNBC_Animation.js?t=1450133677 */
var CNBC_Animation = function () {
};
(function () {
    CNBC_Animation.prototype = {
        targetElement: null,
        animationType: 'slide',
        animationStep: 1,
        animationInterval: 10,
        wiggleDistance: 35,
        wiggleLonger: false,
        initialSpeed: 0,
        onAnimationStarting: null,
        onAnimationComplete: null,
        wiggleOnAnimationComplete: null,
        _animating: false,
        _tmpAnimationStep: 0,
        _animationIntervalID: 0,
        _animationSpeed: 0,
        _tempAnimateFinalPos: null,
        _swipeHalfDistance: 0,
        _beforeAnimationPos: 0,
        _pixelsToAnimate: 0,
        _currentPos: 0,
        init: function (args) {
            for (var param in args) {
                eval('this.' + param + ' = args.' + param + ';');
            }
        },
        slideAnimation: function (pixelsToAnimate, initialSpeed, onAnimationComplete, ignoreIsAnimatingCheck) {
            if (this._animating == true && typeof(ignoreIsAnimatingCheck) == 'undefined')
                return;
            this._animating = true;
            this.onAnimationComplete = (onAnimationComplete == null) ? this.onAnimationComplete : onAnimationComplete;
            this._currentPos = this._beforeAnimationPos = this.targetElement.position().left;
            this._pixelsToAnimate = pixelsToAnimate;
            this.animateFinalPos = pixelsToAnimate + this._currentPos;
            this._swipeHalfDistance = pixelsToAnimate / 2;
            this._animationSpeed = this.initialSpeed = (pixelsToAnimate > 0) ? initialSpeed : -initialSpeed;
            this._slideAnimationWillStart();
        },
        _slideAnimationWillStart: function () {
            var self = this;
            if (this.onAnimationStarting != null)
                this.onAnimationStarting();
            this._animationIntervalID = setInterval(function () {
                self._slideAnimate()
            }, this.animationInterval);
        },
        _slideAnimate: function () {
            var self = this;
            this._currentPos = this._currentPos + this._animationSpeed;
            var relativeOffset = this._currentPos - this._beforeAnimationPos;
            if (relativeOffset < this._swipeHalfDistance)
                this._animationSpeed = this._animationSpeed + this.animationStep; else
                this._animationSpeed = this._animationSpeed - this.animationStep;
            if (this._pixelsToAnimate > 0) {
                if (this._currentPos >= this.animateFinalPos || this._animationSpeed < 0) {
                    this._slideAnimationFinishing();
                    return;
                }
            }
            else {
                if (this._currentPos <= this.animateFinalPos || this._animationSpeed > 0) {
                    this._slideAnimationFinishing();
                    return;
                }
            }
            var newPos = Math.round(this._currentPos) + 'px';
            this.targetElement.css('left', newPos);
        },
        _slideAnimationFinishing: function () {
            clearInterval(this._animationIntervalID);
            if (this._tempAnimateFinalPos == null) {
                this._tempAnimateFinalPos = this.animateFinalPos;
                this._tmpAnimationStep = this.animationStep;
            }
            this._adjustFinalPosition();
            if (this.wiggleOnAnimationComplete) {
                this.wiggleOnAnimationComplete();
                return;
            }
            if (this.initialSpeed != 0) {
                this._wiggle();
            }
            else {
                this._slideAnimationFinished();
            }
        },
        _slideAnimationFinished: function () {
            this._adjustFinalPosition();
            this._animationSpeed = 0;
            if (this.onAnimationComplete != null) {
                this.onAnimationComplete();
            }
            this._animating = 0;
        },
        _wiggle: function () {
            var self = this;
            var currentAnimationStep = this.animationStep;
            var distance = (this._pixelsToAnimate > 0) ? this.wiggleDistance : -this.wiggleDistance;
            if (this.wiggleLonger == true)
                this._wiggleLonger(distance); else
                this._wiggleShorter(distance);
        },
        _wiggleShorter: function (distance) {
            var self = this;
            this._wiggleOnAnimationCompleted(distance, 2, 3, function () {
                self.animationStep = 0.5;
                var newDistance = -distance;
                self._wiggleOnAnimationCompleted(newDistance, 1, 0, function () {
                    self._wiggleFinished();
                })
            });
        },
        _wiggleLonger: function (distance) {
            var self = this;
            this._wiggleOnAnimationCompleted(distance, 2, 3, function () {
                self.animationStep = 0.8;
                var newDistance = -(distance * 2) + 1;
                self._wiggleOnAnimationCompleted(newDistance, 1, 2, function () {
                    self.animationStep = 0.2;
                    var newDistance = (distance / 2) - 2;
                    self._wiggleOnAnimationCompleted(distance, 1, 0, function () {
                        self._wiggleFinished();
                    })
                })
            });
        },
        _wiggleFinished: function () {
            this.animationStep = this._tmpAnimationStep;
            this.animateFinalPos = self._tempAnimateFinalPos;
            this.wiggleOnAnimationComplete = null;
            this._tempAnimateFinalPos = null;
            this._slideAnimationFinished();
        },
        _wiggleOnAnimationCompleted: function (distance, initialSpeed, animationStep, onAnimationComplete) {
            this.wiggleOnAnimationComplete = onAnimationComplete;
            this.slideAnimation(distance, initialSpeed, null, true);
        },
        _adjustFinalPosition: function () {
            this.targetElement.css('left', this.animateFinalPos);
        }
    }
})($);
/* File BEGIN: http://fm.cnbc.com/applications/cnbc.com/staticcontent/scripts/libraries/Carousel2/CNBC_Carousel.js?t=1450133677 */
function CNBC_Carousel() {
};
(function ($) {
    CNBC_Carousel.prototype.carouselWrapper = null;
    CNBC_Carousel.prototype.transitionType = 'fading';
    CNBC_Carousel.prototype.pageType = 'dot';
    CNBC_Carousel.prototype.transitionSpeed = 2;
    CNBC_Carousel.prototype.autoTransitionInterval = 7000;
    CNBC_Carousel.prototype.smartPageJump = 1;
    CNBC_Carousel.prototype.disableFreeSwipe = false;
    CNBC_Carousel.prototype.initialSpeed = 0;
    CNBC_Carousel.prototype.swipeInitialSpeed = 0;
    CNBC_Carousel.prototype.wiggleLonger = false;
    CNBC_Carousel.prototype.swipeThreshold = 3;
    CNBC_Carousel.prototype.screensSpacing = 30, CNBC_Carousel.prototype._isSlidePlaying = true;
    CNBC_Carousel.prototype.beforeTransition = null;
    CNBC_Carousel.prototype.afterTransition = null;
    CNBC_Carousel.prototype.callBackPlay = null;
    CNBC_Carousel.prototype.callBackPause = null;
    CNBC_Carousel.prototype.onMouseOut = null;
    CNBC_Carousel.prototype.$_carouselElements = null;
    CNBC_Carousel.prototype.$_carouselUL = null;
    CNBC_Carousel.prototype._autoTransition = null;
    CNBC_Carousel.prototype._inTransition = 0;
    CNBC_Carousel.prototype._activeElementIndex = 0;
    CNBC_Carousel.prototype._lastActiveElementIndex = 0;
    CNBC_Carousel.prototype._elementsCount = 0;
    CNBC_Carousel.prototype._initialSpeed = 0;
    CNBC_Carousel.prototype._freeSwipeX = 0;
    CNBC_Carousel.prototype._animation = null;
    CNBC_Carousel.prototype._swipe = null;
    CNBC_Carousel.prototype._initialDirection = 0;
    CNBC_Carousel.prototype._$pageButtons = null;
    CNBC_Carousel.prototype.disableVerticalOutOfBoundariesCheck = 0;
    CNBC_Carousel.prototype.init = function (args) {
        var self = this;
        for (var param in args) {
            eval('this.' + param + ' = args.' + param + ';');
        }
        if (this.carouselWrapper) {
            self.setContainer();
            this.$_carouselElements = self.carouselWrapper.find('div.carousel_body ul.slide > li');
            this.$_carouselUL = this.carouselWrapper.find('div.carousel_body > ul');
            this._animation = new CNBC_Animation();
            this._animation.init({
                animationStep: this.transitionSpeed,
                wiggleLonger: this.wiggleLonger,
                targetElement: this.$_carouselUL
            });
            this._swipe = new CNBC_Swipe();
            this._swipe.init({
                swipeTarget: this.$_carouselUL, onSwiped: function (pos, direction) {
                    direction = (direction.horizontal > 0) ? 1 : -1;
                    var distance = Math.abs(pos.xx);
                    var li_width = self.carouselWrapper.find('li').outerWidth();
                    if (direction != self._initialDirection || distance < li_width / self.swipeThreshold)
                        self.freeswipeSwipeBack()
                    else {
                        self._initialSpeed = self.swipeInitialSpeed;
                        self.beginTransition(direction);
                    }
                    self._initialDirection = 0;
                }, onSwiping: function (pos, direction) {
                    if (direction.horizontal != 0 && self._initialDirection == 0) {
                        self._initialDirection = (direction.horizontal > 0) ? 1 : -1;
                    }
                    if (self.disableFreeSwipe == true || self.transitionType != 'sliding')
                        return;
                    self.freeSwipe(pos);
                }
            });
            this._elementsCount = this.$_carouselElements.length;
            this._initialSpeed = this.initialSpeed;
            var li_class = this.transitionType + '_li';
            this.$_carouselElements.each(function (key, element) {
                $(element).addClass(li_class);
            });
            eval("this._" + this.transitionType + "Initialize()");
            this.carouselWrapper.find('.left_scroll_btn').click(function () {
                self.beginTransition(1);
            });
            this.carouselWrapper.find('.right_scroll_btn').click(function () {
                self.beginTransition(-1);
            });
            if (!CNBC_Utils.isTouchEnabled()) {
                this.carouselWrapper.mouseenter(function () {
                    self._mouseOverMarket = true;
                    if (self._autoTransition != null) {
                        clearInterval(self._autoTransition);
                        self._autoTransition = null;
                    }
                });
                this.carouselWrapper.mouseleave(function () {
                    self._mouseOverMarket = false;
                    if (self.autoTransitionInterval != 0) {
                        self._setAutoTransition();
                    }
                });
            }
            this.$_playButton = this.carouselWrapper.find('.small-button');
            this.$_playButton.click(function () {
                if (self._isSlidePlaying) {
                    self._isSlidePlaying = false;
                    self.$_playButton.find('.icon').removeClass('pause').addClass('play');
                    if (CNBC_Utils.isTouchEnabled()) {
                        if (self._autoTransition != null) {
                            clearInterval(self._autoTransition);
                            self._autoTransition = null;
                        }
                    }
                } else {
                    self._isSlidePlaying = true;
                    self.$_playButton.find('.icon').removeClass('play').addClass('pause');
                    self.beginTransition(-1);
                    if (CNBC_Utils.isTouchEnabled()) {
                        if (self.autoTransitionInterval != 0) {
                            self._setAutoTransition();
                        }
                    }
                }
                if (self.callBackControl != null) {
                    self.callBackControl(self._isSlidePlaying, self._activeElementIndex);
                }
            });
            this.$_carouselUL.mouseout(function (e) {
                eval("self._" + self.transitionType + "OnMouseOut(e)");
                if (self.onMouseOut != null)
                    self.onMouseOut();
            });
            if (this.autoTransitionInterval != 0) {
                this._setAutoTransition();
            }
            if (this.carouselWrapper.find('.pager_box').length != 0) {
                this._drawPagerBox();
            }
            if (this.transitionType == 'sliding') {
                self._swapImages(1);
            }
        }
    };
    CNBC_Carousel.prototype.setPlayPause = function (isSlidePlaying, index) {
        if (!isSlidePlaying) {
            this._isSlidePlaying = false;
            if (this._autoTransition != null) {
                clearInterval(this._autoTransition);
                this._autoTransition = null;
            }
            this.$_playButton.find('.icon').removeClass('pause').addClass('play');
            this.pageBtnClicked(index);
        }
    };
    CNBC_Carousel.prototype.setContainer = function () {
        var type = typeof this.carouselWrapper;
        var container = this.carouselWrapper;
        if (type == 'string') {
            container = $('#' + container);
        } else if (type == 'object' && container.length == 1) {
            container = container;
        } else {
            container = $(container);
        }
        this.carouselWrapper = container;
    };
    CNBC_Carousel.prototype.pageBtnClicked = function (selectedElementIndex) {
        if (this._inTransition == 1 || this._activeElementIndex == selectedElementIndex) {
            return;
        }
        var step = this._activeElementIndex - selectedElementIndex;
        if (this.smartPageJump == 1) {
            var pagesToScroll = this._activeElementIndex - selectedElementIndex;
            if (Math.abs(pagesToScroll) > (this._elementsCount / 2)) {
                step = this._elementsCount - Math.abs(pagesToScroll);
                if (pagesToScroll > 0)
                    step = step * -1;
            }
        }
        this.beginTransition(step);
    };
    CNBC_Carousel.prototype.beginTransition = function (steps) {
        if (steps == 'left')
            steps = -1; else if (steps == 'right')
            steps = 1;
        if (this._inTransition == 1)
            return;
        this._lastActiveElementIndex = this._activeElementIndex;
        steps = (typeof(steps) == 'undefined' ? 1 : steps);
        if (this.beforeTransition != null) {
            this.beforeTransition();
        }
        this._inTransition = 1;
        eval("this._" + this.transitionType + "Transition(" + steps + ")");
        if (!this._mouseOverMarket)
            this._setAutoTransition();
    };
    CNBC_Carousel.prototype.transitionFinished = function () {
        this._pagerBoxSetActivePage();
        if (this.afterTransition != null)
            this.afterTransition(this._activeElementIndex);
        this._inTransition = 0;
    };
    CNBC_Carousel.prototype._drawPagerBox = function () {
        var self = this;
        var htmlText = '';
        self.$_carouselElements.each(function (i) {
            if (self.pageType != "tab") {
                var className = i == 0 ? ' class="active"' : '';
                htmlText += '<li' + className + '><a href="javascript:"><span>&#9679;</span></a></li>';
            }
        });
        if (self.pageType != "tab") {
            htmlText = '<ul>' + htmlText + '</ul>';
            self.carouselWrapper.find('div.pager_box').html(htmlText);
        }
        self._$pageButtons = this.carouselWrapper.find('div.pager_box ul li');
        self.$_carouselElements.each(function (i) {
            self._$pageButtons.eq(i).click(function () {
                self.pageBtnClicked(i);
                self._pagerBoxSetActivePage();
            });
        });
    };
    CNBC_Carousel.prototype._pagerBoxSetActivePage = function () {
        if (this.carouselWrapper.find('div.pager_box').length != 0) {
            if (this.pageType == "tab") {
                this._$pageButtons.eq(this._lastActiveElementIndex).removeClass('selected');
                this._$pageButtons.eq(this._activeElementIndex).addClass('selected');
            } else {
                this._$pageButtons.eq(this._lastActiveElementIndex).removeClass('active');
                this._$pageButtons.eq(this._activeElementIndex).addClass('active');
            }
        }
    };
    CNBC_Carousel.prototype._setAutoTransition = function () {
        if (this.autoTransitionInterval == 0 || !this._isSlidePlaying) {
            return;
        }
        var self = this;
        if (this._autoTransition != null) {
            clearInterval(this._autoTransition);
        }
        this._autoTransition = setInterval(function () {
            self.beginTransition(-1);
        }, this.autoTransitionInterval);
    };
    CNBC_Carousel.prototype._slidingInitialize = function () {
    };
    CNBC_Carousel.prototype._slidingTransition = function (step) {
        var self = this;
        step = typeof(step) == 'undefined' ? 1 : step;
        var orientation = Math.abs(step) > 1 ? 0 : step;
        var w = this.$_carouselElements.outerWidth() - (this._freeSwipeX * orientation);
        w = w * step;
        var offset = w;
        this._activeElementIndex = this._activeElementIndex - step;
        if (this._activeElementIndex < 0) {
            this._activeElementIndex = this._elementsCount - (step - this._lastActiveElementIndex);
        }
        else if (this._activeElementIndex > this._elementsCount - 1) {
            this._activeElementIndex = -(this._elementsCount + (step - this._lastActiveElementIndex));
        }
        if (step < 0) {
        }
        else {
            this._swapImages(step)
        }
        this._freeSwipeX = 0;
        this._animation.slideAnimation(offset, this._initialSpeed, function () {
            self._slidingTransitionFinished(step);
        });
        this._initialSpeed = this.initialSpeed;
    }, CNBC_Carousel.prototype._slidingTransitionFinished = function (step) {
        if (step < 0) {
            this._swapImages(step)
        }
        else {
        }
        this.transitionFinished();
    };
    CNBC_Carousel.prototype._swapImages = function (step, disableShift) {
        disableShift = typeof(disableShift) != 'undefined' || disableShift == true ? true : false;
        var absoluteStep = Math.abs(step);
        for (var q = 0; q < absoluteStep; q++) {
            if (step < 0) {
                this.$_carouselUL.find('li:last').after(this.$_carouselUL.find('li:first'));
            }
            else {
                this.$_carouselUL.find('li:first').before(this.$_carouselUL.find('li:last'));
            }
        }
        if (disableShift == false) {
            var w = this.carouselWrapper.find('.carousel_ul li').outerWidth();
            var x = this.carouselWrapper.find('.carousel_ul').position().left;
            if (step < 0) {
                w = x + (w * absoluteStep);
                w = w + 'px';
                this.$_carouselUL.css('left', w);
            }
            else {
                w = (x - (w * absoluteStep))
                w = w + 'px';
                this.$_carouselUL.css('left', w);
            }
        }
    };
    CNBC_Carousel.prototype._slidingOnMouseOut = function (e) {
        if (this._freeSwipeX != 0) {
            var wrapper = this.carouselWrapper;
            var elementWidth = this.$_carouselElements.outerWidth();
            var elementHeight = this.$_carouselElements.outerHeight();
            var px = e.pageX - wrapper.offset().left;
            var py = e.pageY - wrapper.offset().top;
            if (px < 5 || py < 5 || px > elementWidth - 5 - this.screensSpacing || py > elementHeight - 5) {
                this._outOfBoundariesAction();
            }
        }
    };
    CNBC_Carousel.prototype._outOfBoundariesAction = function () {
        if (this._swipe.swipeLength > this.$_carouselElements.outerWidth() / this.swipeThreshold) {
            direction = (this._swipe._orientation.horizontal > 0) ? 1 : -1;
            this._initialSpeed = this.swipeInitialSpeed;
            this.beginTransition(direction);
            this._swipe.clearCurrentSwipeEvent();
        }
        else {
            this.freeswipeSwipeBack();
        }
    };
    CNBC_Carousel.prototype.freeSwipe = function (pos) {
        if (this._inTransition == 1)
            return;
        this._setAutoTransition();
        var elementWidth = this.$_carouselElements.outerWidth();
        var elementHeight = this.$_carouselElements.outerHeight();
        var px = pos.x + pos.xx;
        var py = pos.y + pos.yy;
        if (this.disableVerticalOutOfBoundariesCheck == 0) {
            if (px < 1 || px > elementWidth - 1 || py < 1 || py > elementHeight - 1) {
                this._outOfBoundariesAction();
                return;
            }
        }
        else {
            if (px < 1 || px > elementWidth - 1) {
                this._outOfBoundariesAction();
                return;
            }
        }
        this._freeSwipeX = pos.xx;
        var xx = (this._freeSwipeX - elementWidth) + 'px';
        this.$_carouselUL.css('left', xx);
    };
    CNBC_Carousel.prototype.freeswipeSwipeBack = function () {
        var self = this;
        this._inTransition = 1;
        if (this._freeSwipeX == 0) {
            this._inTransition = 0;
            return;
        }
        this._swipe.clearCurrentSwipeEvent();
        var offset = -this._freeSwipeX;
        this._animation.slideAnimation(offset, 5, function () {
            self._freeSwipeX = 0;
            self._inTransition = 0;
        });
    };
    CNBC_Carousel.prototype._fadingInitialize = function () {
    };
    CNBC_Carousel.prototype._fadingTransition = function (step) {
        var self = this;
        var currentActiveElement = this._activeElementIndex;
        this._activeElementIndex = this._activeElementIndex - step;
        if (this._activeElementIndex < 0) {
            this._activeElementIndex = this._elementsCount - (step - this._lastActiveElementIndex);
        }
        else if (this._activeElementIndex > this._elementsCount - 1) {
            this._activeElementIndex = -(this._elementsCount + (step - this._lastActiveElementIndex));
        }
        var fadingOutEl = this.$_carouselElements.eq(currentActiveElement);
        var fadingInEl = this.$_carouselElements.eq(this._activeElementIndex);
        fadingOutEl.fadeOut(this.transitionSpeed, function () {
        });
        fadingOutEl.removeClass('active');
        fadingInEl.fadeIn(this.transitionSpeed, function () {
            self.transitionFinished();
        });
        fadingInEl.addClass('active');
    }
    CNBC_Carousel.prototype._fadingOnMouseOut = function () {
    }
})(jQuery);
/* File BEGIN: http://fm.cnbc.com/applications/cnbc.com/staticcontent/scripts/libraries/Carousel2/CNBC_Swipe.js?t=1450133677 */
var CNBC_Swipe = function () {
};
(function () {
    CNBC_Swipe.prototype = {
        swipeTarget: null,
        minSwipeDistance: 20,
        swipeLength: 0,
        isTouchDevice: false,
        onSwiped: null,
        onSwiping: null,
        _startEvent: null,
        _moveEvent: null,
        _endEvent: null,
        _swipeStartedTime: 0,
        _orientation: {'horizontal': '', 'vertical': ''},
        _swipeStartedX: 0,
        _swipeStartedY: 0,
        _swipeX: 0,
        _swipeY: 0,
        _swipeLastX: 0,
        _swipeLastY: 0,
        _offsetLeft: 0,
        _offsetTop: 0,
        _verticalCount: 0,
        _horizontalCount: 0,
        _verticalLastValues: null,
        _horizontalLastValues: null,
        _preventVerticalSwiping: false,
        _vertical: 0,
        _horizontal: 0,
        _count: 0,
        init: function (args) {
            var self = this;
            for (var param in args) {
                eval('this.' + param + ' = args.' + param + ';');
            }
            this._offsetTop = this.swipeTarget.offset().top;
            this._offsetLeft = this.swipeTarget.offset().left;
            var touch = "ontouchend"in document, _startEvent = (touch) ? 'touchstart' : 'mousedown', _moveEvent = (touch) ? 'touchmove' : 'mousemove', _endEvent = (touch) ? 'touchend' : 'mouseup';
            this.isTouchDevice = touch;
            this.swipeTarget.bind(_startEvent, function (e) {
                if (!("ontouchend"in document))
                    e.preventDefault();
                self._swipeStartedTime = e.timeStamp;
                self._swipeStartedX = self._getRelativeMousePos(e).left;
                self._swipeStartedY = self._getRelativeMousePos(e).top;
                self._orientation.horizontal = 0;
                self._orientation.vertical = 0;
                self._count = 0;
                self.horizontal = 0;
                self.vertical = 0;
            });
            this.swipeTarget.bind(_moveEvent, function (e) {
                if (self._swipeStartedTime != 0) {
                    self._swipeY = self._getRelativeMousePos(e).top - self._swipeStartedY;
                    self._swipeX = self._getRelativeMousePos(e).left - self._swipeStartedX;
                    self.swipeLength = Math.max(Math.abs(self._swipeY), Math.abs(self._swipeX));
                    if (self.swipeLength > self.minSwipeDistance || self._swipeStarted == 1) {
                        self._swipeStarted = 1;
                        self.lastOrientation = self._getSwipeOrientation();
                        if (self.onSwiping != null) {
                            self.onSwiping({
                                'x': self._swipeStartedX,
                                'y': self._swipeStartedY,
                                'xx': self._swipeX,
                                'yy': self._swipeY
                            }, self.lastOrientation);
                        }
                        self._swipeLastX = self._swipeX;
                        self._swipeLastY = self._swipeY;
                    }
                }
                var h = Math.abs(self._swipeX);
                var v = Math.abs(self._swipeY);
                if (h > v) {
                    self._preventVerticalSwiping = true;
                }
                if (self._preventVerticalSwiping) {
                    e.preventDefault();
                }
                else {
                    self.clearCurrentSwipeEvent();
                }
            });
            this.swipeTarget.bind(_endEvent, function (e) {
                var swipeTime = e.timeStamp - self._swipeStartedTime;
                if (self.swipeLength < self.minSwipeDistance) {
                    self.clearCurrentSwipeEvent();
                }
                else {
                    self._swipeEventCompleted();
                    self.clearCurrentSwipeEvent();
                }
            });
        },
        clearCurrentSwipeEvent: function () {
            this._swipeStartedX = 0;
            this._swipeStartedY = 0;
            this._swipeStartedTime = 0;
            this.swipeLength = 0;
            this._swipeStarted = 0;
            this._horizontalCount = 0;
            this._verticalCount = 0;
            this._horizontalCount = this._horizontal = 0;
            this._vertical = this._verticalCount = 0;
            this._preventVerticalSwiping = false;
        },
        _getSwipeOrientation: function () {
            this._horizontalCount += (this._swipeX > this._swipeLastX) ? 1 : ((this._swipeX < this._swipeLastX) ? -1 : ((this._horizontalCount > 0) ? -1 : (this._horizontalCount < 0) ? 1 : 0));
            this._verticalCount += (this._swipeY > this._swipeLastY) ? 1 : ((this._swipeY < this._swipeLastY) ? -1 : ((this._verticalCount > 0) ? -1 : (this._verticalCount < 0) ? 1 : 0));
            if (this._count > 1) {
                this._horizontal = this._horizontalCount;
                this._vertical = this._verticalCount;
                this._horizontalCount = 0;
                this._verticalCount = 0;
                this._count = 0;
            }
            else
                this._count++;
            this._orientation = {'horizontal': this._horizontal, 'vertical': this._vertical};
            return this._orientation;
        },
        _swipeEventCompleted: function () {
            this.lastOrientation = this._getSwipeOrientation();
            if (this.onSwiped != null) {
                this.onSwiped({
                    'x': this._swipeStartedX,
                    'y': this._swipeStartedY,
                    'xx': this._swipeX,
                    'yy': this._swipeY
                }, this.lastOrientation);
            }
        },
        _getRelativeMousePos: function (event) {
            var px, py;
            if (this.isTouchDevice == true) {
                px = event.originalEvent.touches[0].pageX;
                py = event.originalEvent.touches[0].pageY;
            }
            else {
                px = event.pageX;
                py = event.pageY;
            }
            var result = {top: (py - this._offsetTop), left: (px - this._offsetLeft)}
            return result;
        }
    }
})($);
/* File BEGIN: http://fm.cnbc.com/applications/cnbc.com/staticcontent/scripts/libraries/Carousel3/carousel3.js?t=1450133677 */
function CNBC_Carousel3() {
};
CNBC_Carousel3.Objs = [];
(function ($) {
    CNBC_Carousel3.prototype.settings = {
        container: "carouselWrapper",
        itemsPerPage: 1,
        itemsPerTransition: 1,
        noOfRows: 1,
        pagination: false,
        nextPrevLinks: true,
        speed: 'normal',
        easing: 'swing',
        autoSpeed: 1000,
        enableAuto: false,
        swipable: false,
        spaceBetweenElements: 0,
        leftArrow: "leftArrow",
        rightArrow: "rightArrow",
        anchorList: "anchorContainer",
        anchorConfig: {},
        slideIndicator: "slideIndicator",
        cStartOver: "carouselSO",
        sliderContainer: "carouselSlider",
        itemIndex: 0,
        overlayButtons: false,
        lazyLoad: false,
        lazyLoadNext: false,
        responsive: false,
    };
    CNBC_Carousel3.prototype.init = function (options) {
        var self = this;
        this.options = $.extend({}, this.settings, options);
        if (this.options.responsive) {
            self.initEvents();
        }
        this.setContainer(this.options.container);
        this.container.find('div.carouselBody').css('display', 'block');
        this.itemIndex = this.getCurrentNodeIndex();
        this.liItem = this.container.find('li');
        this.liItem.css("visibility", "visible");
        self.container.on("dragstart", function () {
            return false;
        });
        this.runner = this.container.find('ul');
        this.items = this.runner.children('li');
        this.noOfItems = this.options.noOfItems ? this.options.noOfItems : this.items.length;
        if (this.options.lazyLoad) {
            this.initLazyLoad();
        } else {
            this.lazyLoadImg(0, this.noOfItems);
        }
        this.itemWidth = this.items.outerWidth(true);
        this.setWidth();
        this.container.on('selectstart dragstart', function () {
            return false;
        });
        if (this.noOfItems <= this.options.itemsPerPage) {
            this.insertMask();
            this.container.removeAttr("style");
            this.container.find('div.carouselBody').css('height', 'auto');
            return false;
        }
        this.insertMask();
        if (this.options.responsive) {
            this.resizeMask();
        }
        this.noOfPages = Math.ceil((this.noOfItems - this.options.itemsPerPage) / this.options.itemsPerTransition) + 1;
        if (this.options.nextPrevLinks) {
            if (self.options.leftArrow[0] == '#') {
                this.leftA = $(self.options.leftArrow);
            } else {
                this.leftA = $(this.container).find('.' + self.options.leftArrow);
            }
            if (self.options.rightArrow[0] == '#') {
                this.rightA = $(self.options.rightArrow);
            } else {
                this.rightA = $(this.container).find('.' + self.options.rightArrow);
            }
            this.anchorList = $('.' + self.options.anchorList);
            this.insertNextPrevLinks();
        }
        this.anchorList.find('li').each(function (i, el) {
            if (!i)$(el).css(self.options.anchorConfig.active);
        })
        this.setContainerWidth();
        this.attachClickHandlers();
        if (this.options.pagination) {
            this.insertPagination();
        }
        if (this.options.pagination) {
            this.updateBtnStyles();
        }
        if (this.options.enableAuto) {
            this.startAuto();
            this.hoverPause();
        }
        if (this.options.swipable) {
            this.handleTouch();
        }
        this.sIndicator = $(this.container).find('.' + self.options.slideIndicator);
        this.startOverElement = $(this.container).find('.' + self.options.cStartOver);
        this.startOver();
        this.updateIndicator();
        if (this.itemIndex != 0) {
            this.viewSlide(true);
        }
        this.container.removeAttr("style");
        this.container.find('div.carouselBody').css('height', 'auto');
        if (this.options.initCallback) {
            this.options.initCallback();
        }
        ;
        this.callback = this.options.callback;
    };
    CNBC_Carousel3.prototype.initEvents = function () {
        var self = this;
        $(window).resize(function () {
            self.resizeMask();
        });
    };
    CNBC_Carousel3.prototype.getMaxTrayHeight = function () {
        var self = this, maxTrayHeight = 0, height = 0;
        self.liItem.each(function () {
            height = $(this).find('div.asset:first').outerHeight(true);
            if (height > maxTrayHeight) {
                maxTrayHeight = height;
            }
        });
        return maxTrayHeight;
    };
    CNBC_Carousel3.prototype.setContainer = function (container) {
        var self = this;
        var type = typeof container;
        if (type == 'string') {
            self.container = $('#' + container);
        } else if (type == 'object' && container.length == 1) {
            self.container = container;
        } else {
            self.container = $(container);
        }
    };
    CNBC_Carousel3.prototype.getCurrentNodeIndex = function () {
        var currentNode, result;
        result = this.options.itemIndex;
        if (this.options.currentNodeClass) {
            currentNode = this.container.find('.' + this.options.currentNodeClass);
            if (currentNode.length == 1) {
                result = currentNode.index();
            }
        }
        return result;
    };
    CNBC_Carousel3.prototype.insertMask = function () {
        this.runner.wrap('<div class="mask" />');
        this.mask = this.container.find('div.mask');
        var itemWidth = this.items.outerWidth();
        var space = this.itemWidth - itemWidth;
        var maskWidth = this.itemWidth * this.options.itemsPerPage - space;
        this.mask.width(maskWidth);
        if (!CNBC_Utils.isVideoGallery()) {
            var arrowHeight = this.getMaxTrayHeight();
            var arrowLineHeight = (arrowHeight * 0.895) + 'px';
            this.container.find('div.rightArrow').css({height: arrowHeight, 'line-height': arrowLineHeight});
            this.container.find('div.leftArrow').css({height: arrowHeight, 'line-height': arrowLineHeight});
        }
    };
    CNBC_Carousel3.prototype.resizeMask = function () {
        var maxWidth = 970;
        if ($(window).width() < maxWidth) {
            maxWidth = $(window).width();
        }
        if (this.options.responsive) {
            this.resizeItems();
        }
        ;
        this.options.itemsPerTransition = this.options.itemsPerPage = parseInt((maxWidth - $('.rightArrow').outerWidth(true) - $('.leftArrow').outerWidth(true)) / this.itemWidth);
        this.noOfPages = Math.ceil((this.noOfItems - this.options.itemsPerPage) / this.options.itemsPerTransition) + 1;
        this.mask = this.container.find('div.mask');
        this.initLazyLoad();
        var itemWidth = this.items.outerWidth();
        var space = this.itemWidth - itemWidth;
        var maskWidth = this.itemWidth * this.options.itemsPerPage - space;
        this.mask.width(maskWidth);
    };
    CNBC_Carousel3.prototype.resizeItems = function () {
        this.items.width($(window).width() - ($('.rightArrow').outerWidth(true) * 2) - ($(window).width() - $('#article_body').outerWidth(true)));
        this.itemWidth = this.items.outerWidth();
        this.items.find('.asset').width(this.itemWidth);
        this.setWidth();
    };
    CNBC_Carousel3.prototype.setWidth = function () {
        this.noOfItems = Math.round(this.noOfItems / this.options.noOfRows);
        var width = this.items.outerWidth(true) * this.noOfItems;
        this.runner.width(width);
    };
    CNBC_Carousel3.prototype.startOver = function () {
        var self = this;
        this.startOverElement.on('click', function () {
            if (!(self.leftA.hasClass('disabled'))) {
                self.itemIndex = (-1) * self.options.itemsPerTransition;
                self.prevItem();
            }
            ;
        });
    };
    CNBC_Carousel3.prototype.setContainerWidth = function () {
        if (this.options.overlayButtons) {
            var containerWidth = this.mask.width();
            this.container.width(containerWidth);
        } else {
            var containerWidth = this.leftA.outerWidth(true) + this.rightA.outerWidth(true) + this.mask.outerWidth(true);
            this.container.width(containerWidth);
        }
    };
    CNBC_Carousel3.prototype.initLazyLoad = function () {
        if (this.itemIndex > 0) {
            this.lazyLoadImg(0, this.itemIndex);
        }
        if (this.options.lazyLoadNext) {
            this.lazyLoadImg(this.itemIndex, this.itemIndex + this.options.itemsPerPage * 2);
        } else {
            this.lazyLoadImg(this.itemIndex, this.itemIndex + this.options.itemsPerPage);
        }
    };
    CNBC_Carousel3.prototype.lazyLoadImg = function (from, to) {
        if (to > this.noOfItems) {
            to = this.noOfItems;
        }
        for (var i = from; i < to; i++) {
            this.items.eq(i).find('img').prop('src', function () {
                if ($(this).attr('data-img-src')) {
                    return $(this).attr('data-img-src');
                }
                ;
            }).removeAttr('data-img-src');
        }
    };
    CNBC_Carousel3.prototype.attachClickHandlers = function () {
        var self = this;
        this.leftA.on('mousedown', function () {
            if (!($(this).hasClass('disabled'))) {
                $(this).addClass('lclick');
            }
            ;
        }).on('mouseup', function () {
            $(this).removeClass('lclick');
        });
        this.rightA.on('mousedown', function () {
            if (!($(this).hasClass('disabled'))) {
                $(this).addClass('rclick');
            }
            ;
        }).on('mouseup', function () {
            $(this).removeClass('rclick');
        });
        this.leftA.on('mouseover mousemove', function () {
            if (!($(this).hasClass('disabled'))) {
                $(this).addClass('lclick');
            }
            ;
        }).on('mouseout', function () {
            $(this).removeClass('lclick')
        });
        this.rightA.on('mouseover mousemove', function () {
            if (!($(this).hasClass('disabled'))) {
                $(this).addClass('rclick');
            }
            ;
        }).on('mouseout', function () {
            $(this).removeClass('rclick')
        });
    };
    CNBC_Carousel3.prototype.insertPagination = function () {
        var i, links = [];
        this.paginationLinks = $('<ol class="pagination-links" />');
        for (i = 0; i < this.noOfPages; i++) {
            links[i] = '<li><a href="#item-' + i + '">' + (i + 1) + '</a></li>';
        }
        this.paginationLinks.append(links.join('')).appendTo(this.container).find('a').bind('click.carousel', $.proxy(this, 'paginationHandler'));
    };
    CNBC_Carousel3.prototype.paginationHandler = function (e) {
        this.itemIndex = e.target.hash.substr(1).split('-')[1] * this.options.itemsPerTransition;
        this.paginationAnimate();
        return false;
    };
    CNBC_Carousel3.prototype.insertNextPrevLinks = function () {
        var self = this, anchors = this.anchorList.find('li');
        anchors.each(function (id, anchor) {
            $(anchor).on('click', $.proxy(self, 'anchorClick', true, id));
        })
        this.prevLink = this.leftA.bind('click', $.proxy(this, 'prevItem', true));
        this.nextLink = this.rightA.bind('click', $.proxy(this, 'nextItem', true));
    };
    CNBC_Carousel3.prototype.anchorClick = function (animate, id) {
        var anchorDiff, offset, increment;
        anchorDiff = this.itemIndex - id;
        if (anchorDiff) {
            if (!this.leftA.hasClass('disabled') || !this.rightA.hasClass('disabled')) {
                offset = -((this.itemWidth / this.runner.width()) * 100) * this.itemIndex;
                increment = anchorDiff * (this.itemWidth / this.runner.width()) * 100;
                this.itemIndex = id;
                this.setContainerOffset(offset + increment, animate);
            }
        }
    }
    CNBC_Carousel3.prototype.refreshAnchors = function (id) {
        var self = this, result;
        this.anchorList.find('li').each(function (index, anchor) {
            if (id == index) {
                $(this).css(self.options.anchorConfig.active);
            } else {
                $(this).css(self.options.anchorConfig.deactive);
            }
            ;
        })
        if (this.callback)this.callback(id);
    }
    CNBC_Carousel3.prototype.nextItem = function (animate) {
        if (!(this.rightA.hasClass('disabled'))) {
            if (this.options.lazyLoad) {
                if (this.options.lazyLoadNext) {
                    this.lazyLoadImg(this.itemIndex + this.options.itemsPerTransition * 2, this.itemIndex + this.options.itemsPerTransition * 3);
                } else {
                    this.lazyLoadImg(this.itemIndex + this.options.itemsPerTransition, this.itemIndex + this.options.itemsPerTransition * 2);
                }
            }
            this.itemIndex = this.itemIndex + this.options.itemsPerTransition;
        }
        ;
        this.viewSlide(animate);
        return false;
    };
    CNBC_Carousel3.prototype.prevItem = function (animate) {
        if (!(this.leftA.hasClass('disabled'))) {
            this.itemIndex = this.itemIndex - this.options.itemsPerTransition;
        }
        ;
        this.viewSlide(animate);
        return false;
    };
    CNBC_Carousel3.prototype.updateBtnStyles = function () {
        if (this.options.pagination) {
            this.paginationLinks.children('li').removeClass('current').eq(Math.ceil(this.itemIndex / this.options.itemsPerTransition)).addClass('current');
        }
        if (this.options.nextPrevLinks) {
            this.nextLink.add(this.prevLink).removeClass('disabled');
            if (this.itemIndex === (this.noOfItems - this.options.itemsPerPage)) {
                this.nextLink.addClass('disabled');
            } else if (this.itemIndex === 0) {
                this.prevLink.addClass('disabled');
            }
        }
    };
    CNBC_Carousel3.prototype.startAuto = function () {
        var self = this;
        if (this.options.enableAuto) {
            this.timer = setInterval(function () {
                self.nextItem();
            }, self.options.autoSpeed);
        }
    };
    CNBC_Carousel3.prototype.hoverPause = function () {
        var self = this;
        if (this.options.enableAuto) {
            this.container.hover(function () {
                clearInterval(self.timer);
            }, function () {
                self.timer = setInterval(function () {
                    self.nextItem();
                }, self.options.autoSpeed);
            });
        }
    };
    CNBC_Carousel3.prototype.handleTouch = function () {
        var self = this;
        var maskWidth = self.mask.width();
        var stopBrowserBehavior = true;
        var options = {
            prevent_default: false,
            swipe_velocity: 0.3,
            drag_min_distance: 20,
            drag_lock_to_axis: true,
            stop_browser_behavior: false,
            transform: false
        }
        var hammertime = new Hammer(self.container);
        hammertime.on("release dragleft dragright swipeleft swiperight dragup dragdown swipeup swipedown", function (e) {
            switch (e.type) {
                case'dragright':
                case'dragleft':
                    self._current = self.itemIndex / self.options.itemsPerTransition;
                    var pane_offset = -(100 / self.noOfPages) * self._current;
                    var drag_offset = ((100 / maskWidth) * e.gesture.deltaX) / self.noOfPages;
                    if ((self._current == 0 && e.gesture.direction == Hammer.DIRECTION_RIGHT) || (self._current == self.noOfPages - 1 && e.gesture.direction == Hammer.DIRECTION_LEFT)) {
                        drag_offset *= .4;
                    }
                    self.setContainerOffset(drag_offset + pane_offset);
                    break;
                case'swiperight':
                    e.gesture.stopDetect();
                    self.prevItem(true);
                    break;
                case'swipeleft':
                    e.gesture.stopDetect();
                    self.nextItem(true);
                    break;
                case'release':
                    switch (e.gesture.direction) {
                        case'up':
                        case'down':
                            stopBrowserBehavior = false;
                            break;
                        case'left':
                        case'right':
                            var drag = 0.5;
                            var orientation = 'portrait';
                            if (window.orientation != undefined && Math.abs(window.orientation) == 90) {
                                drag = 0.25;
                                orientation = 'landscape';
                            }
                            if (Math.abs(e.gesture.deltaX) > maskWidth * drag) {
                                if (e.gesture.direction == 'right') {
                                    self.prevItem();
                                } else {
                                    self.nextItem();
                                }
                            } else {
                                self.viewSlide();
                            }
                            break;
                    }
                    break;
                case'dragup':
                case'dragdown':
                case'swipeup':
                case'swipedown':
                    stopBrowserBehavior = false;
                    break;
                    if (stopBrowserBehavior) {
                        e.gesture.preventDefault();
                        e.gesture.stopPropagation();
                    } else {
                        self.viewSlide();
                        e.gesture.stopDetect();
                    }
            }
        });
    };
    CNBC_Carousel3.prototype.updateIndicator = function () {
        var self = this;
        var from = self.itemIndex + 1;
        var to = self.itemIndex + self.options.itemsPerPage;
        $(".slideIndicator").text(from + "-" + to + " of " + self.noOfItems);
    };
    CNBC_Carousel3.prototype.setContainerOffset = function (percent, animate) {
        var nextItem, pos, self = this;
        var animationSpeed = this.options.speed;
        if (this.options.beforeTransitionCallback) {
            this.options.beforeTransitionCallback();
        }
        if (this.itemIndex > (this.noOfItems - this.options.itemsPerPage)) {
            this.itemIndex = this.noOfItems - this.options.itemsPerPage;
        }
        if (this.itemIndex < 0) {
            this.itemIndex = 0;
        }
        this.updateIndicator();
        if (Modernizr && Modernizr.csstransforms && Modernizr.csstransitions) {
            animationSpeed = animationSpeed / 1000;
            if (animate) {
                this.runner.css({
                    'transition': 'All ' + animationSpeed + 's ease',
                    '-webkit-transition': 'All ' + animationSpeed + 's ease',
                    '-o-transition': 'All ' + animationSpeed + 's ease',
                    '-moz-transition': 'All ' + animationSpeed + 's ease',
                    '-ms-transition': 'All ' + animationSpeed + 's ease'
                });
            }
            else {
                this.runner.css({
                    '-moz-transition': 'none',
                    '-webkit-transition': 'none',
                    '-o-transition': 'color 0 ease-in',
                    'transition': 'none'
                });
            }
            this.runner.css({
                "transform": "translatex(" + percent + "%)",
                '-webkit-transform': 'translateX(' + percent + '%)',
                '-o-transform': 'translateX(' + percent + '%)',
                '-moz-transform': 'translateX(' + percent + '%)',
                '-ms-transform': 'translateX(' + percent + '%)'
            });
        } else {
            nextItem = this.items.eq(this.itemIndex);
            pos = nextItem.position();
            this.runner.stop(false, true).animate({left: -pos.left}, animationSpeed, this.options.easing, function () {
                if (self.options.afterTransitionCallback) {
                    self.options.afterTransitionCallback();
                }
            });
        }
        this.updateBtnStyles();
        this.refreshAnchors(this.itemIndex);
    };
    CNBC_Carousel3.prototype.viewSlide = function (animate) {
        var self = this;
        var itemsPerPage = self.options.itemsPerPage;
        if (this.noOfItems - this.itemIndex - this.options.itemsPerPage < 0) {
            this.itemIndex = this.noOfItems - this.options.itemsPerPage;
        }
        if (this.itemIndex < 0) {
            this.itemIndex = 0;
        }
        var offset = -((this.itemWidth / this.runner.width()) * 100) * this.itemIndex;
        self.setContainerOffset(offset, animate);
    };
    CNBC_Carousel3.prototype.enableSawToothPattern = function () {
        var self = this;
        var $li = self.container.find('li');
        if (self.container.find('li:first').find('div.asset').length == 1 && ($li.length > 9 || CNBC_Utils.urlParam('fdt'))) {
            self.options.noOfRows = 2;
            var firstRowHeight = lastRowHeight = height = 0;
            self.container.find('li:even').each(function () {
                $(this).append($(this).next().find('div.asset'));
                $(this).next().remove();
            });
            $li.each(function () {
                height = $(this).find('div.asset:first').outerHeight(true);
                if (height > firstRowHeight) {
                    firstRowHeight = height;
                }
                height = $(this).find('div.asset:last').outerHeight(true);
                if (height > lastRowHeight) {
                    lastRowHeight = height;
                }
            });
            $('div.asset.playing').parent().addClass(self.options.currentNodeClass);
            $li.find('div.asset:first').height(firstRowHeight + 20);
            var arrowHeight = firstRowHeight + lastRowHeight + 20;
            var arrowLineHeight = (arrowHeight * 0.895) + 'px';
            self.container.find('div.rightArrow').css({height: arrowHeight, 'line-height': arrowLineHeight});
            self.container.find('div.leftArrow').css({height: arrowHeight, 'line-height': arrowLineHeight});
            self.lazyLoadImg(0, self.noOfItems);
            self.setWidth();
            self.resizeMask();
        }
    };
})(jQuery);
function enableSawToothPattern(container) {
    if (CNBC_Carousel3.Objs.length) {
        var $container;
        var type = typeof container;
        if (!container) {
            container = $('li.carousel_asset:first');
        }
        if (type == 'string') {
            $container = $('#' + container);
        } else if (type == 'object' && container.length == 1) {
            $container = container;
        } else {
            $container = $(container);
        }
        for (var i in CNBC_Carousel3.Objs) {
            if (CNBC_Carousel3.Objs[i].container.attr('id') == $container.attr('id')) {
                CNBC_Carousel3.Objs[i].enableSawToothPattern();
                break;
            }
        }
    }
};
/* File BEGIN: http://fm.cnbc.com/applications/cnbc.com/staticcontent/scripts/libraries/Partner/xfinity_experience_surf.js?t=1450133677 */
var CNBC_Xfinity_Experience = {};
(function ($) {
    var XfinityURLs;
    CNBC_Settings = (typeof CNBC_Settings != 'undefined' ? CNBC_Settings : {});
    CNBC_Settings.baseurls = (typeof CNBC_Settings.baseurls != 'undefined' ? CNBC_Settings.baseurls : {});
    CNBC_Settings.baseurls.pub_base_protocol_agnostic = (typeof CNBC_Settings.baseurls.pub_base_protocol_agnostic != 'undefined' ? CNBC_Settings.baseurls.pub_base_protocol_agnostic : '');
    CNBC_Xfinity_Experience.SSID = 'cnbc_xfinitycobrand_';
    CNBC_Xfinity_Experience.isInitialized = false;
    if (window.location.href.indexOf('qa.watchlist.cnbc.com') != -1) {
        CNBC_Settings.baseurls.pub_base_protocol_agnostic = 'http://qa.pub.cnbc.com';
    } else if (window.location.href.indexOf('watchlist-stage.cnbc.com') != -1) {
        CNBC_Settings.baseurls.pub_base_protocol_agnostic = 'http://stg-pub.cnbc.com';
    }
    if (window.location.href.indexOf('stage.cnbcapps.cnbc.com/portfolio/') != -1) {
        CNBC_Settings.baseurls.pub_base_protocol_agnostic = 'http://stg-pub.cnbc.com';
    }
    if (window.location.href.indexOf('stage.data.cnbc.com/quotes') != -1) {
        CNBC_Settings.baseurls.pub_base_protocol_agnostic = 'http://stg-pub.cnbc.com';
    } else if (window.location.href.indexOf('qa.data.cnbc.com/quotes') != -1) {
        CNBC_Settings.baseurls.pub_base_protocol_agnostic = 'http://qa.pub.cnbc.com';
    }
    if (CNBC_Settings && CNBC_Settings.baseurls) {
        XfinityURLs = {
            register: CNBC_Settings.baseurls.register_base,
            login: CNBC_Settings.baseurls.login_base,
            fm: CNBC_Settings.baseurls.sc_base_protocol_agnostic,
            pub: CNBC_Settings.baseurls.pub_base_protocol_agnostic,
            watchlist: CNBC_Settings.baseurls.watchlist_base
        };
        CNBC_Xfinity_Experience.optionalOptin = CNBC_Settings.baseurls.optional_optin;
    }
    else {
        XfinityURLs = {
            register: 'https://register.cnbc.com',
            login: 'https://login.cnbc.com',
            fm: '//fm.cnbc.com',
            pub: '//www.cnbc.com',
            watchlist: 'http://watchlist.cnbc.com'
        };
        CNBC_Xfinity_Experience.optionalOptin = '101';
    }
    CNBC_Xfinity_Experience.modules = [];
    CNBC_Xfinity_Experience.moduleNames = [];
    CNBC_Xfinity_Experience.optinDomains = ['apps.cnbc.com/portfolio', 'watchlist.cnbc.com', 'qa-ec02watchlist.cnbc.com', 'stage.cnbcapps.cnbc.com/portfolio/', 'watchlist-stage.cnbc.com'];
    CNBC_Xfinity_Experience.init = function (args) {
        if (CNBC_Xfinity_Experience.isInitialized) {
            return false;
        }
        if (window.activePartnerExperience == 'xfinity') {
            this.prepareHeader();
            this.prepareOptin();
            this.getModuleList();
            if (this.modules.length != 0) {
                $('head').append('<link rel="stylesheet" href="' + XfinityURLs.fm + '/applications/cnbc.com/staticcontent/styles/xfinity.css" type="text/css" />');
                this.fetchModules();
            }
            this.switchPlayerVars();
            this.switchURLs();
            this.performPassiveAuth();
            this.setPromoPackageMedium();
            CNBC_Xfinity_Experience.isInitialized = true;
        }
    };
    CNBC_Xfinity_Experience.setPromoPackageMedium = function () {
        if ($('#promo_medium_section_top').length) {
            var promoHTML = $('#promo_medium_section_top').html();
            $('#promo_medium_section_top').remove();
            $('#promo_medium_section_bottom').html(promoHTML);
        }
    };
    CNBC_Xfinity_Experience.prepareHeader = function () {
        var headerEl = '<div id="prtnr_mod_header"></div>';
        $('body').prepend(headerEl);
    };
    CNBC_Xfinity_Experience.isUserOptedIn = function () {
        var i;
        var option;
        if (window.SURF && window.SURF.globals && window.SURF.globals.user && window.SURF.globals.user.brand_data && window.SURF.globals.user.brand_data.option) {
            option = (typeof SURF.globals.user.brand_data.option == 'string') ? JSON.parse(SURF.globals.user.brand_data.option) : SURF.globals.user.brand_data.option;
            if (option.length < 1) {
                return false;
            }
            for (i = 0; i < option.length; i++) {
                if (option[i] == 'XFINITY-CNBC') {
                    return true;
                }
            }
        }
        return false;
    };
    CNBC_Xfinity_Experience.prepareOptin = function () {
        if (window.SURF && window.SURF.globals && window.SURF.globals.user) {
            var isUserOptedIn = CNBC_Xfinity_Experience.isUserOptedIn();
            if (!isUserOptedIn && this.doesDomainMatch()) {
                var overlayEl = '<div id="prtnr_mod_overlay"></div>';
                $('body').prepend(overlayEl);
            }
        }
        ;
    };
    CNBC_Xfinity_Experience.doesDomainMatch = function () {
        for (var i = 0, len = CNBC_Xfinity_Experience.optinDomains.length; i < len; i++) {
            if (window.location.href.indexOf(CNBC_Xfinity_Experience.optinDomains[i]) != -1) {
                return true;
            }
        }
        return false;
    }
    CNBC_Xfinity_Experience.getModuleList = function () {
        var thisObj = this;
        var $availableModules = $('[id^="prtnr_mod_"]');
        $availableModules.each(function () {
            var $availableModule = $(this);
            var moduleName = 'xfinity_' + $availableModule.attr('id').substring(10);
            thisObj.modules.push({'id': moduleName, 'element': $availableModule});
            thisObj.moduleNames.push(moduleName);
        });
    };
    CNBC_Xfinity_Experience.fetchModules = function () {
        var thisObj = this;
        var url = XfinityURLs.pub + '/recirculationmodules/get?p=xfinity_partner&c=' + this.moduleNames.join('|');
        var ajaxCall = $.ajax({
            url: url,
            dataType: 'jsonp',
            jsonpCallback: 'recirculationHandler',
            cache: true,
            async: false,
            success: function (data) {
                thisObj.paintModules(data)
                thisObj.initOptin();
                thisObj.initCarouselLib();
            }
        });
    };
    CNBC_Xfinity_Experience.initCarouselLib = function () {
        var $xfinityVideoContainer = $('#prtnr_mod_videos');
        if ($xfinityVideoContainer.length) {
            var myCarousel_prtnr_mod_videos = new CNBC_Carousel3();
            myCarousel_prtnr_mod_videos.init({
                itemsPerPage: 5,
                itemsPerTransition: 5,
                swipable: true,
                speed: 500,
                nextPrevLinks: true,
                container: 'prtnr_mod_videos',
                currentNodeClass: 'currentNode',
                lazyLoad: true,
                lazyLoadNext: true,
                nextItemCallback: function () {
                    s.linkTrackVars = 'eVar48,prop48';
                    s.eVar48 = 'videogallerycarousel:xfinity:tab:right:' + CNBC_Settings.pageNodeId;
                    s.prop48 = 'videogallerycarousel:xfinity:tab:right:' + CNBC_Settings.pageNodeId;
                    s.tl(this, 'o', 'Video Gallery Carousel Module');
                    s.manageVars("clearVars");
                },
                prevItemCallback: function () {
                    s.linkTrackVars = 'eVar48,prop48';
                    s.eVar48 = 'videogallerycarousel:xfinity:tab:left:' + CNBC_Settings.pageNodeId;
                    s.prop48 = 'videogallerycarousel:xfinity:tab:left:' + CNBC_Settings.pageNodeId;
                    s.tl(this, 'o', 'Video Gallery Carousel Module');
                    s.manageVars("clearVars");
                }
            });
            CNBC_Carousel3.Objs.push(myCarousel_prtnr_mod_videos);
            $xfinityVideoContainer.css({display: 'inline-block'});
            if (myCarousel_prtnr_mod_videos.leftA != undefined) {
                myCarousel_prtnr_mod_videos.leftA.on('click', function () {
                    myCarousel_prtnr_mod_videos.options.prevItemCallback();
                });
            }
            if (myCarousel_prtnr_mod_videos.rightA != undefined) {
                myCarousel_prtnr_mod_videos.rightA.on('click', function () {
                    myCarousel_prtnr_mod_videos.options.nextItemCallback();
                });
            }
        }
        var tabHtml = '<h3 class="module-header">TOP VIDEOS ON XFINITY</h3>';
        $xfinityVideoContainer.find('div.carouselBody').before(tabHtml);
    };
    CNBC_Xfinity_Experience.paintModules = function (data) {
        for (var i = 0, len = CNBC_Xfinity_Experience.modules.length; i < len; i++) {
            var module = CNBC_Xfinity_Experience.modules[i];
            module.element.html(data[module.id]);
        }
    };
    CNBC_Xfinity_Experience.switchPlayerVars = function () {
        if (typeof CNBC_Player != 'undefined' && CNBC_Player.prototype && CNBC_Player.prototype.drawPlayer) {
            var draw = CNBC_Player.prototype.drawPlayer;
            var brandedSiteSection = 'cnbc_xfinitycobrand_embed';
            var nid = CNBC_Partner_Experience.pageNodeId;
            if (CNBC_Partner_Experience.partnerHomeNodes.indexOf(nid) != -1) {
                brandedSiteSection = 'cnbc_xfinitycobrand_money';
            } else if (typeof CNBC_Settings != 'undefined' && CNBC_Settings.pageNodeId == '100746233') {
                brandedSiteSection = 'cnbc_xfinitycobrand_homepage';
            }
            CNBC_Player.prototype.drawPlayer = function () {
                this._args.flashVars.branded_player = 'Xfinity Money';
                this._args.flashVars.branded_site_section = brandedSiteSection;
                draw.call(this);
            };
        }
    };
    CNBC_Xfinity_Experience.switchURLs = function () {
        var registerLink = XfinityURLs.register + '/sauth/rs/authenticate/20035?target=' + encodeURIComponent('https:' + CNBC_Settings.baseurls.pub_base_protocol_agnostic + '/application/auth/xfinity-active?endpoint=' + window.location.href.split('?')[0]);
        var signInLink = XfinityURLs.register + '/sauth/rs/authenticate/20035?target=' + encodeURIComponent('https:' + CNBC_Settings.baseurls.pub_base_protocol_agnostic + '/application/auth/xfinity-active?endpoint=' + window.location.href.split('?')[0]);
        var memberCenterLink = 'http://xfinity.comcast.net/profile';
        var signoutLink = XfinityURLs.login + '/cas/logout?targetService=' + encodeURIComponent('' + XfinityURLs.register + '/sauth/rs/logout/20035') + '&service=' + encodeURIComponent('https:' + CNBC_Settings.baseurls.pub_base_protocol_agnostic + '/application/auth/logout?service=' + window.location.href.split('?')[0]);
        this.signoutLink = signoutLink;
        $('#unreg-user li.first a').attr('href', registerLink);
        $('#unreg-user li.cnbcRegister a').attr('href', registerLink);
        $('#unreg_user a.cnbcRegister').attr('onClick', '');
        $('#unreg_user a.cnbcRegister').attr('href', registerLink);
        $('#signin').unbind();
        $('#signin').click(function (event) {
            window.location.href = signInLink;
        });
        $('#unreg_user a.cnbcSignIn').attr('onClick', '');
        $('#unreg_user a.cnbcSignIn').attr('href', signInLink);
        $('#reg-user li.first a').attr('href', memberCenterLink);
        $('#reg_user a.cnbcRegister').attr('onClick', '');
        $('#reg_user a.cnbcRegister').attr('href', memberCenterLink);
        $('#signout').unbind();
        $('#signout').click(function (event) {
            window.location.href = signoutLink;
        });
        $('#reg_user a.cnbcSignIn').attr('onClick', '');
        $('#reg_user a.cnbcSignIn').attr('href', signoutLink);
        var navs = $('#unreg_user a');
        for (i = 0; i < navs.length; i++) {
            var $nav = $(navs[i]);
            if ($nav.text().toUpperCase() == 'REGISTER') {
                $nav.attr('href', registerLink);
            }
            if ($nav.text().toUpperCase() == 'SIGN IN') {
                $nav.attr('onClick', '');
                $nav.attr('href', signInLink);
            }
        }
        var navs = $('#reg_user a');
        for (i = 0; i < navs.length; i++) {
            var $nav = $(navs[i]);
            if ($nav.text().toUpperCase() == 'MEMBER CENTER') {
                $nav.attr('href', memberCenterLink);
            }
            if ($nav.text().toUpperCase() == 'SIGN OUT') {
                $nav.attr('onClick', '');
                $nav.attr('href', signoutLink);
            }
        }
        var pwLinks = [];
        pwLinks[0] = $('nav#menu-main #nav a');
        pwLinks[1] = $('#pageHeadNav a');
        pwLinks[2] = $('#subnav_15839069 a');
        pwLinks[3] = $('.FOOTLL_B .ll_bullet a');
        pwLinks[4] = $('nav.cnbc-menu #nav a');
        $.each(pwLinks, CNBC_Xfinity_Experience.changePWLinks);
    };
    CNBC_Xfinity_Experience.getLogoutUrl = function () {
        return this.signoutLink;
    };
    CNBC_Xfinity_Experience.changePWLinks = function (index, navs) {
        var portfolio = '' + XfinityURLs.login + '/authproxy/portfolio/auth.do?Action=portfolio';
        var portfolioURL = XfinityURLs.register + '/sauth/rs/authenticate/20035?target=' + encodeURIComponent(portfolio);
        var watchlistURL = XfinityURLs.register + '/sauth/rs/authenticate/20035?target=' + encodeURIComponent(XfinityURLs.watchlist);
        for (i = 0; i < navs.length; i++) {
            var $nav = $(navs[i]);
            if ($nav.text().toUpperCase().indexOf('PORTFOLIO') != -1) {
                $nav.attr('href', portfolioURL);
            }
            if ($nav.text().toUpperCase().indexOf('WATCHLIST') != -1) {
                $nav.attr('href', watchlistURL);
            }
        }
    }
    CNBC_Xfinity_Experience.initOptin = function () {
        var thisObj = this;
        if ($('#prtnr_mod_overlay').length != 0) {
            $("#xfinity_overlay_background").height($(document).height());
            var $ov = $("#xfinity_overlay");
            var top = $(window).scrollTop() - ($ov.outerHeight() / 2);
            $ov.css("margin-top", top);
            $('#overlayClose').click(function (e) {
                if (document.referrer != '' && document.referrer.indexOf('register.cnbc.com') == -1 && document.referrer.indexOf('watchlist.cnbc.com') == -1) {
                    window.location.href = document.referrer;
                } else {
                    window.location.href = '' + XfinityURLs.pub + '/xfinity-money/';
                }
            });
            $('#noThanks').click(function (e) {
                if (document.referrer != '' && document.referrer.indexOf('register.cnbc.com') == -1 && document.referrer.indexOf('watchlist.cnbc.com') == -1) {
                    window.location.href = document.referrer;
                } else {
                    window.location.href = '' + XfinityURLs.pub + '/xfinity-money/';
                }
            });
            $('#submitOptin').click(function (e) {
                e.preventDefault();
                thisObj.submitOptin();
            });
        }
    };
    CNBC_Xfinity_Experience.submitOptin = function () {
        var thisObj = this;
        var rulesAccepted = false, offersAccepted = false;
        if ($('#acceptRules').is(':checked')) {
            rulesAccepted = true;
            $('#rulesErrMsg').hide();
        } else {
            rulesAccepted = false;
            $('#rulesErrMsg').show();
            $('#acceptRules').change(function () {
                $('#rulesErrMsg').toggle();
            });
            return;
        }
        if ($('#acceptOffers').is(':checked')) {
            offersAccepted = true;
        } else {
            offersAccepted = false;
        }
        if (rulesAccepted) {
            thisObj.recordOptin(offersAccepted);
        }
    };
    CNBC_Xfinity_Experience.recordOptin = function (offersAccepted) {
        if (CNBC_Xfinity_Experience.isUserOptedIn()) {
            CNBC_Xfinity_Experience.closeOverlay();
            return false;
        }
        ;
        if (!SURF || !SURF.globals || !SURF.globals.session || !SURF.globals.session.uid) {
            return false;
        }
        var uid = SURF.globals.session.uid, signature = '', updateObj = {}, option = (SURF.globals.user.brand_data) ? SURF.globals.user.brand_data.option : '', option_date = (SURF.globals.user.brand_data) ? SURF.globals.user.brand_data.option_date : '', optionArray = (option) ? JSON.parse(option) : '', option_dateArray = (option_date) ? JSON.parse(option_date) : '', optLength = optionArray.length, newOptData, newOptDateData, user_data;
        if (optLength && optionArray.indexOf("XFINITY-CNBC") == -1) {
            optionArray.push('XFINITY-CNBC');
            option_dateArray.push('XFINITY-CNBC|' + new Date().getTime());
            newOptData = optionArray;
            newOptDateData = option_dateArray;
        } else if (optLength == 0) {
            newOptData = ['XFINITY-CNBC'];
            newOptDateData = ['XFINITY-CNBC|' + new Date().getTime()];
        }
        ;
        user_data = {'option': JSON.stringify(newOptData), 'option_date': JSON.stringify(newOptDateData)};
        updateObj.uid = uid;
        updateObj.signature = signature;
        updateObj.user_data = user_data;
        SURF.event.bind(SURF.events.EDIT_ACCOUNT, function (event, user) {
            CNBC_Xfinity_Experience.closeOverlay();
        });
        CNBC_Surf_Mediator.surfUpdate(updateObj);
        return true;
    }
    CNBC_Xfinity_Experience.closeOverlay = function () {
        $("#xfinity_overlay_background").remove();
        $("#xfinity_overlay").remove();
    };
    CNBC_Xfinity_Experience.getYPosition = function () {
        var y;
        if (self.pageYOffset) {
            y = self.pageYOffset;
        } else if (document.documentElement && document.documentElement.scrollTop) {
            y = document.documentElement.scrollTop;
        } else if (document.body) {
            y = document.body.scrollTop;
        }
        return y;
    };
    CNBC_Xfinity_Experience.checkBrowser = function () {
        var N = navigator.appName, ua = navigator.userAgent, tem;
        var M = ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
        if (M && (tem = ua.match(/version\/([\.\d]+)/i)) != null)M[2] = tem[1];
        M = M ? [M[1], M[2]] : [N, navigator.appVersion, '-?'];
        return M;
    };
    CNBC_Xfinity_Experience.performPassiveAuth = function () {
        if (CNBC_Xfinity_Experience.checkBrowser().indexOf('MSIE') != -1) {
            return;
        }
        var thisObj = this;
        var override = false;
        if (CNBC_Partner_Experience.checkReferrer(document.referrer)) {
            override = true;
        }
        var xfinity_passive_authenticated = CNBC_Partner_Experience.readCookie('xfinity_passive_authenticated');
        if (xfinity_passive_authenticated == '' || override) {
            var authSrc = '' + XfinityURLs.register + '/sauth/rs/authenticate/20035?passive=true&target=' + encodeURIComponent('https:' + CNBC_Settings.baseurls.pub_base_protocol_agnostic + '/application/auth/xfinity-passive');
            CNBC_Partner_Experience.createCookie('xfinity_passive_authenticated', '', 0);
            var iframeEl = '<iframe scrolling="no" frameborder="no" src="' + authSrc + '" style="height:0;width:0;"></iframe>';
            $('body').append(iframeEl);
            var authPoll = setInterval(function () {
                xfinity_passive_authenticated = CNBC_Partner_Experience.readCookie('xfinity_passive_authenticated');
                if (xfinity_passive_authenticated != '') {
                    clearInterval(authPoll);
                }
                if (xfinity_passive_authenticated == 'true') {
                    if (window.CNBC_Surf_Mediator) {
                        CNBC_Surf_Mediator.updateHeader();
                    }
                }
            }, 900);
            setTimeout(function () {
                clearInterval(authPoll);
            }, 45000);
        }
    };
    CNBC_Xfinity_Experience.changeLoginState = function () {
        var userName = CNBC_Partner_Experience.readCookie('SUBSCRIBERINFO');
        userName = userName ? userName : "Guest";
        var welcomeTxt = 'Welcome, ' + userName;
        $('#login-container > span').text(welcomeTxt);
        $('#cnbc_username').text(welcomeTxt);
        $('#unreg-user').hide();
        $('#reg-user').removeClass('hide').show();
        $('#unreg_user').hide();
        $('#reg_user').removeClass('hide').show();
        if (typeof CNBC_Signin != 'undefined') {
            CNBC_Signin.hideOverLay = function () {
            };
        }
    };
})(jQuery);
/* File BEGIN: http://fm.cnbc.com/applications/cnbc.com/staticcontent/scripts/libraries/TableSorter/table_sorter.1.js?t=1450133677 */
(function ($) {
    $.fn.CNBC_table_sorter = function (options) {
        var defaults = {
            exclude: {'class': ['arrow'], 'tag': ['img']},
            minRows: 3
        }, arUpDown = '<span class="ar-up-down"><span class="icon arrow_up ar-up"></span><span class="icon arrow_down ar-down"></span></span>', arUp = '<span class="ar-up-only"><span class="icon arrow_up"></span></span>', arDown = '<span class="ar-down-only"><span class="icon arrow_down"></span></span>';
        return this.each(function () {
            var $tbl = $(this), $tbody = $tbl.find('tbody'), $tbodyTr = $tbody.find('tr'), $tbodyClone, $tbodyTrClone, $thead = $tbl.find('thead'), opts = $.extend({}, defaults, options), exlcudedCols = [], $theadTr = $thead.find('tr');
            init();
            function init() {
                if ($tbodyTr.length < opts.minRows) {
                    return false;
                }
                ;
                $tbl.addClass('table-sorter');
                checkSortability();
                setHeaderArrows();
                clsHeadersReset();
                attachEvents();
            };
            function clsHeadersReset() {
                $theadTr.children().each(function (i, e) {
                    $(e).removeClass('sortable');
                    if ($.inArray(i, exlcudedCols) == -1) {
                        $(e).removeClass('dir asc desc').addClass('sortable');
                    } else {
                        $(e).removeClass('dir asc desc').addClass('none-sortable');
                    }
                    ;
                });
            };
            function setHeaderArrows() {
                $theadTr.children().each(function (i, e) {
                    $(e).find('div.chart-text-container').append(arUpDown).append(arUp).append(arDown);
                });
            };
            function checkSortability() {
                var $tbodyClone = $tbody.clone(), $tbodyTrClone = $tbodyClone.find('tr'), emptyCellsCount = {}, rows = $tbodyTrClone.length;
                $tbodyTrClone.each(function (i, e) {
                    var topIndex = i;
                    $(e).children().each(function (i, e) {
                        var cellIndex = i;
                        if ($.inArray(cellIndex, exlcudedCols) == -1) {
                            $.each(opts.exclude.tag, function (ind, el) {
                                if ($(e).find(el).length > 0) {
                                    exlcudedCols.push(cellIndex);
                                }
                                ;
                            });
                            $.each(opts.exclude['class'], function (ind, el) {
                                if ($(e).hasClass(el)) {
                                    exlcudedCols.push(cellIndex);
                                }
                                ;
                            });
                            if (!$.trim($(e).text())) {
                                if (topIndex == 0) {
                                    emptyCellsCount[i] = 0;
                                }
                                ;
                                emptyCellsCount[i] += 1;
                                emptyCellsCount[i] += 1;
                            }
                            ;
                        }
                        ;
                    });
                });
                for (var p in emptyCellsCount) {
                    if (emptyCellsCount.hasOwnProperty(p) && typeof emptyCellsCount[p] == 'number' && emptyCellsCount[p] == rows) {
                        exlcudedCols.push(p * 1);
                    }
                    ;
                }
                ;
                clsHeadersReset();
            };
            function attachEvents() {
                $theadTr.on('click', function (e) {
                    var target = e.target;
                    var cellIndex;
                    if (target.tagName != 'TH') {
                        while (target.tagName != 'TH') {
                            target = target.parentNode;
                        }
                        ;
                    }
                    ;
                    cellIndex = target.cellIndex;
                    if ($.inArray(cellIndex, exlcudedCols) == -1) {
                        $tbodyClone = $tbody.clone();
                        $tbodyTrClone = $tbodyClone.find('tr');
                        sort(cellIndex, getSetDirection(target));
                    }
                    ;
                });
            };
            function getSetDirection(el) {
                var $el = $(el);
                if (!$el.hasClass('dir')) {
                    clsHeadersReset(exlcudedCols);
                    $el.addClass('dir asc');
                    return 'asc';
                } else {
                    if ($el.hasClass('asc')) {
                        clsHeadersReset(exlcudedCols);
                        $el.addClass('dir desc');
                        return 'desc';
                    } else if ($el.hasClass('desc')) {
                        clsHeadersReset(exlcudedCols);
                        $el.addClass('dir asc');
                        return 'asc';
                    }
                }
                ;
            };
            function sort(cellIndex, direction) {
                var sortedRes;
                var tempFragment = $tbody.clone();
                if (isNum($($($tbodyTrClone[0]).children()[cellIndex]).text())) {
                    sortedRes = sortNumber($tbodyTrClone, direction, cellIndex);
                } else {
                    sortedRes = sortDefault($tbodyTrClone, direction, cellIndex);
                }
                ;
                sortedRes.each(function (i, e) {
                    $(tempFragment.children()[i]).replaceWith($(e));
                });
                $tbody.html(tempFragment.html());
            };
            function isNum(val) {
                var val = val.replace(new RegExp(/[£$€]/g), "");
                return !isNaN(parseFloat(val))
            };
            function sortDefault(node, direction, cellIndex) {
                node.sort(function (a, b) {
                    var $a = $(a);
                    var $b = $(b);
                    var aText = $.trim($($a.children()[cellIndex]).text());
                    var bText = $.trim($($b.children()[cellIndex]).text());
                    if (direction == 'asc') {
                        return ((aText < bText) ? -1 : ((aText > bText) ? 1 : 0));
                    } else if (direction == 'desc') {
                        return ((bText < aText) ? -1 : ((bText > aText) ? 1 : 0));
                    }
                    ;
                });
                return node;
            };
            function sortNumber(node, direction, cellIndex) {
                node.sort(function (a, b) {
                    var $a = $(a);
                    var $b = $(b);
                    var aText = $.trim($($a.children()[cellIndex]).text()).replace(new RegExp(/[£$€]/g), "");
                    var bText = $.trim($($b.children()[cellIndex]).text()).replace(new RegExp(/[£$€]/g), "");
                    aText = parseFloat(aText);
                    bText = parseFloat(bText);
                    aText = (isNaN(aText)) ? 0 : aText;
                    bText = (isNaN(bText)) ? 0 : bText;
                    if (direction == 'asc') {
                        return aText - bText;
                    }
                    ;
                    if (direction == 'desc') {
                        return bText - aText;
                    }
                    ;
                });
                return node;
            };
        });
    };
}(jQuery));
/* File BEGIN: http://fm.cnbc.com/applications/cnbc.com/staticcontent/scripts/libraries/International/internationlization.2.js?t=1450133677 */
var CNBC_Regional = {};
(function ($) {
    CNBC_Regional._config = {
        "USA": {
            "edition": "USA",
            "nid": "100746233",
            "link": "/",
            "name": "United States",
            "msgName": "U.S.",
            "mobileMsgName": "U.S.",
            "mobileAlternate": "WORLD",
            "menuName": "U.S."
        },
        "WORLD": {
            "edition": "WORLD",
            "nid": "100746255",
            "link": "/id/100746255",
            "name": "International",
            "msgName": "new international",
            "mobileMsgName": "International",
            "mobileAlternate": "USA",
            "menuName": "INTL"
        }
    };
    CNBC_Regional._defaultEdition = 'USA';
    CNBC_Regional._cnbcBaseURL = '';
    CNBC_Regional._region = CNBC_Utils.getQueryStringParamValue('region');
    CNBC_Regional._msg = '<span>Based on your location, the $msgName$ edition will be set as your cnbc.com home page&nbsp;&nbsp;</span>';
    CNBC_Regional._links = '<li><a href="$link$"$selected$ data-edition="$edition$">$name$</a></li>';
    CNBC_Regional._radio = '<input type="radio" name="region" value="$edition$"$checked$>$name$&nbsp;&nbsp;';
    CNBC_Regional._cookieName = 'geo_cookie';
    CNBC_Regional._radioHome = '<li><label><input type="radio" name="region-home" value="$edition$"$checked$><span class="radio-site-type">$name$</span></input></label></li>';
    CNBC_Regional._navAHome = 'HOME ';
    CNBC_Regional.init = function (args) {
        args = args || {};
        this.$_linksContainer = $('ul#home-geo-container');
        this.$_linksContainerHome = $('#home-geo-container');
        this.$_msgContainer = $('#regions-msg-container');
        this.$_msgContainerHome = $('#site-set');
        this.$_navHome = $('#site-set #homeLabel');
        this._config = args.config || this._config;
        this._nid = args.nid || '100746233';
        this._defaultEdition = args.defaultEdition || this._defaultEdition;
        var edition = null;
        var cookieEdition = CNBC_Utils.readCookie(this._cookieName);
        this._cnbcBaseURL = args.cnbc_base_url || this._cnbcBaseURL;
        if (cookieEdition == null || cookieEdition == '') {
            edition = this.prepareEditionForRegion();
            this.renderMessage(edition);
        } else {
            if (CNBC_Regional._nid == "100746233") {
                edition = "USA";
            } else if (CNBC_Regional._nid == "100746255") {
                edition = "WORLD";
            } else {
                edition = cookieEdition;
            }
        }
        CNBC_Utils.createCookie(this._cookieName, edition, 87658);
        if (this._config[edition]['navAHome'] !== undefined) {
            this._navAHome = this._config[edition]['navAHome'] + ' ';
        }
        this.renderHome(edition);
        this.attachEventsHome(edition);
    };
    CNBC_Regional._getEdition = function () {
        var edition = null;
        var cookieEdition = CNBC_Utils.readCookie(this._cookieName);
        if (cookieEdition == null || cookieEdition == '') {
            edition = this.prepareEditionForRegion();
            if (edition != null) {
                CNBC_Utils.createCookie(this._cookieName, edition, 87658);
                this.renderMessage(edition);
            }
        } else {
            edition = cookieEdition;
        }
        return edition;
    }
    CNBC_Regional.getHomepageUrl = function () {
        var edition = this._getEdition();
        var homeurl = this._config[edition].link;
        return homeurl
    }
    CNBC_Regional.prepareEditionForRegion = function () {
        var edition = null;
        var nodeEdition = this.getEditionForNode(this._nid);
        if (nodeEdition != this._defaultEdition) {
            edition = this.getEditionForRegion(nodeEdition);
        } else {
            edition = nodeEdition;
        }
        return edition;
    };
    CNBC_Regional.getEditionForNode = function (nid) {
        nid = nid || this._nid;
        var edition = null;
        $.each(this._config, function (index, el) {
            if (nid == el.nid) {
                edition = index;
            }
        });
        return edition;
    };
    CNBC_Regional.getEditionForRegion = function (region) {
        var region = region || this._region;
        var edition = null;
        if (region) {
            var editionConfig = this._config[region.toUpperCase()];
            if (editionConfig) {
                edition = editionConfig.edition;
            }
        }
        else {
            edition = this._defaultEdition;
        }
        return edition;
    };
    CNBC_Regional.renderHome = function (edition) {
        var $this = this;
        var homeHtnl = '';
        if (edition == null) {
            edition = this._defaultEdition;
        }
        $.each(this._config, function (index, el) {
            if (index == edition) {
                el['checked'] = ' checked="checked"';
            } else {
                el['checked'] = '';
            }
            homeHtnl += $this.processHTML($this._radioHome, el);
        });
        this.$_navHome.html(this._navAHome + this._config[edition]['menuName']);
        this.$_linksContainerHome.append(homeHtnl);
    };
    CNBC_Regional.renderMessage = function (edition) {
        var $this = this;
        var msg = this.processHTML(this._msg, this._config[edition]);
        $.each(this._config, function (index, el) {
            if (index == edition) {
                el['checked'] = ' checked="checked"';
            } else {
                el['checked'] = '';
            }
            msg += $this.processHTML($this._radio, el);
        });
        this.$closeButton = $('a.close', this.$_msgContainer);
        $('.regions-msg', this.$_msgContainer).prepend(msg);
        this.attachEvents(edition);
        this.$_msgContainer.removeClass('hide');
    };
    CNBC_Regional.attachEvents = function (ed) {
        var $this = this;
        this.$closeButton.click(function () {
            $this.$_msgContainer.remove();
        });
        $('a.save', this.$_msgContainer).click(function () {
            var edition = $("input[name=region]:checked", $this.$_msgContainer).val();
            CNBC_Utils.createCookie($this._cookieName, edition, 87658);
            if (edition != ed) {
                window.location.href = $this._cnbcBaseURL + $this._config[edition]['link'];
            } else {
                $this.$_msgContainer.remove();
            }
        });
    };
    CNBC_Regional.attachEventsHome = function (ed) {
        var $this = this;
        $('li', this.$_linksContainer).click(function (clickEvent) {
            var edition = $("input[name=region-home]", this).val();
            CNBC_Utils.createCookie($this._cookieName, edition, 87658);
            if (edition != ed) {
                window.location.href = $this._cnbcBaseURL + $this._config[edition]['link'];
            }
        });
    };
    CNBC_Regional.processHTML = function (text, obj) {
        $.each(obj, function (index, el) {
            var key = '$' + index + '$';
            text = text.replace(key, el);
        });
        return text;
    };
})(jQuery);
/* File BEGIN: http://fm.cnbc.com/applications/cnbc.com/staticcontent/scripts/libraries/Touch/CNBC_TabletFriendlyTouch.js?t=1450133677 */
var CNBC_TabletFriendlyTouch = function () {
};
(function () {
    CNBC_TabletFriendlyTouch.prototype = {
        targetElements: null,
        dataWasClicked: 'data-wc',
        dataClickEventAttribName: 'data-onclick',
        init: function (args) {
            var self = this;
            for (var param in args) {
                eval('this.' + param + ' = args.' + param + ';');
            }
            for (var groupID in this.targetElements) {
                this.targetElements[groupID].each(function (key, element) {
                    var dataClickEvent = $(element).attr(self.dataClickEventAttribName);
                    if (typeof(dataClickEvent) != 'undefined') {
                        self._attachClickEvent($(element), groupID);
                    }
                });
            }
        },
        clearClickedAttrib: function (groupID) {
            var self = this;
            this.targetElements[groupID].each(function (key, element) {
                var dataClickEvent = $(element).attr(self.dataClickEventAttribName);
                if (typeof(dataClickEvent) != 'undefined') {
                    $(element).attr(self.dataWasClicked, 'false');
                }
            });
        },
        _attachClickEvent: function (element, groupID) {
            var self = this;
            var thisElement = element;
            var thisGroupID = groupID;
            element.click(function (e) {
                var wasClicked = thisElement.attr(self.dataWasClicked) || 'false';
                self.clearClickedAttrib(thisGroupID);
                if (wasClicked == 'false') {
                    thisElement.attr(self.dataWasClicked, 'true');
                    e.stopImmediatePropagation();
                    return false;
                }
            });
        }
    };
    if (CNBC_Utils.isTouchEnabled() == true) {
        var tabletFriendlyTouch1 = new CNBC_TabletFriendlyTouch();
        tabletFriendlyTouch1.init({
            targetElements: {
                '1': $('.cnbc-menu').find('a'),
                '2': $('.tickers-container').find('.tickers')
            }
        });
    }
})($);
/* File BEGIN: http://fm.cnbc.com/applications/cnbc.com/staticcontent/scripts/libraries/PopUp/cnbc-popup.js?t=1450133677 */
function CNBC_Popup() {
}
CNBC_Popup.prototype.config = {};
CNBC_Popup.prototype.defaultConfig = {closeOnBackgroudClick: false};
CNBC_Popup.prototype.overlayBackground = null;
CNBC_Popup.prototype.closeButton = null;
CNBC_Popup.prototype.lightbox = null;
CNBC_Popup.prototype.innerLink = null;
CNBC_Popup.prototype.visible = false;
CNBC_Popup.prototype.closePopup = function () {
    this.overlayBackground.fadeOut("normal");
    this.visible = false;
};
CNBC_Popup.prototype.init = function (options) {
    var closePopupProxy;
    closePopupProxy = $.proxy(this.closePopup, this);
    this.config = $.extend({}, this.defaultConfig, options);
    this.lightbox = $('#cnbc-popup-lightbox');
    this.closeButton = $('#cnbc-popup-close-btn');
    this.overlayBackground = $('#cnbc-popup-background');
    this.innerLink = $('#cnbc-popup-inner-link');
    this.closeButton.click(closePopupProxy);
    this.innerLink.click(function () {
        window.location.href = "/";
    });
    this.lightbox.click(function () {
        return false;
    });
    if (this.config.closeOnBackgroudClick) {
        this.overlayBackground.click(closePopupProxy);
    }
};
CNBC_Popup.prototype.alignPopup = function () {
    var bgHeight, lbHeight, marginTop;
    if (!this.visible) {
        return;
    }
    if (this.config.top) {
        this.lightbox.css('margin-top', config.top);
    } else {
        bgHeight = this.overlayBackground.css('height');
        bgHeight = parseInt(bgHeight);
        lbHeight = this.lightbox.css('height');
        lbHeight = parseInt(lbHeight);
        marginTop = Math.floor((bgHeight - lbHeight) / 2);
        this.lightbox.css('margin-top', marginTop + 'px');
    }
}
CNBC_Popup.prototype.windowResize = function () {
    this.alignPopup();
}
CNBC_Popup.prototype.execute = function () {
    this.overlayBackground.fadeIn(1);
    this.visible = true;
    this.alignPopup();
    $(window).resize($.proxy(this.windowResize, this));
};
/* File BEGIN: http://fm.cnbc.com/applications/cnbc.com/staticcontent/scripts/libraries/PopUp/cnbc-popup.2.js?t=1450133677 */
function CNBC_Popup2() {
}
CNBC_Popup2.prototype.config = {};
CNBC_Popup2.prototype.defaultConfig = {
    closeOnBackgroudClick: false,
    popupId: '',
    popupContent: '',
    initCallback: null,
    autoAlignPopup: true,
    autoHide: true
};
CNBC_Popup2.prototype.domStr = '<div class="cnbc-popup-background" id="<popupId>">' + '<div class="cnbc-popup-lightbox">' + '<a class="cnbc-popup-close-btn">&times;</a>' + '<popupContent>' + '</div>' + '</div>';
CNBC_Popup2.prototype.overlayBackground = null;
CNBC_Popup2.prototype.closeButton = null;
CNBC_Popup2.prototype.lightbox = null;
CNBC_Popup2.prototype.visible = false;
CNBC_Popup2.prototype.autoHideHandler = function () {
    if (!this.visible) {
        return;
    }
    if (this.config.beforeCloseCallback) {
        this.config.beforeCloseCallback();
    }
    if (this.config.autoHide) {
        this.hide();
        if (this.config.afterCloseCallback) {
            this.config.afterCloseCallback();
        }
    }
};
CNBC_Popup2.prototype.hide = function () {
    if (!this.visible) {
        return;
    }
    this.overlayBackground.fadeOut("normal");
    this.visible = false;
};
CNBC_Popup2.prototype.init = function (options) {
    var hideProxy, popupDomStr;
    this.config = $.extend({}, this.defaultConfig, options);
    popupDomStr = this.domStr.replace("<popupId>", this.config.popupId);
    if (typeof this.config.popupContent == "object") {
        popupDomStr = popupDomStr.replace("<popupContent>", '');
        popupDomStr = $(popupDomStr);
        popupDomStr.find('.cnbc-popup-lightbox').append(this.config.popupContent);
    } else {
        popupDomStr = popupDomStr.replace("<popupContent>", this.config.popupContent);
    }
    $('body').append(popupDomStr);
    this.overlayBackground = $('#' + this.config.popupId);
    this.lightbox = this.overlayBackground.find('.cnbc-popup-lightbox');
    this.closeButton = this.overlayBackground.find('.cnbc-popup-close-btn');
    hideProxy = $.proxy(this.autoHideHandler, this);
    this.closeButton.click(hideProxy);
    this.lightbox.click(function (event) {
        event.stopPropagation();
    });
    if (this.config.minHeight) {
        this.lightbox.css('min-height', this.config.minHeight);
    }
    if (this.config.minWidth) {
        this.lightbox.css('min-width', this.config.minWidth);
    }
    if (this.config.width) {
        this.lightbox.css('width', this.config.width);
    }
    if (this.config.closeOnBackgroudClick) {
        this.overlayBackground.click(hideProxy);
    }
    if (this.config.initCallback) {
        this.config.initCallback();
    }
};
CNBC_Popup2.prototype.alignPopup = function () {
    var bgHeight, lbHeight, marginTop;
    if (!this.visible || !this.config.autoAlignPopup) {
        return;
    }
    if (this.config.top) {
        this.lightbox.css('margin-top', this.config.top);
    } else {
        bgHeight = this.overlayBackground.css('height');
        bgHeight = parseInt(bgHeight);
        lbHeight = this.lightbox.css('height');
        lbHeight = parseInt(lbHeight);
        marginTop = Math.floor((bgHeight - lbHeight) / 2);
        this.lightbox.css('margin-top', marginTop + 'px');
    }
};
CNBC_Popup2.prototype.windowResize = function () {
    this.alignPopup();
};
CNBC_Popup2.prototype.loaderImg = function (show) {
    if (show) {
        this.lightbox.addClass('loader');
    } else {
        this.lightbox.removeClass('loader');
    }
};
CNBC_Popup2.prototype.show = function () {
    this.overlayBackground.fadeIn(1);
    this.visible = true;
    this.alignPopup();
    $(window).resize($.proxy(this.windowResize, this));
};
/* File BEGIN: http://fm.cnbc.com/applications/cnbc.com/staticcontent/scripts/libraries/PopUp/cnbc-popup.3.js?t=1450133677 */
CNBC_Popup3 = function () {
    var visible = false;
    var overlayBackground;
    var lightbox;
    var xButton;
    var config;
    var popupContentDiv;
    var defaultConfig = {
        beforeCloseCallback: null,
        afterCloseCallback: null,
        beforeShowCallback: null,
        afterShowCallback: null,
        onSubmitCallback: null,
        closeOnBackgroudClick: false,
        minHeight: '',
        minWidth: '',
        width: '',
        autoAlignPopup: true,
        top: '',
        loaderImgVisible: false,
        xButtonVisible: true
    };
    var popupDomStr = '<div id="cnbc-popup3-background">' + '<div id="cnbc-popup3-lightbox">' + '<a id="cnbc-popup3-xButton" class="cnbc-popup-close-btn popup-close">&times;</a>' + '<div id="cnbc-popup3-content"></div>' + '</div>' + '</div>';

    function hide() {
        if (!visible) {
            return false;
        }
        if (config.beforeCloseCallback) {
            if (!config.beforeCloseCallback(overlayBackground)) {
                return false;
            }
        }
        overlayBackground.fadeOut("normal");
        visible = false;
        if (config.afterCloseCallback) {
            return config.afterCloseCallback(overlayBackground);
        }
        return true;
    }

    function submit() {
        if (config.onSubmitCallback) {
            config.onSubmitCallback(overlayBackground);
        }
    }

    function updateContent(content) {
        popupContentDiv.html(content);
    }

    function show(options) {
        config = $.extend({}, defaultConfig, options);
        if (!overlayBackground) {
            overlayBackground = $(popupDomStr);
            $('body').append(overlayBackground);
            lightbox = overlayBackground.find('#cnbc-popup3-lightbox');
            xButton = lightbox.find('#cnbc-popup3-xButton');
            popupContentDiv = lightbox.find('#cnbc-popup3-content');
            xButton.css('display', config.xButtonVisible ? 'inline' : 'none');
            lightbox.click(function (event) {
                try {
                    if (event.target.classList.contains('popup-close')) {
                        hide();
                    } else if (event.target.classList.contains('popup-submit')) {
                        submit();
                    }
                } finally {
                    event.stopPropagation();
                }
            });
            overlayBackground.click(function () {
                if (config.closeOnBackgroudClick) {
                    hide();
                }
            });
            $(window).resize(alignPopup);
        }
        if (config.minHeight) {
            lightbox.css('min-height', config.minHeight);
        }
        if (config.minWidth) {
            lightbox.css('min-width', config.minWidth);
        }
        if (config.width) {
            lightbox.css('width', config.width);
        }
        if (config.beforeShowCallback) {
            config.beforeShowCallback(overlayBackground);
        }
        popupContentDiv.html(config.popupContent);
        showLoaderImg(config.loaderImgVisible);
        overlayBackground.fadeIn(1);
        visible = true;
        alignPopup();
        if (config.afterShowCallback) {
            config.afterShowCallback(overlayBackground);
        }
    }

    function alignPopup() {
        var bgHeight, lbHeight, marginTop;
        if (!visible || !config.autoAlignPopup) {
            return;
        }
        if (config.top) {
            lightbox.css('margin-top', config.top);
        } else {
            bgHeight = overlayBackground.css('height');
            bgHeight = parseInt(bgHeight);
            lbHeight = lightbox.css('height');
            lbHeight = parseInt(lbHeight);
            marginTop = Math.floor((bgHeight - lbHeight) / 2);
            lightbox.css('margin-top', marginTop + 'px');
        }
    }

    function showLoaderImg(show) {
        if (show) {
            lightbox.addClass('loader');
        } else {
            lightbox.removeClass('loader');
        }
    }

    return {'show': show, 'hide': hide, 'showLoaderImg': showLoaderImg, 'updateContent': updateContent};
}();
/* File BEGIN: http://fm.cnbc.com/applications/cnbc.com/staticcontent/scripts/omniture/CNBC_Omniture.js?t=1450133677 */
var CNBC_Omniture = {
    'sManageVars': function () {
        s.manageVars = new Function("c", "l", "f", ""
        + "var s=this,vl,la,vla;l=l?l:'';f=f?f:1;if(!s[c])return false;vl='pag"
        + "eName,purchaseID,channel,server,pageType,campaign,state,zip,events,"
        + "products,transactionID';for(var n=1;n<76;n++)vl+=',prop'+n+',eVar'+"
        + "n;for(n=1;n<6;n++)vl+=',hier'+n;for(n=1;n<4;n++)vl+=',list'+n;for(n"
        + " in s.contextData)vl+=',contextData.'+n;if(l&&(f==1||f==2)){if(f==1"
        + ")vl=l.replace('[\\'','.').replace('\\']','');if(f==2){la=l.split(',"
        + "');vla=vl.split(',');vl='';for(x in la){if(la[x].indexOf('contextDa"
        + "ta')>-1){lax=la[x].split('\\'');la[x]='contextData.'+lax[1];}for(y "
        + "in vla){if(la[x]==vla[y]){vla[y]='';}}}for(y in vla){vl+=vla[y]?','"
        + "+vla[y]:'';}}s.pt(vl,',',c,0);return true;}else if(l==''&&f==1){s.p"
        + "t(vl,',',c,0);return true;}else return false;");
        s.clearVars = new Function("t", "" + "var s=this;if(t.indexOf('contextData')==-1)s[t]='';else if(t.indexO"
        + "f('contextData')>-1){var c=t.substring(t.indexOf('.')+1);s.contextD" + "ata[c]='';}");
        s.lowercaseVars = new Function("t", "" + "var s=this;if(t!='events'&&t.indexOf('contextData')==-1&&s[t]){s[t]"
        + "=s[t].toString();if(s[t].indexOf('D=')!=0){s[t]=s[t].toLowerCase();"
        + "}}else if(t.indexOf('contextData')>-1){var c=t.substring(t.indexOf("
        + "'.')+1);if(s.contextData[c]){s.contextData[c]=s.contextData[c].toSt"
        + "ring();s.contextData[c]=s.contextData[c].toLowerCase();}}");
        s.pt = new Function("x", "d", "f", "a", "" + "var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t"
        + ".substring(0,y);r=s[f](t,a);if(r)return r;z+=y+d.length;t=x.substri"
        + "ng(z,x.length);t=z<x.length?t:''}return'';");
    }, 'setUserMemeberStatus': function (o) {
        if (typeof window.bedrockTrkCookie != 'function') {
            return false;
        }
        ;
        function getAppAccess(v) {
            return (typeof v == 'string') ? v : v.join();
        };
        var actions = {'signin': 'logged-in', 'signout': 'logged-out', 'ready': 'logged-in'};
        var str = '';
        if (o) {
            var memeberId = (o.user && o.user._provider && o.user._provider.cnbc) ? o.user._provider.cnbc : '';
            var appAccess = (o.user && o.user.brand_data && o.user.brand_data.app_access) ? '|registered:'
            + getAppAccess(o.user.brand_data.app_access) : '|registered:free';
            str = (memeberId) ? memeberId + appAccess + '|' + actions[o.action] : '';
        }
        ;
        bedrockTrkCookie(str);
    }, 'signUpBtnClickTracking': function (o) {
        if (typeof s != 'undefined') {
            if (!s.manageVars) {
                this.sManageVars();
            }
            ;
            s.linkTrackVars = o.linkTrackVars;
            s.linkTrackEvents = o.linkTrackEvents;
            s.eVar48 = o.eVar48;
            s.prop48 = o.eVar48;
            s.events = o.events;
            s.tl(true, 'o', 'Registration Module', null, 'navigate');
            s.manageVars("clearVars");
        }
    }, 'genericClickTracking': function (o, i) {
        if (o) {
            if (window.s != 'undefined') {
                var collection = [];
                if (!s.manageVars) {
                    CNBC_Omniture.sManageVars();
                }
                if (s.manageVars)s.manageVars('clearVars');
                if (o.pageName)
                    s.pageName = o.pageName;
                if (o.eVars) {
                    CNBC_Omniture.configClickTracking('eVar', o.eVars, collection);
                }
                if (o.props) {
                    var props = Object.keys(o.props);
                    for (var i = 0; i < props.length; i++) {
                        if (o.props[props[i]] && typeof o.props[props[i]] === 'string') {
                            s['prop' + props[i]] = o.props[props[i]];
                            collection.push('prop' + props[i]);
                        }
                    }
                }
                if (o.params) {
                    var params = Object.keys(o.params);
                    for (var i = 0; i < params.length; i++) {
                        if (o.params[params[i]] && typeof o.params[params[i]] === 'string') {
                            s[params[i]] = o.params[params[i]];
                        }
                    }
                }
                if (o.cnbc) {
                    var cnbcIterator = (function (contextData, collection, key) {
                        if (this[key] && typeof(this[key]) === 'string' || typeof(this[key]) === 'number') {
                            contextData['cnbc.' + key] = this[key];
                            collection.push('contextData.cnbc.' + key);
                        }
                    }).bind(o.cnbc, s.contextData, collection);
                    Object.keys(o.cnbc).forEach(cnbcIterator);
                }
                if (o['link']) {
                    if (o['link'].trkNav) {
                        s.prop48 = s.eVar48 = s.contextData['cnbc.trknav'] = o['link'].trkNav;
                        collection.push('contextData.cnbc.trknav');
                        if (!$.inArray('eVar48', collection))
                            collection.push('eVar48');
                        if (!$.inArray('prop48', collection))
                            collection.push('prop48');
                    }
                    if (collection.length)
                        s.linkTrackVars = collection.join(',');
                    if (typeof o['link'].events == 'array' && o.events.length)
                        s.linkTrackEvents = o.events.join(',');
                    s.tl(this, 'o', o['link'].pev2, null, 'navigate');
                } else if (o['cookie']) {
                    var attr = o['cookie'];
                    if (attr['linktrk']) {
                        s.Util.cookieWrite('linktrk', attr['linktrk'], 0);
                    }
                } else {
                    s.t();
                }
                if (s.manageVars)s.manageVars('clearVars');
            } else {
                console.log('reboot omniture click tracking...');
                var self = this, i = i || 0;
                if (i < 5) {
                    setTimeout(function () {
                        i++;
                        self.genericClickTracking(o, i);
                    }, 500);
                } else {
                    console.warn("can't make omiture call: s object is not found");
                }
            }
        }
    }
};
/* File BEGIN: http://fm.cnbc.com/applications/cnbc.com/staticcontent/scripts/libraries/Surf/CNBC_Surf_Signin_ui.js?t=1450133677 */
;
var CNBC_Surf = CNBC_Surf || {};
CNBC_Surf.outageRedirection = '/id/101698521';
CNBC_Surf.Signin_Ui = function () {
    var surfOptions = {element: 'bedrock-watchlist-container', responsive: true, debug: false};
    var surfInitialized = false;
    var surfTemplate = null;
    var surfSignedIn = false;
    var fadedIn = true;
    var signinUI = null;
    var tabs = null;
    var currentAction = null;
    var onCloseCallback = null;
    var tabsEnabled = true;
    var signinDomStr = '<div id="cnbc-popup-logo-regi"><img src="' + CNBC_Settings.baseurls.sc_base_protocol_agnostic + '/applications/cnbc.com/staticcontent/img/login-cnbc-logo.png"></div>' + '<div class="downArrowTabs surf" id="newTabsContainer">' + '<ul class="tab">' + '<li class=""><a href="#">LOG IN</a></li>' + '<li class="first"><a href="#">SIGN UP</a></li>' + '</ul>' + '<div id="bedrock-watchlist-container">' + '<div class="create-account-msg"></div>' + '</div>' + '<div id="bedrock-remember-me-container">' + '<form>' + '<input id="bedrock-remember-me" name="bedrock-remember-me" type="checkbox" value="1">' + '<label for="bedrock-remember-me">Keep Me Logged In</label>' + '</form>' + '</div>' + '<div id="bedrock-watchlist-signin-footer">' + '<div>' + '<img src="' + CNBC_Settings.baseurls.sc_base_protocol_agnostic + '/applications/cnbc.com/staticcontent/img/surf/xfinity-subscribers_@2x.png" id="bedrock-watchlist-xfinity-logo">' + '</div>' + '<div>' + '<button id="bedrock-xfinity-signin-button">Sign In Here</button>' + '</div>' + '</div>' + '</div>';
    var surfUIFadeDuration = 200;
    var popupAnimateInDuration = 400;
    var popupAnimateOutDuration = 400;
    var verticalSlide = "710";
    var userflow = '';

    function signinUIBeforeCloseHandler() {
        setVisibility(false);
    };
    function surfReadyHandler(event) {
        surfInitialized = true;
        if (currentAction === "signin" && !SURF.globals.session) {
            surfSigninDialog();
        } else if (currentAction === "register" && !SURF.globals.session) {
            CNBC_Surf_Mediator.surfCreateAccountDialog();
        }
    };
    function surfSigninHandler(event, user) {
        CNBC_Common.ConsoleLog('SURF Sign-in Successful');
        CNBC_Utils.createCookie("logged_in", 1);
        setVisibility(false);
    };
    function setSigninItemsVisibility(visible) {
        var displayStyle = visible ? 'block' : 'none';
        $('#bedrock-watchlist-signin-footer').css('display', displayStyle);
    };
    function setRememberMeVisibility(visible) {
        var displayStyle = visible ? 'block' : 'none';
        $('#bedrock-remember-me-container').css('display', displayStyle);
    };
    function surfDialogVisibleHandler(event, paramObj) {
        var tabIndex;
        if (!signinUI.visible) {
            setVisibility(true);
        }
        if (paramObj && paramObj.template) {
            surfTemplate = paramObj.template;
        }
        if (event.type === 'visible') {
            setSigninItemsVisibility(surfTemplate === 'signin');
            setRememberMeVisibility(surfTemplate === 'signin' || surfTemplate === 'create_account');
            tabIndex = (surfTemplate == 'signin' || surfTemplate == 'forgot_password') ? 1 : 2;
            if (tabs._tabIndex != tabIndex) {
                tabs._tabIndex = tabIndex;
                tabs.showDefaultTab();
            }
            fadeEffect(true);
            setTimeout(function () {
                tabsEnabled = true;
            }, 1000);
        }
        signinUI.loaderImg(event.type !== 'visible');
    };
    function surfDialogCloseHandler() {
        setVisibility(false);
    };
    function startUIFlow(action, flow, check) {
        var tabArgs, tabIndex, signinUIOptions, provider = 'easyXDM_default5292_provider', showCreateAccount = function () {
            if ($(this).hasClass('first')) {
                $('.create-account-msg').text('Create Your CNBC Account');
            } else {
                $('.create-account-msg').text('');
            }
        };
        userflow = flow;
        setSigninItemsVisibility(false);
        setRememberMeVisibility(false);
        currentAction = action;
        tabIndex = (action == 'signin') ? 1 : 2;
        if (surfInitialized) {
            tabs._tabIndex = tabIndex;
            tabs.showDefaultTab();
            if (currentAction === "signin" && !SURF.globals.session) {
                surfSigninDialog();
                $('.create-account-msg').text('');
            } else if (currentAction === "register" && !SURF.globals.session) {
                CNBC_Surf_Mediator.surfCreateAccountDialog();
                $('.create-account-msg').text('Create Your CNBC Account');
                $('.downArrowTabs.surf .tab li').on('click', showCreateAccount);
            }
        } else {
            signinUI = new CNBC_Popup2();
            signinUIOptions = {
                closeOnBackgroudClick: false,
                popupId: 'bedrock-watchlist-signin-popup',
                popupContent: signinDomStr,
                initCallback: null,
                beforeCloseCallback: signinUIBeforeCloseHandler,
                minHeight: '458px',
                width: '440px',
                autoAlignPopup: false,
                autoHide: false
            };
            signinUI.init(signinUIOptions);
            $('#bedrock-xfinity-signin-button').click(function () {
                var casUrl = CNBC_Settings.baseurls.register_base + '/sauth/rs/authenticate/20035?target=';
                var xfinityLoginLogicUrl = 'https:' + CNBC_Settings.baseurls.pub_base_protocol_agnostic + '/application/auth/xfinity-active?endpoint=' +
                    window.location.href;
                window.location.href = casUrl + encodeURIComponent(xfinityLoginLogicUrl);
            });
            tabs = new CNBC_Tab();
            tabArgs = {
                container: $('#newTabsContainer'), tabIndex: tabIndex, callback: function () {
                    var tabIndex;
                    tabsEnabled = false;
                    setSigninItemsVisibility(false);
                    setRememberMeVisibility(false);
                    tabIndex = $('#newTabsContainer ul.tab').parent().find('li.selected').index();
                    if (tabIndex == 0) {
                        fadeEffect(false, function () {
                            $('#bedrock-watchlist-container').attr('visibility', 'hidden');
                            surfSigninDialog();
                        });
                    }
                    else if (tabIndex == 1) {
                        fadeEffect(false, function () {
                            $('#bedrock-watchlist-container').attr('visibility', 'hidden');
                            CNBC_Surf_Mediator.surfCreateAccountDialog();
                        });
                    }
                    ;
                }, okToHandleClickCallback: function () {
                    return tabsEnabled;
                }
            };
            tabs.init(tabArgs);
            CNBC_Surf_Mediator.surfInit(surfOptions);
        }
    };
    function surfSigninDialog() {
        setTimeout(CNBC_Surf_Mediator.surfSigninDialog, 1000);
    };
    function surfCreateAccountHandler(event, user) {
    };
    function surfCreateAccountErrorHandler(event) {
    };
    function setVisibility(visible) {
        if (visible) {
            $('body').css('overflow', 'hidden');
            signinUI.show();
            signinUI.lightbox.animate({top: "+=" + verticalSlide}, popupAnimateInDuration, "swing", function () {
            });
        } else {
            $('body').css('overflow', 'auto');
            if (userflow == 'pro' && !CNBC_Utils.isUserPremium()) {
                signinUI.lightbox.fadeOut(function () {
                    signinUI.lightbox.css({'display': 'block', 'top': '-610px'});
                    signinUI.hide();
                    if (onCloseCallback) {
                        onCloseCallback();
                    }
                    ;
                });
            } else {
                signinUI.lightbox.animate({top: "-=" + verticalSlide}, popupAnimateOutDuration, "swing", function () {
                    signinUI.hide();
                    if (onCloseCallback) {
                        onCloseCallback();
                    }
                    ;
                });
            }
            ;
        }
    };
    function fadeEffect(fadeIn, callbackFunc) {
        if (fadeIn != fadedIn) {
            fadedIn = fadeIn;
            $('#bedrock-watchlist-container').fadeToggle(surfUIFadeDuration, "linear", callbackFunc);
        }
    };
    function loadingWindow(mode, onComplete) {
        var coverDiv = $('#cover_div');
        if (!coverDiv.length) {
            $(document.body).append("<div class='cover_div' id='cover_div'><div class='Absolute-Center'><div class='loading'><img src='" + CNBC_Settings.baseurls.sc_base_protocol_agnostic + "/applications/cnbc.com/staticcontent/img/loader-2.gif' width=32></div></div></div>");
            coverDiv = $('#cover_div');
        }
        ;
        $('.Absolute-Center .loading').css('display', 'block');
        $('.Absolute-Center .msg').css('display', 'none');
        if (mode)
            coverDiv.css("opacity", 0.5).fadeIn(400, function () {
                if (onComplete) {
                    onComplete()
                }
            }); else
            coverDiv.fadeOut(400, function () {
                if (onComplete) {
                    onComplete()
                }
            });
    };
    function setOnCloseCallback(fn) {
        onCloseCallback = fn;
    };
    function closeButtonClick() {
        signinUI.closeButton.click();
    };
    function init() {
        if (typeof SURF !== 'undefined') {
            SURF.event.bind(SURF.events.READY, surfReadyHandler);
            SURF.event.bind(SURF.events.SIGNIN, surfSigninHandler);
            SURF.event.bind(SURF.events.DIALOG.VISIBLE, surfDialogVisibleHandler);
            SURF.event.bind(SURF.events.DIALOG.OPEN, surfDialogVisibleHandler);
            SURF.event.bind(SURF.events.DIALOG.CLOSE, surfDialogVisibleHandler);
            SURF.event.bind(SURF.events.CREATE_ACCOUNT, surfCreateAccountHandler);
            SURF.event.bind(SURF.events.CREATE_ACCOUNT_ERROR, surfCreateAccountErrorHandler);
        }
    };
    return {
        'startUIFlow': startUIFlow,
        'init': init,
        'setOnCloseCallback': setOnCloseCallback,
        'loadingWindow': loadingWindow,
        'closeButtonClick': closeButtonClick
    };
}();
/* File BEGIN: http://fm.cnbc.com/applications/cnbc.com/staticcontent/scripts/libraries/Surf/CNBC_Bedrock.syncApi.js?t=1450133677 */
;
if ($.browser.msie && $.browser.version * 1 < 10) {
    (function (c) {
        if (c.browser.msie && "XDomainRequest"in window && !("__jquery_xdomain__"in c)) {
            c.__jquery_xdomain__ = c.support.cors = !0;
            var e = function (a) {
                return "object" === c.type(a) ? a : (a = /^(((([^:\/#\?]+:)?(?:\/\/((?:(([^:@\/#\?]+)(?:\:([^:@\/#\?]+))?)@)?(([^:\/#\?]+)(?:\:([0-9]+))?))?)?)?((\/?(?:[^\/\?#]+\/+)*)([^\?#]*)))?(\?[^#]+)?)(#.*)?/.exec(a)) ? {
                    href: a[0] || "",
                    hrefNoHash: a[1] || "",
                    hrefNoSearch: a[2] || "",
                    domain: a[3] || "",
                    protocol: a[4] || "",
                    authority: a[5] || "",
                    username: a[7] || "",
                    password: a[8] || "",
                    host: a[9] || "",
                    hostname: a[10] || "",
                    port: a[11] || "",
                    pathname: a[12] || "",
                    directory: a[13] || "",
                    filename: a[14] || "",
                    search: a[15] || "",
                    hash: a[16] || ""
                } : {}
            }, f = c.ajaxSettings.xhr, d = "SESSION_COOKIE_NAME"in window ? window.SESSION_COOKIE_NAME : "jsessionid", g = e(document.location.href).domain;
            c.ajaxSettings.xhr = function () {
                var a = e(this.url).domain;
                if ("" === a || a === g)return f.call(c.ajaxSettings);
                try {
                    var b = new XDomainRequest;
                    if (!b.setRequestHeader)b.setRequestHeader = c.noop;
                    if (!b.getAllResponseHeaders)b.getAllResponseHeaders = c.noop;
                    if (d) {
                        var h = b.open;
                        b.open = function () {
                            var a = RegExp("(?:^|; )" + d + "=([^;]*)", "i").exec(document.cookie);
                            if (a = a && a[1]) {
                                var b = arguments[1].indexOf("?");
                                arguments[1] = -1 == b ? arguments[1] + (";" + d + "=" + a) : arguments[1].substring(0, b) + ";" + d + "=" + a + arguments[1].substring(b)
                            }
                            return h.apply(this, arguments)
                        }
                    }
                    b.onload = function () {
                        if ("function" === typeof b.onreadystatechange)b.readyState = 4, b.status = 200, b.onreadystatechange.call(b, null, !1)
                    };
                    b.onerror = b.ontimeout = function () {
                        if ("function" === typeof b.onreadystatechange)b.readyState = 4, b.status = 500, b.onreadystatechange.call(b, null, !1)
                    };
                    return b
                } catch (i) {
                }
            }
        }
    })(jQuery);
}
;
var CNBC_Bedrock = CNBC_Bedrock || {};
CNBC_Bedrock.syncApi = {
    defaults: {
        url: '//register.cnbc.com/auth/api/',
        uuid: '',
        pid: '150',
        action: '',
        token: '',
        data: '',
        timeout: 4000,
        success: function () {
        },
        error: function () {
        }
    }, uid: null, user: null, userBedrockPayload: null, syncCall: function (options) {
        var opts = $.extend({}, this.defaults, options);
        if (!opts.action || !opts.uuid || !opts.pid) {
            return false
        }
        ;
        var url = 'https:' + opts.url + opts.pid + '/' + opts.uuid + '/sync?opi=' + opts.action;
        jQuery.support.cors = true;
        var failureScenarioFlag = localStorage.getItem('1266');
        if (failureScenarioFlag) {
        }
        $.ajax({
            url: url,
            type: 'POST',
            dataType: 'json',
            data: opts.data,
            timeout: opts.timeout,
            crossDomain: true,
            contentType: 'text/plain',
            success: function () {
                opts.success.apply(this, arguments);
                SURF.getUserInfo();
            },
            error: function () {
                opts.error.apply(this, arguments);
            }
        });
    }, signInCall: function (options) {
        var self = this;
        var opts = $.extend({}, this.defaults, options);
        if (!opts.uuid || !opts.pid) {
            return false
        }
        ;
        var attemptsToSignIn = 3;
        var url = 'https:' + opts.url + opts.pid + '/' + opts.uuid + '/signin' + ((opts.token) ? '?token=' + opts.token : '');
        jQuery.support.cors = true;
        var getAutoLoginUrlCall = function () {
            $.ajax({
                type: 'POST',
                url: url,
                dataType: 'json',
                crossDomain: true,
                timeout: opts.timeout,
                contentType: 'text/plain',
                success: function (data) {
                    var serviceUrl = self.checkSearchParameter('service');
                    var autoLoginURL = (serviceUrl) ? (data.autoLoginURL + '&service=' + serviceUrl) : data.autoLoginURL;
                    $.ajax({
                        url: decodeURIComponent(autoLoginURL),
                        dataType: 'jsonp',
                        jsonpCallback: 'callback101',
                        cache: true,
                        async: false,
                        success: function () {
                            opts.success.apply(this, arguments);
                        },
                        error: function () {
                            opts.error.apply(this, arguments);
                        }
                    });
                },
                error: function (data) {
                    if (attemptsToSignIn > 1) {
                        attemptsToSignIn--;
                        getAutoLoginUrlCall();
                    } else {
                        if (CNBC_Surf_Mediator.errorObjects.signIn) {
                            CNBC_Surf_Mediator.errorObjects.signIn.show();
                        }
                        ;
                    }
                    ;
                }
            });
        };
        getAutoLoginUrlCall();
    }, signOutCall: function (options) {
        var opts = $.extend({}, this.defaults, options);
        if (!opts.uuid || !opts.pid) {
            return false
        }
        ;
        var url = "https:" + opts.url + opts.pid + '/' + opts.uuid + '/signout';
        jQuery.support.cors = true;
        $.ajax({
            type: 'POST',
            url: url,
            dataType: 'json',
            timeout: opts.timeout,
            crossDomain: true,
            success: function () {
                opts.success.apply(this, arguments);
            },
            error: function () {
                opts.error.apply(this, arguments);
            }
        });
    }, payloadCall: function (options) {
        var opts = $.extend({}, this.defaults, options), self = this;
        if (!opts.pid) {
            return false
        }
        ;
        var url = 'https:' + opts.url + opts.pid + '/payload';
        var urlParams = [];
        try {
            urlParams.push('token=' + SURF.globals.session.session_token);
            urlParams.push('uid=' + SURF.globals.session.uid);
        } catch (e) {
        }
        if (opts.tokenfor) {
            urlParams.push('tokenfor=' + opts.tokenfor);
        }
        if (urlParams.length > 0) {
            url += '?' + urlParams.join('&');
        }
        $.ajax({
            "url": url, crossDomain: true, dataType: 'jsonp', type: "GET", timeout: 10000, success: function () {
                opts.success.apply(this, arguments);
            }, error: function () {
                opts.error.apply(this, arguments);
            }
        });
    }, checkSearchParameter: function (param) {
        var searchString = location.search.substring(1).split('&');
        for (var i = 0; i < searchString.length; i++) {
            var tempArray = searchString[i].split('=');
            if (tempArray[0] == param) {
                return tempArray[1];
            }
        }
        ;
    }, casLogoutCall: function () {
        var currentUrl = location.href;
        if (location.href.indexOf('?video') != -1 && CNBC_Platform_Video_Gallery.videoObj.isVideoPro) {
            currentUrl = CNBC_Settings.baseurls.cnbcvideo_url_base;
        }
        var serviceUrl = this.checkSearchParameter('service') || encodeURIComponent(currentUrl);
        var logoutUrl = (CNBC_Utils.isUserPremium()) ? CNBC_Settings.baseurls.pro_base + '/logout.asp' : CNBC_Settings.baseurls.pub_base_protocol_agnostic + "/application/auth/logout";
        if (window.activePartnerExperience == 'xfinity' && CNBC_Surf_Mediator.isCnbcLoggedIn() && CNBC_Utils.readCookie('xfinity_passive_authenticated') == 'true') {
            location.href = logoutUrl + '?' + CNBC_Xfinity_Experience.getLogoutUrl().split('?')[1];
        } else {
            window.location.href = logoutUrl + '?service=' + serviceUrl;
        }
        ;
    }
};
/* File BEGIN: http://fm.cnbc.com/applications/cnbc.com/staticcontent/scripts/libraries/Surf/CNBC_Surf_Mediator.js?t=1450133677 */
;
var CNBC_Surf_Mediator = function () {
    var rememberMeCookieName = 'c_to';
    var mobile = false;
    var isSignIntoBedrockCalled = false;
    var debug = false;
    var isInitialized = false;
    var params;
    var user;
    var uid;
    var currentSurfConfigKey = '';
    var appAccessProValue = 'PRO';
    var errorObjects = {create: null, createSurf: null, xfinitySignIn: null, signIn: null, signInAutoLogin: null};
    var isLegacyPro = null;

    function createSurfSessionCookie(rememberMe) {
        CNBC_Surf_Mediator.rememberMe = rememberMe;
        CNBC_Utils.deleteData(rememberMeCookieName);
        var rememberMeExpiration = rememberMe ? (90 * 24) : "";
        CNBC_Utils.createCookie(rememberMeCookieName, 'YES!', rememberMeExpiration, false);
        CNBC_Utils.refreshProCookie();
    };
    function validateSurfSession() {
        var result = true;
        var cookieVal = CNBC_Utils.readData(rememberMeCookieName);
        if (!cookieVal) {
            CNBC_Utils.deleteData('c_cnbc_session_valid');
            if (isSurfSignedIn()) {
                CNBC_Utils.deleteData('c_surf_session_valid');
                if (SURF.isReady) {
                    surfSignout({});
                } else {
                    if (!SURF.isReady) {
                        CNBC_Surf.Signin_Ui.startUIFlow('load');
                    }
                    ;
                }
                ;
            }
            ;
            result = false;
        } else {
            if (!isCnbcLoggedIn()) {
                if (!SURF.isReady) {
                    CNBC_Surf.Signin_Ui.startUIFlow('load');
                }
                ;
            }
            ;
            updateHeader();
        }
        ;
        return result;
    };
    function verifyAppAccess() {
        var userIsPro = false, appAccessValues;
        CNBC_Premium.fetchAccessToken();
        try {
            appAccessValues = SURF.globals.user.brand_data.app_access;
            userIsPro = appAccessValues && Array.isArray(appAccessValues) && appAccessValues.indexOf(appAccessProValue) > -1;
        } catch (e) {
        }
        if (userIsPro) {
            if (!CNBC_Utils.readCookie(CNBC_Utils.proCookieName) || CNBC_Utils.readCookie(CNBC_Utils.proCookieName) == 'false') {
                CNBC_Utils.createProCookie();
            }
            ;
        } else {
            CNBC_Utils.deleteData(CNBC_Utils.proCookieName);
        }
    };
    function defaultInit(p) {
        var uid, user, session;
        var defaults = {'debug': false, 'mobile': false};
        params = $.extend({}, defaults, p);
        mobile = params.mobile;
        debug = params.debug;
        errorMsgInit();
        isInitialized = true;
        $('#bedrock-xfinity-signin-button').click(function () {
            if (window.s) {
                s.linkTrackVars = "eVar48,prop48";
                s.eVar48 = "registration:log in:Xfinity Sign In:global";
                s.prop48 = " registration:log in:Xfinity Sign In:global ";
                s.tl(this, 'o', "Registration Module");
            }
            ;
        });
        $('#login-container #signout').unbind();
        $('#login-container #signout, .reg-user #mobile-logout a').click(function () {
            if (window.CNBC_Surf && CNBC_Surf.Signin_Ui && CNBC_Surf.Signin_Ui.loadingWindow) {
                CNBC_Surf.Signin_Ui.loadingWindow(true, null);
            }
            ;
            if (SURF.isReady) {
                surfSignout({});
            } else {
                CNBC_Utils.deleteData('c_surf_session_valid');
                surfInit({});
            }
            ;
        });
        if (window.CNBC_Xfinity_Experience && window.activePartnerExperience == 'xfinity') {
            CNBC_Xfinity_Experience.init();
        }
        ;
    };
    function checkSearchParameter(param) {
        var searchString = location.search.substring(1).split('&');
        for (var i = 0; i < searchString.length; i++) {
            var tempArray = searchString[i].split('=');
            if (tempArray[0] == param) {
                return tempArray[1];
            }
        }
        ;
    };
    function omnitureClick(p) {
        if (!window.s) {
            return false;
        }
        ;
        var params = p || {};
        var source = params.source || '';
        if (!params.action) {
            return false
        }
        ;
        var flow = source;
        var str = '';
        if (params.action == 'signin') {
            str = "registration:log in:sign in:" + ((source == 'default') ? 'global' : source);
            s.events = '';
        } else if (params.action == 'signup') {
            str = "registration:" + ((source == 'pro') ? "sign up:next" : "sign up:sign up") + ":" + ((source == 'default') ? 'global' : source);
        }
        ;
        s.linkTrackVars = "eVar48,prop48";
        s.eVar48 = str;
        s.prop48 = str;
        s.tl(this, 'o', "Registration Module");
    };
    function omnitureSuccess(p) {
        if (!window.s) {
            return false;
        }
        ;
        var params = p || {};
        var source = params.source || '';
        if (!params.action) {
            return false
        }
        ;
        if (source || params.action == 'signout') {
            var str, evt;
            if (params.action == "signin") {
                str = "registration:log in:success:" + ((source == 'default') ? 'global' : source);
                evt = 'event12';
            } else if (params.action == "signup") {
                str = "registration:sign up:success:" + ((source == 'default') ? 'global' : source);
                evt = 'event13';
            } else if (params.action == "signout") {
                str = "registration:log out:success:global";
                evt = 'event14';
            }
            ;
            s.linkTrackVars = "eVar48,prop48,events";
            s.linkTrackEvents = evt;
            s.eVar48 = str;
            s.prop48 = str;
            s.events = evt;
            s.tl(this, 'o', "Registration Module");
        }
        ;
    };
    function appendUrlParam(url, p) {
        if (url.indexOf('?') >= 0) {
            url += '&';
        } else {
            url += '?';
        }
        return url + p.join('&');
    };
    function redirectUser(p) {
        var params = p || {};
        var ticket = params.ticket;
        var source = params.source || null;
        var flow = params.flow || null;
        if (flow == 'header') {
            return false;
        }
        ;
        var apphome = (CNBC_Bedrock.syncApi.checkSearchParameter('apphome')) ? '&apphome=' + CNBC_Bedrock.syncApi.checkSearchParameter('apphome') : '';
        var uid = (SURF.globals.session) ? SURF.globals.session.uid : null;
        var user = SURF.globals.user;
        var serviceUrl = checkSearchParameter('service') || null;
        var serviceParameter = (serviceUrl) ? decodeURIComponent(serviceUrl) : null;
        var docRefMobile = (document.referrer.indexOf('application/auth/logout') > -1) ? '' : document.referrer;
        var sourceUrls = {
            'default': CNBC_Settings.baseurls.pub_base_protocol_agnostic,
            'generic': CNBC_Settings.baseurls.pub_base_protocol_agnostic,
            'default-mobile': docRefMobile || CNBC_Settings.baseurls.pub_base_protocol_agnostic,
            'watchlist-mobile': docRefMobile || CNBC_Settings.baseurls.pub_base_protocol_agnostic,
            'pro-mobile': docRefMobile || CNBC_Settings.baseurls.pub_base_protocol_agnostic,
            'watchlist': CNBC_Settings.baseurls.watchlist_base,
            'portfolio': CNBC_Settings.baseurls.login_base + '/authproxy/portfolio/auth.do?Action=portfolio',
            'pro': CNBC_Settings.baseurls.login_base + '/tpauth/rest/authenticate?source=subscription&source_type=pro' + apphome,
            'pro-article': docRefMobile || CNBC_Settings.baseurls.pub_base_protocol_agnostic,
            'pro-article-mobile': docRefMobile || CNBC_Settings.baseurls.pub_base_protocol_agnostic,
            'comments': CNBC_Settings.baseurls.sc_base_protocol_agnostic + '/applications/cnbc.com/staticcontent/html/disqus/autoClose.html',
            'comments-mobile': CNBC_Settings.baseurls.sc_base_protocol_agnostic + '/applications/cnbc.com/staticcontent/html/disqus/autoClose.html'
        };
        var url = serviceParameter || sourceUrls[source];
        if (ticket) {
            url = appendUrlParam(url, ['ticket=' + ticket]);
        }
        if (uid && source && flow) {
            window.location = url;
        }
    };
    function isNewUser() {
        return !(window.SURF && SURF.globals.user && typeof SURF.globals.user._provider == 'object' && (SURF.globals.user._provider.cnbc));
    };
    function hasRegSource() {
        return !!(window.SURF && SURF.globals.user && SURF.globals.user.brand_data && SURF.globals.user.brand_data.registration_source);
    };
    function initError(config) {
        var config = config || {};
        var errorPopup = new CNBC_Popup2();
        var errorConfig = {
            closeOnBackgroudClick: false,
            popupId: config.id,
            popupContent: '<div style="clear:both;"></div>'
            + '<div class="popup-body">'
            + '<div class="header">' + config.headerText + '</div>'
            + '<div class="body">' + config.bodyText + '</div>'
            + '</div>'
            + '<hr style="width:85%;margin-top: 20px;margin-bottom: 20px;border: 0;border-top: 1px solid #eee;">'
            + '<div class="popup-footer">'
            + config.buttonMarkUp
            + '</div>',
            initCallback: null,
            autoAlignPopup: true,
            autoHide: true,
            minHeight: '200px',
            minWidth: mobile ? '25%' : '400px',
            afterCloseCallback: function () {
                config.closeBtnCallback();
            }
        };
        errorPopup.init(errorConfig);
        $('#' + config.id + ' .cancel').on('click', function () {
            errorPopup.hide();
            config.closeBtnCallback();
        });
        $('#' + config.id + ' .confirm.xfinity').on('click', function () {
            config.goToXfinityBtnCallback();
        });
        return errorPopup;
    };
    function errorMsgInit() {
        errorObjects.create = initError({
            id: 'errorPopupCreate',
            headerText: 'Thank you!',
            bodyText: 'Your account is all set up. <BR>Please log in to enjoy all of the features of CNBC.',
            buttonMarkUp: '<button class="button cancel">OK</button>',
            closeBtnCallback: function () {
                surfSignout({});
            }
        });
        errorObjects.createSurf = initError({
            id: 'errorPopupCreateSurf',
            headerText: 'Oops!',
            bodyText: 'Something went wrong. <BR>Please create your account again.',
            buttonMarkUp: '<button class="button cancel">OK</button>',
            closeBtnCallback: function () {
                surfSignout({});
            }
        });
        errorObjects.signIn = initError({
            id: 'errorPopupSignIn',
            headerText: 'Oops!',
            bodyText: 'Something went wrong. Please try to log in again.',
            buttonMarkUp: '<button class="button cancel">OK</button>',
            closeBtnCallback: function () {
                surfSignout({});
            }
        });
        errorObjects.signInAutoLogin = initError({
            id: 'errorPopupSignInAutoLogin',
            headerText: 'Oops!',
            bodyText: 'Something went wrong. Please try to log in again!',
            buttonMarkUp: '<button class="button cancel">OK</button>',
            closeBtnCallback: function () {
                surfSignout({});
            }
        });
        errorMsgXfinityInit({
            "cancel": function () {
                surfSignout({});
            }, "xfinity": function () {
            }
        });
    };
    function errorMsgXfinityInit(callback) {
        callback = callback || {
            "cancel": function () {
                surfSignout({});
            }, "xfinity": function () {
            }
        };
        errorObjects.xfinitySignIn = initError({
            id: 'errorPopupXfinitySignIn',
            headerText: 'Oops!',
            bodyText: 'It appears you may be logged out of Xfinity. <BR>Would you like to log back in?',
            buttonMarkUp: '<button class="button confirm xfinity">Xfinity Subscribers: Log In</button>'
            + '<button class="button btn-default cancel">Cancel</button>',
            closeBtnCallback: function () {
                callback.cancel();
            },
            goToXfinityBtnCallback: function () {
                callback.xfinity();
            }
        });
    };
    function bulkConsole(messageObject) {
        if (!debug && isInitialized) {
            return false
        }
        ;
        messageObject = messageObject || {};
        if (!typeof messageObject == 'object') {
            return false
        }
        ;
        for (var a in messageObject) {
            if (messageObject.hasOwnProperty(a)) {
                CNBC_Common.ConsoleLog(a, ' - ', messageObject[a]);
            }
            ;
        }
        ;
    };
    function updateHeader() {
        CNBC_Utils.appendClassesOnUserLoggedInOrPro();
        if (!CNBC_Utils.isUserPremium()) {
            $('li.link-pro-user').addClass('hide');
        }
        ;
        if (isSurfSignedIn()) {
            $('#reg-user > li > a').text('MY ACCOUNT');
            $('#unreg-user, .unreg-user').addClass('hide');
            $('#reg-user, .reg-user').removeClass('hide');
            cnbc.utils.amendMenu();
        } else {
            $('#unreg-user, .unreg-user').removeClass('hide');
            $('#reg-user, .reg-user').addClass('hide');
        }
        ;
    };
    function isRemembered() {
        return !!CNBC_Utils.readData(rememberMeCookieName);
    };
    function checkAuth() {
        var xfinityAuthPoll;
        if (CNBC_Utils.readCookie('xfinity_passive_authenticated') == null && window.activePartnerExperience != 'xfinity') {
            validateSurfSession();
        } else {
            xfinityAuthPoll = setInterval(function () {
                var xfinityCookie = CNBC_Utils.readCookie('xfinity_passive_authenticated');
                if (xfinityCookie != '') {
                    clearInterval(xfinityAuthPoll);
                }
                ;
                if (xfinityCookie == 'true') {
                    updateHeader();
                } else if (xfinityCookie == 'false') {
                    validateSurfSession();
                }
                ;
            }, 500);
            setTimeout(function () {
                clearInterval(xfinityAuthPoll);
            }, 15000);
        }
        ;
    };
    function isSignedIn() {
        return isCnbcLoggedIn() && isSurfSignedIn();
    };
    function signIntoBedrock(p, callbacks) {
        if (isSignIntoBedrockCalled) {
            return false;
        }
        ;
        isSignIntoBedrockCalled = true;
        var params = p || {};
        var uid = (SURF.globals.session) ? SURF.globals.session.uid : null;
        var user = SURF.globals.user;
        CNBC_Bedrock.syncApi.signInCall({
            uuid: uid,
            url: CNBC_Settings.baseurls.register_base.split(':')[1] + '/auth/api/',
            token: SURF.globals.session.session_token,
            success: function (data, text, status) {
                CNBC_Utils.createCookie('c_cnbc_session_valid', 'true');
                updateHeader();
                verifyAppAccess();
                if (callbacks && callbacks.success) {
                    callbacks.success(data, text, status);
                } else {
                    var ticket = (data.ticket) ? data.ticket : null;
                    redirectUser({'ticket': ticket, 'source': params.source, 'flow': params.flow});
                }
            },
            error: function (data, text, status) {
                CNBC_Common.ConsoleLog('cas sign in error 140. autologin url');
                errorObjects.signInAutoLogin.show();
                if (callbacks && callbacks.error) {
                    callbacks.error();
                }
            }
        });
    };
    function isCnbcLoggedIn() {
        return !!CNBC_Utils.readCookie('c_cnbc_session_valid');
    };
    function isSurfSignedIn() {
        return !!(window.SURF && window.SURF.globals && window.SURF.globals.session);
    };
    var activeMediator;
    var mediators = [];

    function defaultOnSurfReady(ev) {
        uid = (SURF.globals.session) ? SURF.globals.session.uid : null;
        user = SURF.globals.user;
        var reg_source = (typeof user == 'object' && user.brand_data && user.brand_data.registration_source) ? user.brand_data.registration_source : '';
        var provider = (user && '_provider'in user && 'cnbc'in user._provider) ? user._provider.cnbc : '';
        var $videoIfr = $('#live_player'), isVideoIfr = false;
        if ($('#live_player').length) {
            isVideoIfr = true;
            $videoIfr = $videoIfr[0];
        }
        if (window.CNBC_Omniture && CNBC_Omniture.setUserMemeberStatus) {
            CNBC_Omniture.setUserMemeberStatus({'action': 'ready', 'user': user});
        }
        ;
        if (uid) {
            if (CNBC_Utils.isPremium() && 'videoGalleryObj'in window) {
                if (tp.userRef) {
                    CNBC_Platform_Video_Gallery.videoObj.getTokenWithPro('success');
                } else {
                    CNBC_TinyPass.fetchTinyPassUserToken(CNBC_Platform_Video_Gallery.videoObj.getTokenWithPro);
                }
            }
            if (isVideoIfr && $videoIfr) {
                $videoIfr.contentWindow.$('#loadingImg').remove();
                $videoIfr.contentWindow.$('#overlayImgContainer').show();
                $videoIfr.contentWindow.CNBC_uplynk.initCompontents();
            }
            if (CNBC_Utils.isLegacyPro()) {
                isLegacyPro = true;
            }
            if (isRemembered() && !isCnbcLoggedIn()) {
                signIntoBedrock(params);
            }
            checkAuth();
            if (CNBC_Utils.isLegacyProFirstTimeVisit() && (params.flow == 'pro' || params.flow == 'header')) {
                CNBC_Premium.showPremiumTutorialVideo();
            }
            if (params.flow != 'pro' && params.flow != 'pro-mobile') {
                if (isCnbcLoggedIn()) {
                    var ticket = CNBC_Bedrock.syncApi.checkSearchParameter('ticket');
                    redirectUser({'source': params.source, 'flow': params.flow, 'ticket': ticket});
                }
                ;
            }
        }
        ;
        if (!CNBC_Premium.isReady)CNBC_Premium.init();
    };
    function defaultOnSurfCreateAccount(e, user) {
        omnitureClick({'action': 'signup', 'source': params.source, 'flow': params.flow});
        omnitureSuccess({'action': 'signup', 'source': params.source, 'flow': params.flow});
        if (params.flow == 'pro') {
            CNBC_Surf.Signin_Ui.loadingWindow(true, null);
        }
        ;
    };
    function defaultOnSurfEditAccount(ev) {
        var uid = (SURF.globals.session) ? SURF.globals.session.uid : null;
        var user = SURF.globals.user;
        updateHeader();
        if (uid) {
            CNBC_Bedrock.syncApi.syncCall({
                uuid: uid,
                action: 'edit',
                dataType: 'json',
                url: CNBC_Settings.baseurls.register_base.split(':')[1] + '/auth/api/',
                data: [{name: 'meta', value: JSON.stringify({session_token: SURF.globals.session.session_token})}],
                success: function (data, text, status) {
                },
                error: function (data, text, status) {
                    CNBC_Common.ConsoleLog('error ', data);
                    CNBC_Common.ConsoleLog('error ', text);
                    CNBC_Common.ConsoleLog('error ', status);
                }
            });
        }
        ;
    };
    function defaultOnSurfSignin(e, user) {
        isSignIntoBedrockCalled = false;
        if (CNBC_Utils.isLegacyPro()) {
            isLegacyPro = true;
        }
        ;
        function userSignedIntoBedrock(data, text, status) {
            CNBC_TinyPass.fetchTinyPassUserToken(function () {
                var isUserPremium = CNBC_Utils.isUserPremium();
                var isHomePage = CNBC_Utils.isHomePage();
                var isSpecialEventPage = CNBC_Utils.isSpecialEventPage();
                var isVideoGallery = CNBC_Utils.isVideoGallery();
                var isVideoSectionFront = CNBC_Utils.isVideoSectionFront();
                var docRefMobile = (document.referrer.indexOf('application/auth/logout') > -1) ? '' : document.referrer;
                if ((params.flow == 'pro' || params.flow == 'pro-mobile')) {
                    if (isUserPremium) {
                        if (CNBC_Premium.isPremium) {
                            if (CNBC_Utils.isLegacyProFirstTimeVisit()) {
                                CNBC_Premium.showPremiumTutorialVideo();
                            } else {
                                window.location.reload();
                            }
                            ;
                        } else {
                            window.location.href = CNBC_Utils.urlParam('service') ? window.decodeURIComponent(CNBC_Utils.urlParam('service')) : docRefMobile ? docRefMobile : '/';
                        }
                        ;
                    } else {
                        if (params.flow == 'pro') {
                            CNBC_Surf.Signin_Ui.loadingWindow(true, null);
                            var checkoutParams = {
                                complete: function () {
                                    CNBC_Surf.Signin_Ui.loadingWindow(false, null);
                                }, close: function () {
                                    CNBC_Surf.Signin_Ui.loadingWindow(false, null);
                                }
                            };
                            CNBC_Premium.displayCheckout(checkoutParams);
                            CNBC_Surf.Signin_Ui.loadingWindow(false, null);
                        }
                        if (params.flow == 'pro-mobile') {
                            CNBC_Premium.displayCheckout({});
                        }
                    }
                } else if (isUserPremium && (isHomePage || isSpecialEventPage || isVideoGallery || (window.CNBC_Premium && CNBC_Premium.isPremium) || isVideoSectionFront)) {
                    if (CNBC_Utils.isLegacyProFirstTimeVisit()) {
                        CNBC_Premium.showPremiumTutorialVideo();
                    } else {
                        window.location.reload();
                    }
                    ;
                } else {
                    var ticket = (data.ticket) ? data.ticket : null;
                    redirectUser({'ticket': ticket, 'source': params.source, 'flow': params.flow});
                }
                ;
            });
        };
        verifyAppAccess();
        var uid = (SURF.globals.session) ? SURF.globals.session.uid : null;
        var user = SURF.globals.user;
        var bedrockAccountCreateTries = 3;
        if (window.CNBC_Omniture && CNBC_Omniture.setUserMemeberStatus) {
            CNBC_Omniture.setUserMemeberStatus({'action': 'signin', 'user': user});
        }
        ;
        CNBC_Utils.deleteData(rememberMeCookieName);
        CNBC_Utils.createCookie('c_surf_session_valid', 'true', 90 * 24, false);
        if (uid) {
            var rememberMe = $('#bedrock-remember-me').prop('checked');
            createSurfSessionCookie(rememberMe);
        } else {
            surfSignout({});
        }
        ;
        omnitureClick({'action': 'signin', 'source': params.source, 'flow': params.flow});
        omnitureSuccess({'action': 'signin', 'source': params.source, 'flow': params.flow});
        if (isNewUser() && window.CNBC_Surf.Signin_Ui) {
            function bedrockSyncApiCreate() {
                CNBC_Bedrock.syncApi.syncCall({
                    uuid: uid,
                    dataType: 'json',
                    url: CNBC_Settings.baseurls.register_base.split(':')[1] + '/auth/api/',
                    data: [{name: 'meta', value: JSON.stringify({session_token: SURF.globals.session.session_token})}],
                    action: 'create',
                    success: function (data, text, status) {
                        if (!hasRegSource()) {
                            surfUpdate({
                                'uid': uid,
                                signature: '',
                                'user_data': {
                                    'registration_source': params.source,
                                    'option': JSON.stringify(['CNBC-TOS']),
                                    'option_date': JSON.stringify(['CNBC-TOS|' + new Date().getTime()])
                                }
                            });
                        }
                        ;
                        signIntoBedrock(params, {success: userSignedIntoBedrock});
                    },
                    error: function (data, text, status) {
                        if (bedrockAccountCreateTries > 1) {
                            bedrockAccountCreateTries--;
                            bedrockSyncApiCreate();
                        } else {
                            if (errorObjects.create) {
                                errorObjects.create.show();
                            }
                            ;
                        }
                        ;
                    }
                });
            };
            bedrockSyncApiCreate();
        } else {
            if (!hasRegSource()) {
                surfUpdate({
                    'uid': uid,
                    signature: '',
                    'user_data': {
                        'registration_source': params.source,
                        'option': JSON.stringify(['CNBC-TOS']),
                        'option_date': JSON.stringify(['CNBC-TOS|' + new Date().getTime()])
                    }
                });
            }
            ;
            signIntoBedrock(params, {success: userSignedIntoBedrock});
        }
    };
    function defaultOnSurfSignout() {
        isSignIntoBedrockCalled = false;
        CNBC_Utils.deleteData(rememberMeCookieName);
        CNBC_Utils.deleteData('c_surf_session_valid');
        CNBC_Utils.deleteData('c_cnbc_session_valid');
        if (window.CNBC_TinyPass && window.tp) {
            CNBC_TinyPass.updateTinyPassUserRef('');
        }
        omnitureSuccess({'action': 'signout', 'source': params.source, 'flow': params.flow});
        if (window.CNBC_Omniture && CNBC_Omniture.setUserMemeberStatus) {
            CNBC_Omniture.setUserMemeberStatus({'action': 'signout', 'user': user});
        }
        ;
        if ((window.CNBC_Surf && window.CNBC_Surf.profileManagement && !window.CNBC_Surf.profileManagement.isDelete) || (window.CNBC_Surf.Signin_Ui && !window.CNBC_Surf.profileManagement)) {
            CNBC_Bedrock.syncApi.casLogoutCall();
        }
    };
    function defaultOnSurfSigninError(event, error) {
        CNBC_Common.ConsoleLog('surf signo in error. Error object - ', error);
        CNBC_Common.ConsoleLog('Event object - ', event);
        omnitureClick({'action': 'signin', 'source': params.source, 'flow': params.flow});
    }

    function defaultOnSurfSignoutError(event, error) {
        CNBC_Common.ConsoleLog('surf signout error calling cas logout. Error object - ', error);
        CNBC_Common.ConsoleLog('Event object - ', event);
        CNBC_Bedrock.syncApi.casLogoutCall();
    }

    function defaultOnSurfCreateAccountError(event, object) {
        var errorCode = object._xhr.status * 1;
        CNBC_Common.ConsoleLog('error on surf user creation. Event Object - ', event);
        if (errorCode > 499 && errorCode < 600) {
            if (errorObjects.createSurf) {
                errorObjects.createSurf.show();
            }
        }
        omnitureClick({'action': 'signup', 'source': params.source, 'flow': params.flow});
    }

    function defaultOnSurfUI(event, action) {
        if (action == 'cancel') {
            if (mobile) {
                window.location = document.referrer || CNBC_Settings.baseurls.pub_base_protocol_agnostic;
            } else {
                CNBC_Surf.Signin_Ui.closeButtonClick();
            }
            ;
        }
        ;
    };
    function defaultOnSurfMissingFields(event, missingFields) {
        function submitMissingFields(popup) {
            var displayNameField = popup.find('#missing_field_display_name');
            var displayName = displayNameField.val();
            if (displayName) {
                var userData = {username: displayName};
                var updateObj = {
                    'uid': SURF.globals.user._id,
                    'signature': SURF.globals.user._auth_signature,
                    'user_data': userData,
                    'success': function () {
                        CNBC_Popup3.hide();
                    },
                    'error': function () {
                        var errMsg = popup.find('#missing_field_display_name_error_msg');
                        errMsg.css('display', 'block');
                    }
                };
                surfUpdate(updateObj);
            }
        }

        if (missingFields && missingFields.username) {
            var markup = '<div id="missing-fields-popup" style="clear:both;">' + '<div id="missingFieldsPopupHeader">More Information Required</div>' + '<div class="missing-fields-popup-subheader">Key data is missing from your member profile. Please provide the required information below.</div>' + '<div class="missing-fields-popup-fieldContainer">' + '<input id="missing_field_display_name" type="text" placeholder="Screen Name For Comments">' + '<div id="missing_field_display_name_error_msg">Username not available</div>' + '</div>' + '<div class="missing-fields-popup-legal">The information you provide when you create an account may be shared with other NBCUniversal businesses and used to help us better tailor our services, products, and advertising to you. For more details about how we use your information, see our <a target="_blank" href="http://nbcuni.com/privacy/">Privacy Policy</a>.</div>' + '<div class="missing-fields-popup-legal">By clicking the "Sign Up" button, you are agreeing to our <a target="_blank" href="http://www.cnbc.com/id/15837353/">Terms of Use</a> and <a target="_blank" href="http://nbcuni.com/privacy/">Privacy Policy</a>.</div>' + '<button class="popup-submit popup-submit-button">SUBMIT</button>' + '</div>';
            CNBC_Surf_Mediator.pageRefreshDisabled = true;
            var mWidth = null;
            var mHeight = null;
            if (CNBC_Surf_Mediator.mobile) {
                mWidth = '320px';
                mHeight = '400px';
            } else {
                mWidth = '470px';
                mHeight = '200px';
            }
            var popupConfig = {
                popupContent: markup,
                minHeight: mHeight,
                minWidth: mWidth,
                onSubmitCallback: submitMissingFields,
                xButtonVisible: false
            };
        }
    };
    function defaultOnSurfPasswordResetRequestSent() {
    };
    var defaultMediator = function () {
        return {
            'onSurfReady': defaultOnSurfReady,
            'onSurfCreateAccount': defaultOnSurfCreateAccount,
            'onSurfEditAccount': defaultOnSurfEditAccount,
            'onSurfSignin': defaultOnSurfSignin,
            'onSurfSignout': defaultOnSurfSignout,
            'onSurfSigninError': defaultOnSurfSigninError,
            'onSurfSignoutError': defaultOnSurfSignoutError,
            'onSurfCreateAccountError': defaultOnSurfCreateAccountError,
            'onSurfUI': defaultOnSurfUI,
            'onSurfMissingFields': defaultOnSurfMissingFields,
            'onSurfPasswordResetRequestSent': defaultOnSurfPasswordResetRequestSent
        };
    }();

    function init(p) {
        if (typeof SURF === 'undefined') {
            CNBC_Utils.deleteData(rememberMeCookieName);
            CNBC_Utils.deleteData('c_cnbc_session_valid');
            CNBC_Utils.deleteData('c_surf_session_valid');
            CNBC_Utils.deleteAllProCookies();
            return;
        }
        currentSurfConfigKey = CNBC_Settings.surf_key + (!!(p.surfConfigOverlay) ? '+' + p.surfConfigOverlay : '');
        if (activeMediator) {
            SURF.event.off(SURF.events.READY, activeMediator.onSurfReady);
            SURF.event.off(SURF.events.CREATE_ACCOUNT, activeMediator.onSurfCreateAccount);
            SURF.event.off(SURF.events.EDIT_ACCOUNT, activeMediator.onSurfEditAccount);
            SURF.event.off(SURF.events.SIGNIN, activeMediator.onSurfSignin);
            SURF.event.off(SURF.events.SIGNOUT, activeMediator.onSurfSignout);
            SURF.event.off(SURF.events.SIGNIN_ERROR, activeMediator.onSurfSigninError);
            SURF.event.off(SURF.events.SIGNOUT_ERROR, activeMediator.onSurfSignoutError);
            SURF.event.off(SURF.events.CREATE_ACCOUNT_ERROR, activeMediator.onSurfCreateAccountError);
            SURF.event.off(SURF.events.UI, activeMediator.onSurfUI);
            SURF.event.off(SURF.events.MISSING_FIELDS, activeMediator.onSurfMissingFields);
            SURF.event.off(SURF.events.PASSWORD_RESET_REQUEST_SENT, activeMediator.onSurfPasswordResetRequestSent);
        }
        ;
        activeMediator = mediators[p.flow] || defaultMediator;
        SURF.event.on(SURF.events.READY, activeMediator.onSurfReady);
        SURF.event.on(SURF.events.CREATE_ACCOUNT, activeMediator.onSurfCreateAccount);
        SURF.event.on(SURF.events.EDIT_ACCOUNT, activeMediator.onSurfEditAccount);
        SURF.event.on(SURF.events.SIGNIN, activeMediator.onSurfSignin);
        SURF.event.on(SURF.events.SIGNOUT, activeMediator.onSurfSignout);
        SURF.event.on(SURF.events.SIGNIN_ERROR, activeMediator.onSurfSigninError);
        SURF.event.on(SURF.events.SIGNOUT_ERROR, activeMediator.onSurfSignoutError);
        SURF.event.on(SURF.events.CREATE_ACCOUNT_ERROR, activeMediator.onSurfCreateAccountError);
        SURF.event.on(SURF.events.UI, activeMediator.onSurfUI);
        SURF.event.on(SURF.events.MISSING_FIELDS, activeMediator.onSurfMissingFields);
        SURF.event.on(SURF.events.PASSWORD_RESET_REQUEST_SENT, activeMediator.onSurfPasswordResetRequestSent);
        defaultInit(p);
    };
    function surfUpdate(p) {
        SURF.update(p || {});
    }

    function surfSignin(p) {
        SURF.signin(p || {});
    }

    function surfSignout(p) {
        SURF.signout(p || {});
    }

    function surfInit(p) {
        SURF.init(p || {});
    }

    function surfDelete(p) {
        SURF['delete'](p || {});
    }

    function surfCreateAccountDialog() {
        SURF.createAccountDialog(currentSurfConfigKey);
    }

    function surfSigninDialog() {
        SURF.signinDialog(currentSurfConfigKey);
    }

    return {
        'init': init,
        'errorObjects': errorObjects,
        'createSurfSessionCookie': createSurfSessionCookie,
        'appendUrlParam': appendUrlParam,
        'errorMsgXfinityInit': errorMsgXfinityInit,
        'updateHeader': updateHeader,
        'checkSearchParameter': checkSearchParameter,
        'isRemembered': isRemembered,
        'isSurfSignedIn': isSurfSignedIn,
        'isCnbcLoggedIn': isCnbcLoggedIn,
        'checkAuth': checkAuth,
        'rememberMeCookieName': rememberMeCookieName,
        'signIntoBedrock': signIntoBedrock,
        'isSignIntoBedrockCalled': isSignIntoBedrockCalled,
        'redirectUser': redirectUser,
        'mobile': mobile,
        'surfUpdate': surfUpdate,
        'surfSignin': surfSignin,
        'surfSignout': surfSignout,
        'surfInit': surfInit,
        'surfDelete': surfDelete,
        'surfCreateAccountDialog': surfCreateAccountDialog,
        'surfSigninDialog': surfSigninDialog,
        'verifyAppAccess': verifyAppAccess,
        'isLegacyPro': function () {
            return isLegacyPro;
        }
    };
}();
/* File BEGIN: http://fm.cnbc.com/applications/cnbc.com/staticcontent/scripts/libraries/Premium/CNBC_TinyPass.js?t=1450133677 */
;
var CNBC_TinyPass = function () {
    var initialized = false;
    var tinyPassUserCookieName = 'tinyPassUserToken';
    var tinyPassUserCookieTTL = 8 / 60;

    function tpExists() {
        return !!(window.tp)
    }

    function init(p, callback) {
        if (!tpExists()) {
            if (callback) {
                callback();
            }
            return false;
        }
        if (initialized) {
            if (callback) {
                callback();
            }
        } else {
            tp.trackPages = p.config.trackPages;
            tp.endpoint = p.config.endpoint;
            tp.aid = p.config.aid;
            tp.contentSection = p.contentSection || '';
            tp.contentAuthor = p.contentAuthor || '';
            tp.contentCreated = p.contentCreated || '';
            tp.debug = p.config.debug;
            tp.init(function () {
                initialized = true;
                if (callback) {
                    callback();
                }
            });
            CNBC_Utils.logElapsedTime("TP init complete");
        }
    };
    function showOffer(p, completeCallback, customEventCallback) {
        if (!tpExists()) {
            if (completeCallback) {
                completeCallback();
            }
            return false;
        }
        tp.offer.show(p);
        CNBC_Utils.logElapsedTime("Show offer complete");
    };
    function startCheckout(p) {
        if (!tpExists()) {
            if (p.complete) {
                p.complete();
            }
            return false;
        }
        tp.offer.startCheckout(p);
    };
    function updateTinyPassUserRef(val) {
        tp.userRef = val;
        CNBC_Utils.createCookie(tinyPassUserCookieName, tp.userRef, tinyPassUserCookieTTL, false);
    };
    function fetchTinyPassUserToken(callback) {
        if (!tpExists()) {
            callback ? callback('fail') : false;
            return false;
        }
        var isLoggedIn = CNBC_Utils.isSignedIn();
        if (isLoggedIn) {
            var userRef = CNBC_Utils.readData(tinyPassUserCookieName);
            updateTinyPassUserRef(userRef);
            if (tp.userRef) {
                callback ? callback('success') : false;
            } else {
                CNBC_Bedrock.syncApi.payloadCall({
                    pid: 152,
                    url: CNBC_Settings.baseurls.register_base.split(":")[1] + '/auth/api/',
                    success: function (data) {
                        if (data) {
                            updateTinyPassUserRef(data.payload_token);
                            callback ? callback('success') : false;
                        }
                    },
                    error: function () {
                        updateTinyPassUserRef('');
                        callback ? callback('fail') : false;
                    }
                });
            }
        } else {
            updateTinyPassUserRef('');
            callback ? callback('fail') : false;
        }
    };
    return {
        'init': init,
        'showOffer': showOffer,
        'fetchTinyPassUserToken': fetchTinyPassUserToken,
        'startCheckout': startCheckout,
        'tpExists': tpExists,
        'updateTinyPassUserRef': updateTinyPassUserRef
    };
}();
/* File BEGIN: http://fm.cnbc.com/applications/cnbc.com/staticcontent/scripts/libraries/Premium/CNBC_Premium.js?t=1450133677 */
;
CNBC_Premium = function () {
    var bedrockAccessCookieName = 'bedrockAccessToken';
    var bedrockVideoCookieName = 'bedrockVideoToken';
    var isProCookieName = 'ispro';
    var isProCookieTTL = 60 * 60 * 12 * 365;
    var bedrockVideoTokenValue;
    var bedrockAccessCookieTTL = 8 / 60;
    var videobedrockAccessCookieTTL = 1 / 60;
    var apphome = (CNBC_Bedrock.syncApi.checkSearchParameter('apphome')) ? '&apphome=' + CNBC_Bedrock.syncApi.checkSearchParameter('apphome') : '';
    var proHomePage = CNBC_Settings.baseurls.login_base + '/tpauth/rest/authenticate?source=subscription&source_type=pro' + apphome;
    var proSignUpPage = "/id/94";
    var signUpPage = proSignUpPage;
    var registration_source = "pro";
    var isMobile = (function () {
        var mobile = false, evt;
        try {
            evt = document.createEvent('TouchEvent');
            mobile = true;
        } catch (e) {
        }
        return mobile;
    }());
    var isIPad = (function () {
        return navigator.userAgent.match(/iPad/i) != null;
    }());
    var isFireFox = (function () {
        return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    }());
    var proInterstitialCarousel = null;
    var proAccountNotification = null;
    var isReady = false;

    function setRegSource() {
        registration_source += (CNBC_Premium.globals.templateName == "story") ? "-article" : "";
        registration_source += (CNBC_Premium.globals.product == "mobile-touch") ? "-mobile" : "";
        registration_source = (CNBC_Utils.urlParam('registration_source')) ? CNBC_Utils.urlParam('registration_source') : registration_source;
    }

    function updateMobileWebLinks() {
        var signUpLink = $('#mobile-signup').find('a');
        var signInLink = $('#mobile-signin').find('a');
        if (signUpLink.length == 0) {
            return false;
        }
        ;
        var newSignUpUrl = CNBC_Settings.baseurls.pub_base_protocol_agnostic + signUpPage + '?' + signUpLink.attr('href').split('?')[1];
        var newSignInUrl = CNBC_Settings.baseurls.pub_base_protocol_agnostic + signUpPage + '?' + signInLink.attr('href').split('?')[1];
        signUpLink.attr('href', typeof SURF !== 'undefined' ? newSignUpUrl : CNBC_Settings.baseurls.pub_base_protocol_agnostic + CNBC_Surf.outageRedirection);
        signInLink.attr('href', typeof SURF !== 'undefined' ? newSignInUrl : CNBC_Settings.baseurls.pub_base_protocol_agnostic + CNBC_Surf.outageRedirection);
    };
    function updatePremiumStatus(bedrockAccessTokenValue) {
        if (bedrockAccessTokenValue != '') {
            if (!CNBC_Utils.readCookie(isProCookieName)) {
                var bedrockAccessCookieTTL = 8 / 60;
                SURF.getUserInfo({
                    'success': function () {
                        CNBC_Utils.deleteAllProCookies();
                        CNBC_Utils.createCookie(isProCookieName, 'true', isProCookieTTL, false);
                        window.location.reload();
                    }
                });
            }
        }
        else {
            if (CNBC_Utils.readCookie(isProCookieName)) {
                SURF.getUserInfo({
                    'success': function () {
                        CNBC_Utils.deleteAllProCookies();
                        window.location.reload();
                    }
                });
            }
        }
    };
    function downloadArticlePremiumContent(p) {
        function displayErrorMsg() {
            var errorMsg = '<div id="premiumContentErrorContainer">' + '<img src="' + CNBC_Settings.baseurls.sc_base_protocol_agnostic + '/applications/cnbc.com/staticcontent/img/pro/cnbc-pro-logo-lockup.png">' + '<div>Oops! There was an error retrieving this article\'s premium content.</div>' + '<div>Please try refreshing this page or call customer service if the problem persists.</div>' + '</div>';
            var containerSelector = '#' + CNBC_Premium.globals.containerSelector;
            var container = $(containerSelector);
            container.html(errorMsg).css('font-weight', 'bold').css('font-size', '20px').css('background-image', 'none');
            if (isMobile) {
                container.width(230).css('padding', '40px').css('margin', (window.innerWidth - 310) / 2 + 'px');
                $(containerSelector + ' img').width(230).css('margin-bottom', '10px');
                $(containerSelector + ' div').addClass('mobile-error-container');
                $('.group-container .group').css('margin-bottom', '-80px').append("<div id='error-msg-gradient'></div>");
            }
        }

        var isPreview = '';
        if (typeof CNBC_Settings.is_preview != 'undefined') {
            isPreview = "&is_preview=true";
        }
        var url = CNBC_Settings.baseurls.cnbc_base_secure + '/id/' + CNBC_Settings.pageNodeId + '/services/premium/article/data?token=' + p.tokenValue + isPreview
        $.get(url, function (data) {
            var failureScenarioFlag = localStorage.getItem('1260');
            if (failureScenarioFlag) {
                displayErrorMsg();
                if (p.fail) {
                    p.fail(arguments);
                }
                return false;
            }
            if (p.success) {
                p.success(data);
            }
        }).fail(function () {
            displayErrorMsg();
            if (p.fail) {
                p.fail(arguments);
            }
        });
    };
    function showPremiumTutorialVideo() {
        var isDesktop = $('body').hasClass('web');
        var tutorialPopup = new CNBC_Popup2();
        var htmlMarkup = (isDesktop) ? '<iframe id="video-tutorial-ifr-container" frameborder="0"  scrolling="no" style="overflow:hidden;height: 570px; width: 100%;border: 0;" src="' + CNBC_Settings.baseurls.pub_base_protocol_agnostic + '/application/tutorialvideo/desktop"></iframe>' : '<iframe id="video-tutorial-ifr-container" frameborder="0"  scrolling="no" src="' + CNBC_Settings.baseurls.pub_base_protocol_agnostic + '/application/tutorialvideo/mobile"></iframe>';
        var tutorialConfig = {
            closeOnBackgroudClick: false,
            popupId: 'tutorialLightbox',
            popupContent: htmlMarkup,
            initCallback: null,
            autoAlignPopup: true,
            minWidth: (isDesktop) ? '650px' : '350',
            minHeight: (isDesktop) ? '590px' : '250',
            autoHide: true,
            afterCloseCallback: function () {
                $('#tutorialLightbox').remove();
                if (CNBC_Premium.isPremium || CNBC_Utils.isHomePage()) {
                    window.location.reload();
                }
                ;
            }
        };
        if (window.$pdk) {
            $pdk.controller.pause(true);
        }
        ;
        tutorialPopup.init(tutorialConfig);
        tutorialPopup.show();
        $('#tutorialLightbox').height($('body').height());
        SURF.update({'uid': SURF.globals.session.uid, signature: '', 'user_data': {'pro_first_time_visited': 'true'}});
    };
    function renderPremiumArticleContent(data) {
        var containerSelector = '#' + CNBC_Premium.globals.containerSelector;
        var premiumContainer = $(containerSelector)
        premiumContainer.html(data);
        premiumContainer.css('background-image', 'none');
        if (premiumContainer.find('iframe.player').length) {
            CNBC_VideoStates.init();
        }
        var carouselAssets = premiumContainer.find('div.carousel_asset');
        if (carouselAssets.length > 0) {
            var carouselInit = [];
            var params;
            for (var i = 0; i < carouselAssets.length; i++) {
                carouselInit[i] = new CNBC_Carousel3();
                params = {
                    itemsPerPage: 1,
                    itemsPerTransition: 1,
                    speed: 500,
                    swipable: true,
                    nextPrevLinks: true,
                    container: carouselAssets[i],
                    currentNodeClass: 'currentNode',
                    lazyLoad: false,
                    lazyLoadNext: false,
                    responsive: isMobile
                };
                if (isMobile) {
                    params.initCallback = function () {
                        carouselAssets[i].css('height', 'auto');
                    };
                }
                carouselInit[i].init(params);
                if ((CNBC_Premium.globals.product === 'web') || (CNBC_Premium.globals.product === 'mobile-touch')) {
                    if (carouselAssets[i].leftA != undefined) {
                        carouselAssets[i].leftA.on('click', function () {
                            s.linkTrackVars = 'eVar48,prop48';
                            s.eVar48 = 'articlecarousel:inline:left:' + CNBC_Settings.pageNodeId;
                            s.prop48 = 'articlecarousel:inline:left:' + CNBC_Settings.pageNodeId;
                            s.tl(true, 'o', 'Article Carousel Module', null, 'navigate');
                            if (!s.manageVars) {
                                CNBC_Omniture.sManageVars();
                            }
                            s.manageVars('clearVars');
                        });
                    }
                    if (carouselAssets[i].rightA != undefined) {
                        carouselAssets[i].rightA.on('click', function () {
                            s.linkTrackVars = 'eVar48,prop48';
                            s.eVar48 = 'articlecarousel:inline:right:' + CNBC_Settings.pageNodeId;
                            s.prop48 = 'articlecarousel:inline:right:' + CNBC_Settings.pageNodeId;
                            s.tl(true, 'o', 'Article Carousel Module', null, 'navigate');
                            if (!s.manageVars) {
                                CNBC_Omniture.sManageVars();
                            }
                            s.manageVars('clearVars');
                        });
                    }
                }
            }
        }
        displayDiscuss();
        showHiddenAds();
        $('body.premium').removeClass('premium');
    };
    function getTemplateId() {
        if (CNBC_Premium.globals.templateOverride) {
            return CNBC_Premium.globals.templateOverride;
        }
        var freePreviewTemplate = typeof CNBC_Settings.tags != 'undefined' && CNBC_Settings.tags.indexOf('Pro Free Preview') != -1 ? 'pro_free_preview' : '';
        var userType = CNBC_Utils.isSignedIn() ? 'loggedin' : 'new';
        var product = CNBC_Premium.globals.product;
        var templates = CNBC_Premium.globals.config.settings[product].templates;
        var templateName = freePreviewTemplate != '' ? freePreviewTemplate : CNBC_Premium.globals.templateName;
        var template = templates[templateName];
        if (template) {
            return template[userType];
        }
    };
    function displayPaywall(completeCallback, customEventCallback) {
        CNBC_TinyPass.showOffer({
            complete: completeCallback,
            customEvent: customEventCallback,
            rid: CNBC_Premium.globals.config.rid,
            offerId: CNBC_Premium.globals.config.offerid,
            templateId: getTemplateId(),
            displayMode: "inline",
            containerSelector: '#' + CNBC_Premium.globals.containerSelector
        });
        $('body').addClass('premium');
        displayDiscuss();
    };
    function displayDiscuss() {
        if (CNBC_Utils.isPremium() && CNBC_Utils.isSignedIn()) {
            $('.disqus_container').removeClass('hide');
        }
        ;
        if (CNBC_Premium.globals.product === 'web') {
            if (CNBC_Utils.isPremium()) {
                var commentsCountObj = new CNBC_Comments();
                commentsCountObj.counts(CNBC_Settings.commentsCountParam);
            }
            ;
        }
        ;
    };
    function showHiddenAds() {
        $('.subsection.related.hide').removeClass('hide');
        if (window.CNBC_Settings.initHighligths) {
            CNBC_Settings.initHighligths();
        }
        ;
        if (window.CNBC_Settings.initHighligthsOmniture) {
            CNBC_Settings.initHighligthsOmniture();
        }
        ;
    };
    function fetchVideoToken(timestamp, p) {
        function finalizeVideoLogic(shouldUpdateBedrockVideoTokenCookie) {
            updatePremiumStatus(bedrockVideoTokenValue);
            if (shouldUpdateBedrockVideoTokenCookie)
                CNBC_Utils.createCookie(bedrockVideoCookieName, bedrockVideoTokenValue, timestamp, false);
            if (p && p.callback) {
                p.callback(bedrockVideoTokenValue);
            }
        }

        bedrockVideoTokenValue = CNBC_Utils.readData(bedrockVideoCookieName);
        if (!bedrockVideoTokenValue || bedrockVideoTokenValue == "null") {
            CNBC_Bedrock.syncApi.payloadCall({
                pid: 14,
                url: CNBC_Settings.baseurls.register_base.split(":")[1] + '/auth/api/',
                tokenfor: 'LIVESTREAM',
                success: function (data) {
                    if (data) {
                        bedrockVideoTokenValue = data.payload_token;
                        finalizeVideoLogic(true);
                        return;
                    }
                },
                error: function () {
                    finalizeVideoLogic(true);
                    return;
                }
            });
            return;
        }
        finalizeVideoLogic(false);
    };
    function fetchAccessToken(p) {
        var bedrockAccessTokenValue;

        function finalizeLogic(shouldUpdateBedrockCookie) {
            updatePremiumStatus(bedrockAccessTokenValue);
            bedrockAccessTokenValue = bedrockAccessTokenValue || '';
            if (shouldUpdateBedrockCookie)
                CNBC_Utils.createCookie(bedrockAccessCookieName, bedrockAccessTokenValue, bedrockAccessCookieTTL, false);
            if (p && p.callback) {
                p.callback(bedrockAccessTokenValue);
            }
        }

        var isLoggedIn = CNBC_Utils.isSignedIn();
        if (isLoggedIn) {
            bedrockAccessTokenValue = CNBC_Utils.readData(bedrockAccessCookieName);
            if ($('#disqus_visibility_toggle').length) {
                CNBC_Comments.hideComments();
            }
            if (!bedrockAccessTokenValue) {
                CNBC_Bedrock.syncApi.payloadCall({
                    pid: 14,
                    url: CNBC_Settings.baseurls.register_base.split(":")[1] + '/auth/api/',
                    tokenfor: 'CMS',
                    success: function (data) {
                        if (data) {
                            bedrockAccessTokenValue = data.payload_token;
                            finalizeLogic(true);
                            return;
                        }
                    },
                    error: function () {
                        finalizeLogic(true);
                        return;
                    }
                });
                return;
            }
        } else {
            bedrockAccessTokenValue = "";
        }
        finalizeLogic(false);
    };
    function setSignUpPageUrl() {
        if (CNBC_Premium.globals.config.signUpPage) {
            return CNBC_Premium.globals.config.signUpPage;
        } else {
            return signUpPage;
        }
    }

    function init() {
        this.isReady = true;
        CNBC_Utils.deleteData('X-UA-Rewrite-Override');
        if (!this.isReady)this.isReady = true;
        setTimeout(function () {
            var count = 0, checkProInterstitial = function () {
                setTimeout(function () {
                    count++;
                    autoRunInitProTour(count);
                }, 200)
            }, autoRunInitProTour = function (c) {
                if (!proInterstitialCarousel) {
                    initProTour();
                    checkProInterstitial();
                } else {
                }
            };
            checkProInterstitial();
        }, 500);
        if (CNBC_Utils.isUserPremium() && !isMobile)showUserAccountNotification();
        if (!CNBC_TinyPass.tpExists()) {
            return false;
        }
        setRegSource();
        function paywallCustomEventCallback(event) {
            var url, isUserLoggedIn = CNBC_Utils.isSignedIn();
            if (CNBC_Premium.globals.product === 'web') {
                switch (event.eventName) {
                    case'learn-more':
                        window.location.href = '/application/pro?__source=pro|in-article|learn-more';
                        break;
                    case'sign-up-now':
                        if (isUserLoggedIn) {
                            displayCheckout({});
                        } else {
                            CNBC_Surf_Mediator.init({
                                'source': registration_source,
                                'flow': 'pro',
                                'surfConfigOverlay': 'pro'
                            });
                            if (typeof SURF !== 'undefined') {
                                window.parent.$.proxy(window.parent.CNBC_Surf.Signin_Ui.startUIFlow, window.parent.CNBC_Surf.Signin_Ui, 'register', 'pro')();
                            } else {
                                window.location.href = CNBC_Settings.baseurls.pub_base_protocol_agnostic + CNBC_Surf.outageRedirection;
                            }
                        }
                        ;
                        if (window.CNBC_Omniture) {
                            CNBC_Omniture.signUpBtnClickTracking({
                                'eVar48': "registration:sign up:start:pro:in article",
                                'linkTrackVars': "eVar48,prop48,events",
                                'linkTrackEvents': 'event11',
                                'events': 'event11'
                            });
                        }
                        ;
                        _gaq.push(['_trackEvent', 'button', 'click', 'get it now']);
                        break;
                    case'already-a-member':
                        if (isUserLoggedIn) {
                            displayCheckout({});
                        } else {
                            CNBC_Surf_Mediator.init({
                                'source': registration_source,
                                'flow': 'pro',
                                'surfConfigOverlay': 'pro'
                            });
                            if (typeof SURF !== 'undefined') {
                                window.parent.$.proxy(window.parent.CNBC_Surf.Signin_Ui.startUIFlow, window.parent.CNBC_Surf.Signin_Ui, 'signin', 'pro')();
                            } else {
                                window.location.href = CNBC_Settings.baseurls.pub_base_protocol_agnostic + CNBC_Surf.outageRedirection;
                            }
                        }
                        ;
                        if (window.CNBC_Omniture) {
                            CNBC_Omniture.signUpBtnClickTracking({
                                'eVar48': "registration:log in:start:pro:in article",
                                'linkTrackVars': "eVar48,prop48,events"
                            });
                        }
                        ;
                        break;
                }
            } else {
                switch (event.eventName) {
                    case"sign-up-now":
                        CNBC_Omniture.signUpBtnClickTracking({
                            'eVar48': "registration:sign up:start:pro:in article",
                            'linkTrackVars': "eVar48,prop48,events",
                            'linkTrackEvents': 'event11',
                            'events': 'event11'
                        });
                        if (typeof SURF !== 'undefined') {
                            url = window.parent.CNBC_Settings.baseurls.pub_base_protocol_agnostic + setSignUpPageUrl() + '/?registration_source=' + registration_source + '&action=';
                            url += isUserLoggedIn ? 'signin' : 'signup';
                        } else {
                            url = CNBC_Settings.baseurls.pub_base_protocol_agnostic + CNBC_Surf.outageRedirection;
                        }
                        window.parent.location = url;
                        _gaq.push(['_trackEvent', 'button', 'click', 'get it now']);
                        break;
                    case'already-a-member':
                        CNBC_Omniture.signUpBtnClickTracking({
                            'eVar48': "registration:log in:start:pro:in article",
                            'linkTrackVars': "eVar48,prop48,events"
                        });
                        if (isUserLoggedIn) {
                            displayCheckout({});
                        } else {
                            if (typeof SURF !== 'undefined') {
                                url = window.parent.CNBC_Settings.baseurls.pub_base_protocol_agnostic + setSignUpPageUrl() + '/?registration_source=' + registration_source + '&action=signin';
                            } else {
                                url = CNBC_Settings.baseurls.pub_base_protocol_agnostic + CNBC_Surf.outageRedirection;
                            }
                            window.parent.location = url;
                        }
                        ;
                        break;
                    case'learn-more':
                        window.location.href = '/application/pro?__source=pro|in-article|learn-more';
                        break;
                }
                ;
            }
            ;
        };
        CNBC_TinyPass.fetchTinyPassUserToken(function () {
            CNBC_TinyPass.init(CNBC_Premium.globals, function () {
                if (window.CNBC_Premium && window.CNBC_Premium.isPremium) {
                    fetchAccessToken({
                        callback: function (bedrockAccessTokenValue) {
                            if (bedrockAccessTokenValue) {
                                downloadArticlePremiumContent({
                                    tokenValue: bedrockAccessTokenValue,
                                    success: renderPremiumArticleContent
                                });
                            } else {
                                displayPaywall(null, paywallCustomEventCallback);
                            }
                        }
                    });
                }
                ;
            });
        });
    };
    function displayCheckout(p) {
        var checkoutCompleted = false;
        var closeEventHandled = false;
        var bedrockSyncErrorMsg = null;
        if (!CNBC_TinyPass.tpExists()) {
            return false;
        }
        function displayBedrockSyncErrorMsg() {
            if (!bedrockSyncErrorMsg) {
                bedrockSyncErrorMsg = new CNBC_Popup2();
                var errorConfig = {
                    closeOnBackgroudClick: false,
                    popupId: 'bedrockSyncErrorMsg',
                    popupContent: '<div style="clear:both;"></div>'
                    + '<div class="popup-body">'
                    + '<div class="header">Oops!</div>'
                    + '<div class="body">Please call customer service if you encounter any problems accessing Premium content</div>'
                    + '</div>'
                    + '<hr style="width:85%;margin-top: 20px;margin-bottom: 20px;border: 0;border-top: 1px solid #eee;">'
                    + '<div class="popup-footer">'
                    + '<button class="button cancel">OK</button>'
                    + '</div>',
                    initCallback: null,
                    autoAlignPopup: true,
                    autoHide: true,
                    minHeight: '200px',
                    minWidth: (CNBC_Premium.globals.product === 'web') ? '400px' : '25%'
                };
                bedrockSyncErrorMsg.init(errorConfig);
                $('#bedrockSyncErrorMsg  .cancel').on('click', function () {
                    bedrockSyncErrorMsg.hide();
                });
            }
            ;
            bedrockSyncErrorMsg.show();
        }

        function displayCheckout_CallOmniture() {
            if (!s.manageVars) {
                CNBC_Omniture.sManageVars();
            }
            s.manageVars('clearVars');
            s.pageName = "Registration|Pro|Payment Info";
            s.prop1 = "franchise";
            s.prop10 = "Registration";
            s.prop16 = "registration";
            s.prop31 = "Registration Pages";
            s.prop32 = "Pro";
            s.prop37 = "franchise";
            s.t();
        }

        function checkoutConfirmation_CallOmniture() {
            if (!s.manageVars) {
                CNBC_Omniture.sManageVars();
            }
            s.manageVars('clearVars');
            s.pageName = "Registration|Pro|Payment Confirmation";
            s.prop1 = "franchise";
            s.prop10 = "Registration";
            s.prop16 = "registration";
            s.prop31 = "Registration Pages";
            s.prop32 = "Pro";
            s.prop37 = "franchise";
            s.t();
        }

        CNBC_TinyPass.fetchTinyPassUserToken(function () {
            CNBC_TinyPass.init(CNBC_Premium.globals, function () {
                displayCheckout_CallOmniture();
                _gaq.push(['_trackEvent', 'button', 'click', 'next']);
                CNBC_TinyPass.startCheckout({
                    offerId: CNBC_Premium.globals.config.offerid, templateId: getTemplateId(), complete: function (e) {
                        $('.tp-iframe-wrapper iframe').addClass("thank-you-interstitial");
                        $('.tp-close.tp-active').addClass("thank-you-interstitial");
                        if (isMobile && window.innerWidth <= 450) {
                            $('.tp-iframe-wrapper').css('margin', '0px auto');
                            $('.tp-iframe-wrapper iframe').height(window.innerHeight).css('position', 'relative');
                        }
                        $('.tp-modal .tp-close').on('click', function () {
                            _gaq.push(['_trackEvent', 'button', 'click', 'close']);
                        })
                        checkoutCompleted = true;
                        CNBC_Utils.createProCookie();
                        checkoutConfirmation_CallOmniture();
                        var syncApiUrl = CNBC_Settings.baseurls.register_base.split(":")[1] + '/auth/api/';
                        var isPremiumPage = CNBC_Premium.isPremium;
                        var failureScenarioFlag = localStorage.getItem('1258');
                        if (failureScenarioFlag) {
                            syncApiUrl = 'http://wjfkdsj.hdkfjhkjdshkfjdkjsdkfjshd.com/';
                        }
                        CNBC_Bedrock.syncApi.syncCall({
                            uuid: SURF.globals.user._provider.cnbc,
                            pid: 152,
                            action: 'subscription',
                            dataType: 'json',
                            url: syncApiUrl,
                            success: function (data, text, status) {
                            },
                            error: function (data, text, status) {
                                displayBedrockSyncErrorMsg();
                            }
                        });
                        if (p.complete) {
                            p.complete();
                        }
                        _gaq.push(['_trackEvent', 'button', 'click', 'subscribe']);
                    }, close: function (e) {
                        var isPremiumPage = CNBC_Premium.isPremium;
                        if (!closeEventHandled) {
                            closeEventHandled = true;
                            if (checkoutCompleted) {
                                if (isPremiumPage) {
                                    window.location.reload();
                                } else {
                                    var docref = CNBC_Utils.urlParam('service') ? window.decodeURIComponent(CNBC_Utils.urlParam('service')) : CNBC_Settings.baseurls.pub_base_protocol_agnostic;
                                    window.location.href = docref;
                                }
                            }
                            if (p.close) {
                                p.close();
                            }
                        }
                    }
                });
            });
        });
    };
    function initMarketingPage() {
        CNBC_Utils.logElapsedTime("init Marketing page");
        if (!CNBC_TinyPass.tpExists())return false;
        orientChangeHandler();
        function orientChangeHandler() {
            $(window).on("orientationchange", function (event) {
                $("div#offer").css("width", "100%");
                $("div#offer").children("iframe").css("width", "100%");
            });
        }

        function initMarketingPage_SurfReady() {
            CNBC_Utils.logElapsedTime("init Marketing page Surf Ready");
            CNBC_TinyPass.fetchTinyPassUserToken(function () {
                CNBC_TinyPass.init(CNBC_Premium.globals, function () {
                    var isLoggedIn = CNBC_Utils.isSignedIn();
                    if (isLoggedIn) {
                        var isUserPremium = CNBC_Utils.isUserPremium();
                        if (isUserPremium) {
                            var docref = CNBC_Utils.urlParam('service') ? window.decodeURIComponent(CNBC_Utils.urlParam('service')) : CNBC_Settings.baseurls.pub_base_protocol_agnostic;
                            window.location.href = docref;
                        }
                    }
                    var params = {};
                    params.complete = null;
                    params.customEvent = customEventCallback;
                    params.rid = CNBC_Premium.globals.config.rid;
                    params.offerId = CNBC_Premium.globals.config.offerid;
                    params.templateId = getTemplateId();
                    params.displayMode = "inline";
                    params.containerSelector = "#offer";
                    CNBC_TinyPass.showOffer(params);
                });
                CNBC_Utils.logElapsedTime("Tinypass init complete");
            });
        }

        function customEventCallback(event) {
            function showSignUpWindow() {
                if (typeof SURF !== 'undefined') {
                    var isUserLoggedIn = CNBC_Utils.isSignedIn();
                    if (isUserLoggedIn) {
                        displayCheckout({});
                    } else {
                        if (CNBC_Premium.globals.product === 'web') {
                            if (event.eventName == 'already-a-member') {
                                window.parent.$.proxy(window.parent.CNBC_Surf.Signin_Ui.startUIFlow, window.parent.CNBC_Surf.Signin_Ui, 'signin', 'pro')();
                            } else {
                                window.parent.$.proxy(window.parent.CNBC_Surf.Signin_Ui.startUIFlow, window.parent.CNBC_Surf.Signin_Ui, 'register', 'pro')();
                            }
                            ;
                        } else {
                            window.parent.location.href = window.parent.CNBC_Settings.baseurls.pub_base_protocol_agnostic + setSignUpPageUrl() + '/?registration_source=' + registration_source + '&action=' + (event.eventName == "already-a-member" ? 'signin' : 'signup');
                        }
                        ;
                    }
                } else {
                    window.location.href = CNBC_Settings.baseurls.pub_base_protocol_agnostic + CNBC_Surf.outageRedirection;
                }
            };
            function signUpBtnHandler(event) {
                if (event.eventName == 'sign-up-now-top' || event.eventName == 'already-a-member-top') {
                    if (window.CNBC_Omniture) {
                        CNBC_Omniture.signUpBtnClickTracking({
                            'eVar48': "registration:sign up:start:pro:marketing page top",
                            'linkTrackVars': "eVar48,prop48,events",
                            'linkTrackEvents': 'event11',
                            'events': 'event11'
                        })
                    }
                    ;
                }
                ;
                if (event.eventName == 'sign-up-now-bottom' || event.eventName == 'already-a-member-bottom') {
                    if (window.CNBC_Omniture) {
                        CNBC_Omniture.signUpBtnClickTracking({
                            'eVar48': "registration:sign up:start:pro:marketing page bottom",
                            'linkTrackVars': "eVar48,prop48,events",
                            'linkTrackEvents': 'event11',
                            'events': 'event11'
                        })
                    }
                    ;
                }
                ;
                _gaq.push(['_trackEvent', 'button', 'click', 'subscribe now']);
            };
            signUpBtnHandler(event);
            showSignUpWindow(event);
        };
        if (typeof SURF !== 'undefined') {
            SURF.event.on(SURF.events.READY, initMarketingPage_SurfReady);
        } else {
            initMarketingPage_SurfReady();
        }
        if (CNBC_Premium.globals.product === 'web') {
            CNBC_Surf.Signin_Ui.init();
            if (typeof SURF !== 'undefined')CNBC_Surf.Signin_Ui.startUIFlow('load', 'pro');
            CNBC_Surf_Mediator.init({'source': registration_source, 'flow': 'pro', 'surfConfigOverlay': 'pro'});
        } else {
            updateMobileWebLinks();
            CNBC_Surf_Mediator.init({
                'source': registration_source,
                'flow': 'pro-mobile',
                'surfConfigOverlay': 'mobile_pro'
            });
            if (typeof SURF !== 'undefined')CNBC_Surf_Mediator.surfInit();
        }
        ;
    };
    function initMobileAuth() {
        if (!CNBC_TinyPass.tpExists()) {
            return false;
        }
        ;
        setRegSource();
        updateMobileWebLinks();
        CNBC_TinyPass.fetchTinyPassUserToken(function () {
            CNBC_TinyPass.init(CNBC_Premium.globals, function () {
                if (CNBC_Utils.isSignedIn()) {
                    var isUserPremium = CNBC_Utils.isUserPremium();
                    if (isUserPremium) {
                        proHomePage = (CNBC_Utils.isUserPremium() && CNBC_Utils.isLegacyPro()) ? proHomePage : CNBC_Settings.baseurls.pub_base_protocol_agnostic;
                        window.location.href = proHomePage;
                    } else {
                        displayCheckout({});
                    }
                } else {
                    CNBC_Surf.Signin_Ui.init();
                    if (CNBC_Surf_Mediator.checkSearchParameter('action') == 'signup') {
                        CNBC_Surf.Signin_Ui.startUIFlow('register');
                    } else {
                        CNBC_Surf.Signin_Ui.startUIFlow('signin');
                    }
                    ;
                    CNBC_Surf_Mediator.init({
                        'mobile': true,
                        'source': registration_source,
                        'flow': 'pro-mobile',
                        'surfConfigOverlay': 'mobile_pro'
                    });
                }
                ;
            });
        });
    };
    function initAccountBilling() {
        if (!CNBC_TinyPass.tpExists()) {
            return false;
        }
        CNBC_TinyPass.fetchTinyPassUserToken(function () {
            var failureScenarioFlag = localStorage.getItem('1257');
            if (failureScenarioFlag) {
                tp.userRef = '';
            }
            if (tp.userRef) {
                CNBC_TinyPass.init(CNBC_Premium.globals, function () {
                    if (!$("#tp-my-account").length) {
                        return;
                    }
                    tp.api.callApi("/access/check", {rid: "PRO"}, function (response) {
                        if (!response.access.granted) {
                        }
                        tp.myaccount.show({display_mode: "inline", containerSelector: "#tp-my-account"});
                    });
                });
            } else {
                var errorMsg = '<div class="error-msg">The Account Management feature is not available at this time.<br>' + 'Please contact Customer Care at (877) 280-4548 to retrieve or <br>' + 'update your account settings or try again later.</div>';
                $('#pro-area').html(errorMsg);
            }
        });
    }

    function initProTour(tag) {
        if (tag === 'TEST' && proInterstitialCarousel) {
            $('#pro-tour').trigger('click');
            return 'PRO tour interstitial called successfully';
        }
        var interstitial = "<div id='pro-tour-body'></div>", testBlock = "<div id='pro-tour-blank'></div>", popupCloseButton = "<div class='cnbc-popup-close-btn'>×</div>", popupLightBox = "<div class='cnbc-popup-lightbox'>" +
            popupCloseButton +
            testBlock +
            interstitial + "</div>", popupBackground = "<div class='cnbc-popup-background' id='pro-take-tour'>" +
            popupLightBox + "</div>", logo_url = 'cnbc-pro-logo-lockup-large', contentId = '99', sliding = 800, duration = 600, container = 'pro-tour-container', tutorialCompleted = false, numOfSlides = 6, staticContentURL = 'https:' + CNBC_Settings.baseurls.sc_base_protocol_agnostic + '/applications/cnbc.com/staticcontent/img/tinyPass/', popupEventConfig = {
            interstitial_page_0: {
                eventConfig: function () {
                    $('#pro-tour-left-arrow').css('visibility', 'hidden');
                    $('#pro-tour-right-arrow').css('visibility', 'visible');
                }
            }, interstitial_page_1: {
                eventConfig: function () {
                    $('#pro-tour-left-arrow').css('visibility', 'visible');
                    $('#pro-tour-right-arrow').css('visibility', 'visible');
                }
            }, interstitial_page_5: {
                eventConfig: function () {
                    $('#pro-tour-left-arrow').css('visibility', 'visible');
                    $('#pro-tour-right-arrow').css('visibility', 'hidden');
                    if (!tutorialCompleted) {
                        takeTour_CallOmniture('Complete');
                        tutorialCompleted = true;
                    }
                }
            }, interstitial_default: {
                eventConfig: function () {
                    $('#pro-tour-left-arrow').css('visibility', 'visible');
                    $('#pro-tour-right-arrow').css('visibility', 'visible');
                }
            }
        }, carouselConfig = {
            itemsPerPage: 1,
            itemsPerTransition: 1,
            noOfItems: 6,
            speed: 1000,
            swipable: true,
            nextPrevLinks: true,
            container: 'pro-tour-image-container',
            leftArrow: "#pro-tour-left-arrow",
            rightArrow: "#pro-tour-right-arrow",
            anchorList: "pro-tour-anchors",
            anchorConfig: {"active": {background: "#2077b6"}, "deactive": {background: "#ccd6d8"}},
            callback: function (index) {
                configInterstitialEvent(popupEventConfig, index);
            }
        };
        proInterstitialCarousel = new CNBC_Carousel3();
        function configInterstitialEvent(pageConfig, index) {
            if (pageConfig['interstitial_page_' + index]) {
                var eventConfig = pageConfig['interstitial_page_' + index].eventConfig;
            } else {
                var eventConfig = pageConfig.interstitial_default.eventConfig;
            }
            if (eventConfig)eventConfig();
        }

        function takeTour_CallOmniture(state) {
            var pageName = "Registration|Pro|Registration Tutorial " + state;
            CNBC_Omniture.genericClickTracking({
                'pageName': pageName,
                'props': {
                    '1': "franchise",
                    '10': "Registration",
                    '16': "registration",
                    '31': "Registration Pages",
                    '32': "Pro",
                    '37': "Franchise"
                }
            });
        }

        $('body').append(popupBackground);
        $('#pro-tour').on('click', function (e) {
            e.preventDefault();
            takeTour_CallOmniture('Start');
            $('#pro-take-tour').css('display', 'block');
            $('#pro-take-tour .cnbc-popup-lightbox').animate({top: "+=" + sliding}, duration, 'swing', function () {
            });
        })
        $('#pro-take-tour .cnbc-popup-close-btn').on('click', function () {
            tutorialCompleted = false;
            $('#pro-take-tour .cnbc-popup-lightbox').animate({top: "-=" + sliding}, duration, 'swing', function () {
                $('#pro-take-tour').css('display', 'none');
            });
        })
        $('#pro-tour-body').load(CNBC_Settings.baseurls.cnbc_base_secure + '/id/' + contentId, function () {
            if (isMobile && window.innerWidth <= 850) {
                $('#' + container).addClass('.pro-tour-mobile');
                $('#pro-tour-image-list-container li').each(function (i, el) {
                    $(el).css('width', window.innerWidth * 0.9 + 'px');
                    if (i)$(el).find('img').attr('src', staticContentURL + 'welcome-' + i + '-mobile.png');
                });
                $('#pro-tour-image-list-container').css('width', window.innerWidth * 0.9 * numOfSlides + 'px');
            } else {
                $('#' + container).addClass('.pro-tour-web');
                $('#pro-tour-image-list-container li img.slide-image').each(function (i, el) {
                    $(el).width(530);
                    $(el).attr('src', staticContentURL + 'welcome-' + (i + 1) + '.jpg');
                })
            }
            if (isFireFox) {
                $('#pro-take-tour .cnbc-popup-lightbox').css('min-height', 680);
                $('#pro-tour-container .pro-tour-image-mask-wrapper').css('top', '-350px');
                $('#pro-tour-container .pro-tour-close-container').css('top', '-100px');
                $('#pro-tour-section-container').css('top', '0px');
            }
            $('#pro-tour-left-arrow img').attr('src', staticContentURL + 'left-arrow-dark.png').hover(function () {
                $(this).attr('src', staticContentURL + 'left-arrow-light.png')
            }, function () {
                $(this).attr('src', staticContentURL + 'left-arrow-dark.png');
            });
            $('#pro-tour-right-arrow img').attr('src', staticContentURL + 'right-arrow-dark.png').hover(function () {
                $(this).attr('src', staticContentURL + 'right-arrow-light.png');
            }, function () {
                $(this).attr('src', staticContentURL + 'right-arrow-dark.png');
            });
            $('.pro-tour-section.pro-tour-logo img').attr('src', staticContentURL + logo_url + '.png');
            $('#pro-tour-close-button').attr('href', CNBC_Settings.baseurls.cnbc_base_secure + '/application/pro/?__source=pro|top-nav|tour&tpcc=NavigationTour');
            configInterstitialEvent(popupEventConfig, 0);
            proInterstitialCarousel.init(carouselConfig);
        });
        if (window.location.hash == '#pro-tour') {
            setTimeout(function () {
                $('#pro-tour').trigger('click');
            }, 500);
            return 'PRO tour interstitial called successfully';
        }
    }

    function showUserAccountNotification(container, tag) {
        return false;
        if (tag == 'testing') {
            popupNotification();
            return false;
        }
        function popupNotification(config) {
            if (!config) {
                config = {
                    'test': {
                        notify: 'sticky',
                        message: {
                            title: 'Testing Notification',
                            text: 'This notification is for testing purpose only.'
                        },
                        additional: {expires: false}
                    }
                }
            }
            if (!proAccountNotification) {
                proAccountNotification = new CNBC_Notification();
            }
            proAccountNotification.addNotification({container: container, content: config[container.split('-').pop()]});
        }

        CNBC_Bedrock.userApi.userStatsCall({
            test: true,
            data: {uid: SURF.globals.user._provider.cnbc},
            success: function (response) {
                var user = response.user || {}, username = user.first_name ? user.first_name + ' ' + user.last_name : '', notifyConfig = {
                    'test': {
                        notify: 'sticky',
                        message: {title: 'Hello, ' + username, text: 'This notification is for testing purpose only.'},
                        additional: {expires: false}
                    }
                };
                popupNotification(notifyConfig);
            },
            error: function () {
            }
        })
    }

    function initPortfolioWidget(widget, config, state) {
        var container = $('#portfolio-widget'), tabs = container.filter('.portfolio-tab'), types = config.type ? config.type.split(',') : ['squawkbox', 'fastmoney'], sources = ['api', 'db'], numOfCards = config.numOfCards || 3, refresh = config.refresh || 60000, promise = widget.request(state, 4, config.tracking);
        if (widget.isReady) {
            for (var t in types) {
                for (var s in sources) {
                    promise.done(function (msg) {
                        if (msg === 'ready') {
                            promise.sortData(types, 'pct').inject(types, container);
                            $('.portfolio-overlay', container).css('display', 'none');
                            $('.portfolio-tabs-content', container).css('display', 'block');
                        }
                    }, types[t], sources[s]);
                }
            }
        }
        if (config.refresh > 0) {
            setTimeout(function () {
                promise.setCheckPoint(2);
                for (var t in types) {
                    promise.done(function (msg) {
                        if (msg === 'ready') {
                            promise.sortData(types, 'pct').inject(types, container);
                        }
                    })
                }
            }, config.refresh);
        }
    }

    var result = {
        'init': init,
        'displayCheckout': displayCheckout,
        'initMarketingPage': initMarketingPage,
        'initMobileAuth': initMobileAuth,
        'initAccountBilling': initAccountBilling,
        'fetchAccessToken': fetchAccessToken,
        'fetchVideoToken': fetchVideoToken,
        'showPremiumTutorialVideo': showPremiumTutorialVideo,
        'initProTour': initProTour,
        'updatePremiumStatus': updatePremiumStatus,
        'showUserAccountNotification': showUserAccountNotification,
        'isReady': isReady,
        'initPortfolioWidget': initPortfolioWidget
    };
    return $.extend(result, window.CNBC_Premium);
}();
/* File BEGIN: http://fm.cnbc.com/applications/cnbc.com/staticcontent/scripts/libraries/LazyImageLoader/lazy_image_loader.js?t=1450133677 */
function CNBC_LazyImageLoader($images) {
    this.init($images);
}
CNBC_LazyImageLoader.loadCallback = function (reinit) {
    CNBC_LazyImageLoader._instance.triggerLoader(reinit);
};
(function ($) {
    CNBC_LazyImageLoader.prototype.init = function ($images) {
        function handler() {
            var indices = [];
            $images.each(function (i) {
                if (isElementInViewport(this) && isElementVisible(this)) {
                    $(this).attr('src', $(this).data('img-src'));
                    indices.push(i);
                }
            });
            if (cnbc && cnbc.worker && cnbc.worker.lazyInitKeys) {
                $.each(cnbc.worker.lazyInitKeys, function (i, v) {
                    var thisEl = $('#' + this);
                    if (typeof(cnbc.worker.lazyInits[this]) === 'function' && isElementInViewport(thisEl) && isElementVisible(thisEl)) {
                        cnbc.worker.lazyInits[this]();
                        cnbc.worker.lazyInits[this] = null;
                    }
                });
            }
            $images = $images.not(function (i) {
                return (indices.indexOf(i) != -1);
            });
        }

        var throttledHandler = throttle(handler, 60);
        $(document).on('scroll resize', throttledHandler).trigger('scroll');
        this.triggerLoader = function (reinit) {
            if (reinit) {
                $images = $('img[data-img-src]');
            }
            throttledHandler();
        };
        return this;
    };
    function isElementInViewport(el) {
        if (typeof jQuery === "function" && el instanceof jQuery) {
            el = el[0];
        }
        var rect = el.getBoundingClientRect(), width = rect.right - rect.left, height = rect.bottom - rect.top;
        return (rect.top >= 0 && rect.left >= 0 && (rect.bottom - height) <= (window.innerHeight || document.documentElement.clientHeight) && (rect.right - width) <= (window.innerWidth || document.documentElement.clientWidth));
    }

    function isElementVisible(el) {
        if (!(el instanceof jQuery)) {
            el = $(el);
        }
        return el.is(':visible');
    }

    function throttle(func, wait, options) {
        var context, args, result;
        var timeout = null;
        var previous = 0;
        options || (options = {});
        var later = function () {
            previous = new Date;
            timeout = null;
            result = func.apply(context, args);
        };
        return function () {
            var now = new Date;
            if (!previous && options.leading === false)previous = now;
            var remaining = wait - (now - previous);
            context = this;
            args = arguments;
            if (remaining <= 0) {
                clearTimeout(timeout);
                timeout = null;
                previous = now;
                result = func.apply(context, args);
            } else if (!timeout && options.trailing !== false) {
                timeout = setTimeout(later, remaining);
            }
            return result;
        };
    }

    $(function () {
        CNBC_LazyImageLoader._instance = new CNBC_LazyImageLoader($('img[data-img-src]'));
    });
})(jQuery);
/* File BEGIN: http://fm.cnbc.com/applications/cnbc.com/staticcontent/scripts/libraries/Notification/notification.js?t=1450133677 */
var CNBC_Notification = function () {
    function addNotification(config) {
        var container = $('#' + config.container), content = config.content, type = 'pro-alert-msg-' + content.notify, message = content.message, additional = content.additional, $container;
        if (container.length) {
            $container = container.notify();
            $container.notify("create", type, message, additional);
            return this;
        }
    }

    return {'init': init, 'addNotification': addNotification}
}
/* File BEGIN: http://fm.cnbc.com/applications/cnbc.com/staticcontent/scripts/libraries/CountdownClock/countdownClock.1.js?t=1450133677 */
"use strict";
function CNBC_Countdown(initParameters) {
    this.init(initParameters);
}
CNBC_Countdown.prototype.init = function (initParameters) {
    this.timerSetup = initParameters;
    this.containerDisplay = null;
    this.display = null;
    this.refreshHold = 0;
    this.timeLeft = 0;
    this.correctTimer = 0;
    if (!this.timerSetup.duration) {
        return;
    }
    ;
    this.containerDisplay = document.getElementById(this.timerSetup.containerDisplay);
    this.display = document.getElementById(this.timerSetup.timerDisplay);
    this.showCountdown(this.timerSetup);
}
CNBC_Countdown.prototype.showCountdown = function () {
    var urlP = this.timerSetup.serviceUrl + "?year=" + this.timerSetup.eventYear + "&month=" + this.timerSetup.eventMonth + "&day=" + this.timerSetup.eventDay + "&hour=" + this.timerSetup.eventHour + "&minute=" + this.timerSetup.eventMinute + "&second=" + this.timerSetup.eventSecond;
    var that = this;
    $.ajax({
        'url': urlP, 'dataType': 'jsonp', 'success': function (data) {
            if (!data.time) {
                return;
            } else {
                var diffTime = data.time - that.timerSetup.duration;
                if (diffTime > 0) {
                    that.timeLeft = that.timerSetup.duration;
                    setTimeout(function () {
                        that.containerDisplay.style.display = '';
                        that.timer();
                        that.startCorrection(that.timerSetup);
                    }, diffTime * 1000);
                } else {
                    that.containerDisplay.style.display = '';
                    that.timeLeft = data.time;
                    that.timer();
                    that.startCorrection();
                }
                ;
            }
            ;
        }
    });
};
CNBC_Countdown.prototype.callbackfn = function (data) {
    var that = this;
    if (!data.time) {
        return;
    } else {
        var diffTime = data.time - this.timerSetup.duration;
        if (diffTime > 0) {
            this.timeLeft = this.timerSetup.duration;
            setTimeout(function () {
                that.containerDisplay.style.display = '';
                that.timer();
                that.startCorrection();
            }, diffTime * 1000);
        } else {
            this.containerDisplay.style.display = '';
            this.timeLeft = data.time;
            this.timer();
            this.startCorrection();
        }
        ;
    }
    ;
};
CNBC_Countdown.prototype.cleanUpScript = function (el) {
    el.parentNode.removeChild(el);
};
CNBC_Countdown.prototype.refreshDisplay = function () {
    if (this.timeLeft <= 0) {
        this.containerDisplay.style.display = 'none';
        clearTimeout(this.refreshHold);
        clearInterval(this.correctTimer);
        return;
    }
    ;
    var oneDay = 24 * 60 * 60;
    var oneHour = 60 * 60;
    var days = Math.floor(this.timeLeft / oneDay);
    var hours = Math.floor((this.timeLeft - days * oneDay) / oneHour);
    var minutes = Math.floor((this.timeLeft - days * oneDay - hours * oneHour) / 60);
    var seconds = Math.floor(this.timeLeft - days * oneDay - hours * oneHour - minutes * 60);
    var displayText = "";
    if (days > 0) {
        displayText += padWithZero(days) + ":";
    }
    displayText += padWithZero(hours) + ":";
    displayText += padWithZero(minutes) + ":";
    displayText += padWithZero(seconds);
    function padWithZero(count) {
        return (count < 10) ? "0" + count : count;
    }

    this.display.textContent = displayText;
};
CNBC_Countdown.prototype.timer = function () {
    this.timeLeft = this.timeLeft - 1;
    var that = this;
    this.refreshHold = setTimeout(function () {
        that.timer()
    }, 1000);
    this.refreshDisplay();
};
CNBC_Countdown.prototype.startCorrection = function () {
    var urlP = this.timerSetup.serviceUrl + "?year=" + this.timerSetup.eventYear + "&month=" + this.timerSetup.eventMonth + "&day=" + this.timerSetup.eventDay + "&hour=" + this.timerSetup.eventHour + "&minute=" + this.timerSetup.eventMinute + "&second=" + this.timerSetup.eventSecond;
    var that = this;
    setInterval(function () {
        $.ajax({
            'url': urlP, 'dataType': 'jsonp', 'success': function (data) {
                that.timeLeft = data.time;
            }
        });
    }, 300000);
};
/* File BEGIN: http://fm.cnbc.com/applications/cnbc.com/staticcontent/scripts/libraries/plugins/winfocus.js?t=1450133677 */
;
;
(function ($) {
    $.winFocus || ($.extend({
        winFocus: function () {
            var a = !0, b = [];
            $(document).data("winFocus") || $(document).data("winFocus", $.winFocus.init());
            for (x in arguments)"object" == typeof arguments[x] ? (arguments[x].blur && $.winFocus.methods.blur.push(arguments[x].blur), arguments[x].focus && $.winFocus.methods.focus.push(arguments[x].focus), arguments[x].blurFocus && $.winFocus.methods.blurFocus.push(arguments[x].blurFocus), arguments[x].initRun && (a = arguments[x].initRun)) : "function" == typeof arguments[x] ? b.push(arguments[x]) : "boolean" == typeof arguments[x] && (a = arguments[x]);
            b && (1 == b.length ? $.winFocus.methods.blurFocus.push(b[0]) : ($.winFocus.methods.blur.push(b[0]), $.winFocus.methods.focus.push(b[1])));
            if (a)$.winFocus.methods.onChange()
        }
    }), $.winFocus.init = function () {
        $.winFocus.props.hidden in document ? document.addEventListener("visibilitychange", $.winFocus.methods.onChange) : ($.winFocus.props.hidden = "mozHidden")in document ? document.addEventListener("mozvisibilitychange", $.winFocus.methods.onChange) : ($.winFocus.props.hidden = "webkitHidden")in document ? document.addEventListener("webkitvisibilitychange", $.winFocus.methods.onChange) : ($.winFocus.props.hidden = "msHidden")in document ? document.addEventListener("msvisibilitychange", $.winFocus.methods.onChange) : ($.winFocus.props.hidden = "onfocusin")in document ? document.onfocusin = document.onfocusout = $.winFocus.methods.onChange : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = $.winFocus.methods.onChange;
        return $.winFocus
    }, $.winFocus.methods = {
        blurFocus: [], blur: [], focus: [], exeCB: function (a) {
            $.winFocus.methods.blurFocus && $.each($.winFocus.methods.blurFocus, function (b, c) {
                this.apply($.winFocus, [a, !a.hidden])
            });
            a.hidden && $.winFocus.methods.blur && $.each($.winFocus.methods.blur, function (b, c) {
                this.apply($.winFocus, [a])
            });
            !a.hidden && $.winFocus.methods.focus && $.each($.winFocus.methods.focus, function (b, c) {
                this.apply($.winFocus, [a])
            })
        }, onChange: function (a) {
            var b = {focus: !1, focusin: !1, pageshow: !1, blur: !0, focusout: !0, pagehide: !0};
            if (a = a || window.event)a.hidden = a.type in b ? b[a.type] : document[$.winFocus.props.hidden], $(window).data("visible", !a.hidden), $.winFocus.methods.exeCB(a); else try {
                $.winFocus.methods.onChange.call(document, new Event("visibilitychange"))
            } catch (c) {
            }
        }
    }, $.winFocus.props = {hidden: "hidden"})
})(jQuery);
/* File BEGIN: http://fm.cnbc.com/applications/cnbc.com/staticcontent/scripts/libraries/scroll/viewability.js?t=1450133677 */
var viewabilityForEndCardTimer = {};
viewabilityForEndCardTimer.init = function (args) {
    var self = this;
    if (CNBC_VideoStates.isPageVisible) {
        $.each(CNBC_VideoStates.pdkObjs, function (i, value) {
            CNBC_VideoStates.pdkObjs[i].dispatchEvent("resumeTimer", 1);
        });
    }
    else {
        $.each(CNBC_VideoStates.pdkObjs, function (i, value) {
            CNBC_VideoStates.pdkObjs[i].dispatchEvent("pauseTimer", 1);
        });
    }
    $.fn.scrollEnd = function (callback, timeout) {
        $(this).scroll(function () {
            var $this = $(this);
            if ($this.data('scrollTimeout')) {
                clearTimeout($this.data('scrollTimeout'));
            }
            $this.data('scrollTimeout', setTimeout(callback, timeout));
        });
    };
    self.initEvents();
};
viewabilityForEndCardTimer.initEvents = function () {
    var self = this;
    $(window).scrollEnd(function () {
        var topOfElement, bottomOfElement, element, flag = false;
        var scrollTopPosition = $(window).scrollTop() + $(window).height();
        var windowScrollTop = $(window).scrollTop();
        $("iframe.player").each(function (index) {
            element = $("#" + this.id);
            if (element.length) {
                topOfElement = element.offset().top;
                bottomOfElement = element.offset().top + element.outerHeight(true);
                if (windowScrollTop > bottomOfElement - (element.outerHeight(true) / 2) && windowScrollTop > topOfElement) {
                    CNBC_VideoStates.pdkObjs[index].dispatchEvent("pauseTimer", 1);
                } else if (scrollTopPosition < topOfElement + (element.outerHeight(true) / 2) && scrollTopPosition < bottomOfElement) {
                    CNBC_VideoStates.pdkObjs[index].dispatchEvent("pauseTimer", 1);
                }
                else {
                    CNBC_VideoStates.pdkObjs[index].dispatchEvent("resumeTimer", 1);
                }
            }
        });
    }, 100);
};
/* File BEGIN: http://fm.cnbc.com/applications/cnbc.com/staticcontent/scripts/libraries/Premium/model_portfolio_widget.js?t=1450133677 */
CNBC_Portfolio_Widget = function () {
    var modAPI, modAPIId = {'squawkbox': '7934587', 'fastmoney': '7934636'}, dataMapping = {
        'api': {
            'id': 'Id',
            'name': 'Name',
            'pct': 'MoneyWeightedReturn->Percent'
        },
        'db': {
            'id': 'source_item_id',
            'nid': 'nid',
            'name': 'full_name',
            'jobtitle': 'jobtitle',
            'related': 'related',
            'image': 'image',
            'src': 'image*0->img->src',
            'title': 'image*0->img->title',
            'alt': 'image*0->img->alt'
        }
    }, tabTextMapping = {
        'squawkbox': 'squawk box portfolio',
        'fastmoney': 'halftime portfolio'
    }, staticAPI = 'portfoliocontributors?portfolio_type=', isReady = false;
    var init = function (api) {
        if (typeof api === 'string') {
            modAPI = api;
            this.isReady = true;
        } else {
            throw"portfolio data can not be fetched because api is missing";
        }
    }
    var request = function (ready, times_old, tracking) {
        var url, clock = 0, times = times_old, readyState = ready, data = {
            'squawkbox': null,
            'fastmoney': null
        }, callback = null, msg = '';
        var process = function (d, api) {
            var processedData = [], list;
            var mapDataByState = function (state, data) {
                var prop = null, mapped = null;
                if (mapped = dataMapping[api][state]) {
                    prop = CNBC_Utils.searchProp(list[i], dataMapping[api][state]);
                }
                return prop;
            }
            if (api === 'api') {
                if (CNBC_Common.isArray(d['Individual'])) {
                    list = d['Individual'];
                }
            } else {
                if (CNBC_Common.isArray(d['contributors'])) {
                    list = d['contributors'];
                }
            }
            for (var i in list) {
                processedData[i] = {};
                if (list[i]) {
                    for (var s in readyState) {
                        var state = readyState[s].split(':');
                        processedData[i][state[0]] = mapDataByState(state[0], list[i]);
                        if (state.length > 1) {
                            var subProps = state[1].split(','), master = state[0];
                            processedData[i][master] = {};
                            for (var s in subProps) {
                                if (subProps[s]) {
                                    processedData[i][master][subProps[s]] = mapDataByState(subProps[s], list[i]);
                                }
                            }
                        }
                    }
                }
            }
            return processedData;
        };
        var merge = function (d_new, d_old, reserve) {
            var searchObjInArr = function (arr, obj, id, num, ind) {
                var store = null, key = obj[id];
                if (num > 1)store = [];
                for (var a in arr) {
                    if (typeof arr[a] === 'object') {
                        if (store === null) {
                            if (arr[a][id] === key)return a;
                        } else {
                            if (arr[a][id] === key)store.push(a);
                            if (store.length >= num)return store;
                        }
                    }
                }
                return null;
            };
            var expandObj = function (o_old, o_new) {
                var keys = Object.keys(o_new);
                for (var k in keys) {
                    switch (reserve) {
                        case'all':
                            if (!o_old[keys[k]] || CNBC_Utils.isEmpty(o_old[keys[k]])) {
                                o_old[keys[k]] = o_new[keys[k]];
                            }
                            break;
                        case'none':
                            o_old[keys[k]] = o_new[keys[k]];
                            break;
                        default:
                            if (!$.inArray(keys[k], reserve))o_old[keys[k]] = o_new[keys[k]];
                            break;
                    }
                }
            };
            if (CNBC_Common.isArray(d_new) && CNBC_Common.isArray(d_old)) {
                for (var d in d_new) {
                    var matchedIndex = searchObjInArr(d_old, d_new[d], 'id', 1, d);
                    if (matchedIndex !== null) {
                        expandObj(d_old[matchedIndex], d_new[d]);
                    } else {
                        d_old.push(d_new[d]);
                    }
                }
            } else if (typeof d_new === 'object' && typeof d_old === 'object') {
                expandObj(d_old, d_new);
            }
            clock += 1;
            if (clock === times)msg = 'ready';
        };
        var callAPI = function (done, tag, api) {
            if (api === 'api') {
                url = modAPI + modAPIId[tag];
                callback = 'MOD' + tag + '_portfolios';
            } else {
                url = CNBC_Common.genericService() + staticAPI + tag;
            }
            $.ajax({
                url: url,
                cache: false,
                headers: {'accept': 'application/json'},
                dataType: (api === 'api') ? 'jsonp' : 'json',
                jsonp: 'callback',
                jsonpCallback: callback
            }).done(function (d) {
                merge(process(d, api), data[tag] = data[tag] || [], 'all');
                if (!!data)done(msg);
            }).fail(function (e) {
                if (console && console.warn) {
                    console.warn('api call is not available now');
                }
            });
        };
        var render = function (el, state, attr, contributor, type, order) {
            var $el = $('.portfolio-' + state, el), order = order + 1;
            if ($el.length > 0 && contributor[state]) {
                switch (state) {
                    case'image':
                        var imageData = contributor.image, attributes = attr.split(',')
                        $img = $('<img>');
                        for (var a in attributes) {
                            if (imageData) {
                                var attribute = imageData[attributes[a]];
                                if (attributes[a] == 'src')attribute = attribute.replace('$size$', '160x160');
                                $img.attr(attributes[a], attribute);
                            }
                        }
                        $el.append($img);
                        break;
                    case'name':
                        $el.click(function () {
                            if (tracking) {
                                CNBC_Omniture.genericClickTracking({'cookie': {'linktrk': 'propicks:' + tabTextMapping[type].replace(/ /g, '') + ':' + order + '_contributor:' + CNBC_Settings.pageNodeId}})
                            }
                            window.location.href = '/' + tabTextMapping[type].replace(/ /g, '-') + '/#' + contributor['nid'];
                        })
                        $el.text(contributor[state]);
                        break;
                    case'related':
                        $('.portfolio-related-article', $el).each(function (n, li) {
                            if (CNBC_Utils.isArray(contributor.related) && contributor.related.length > 0) {
                                var $anchor = $('<a></a>'), $badge = $("<span class='cnbc-font-icon icon-cnbc-pro'></span>"), $video = $("<span class='cnbc-font-icon icon-cnbc-video'></span>"), article = contributor.related[n], url = article.url ? article.url : CNBC_Settings.baseurls.cnbc_base_secure + '/id/';
                                if (!article.url)url += article.nid;
                                $anchor.text(article.title).attr('href', 'javascript:void(0)').on('click', function () {
                                    if (tracking) {
                                        CNBC_Omniture.genericClickTracking({'cookie': {'linktrk': 'propicks:' + tabTextMapping[type].replace(/ /g, '') + ':' + order + '_article:' + CNBC_Settings.pageNodeId}})
                                    }
                                    window.location.href = url;
                                });
                                if (article['node_classification'] == 2)$anchor.append($badge);
                                if (article['type'] === 'cnbcvideo')$anchor.append($video);
                                $(li).append($anchor);
                            }
                        })
                        break;
                    case'pct':
                        var pct = parseFloat(contributor[state]), sigh = '';
                        if (pct > 0) {
                            $el.addClass('positive');
                            sign = '+';
                        } else {
                            $el.removeClass('positive');
                            sign = '-';
                        }
                        $el.text(sign + pct + '%');
                        break;
                    case'jobtitle':
                        $el.text(contributor[state].replace('amp;', ''));
                        break;
                    default:
                        $el.text(contributor[state]);
                        break;
                }
            }
        };
        return {
            setCheckPoint: function (times_new) {
                times = times_new;
            }, sortData: function (types, key) {
                if (CNBC_Common.isArray(types)) {
                    for (var i = 0; i < types.length; i++) {
                        if (typeof types[i] === 'string') {
                            var type = types[i];
                            data[type] = CNBC_Utils.sortObjectsByProperty(data[type], key, 1);
                        }
                    }
                }
                return this;
            }, inject: function (types, container) {
                if (CNBC_Common.isArray(types)) {
                    for (var i = 0; i < types.length; i++) {
                        var type = types[i], content = $('.portfolio-tabs-content', container), tabs = $('.portfolio-tabs-primary', container), tab = container.find('.' + type + '-tab');
                        if (tab.length > 0) {
                            tab.on('click', function () {
                                var self = this;
                                if (!$(this).hasClass('selected')) {
                                    $('.portfolio-tab.selected', container).removeClass('selected');
                                    $(this).addClass('selected');
                                    $('.portfolio-content.selected', container).fadeOut(function () {
                                        $(this).removeClass('selected');
                                        $('.' + $(self).attr('type') + '-content', content).fadeIn(function () {
                                            $(this).addClass('selected');
                                        });
                                    });
                                    if (tracking) {
                                        CNBC_Omniture.genericClickTracking({
                                            'link': {
                                                'pev2': 'propicks',
                                                'trkNav': 'propicks:' + tabTextMapping[$(this).attr('type')].replace(/ /g, '') + ':tab:' + CNBC_Settings.pageNodeId
                                            }
                                        });
                                    }
                                }
                            });
                        }
                        $('.' + type + '-content .portfolio-profile', content).each(function (n, el) {
                            for (var s in readyState) {
                                var state = readyState[s].split(':');
                                if (state.length > 1) {
                                    render(el, state[0], state[1], data[type][n], type, n);
                                } else {
                                    render(el, state[0], null, data[type][n], type, n);
                                }
                            }
                        });
                    }
                }
                return this;
            }, done: function (done, tag, api) {
                if (typeof done === 'function')callAPI(done, tag, api);
                return this;
            }
        }
    }
    return {'init': init, 'request': request, 'isReady': isReady}
}();
/* File BEGIN: http://fm.cnbc.com/applications/cnbc.com/staticcontent/scripts/libraries/Common/cnbc.vod.js?t=1450133677 */
;
var cnbc = cnbc || {};
cnbc.vod = cnbc.vod || {};
cnbc.vod.events = {
    player: {
        ON_RELEASE_START: 'player release start event',
        ON_MEDIA_UNPAUSE: 'player media unpause event'
    }
};
var cnbc = cnbc || {};
cnbc.vod = cnbc.vod || {};
cnbc.vod.constructors = cnbc.vod.constructors || {};
cnbc.vod.constructors.notifier = function () {
    'use strict';
    var channels = {};
    this.subscribe = function (channel, fn, subscriber) {
        if (!channels[channel])channels[channel] = [];
        channels[channel].push({context: subscriber, callback: fn});
        return this;
    };
    this.publish = function (channel) {
        if (!channels[channel])return false;
        var args = Array.prototype.slice.call(arguments, 1);
        for (var i = 0, count = channels[channel].length; i < count; i++) {
            var subscription = channels[channel][i];
            subscription.callback.apply(subscription.context, args);
        }
        return this;
    };
};
cnbc.vod.notifier = new cnbc.vod.constructors.notifier();
var cnbc = cnbc || {};
cnbc.vod = cnbc.vod || {};
cnbc.vod.dockable = (function ($, module, options) {
    'use strict';
    var setup, defaults, $iframes, dockedTop = false, dockedBottom = false, header;
    defaults = {dockedVideoClass: 'theplatform-video__docked', dockedVideoHeight: 90};
    setup = $.extend({}, defaults);
    var dockablePlayer = (function () {
        var $videoContainer, topThreshold, bottomThreshold, $iframe, containerHeight;

        function set(iframeToSet) {
            if (!$iframe || (iframeToSet[0] != $iframe[0])) {
                $iframe = iframeToSet;
                $videoContainer = $iframe.parent();
                update();
            }
        }

        function update() {
            if ($videoContainer) {
                containerHeight = $videoContainer.innerHeight();
                topThreshold = Math.floor($videoContainer.offset().top + $videoContainer.height() - containerHeight / 2);
                bottomThreshold = Math.floor($videoContainer.offset().top - $(window).height() + containerHeight / 2);
            }
        }

        function getIframeCoords() {
            return $iframe.get(0).getBoundingClientRect;
        }

        return {
            set: set, update: update, containerHeight: function () {
                return containerHeight;
            }, iframeCoords: getIframeCoords, topThreshold: function () {
                return topThreshold;
            }, bottomThreshold: function () {
                return bottomThreshold;
            }, $iframe: function () {
                return $iframe;
            }, $videoContainer: function () {
                return $videoContainer;
            }
        };
    })();

    function init(initOptions) {
        if (!initOptions.$iframes || !initOptions.$iframes.length)return;
        $iframes = initOptions.$iframes;
        $iframes.addClass('dockable');
        cnbc.vod.notifier.subscribe(cnbc.vod.events.player.ON_RELEASE_START, onReleaseStart, this);
        cnbc.vod.notifier.subscribe(cnbc.vod.events.player.ON_MEDIA_UNPAUSE, onMediaUnpause, this);
        $(window).on('resize', resizeHandler);
        $(window).on('scroll', scrollHandler);
        resizeHandler();
        scrollHandler();
    }

    function onReleaseStart(iframe) {
        $iframes.each(function () {
            if (this == iframe) {
                dockablePlayer.set($(iframe));
            }
        });
    }

    function onMediaUnpause(iframe) {
        $iframes.each(function () {
            if (this == iframe) {
                dockablePlayer.set($(iframe));
            }
        });
    }

    function dockPlayer() {
        header = $('.persistentHeader');
        dockablePlayer.$videoContainer().css('height', dockablePlayer.containerHeight());
        dockablePlayer.$videoContainer().addClass(setup.dockedVideoClass);
        dockablePlayer.$iframe().css('position', 'fixed');
        dockablePlayer.$iframe().css('top', dockablePlayer.iframeCoords.top);
        dockablePlayer.$iframe().css('z-index', 10);
        window.setTimeout(function () {
            dockablePlayer.$iframe().css('top', header.outerHeight());
            dockablePlayer.$iframe().css('height', setup.dockedVideoHeight);
        }, 0);
        $.each(CNBC_VideoStates.pdkObjs, function (i, value) {
            if (CNBC_VideoStates.pdkObjs[i].iframe == dockablePlayer.$iframe()[0]) {
                this.dispatchEvent('dockPlayer');
            }
        });
    }

    function undockPlayer() {
        dockablePlayer.$videoContainer().removeClass(setup.dockedVideoClass);
        window.setTimeout(function () {
            dockablePlayer.$iframe().css('top', dockablePlayer.iframeCoords.top);
            dockablePlayer.$iframe().css('height', '');
        }, 0);
        $.each(CNBC_VideoStates.pdkObjs, function (i, value) {
            if (CNBC_VideoStates.pdkObjs[i].iframe == dockablePlayer.$iframe()[0]) {
                this.dispatchEvent('undockPlayer');
            }
        });
        window.setTimeout(function () {
            dockablePlayer.$iframe().css('position', '');
            dockablePlayer.$iframe().css('z-index', '');
        }, 100);
    }

    function resizeHandler() {
        dockablePlayer.update();
    }

    function scrollHandler() {
        if (!header) {
            header = $('.persistentHeader');
        } else {
            var aboveTrigger = $(window).scrollTop() + header.outerHeight() < dockablePlayer.topThreshold();
            var toggled = false;
            if (dockablePlayer.$videoContainer()) {
                if (!toggled && !dockedBottom) {
                    if ((!aboveTrigger && !dockablePlayer.$videoContainer().hasClass(setup.dockedVideoClass))) {
                        dockPlayer();
                        toggled = true;
                        dockedTop = true;
                    } else if ((aboveTrigger && dockablePlayer.$videoContainer().hasClass(setup.dockedVideoClass))) {
                        undockPlayer();
                        toggled = true;
                        dockedTop = false;
                    }
                }
            }
        }
    }

    module.init = init;
    return module;
}(jQuery, cnbc.vod.dockable || {}));