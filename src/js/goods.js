/* 
* @Author: Marte
* @Date:   2018-08-24 11:38:31
* @Last Modified by:   Marte
* @Last Modified time: 2018-08-24 22:25:26
*/

jQuery($=>{   

    // 获取传过来的商品信息
    var params = location.search; //str
    params = params.slice(1); //去掉？
    params = params.split('&'); //拆分成数组

    // 声明一个空对象
    var goods = {};
    // 遍历params数组，拆分成二维数组
    params.forEach(function(item){
        var arr = item.split('=');
        // 商品信息写入数组
        goods[arr[0]] = decodeURI(arr[1]);
    });
    
    console.log(params)

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

    $('.to-car').on('click',function(){
        addCar();
        var currentGoods =  goodslist.filter(function(item){
            return item.id === goods.id;
        });

        // 商品存在，在原有数量上加上现在添加的商品数量
        if(currentGoods.length>0){
            currentGoods[0].qty = currentGoods[0].qty*1 + input.value*1;
        }
        // 商品不存在，添加商品
        else{   
            var toCar = {
                id:goods.id,
                imgurl:goods.imgurl,
                name:goods.name,
                sale:goods.sale,
                qty:input.value
            }
            // 当前商品添加到数组
            goodslist.push(toCar);
        }
        // 添加cookie
        Cookie.set('goodslist',JSON.stringify(goodslist));
    })

    var goodslist = Cookie.get('goodslist');

    if(goodslist === ''){
        goodslist = [];
    }else{
        goodslist = JSON.parse(goodslist);        
    }
    
    

    // 计算总价
    var total = 0;
    for(var i=0;i<goodslist.length;i++){        
        total += goodslist[i].sale * goodslist[i].qty;
    }

    $('.total').html(total)

    var shopcar = document.querySelector('.shopcar');
    function addCar(){
        var res = goodslist.map((item,idx)=>{
            return `<li>
                <img src="${goodslist[idx].imgurl}"/>
                <div class="goodsname">${goodslist[idx].name}</div>
                <div class="goodsp">
                    <span>${goodslist[idx].sale}</span>&times;
                    <span>${goodslist[idx].qty}</span>
                    <p class="remove">删除</p>
                </div>
            </li>`
        }).join('');
       
        // $('.shopcar').html(res)
        shopcar.innerHTML = res ;       
    }
    addCar();

    // 商品详情、评价、销量 鼠标点击切换
    var $tHeader = $('.tab-header span');
    var $tContent = $('.tab-content div');

    $tHeader.on('click',function(){
        $tHeader.removeClass('active');
        $(this).addClass('active');
        $tContent.removeClass('tab')
        .eq($(this).index()).addClass('tab');
    });


    
});