import $f from '../js-fuck';

describe('js-fuck', () => {
  it('should throw error when param is not a string', () => {
    expect(() => $f.compile(123)).toThrowError(Error);
  });

  it('should return encoded and executable', () => {
    expect(Object.keys($f.compile('js is awesome'))).toEqual(['encoded', 'executable']);
  });
});
