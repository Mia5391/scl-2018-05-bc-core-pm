describe('isInteger', () => {

  it('debería ser una función', () => {
    assert.equal(typeof isInteger, 'function');
  });

  it('debería retornar true para 1', () => {
    assert.true(isInteger("1"));
  });
});
