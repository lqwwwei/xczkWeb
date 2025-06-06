// /static/js/load-breadcrumb.js
const navConfig = {
  // 产品中心分支
  'physicalSystem.html': {
    parent: { name: '产品中心', path: '/products' },
    current: '智慧物联系统'
  },
  'USQualityControl.html': {
    parent: { name: '产品中心', path: '/products' },
    current: '超声质控'
  },
  'quipmentLifecycle.html': {
    parent: { name: '产品中心', path: '/products' },
    current: '全生命周期'
  },
  'logistics.html': {
    parent: { name: '产品中心', path: '/products' },
    current: '智慧后勤'
  },

  // 案例中心分支
  'sanMing.html': {
    parent: { name: '案例中心', path: '/cases' },
    current: '三明医院案例'
  },
  'case2.html': {
    parent: { name: '案例中心', path: '/cases' },
    current: '区域平台案例'
  },

  // 直接一级栏目
  'partners.html': { current: '合作伙伴' },
  'aboutUs.html': { current: '关于我们' },
  'connect.html': { current: '联系我们' }
};

$(function(){
    $("#breadcrumb-placeholder").load("/static/partials/bread.html", function() {
        const fileName = window.location.pathname.split('/').pop();
        const config = navConfig[fileName];
        
        const $list = $('.breadcrumb-list');
        
        // 添加中间导航项
        if(config.parent) {
            $list.append(`
                <span class="separator">></span>
                <a href="${config.parent.path}" class="breadcrumb-item">
                    ${config.parent.name}
                </a>
                <span class="separator">></span>
            `);
        } else if(config.current !== '合作伙伴' && config.current !== '关于我们' && config.current !== '联系我们') {
            // 直接一级栏目自动添加分隔符
            $list.append(`<span class="separator">></span>`);
        }
        
        // 添加当前页
        $list.append(`
            <span class="breadcrumb-item active">${config.current}</span>
        `);
    });
});