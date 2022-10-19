import VueRouter from 'vue-router'
import About from '../pages/About'
import Home from '../pages/Home'
import Message from "../pages/Message";
import News from '../pages/News'
import Detail from '../pages/Detail'

export default new VueRouter({
    routes: [
        {
            //path 里面的类容 尽量小写
            name: 'about',
            path: '/About',
            component: About
        },
        {
            path: '/Home',
            component: Home,
            children: [
                {
                    path: 'News',
                    component: News,
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

                }
            ]

        }
    ]

})


