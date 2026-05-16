import type { Request, Response } from "express";

import type {
  ApiSuccessResponse,
} from "../../common/types/api-response";
import type {
  CreateAgentResponse,
  ListAgentsResponse,
} from "./agents.types";
import { agentsService } from "./agents.service";

export const listAgents = (
  _request: Request,
  response: Response<ApiSuccessResponse<ListAgentsResponse>>,
): void => {
  response.status(200).json({
    success: true,
    data: agentsService.listAgents(),
  });
};

export const createAgent = (
  request: Request,
  response: Response<ApiSuccessResponse<CreateAgentResponse>>,
): void => {
  response.status(201).json({
    success: true,
    data: agentsService.createAgent(request.body),
  });
};
