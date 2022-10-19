import VueRouter from 'vue-router'
import About from '../pages/About'
import Home from '../pages/Home'
import Message from "../pages/Message";
import News from '../pages/News'
import Detail from '../pages/Detail'


const router = new VueRouter({
    routes: [
        {
            //path 里面的类容 尽量小写
            name: 'about',
            path: '/About',
            component: About,
            meta: { title: "About" }
        },
        {
            path: '/Home',
            component: Home,
            meta: { title: "Home" },
            children: [
                {
                    path: 'News',
                    component: News,
                    meta: { isAuth: 'true' },
                    children: [
                        {
                            name: 'detail',
                            path: 'Detail',
                            component: Detail,
                            props($route) {
                                return {
                                    id: $route.query.id,
                                    title: $route.query.title,
                                    id2: $route.params.id2,
                                    title2: $route.params.title2,
                                }
                            }
                        }

                    ]
                },
                {
                    path: 'Message',
                    component: Message,
                    meta: { isAuth: true, title: 'Message' },
                    //独享
                    beforeEnter: (to, from, next) => {
                        if (to.meta.isAuth) {
                            if (localStorage.getItem('A') === 'B') {
                                next()
                            } else {
                                alert('储存的结果不对,无权利查看')
                            }
                        } else {
                            next()
                        }
                    }
                }
            ]

        }
    ],
})
//全局
/* router.beforeEach((to, from, next) => {
    if (to.meta.isAuth) {
        if (localStorage.getItem('A') === 'B') {
            next()
        } else {
            alert('储存的结果不对,无权利查看')
        }
    } else {
        next()
    }
}) */
router.afterEach((to, from) => {
    document.title = to.meta.title || '默认显示'
})
export default router


