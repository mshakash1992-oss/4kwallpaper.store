import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { env } from "@/lib/env";
export type UploadInput = { key: string; body: Buffer; contentType: string; cacheControl?: string };
export interface ObjectStorage { put(input: UploadInput): Promise<string>; }
export class S3Storage implements ObjectStorage {
  private client; private config = env();
  constructor() { this.client = new S3Client({ region: this.config.S3_REGION, endpoint: this.config.S3_ENDPOINT, credentials: { accessKeyId: this.config.S3_ACCESS_KEY_ID, secretAccessKey: this.config.S3_SECRET_ACCESS_KEY } }); }
  async put(input: UploadInput) { await this.client.send(new PutObjectCommand({ Bucket: this.config.S3_BUCKET, Key: input.key, Body: input.body, ContentType: input.contentType, CacheControl: input.cacheControl ?? "public, max-age=31536000, immutable" })); return `${this.config.S3_PUBLIC_BASE_URL.replace(/\/$/, "")}/${input.key}`; }
}
