import { Request, Response } from "express";
import { container } from "tsyringe";

import LoginService from "@modules/auth/infra/services/LoginService";

export default class AuthController {
    public async login (request: Request, response: Response): Promise<Response> {
        const { email, senha } = request.body;

        const loginService = container.resolve(LoginService);

        const resp = await loginService.execute({
            email,
            senha,
        });

        return response.json(resp);
    }
}
