import mongoose from 'mongoose'

const userSchema = mongoose.Schema(
  {

    // * full name 

    full_name: {
      type: String,
      required: true,
    },

    // * last name 

    last_name: {
      type: String,
      required: true,
    },

    // * phone 

    phone: {
      type: String,
      required: true,
      unique: true,
    },

    // * email

    email: {
      type: String,
      required: true,
      unique: true,
    },

    // * password

    password: {
      type: String,
      required: true,
    },

    // * user_id

    user_id: {
      type: String,
      unique: true,
    },

    // * gender

    gender: {
      type: String,
      required: true,
    },

    // * is_active

    is_active: {
      type: String,
      required: true,
    },
  },
  { timestamps: true })

const User = mongoose.model('User', userSchema)

export default User