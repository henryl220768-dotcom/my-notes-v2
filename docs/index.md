---
layout: false
---
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>剪映课程笔记</title>
  <!-- 引入 Google Font (Inter 和 Noto Sans SC) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400;14..32,500;14..32,600&family=Noto+Sans+SC:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    /* -------------------- 全局重置 & 字体 -------------------- */
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body, html {
      width: 100%;
      min-height: 100vh;
      background: #0A0A0A;
      font-family: 'Inter', 'Noto Sans SC', -apple-system, system-ui, sans-serif;
      color: #FFFFFF;
      overflow-x: hidden;
    }

    /* -------------------- 主容器 (100vh + 滚动优化) -------------------- */
    .landing {
      position: relative;
      width: 100%;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 2rem 1.5rem;
      background: #0A0A0A;
      /* 模拟极浅网格，透明度5% */
      background-image: 
        linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
      background-size: 60px 60px;
    }

    /* 光晕层 (绝对定位) */
    .glow {
      position: absolute;
      border-radius: 50%;
      filter: blur(120px);
      pointer-events: none;
      z-index: 0;
    }
    .glow-blue {
      width: 400px;
      height: 400px;
      background: rgba(59, 130, 246, 0.15); /* 透明度20% -> 0.2, 调整至视觉舒适 */
      top: -80px;
      left: -80px;
    }
    .glow-purple {
      width: 500px;
      height: 500px;
      background: rgba(139, 92, 246, 0.14); /* 透明度18% */
      bottom: -120px;
      right: -120px;
    }

    /* -------------------- 内容容器 (z-index 置于光晕之上) -------------------- */
    .hero {
      position: relative;
      z-index: 10;
      max-width: 1000px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 1.8rem;
      /* 动画：整体淡入上浮 (由JS触发) */
      opacity: 0;
      transform: translateY(20px);
      animation: fadeInUp 1s ease forwards;
    }

    /* 子元素延迟动画 (通过 animation-delay 实现) */
    .hero-logo { animation-delay: 0s; }
    .hero-title { animation-delay: 0.05s; }
    .hero-subtitle { animation-delay: 0.2s; }
    .hero-button { animation-delay: 0.35s; }
    .hero-cards { animation-delay: 0.5s; }

    @keyframes fadeInUp {
      to { opacity: 1; transform: translateY(0); }
    }

    /* 圆形 Logo */
    .logo-circle {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 72px;
      height: 72px;
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.10);
      border-radius: 50%;
      backdrop-filter: blur(4px);
      font-size: 28px;
      color: #fff;
      transition: transform 0.2s ease;
      margin-bottom: 0.2rem;
    }
    .logo-circle:hover {
      transform: scale(1.05);
    }

    /* 标题 */
    .hero-title {
      font-size: clamp(44px, 8vw, 72px);
      font-weight: 600;
      letter-spacing: -0.02em;
      line-height: 1.1;
      background: linear-gradient(135deg, #FFFFFF 0%, #A1A1AA 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    /* 副标题 */
    .hero-subtitle {
      font-size: clamp(16px, 2.2vw, 22px);
      font-weight: 400;
      color: #A1A1AA;
      max-width: 520px;
      line-height: 1.6;
      margin-top: -0.2rem;
    }

    /* 按钮 */
    .btn-primary {
      display: inline-block;
      padding: 0 40px;
      height: 52px;
      line-height: 52px;
      font-size: 18px;
      font-weight: 500;
      color: #FFFFFF;
      background: #3B82F6;
      border-radius: 999px;
      text-decoration: none;
      box-shadow: 0 4px 20px rgba(59, 130, 246, 0.25);
      transition: all 0.25s ease;
      margin-top: 0.2rem;
      border: none;
      cursor: pointer;
      min-width: 180px;
    }
    .btn-primary:hover {
      transform: scale(1.04);
      background: #2563EB;
      box-shadow: 0 8px 30px rgba(59, 130, 246, 0.40);
    }

    /* 课程卡片 (三列) */
    .cards-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
      width: 100%;
      max-width: 720px;
      margin-top: 1rem;
    }
    .card-item {
      display: block;
      background: rgba(255,255,255,0.04);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 16px;
      padding: 1.5rem 1rem;
      text-decoration: none;
      color: #FFFFFF;
      transition: all 0.25s ease;
      text-align: left;
    }
    .card-item:hover {
      transform: translateY(-4px);
      background: rgba(255,255,255,0.08);
      border-color: rgba(59, 130, 246, 0.30);
      box-shadow: 0 8px 25px rgba(0,0,0,0.4);
    }
    .card-item .card-num {
      font-size: 13px;
      font-weight: 500;
      color: #A1A1AA;
      letter-spacing: 0.03em;
    }
    .card-item h3 {
      font-size: 20px;
      font-weight: 600;
      margin: 0.3rem 0 0.1rem;
    }
    .card-item p {
      font-size: 15px;
      color: #A1A1AA;
      margin: 0;
    }

    /* 底部 Footer */
    .footer {
      position: relative;
      z-index: 10;
      margin-top: 3rem;
      padding-top: 2rem;
      font-size: 14px;
      color: #52525B;
      text-align: center;
      border-top: 1px solid rgba(255,255,255,0.04);
      width: 100%;
      max-width: 720px;
    }

    /* -------------------- 响应式适配 -------------------- */
    @media (max-width: 640px) {
      .cards-grid {
        grid-template-columns: 1fr;
        gap: 0.8rem;
        max-width: 360px;
      }
      .card-item {
        padding: 1rem 1.2rem;
        text-align: center;
      }
      .glow-blue { width: 280px; height: 280px; top: -60px; left: -60px; }
      .glow-purple { width: 320px; height: 320px; bottom: -80px; right: -80px; }
      .btn-primary { min-width: 160px; height: 48px; line-height: 48px; font-size: 16px; }
    }
  </style>
</head>
<body>
  <div class="landing">
    <!-- 光晕 -->
    <div class="glow glow-blue"></div>
    <div class="glow glow-purple"></div>

    <!-- 主要内容 -->
    <div class="hero">
      <!-- Logo -->
      <div class="logo-circle hero-logo">✂</div>

      <!-- 标题 -->
      <h1 class="hero-title">剪映课程笔记</h1>

      <!-- 副标题 -->
      <p class="hero-subtitle">
        系统整理影视飓风课程知识，打造属于自己的剪辑知识库。
      </p>

      <!-- 按钮 -->
      <a href="/jyproclass1" class="btn-primary">开始学习</a>

      <!-- 课程卡片 -->
      <div class="cards-grid">
        <a href="/jyproclass1" class="card-item">
          <div class="card-num">第一课</div>
          <h3>影视基础</h3>
          <p>界面与核心操作</p>
        </a>
        <a href="/jyproclass2" class="card-item">
          <div class="card-num">第二课</div>
          <h3>剪辑节奏</h3>
          <p>音乐卡点与转场</p>
        </a>
        <a href="/jyproclass3" class="card-item">
          <div class="card-num">第三课</div>
          <h3>调色进阶</h3>
          <p>LUT与风格化</p>
        </a>
      </div>
    </div>

    <!-- Footer -->
    <div class="footer">
      © 2026 · 个人学习笔记
    </div>
  </div>
</body>
</html> 
