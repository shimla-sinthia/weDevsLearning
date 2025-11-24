function step1() {
    console.log("Step1 started");
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Step 1 completed");
            resolve();
        }, 1000);
    });
}

function step2() {
    console.log("Step2 started");
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Step 2 completed");
            resolve();
        }, 1000);
    });
}

function step3() {
    console.log("Step3 started");
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Step 3 completed");
            resolve();
        }, 1000);
    });
}

// step1()
//     .then(step2)
//     .then(step3)
//     .then(() => console.log("All steps completed"));
async function processSteps() {
    await step1();
    // console.log("Intermediate log after step 1");
    await step2();
    await step3();
    console.log("All steps completed");
}

processSteps();
// console.log("Hello promise");