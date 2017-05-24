(function(exports) {
  var id = 1

  var Note = function(title, text) {
    this._id += id
    this._title = title,
    this._text = text
  };

  Note.prototype = {
    title: function() {
      return this._title;
    },

    text: function() {
      return this._text;
    }
  }

  exports.Note = Note;
})(this);
