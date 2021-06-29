/* eslint-disable no-undef */

const request =require('supertest');
const app=require('../../main');

test('Error for wrong input',async ()=>{
    await request(app).get('/api/books/&655454tt')
    .expect('{"message":"Not found search result for requested value"}');
   
})
test('fetch list of book by name',async ()=>{
    await request(app).get('/api/books/test')
    .expect(200);
})

test('Verify not found case by name',async ()=>{
    await request(app).get('/api/books/lazsdwddsdwedewdewd')
    .expect(400);
})