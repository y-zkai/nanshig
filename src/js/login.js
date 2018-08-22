jQuery($=>{

    $('.login-t-r').on('click',function(){

        $(this).css({
            'border-bottom':'3px solid #2F97F0',
            'color':'#2F97F0',
        });

        $('.login-t-l').css({
            'border-bottom':'none',
            'color':'#999',
        });

        $('.login-t-r i').css({'display':'block'});
        $('.login-t-l i').css({'display':'none'});

        $('.user-login').css({'display':'none'});
        $('.phone-login').css({'display':'block'});
    })

    $('.login-t-l').on('click',function(){

        $(this).css({
            'border-bottom':'3px solid #2F97F0',
            'color':'#2F97F0',
        });

        $('.login-t-r').css({
            'border-bottom':'none',
            'color':'#999',
        });

        $('.login-t-l i').css({'display':'block'});
        $('.login-t-r i').css({'display':'none'});
        $('.user-login').css({'display':'block'});
        $('.phone-login').css({'display':'none'});
    })
    
    var $random = $('.random-code');

    // 点击生成新的验证码
    $random.on('click',randomCode);

    // 生成随机验证码
    function randomCode(){
        var str = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefchijklmnopqrstuvwxyz';
        var res = '';

        for(var i=0;i<4;i++){
            var idx = parseInt(Math.random()*str.length);
            res += str.charAt(idx);
        }
        // 写入页面，并生成随机背景色
        $random.html(res);
        $random.css({background:randomColor()})
          
    }
    randomCode();

    $('.btn2').on('click',function(){

        // 验证用户名
        var uname = $('.uname').val();
        var test4 = $('.test4')[0];

        // 验证密码
        var userpwd = $('.userpwd').val();
        if(!/^\S{6,20}$/.test(userpwd)){
            $('.test5').css({'display':'block'});
            return false;
        }else{
            $('.test5').css({'display':'none'});
        }

        // 验证码
        var ocode = $('.ocode').val();
        if(ocode != $random.text()){
            $('.test6').css({'display':'block'});
            return false;
        }else{
            $('.test6').css({'display':'none'});
        }


        // 登录成功跳转到主页
        location.href = '../index.html'

    })


    $('.btn1').on('click',function(){
        // 验证手机号
        var phone = $('.phone').val();
        if(!/^1[3-9]\d{9}$/.test(phone)){
            $('.test1').css({'display':'block'})
            return false;
        }else{
            $('.test1').css({'display':'none'})
        }

        // 验证验证码
        var code = $('.code').val();
        if(code != $random.text()){
            $('.test2').css({'display':'block'})
            return false;
        }else{
            $('.test2').css({'display':'none'})
        }
        // 验证短信
        var message = $('.message').val();
        var test3 = $('.test3')[0];
        if(!/^\d{6}$/.test(message)){
            $('.test3').css({'display':'block'})
            return false;
        }else{
            $('.test3').css({'display':'none'})
        }


        // 注册成功跳转到主页
        location.href = '../index.html'
    })

})