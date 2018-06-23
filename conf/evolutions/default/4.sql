# --- !Ups

CREATE TABLE if not exists tokens(
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID,
  token text,
  date timestamp,
  CONSTRAINT user_tokens_id FOREIGN KEY (user_id) references "user"(id) ON UPDATE CASCADE
);

# --- !Downs
ALTER TABLE tokens DROP CONSTRAINT user_tokens_id;
DROP TABLE if exists tokens;