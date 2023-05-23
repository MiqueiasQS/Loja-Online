import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
  nome: { type: String, required: true },
  imagem_perfil: { type: String },
  email: { type: String, required: true, unique: true },
  cpf: { type: String, required: true, unique: true },
  telefone: { type: String },
  password: { type: String, required: true },
});

const Student = mongoose.model('Student', studentSchema);

export default Student;
