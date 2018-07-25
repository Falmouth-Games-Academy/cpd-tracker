module.exports = {


  friendlyName: 'Add New Entry',


  description: 'Add a new entry to your CPD journal.',


  exits: {

    success: {
      viewTemplatePath: 'pages/cpd/new-entry',
    }

  },


  fn: async function (inputs, exits) {

    return exits.success();

  }


};
