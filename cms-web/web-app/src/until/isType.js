import Vue from 'vue';
const { $message } = Vue.prototype;


let reg = {
    user:/^[a-zA-Z]\w{5,}$/,
    pwd:/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])[A-Za-z\d]{5,}$/,
    email:/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/,
    num:/^[0-9]$/
}

//正则校验
export function regType(value,next){

    //过滤出不合法的值
    let tip = value.filter(item=>!reg[item.type].test(item.str))

    //提示不合法字段
    if(tip.length>0) {
        $message.error(tip[0].name+'不合法');
        return false
    }
    next()
}

//非空校验
export function isNull(value,next){

    //拿到值为空的数组
    let tip = value.filter(item=> item.value === '' )

    //弹出不为空的提示
    if(tip.length>0) {
        $message.error(tip[0].name+'不能为空');  
        return false
    }
    next()
  }