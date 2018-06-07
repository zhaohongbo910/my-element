
import { Dashboard } from 'view/Dashboard/Dashboard';


export const  sliderNav = [
    {
       isSubMenu:false, // 是否是子导航
       linkTo:'/app/dashboard', // 跳转链接
       icon:'el-icon-message', // icon 图标
       title:'Dashboard',     // 标题
       component:Dashboard,
       isShow:true,          // 是否显示
       subMenu:[]
    },
    {
       isSubMenu:false, // 是否是子导航
       linkTo:'/app/documentation', // 跳转链接
       icon:'el-icon-message', // icon 图标
       title:'Documentation',     // 标题
       isShow:true,          // 是否显示
       subMenu:[]
    },
    {
       isSubMenu:false, // 是否是子导航
       linkTo:'/Permission/index', // 跳转链接
       icon:'el-icon-message', // icon 图标
       title:'Permission',     // 标题
       isShow:true,          // 是否显示
       subMenu:[]
    },
    {  
       isSubMenu:true, // 是否是子导航  
       linkTo:'#',     // 跳转链接
       icon:'el-icon-message', // icon 图标
       title:'Dashboard',     // 标题
       isShow:true,          // 是否显示
       subMenu:[
           {
               isSubMenu:true, // 是否是子导航
               linkTo:'/', // 跳转链接    
               icon:'el-icon-message', // icon 图标
               title:'dobaslor',     // 标题
               isShow:true,     // 是否显示 
               subMenu:[]         
           },
           {
               isSubMenu:true, // 是否是子导航
               linkTo:'/', // 跳转链接
               icon:'el-icon-message', // icon 图标
               title:'dobaslor',    // 标题
               isShow:true,     // 是否显示 
               subMenu:[]         
           },
           
       ]
    },
  
]