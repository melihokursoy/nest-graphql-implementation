import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {

    const users = [
        {
            "id": "0e4d8268-95f8-4fa5-a740-78b29187020e",
            "firstName": "John",
            "lastName": "Doe"
        },
        {
            "id": "81e192f1-7fff-468d-bdcb-3fc9196a5123",
            "firstName": "Jane",
            "lastName": "Doe"
        },
        {
            "id": "18d69401-ec1d-4a8d-ba15-eadb04e51ca1",
            "firstName": "Jack",
            "lastName": "Doe"
        }
    ]

    for ( let user of users){
        await prisma.author.create({
            data:{...user}
        })
    }

}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })