const imageSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true,
  },


});
module.exports = mongoose.model('images', imageSchema);
