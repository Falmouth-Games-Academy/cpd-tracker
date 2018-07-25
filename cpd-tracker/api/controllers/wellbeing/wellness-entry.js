module.exports = {


  friendlyName: 'Add Entry',


  description: 'Add a new entry to the journal.',

  inputs: {

    wellnessRating:  {
      required: true,
      type: 'number',
    },

  },


  exits: {

  },


  fn: async function (inputs, exits) {

    // Build up data for the new user record and save it to the database.
    // (Also use `fetch` to retrieve the new ID so that we can use it below.)
    var wellnessEntry = await WellnessEntry.create(Object.assign({
      wellnessRating: Number(inputs.wellnessRating),
    }, {}))
    .fetch();


    // Store the user's new id in their session.
    //

    // Since everything went ok, send our 200 response.
    return exits.success();

  }

};
