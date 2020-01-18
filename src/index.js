require('dotenv').config();

import express from 'express';
import mongoose from "mongoose";
import graphqlHTTP from 'express-graphql';

import schema from './schema';

const app = express();

const PORT = 8080;

console.log(process.env.DB_PASSWORD)

mongoose.Promise = global.Promise;
mongoose
    .connect(
        `mongodb://cokedmann:${process.env.DB_PASSWORD}@ds013004.mlab.com:13004/graphql-blog`,
        {
            useNewUrlParser: true
        }
    )
    .then(
        () => console.log('connected to mongodb'),
        (error) => console.log('Mongo Error: ', error)
    );

app.get('/', (req, res) => {
    res.json({
        message: 'Hello GraphQL'
    })
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});