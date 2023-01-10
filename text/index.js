if ($('.top').length) {
    var imgpass = "画像ファイルまでのパス";
    var imgfile = [];
    imgfile[0] = '../img/top1.webp';
    imgfile[1] = '../img/top2.webp';
    var n = Math.floor(Math.random() * imgfile.length);
    var bgbox = $('.top');
    bgbox.css('background-image', 'url(' + imgfile[n] + ')');
}