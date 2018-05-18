 // 底部点击变色
    var  jsFixedhref = $('.jsFixedhref');
    jsFixedhref.on('click',function(){  
        $(this).addClass("active").siblings().removeClass("active");  
    });  