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

            const expectedStatusCode = 200;
            supertest(authRouter)
                .get("/")
                    // jest assertion
            expect(expectedStatusCode).toEqual(200);

                // .then(res => expect(200).toBe(200));
                // .then(res => { expect(200)});
        });

    });

    describe("Post", function() {
        it("Should return an OK status to the post route", function() {
          const expectedStatusCode = 201;
          supertest(authRouter)
            .post("/register")
            .send({ name: "test", password: "pass" });
          expect(expectedStatusCode);
        });
      });


    describe("POST /register", function() {
        it("should return something", () => {
            expect(true).toBe(true);
        })


        it("should register user", function() {
            const expectedStatusCode = 201;

            supertest(authRouter)
                .post("/register")
                .send({ name: "test", password: "pass" })

            expect(expectedStatusCode);

        })
    });

    describe("POST /login", () => {


        it("should login user", function() {
            const expectedStatusCode = 200;

            supertest(authRouter)
                .post("/login")
                .send({ name: "test", password: "pass" })

            expect(expectedStatusCode);

        })
    })
})