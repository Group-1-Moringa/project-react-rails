# # # This file should contain all the record creation needed to seed the database with its default values.
# # # The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
# # #
# # # Examples:
# # #
# # #   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
# # #   Character.create(name: 'Luke', movie: movies.first)

# # # Create admins
# admin1 = Admin.create(name: "Admin User", email: "admin@techhub.com", password: "password1234")

# # # Create courses
# course1 = Course.create(title: "Software Engineering", description: "Introduction to Software Engineering", start_date: Date.today, end_date: Date.today + 30, instructor: Instructor.find(1))
# course2 = Course.create(title: "CyberSecurity", description: "Introduction to Cybersecurity", start_date: Date.today, end_date: Date.today + 30, instructor: Instructor.find(2))
# course3 = Course.create(title: "Data Science", description: "Introduction to Data Science", start_date: Date.today, end_date: Date.today + 30, instructor: Instructor.find(3))

# # Create instructors
# instructor1 = Instructor.create(name: "Solomon Kitonyi", email: "solomon@techhub.com", password: "12345678912")
# instructor2 = Instructor.create(name: "Edwinna Bikeri", email: "edwinna@techhub.com", password: "12345678912")
# instructor3 = Instructor.create(name: "Anita Wanjiru", email: "anita@techhub.com", password: "12345678912")
# instructor4 = Instructor.create(name: "Francis Kipchumba", email: "francis01@techhub.com", password: "password1234")

# # Create students
# student1 = Student.create(name: "Mark Chweya", email: "mark@techhub.com", password: "password1234", enrollment_date: Date.today, instructor: Instructor.find(1),admin: Admin.find(1))
# student2 = Student.create(name: "Nicole Sanaipei", email: "nicole@techhub.com", password: "password1234", enrollment_date: Date.today, instructor: Instructor.find(2), admin: Admin.find(1))
# student3 = Student.create(name: "Ruperth Nyagesoa", email: "ruperth@techhub.com", password: "password1234", enrollment_date: Date.today, instructor: Instructor.find(3), admin: Admin.find(1))
# student4 = Student.create(name: "Kazungu Phoebe", email: "kazungu@techhub.com", password: "password1234", enrollment_date: Date.today, instructor: Instructor.find(1), admin: Admin.find(1))
# student5 = Student.create(name: "Perez Abel", email: "perez@techhub.com", password: "password1234", enrollment_date: Date.today, instructor: Instructor.find(2), admin: Admin.find(1))
# student6 = Student.create(name: "Jeffrey Rowlings", email: "jeffrey@techhub.com", password: "password1234", enrollment_date: Date.today, instructor: Instructor.find(3), admin: Admin.find(1))
# student7 = Student.create(name: "Rymond Julius", email: "raymond@techhub.com", password: "password1234", enrollment_date: Date.today, instructor: Instructor.find(1), admin: Admin.find(1))
# # Create enrollments
# Enrollment.create(student: Student.find(1), course: Course.find(1))
# Enrollment.create(student: Student.find(2), course: Course.find(1))
# Enrollment.create(student: Student.find(3), course: Course.find(2))
# Enrollment.create(student: Student.find(4), course: Course.find(2))
# Enrollment.create(student: Student.find(5), course: Course.find(3))
# Enrollment.create(student: Student.find(6), course: Course.find(3))
# Enrollment.create(student: Student.find(7), course: Course.find(1))



