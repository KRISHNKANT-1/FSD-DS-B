function test1(cb) {
    setTimeout(() => {
        console.log("Test 1");
        cb();
    }, 4000);
}

function test2(cb) {
    setTimeout(() => {
        console.log("Test 2");
        cb();
    }, 2000);
}

function test3(cb) {
    setTimeout(() => {
        console.log("Test 3");
        cb();
    }, 1000);
}
function test4(cb) {
    setTimeout(() => {
        console.log("Test 4");
        cb();
    }, 500);
}
test1(() => {
    test2(() => {
        test3(() => {
            test4(() => {
                console.log("All tests completed");
            });
        });
    });
});
   