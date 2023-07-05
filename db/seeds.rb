# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Create instructors
instructor1 = Instructor.create(name: "Solomon Kitonyi", email: "solomon@techhub.com", password: "password")
instructor2 = Instructor.create(name: "Edwinna Bikeri", email: "edwinna@techhub.com", password: "password")
instructor3 = Instructor.create(name: "Anita Wanjiru", email: "anita@techhub.com", password: "password")

# Create admins
admin1 = Admin.create(name: "Admin User", email: "admin@techhub.com", password: "password")

# Create students
student1 = Student.create(name: "Mark Chweya", email: "mark@techhub.com", password: "password", enrollment_date: Date.today, instructor: instructor1, admin: admin1)
student2 = Student.create(name: "Nicole Sanaipei", email: "nicole@techhub.com", password: "password", enrollment_date: Date.today, instructor: instructor2, admin: admin1)
student3 = Student.create(name: "Ruperth Nyagesoa", email: "ruperth@techhub.com", password: "password", enrollment_date: Date.today, instructor: instructor3, admin: admin1)
student4 = Student.create(name: "Kazungu Phoebe", email: "kazungu@techhub.com", password: "password", enrollment_date: Date.today, instructor: instructor1, admin: admin1)
student5 = Student.create(name: "Perez Abel", email: "perez@techhub.com", password: "password", enrollment_date: Date.today, instructor: instructor2, admin: admin1)
student6 = Student.create(name: "Jeffrey Rowlings", email: "jeffrey@techhub.com", password: "password", enrollment_date: Date.today, instructor: instructor3, admin: admin1)
student7 = Student.create(name: "Rymond Julius", email: "raymond@techhub.com", password: "password", enrollment_date: Date.today, instructor: instructor1, admin: admin1)

# Create courses
course1 = Course.create(title: "Software Engineering", description: "Introduction to Software Engineering", start_date: Date.today, end_date: Date.today + 30, instructor: instructor1)
course2 = Course.create(title: "CyberSecurity", description: "Introduction to Cybersecurity", start_date: Date.today, end_date: Date.today + 30, instructor: instructor2)
course3 = Course.create(title: "Data Science", description: "Introduction to Data Science", start_date: Date.today, end_date: Date.today + 30, instructor: instructor3)

# Create enrollments
Enrollment.create(student: student1, course: course1)
Enrollment.create(student: student2, course: course1)
Enrollment.create(student: student3, course: course2)
Enrollment.create(student: student4, course: course2)
Enrollment.create(student: student5, course: course3)
Enrollment.create(student: student6, course: course3)
Enrollment.create(student: student7, course: course1)
