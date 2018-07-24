module.exports = {


  friendlyName: 'Signup',


  description: 'Sign up for a new user account.',


  extendedDescription:
`This creates a new user record in the database, signs in the requesting user agent
by modifying its [session](https://sailsjs.com/documentation/concepts/sessions), and
(if emailing with Mailgun is enabled) sends an account verification email.

If a verification email is sent, the new user's account is put in an "unconfirmed" state
until they confirm they are using a legitimate email address (by clicking the link in
the account verification message.)`,


  inputs: {

    Module: {
      type: 'string',
      required: true,
      unique: true,
      maxLength: 8,
      example: 'COMP 110'
    },

    Bio: {
      type: 'string',
      required: true,
      description: 'biography of week',
      protect: true,
      minLength: 500,
      example: 'crap'
    },

    Rating: {
      type: 'number',
      required: true,
      description: 'rating out of 10',
      example: 5
    },

    UserID: {
      type: 'string',
      required: true,
      description: 'The user ID of cpd'
    }

  },


  exits: {


  },

  fn: async function (inputs, exits) {

    // Create new CPD entry

    var newCPDRecord = await CPD.create(Object.assign({
      Module: inputs.Module,
      Bio: inputs.Bio,
      Rating: inputs.Rating,
      userID: this.req.session.userId
    }, {}))
    .fetch();

    // Since everything went ok, send our 200 response.
    return exits.success();

  }

};
