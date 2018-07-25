module.exports = {


  friendlyName: 'Add New Wellbeing Entry',


  description: 'Add a new wellbeing entry to your CPD journal.',


  exits: {

    success: {
      viewTemplatePath: 'pages/wellbeing/wellness-entry',
    }

  },


  fn: async function (inputs, exits) {

    return exits.success();

  }


};
