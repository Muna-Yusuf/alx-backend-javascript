export default class Currency {
  constructor(code, name) {
    this._name = Currency._name(name);
    this._code = Currency._code(code);
  }

  static _name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('student must be a String');
    }
    return name;
  }

  static _code(code) {
    if (typeof code !== 'string') {
      throw new TypeError('student must be a String');
    }
    return code;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = Currency._name(name);
  }

  get code() {
    return this._code;
  }

  set code(code) {
    this._code = Currency._code(code);
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
