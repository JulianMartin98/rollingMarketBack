import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/userModel.js";


export const GetAllUsers = async (req, res) => {

  try {

    const users = await UserModel.find();
    res.status(200).json({ users, mensaje: "Usuarios Encontrados en la base de datos" });
  }
  catch (error) {

    res.status(500).json({ message: "Error en el servidor" });

  }
};

export const LoginUser = async (req, res) => {

  try {
    const { email, password } = req.body;
    if (!email || !password) {

      return res.status(400).json({ message: "No se aceptan campos vacíos" });
    }


    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Usuario o Contraseña no válido." });
    }


    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(400).json({ message: "Usuario o Contraseña no válido." });
    }

    const token = jwt.sign({

      id: user._id,
      email: user.email,
      name: user.name,
      surname: user.surname,
      rol: user.rol
    },
      process.env.JWT_SECRET, {
      expiresIn: "1h"
    });

    res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ message: "Falla en el servidor." });
  }

}

export const CreateUser = async (req, res) => {
  const { name, surname, email, password, rol } = req.body;

  try {
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "El email ya está registrado" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await UserModel.create({
      name,
      surname,
      email,
      password: hashedPassword,
      rol
    });

    res.status(201).json({ message: "Usuario registrado exitosamente" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export async function GetUserById(req, res) {
  try {
    const { id } = req.params;
    const user = await UserModel.findById(id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function DeleteUser(req, res) {
  try {
    const { id } = req.params;
    const user = await UserModel.findByIdAndDelete(id);
    return res.status(200).json("Usuario eliminado exitosamente");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function UpdateUser(req, res) {
  try {
    const { id } = req.params;
    const { name, email, rol } = req.body;
    const user = await UserModel.findByIdAndUpdate(id, { name, email, rol });
    if (!user) {
      return res.status(404).json("Usuario no encontrado");
    }
    return res.status(200).json("Usuario actualizado exitosamente");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export const logoutUser = async (req, res) => {
  res.status(200).json({ message: "Sesión cerrada exitosamente" });
};
