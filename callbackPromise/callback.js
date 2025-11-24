function step1(callback) {
    console.log("Step1 started");
    setTimeout(() => {
        console.log("Step 1 completed");
        callback();
    }, 1000);
}

function step2(callback) {
    console.log("Step2 started");
    setTimeout(() => {
        console.log("Step 2 completed");
        callback();
    }, 1000);
}

function step3(callback) {
    console.log("Step3 started");
    setTimeout(() => {
        console.log("Step 3 completed");
        callback();
    }, 1000);
}

step1(() => {
    step2(() => {
        step3(() => {
            console.log("All steps completed");
        });
    });
});

// console.log("Hello callback");