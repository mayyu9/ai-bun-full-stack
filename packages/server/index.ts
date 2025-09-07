import express from 'express';
import type { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    res.send(process.env.OPENAI_API_KEY);
});

app.get('/api/hello', (req: Request, res: Response) => {
    res.send({
        "message": "hello world !!"
    });
});

app.listen(port, () => {
    console.log(`server is running on htttp:localhost: ${port}`);
});