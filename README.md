## Getting Started
First, install dependencies.
```bash
npm install
or
yarn install

```

Next, create a 
```.env.local```

Next, we need to fill that ```.env.local``` by making an ```auth0.com``` account:
-Go to [https://auth0.com](https://auth0.com) and create an account.

-On the dashboard go to ```applications``` tab and click 'applications'.

-Create a new application by selecting ```Create Application``` name your application ```auth0 app name``` and select 'single page application'.

-Go back to ```applications``` and click 'applications' select your ```auth0 app name```.

-Inside this page copy your ```Domain```, ```Client ID``` and ```Client Secret```.

-Go to [https://www.mongodb.com/atlas/database](https://www.mongodb.com/atlas/database) and set up a mongo database.

-Fill with the following env variables:
```bash
AUTH0_SECRET='Your own string, can be anything'
AUTH0_BASE_URL=http://localhost:3000
AUTH0_ISSUER_BASE_URL='Your Domain'
AUTH0_CLIENT_ID='Your Client ID'
AUTH0_CLIENT_SECRET='Your Client Secret'
AUTH0_AUDIENCE=
AUTH0_SCOPE=openid profile

MONGODB_URI='Link your mongo database'
```
-or if your lazy like me just copy this into ```.env.local```:
```bash
AUTH0_SECRET=fabdfhabdlfabfha
AUTH0_BASE_URL=http://localhost:3000
AUTH0_ISSUER_BASE_URL=https://dev-gbiq18a0ce6tgl34.us.auth0.com
AUTH0_CLIENT_ID=VHQiYUCSpfRN84ae0Ah9T4KkFFztTLDA
AUTH0_CLIENT_SECRET=125K_A-jzNzrI3eCHaFGPH8GNl4V1jrkvkjunGObFo1a_ALyF6ix-z_BrBTqI-Hf
AUTH0_AUDIENCE=
AUTH0_SCOPE=openid profile

MONGODB_URI=mongodb+srv://admin:admin@cluster0.mbarqms.mongodb.net/mongoNext?retryWrites=true&w=majority
```

Finally, run the development server:

```bash
npm run dev
or
yarn dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



AUTH0_SECRET=fabdfhabdlfabfha
AUTH0_BASE_URL=http://localhost:3000
AUTH0_ISSUER_BASE_URL=https://dev-gbiq18a0ce6tgl34.us.auth0.com
AUTH0_CLIENT_ID=VHQiYUCSpfRN84ae0Ah9T4KkFFztTLDA
AUTH0_CLIENT_SECRET=125K_A-jzNzrI3eCHaFGPH8GNl4V1jrkvkjunGObFo1a_ALyF6ix-z_BrBTqI-Hf
AUTH0_AUDIENCE=
AUTH0_SCOPE=openid profile

MONGODB_URI=mongodb+srv://admin:admin@cluster0.mbarqms.mongodb.net/mongoNext?retryWrites=true&w=majority
