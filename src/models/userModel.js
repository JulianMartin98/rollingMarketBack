import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: [3, 'El campo "name" debe tener al menos 3 caracteres'],
      maxLength: [100, 'El campo "name" debe tener como máximo 100 caracteres'],
    },
    surname: {
      type: String,
      required: true,
      minLength: [3, 'El campo "surname" debe tener al menos 3 caracteres'],
      maxLength: [100, 'El campo "surname" debe tener como máximo 100 caracteres'],
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minLength: [3, 'El campo "password" debe tener al menos 3 caracteres'],
      maxLength: [100, 'El campo "password" debe tener como máximo 100 caracteres'],
    },
    rol: {
      type: String,
      enum: ['admin', 'usuario'],
      default: 'usuario'
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const UserModel = model('User', userSchema);
