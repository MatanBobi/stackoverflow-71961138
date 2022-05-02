/**
 * these are the happy path responses for endpoints that we want to exist for tests so the pages load properly during tests
 */
import { rest } from "msw";

export const handlers = [
  rest.get("/signin", (req, res, ctx) => {
    debugger;
    return res(ctx.status(200), ctx.json());
  }),
];
