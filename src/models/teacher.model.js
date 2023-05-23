import mongoose from "mongoose";

const professorSchema = mongoose.Schema({
  nome: { type: String, required: true },
  imagem_perfil: { type: String },
  email: { type: String, required: true, unique: true },
  biografia: { type: String },
  expertise: { type: String },
  git_hub: { type: String },
  linkedin: { type: String },
  password: { type: String, required: true },
});

const Professor = mongoose.model("Professor", professorSchema);

export default Professor;
