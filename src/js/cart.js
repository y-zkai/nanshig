jQuery($=>{   

    // 获取cookie
    var goodslist = Cookie.get('goodslist');
    goodslist = JSON.parse(goodslist);

    // 商品信息写入购物车列表
    function render(){
        var res = goodslist.map((item,idx)=>{
            return `<tr data-guid="${item.id}">
                <td><input type="checkbox" /></td>
                <td><img src="${item.imgurl}" />${item.name}</td>
                <td class="sale">${item.sale}</td>
                <td >
                    <span class="jian">-</span>
                    <input type="text" value="${item.qty}" class="input"/>
                    <span class="jia">+</span>
                </td>
                <td class="ototal">${(item.sale*item.qty).toFixed(2)}</td>
                <td class="delet">删除</td>
            </tr>`
        }).join('');
        $('.table').html(res);

        var oototal = document.querySelectorAll('.ototal');
        var total = 0;
        for(var j=0;j<oototal.length;j++){
            total += oototal[j].innerHTML*1;
        }
        $('.total').html(total.toFixed(2));
    }
    render();

    var table = document.querySelector('.table');
    var input = document.querySelectorAll('.input');
    var jia = document.querySelectorAll('.jia');
    var jian = document.querySelectorAll('.jian');
    var sale = document.querySelectorAll('.sale');
    var total = document.querySelectorAll('.total');
    var ototal = document.querySelectorAll('.ototal');
    var delet = document.querySelectorAll('.delet');

    // 计算总价
    function all(){
        var total = 0;
        for(var j=0;j<ototal.length;j++){
            total += ototal[j].innerHTML*1;
        }
        $('.total').html(total.toFixed(2));
    }
    all();


    // 改变商品数量
    for(let i=0;i<jia.length;i++){
        jia[i].onclick = function(e){
            input[i].value++;
            ototal[i].innerHTML = (sale[i].innerHTML*input[i].value).toFixed(2);
            e.preventDefault();
            all();
        }
        jian[i].onclick = function(e){
            input[i].value--;
            if(input[i].value<1){
                input[i].value = 1;
            }
            ototal[i].innerHTML = (sale[i].innerHTML*input[i].value).toFixed(2);
            e.preventDefault();
            all();
        }
        input[i].oninput = function(){
            ototal[i].innerHTML = (sale[i].innerHTML*input[i].value).toFixed(2);
            all();
        }
    }
    
    // 删除添加商品
    table.onclick = function(e){
        e = e || window.event;
        var target = e.target || e.srcElement;
        if(target.className === 'delet'){
            var currentTr = target.parentNode;
            // 确定当前商品id
            var guid = currentTr.getAttribute('data-guid');
            // 遍历，找到当前商品在数组中的位置，删除
            for(var i=0;i<goodslist.length;i++){
                if(goodslist[i].id === guid){
                    goodslist.splice(i,1);
                    break;
                }
            }

            Cookie.set('goodslist',JSON.stringify(goodslist));
            // 重新计算总价，刷新页面
            var total = 0;
            for(var j=0;j<ototal.length;j++){
                total += ototal[j].innerHTML*1;
            }
            $('.total').html(total.toFixed(2));
            render();   
            
        }
    }

    var $checkbox = $('.table :checkbox');
    var $trs = $('.table tr');

    // 进入页面全部选中
    $('.table-cart :checkbox').prop('checked','checked');
    // 全选或不选
    $('#all').click(function(){
        $checkbox.prop('checked',this.checked)
    });

    // 复选框都被选中时，全选选中，否则全选不选中
    $checkbox.on('click',function(){
        var $checked = $checkbox.filter(':checked');
        $('#all').prop('checked',$checked.length === $checkbox.length);
    });

    

})