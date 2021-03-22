const app = express();

const rootCall=(req,res)=>res.send('thank you very much');

app.get('/',rootCall)

app.listen(3000,() => console.log('Listening to port 3000'));