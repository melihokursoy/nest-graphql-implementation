import { Resolver, Query, Args } from '@nestjs/graphql';
import { AuthorsService } from './authors.service';
import { Author } from "./models/author.model";

@Resolver((of: void | undefined) => Author)
export class AuthorsResolver {
    constructor(
        private authorsService: AuthorsService,
    ) {}

    @Query(returns => [Author])
    async getAllAuthors() {
        const x = await this.authorsService.findAll()
        console.log(x)
        return this.authorsService.findAll();
    }

    @Query(returns => Author)
    async getAuthorById(@Args('id', { type: () => String }) id: string) {
        return this.authorsService.findOne(id);
    }
}