
function closeAd() {    
    var adSidebar = document.querySelector('.ad-sidebar');  
    var closeAdButton = document.getElementById('close-ad');  
  
    // 隐藏广告栏和叉叉按钮  
    adSidebar.style.display = 'none';  
    closeAdButton.style.display = 'none';  
  
    // 阻止事件冒泡，防止点击叉叉时触发广告链接的点击事件  
    event.stopPropagation();  
  
    // 阻止默认行为，例如，防止点击时自动导航  
    event.preventDefault();  
    return false; // 确保不执行任何后续操作  
}  

  
// goToPage 函数保持不变，用于其他非广告栏的导航  
function toggleDropdown() {  
    var dropdown = document.getElementById("dropdown");  
    dropdown.classList.toggle("show");  
} 
  
function goToPage(page) {   
    console.log('将跳转到 ' + page + ' 页面，请在此处添加跳转逻辑');  
    // 使用 window.location.href = '目标URL'; 来实现跳转  
}