function f1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Result from f1");
        }, 1000);
    });

}
function f2(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Result from f2");
        }, 2000);
    });

}
f1().then(f2).catch((error) => {
    console.error("error",error);
});