// Break & Continue

for (let index = 1; index <= 20; index++) {
    // if (index === 10) { // 1〜9まで出力
    //     break;
    // }

    console.log(index);

    if (index === 10) { // 1〜10まで出力
        break;
    }
}

for (let i = 10; i <= 30; i++) {
    // if (i % 2 === 0) {
    //     continue;
    // }

    if (i === 20 || i === 19) {
        continue;
    }

    console.log(i);
}
