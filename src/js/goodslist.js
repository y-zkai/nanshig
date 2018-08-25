
jQuery($=>{
    let $goodslist = $('.goodslist')
        
    $.ajax({
        url:'../api/goodslist.php',
        dataType:'json',
        type:'get',
        success:function(data){
            console.log(data)
            render();
            function render(){
                var res = data.map(function(item){
                    return `<li class="goods">
                        <div class="main">
                            <img src="${item.imgurl}">
                            <div class="toup">
                                <p><a href="goods.html">${item.name}</a></p>
                                <div class="start"><span class="sale">￥${item.sale}</span><del class="price">￥${item.price}</del><em ></em></div>
                                <div class="contrast"><span><input type="checkbox" />&nbsp;加入对比</span></div>
                                <ul class="moods clearfix">
                                    <li><span class="qty">${item.qty}</span >商品销量</li>
                                    <li><span class="comment">${item.comment}</span>用户评论</li>
                                </ul>
                                <div class="store"><a href="#">时尚潮牌</a></div> 
                                <div class="to-cart"><i class="iconfont icon-gouwuche"></i>&nbsp;加入购物车</div>
                            </div></div>
                        </li>`
                }).join('');

                // 商品写入页面
                $goodslist.html(res);

                // 点击li 商品信息传到详情页
                $goodslist.on('click','li',function(){
                    var params = '';
                    var goods = data[$(this).index()];
                    for(var key in goods){
                        params += key + '=' + goods[key] + '&';
                    }
                    params = params.slice(0,-1);
                    location.href = 'goods.html?' + params;
                })
            }   

            // 移入移出商品的动画效果
            $goodslist.on('mouseenter','.main',function(){
                $(this).css({
                    height: '445px',
                    border:'none',
                   'box-shadow':'0px 0px 0px 3px #2F97F0',
                   'z-index':'1'
                });

                $(this).find('.toup').css({position:'absolute'}).animate({top:200},300);
            });

            $goodslist.on('mouseleave','.main',function(){
                
                $(this).css({
                    height: '370px',
                    border:'1px solid #f0f0f0',
                    'box-shadow':'none',
                    'z-index':'0'
                });

                $(this).find('.toup').animate({top:260},300).css({
                    position:'none'

                });
            });


            // 排序
            let $sort = $('.to-sort');
            // 销量排序
            $sort.on('click','.xiaoL',function(){
                if($(this).find('i').attr('class') === 'iconfont icon-jiantouxiajiang'){
                    data.sort((a,b)=>{
                        return a.qty- b.qty;
                    });
                    $(this).find('i').attr('class','iconfont icon-jiantoushangsheng')
                    render();
                }else if($(this).find('i').attr('class') === 'iconfont icon-jiantoushangsheng'){
                    data.sort((a,b)=>{
                        return b.qty- a.qty;
                    });
                    $(this).find('i').attr('class','iconfont icon-jiantouxiajiang')
                    render();
                }
            })
            // 人气排序
            $sort.on('click','.renQi',function(){
                if($(this).find('i').attr('class') === 'iconfont icon-jiantouxiajiang'){
                    data.sort((a,b)=>{
                        return a.comment- b.comment;
                    });
                    $(this).find('i').attr('class','iconfont icon-jiantoushangsheng')
                    render();
                }else if($(this).find('i').attr('class') === 'iconfont icon-jiantoushangsheng'){
                    data.sort((a,b)=>{
                        return b.comment- a.comment;
                    });
                    $(this).find('i').attr('class','iconfont icon-jiantouxiajiang')
                    render();
                }
            })
            // 价格排序
            $sort.on('click','.jiaGe',function(){
                if($(this).find('i').attr('class') === 'iconfont icon-jiantouxiajiang'){
                    data.sort((a,b)=>{
                        return a.sale- b.sale;
                    });
                    $(this).find('i').attr('class','iconfont icon-jiantoushangsheng')
                    render();
                }else if($(this).find('i').attr('class') === 'iconfont icon-jiantoushangsheng'){
                    data.sort((a,b)=>{
                        return b.sale- a.sale;
                    });
                    $(this).find('i').attr('class','iconfont icon-jiantouxiajiang')
                    render();
                }
            })

            
        }
    });
})