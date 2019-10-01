export const parserObject = function(value: string) {
  if (/panel/gm.test(value) && /true/gm.test(value)) {
    let numbers = value.match(/\d+/g);
    if (numbers) {
      numbers.map(item => Number(item));
      return {
        type: "panel",
        props: {
          width: numbers[0],
          height: numbers[1],
          visible: true
        }
      };
    }
  } else if (/label/gm.test(value) && /true/gm.test(value)) {
    const text = value
      .split(":")[3]
      .split(",")[0]
      .slice(1, -1);
    return {
      type: "label",
      props: {
        caption: text,
        visible: true
      }
    };
  } else if (/button/gm.test(value) && /true/gm.test(value)) {
    let numbers = value.match(/\d+/g);
    if (numbers) {
      return {
        type: "button",
        props: {
          width: Number(numbers[0]),
          height: Number(numbers[1]),
          visible: true
        }
      };
    }
  }
};
