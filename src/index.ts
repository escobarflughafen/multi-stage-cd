import express, {Request, Response} from "express";

function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random()*(max-min+1)) + min;    
}


const app = express();
const port = process.env.PORT || 3000;

app.get('/random', (req: Request, res: Response) => {
    const min = parseInt(req.query.min as string) || 1;
    const max = parseInt(req.query.max as string) || 100;
    const randomNumber = getRandomNumber(min, max);

    res.json({randomNumber});
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})