# --- !Ups

CREATE TABLE paypal(
id serial PRIMARY KEY,
email text
);

CREATE TABLE credit_card(
id serial PRIMARY KEY,
card_number int,
expiration_date DATE
);


CREATE TABLE payments(
id serial PRIMARY KEY,
paypal_id int references paypal(id),
credit_card_id int references credit_card(id)
);

CREATE TABLE category(
id serial PRIMARY KEY,
name text
);

CREATE TABLE subcategory(
id serial PRIMARY KEY,
category_id int references category(id),
name text
);

CREATE TABLE client(
id serial PRIMARY KEY,
first_name text,
last_name text,
username text,
email text,
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
payment_id int references payments(id)
);

CREATE TABLE item(
id serial PRIMARY KEY,
client_id int references client(id),
name text,
popularity int,
description text,
subcategory_id int references subcategory(id),
image1 text,
image2 text,
image3 text,
color text,
size text,
starting_price decimal(12,2),
buy_now_price decimal(12,2),
start_date timestamp,
end_date timestamp,
condition text
);

CREATE TABLE bidding(
id serial PRIMARY KEY,
client_id int references client(id),
bid_price decimal(12,2),
bid_date timestamp,
item_id int references item(id)
);

CREATE TABLE transaction(
id serial PRIMARY KEY,
bidding_id int references bidding(id),
item_id int references item(id),
paid char(1),
order_date date,
ship_date date,
estimated_delivery_date date
);

# --- !Downs

DROP table client;
DROP table item;
DROP table paypal;
DROP table credit_card;
DROP table payments;
DROP table subcategory;
DROP table category;
DROP table bidding;
DROP table transaction;