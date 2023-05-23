import mongoose from "mongoose";

const enrollmentSchema = mongoose.Schema({
  estudante: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  curso: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  data_matricula: { type: Date, default: Date.now },
  status: { type: String, enum: ["ativo", "cancelado"], default: "ativo" },
});

const Enrollment = mongoose.model("Enrollment", enrollmentSchema);

export default Enrollment;