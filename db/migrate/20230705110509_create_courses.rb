class CreateCourses < ActiveRecord::Migration[6.1]
  def change
    create_table :courses do |t|
      t.string :title
      t.text :description
      t.date :start_date
      t.date :end_date
      t.references :instructor, null: false

      t.timestamps
    end
  end
end