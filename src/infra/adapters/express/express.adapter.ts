import { Response, Request } from "express";
export default class ExpressAdapter {
	constructor(private request: Request, private response: Response) {}
	 async create (fn: any) {
		const req = this.request;
		const res = this.response;
			const obj = await fn({
        body: req.body,
      });
		return res.status(obj.statusCode).json({message: obj.body});
	}
}