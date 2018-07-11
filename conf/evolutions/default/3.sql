# --- !Ups
  ALTER TABLE "user"
  ADD COLUMN if not exists hash text;

  ALTER TABLE "user"
  ADD COLUMN if not exists salt text;


# ---!Downs
  ALTER TABLE "user"
  DROP COLUMN hash;

  ALTER TABLE "user"
  DROP COLUMN salt;