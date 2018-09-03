module.exports.add = (a, b) => a + b ;
module.exports.square = a => a*a ;
module.exports.setName = (user, fullName) => {
  let names = fullName.split(' ');
  user.firstName = names[0];
  user.lastName = names[1];
  return user;
};
module.exports.asyncAdd = (a, b, callback) => {
  setTimeout(() => callback(a+b), 1000);
};
module.exports.asyncSq = (x, callback) => {
  setTimeout(() => callback(x*x), 1000);
};

module.exports.asynchAdd2 = (a,b) => {
	return new Promise((resolve, reject) => {
    (typeof a !== 'number' || typeof b !== 'number') && reject('param must all be numbers')
		setTimeout(()=>{
			resolve(a+b);
		}, 1000);
	});
};
