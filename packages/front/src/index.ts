console.log("Hello World!");

import('../../wasm/pkg/index').then((module: any) => {
    console.log(module.add(2, 3));
})