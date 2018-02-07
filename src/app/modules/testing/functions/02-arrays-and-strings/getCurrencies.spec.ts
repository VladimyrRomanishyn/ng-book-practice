

import { getCurrencies } from './getCurrencies';

describe('Get Currencies', () => {
  let result;

  it('Should return an array', () => {
    result = Array.isArray(getCurrencies());
    expect(result).toBeTruthy();
  });

  it('Should array of 3 items', () => {
    result = getCurrencies().length;
    expect(result).toBe(3);
  });

  it('Should contain USD', () => {
    result = getCurrencies();
    expect(result).toContain('USD');
  });

  it('Should contain AUD', () => {
    result = getCurrencies();
    expect(result).toContain('AUD');
  });

  it('Should contain EUR', () => {
    result = getCurrencies();
    expect(result).toContain('EUR');
  });
});
