import Enrollment from "../models/enrollment.model.js";

const createEnrollment = async (data) => {
  const enrollment = new Enrollment(data);
  await enrollment.save();
  return enrollment;
};

const listEnrollments = async () => {
  const enrollments = await Enrollment.find();
  return enrollments;
};

const editEnrollment = async (id, data) => {
  const updatedEnrollment = await Enrollment.findByIdAndUpdate(id, data, { new: true });
  return updatedEnrollment;
};

const deleteEnrollment = async (id) => {
  await Enrollment.findByIdAndDelete(id);
};

export { 
  createEnrollment, 
  listEnrollments, 
  editEnrollment, 
  deleteEnrollment 
};