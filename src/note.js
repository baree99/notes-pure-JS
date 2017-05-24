(function(exports) {

  var Note = function(title, text) {
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
