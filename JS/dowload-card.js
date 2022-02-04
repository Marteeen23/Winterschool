delay = t => new Promise(resolve => setTimeout(resolve, t));

Promise.delay = (t, fn) => delay(t).then(fn);

Promise.prototype.delay = (function(t, fn) {
    return this.then(() => Promise.delay(t, fn));
});

window.onload = () => {
    let btn_list = document.getElementsByClassName('btn');
    Promise.delay(300, () => {
            btn_list[0].classList.add('active');
        })
        .delay(300, () => {
            btn_list[1].classList.add('active');
        })
        .delay(300, () => {
            btn_list[2].classList.add('active');
        })
        .delay(300, () => {
            btn_list[3].classList.add('active');
        });



}