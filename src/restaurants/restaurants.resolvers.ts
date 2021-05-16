import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class RestaurantResolver {
  @Query(() => Boolean) // 반환해야 하는 값을 함수의 return값으로 해주면 됨
  isPizzaGood(): boolean {
    return true;
  }
}