class CreateEnrollments < ActiveRecord::Migration[6.1]
  def change
    create_table :enrollments do |t|
      t.references :student, null: false
      t.references :course, null: false

      t.timestamps
    end
  end
end