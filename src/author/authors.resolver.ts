import {Resolver, Query, Args, Mutation, Subscription, Info} from '@nestjs/graphql';
import { AuthorsService } from './authors.service';
import { Author } from "./models/author.model";
import {NewAuthorInput} from "./dto/new-author.input";
import { PubSub } from "graphql-subscriptions";
import {GetAuthorsArgs} from "./dto/get-authors.args";


const pubSub = new PubSub();

@Resolver((of: void | undefined) => Author)
export class AuthorsResolver {
    constructor(
        private authorsService: AuthorsService,
    ) {}

    @Subscription((returns) => Author)
    authorAdded() {
        return pubSub.asyncIterator('authorAdded');
    }

    @Query(returns => [Author])
    async getAllAuthors(@Args() args: GetAuthorsArgs ) {
        return this.authorsService.findMany(args);
    }

    @Query(returns => Author)
    async getAuthorById(@Args('id', { type: () => String }) id: string) {
        return this.authorsService.findOne(id);
    }

    @Mutation(returns => Author)
    async addAuthor(
        @Args('newAuthorData') newAuthorData: NewAuthorInput,
    ): Promise<Author> {
        const createdAuthor = await this.authorsService.create(newAuthorData);
        await pubSub.publish('authorAdded', {authorAdded: createdAuthor});
        return createdAuthor;
    }
}