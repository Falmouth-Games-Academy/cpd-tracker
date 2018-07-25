module.exports = {


  friendlyName: 'Add Entry',


  description: 'Add a new entry to the journal.',

  inputs: {

    title:  {
      required: true,
      type: 'string',
      example: 'Frida Kahlo de Rivera',
      description: 'The user\'s full name.',
    }

  },


  exits: {

  },


  fn: async function (inputs, exits) {

    // Build up data for the new user record and save it to the database.
    // (Also use `fetch` to retrieve the new ID so that we can use it below.)
    var newCPDEntry = await CPDEntry.create(Object.assign({
      title: inputs.title,
    }, {}))
    .fetch();


    // Store the user's new id in their session.
    // this.req.session.userId = newUserRecord.id;

    // Since everything went ok, send our 200 response.
    return exits.success();

  }

};
