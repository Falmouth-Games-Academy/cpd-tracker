module.exports = {


  friendlyName: 'Add Entry',


  description: 'Add a new entry to the journal.',


  exits: {

  },


  fn: async function (inputs, exits) {

    self = this
    CPDEntry.find({userId: self.req.session.userId}).exec(function(err, entries){
      if(err) return res.serverError(err);
        return self.res.view('pages/cpd/all-entries',{
            entries: entries
          })
    })
  }

};
