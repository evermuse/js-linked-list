/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */

// var eyes = require('eyes');

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

/*

var urLList = linkedListGenerator();
eyes.inspect(urLList.add("new.y"));
eyes.inspect(urLList.add("mozilla"));
eyes.inspect(urLList.add("eff"));
eyes.inspect(urLList.add("icann"));

// eyes.inspect(urLList.get(2));

//eyes.inspect(urLList.getHead());
//eyes.inspect(urLList.getTail());

eyes.inspect(urLList.remove(2));
eyes.inspect(urLList.get(2));

//eyes.inspect(urLList.get(0));

//eyes.inspect(urLList.getHead());
//eyes.inspect(urLList.getTail());





var current = _getHead();
      var previous;

      if ( number === 0 ) {

        head = current.next;

      } else {

        for ( var i = 0; i < number; i++ ) {

          previous = current;
          current = current.next;

        }

        previous.next = current;

      }

    }

    function _insert(item, number) {








if ( number === undefined) {

        return false;

      } else

*/
