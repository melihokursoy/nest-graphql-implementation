import { Field, ObjectType } from '@nestjs/graphql';
import { Author as _Author } from "@prisma/client"

@ObjectType()
export class Author implements _Author {
    @Field(type => String,)
    id!: string;

    @Field( type => String, {nullable: true})
    firstName!: string|null;

    @Field(type => String,{nullable: true})
    lastName!: string|null;
}