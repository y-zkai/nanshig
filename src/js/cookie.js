
jQuery($=>{

    // 获取传过来的商品信息
    // var params = location.search; //str
    // params = params.slice(1); //去掉？
    // params = params.split('&'); //拆分成数组
    // // 声明一个空对象
    // var goods = {};
    // // 遍历params数组，拆分成二维数组
    // params.forEach(function(item){
    //     var arr = item.split('=');
    //     // 商品信息写入数组
    //     goods[arr[0]] = decodeURI(arr[1]);
    // });


    // 获取cookie
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

    // 添加商品渲染到购物车列表
    var shopcar = document.querySelector('.shopcar');
    var carlist = document.querySelector('.car-list');
    function addCar(){
        var res = goodslist.map((item,idx)=>{
            return `<li data-guid="${item.id}">
                <img src="${goodslist[idx].imgurl}"/>
                <div class="goodsname">${goodslist[idx].name}</div>
                <div class="goodsp">
                    <span class="osale">${goodslist[idx].sale}</span>&times;
                    <span class="oqty">${goodslist[idx].qty}</span>
                    <span class="remove">删除</span>
                </div>
            </li>`
        }).join('');
        shopcar.innerHTML = res ; 

        $('.num').html(goodslist.length)
        var total = 0;
        var oqty = document.querySelectorAll('.oqty');
        var osale = document.querySelectorAll('.osale');
        for(var i=0;i<goodslist.length;i++){
            total += oqty[i].innerHTML*osale[i].innerHTML;
        }
        $('.number').html(total.toFixed(2)) 

        $('.shu').html(goodslist.length);
        if(goodslist.length>0){
            $('.shu').show()
        }else{
            $('.shu').hide()
        }

    }
    addCar();


    
    var input = document.querySelector('.goods-buy input');
    // 获取传过来的商品id
    var params = location.search;
    params = params.slice(4);
    $.ajax({
        url:'../api/goods.php',
        dataType:'json',
        type:'get',
        success:function(data){
            // 根据id，请求数据库得到对应商品信息
            data.forEach(function(goods){
                if(goods.id === params){
                    // 点击添加购物车
                    $('.to-car').on('click',function(){
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
                        addCar();
                    });
                }
            })
        }
    })

    var carlist = document.querySelector('.car-list');
    var remove = document.querySelectorAll('.remove');
    // 删除添加商品
    carlist.onclick = function(e){
        e = e || window.event;
        var target = e.target || e.srcElement;
        if(target.className === 'remove'){
            var currentLi = target.parentNode.parentNode;

            var guid = currentLi.getAttribute('data-guid');
            console.log(guid)

            for(var i=0;i<goodslist.length;i++){
                if(goodslist[i].id === guid){
                    
                    goodslist.splice(i,1);
                    break;
                }
            }

            Cookie.set('goodslist',JSON.stringify(goodslist));
            
            addCar();   
            
        }
    }
})