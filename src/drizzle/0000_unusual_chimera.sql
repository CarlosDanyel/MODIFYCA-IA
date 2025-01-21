CREATE TABLE IF NOT EXISTS "account" (
	"userId" text NOT NULL,
	"type" text NOT NULL,
	"provider" text NOT NULL,
	"providerAccountId" text NOT NULL,
	"refresh_token" text,
	"access_token" text,
	"expires_at" integer,
	"token_type" text,
	"scope" text,
	"id_token" text,
	"session_state" text
);

CREATE TABLE IF NOT EXISTS "authenticator" (
	"credentialID" text NOT NULL,
	"userId" text NOT NULL,
	"providerAccountId" text NOT NULL,
	"credentialPublicKey" text NOT NULL,
	"counter" integer NOT NULL,
	"credentialDeviceType" text NOT NULL,
	"credentialBackedUp" boolean NOT NULL,
	"transports" text,
	CONSTRAINT "authenticator_credentialID_unique" UNIQUE("credentialID")
);

CREATE TABLE IF NOT EXISTS "resumes" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" text NOT NULL,
	"data" json DEFAULT '{}'::json NOT NULL,
	"user_id" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "session" (
	"sessionToken" text PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"expires" timestamp NOT NULL
);

CREATE TABLE IF NOT EXISTS "user" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text,
	"email" text,
	"emailVerified" timestamp,
	"image" text,
	CONSTRAINT "user_email_unique" UNIQUE("email")
);

CREATE TABLE IF NOT EXISTS "verificationToken" (
	"identifier" text NOT NULL,
	"token" text NOT NULL,
	"expires" timestamp NOT NULL
);

-- Verificação e adição das constraints uma por uma

-- Verifica e adiciona a constraint na tabela "account"
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'account_userId_user_id_fk') THEN
        ALTER TABLE "account" 
        ADD CONSTRAINT "account_userId_user_id_fk" 
        FOREIGN KEY ("userId") REFERENCES "public"."user"("id") 
        ON DELETE CASCADE 
        ON UPDATE NO ACTION;
    END IF;
END $$;

-- Verifica e adiciona a constraint na tabela "authenticator"
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'authenticator_userId_user_id_fk') THEN
        ALTER TABLE "authenticator" 
        ADD CONSTRAINT "authenticator_userId_user_id_fk" 
        FOREIGN KEY ("userId") REFERENCES "public"."user"("id") 
        ON DELETE CASCADE 
        ON UPDATE NO ACTION;
    END IF;
END $$;

-- Verifica e adiciona a constraint na tabela "resumes"
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'resumes_user_id_user_id_fk') THEN
        ALTER TABLE "resumes" 
        ADD CONSTRAINT "resumes_user_id_user_id_fk" 
        FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") 
        ON DELETE CASCADE 
        ON UPDATE NO ACTION;
    END IF;
END $$;

-- Verifica e adiciona a constraint na tabela "session"
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'session_userId_user_id_fk') THEN
        ALTER TABLE "session" 
        ADD CONSTRAINT "session_userId_user_id_fk" 
        FOREIGN KEY ("userId") REFERENCES "public"."user"("id") 
        ON DELETE CASCADE 
        ON UPDATE NO ACTION;
    END IF;
END $$;
