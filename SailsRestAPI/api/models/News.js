/**
 * News.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    title: {
      type: "string"
    },
    date: {
      type: "date", 
      defaultsTo: function(){
        return date.now(); 
      }
    },
    description: { type: "string"},
    picture : {type: "string"}
  }
};

