import supertest from 'supertest'
import { app } from '../src'

const request = supertest(app)

describe('Demo test', () => {
    it('should addition correctly', () => {
        expect(1 + 1).toBe(2)
    })
})

describe('API test', () => {
    it('should get hello world', async () => {
        const response = await request.get('/')
        expect(response.status).toBe(200)
        expect(response.body.message).toBe('Hello, world')

    })
})

