

jQuery($=>{
    
    var goodslist = document.querySelector('.goodslist');
    

    $.ajax({
        url:'../api/goodslist.php',
        dataType:'json',
        type:'get',
        // data:
        success:function(data){
            console.log(data)
            var res = data.map(function(item){
                return `<li class="goods">
                    <div class="main">
                        <a href="goods.html"><img src="${item.imgurl}"></a>
                        <div class="toup">
                            <p><a href="goods.html">${item.name}</a></p>
                            <div class="start"><span class="sale">￥${item.sale}</span><del class="price">￥${item.price}</del><em ></em></div>
                            <div class="contrast"><span><input type="checkbox" />&nbsp;加入对比</span></div>
                            <ul class="moods clearfix">
                                <li><span class="qty">0</span >商品销量</li>
                                <li><span class="comment">0</span>用户评论</li>
                            </ul>
                            <div class="store"><a href="#">时尚潮牌</a></div> 
                            <div class="to-cart"><i class="iconfont icon-gouwuche"></i>&nbsp;加入购物车</div>
                        </div></div>
                    </li>`
            }).join('');

            $('.goodslist').html(res);

            var goods = goodslist.querySelectorAll('.goods');

            $('.goodslist').on('mouseover','goods',function(){
                console.log(this)
                $('.main').addClass('mianp');

                $(this).addClass('goods-hover')
            })


        }
    });


    

})