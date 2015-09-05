/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator() {

  newLinkedList = {

  value: 'Ready Player One',
  next: {
    value: '1982',
    next: {
      value: 'Neuromancer',
      next: {
        value: 'Snow Crash',
        next: null
      }
    }
  }

  };

  newGetListInfo = {

    getHead : function() {



    },

    getTail : function() {

    },

    add : function(value) {



    },

    remove : function(value) {

    },

    get : function(number) {

    },

    insert : function(number) {

    }


  };

  return newGetListInfo;

}


function createNode( animal ) {

  return {

    value: animal,
    next: null

  }

}