// const assert=require("assert");
// const req=require('express/lib/request');
// const {expect}=require('chai');
// const {add}=require("../index");
// describe('This is add function',()=>{
//     it('should add two numbers',()=>{
//         const result=add(2,2);
//         //assert.equal(result,4)
//         expect(result).to.be.eq(4);
//     })
//     //if not a number return zero
//     it('should return 0 if either argumnt is not a number',()=>{
//         const result=add(2,'test');
//         expect(result).to.be.eq(0);
//     })
// })
//PART 2
const chai=require('chai');
const chaiHttp=require('chai-http');
let should=chai.should();
const server=require('../index');
chai.use(chaiHttp);
describe('/GET',()=>{
    it('return the home page',(done)=>{
        chai.request(server)
        .get('/')
        .end((err,res)=>{
            res.should.have.status(200);
            res.text.should.contain('Welcome to Express');
            done();
        })
    })
})
