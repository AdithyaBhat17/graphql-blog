require('dotenv').config();

import express from 'express';
import mongoose from "mongoose";
import graphqlHTTP from 'express-graphql';

import schema from './schema';

const app = express();

const PORT = 8080;

const { DB_PASSWORD, DB_URL, DB_USERNAME } = process.env

mongoose.Promise = global.Promise;
mongoose
    .connect(
        `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_URL}/graphql-blog`,
        {
            useNewUrlParser: true
        }
    )
    .then(
        () => console.log('connected to mongodb'),
        (error) => console.log('Mongo Error: ', error)
    );

app.get('/', (_req, res) => {
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