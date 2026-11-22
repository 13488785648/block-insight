/* ============================================================
   墨读 · 站点配置
   ------------------------------------------------------------
   这里放所有"会被你经常改"的东西：站名、首页文案、页脚、
   内容源（GitHub 仓库）。
   改完保存，浏览器刷新即生效，不用动 MDReader.html。

   注意：仓库必须是公开的，否则别人打不开。
   ============================================================ */

window.MD_SITE = {

  /* ---------- 站点标识 ---------- */
  site: {
    mark:  '兔',                          // 左上角小方块里的字（一个字）
    name:  'MrTu',                        // 站点名
    sub:   'BlockInsight',                    // 站名旁边的小字
    title: 'MrTu · BlockInsight',             // 浏览器标签页标题
    footer: 'MrTu · 积木学习法拆解和随笔', // 页脚左侧文案
    themeColor: { light: '#faf7f0', dark: '#12110e' }
  },

  /* ---------- 首页大标题区 ---------- */
  hero: {
    eyebrow: 'Field Notes & Essays',     // 标题上方的小字
    title:   '积木学习法<em>拆解</em>和<em>随笔</em>',  // 可用 <br> <em>
    desc:    'MrTu的随笔文集，Substack：BlockInsight，公众号：兔小师，知乎：兔小师'
  },

  /* ---------- 内容源：GitHub ---------- */
  /* 部署在 GitHub Pages 上时，这两项留空即可 —— 页面会从地址
     （用户名.github.io/仓库名/）自动认出仓库。
     只有在本地双击 html 预览时，才需要填上。 */
  github: {
    owner:  '',        // 你的 GitHub 用户名，例如 'tuxiaoshi'（Pages 上可留空）
    repo:   '',        // 仓库名（必须公开），例如 'MDReader'（Pages 上可留空）
    branch: 'main',    // 分支，例如 'main' 或 'master'，写错会自动尝试
    root:   'content'  // 文章根目录，文章按 content/栏目/文章/index.md 存放
  },

  /* ---------- 列表页文案 ---------- */
  ui: {
    latestLabel: 'Latest',               // 最新文章卡上的小标签
    loadingText: '正在读取仓库…'
  }
};
