
var Letter = new function(let) {
  "charac" = let,
  "appear" = "false",
  letterRender = function() {
    if (appear === false) {
      console.log("_");
    } else {
      console.log(charac);
    }
  }
}

module.exports = Letter;