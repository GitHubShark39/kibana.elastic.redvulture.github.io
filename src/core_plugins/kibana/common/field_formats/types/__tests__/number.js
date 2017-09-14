import expect from 'expect.js';
import { NumberFormat } from '../number';

describe('NumberFormat', function () {

  const config = {};
  config['format:number:defaultPattern'] = '0,0.[000]';
  const getConfig = (key) => config[key];

  it('default pattern', ()=> {
    const formatter = new NumberFormat({}, getConfig);
    expect(formatter.convert(12.345678)).to.be('12.346');
  });

  it('custom pattern', ()=> {
    const formatter = new NumberFormat({ pattern: '0,0' }, getConfig);
    expect(formatter.convert('12.345678')).to.be('12');
  });

});
