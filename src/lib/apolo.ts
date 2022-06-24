import { ApolloClient, InMemoryCache } from "@apollo/client";
export const client = new ApolloClient({
	uri: "https://api-sa-east-1.graphcms.com/v2/cl4rgb2gx11yu01yyhoggci0g/master",
	cache: new InMemoryCache(),
});
