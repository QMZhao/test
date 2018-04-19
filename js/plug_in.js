
/*
* 判断用户是否引入了jquery库，并抛出错误提示
* */
if (typeof jQuery !== "function") {
    throw new Error("plug_in依赖于jquery，必须引入jquery");
} else {
    /*
    * plug of dropdown
    * */
    $(()=>{
        $(".dropdown:has([data-toggle=dropdown])").hover(function () {
           $(this).children(".dropdown-menu").toggleClass("in");
            console.log($(this));
        })
        console.log(1);
    })

    /*
    * plug of tabs
    * */
    $(()=>{
        $(".tabs:has([data-toggle=tab])").on("click","[data-toggle=tab]",e=>{
            console.log(2);
            var $tar = $(e.target);
            console.log($tar);
            //判断当前点击的对象a的父元素li是否有active的class样式
            if (!$tar.parent().is(".active")) {
                $tar.parent().addClass("active").siblings().removeClass("active");
            //创建一个变量保存a标签内返回的href里面的值
            var id = $tar.attr("href");
                console.log(id);
            $(id).addClass("active").siblings().removeClass("active");
            }
        })
    })
    /*
    * plug of accordion
    * */
    jQuery.fn.myaccordion = function () {
        //侵入方式添加class样式
        //给当前id=my-accordion元素添加class accordion
        this.addClass("accordion");
        //为父元素下奇数位置的直接子元素添加class为title的样式
        this.children(":nth-child(2n+1)").addClass("title");
        //为父元素下偶数位置的直接子元素添加content和fade class
        this.children(":nth-child(2n)").addClass("content fade");
        //再为父元素下第2个直接子元素添加class in
        this.children(":nth-child(2)").addClass("in");
        //绑定点击事件
        this.on("click",".title",e=> {
            var $tar = $(e.target);
           $tar.next(".content").toggleClass("in").siblings().removeClass("in")
        })
    }
    /*
    * plug of
    * */
}