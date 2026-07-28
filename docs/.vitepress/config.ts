import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '剪映课程笔记',
  description: '系统整理影视飓风课程知识，打造属于自己的剪辑知识库',
  
  // 关键配置：显式指定所有要渲染的页面
  rewrites: {
    'index.md': 'index.html',
    'jyproclass1.md': 'jyproclass1.html',
    'jyproclass2.md': 'jyproclass2.html',
    'jyproclass3.md': 'jyproclass3.html',
  },

  themeConfig: {
    appearance: 'dark',
  }
})