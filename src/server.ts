import express, { application } from "express";

const port = process.env.API_PORT ? parseInt(process.env.API_PORT) :5001;

const app = express();

app.use()