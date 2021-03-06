// Returns elements of A ∩ B
intersection = function(A, B) {
  var C = [];

  for (var i = 0; i < A.length; ++i) {
    for (var j = 0; j < B.length; ++j) {
      if (A[i] == B[j]) {
        C.push(A[i]);
        break;
      }
    }
  }

  return C;
};

// Returns elements of A \ B
minus = function(A, B) {
  var C = [];

  for (var i = 0; i < A.length; ++i) {
    var found = false;
    for (var j = 0; j < B.length; ++j) {
      if (A[i] == B[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      C.push(A[i]);
    }
  }

  return C;
};

// Return a string regexp, that needs to be passed to RegExp constructor like:
//   var regexp = new RegExp(filter, 'i');
build_regexp = function(str) {
  // Split comma-separated input string
  //
  str = str.replace(/ /g,''); // remove white spaces from input string
  var array = str.split(','); // split comma-separated input string

  // Build regexp for lazy search
  var regexp = '';
  var filler = '(\\w|\\s)*';
  var first_word = true;

  array.forEach(function(elt) {
    var first_char = true;
    if (!first_word) {
      regexp += '|';
    }

    regexp += '(';
    for (var i = 0; i < elt.length; ++i) {
      if (!first_char) {
        regexp += filler;
      }

      regexp += elt.charAt(i);

      first_char = false;
    }

    regexp += ')';

    first_word = false;
  });

  return regexp;
};
