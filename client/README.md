## Project Title: Phone store Management System

## License Free.
## copyright Free Software .

## Author Mathew Kipkoech

## Project Descrition
The app is designed for phone stores in Nairobi to help them manage their inventory. It has buying and selling prices for phones. There's a manual order form where salespeople can add items to the inventory when they make a sale, and it automatically subtracts from the inventory. The dashboard displays the total profits, sales, and orders. It also allows for daily statistics and easy accounting calculations.


# setup instruction
        bundle install -on ruby folder
        bundle exec rake db:migrate db:seed
        bundle exec rake server


        npm install -on react folder
        npm start -on react folder

##  Summary
    implemented one-to-many relationship and many-to-many relationship
   
    4 tables created allitems, 
    customers, orders, orders,phones,
   
    all models and relations created
   
    all API routes in Sinatra  GET, POST, PATCH, DELETE working
   
    React-frontend created
   
    all tables data queries to from react through ruby apis



##### domain model

            https://drive.google.com/file/d/1JFddWSryJ9D-O5Mn7CDheaXhNVWqtcxt/view?usp=sharing

####   schema

        create_table "allitems", force: :cascade do |t|
            t.string "name"
            t.string "brand"
            t.string "type"
            t.string "itemtype"
        end

        create_table "customers", force: :cascade do |t|
            t.string "name"
            t.string "email"
            t.integer "phone"
            t.datetime "created_at", null: false
            t.datetime "updated_at", null: false
        end

        create_table "orders", force: :cascade do |t|
            t.integer "phone_id"
            t.integer "quantity"
            t.integer "buying_price"
            t.integer "selling_price"
            t.datetime "created_at", null: false
            t.datetime "updated_at", null: false
            t.integer "customer_id"
        end

        create_table "phones", force: :cascade do |t|
            t.integer "quantity"
            t.integer "buying_price"
            t.integer "selling_price"
            t.datetime "created_at", null: false
            t.datetime "updated_at", null: false
            t.integer "allitem_id"
        end

