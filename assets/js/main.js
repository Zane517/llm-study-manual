/* ===== 大模型系统学习手册 · 导航脚本 ===== */
(function(){
  var nav = document.getElementById('nav');
  if(!nav) return;

  // 检测当前语言
  var html = document.documentElement;
  var isEN = html.lang === 'en';

  var items = isEN ? [
    {t:'1 · Fundamentals & How LLMs Work', id:'ch1'},
    {t:'2 · Architecture & Attention', id:'ch2'},
    {t:'3 · Pretraining & Emergence', id:'ch3'},
    {t:'4 · Alignment & Safety', id:'ch4'},
    {t:'5 · Inference & Deployment', id:'ch5'},
    {t:'6 · Fine-tuning & PEFT', id:'ch6'},
    {t:'7 · Prompt Engineering', id:'ch7'},
    {t:'8 · RAG', id:'ch8'},
    {t:'9 · AI Agents', id:'ch9'},
    {t:'10 · Evaluation & Observability', id:'ch10'},
    {t:'11 · Open-Source Models', id:'ch11'},
    {t:'12 · Learning Roadmap & Resources', id:'ch12'}
  ] : [
    {t:'1 · 基础概念与原理', id:'ch1'},
    {t:'2 · 架构与注意力', id:'ch2'},
    {t:'3 · 预训练与涌现', id:'ch3'},
    {t:'4 · 对齐与安全', id:'ch4'},
    {t:'5 · 推理与部署', id:'ch5'},
    {t:'6 · 微调与 PEFT', id:'ch6'},
    {t:'7 · 提示词工程', id:'ch7'},
    {t:'8 · RAG 检索增强', id:'ch8'},
    {t:'9 · AI Agent', id:'ch9'},
    {t:'10 · 评估与观测', id:'ch10'},
    {t:'11 · 主流开源模型', id:'ch11'},
    {t:'12 · 学习路线与资源', id:'ch12'}
  ];

  items.forEach(function(it){
    var a=document.createElement('a');
    a.href='#'+it.id; a.textContent=it.t;
    a.addEventListener('click',function(){
      var links=nav.querySelectorAll('a');
      links.forEach(function(x){x.classList.remove('active')});
      a.classList.add('active');
      // 移动端：点击导航后自动收起侧边栏
      var sidebar = document.querySelector('.sidebar');
      if(sidebar && window.innerWidth <= 820){
        sidebar.classList.remove('open');
      }
    });
    nav.appendChild(a);
  });

  // 移动端：点击 brand 区域展开/收起侧边栏
  var brand = document.querySelector('.sidebar .brand');
  var sidebar = document.querySelector('.sidebar');
  if(brand && sidebar){
    brand.addEventListener('click', function(){
      if(window.innerWidth <= 820){
        sidebar.classList.toggle('open');
      }
    });
  }

  // 滚动时高亮当前章节
  var sections = document.querySelectorAll('section[ID]');
  var navLinks = nav.querySelectorAll('a');
  function onScroll(){
    var scrollY = window.scrollY + 100;
    sections.forEach(function(sec){
      var top = sec.offsetTop;
      var bottom = top + sec.offsetHeight;
      if(scrollY >= top && scrollY < bottom){
        var id = sec.id;
        navLinks.forEach(function(link){
          if(link.getAttribute('href') === '#'+id){
            link.classList.add('on');
          } else {
            link.classList.remove('on');
          }
        });
      }
    });
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();
})();