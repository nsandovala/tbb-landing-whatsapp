CREATE TYPE "public"."fulfillment_type" AS ENUM('retiro', 'delivery');--> statement-breakpoint
CREATE TYPE "public"."order_status" AS ENUM('procesando', 'confirmado', 'en_preparacion', 'listo');--> statement-breakpoint
CREATE TYPE "public"."payment_method" AS ENUM('transferencia', 'efectivo');--> statement-breakpoint
CREATE TABLE "orders" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"order_number" serial NOT NULL,
	"tenant_id" text DEFAULT 'tbb' NOT NULL,
	"status" "order_status" DEFAULT 'procesando' NOT NULL,
	"fulfillment" "fulfillment_type" NOT NULL,
	"customer_name" text NOT NULL,
	"customer_phone" text NOT NULL,
	"address" text,
	"items" jsonb NOT NULL,
	"subtotal" integer NOT NULL,
	"total" integer NOT NULL,
	"payment_method" "payment_method" DEFAULT 'transferencia' NOT NULL,
	"notes" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE INDEX "orders_tenant_idx" ON "orders" USING btree ("tenant_id");--> statement-breakpoint
CREATE INDEX "orders_status_idx" ON "orders" USING btree ("status");--> statement-breakpoint
CREATE INDEX "orders_phone_idx" ON "orders" USING btree ("customer_phone");--> statement-breakpoint
CREATE INDEX "orders_created_idx" ON "orders" USING btree ("created_at");