import { Injectable } from '@nestjs/common';
import { Author } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import {NewAuthorInput} from "./dto/new-author.input";

@Injectable()
export class AuthorsService {
    constructor(private prisma: PrismaService) {}

    async findOne(id: string): Promise<Author | null> {
        return this.prisma.author.findUnique({
            where: {
                id,
            },
        });
    }

    async findAll(): Promise<Author[]> {
        return this.prisma.author.findMany();
    }

    async create(data:NewAuthorInput): Promise<Author> {
        return this.prisma.author.create({data});
    }
}