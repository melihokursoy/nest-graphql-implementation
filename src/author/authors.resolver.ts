import {Resolver, Query, Args, Mutation} from '@nestjs/graphql';
import { AuthorsService } from './authors.service';
import { Author } from "./models/author.model";
import {NewAuthorInput} from "./dto/new-author.input";

@Resolver((of: void | undefined) => Author)
export class AuthorsResolver {
    constructor(
        private authorsService: AuthorsService,
    ) {}

    @Query(returns => [Author])
    async getAllAuthors() {
        return this.authorsService.findAll();
    }

    @Query(returns => Author)
    async getAuthorById(@Args('id', { type: () => String }) id: string) {
        return this.authorsService.findOne(id);
    }

    @Mutation(returns => Author)
    async addAuthor(
        @Args('newAuthorData') newAuthorData: NewAuthorInput,
    ): Promise<Author> {
        return this.authorsService.create(newAuthorData);
    }
}