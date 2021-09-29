const sanityClient = require('@sanity/client')
const client = sanityClient({
    projectId: 'ic8mtd9i',
    dataset: 'production',
    apiVersion: '2021-09-29', // use current UTC date - see "specifying API version"!
    token: process.env.SANITY_APP_TOKEN, // or leave blank for unauthenticated usage
    useCdn: true, // false if you want to ensure fresh data
})


const query = "*[_type == 'pet']";



client.fetch(query).then((pets) => {
    setPets(pets);
    console.log(pets);
}).catch((error) => {console.log(error)})
return () => {
  setPets([]);
}