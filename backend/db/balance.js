const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/paytm');

}

const balanceSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true,
        ref : 'User'
      },
    balance: {
        type: Number,
        default : 0
    }
  }
);



const Balance = mongoose.model('Balance', balanceSchema);


module.exports = {Balance}
