var getUser = (id, callback) => {
  var user = {
    id: id,
    name: 'Valkyrie'
  };

//triggers callback function after 3 seconds
  setTimeout(() => {
    callback(user);
  }, 3000);

};

getUser(31, (userObj) => {
  console.log(userObj);
});
