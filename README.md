# California Christ Community Church

Repository for C4 Ministry's website.

## Technologies Used

Next.js, React, TypeScript, styled-components, Webpack, Babel, Now

---

## Installation

Using `node >= 10.15.3` and `npm >= 6.4.1`,

```bash
git clone git@github.com:phc5/nextjs-c4.git
cd nextjs-c4
npm install
```

---

## Development

Run in dev mode:

```bash
npm run dev
```

Run in build/"prod" mode:

```bash
npm run build
npm run start
```

Analyze bundle size (server & client):

```bash
npm run analyze
```

---

## Deployment

Every push to the master branch of this repository triggers a hook to deploy to Now.

View deployment details in the latest commit to master.

### Environment Variables

There are several environment variables that are used to retreive data such as Youtube videos and Tumblr blog posts. When setting up deployments to Now, these environment variables need to be set up on the Now platform.

[Now docs on adding secrets](https://zeit.co/docs/v2/build-step#adding-secrets)

Steps to add environment variables:

1. Install Now either in your project directory or globally.
2. Run this command in your project directory: `now`.
3. You will be prompted to connect your account via email.
4. Add your secret using: `now secrets add <secret-name> <secret-value>`.
5. Create a file callsed `now.json`.
6. Reference the added `<secret-name>` like this `@<secret-name>`. For example:
   ```json
   {
     "build": {
       "env": {
         "YOUTUBE_API_KEY": "@youtube_api_key",
         "YOUTUBE_CHANNEL_ID": "@youtube_channel_id",
         "TUMBLR_API_KEY": "@tumblr_api_key"
       }
     }
   }
   ```
7. You can now reference these environment variables in your `next.config.js` and in your app.
8. While your developing locally, you can just create a `.env` file and reference the environment variables.

---

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## License

[MIT](https://choosealicense.com/licenses/mit/)
