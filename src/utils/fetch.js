export function fetchCustom(url, payload){
    return fetch(url , payload).then(res=>res.json())
}