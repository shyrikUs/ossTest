'use strict';

window.onload = function () {
    // let burger = document.querySelector('.burger');
    // burger.addEventListener('click', function () {
    //     this.classList.toggle('clickBurger');
    //     let navigationWrap = document.querySelector('.navigationWrap'),
    //         wrapBurger = document.querySelector('.wrapBurger'),
    //         navigation = document.querySelector('.navigation'),
    //         open = '_open';
    //     navigationWrap.classList.toggle(`navigationWrap${open}`);
    //     navigation.classList.toggle(`navigation${open}`);
    //     wrapBurger.classList.toggle(`wrapBurger${open}`);
    // });
    var $burger = $('.burger');
    $burger.click(function () {
        $(this).toggleClass('clickBurger');
        var menu = [{
            menuO: $('.navigationWrap'),
            text: 'navigationWrap'
        }, {
            menuO: $('.wrapBurger'),
            text: 'wrapBurger'
        }, {
            menuO: $('.navigation'),
            text: 'navigation'
        }],
            OPEN = '_open';
        for (var i = 0; i < menu.length; i++) {
            menu[i].menuO.toggleClass('' + menu[i].text + OPEN);
        }
    });
    $.ajax({
        type: 'get',
        url: './json/img.json',
        dataType: 'json',
        context: this,
        success: function success(blogItem) {
            var $blog = $('.blog'),
                $art = 'article';
            for (var i = 0; i < blogItem.Article.length; i++) {
                var $article = $('<article class = "' + $art + ' padSite" \n                    data-id = "' + blogItem.Article[i].data + '">\n                    </article>'),
                    $img = $('<img class = "' + $art + '__img"\n                    src = "' + blogItem.Article[i].img + '" alt="' + blogItem.Article[i].desc + '">'),
                    $p = $('<p class = "' + $art + '__text">' + blogItem.Article[i].text + '</p>'),
                    $a = $('<a href = "' + blogItem.Article[i].link + '"\n                        class = "' + $art + '__link">more...</a>');
                $img.appendTo($article);
                $p.appendTo($article);
                $a.appendTo($article);
                $article.appendTo($blog);
            }
        },
        error: function error(_error) {
            console.log('Ошибка при загрузке данных', _error);
        }
    });
    $(document).ready(function () {
        $('.slick').slick({
            dots: false,
            arrows: true,
            nextArrow: false,
            prevArrow: false,
            infinite: true,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 2000,
            fade: true,
            cssEase: 'linear'
        });
    });
};