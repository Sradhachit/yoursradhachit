    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    document.querySelectorAll('.reveal').forEach((el, i) => {
      el.style.transitionDelay = `${(i % 3) * 70}ms`;
      io.observe(el);
    });

    
    document.getElementById('year').textContent = new Date().getFullYear();

    
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-msg');
    let tt;
    document.querySelectorAll('a[data-placeholder]').forEach((a) => {
      a.addEventListener('click', (e) => {
        e.preventDefault();
        toastMsg.textContent = 'Placeholder link — add your real URL in the HTML';
        toast.classList.add('show');
        clearTimeout(tt);
        tt = setTimeout(() => toast.classList.remove('show'), 2600);
      });
    });