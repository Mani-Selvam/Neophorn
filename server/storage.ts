import { contactRequests, type InsertContactRequest, type ContactRequest } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  createContactRequest(request: InsertContactRequest): Promise<ContactRequest>;
}

export class DatabaseStorage implements IStorage {
  async createContactRequest(request: InsertContactRequest): Promise<ContactRequest> {
    const [contactRequest] = await db
      .insert(contactRequests)
      .values(request)
      .returning();
    return contactRequest;
  }
}

export const storage = new DatabaseStorage();
