import "dotenv/config";
import "reflect-metadata";

import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";

import { errors } from "celebrate";
import cors from "cors";
import "express-async-errors";

import AppError from "@shared/errors/AppError";
import routes from "@shared/infra/http/routes";
import "@shared/infra/typeorm";
import "@shared/container";

// Constants
const PORT = 3333;

const app = express();
app.use(morgan('combined'))

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

app.get("/", (req, res) => {
    res.status(201);
});

app.get("/ping", (req, res) => {
    res.status(200).send("pong");
});

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof AppError) {
            return response.status(err.statusCode).json({
                message: err.message,
            });
        } else if (err instanceof Error) {
            return response.status(500).json({
                message: err.message,
            });
        } else {
            return response.status(500).json({
                message: "Internal server error",
            });
        }
    }
);

app.listen(3333, () => {
    console.log(`Server started on port ${PORT}`);
});
