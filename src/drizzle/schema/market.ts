// drizzle/schema.ts
import {
  serial,
  varchar,
  timestamp,
  text,
  boolean,
  date,
  decimal,
  smallint,
  pgTable,
  integer,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import { int } from "drizzle-orm/mysql-core";

export const userTb = pgTable("user", {
  user_id: serial("user_id").primaryKey(),
  display_name: varchar("display_name", { length: 255 }).notNull(),
  username: varchar("username", { length: 255 }).notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  birthday: date("birthday"),
  contact: varchar("contact", { length: 20 }), // Manual input for phone number
  about: text("about"), // Optional, can be NULL
  email: varchar("email", { length: 255 }),
  active: boolean("active").default(true), // Default is active
  blocked: boolean("blocked").default(false), // Default is not blocked
  user_type: integer("user_type").notNull(), // 1 = customer, 2 = store/seller/farmer
  date_added: timestamp("date_added").defaultNow().notNull(),
  date_updated: timestamp("date_updated").defaultNow().notNull(),
});

export const userAuthTb = pgTable("user_auth", {
  auth_id: varchar("auth_id", { length: 200 }).primaryKey(), // Primary key, varchar(100)
  user_id: serial("user_id").references(() => userTb.user_id),
  type_id: integer("type_id")
    .notNull()
    .default(sql`1`), // smallint(2), not null, indexed
  auth_email: varchar("auth_email", { length: 70 }).notNull(), // varchar(70), not null
  auth_token: varchar("auth_token", { length: 400 }), // varchar(400), no default value
  auth_username: varchar("auth_username", { length: 30 }).notNull(), // varchar(30), not null
  auth_user_birth_date: date("auth_user_birth_date")
    .notNull()
    .default(sql`1879-01-01`), // date, default 1879-01-0
  date_added: timestamp("date_added")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`), // timestamp, default CURRENT_TIMESTAMP
  date_updated: timestamp("date_updated")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});
export const userImageTb = pgTable("user_image", {
  image_id: serial("image_id").primaryKey(), // Primary key, varchar(100)
  user_id: integer("user_id").references(() => userTb.user_id),
  image_url: varchar("image_url", { length: 500 }).notNull(), // varchar(500 ), not null
  image_type_id: smallint("image_type_id"), // 1= profile image, 2= gallery, 3=banner
  date_added: timestamp("date_added")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`), // timestamp, default CURRENT_TIMESTAMP
  date_updated: timestamp("date_updated")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

export const userEmailTb = pgTable("user_email", {
  email_id: integer("email_id").primaryKey(), // Primary key, int(11)
  user_email: varchar("user_email", { length: 70 }).notNull(), // varchar(70), not null
  date_added: timestamp("date_added")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`), // timestamp, default CURRENT_TIMESTAMP
  date_updated: timestamp("date_updated")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

export const userPasswordTb = pgTable("user_password", {
  pass_id: integer("pass_id").primaryKey(), // Primary key,
  user_id: serial("user_id").references(() => userTb.user_id),
  hash_password: varchar("hash_password", { length: 350 }).notNull(), // varchar(70), not null
  is_primary: integer("is_primary").notNull().default(1), // is_primary=1 current password,is_primary=2 means old password
  date_added: timestamp("date_added")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`), // timestamp, default CURRENT_TIMESTAMP
  date_updated: timestamp("date_updated")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

export const userLoginTb = pgTable("user_login", {
  login_id: integer("login_id").primaryKey(), // Primary key, int(11)
  user_id: serial("user_id").references(() => userTb.user_id), // varchar(70), not null
  type_id: integer("type_id").notNull(), // type_id(1 google 2=email)
  is_signup: integer("is_signup").notNull().default(1), // 1=login 2=signup
  date_added: timestamp("date_added")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`), // timestamp, default CURRENT_TIMESTAMP
  date_updated: timestamp("date_updated")
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});
