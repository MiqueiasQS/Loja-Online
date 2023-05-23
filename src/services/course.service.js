import Course from '../models/course.model.js';

const createCourse = async (data) => {
  console.log(data);
  const course = new Course(data);
  const courseCreated = await course.save();
  return courseCreated;
};

const listCourses = async () => {
  const courses = await Course.find();
  return courses;
};

const editCourse = async (id, data) => {
  const updatedCourse = await Course.findByIdAndUpdate(id, data, { new: true });
  return updatedCourse;
};

const deleteCourse = async (id) => {
  await Course.findByIdAndDelete(id);
};

export { createCourse, listCourses, editCourse, deleteCourse };