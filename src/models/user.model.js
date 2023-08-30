import number from '@hapi/joi/lib/types/number';
import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    name: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    }
  },
  {
    timestamps: true
  }
  
);

export default model('User', userSchema);
