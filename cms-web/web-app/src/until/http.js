import axios from 'axios'
export default function http(method,url,data=[]){
    let configData         = {};
    let type               = method==='get'?'params':'data'
        configData.method  = method;
        configData.url     = url;
        configData[type]   = data;
        configData.headers = {
            versions:'1.0.0',
            source:'meili'
        }
    return axios(configData).catch(err=>{
        if(err.response.status === 500) return alert('服务器错误')
        if(err.response.status === 404) return alert('接口不存在')
    })
}