function longRunningTask() {
    // 오래 걸리는 작업
    console.log("작업 끝");
}

console.log("시작");
longRunningTask();
console.log('다른 작업');