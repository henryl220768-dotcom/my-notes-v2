import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '剪映课程笔记',
  description: '系统整理影视飓风课程知识，打造属于自己的剪辑知识库',
  // 明确告诉 VitePress 要处理 index.md
  srcInclude: ['index.md', 'jyproclass2.md', 'jyproclass3.md'],
  themeConfig: {
    appearance: 'dark',
  }
})
