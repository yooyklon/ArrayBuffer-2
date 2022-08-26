import getBuffer from '../js/getBuffer';

import ArrayBufferConverter from '../js/Classes/ArrayBufferConverter';

test('test ArrayBufferConverter function', () => {
  const converter = new ArrayBufferConverter();
  converter.load(getBuffer());

  const result = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';

  expect(converter.toString()).toBe(result);
});
