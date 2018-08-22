jQuery($=>{
    
    var $random = $('.random-code');

    // 点击生成新的验证码
    $random.on('click',randomCode);

    // 生成随机验证码
    function randomCode(){
        var str = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefchijklmnopqrstuvwxyz';
        var res = ''

        for(var i=0;i<4;i++){
            var idx = parseInt(Math.random()*str.length);
            res += str.charAt(idx);
        }
        // 写入页面，并生成随机背景色
        $random.html(res);
        $random.css({background:randomColor()})
          
    }
    randomCode();


    // 注册
    var isok = false;
    $('.btn').on('click',function(){

        if(!isok){
            return false;
        }
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

        $.ajax({
            url:"../api/reg.php",
            data{
                username:phone,
                password:message
            },
            success:function(user){

            }
        })
        // 注册成功跳转到主页
        location.href = '../index.html'
    })

})