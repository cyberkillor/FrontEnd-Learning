let array:Array<any> = [];
let list = [true, true, 1, 0, null, undefined, '', '1', array, array, NaN, NaN];

function delEl(l: Array<any>) {
    let i: number;
    let tmp = list[0];
    for(i = 1; i < l.length; i++) {
        if(tmp === list[i]) {
            l.splice(i, 1);
        }
        tmp = l[i];
    }
}

delEl(list);
console.log(list);
