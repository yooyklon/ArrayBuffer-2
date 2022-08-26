export default class ArrayBufferConverter {
  container() {
    this.buffer = null;
  }

  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    const bufferView = new Uint16Array(this.buffer);
    const result = [];

    for (let i = 0; i < bufferView.length; i += 1) {
      result.push(String.fromCharCode(bufferView[i]));
    }
    return result.join('');
  }
}
