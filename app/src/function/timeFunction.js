export function getTime(time){
    const date=new Date().toISOString().split("T")[0];
    if(time.split('T')[0]===date){
        return time.split('T')[1]?.substr(0,5)
    }
    else{
        return time.split('T')[0]+" "+ time.split('T')[1]?.substr(0,5)
    }
}