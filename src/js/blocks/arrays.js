
function removeClass(obj, cls) {
    let classes = obj.className ? obj.className.split(' ') : [];

    for (let i = 0; i < classes.length; i++) {
        if (classes[i] === cls) {
            classes.splice(i, 1);
            i--;
        }
    }

    obj.className = classes.join(' ');
}

let obj = {
    className: 'my menu menu'
};

removeClass(obj, 'menu');
console.log(obj);