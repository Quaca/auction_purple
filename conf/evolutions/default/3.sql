# --- !Ups
  ALTER TABLE "user"
  ADD COLUMN hash text;

  ALTER TABLE "user"
  ADD COLUMN salt text;


# ---!Downs
  ALTER TABLE "user"
  DROP COLUMN hash;

  ALTER TABLE "user"
  DROP COLUMN salt;