import { ApolloClient, InMemoryCache } from "@apollo/client";
export const client = new ApolloClient({
	uri: "https://api-sa-east-1.graphcms.com/v2/cl4ue9sd30ti601uh4qvq95dr/master",
	cache: new InMemoryCache(),
});
