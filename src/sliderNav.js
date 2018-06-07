
export const  sliderNav = [
     
     {
        isSubMenu:false, // 是否是子导航
        linkTo:'/app/dashboard', // 跳转链接
        icon:'el-icon-message', // icon 图标
        title:'Dashboard',     // 标题
        component:'Home',
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
        isSubMenu:false, 
        linkTo:'/app/Icons', 
        icon:'el-icon-message', 
        title:'Icons',     
        isShow:true,        
        subMenu:[]
     },
     {
        isSubMenu:false, 
        linkTo:'/app/Permission', 
        icon:'el-icon-message', 
        title:'Permission',     
        isShow:true,        
        subMenu:[]
     },
     {  
        isSubMenu:true, 
        linkTo:'#',  
        icon:'el-icon-message', 
        title:'Components',  
        isShow:true,       
        subMenu:[
            {
                isSubMenu:false,
                linkTo:'/app/Components/Tinymce',  
                icon:'el-icon-message', 
                title:'Tinymce',  
                isShow:true,   
                subMenu:[]         
            },
            {
                isSubMenu:false, 
                linkTo:'/app/Components/Markdown', 
                icon:'el-icon-message',
                title:'Markdown',  
                isShow:true,  
                subMenu:[]         
            },
            {
                isSubMenu:false, 
                linkTo:'/app/Components/json', 
                icon:'el-icon-message',
                title:'JSON Editor',  
                isShow:true,  
                subMenu:[]         
            },
            {
                isSubMenu:false, 
                linkTo:'/app/Components/dnd', 
                icon:'el-icon-message',
                title:'Dnd List',  
                isShow:true,  
                subMenu:[]         
            },
            {
                isSubMenu:false, 
                linkTo:'/app/Components/SplitPane', 
                icon:'el-icon-message',
                title:'SplitPane',  
                isShow:true,  
                subMenu:[]         
            },
            {
                isSubMenu:false, 
                linkTo:'/app/Components/Upload', 
                icon:'el-icon-message',
                title:'Avatar Upload',  
                isShow:true,  
                subMenu:[]         
            },
            {
                isSubMenu:false, 
                linkTo:'/app/Components/Dropzone', 
                icon:'el-icon-message',
                title:'Dropzone',  
                isShow:true,  
                subMenu:[]         
            },
            {
                isSubMenu:false, 
                linkTo:'/app/Components/Sticky', 
                icon:'el-icon-message',
                title:'Sticky',  
                isShow:true,  
                subMenu:[]         
            },
            {
                isSubMenu:false, 
                linkTo:'/app/Components/Sticky', 
                icon:'el-icon-message',
                title:'Sticky',  
                isShow:true,  
                subMenu:[]         
            },
            {
                isSubMenu:false, 
                linkTo:'/app/Components/CountTo', 
                icon:'el-icon-message',
                title:'CountTo',  
                isShow:true,  
                subMenu:[]         
            },
            {
                isSubMenu:false, 
                linkTo:'/app/Components/Mixin', 
                icon:'el-icon-message',
                title:'Mixin',  
                isShow:true,  
                subMenu:[]         
            },
            {
                isSubMenu:false, 
                linkTo:'/app/Components/BackToTop', 
                icon:'el-icon-message',
                title:'BackToTop',  
                isShow:true,  
                subMenu:[]         
            },
            {
                isSubMenu:false, 
                linkTo:'/app/Components/Dialog', 
                icon:'el-icon-message',
                title:'Drag Dialog',  
                isShow:true,  
                subMenu:[]         
            }
        ]
     },
   
]