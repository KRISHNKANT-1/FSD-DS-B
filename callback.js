function sum(a,b){
    return a+b;
}
function sumwithmsg(clbk,msg){
    const result=clbk(20,30);
    const fresults="hi" +msg +"your add is"+result;
    console.log(fresults)

}
sumwithmsg(sum,"mr.deepak");