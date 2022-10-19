window.addEventListener('load', function (e) {
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var focus = document.querySelector('.focus');
    var ol = document.querySelector('.circle');
    var focusWidth = focus.offsetWidth;
    //显示隐藏 左右箭头
    focus.addEventListener('mouseenter', function () {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
        timer = null;

    });
    focus.addEventListener('mouseleave', function () {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        timer = setInterval(function () {
            //手动调用点击事件
            arrow_r.click();
        }, 3000);
    });
    //创建小圆点 和点击小圆点后， 调到对应的图片。 方法和前面的一个tab栏 然后跳到对应界面的案例类似
    var ul = focus.children[2];
    console.log(ul.children.length);  //输出为4
    for (i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        li.setAttribute('index', i);
        ol.appendChild(li);
        li.addEventListener('click', function () {  //延迟函数 ，要点击了才执行  后面的代码已经执行完了
            for (i = 0; i < ol.children.length; i++) { // 想想为什么circle不可以换成ul
                ol.children[i].className = '';
            }
            this.className = 'current';
            var index = this.getAttribute('index');
            num = index; //一定要仔细理解为什么要写这两行代码！！！！
            circle = index;  //
            console.log(ul.children.length); //输出为 5
            console.log(ol.children.length);;  //输出为4
            animatepractice(ul, -index * focusWidth);

        })

    }
    ol.children[0].className = 'current';
    //点击右箭头
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    var num = 0;
    var circle = 0;
    var flag = true;
    arrow_r.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;  //想想为什么不能加else
            animatepractice(ul, -num * focusWidth, function () {
                flag = true;
            });
            circle++;
            if (circle == ol.children.length) {
                circle = 0;
            }
            //小原点排他思想函数
            circleChange();
        }
    })
    //点击左箭头
    arrow_l.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * focusWidth + 'px';

            }
            num--;  //想想为什么不能加else
            animatepractice(ul, -num * focusWidth, function () {
                flag = true;
            });
            circle--;
            if (circle < 0) {
                circle = ol.children.length - 1;
            }
            //小原点排他思想函数
            circleChange();
        }
    })
    //自动播放轮播图
    var timer = setInterval(function () {
        arrow_r.click();
    }, 3000)


    //小原点排他思想函数
    function circleChange() {
        for (i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
    }
})