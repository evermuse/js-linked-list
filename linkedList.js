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

      theNode = _getHead();
      theNext = _getHead().next.next;

      for (var i = 0; i <= number; i++) {

        if (i === number) {

          theNext ;


        } else if (theNode.next === null) {

          return false;

        } else {

          theNode = theNode.next;

        }

      }

    }

    }

    function _insert(item, number) {



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



/* if (next !== null) {

        checker =

      } */