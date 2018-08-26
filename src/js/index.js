
jQuery($=>{
    $.fn.carousel = function(options){
        let $opt = {
            conf : {
                auto : true,
                needIndexNum : true,
                animateTiming : 2000,
                autoTiming : 3000,
                direction : 'right',
            }
        }

        $.extend(true,$opt,options);
        let $this = $(this);
        let $el = new Object();
        let {conf:$conf} = $opt;

        $.each($opt.el,(index, el) => {
            $el[index] = $this.find(el);
        });
        
        let $imgsNum = $el.imgsContainer.find('li').length;
        for (let i = 1; i <= $imgsNum; i++) {
            $el.indexContainer.append($(`<li></li>`));
        }

        let $index  = $el.indexContainer.find('li');
        let $images = $el.imgsContainer.find('li');
        
        $index.eq(0).addClass('current-index');
        $images.eq(0).fadeIn($conf.animateTiming);

        let getCurrentIndex = () => $el.indexContainer.find('.current-index');
        
        let getPrevElement = () => {
            let currentIndex = getCurrentIndex();
            let prev_ = currentIndex.prev();
            return prev_.length ? prev_ : $index.eq($index.length - 1);
        };
        
        let getNextElement = () => {
            let currentIndex = getCurrentIndex();
            let next_ = currentIndex.next();
            return next_.length ? next_ : $index.eq(0);
        };

        
        let changeImage = (next) => {
            let currentIndex = getCurrentIndex();
            if (currentIndex.index() === next.index()) return;
            $images
            .stop().fadeOut($conf.animateTiming)
            .eq(next.index())
            .stop().fadeIn($conf.animateTiming);
            currentIndex.removeClass('current-index');
            next.addClass('current-index');
        }

        
        $el.prevBtn.on('click', function() {
            changeImage(getPrevElement());
        });

        $el.nextBtn.on('click', function() {
            changeImage(getNextElement());
        });
        
        $index.on('click', function(){
            changeImage($(this));
        });

        if ($conf.auto) {
            let $timer;

            let autoCarousel = () => {
                $timer = setInterval(() => {
                    if ($conf.direction === 'right'){
                        changeImage(getNextElement());
                    } 
                    if ($conf.direction === 'left'){
                        changeImage(getPrevElement());
                    } 
                }, $conf.autoTiming);
            }
            autoCarousel();
            
            $this.on('mouseenter', function(event) {
                if ($timer){
                    clearInterval($timer);
                } 
            });
            
            $this.on('mouseleave', function(event) {
                autoCarousel();
            });
        }
    }


    $('#carousel').carousel({
        el:{
            imgsContainer: '.carousel', 
            prevBtn: '.carousel-prev', 
            nextBtn: '.carousel-next', 
            indexContainer: '.carousel-index', 
        }
    });
})
