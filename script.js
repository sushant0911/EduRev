document.addEventListener('DOMContentLoaded', () => {
    const loginContainer = document.querySelector('.login-container');
    const joinNowContainer = document.querySelector('.join-now-container');
    const loginBtn = document.getElementById('loginBtn');
    const joinNowBtn = document.getElementById('joinNowBtn');
    const sidebarLoginBtn = document.getElementById('sidebarLoginBtn');
    const sidebarJoinNowBtn = document.getElementById('sidebarJoinNowBtn');
    const sidebar = document.getElementById('sidebar');
    const hamburgerIcon = document.querySelector('.fa-bars');
    const logo = document.querySelector('.logo');

    // In Nav Bar
    // Function to show login popup
    loginBtn.addEventListener('click', () => {
        loginContainer.style.display = 'grid';
        joinNowContainer.style.display = 'none';
    });

    // Function to show join now popup
    joinNowBtn.addEventListener('click', () => {
        joinNowContainer.style.display = 'grid';
        loginContainer.style.display = 'none';
    });
    
    // In Side Bar
    // Function to show login popup
    sidebarLoginBtn.addEventListener('click', () => {
        loginContainer.style.display = 'grid';
        joinNowContainer.style.display = 'none';
    });

    // Function to show join now popup
    sidebarJoinNowBtn.addEventListener('click', () => {
        joinNowContainer.style.display = 'grid';
        loginContainer.style.display = 'none';
    });

    // Close the popups when clicking outside the popup
    loginContainer.addEventListener('click', (e) => {
        if (e.target === loginContainer) {
            loginContainer.style.display = 'none';
        }
    });

    joinNowContainer.addEventListener('click', (e) => {
        if (e.target === joinNowContainer) {
            joinNowContainer.style.display = 'none';
        }
    });

    hamburgerIcon.addEventListener('click', () => {
        // Toggle the sidebar
        sidebar.classList.toggle('active');
        logo.style.display = 'none';
    });

    // Close sidebar when clicking outside of it
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !hamburgerIcon.contains(e.target)) {
            sidebar.classList.remove('active');
            logo.style.display = 'flex';
        }
    });
});