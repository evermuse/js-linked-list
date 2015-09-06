/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */

function linkedListGenerator() {

  var head = null;
  var tail = null;

var newLinkedList = null;

var listReveal = (function() {

    function _getHead() {

      return head;

    }

    function _getTail() {

      return tail;

    }

    function _add(item) {

      var newNode = {

        value : item,
        next : null

      };

      if (head === null) {

        head = newNode;
        tail = newNode;
        newLinkedList = newNode;

      } else {

        tail.next = newNode;
        tail = newNode;

      }

      return newNode;

    }

    function _get(number) {

      theNode = _getHead();

      for (var i = 0; i <= number; i++) {

        if (i === number) {

          return theNode;

        } else if (theNode.next === null) {

          return false;

        } else {

          theNode = theNode.next;

        }

      }

    }

    function _remove(number) {

      var temp1 = _getHead();
      var tailNow = _getTail();

      if ( _get(number)) {

        if ( number === 0 ) {

          head = _getHead().next;

        } else if ( number === 1 ) {

          temp2 = temp1.next;
          temp1.next = temp2.next;

          if (temp1.next === null) {

            tail = temp1;

          }

        } else {

          for ( var i = 0; i <= number - 2; i++ ) {

            temp1 = temp1.next;
            temp2 = temp1.next;
            temp1.next = temp2.next;

            if (temp1.next === null) {

              tail = temp1;

            }

          }

        }

      } else {

        return false;

      }

    }

    function _insert(item, number) {

      if ( _get(number)) {

        var current;

        var makeNode = {

          value : item,
          next : undefined

        };

        if (number === 0) {

          current = _get(0);
          head = makeNode;
          makeNode.next = current;

        } else {

          current = _get(number - 1);
          toMove = current.next;
          current.next = makeNode;
          makeNode.next = toMove;

        }

      } else {

        return false;

      }

    }

    return {

      getHead : _getHead,
      getTail : _getTail,
      add : _add,
      remove : _remove,
      get : _get,
      insert : _insert

    };

  })();

  return listReveal;

}

var ll = linkedListGenerator();

ll.add('ant');
ll.add('bat');
ll.add('cat');
ll.add('dog');
ll.add('elephant');
ll.add('fish');
ll.add('giraffe');
ll.add('hippo');

var i = 0;
var current = ll.getHead();
var last = current;

// runs ll.get() as the conditional

while (ll.get(i)) {

  if (last !== null) {

    console.log(current.value);
    last = current.next;
    current = current.next;
    i++;

  } else {

    console.log(last);

  }

}

// aborted hasNext function below, decided didn't need it, could add if necessary

/*

function hasNext() {

  for ( var i = 0; ll.get(i + 1); i++) {

    return true;

  }

} */
