import bcrypt from 'bcrypt';
import Teacher from '../models/teacher.model.js';
import { generateJWTToken } from '../utils/jwt.js';

const createProfessor = async (data) => {
  console.log(data);
  const hashedPassword = bcrypt.hashSync(data.password, 8);
  const professorData = { ...data, password: hashedPassword };
  const professorCreated = new Teacher(professorData);
  await professorCreated.save();
  return professorCreated;
};

const listProfessors = async () => {
  const professors = await Teacher.find();
  return professors;
};

const editProfessor = async (id, data) => {
  const hashedPassword = bcrypt.hashSync(data.password, 8);
  const professorData = { ...data, password: hashedPassword };
  const updatedProfessor = await Teacher.findByIdAndUpdate(id, professorData, { new: true });
  return updatedProfessor;
};

const deleteProfessor = async (id) => {
  await Teacher.findByIdAndDelete(id);
};

const authentication = async ({ email, password }) => {
  if (!email || !password) {
    throw { status: 401, message: 'Campos faltantes.' };
  }

  const professor = await Teacher.findOne({ email });

  if (!professor) {
    throw { status: 401, message: 'Usuário ou senha inválido' };
  }

  const comparePassword = bcrypt.compareSync(password, professor.password);

  if (!comparePassword) {
    throw { status: 401, message: 'Usuário ou senha inválido' };
  }

  const { _id, name } = professor;

  const token = generateJWTToken({ _id, name, email });
  return { token };
};

export {
  createProfessor,
  listProfessors,
  editProfessor,
  deleteProfessor,
  authentication
};