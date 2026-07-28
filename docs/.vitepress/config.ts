import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  title: '剪映课程笔记',
  description: '系统整理影视飓风课程知识，打造属于自己的剪辑知识库',
  themeConfig: {
    // 强制使用深色主题
    appearance: 'dark',
    
    // 社交链接（可选，暂时不启用）
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/你的用户名' }
    // ],
    
    // 导航栏（可选，暂时不启用）
    // nav: [
    //   { text: '首页', link: '/' },
    //   { text: '第一课', link: '/jyproclass1' },
    // ],
    
    // 侧边栏（可选，暂时不启用）
    // sidebar: [
    //   {
    //     text: '课程目录',
    //     items: [
    //       { text: '第一课', link: '/jyproclass1' },
    //       { text: '第二课', link: '/jyproclass2' },
    //       { text: '第三课', link: '/jyproclass3' },
    //     ]
    //   }
    // ]
  }
})