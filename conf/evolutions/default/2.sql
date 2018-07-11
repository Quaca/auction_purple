# --- !Ups

INSERT INTO category(name) VALUES ('Sportware');
INSERT INTO category(name) VALUES ('Home');
INSERT INTO category(name) VALUES ('Electronics');
INSERT INTO category(name) VALUES ('Mobile');
INSERT INTO category(name) VALUES ('Computers');
INSERT INTO category(name) VALUES ('Art');
INSERT INTO category(name) VALUES ('Man');
INSERT INTO category(name) VALUES ('Kids');
INSERT INTO category(name) VALUES ('Women');
INSERT INTO category(name) VALUES ('Vehicles');
INSERT INTO category(name) VALUES ('Real Estate');

INSERT INTO subcategory(name, category_id) SELECT 'Accesories', category.id FROM category WHERE name = 'Women';
INSERT INTO subcategory(name, category_id) SELECT 'Bag', category.id FROM category WHERE name = 'Women';
INSERT INTO subcategory(name, category_id) SELECT 'Clothes', category.id FROM category WHERE name = 'Women';
INSERT INTO subcategory(name, category_id) SELECT 'Bad & Bath', category.id FROM category WHERE name = 'Women';
INSERT INTO subcategory(name, category_id) SELECT 'Swimming costume', category.id FROM category WHERE name = 'Women';
INSERT INTO subcategory(name, category_id) SELECT 'Spot Tops & Shoes', category.id FROM category WHERE name = 'Women';

INSERT INTO subcategory(name, category_id) SELECT 'Cars', category.id FROM category WHERE name = 'Vehicles';
INSERT INTO subcategory(name, category_id) SELECT 'Motorcycles', category.id FROM category WHERE name = 'Vehicles';
INSERT INTO subcategory(name, category_id) SELECT 'Cargo vehicles', category.id FROM category WHERE name = 'Vehicles';
INSERT INTO subcategory(name, category_id) SELECT 'Water vehicles', category.id FROM category WHERE name = 'Vehicles';

INSERT INTO subcategory(name, category_id) SELECT 'Furniture', category.id FROM category WHERE name = 'Home';
INSERT INTO subcategory(name, category_id) SELECT 'Garden', category.id FROM category WHERE name = 'Home';
INSERT INTO subcategory(name, category_id) SELECT 'Kitchen', category.id FROM category WHERE name = 'Home';
INSERT INTO subcategory(name, category_id) SELECT 'Bathroom', category.id FROM category WHERE name = 'Home';
INSERT INTO subcategory(name, category_id) SELECT 'Security devices', category.id FROM category WHERE name = 'Home';
INSERT INTO subcategory(name, category_id) SELECT 'Joinery', category.id FROM category WHERE name = 'Home';

INSERT INTO subcategory(name, category_id) SELECT 'Outdoor sports', category.id FROM category WHERE name = 'Sportware';
INSERT INTO subcategory(name, category_id) SELECT 'Indoor sports', category.id FROM category WHERE name = 'Sportware';
INSERT INTO subcategory(name, category_id) SELECT 'Winter sports', category.id FROM category WHERE name = 'Sportware';
INSERT INTO subcategory(name, category_id) SELECT 'Martial arts', category.id FROM category WHERE name = 'Sportware';
INSERT INTO subcategory(name, category_id) SELECT 'Extreme sports', category.id FROM category WHERE name = 'Sportware';
INSERT INTO subcategory(name, category_id) SELECT 'Water sports', category.id FROM category WHERE name = 'Sportware';

INSERT INTO subcategory(name, category_id) SELECT 'Parts & equipment', category.id FROM category WHERE name = 'Mobile';
INSERT INTO subcategory(name, category_id) SELECT 'Tablets', category.id FROM category WHERE name = 'Mobile';
INSERT INTO subcategory(name, category_id) SELECT 'Apple', category.id FROM category WHERE name = 'Mobile';
INSERT INTO subcategory(name, category_id) SELECT 'Samsung', category.id FROM category WHERE name = 'Mobile';
INSERT INTO subcategory(name, category_id) SELECT 'Huawei', category.id FROM category WHERE name = 'Mobile';
INSERT INTO subcategory(name, category_id) SELECT 'Xperia', category.id FROM category WHERE name = 'Mobile';
INSERT INTO subcategory(name, category_id) SELECT 'LG', category.id FROM category WHERE name = 'Mobile';
INSERT INTO subcategory(name, category_id) SELECT 'HTC', category.id FROM category WHERE name = 'Mobile';
INSERT INTO subcategory(name, category_id) SELECT 'Other', category.id FROM category WHERE name = 'Mobile';


INSERT INTO subcategory(name, category_id) SELECT 'Wristwatch', category.id FROM category WHERE name = 'Man';
INSERT INTO subcategory(name, category_id) SELECT 'Necklace', category.id FROM category WHERE name = 'Man';
INSERT INTO subcategory(name, category_id) SELECT 'Bracelet', category.id FROM category WHERE name = 'Man';
INSERT INTO subcategory(name, category_id) SELECT 'Shoes', category.id FROM category WHERE name = 'Man';
INSERT INTO subcategory(name, category_id) SELECT 'Jackets', category.id FROM category WHERE name = 'Man';

INSERT INTO subcategory(name, category_id) SELECT 'House', category.id FROM category WHERE name = 'Real Estate';
INSERT INTO subcategory(name, category_id) SELECT 'Apartment', category.id FROM category WHERE name = 'Real Estate';
INSERT INTO subcategory(name, category_id) SELECT 'Land', category.id FROM category WHERE name = 'Real Estate';
INSERT INTO subcategory(name, category_id) SELECT 'Cottages', category.id FROM category WHERE name = 'Real Estate';
INSERT INTO subcategory(name, category_id) SELECT 'Business space', category.id FROM category WHERE name = 'Real Estate';


INSERT INTO subcategory(name, category_id) SELECT 'Household appliances', category.id FROM category WHERE name = 'Electronics';
INSERT INTO subcategory(name, category_id) SELECT 'Cameras', category.id FROM category WHERE name = 'Electronics';
INSERT INTO subcategory(name, category_id) SELECT 'TV', category.id FROM category WHERE name = 'Electronics';
INSERT INTO subcategory(name, category_id) SELECT 'Speakers', category.id FROM category WHERE name = 'Electronics';
INSERT INTO subcategory(name, category_id) SELECT 'Electric materials', category.id FROM category WHERE name = 'Electronics';
INSERT INTO subcategory(name, category_id) SELECT 'Medical devices', category.id FROM category WHERE name = 'Electronics';
INSERT INTO subcategory(name, category_id) SELECT 'Other', category.id FROM category WHERE name = 'Electronics';

INSERT INTO subcategory(name, category_id) SELECT 'Laptops', category.id FROM category WHERE name = 'Computers';
INSERT INTO subcategory(name, category_id) SELECT 'Software', category.id FROM category WHERE name = 'Computers';
INSERT INTO subcategory(name, category_id) SELECT 'Desktop computer', category.id FROM category WHERE name = 'Computers';
INSERT INTO subcategory(name, category_id) SELECT 'Networks and communication', category.id FROM category WHERE name = 'Computers';
INSERT INTO subcategory(name, category_id) SELECT 'Computer equipment', category.id FROM category WHERE name = 'Computers';
INSERT INTO subcategory(name, category_id) SELECT 'Other', category.id FROM category WHERE name = 'Computers';

INSERT INTO subcategory(name, category_id) SELECT 'Paintings', category.id FROM category WHERE name = 'Art';
INSERT INTO subcategory(name, category_id) SELECT 'Tattoos', category.id FROM category WHERE name = 'Art';
INSERT INTO subcategory(name, category_id) SELECT 'Posters', category.id FROM category WHERE name = 'Art';
INSERT INTO subcategory(name, category_id) SELECT 'Pictures', category.id FROM category WHERE name = 'Art';
INSERT INTO subcategory(name, category_id) SELECT 'Sculptures', category.id FROM category WHERE name = 'Art';

INSERT INTO subcategory(name, category_id) SELECT 'Toys', category.id FROM category WHERE name = 'Kids';
INSERT INTO subcategory(name, category_id) SELECT 'Kid Clothes', category.id FROM category WHERE name = 'Kids';
INSERT INTO subcategory(name, category_id) SELECT 'Kid Shoes', category.id FROM category WHERE name = 'Kids';
INSERT INTO subcategory(name, category_id) SELECT 'Strawlers', category.id FROM category WHERE name = 'Kids';



INSERT INTO item(name, subcategory_id, popularity, description, color, size, starting_price, buy_now_price, start_date, end_date, condition)
  VALUES ('Desktop computer Dell', (SELECT id FROM "subcategory" where name = 'Desktop computer'), 100, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et urna lectus. Duis id sapien.',
  'black', null, 100.00, 500.00, '2010-03-31 09:30:20','2018-03-11 9:30:20', 'new');
INSERT INTO item(name, subcategory_id, popularity, description, color, size, starting_price, buy_now_price, start_date, end_date, condition)
  VALUES ('Brand new Porsche car', (SELECT id FROM "subcategory" where name = 'Cars'), 100, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et urna lectus. Duis id sapien.',
  'green', null, 100000.00, 500000.00, '2011-01-01 09:30:20', '2018-12-11 09:30:20', 'new');
INSERT INTO item(name, subcategory_id, popularity, description, color, size, starting_price, buy_now_price, start_date, end_date, condition)
  VALUES ('Golf7', (SELECT id FROM "subcategory" where name = 'Cars'), 100, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et urna lectus. Duis id sapien.',
  'white', null, 20000.00, 25000.00, '2012-03-22 09:30:20', '2018-06-21 01:05:05', 'new');
INSERT INTO item(name, subcategory_id, popularity, description, color, size, starting_price, buy_now_price, start_date, end_date, condition)
  VALUES ('House for big family', (SELECT id FROM "subcategory" where name = 'House'), 90, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et urna lectus. Duis id sapien.',
  'white', null, 150000.00, 200000.00, '2016-03-23 09:30:20', '2018-08-11 07:15:25', 'new');
INSERT INTO item(name, subcategory_id, popularity, description, color, size, starting_price, buy_now_price, start_date, end_date, condition)
  VALUES ('LG G3 mobile phone', (SELECT id FROM "subcategory" where name = 'LG'), 80, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et urna lectus. Duis id sapien.',
  'grey', null, 250.00, 300.00, '2014-03-24 09:30:20', '2018-09-11 09:30:20', 'new');
INSERT INTO item(name, subcategory_id, popularity, description, color, size, starting_price, buy_now_price, start_date, end_date, condition)
  VALUES ('Ball for football', (SELECT id FROM "subcategory" where name = 'Outdoor sports'), 70, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et urna lectus. Duis id sapien.',
  'grey', null, 10.00, 30.00, '2012-01-26 10:20:10', '2017-09-11 09:30:20','new');
INSERT INTO item(name, subcategory_id, popularity, description, color, size, starting_price, buy_now_price, start_date, end_date, condition)
  VALUES ('Women bag', (SELECT id FROM "subcategory" where name = 'Bag'), 60, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et urna lectus. Duis id sapien.',
  'black', null, 70.00, 150.00, '2013-03-27 09:30:20', '2018-07-21 09:30:20', 'new');
INSERT INTO item(name, subcategory_id, popularity, description, color, size, starting_price, buy_now_price, start_date, end_date, condition)
  VALUES ('Women t-shirt', (SELECT id FROM "subcategory" where name = 'Clothes'), 50, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et urna lectus. Duis id sapien.',
  'grey', null, 25.00, 40.00, '2017-03-18 09:30:20', '2018-09-20 09:30:20', 'new');
INSERT INTO item(name, subcategory_id, popularity, description, color, size, starting_price, buy_now_price, start_date, end_date, condition)
  VALUES ('Suzuki motorcycle', (SELECT id FROM "subcategory" where name = 'Motorcycles'), 40, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et urna lectus. Duis id sapien.',
  'blue', null, 250.00, 300.00, '2012-09-12 05:35:00', '2018-03-26 09:30:20', 'new');
INSERT INTO item(name, subcategory_id, popularity, description, color, size, starting_price, buy_now_price, start_date, end_date, condition)
  VALUES ('Rolex watch', (SELECT id FROM "subcategory" where name = 'Wristwatch'), 30, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et urna lectus. Duis id sapien.',
  'grey', null, 450.00, 750.00, '2001-03-13 09:30:20', '2018-06-22 09:30:20', 'new');
INSERT INTO item(name, subcategory_id, popularity, description, color, size, starting_price, buy_now_price, start_date, end_date, condition)
  VALUES ('Minions for kids', (SELECT id FROM "subcategory" where name = 'Toys'), 20, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et urna lectus. Duis id sapien.',
  'yellow', null, 5.00, 10.00, '2000-03-14 09:30:20', '2018-10-23 09:30:20', 'new');
INSERT INTO item(name, subcategory_id, popularity, description, color, size, starting_price, buy_now_price, start_date, end_date, condition)
  VALUES ('Shoes', (SELECT id FROM "subcategory" where name = 'Shoes'), 20, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et urna lectus. Duis id sapien.',
  'grey', null, 35.00, 100.00, '2017-08-10 03:10:05', '2018-11-28 09:30:20', 'new');
INSERT INTO item(name, subcategory_id, popularity, description, color, size, starting_price, buy_now_price, start_date, end_date, condition)
  VALUES ('Sneakers for man', (SELECT id FROM "subcategory" where name = 'Shoes'), 20, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et urna lectus. Duis id sapien.',
  'blue', null, 45.00, 120.00, '2016-05-21 06:40:50', '2018-10-10 09:30:20', 'new');


INSERT INTO item_photo(item_id, photo_path) SELECT item.id, 'https://abhpraksa201805.s3.amazonaws.com/golf-7.jpg' FROM item where name = 'Golf7';
INSERT INTO item_photo(item_id, photo_path) SELECT item.id, 'https://abhpraksa201805.s3.amazonaws.com/house.jpg' FROM item where name = 'House for big family';
INSERT INTO item_photo(item_id, photo_path) SELECT item.id, 'https://abhpraksa201805.s3.amazonaws.com/komp.png' FROM item where name = 'Desktop computer Dell';
INSERT INTO item_photo(item_id, photo_path) SELECT item.id, 'https://abhpraksa201805.s3.amazonaws.com/lg-g3.jpeg' FROM item where name = 'LG G3 mobile phone';
INSERT INTO item_photo(item_id, photo_path) SELECT item.id, 'https://abhpraksa201805.s3.amazonaws.com/min.jpg' FROM item where name = 'Minions for kids';
INSERT INTO item_photo(item_id, photo_path) SELECT item.id, 'https://abhpraksa201805.s3.amazonaws.com/patika.jpg' FROM item where name = 'Sneakers for man';
INSERT INTO item_photo(item_id, photo_path) SELECT item.id, 'https://abhpraksa201805.s3.amazonaws.com/porse.jpg' FROM item where name = 'Brand new Porsche car';
INSERT INTO item_photo(item_id, photo_path) SELECT item.id, 'https://abhpraksa201805.s3.amazonaws.com/lopta.jpg' FROM item where name = 'Ball for football';
INSERT INTO item_photo(item_id, photo_path) SELECT item.id, 'https://abhpraksa201805.s3.amazonaws.com/rolex-watch.jpg' FROM item where name = 'Rolex watch';
INSERT INTO item_photo(item_id, photo_path) SELECT item.id, 'https://abhpraksa201805.s3.amazonaws.com/shoes.png' FROM item where name = 'Shoes';
INSERT INTO item_photo(item_id, photo_path) SELECT item.id, 'https://abhpraksa201805.s3.amazonaws.com/suzuki.jpg' FROM item where name = 'Suzuki motorcycle';
INSERT INTO item_photo(item_id, photo_path) SELECT item.id, 'https://abhpraksa201805.s3.amazonaws.com/women_bag.jpg' FROM item where name = 'Women bag';
INSERT INTO item_photo(item_id, photo_path) SELECT item.id, 'https://abhpraksa201805.s3.amazonaws.com/women_t-shirt.jpg' FROM item where name = 'Women t-shirt';


# --- !Downs
TRUNCATE "user", category, subcategory, item, item_photo CASCADE;