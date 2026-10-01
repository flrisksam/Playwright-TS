import dotenv from 'dotenv';
import path from 'path';

// Load env file based on NODE_ENV (defaults to "qa"). Falls back to a plain
// .env file if the environment-specific one is not found.
const env = process.env.NODE_ENV || 'qa';
const envFile = path.resolve(__dirname, '..', '..', `.env.${env}`);
dotenv.config({ path: envFile });
dotenv.config(); // load .env as a fallback / local override

function required(name: string, fallback?: string): string {
  const value = process.env[name] ?? fallback;
  if (value === undefined) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export const config = {
  env,
  baseUrl: required('BASE_URL', 'https://rahulshettyacademy.com/AutomationPractice/'),
  headless: (process.env.HEADLESS ?? 'true') === 'true',
};

export type AppConfig = typeof config;
