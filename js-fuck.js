const zero = '+![]';
const one = '+!![]';
const map = {};

const fuckNumber = number => {
  if (number === 0) {
    return zero;
  }

  let str = '';

  for (let i = 0; i < number; i++) {
    str += one;
  }

  return str;
};

const fuckWord = (word = '') => word.split('')
  .map(char => {
    const charCode = char.charCodeAt(0);

    if (!map[char]) {
      return `([]+[])[${fuckWord('constructor')}][${fuckWord('fromCharCode')}](${fuckNumber(charCode)})`;
    }

    return map[char];
  })
  .join('+');

map.a = `(+{}+[])[${fuckNumber(1)}]`;
map.b = `({}+[])[${fuckNumber(2)}]`;
map.c = `({}+[])[${fuckNumber(5)}]`;
map.e = `({}+[])[${fuckNumber(4)}]`;
map.f = `(![]+[])[${fuckNumber(0)}]`;
map.i = `((+!![]/+![])+[])[${fuckNumber(3)}]`;
map.n = `((+!![]/+![])+[])[${fuckNumber(4)}]`;
map.o = `({}+[])[${fuckNumber(1)}]`;
map.r = `(!![]+[])[${fuckNumber(1)}]`;
map.s = `(![]+[])[${fuckNumber(3)}]`;
map.t = `({}+[])[${fuckNumber(6)}]`;
map.u = `(!![]+[])[${fuckNumber(2)}]`;
map.S = `(([]+[])[${fuckWord('constructor')}]+[])[${fuckNumber(9)}]`;
map.g = `((/-/)[${fuckWord('constructor')}]+[])[${fuckNumber(11)}]`;
map.p = `((/-/)[${fuckWord('constructor')}]+[])[${fuckNumber(14)}]`;
map.d = `(${fuckNumber(13)})[${fuckWord('toString')}](${fuckNumber(14)})`;
map.h = `(${fuckNumber(17)})[${fuckWord('toString')}](${fuckNumber(18)})`;
map.m = `(${fuckNumber(22)})[${fuckWord('toString')}](${fuckNumber(23)})`;
map['\\'] = `(/\\\\/+[])[${fuckNumber(1)}]`;
map[' '] = `({}+[])[${fuckNumber(7)}]`;
map.C = `(()=>{})[${fuckWord('constructor')}](${fuckWord('return escape')})()(${fuckWord('\\')})[${fuckNumber(2)}]`;

function compile (code) {
  if (typeof code === 'string') {
    const encoded = fuckWord(code);
    const executable = `(()=>{})[${fuckWord('constructor')}](${encoded})()`;

    return {
      encoded,
      executable
    }
  }

  throw Error('requires a string!');
}

module.exports = { compile };
