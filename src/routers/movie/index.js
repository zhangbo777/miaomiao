export default {
    path : '/movie',
    component : () => import('@/views/Movie'),
    children:[
        {
            path:'nowPlaying',
            component : () => import('@/components/NowPlaying')
        },
        {
            path:'coomingSoon',
            component:()=>import('@/components/CoomingSoon')
        },
        {
            path:'city',
            component:()=>import('@/components/City')
        },
        {
            path:'search',
            component:()=>import('@/components/Search')
        },
        {
            path:'/movie',
            redirect : '/movie/nowPlaying'
        }
    ]
}