import { Injectable } from '@nestjs/common';
import { Author } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import {NewAuthorInput} from "./dto/new-author.input";
import {GetAuthorsArgs} from "./dto/get-authors.args";

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

    async findMany(args: GetAuthorsArgs): Promise<Author[]> {
        return this.prisma.author.findMany(args);
    }

    async create(data:NewAuthorInput): Promise<Author> {
        return this.prisma.author.create({data});
    }
}