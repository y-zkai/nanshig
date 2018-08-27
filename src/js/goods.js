
jQuery($=>{   

    // 获取传过来的商品id
    var params = location.search; //str
    params = params.slice(4);

    $.ajax({
        url:'../api/goods.php',
        dataType:'json',
        success:function(data){
            // console.log(data)
            data.forEach(function(goods){
                if(goods.id === params){
                    $('h3 .title').html(goods.name);
                    $('.goods img').attr('src',goods.imgurl);
                    $('.goods-c h3').html(goods.name);
                    $('.goods-c .price').html(goods.price);
                    $('.goods-c .sale').html(goods.sale);
                    $('.goods-c .mark').html(goods.comment);

                    // 添加商品数量
                    let $input = $('.goods-buy input');
                    var input = document.querySelector('.goods-buy input');
                    $('.goods-buy').on('click','.jia',function(){
                        input.value++;
                    }).on('click','.jian',function(){
                        input.value--;
                        if(input.value<0){
                            input.value = 0;
                        }
                    });

                    let $color = $('.color');
                    let $size = $('.size');
                    // 选择颜色
                    $color.on('click','span',function(){
                        $color.find('span').removeClass('hover');
                        $(this).addClass('hover');
                    });
                    // 选择尺码
                    $size.on('click','span',function(){
                        $size.find('span').removeClass('hover');
                        $(this).addClass('hover');
                    })


                    
                    // 商品详情、评价、销量 鼠标点击切换
                    var $tHeader = $('.tab-header span');
                    var $tContent = $('.tab-content div');

                    $tHeader.on('click',function(){
                        $tHeader.removeClass('active');
                        $(this).addClass('active');
                        $tContent.removeClass('tab')
                        .eq($(this).index()).addClass('tab');
                    });
                }
            })
        }
    })


    
});