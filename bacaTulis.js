async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 1000)
    });

    console.log('Hei')
  
    let result = await promise; // tunggu sampai promise selesai (*)
  
    console.log(result); // "done!"
  }
  
  f()