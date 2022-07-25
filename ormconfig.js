require("dotenv/config");

const devConfig = [
    {
        type: "mysql",
        name: "default",
        host: process.env.DB_HOST_DEV,
        port: process.env.DB_PORT_DEV,
        username: process.env.DB_USER_DEV,
        password: process.env.DB_PASS_DEV,
        database: process.env.DB_NAME_DEV,
        migrations: ["./src/shared/infra/typeorm/migrations/*.{ts,js}"],
        entities: ["./src/modules/*/infra/typeorm/entities/*.{ts,js}"],
        cli: {
            migrationsDir: "./src/shared/infra/typeorm/migrations",
        },
    },
];

const prdConfig = [{
    type: "mysql",
    name: "default",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    migrations: ["./dist/shared/infra/typeorm/migrations/*.{ts,js}"],
    entities: ["./dist/modules/*/infra/typeorm/entities/*.{ts,js}"],
    cli: {
        migrationsDir: "./dist/shared/infra/typeorm/migrations",
    },
},];

console.log("Enviroment: ", process.env.NODE_ENV || "prodution");

switch (process.env.NODE_ENV) {
    case "development":
        module.exports = devConfig;
        break;
    default:
        module.exports = prdConfig;
        break;
}
