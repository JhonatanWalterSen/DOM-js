const d = document,
    w = window;
export default  function scrollTopButtom(btn) {
    const $scrollBtn = d.querySelector(btn);

    w.addEventListener('scroll' ,() => {
        let scrollTop = d.documentElement.scrollTop;
        if (scrollTop > 600) {
            $scrollBtn.classList.remove('hidden')
        } else {
            $scrollBtn.classList.add('hidden')
        }
    })

    d.addEventListener('click' ,e =>{
        if (e.target.matches(btn)) {
            w.scrollTo({
                behavior: 'smooth',
                top:0
            })
        }
    } )
}