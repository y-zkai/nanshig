jQuery($=>{


    let $loginL = $('.login-t-l');
    let $loginR = $('.login-t-r');
    let $loginUser = $('.user-login');
    let $loginPhone = $('.phone-login');


    // 用户名登陆和手机号登陆的转换
    $loginR.on('click',function(){

        $(this).css({
            'border-bottom':'3px solid #2F97F0',
            'color':'#2F97F0',
        });

        $loginL.css({
            'border-bottom':'none',
            'color':'#999',
        });

        $loginR.find('i').css({'display':'block'});
        $loginL.find('i').css({'display':'none'});

        $loginUser.css({'display':'none'});
        $loginPhone.css({'display':'block'});
    })

    $loginL.on('click',function(){

        $(this).css({
            'border-bottom':'3px solid #2F97F0',
            'color':'#2F97F0',
        });

        $loginR.css({
            'border-bottom':'none',
            'color':'#999',
        });

        $loginL.find('i').css({'display':'block'});
        $loginR.find('i').css({'display':'none'});
        $loginUser.css({'display':'block'});
        $loginPhone.css({'display':'none'});
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


        var $test4 = $('.test4');
        var $test5 = $('.test5');
        var $test6 = $('.test6');
    // 用户名登录界面
    $('.btn2').on('click',function(){

        // 验证用户名
        var uname = $('.uname').val();
        $.ajax({
            url:"../api/login.php",
            data:{
                'username':uname,
            },
            success:function(user){
                if(user === 'no'){
                    $test4.html('用户名未注册').css('display','block');
                    return false;
                }
                // 验证密码
                var userpwd = $('.userpwd').val();
                if(!/^\S{6,20}$/.test(userpwd)){
                    $test5.css({'display':'block'});
                    return false;
                }else{
                    $test5.css({'display':'none'});
                }

                // 验证码
                var ocode = $('.ocode').val();
                var $code2 = $('#code2');
                if(ocode != $code2.text()){
                    $test6.css({'display':'block'});
                    return false;
                }else{
                    $test6.css({'display':'none'});
                }


                // 登录成功跳转到主页
                location.href = '../index.html'
            }
        })
    

    })


        
    var $test1 = $('.test1');
    var $test2 = $('.test2');
    var $test3 = $('.test3');
    
    // 手机号登录界面
    $('.btn1').on('click',function(){

        // 验证手机号是否注册
        var phone = $('.phone').val();
        $.ajax({
            url:"../api/login.php",
            data:{
                'username':phone,
            },
            success:function(user){
                if(user === 'no'){
                    $test1.html('手机号未注册').css('display','block');
                    return false;
                }
                // 验证验证码
                var code = $('.code').val();
                var $code1 = $('#code1')
                if(code != $code1.text()){
                    $test2.css({'display':'block'})
                    return false;
                }else{
                    $test2.css({'display':'none'})
                }
                // 验证短信
                var message = $('.message').val();
                if(!/^\d{6}$/.test(message)){
                    $test3.css({'display':'block'})
                    return false;
                }else{
                    $test3.css({'display':'none'})
                }


                // 注册成功跳转到主页
                location.href = '../index.html'
            }
        })
        
    })


    $('input').on('focus',function(){
        // $test1.css('display','none');
        $test2.css('display','none');
        $test3.css('display','none');
        $test4.css('display','none');
        $test5.css('display','none');
        $test6.css('display','none');
    });
    $('.phone').on('blur',function(){
        // 验证手机号
        var phone = $('.phone').val();
        if(!/^1[3-9]\d{9}$/.test(phone)){
            $test1.css({'display':'block'}).html('手机号不正确')
            return false;
        }else{
            $test1.css({'display':'none'})
        }
    })

})