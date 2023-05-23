import Joi from "joi";

const professorSchema = Joi.object({
  nome: Joi.string().required(),
  imagemPerfil: Joi.string(),
  email: Joi.string().email().required(),
  biografia: Joi.string(),
  expertise: Joi.string(),
  github: Joi.string(),
  linkedin: Joi.string(),
  password: Joi.string().required(),
});

const courseSchema = Joi.object({
  nome: Joi.string().required(),
  descricao: Joi.string(),
  cargaHoraria: Joi.number().required(),
  avaliacao: Joi.number(),
  valor: Joi.number().required(),
  logo: Joi.string(),
  professor: Joi.string().required(),
});

const studentSchema = Joi.object({
  nome: Joi.string().required(),
  imagemPerfil: Joi.string(),
  email: Joi.string().email().required(),
  cpf: Joi.string().required(),
  telefone: Joi.string(),
  password: Joi.string().required(),
});

const enrollmentSchema = Joi.object({
  estudante: Joi.string().required(),
  curso: Joi.string().required(),
  dataMatricula: Joi.date(),
  status: Joi.string().valid("ativo", "cancelado"),
});

export {
  professorSchema,
  courseSchema,
  studentSchema,
  enrollmentSchema,
};