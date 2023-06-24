console.log("Hello World!");

import('../../wasm/pkg/index').then((module: any) => {
    const counter = new module.Counter;
    console.log(counter.increment());
    console.log(counter.get_count());
    // console.log(module.add(2, 3));
})