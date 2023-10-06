import mongoose from 'mongoose'

/**
 * user: admin
 * pass: IQVuQHVFzuodYbRg
 */

const endereco = 'mongodb+srv://admin:IQVuQHVFzuodYbRg@proj05lear.xtzprnb.mongodb.net/?retryWrites=true&w=majority'
const config = { useNewUrlParser: true, useUnifiedTopology: true }

mongoose.connect( endereco, config )

mongoose.Promise = global.Promise