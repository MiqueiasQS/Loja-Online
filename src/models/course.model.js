import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String },
  carga_horaria: { type: Number, required: true },
  avaliacao: { type: Number },
  valor: { type: Number, required: true },
  logo: { type: String },
  professor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Professor",
    required: true,
  },
});

const Course = mongoose.model("Course", courseSchema);

export default Course;