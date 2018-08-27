
jQuery($=>{
    let $goodslist = $('.goodslist')
    var pageNo=1;
    var qty=20;
    $.ajax({
        url:'../api/goodslist.php',
        dataType:'json',
        data:{
            qty:qty,
            pageNo:pageNo,
        },
        success:function(obj){

            var data = obj.data;
            // console.log(data)
            
            function render(){
                var res = data.map(function(item){
                    return `<li class="goods" data-id="${item.id}">
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
                // 点击商品 将当前商品id传到详情页
                $goodslist.on('click','li',function(){
                    var params = 'id='+ data[$(this).index()].id;
                    location.href = 'goods.html?' + params;
                })
            }   
            render();


            // 分页
            let pageLen = Math.ceil(obj.total/obj.qty);
            var page = document.querySelector('.page');
            for(var i=0;i<pageLen;i++){
                var span = document.createElement('span');
                span.innerText = i+1;

                // 高亮当前分页
                if(i===obj.pageNo-1){
                    span.className = 'activel';
                }
                page.appendChild(span);
            }

            // 利用事件委托实现分页切换
            page.onclick = function(e){
                if(e.target.parentNode.className === 'page'){
                    // 得到点击的分页
                    pageNo = e.target.innerText;


                    $.ajax({
                        url:'../api/goodslist.php',
                        dataType:'json',
                        data:{
                            qty:qty,
                            pageNo:pageNo,
                        },
                        success:function(str){
                            var data = str.data;
                            console.log(data)
                            var res = data.map(function(item){
                                return `<li class="goods" data-id="${item.id}">
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

                            var ospan =document.querySelectorAll('.page span');
                            for(var i=0;i<pageLen;i++){

                                if(i===str.pageNo-1){
                                    $('.page span').removeClass('activel');
                                    ospan[i].className = 'activel';
                                }
                            }

                            // 点击商品 将当前商品id传到详情页
                            $goodslist.on('click','li',function(){
                                var params = 'id='+ ( data[$(this).index()].id ) ;
                                console.log(params)
                                location.href = 'goods.html?' + params;
                            })
                        }
                    })
                }
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