import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, Length, IsUUID } from 'class-validator';

@InputType()
export class NewAuthorInput {
    @Field(type => String,{ nullable: true })
    @IsOptional()
    @IsUUID()
    id?: string;

    @Field(type => String,{ nullable: true })
    @IsOptional()
    @Length(1, 255)
    firstName?: string;

    @Field(type => String,{ nullable: true })
    @IsOptional()
    @Length(1, 255)
    lastName?: string;
}