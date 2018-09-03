const expect = require('expect');
const rewire = require('rewire');

/***************************************
syntax: replace function "require" with
"rewire" for the file containing the
method needed for rewiring

@handleSignUp.__set__
@handleSignUp.__get__
****************************************/
let app = rewire('./app');

describe('spies', ()=> {
  let db = { saveUser: expect.createSpy() };
  app.__set__('db', db);
  it('should call saveUser with user Object', () => {
    let userName = 'sunny@somewhere.com';
    let password = '1234abcd';
    let whatever = '1234';
    app.handleSignUp(userName, password);
    expect(db.saveUser).toHaveBeenCalledWith({userName, password});
  });
  it('should call the spy correctly', ()=> {
    //createSpy() returns a proxy function
    let spy = expect.createSpy();
    spy('sunny', 25);
    expect(spy).toHaveBeenCalled('sunny', 25);
  });
});
