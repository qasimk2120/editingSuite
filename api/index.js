import express from 'express';


const router = express.Router();
import 'dotenv/config';

const app = express();

const port = process.env.PORT || 3000;

router.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use(router);
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})