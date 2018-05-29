

# --- !Ups

CREATE EXTENSION if not exists pgcrypto;

CREATE TABLE if not exists paypal(
id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
email text
);

CREATE TABLE if not exists credit_card(
id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
card_number int,
expiration_date DATE
);


CREATE TABLE if not exists payment(
id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
credit_card_id UUID,
paypal_id UUID,
CONSTRAINT payment_paypal_id FOREIGN KEY (paypal_id) references paypal(id) ON UPDATE CASCADE ON DELETE RESTRICT,
CONSTRAINT payment_credit_card_id FOREIGN KEY (credit_card_id) references credit_card(id) ON UPDATE CASCADE ON DELETE RESTRICT
);

CREATE TABLE if not exists category(
id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
name text
);

CREATE TABLE if not exists subcategory(
id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
category_id UUID,
CONSTRAINT subcategory_category_id FOREIGN KEY (category_id) references category(id) ON UPDATE CASCADE ON DELETE RESTRICT,
name text
);

CREATE TABLE if not exists "user"(
id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
first_name text NOT NULL,
last_name text NOT NULL,
username text NOT NULL,
profile_picture text,
email text NOT NULL UNIQUE,
gender char(1),
birth date,
phone_number text,
phone_verified bit,
address text,
city text,
zip text,
state text,
country text,
rating decimal(2,1),
payment_id UUID,
CONSTRAINT user_payment_id FOREIGN KEY (payment_id) references payment(id) ON UPDATE CASCADE ON DELETE RESTRICT
);

CREATE TABLE if not exists item(
id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
user_id UUID,
subcategory_id UUID,
name text NOT NULL,
popularity int,
description text,
color text,
size text,
starting_price decimal(12,2),
buy_now_price decimal(12,2),
start_date timestamp,
end_date timestamp,
condition text,
CONSTRAINT item_user_id FOREIGN KEY (user_id) references "user"(id) ON UPDATE CASCADE ON DELETE RESTRICT,
CONSTRAINT item_subcategory_id FOREIGN KEY (subcategory_id) references subcategory(id) ON UPDATE CASCADE ON DELETE RESTRICT
);

CREATE TABLE if not exists bidding(
id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
user_id UUID,
item_id UUID,
bid_price decimal(12,2),
bid_date timestamp,
CONSTRAINT bidding_user_id FOREIGN KEY (user_id) references "user"(id) ON UPDATE CASCADE ON DELETE RESTRICT,
CONSTRAINT bidding_item_id FOREIGN KEY (item_id) references item(id) ON UPDATE CASCADE ON DELETE RESTRICT
);

CREATE TABLE if not exists "order"(
id UUID PRIMARY KEY default gen_random_uuid(),
bidding_id UUID,
item_id UUID,
paid boolean DEFAULT false,
order_date date,
ship_date date,
estimated_delivery_date date,
CONSTRAINT order_bidding_id FOREIGN KEY (bidding_id) references bidding(id) ON UPDATE CASCADE ON DELETE RESTRICT,
CONSTRAINT order_item_id FOREIGN KEY (item_id) references item(id) ON UPDATE CASCADE ON DELETE RESTRICT
);

CREATE TABLE if not exists item_photo(
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  item_id UUID,
  photo_path text,
  CONSTRAINT item_photo_id FOREIGN KEY (item_id) references item(id) ON UPDATE CASCADE ON DELETE RESTRICT
);


# --- !Downs

<<<<<<< b960e14c022738ee71d217503417bd5c123699c8
ALTER TABLE payment DROP CONSTRAINT payment_credit_card_id;
ALTER TABLE payment DROP CONSTRAINT payment_paypal_id;
ALTER table subcategory DROP CONSTRAINT subcategory_category_id;
ALTER TABLE "user" DROP CONSTRAINT user_payment_id;
ALTER TABLE item DROP CONSTRAINT item_user_id;
ALTER TABLE item DROP CONSTRAINT item_subcategory_id;
ALTER TABLE bidding DROP CONSTRAINT bidding_user_id;
ALTER TABLE bidding DROP CONSTRAINT bidding_item_id;
ALTER TABLE "order" DROP CONSTRAINT order_bidding_id;
ALTER TABLE "order" DROP CONSTRAINT order_item_id;
ALTER TABLE item_photo DROP CONSTRAINT item_photo_id;

DROP table if exists paypal;
DROP table if exists credit_card;
DROP table if exists payment;
DROP table if exists subcategory;
DROP CASCADE table if exists "user";
DROP table if exists item;
DROP TABLE if exists bidding;
DROP TABLE if exists "order";
DROP TABLE if exists item_photo;
=======
DROP table if exists paypal;
DROP table if exists credit_card;
ALTER TABLE payment DROP CONSTRAINT payment_credit_card_id;
ALTER TABLE payment DROP CONSTRAINT payment_paypal_id;
DROP table if exists payment;
ALTER table subcategory DROP CONSTRAINT subcategory_category_id;
DROP table if exists subcategory;
ALTER TABLE "user" DROP CONSTRAINT user_payment_id;
DROP table if exists "user";
ALTER TABLE item DROP CONSTRAINT item_user_id;
ALTER TABLE item DROP CONSTRAINT item_subcategory_id;
DROP table if exists item;
ALTER TABLE bidding DROP CONSTRAINT bidding_user_id;
ALTER TABLE bidding DROP CONSTRAINT bidding_item_id;
DROP TABLE if exists bidding;
ALTER TABLE "order" DROP CONSTRAINT order_bidding_id;
ALTER TABLE "order" DROP CONSTRAINT order_item_id;
DROP TABLE if exists "order";
ALTER TABLE item_photo DROP CONSTRAINT item_photo_id;
DROP TABLE if exists item_photo;

>>>>>>> Landing-page(2)
