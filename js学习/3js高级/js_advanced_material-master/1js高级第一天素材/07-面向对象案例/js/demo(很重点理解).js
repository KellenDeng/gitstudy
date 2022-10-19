

//这里面的代码认真看 多看几遍   注释的代码也认真看！！ 多看几遍
var that;
class Tab {
    constructor() {
        that = this;
        this.main = document.querySelector('#tab');
        this.add = this.main.querySelector('.tabadd');
        this.ul = this.main.querySelector('.fisrstnav ul:first-child');
        this.fsection = this.main.querySelector('.tabscon');
        this.init();
    }

    //专门注册事件   
    init() {
        this.updateNode();
        this.add.addEventListener('click', this.addTab);
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].addEventListener('click', this.toggleTab);
            this.remove[i].onclick = this.removeTab;
            this.spans[i].ondblclick = this.editTab;
            this.sections[i].ondblclick = this.editTab;
        }

    }
    // 因为我们动态添加元素 需要从新获取对应的元素
    updateNode() {
        this.lis = this.main.querySelectorAll('li');
        this.remove = this.main.querySelectorAll('.icon-guanbi');
        this.spans = this.main.querySelectorAll('.fisrstnav li span:first-child');
        this.sections = this.main.querySelectorAll('section');
    }

    //1.切换功能
    toggleTab() {
        that.clearClass();
        this.className = 'liactive';
        that.sections[this.index].classList.add('conactive');
        // that.sections[this.index].className = 'conactive';

    }
    //!!清除li和section 的两种方法
    clearClass() {
        //！！！！！！！想想为什么不能用这两行代码 在删除功能会出bug！！！！
        // document.querySelector('.liactive').className = '';
        // document.querySelector('.conactive').classList.remove('conactive');
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].className = '';
            this.sections[i].className = '';
        }

    }
    //2.添加功能
    addTab() {
        that.clearClass();
        var random = Math.random();
        var li = '<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>';
        var section = '<section class="conactive">测试 ' + random + '</section>';
        //这里的li 和section 创建时，就添加了liactive和conactive！！！！！！

        that.ul.insertAdjacentHTML('beforeend', li);
        that.fsection.insertAdjacentHTML('beforeend', section);
        that.init();  //想想为什么不写that.updateNode()

    }
    //3.删除功能
    removeTab(e) {
        e.stopPropagation();
        var index = this.parentNode.index;
        that.lis[index].remove();
        that.sections[index].remove();
        that.init();
        if (document.querySelector('.liactive')) return;
        index--;
        that.lis[index] && that.lis[index].click();

    }
    //4.修改功能
    editTab() {
        var str = this.innerHTML;
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        this.innerHTML = '<input type="text" />';
        var input = this.children[0];
        input.value = str;
        input.select();
        input.onblur = function () {
            this.parentNode.innerHTML = this.value;
        }
        input.onkeyup = function (e) {    //绑定事件
            if (e.key == 'Enter') {
                // 手动调用表单失去焦点事件  不需要鼠标离开操作  要用手动调用时，不要加on
                this.blur();
            }
        }

    }
}
new Tab();  //只要new了 对象 就会自动constructor开始执行
