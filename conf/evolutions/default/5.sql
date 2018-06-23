# --- !Ups

CREATE TABLE if not exists subscriber(
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email text
);

# --- !Downs
DROP TABLE if exists subscriber;