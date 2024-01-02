module.exports = class Data1704177211552 {
    name = 'Data1704177211552'

    async up(db) {
        await db.query(`CREATE TABLE "user_fname" ("id" character varying NOT NULL, "fname" text NOT NULL, "token_uri" text, "created_at_block" numeric NOT NULL, "created_at_timestamp" numeric, "user_id" character varying, CONSTRAINT "PK_465d89a1efbba60d4fc190b0c49" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_4ba3e61edaeb2ddf479d4d9b26" ON "user_fname" ("user_id") `)
        await db.query(`CREATE TABLE "user" ("id" character varying NOT NULL, "f_id" numeric NOT NULL, "address" text NOT NULL, "url" text, "created_at_block" numeric NOT NULL, "created_at_timestamp" numeric, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`)
        await db.query(`ALTER TABLE "user_fname" ADD CONSTRAINT "FK_4ba3e61edaeb2ddf479d4d9b264" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "user_fname"`)
        await db.query(`DROP INDEX "public"."IDX_4ba3e61edaeb2ddf479d4d9b26"`)
        await db.query(`DROP TABLE "user"`)
        await db.query(`ALTER TABLE "user_fname" DROP CONSTRAINT "FK_4ba3e61edaeb2ddf479d4d9b264"`)
    }
}
