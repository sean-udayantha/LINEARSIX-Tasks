function projectObject(source, prototype) {
    const result = {};
    for (let key in prototype) {
      if (key in source) {
        result[key] = source[key];
      }
    }
    return result;
  }


  const source = { a: 1, b: 2, c: 3, d: 4 };
  const prototype = { a: null, c: null };
  const projected = projectObject(source, prototype);
  console.log("🚀 ~ projected:", projected)

  