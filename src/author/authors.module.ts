import { Module } from '@nestjs/common';
import { AuthorsResolver } from './authors.resolver';
import { AuthorsService } from './authors.service';
import {PrismaModule} from "nestjs-prisma";

@Module({
    providers: [AuthorsResolver, AuthorsService],
    imports: [PrismaModule],
})
export class AuthorsModule {}