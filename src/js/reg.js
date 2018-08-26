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

    var $test0 = $('.test0');
    var $test1 = $('.test1');
    var $test2 = $('.test2');
    var $test3 = $('.test3');
    var $phone = $('.phone');
    
    // 验证手机号是否已注册
    $phone.on('blur',function(){
        var phone = $phone.val();
        $.ajax({
            url:"../api/checkname.php",
            data:{
                'username':phone,
            },
            success:function(user){
                console.log(user)
                if(user === 'yes'){
                    $test1.html('该号已注册').css('display','block');
                    return false;
                }else if(user === 'no'){

                }
            }
        })
    })


    $('.btn').on('click',function(){

        var phone = $phone.val();
        if(!/^1[3-9]\d{9}$/.test(phone)){
            $test1.css({'display':'block'}).html('请输入正确的手机号');
            return false;
        }else{
            $test1.css({'display':'none'})
        }

        // 验证验证码
        var code = $('.code').val();
        if(code != $random.text()){
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

        $.ajax({
            url:"../api/reg.php",
            data:{
                'username':phone,
            },
            success:function(user){
                $test0.css('display','block');
            }
        })
        
        // 注册成功跳转登录
        setInterval(function(){
            location.href = 'login.html'
        },3000)
    })

    
    $('input').on('focus',function(){
        $test1.css('display','none');
        $test2.css('display','none');
        $test3.css('display','none');
      
    })

})