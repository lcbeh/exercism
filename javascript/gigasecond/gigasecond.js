function Gigasecond(date) {
  this.birthday = date
}

Gigasecond.prototype.date = function () {
  var birthdayInMs =  this.birthday.getTime()
  var anniversary = new Date(birthdayInMs + 1000000000000)
  return anniversary
}

module.exports = Gigasecond;
