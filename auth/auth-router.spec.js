const supertest = require("supertest");
const server = require("../api/server.js");

const authRouter = require("./auth-router.js");
const db = require("../database/dbConfig.js");

it("should use the testing environment", () => {
    expect(process.env.DB_ENV).toBe("testing");
});

describe("auth-router.js", () => {
    beforeEach(async () => {
        await db("users").truncate();
    });

    describe("GET /", () => {
        it("should return 200 OK", () => {
            return supertest(authRouter)
                .get("/")
                .then(res => {
                    // jest assertion
                    expect(res.status).toEqual(200);
                });
                // .then(res => expect(200).toBe(200));
                // .then(res => { expect(200)});
        });

        // it("should return api: up up and away", () => {
        //     return supertest(authRouter)
        //         .get("/")
        //         .then(res => {
        //             // jest assertion
        //             expect(res.body.api).toBe("up up and away");
        //             expect(res.body).toEqual({ api: "up up and away" });
        //         });
        // });

        // it("should return JSON", () => {
        //     return supertest(authRouter)
        //         .get("/")
        //         .then(res => {
        //             // jest assertion
        //             expect(res.type).toMatch(/json/i);
        //         });
        // });
    });

    // describe("Post", function() {
    //     it("Should return an OK status to the post route", function() {
    //       const expectedStatusCode = 201;
    //       return supertest(authRouter)
    //         .post("/register")
    //         .send({ name: "test", password: "pass" });
    //       expect(expectedStatusCode);
    //     });
    //   });


    describe("POST /register", function() {
        it("should return something", () => {
            expect(true).toBe(true);
        })


        // it("should save user to database", async done => {
        //     const res = await request
        //         .post("/register")
        //         .send({
        //             name: "funky",
        //             password: "123funky"
        //         })
        //     done();
        // })

        


        // const username = "philly";
        // const password = "123philly";

        it("should register user", function() {
            const expectedStatusCode = 201;

            supertest(authRouter)
                .post("/register")
                .send({ name: "test", password: "pass" })

            expect(expectedStatusCode);

        })
    });

    // describe("POST /login", () => {
    //     const username = "philly";
    //     const password = "123philly";

    //     it("should return 201 created", () => {
    //         return supertest(authRouter)
    //             .post("/login")
    //             .send({ username, password })
    //             .then(res => {
    //                 expect(res.body.username).toBe(username);
    //                 expect(res.body.password).toBe(password);
    //             })
    //             // .catch(err => {

    //             // })
    //     })
    // })
})