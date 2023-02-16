# KiwiDrop for Landing

## Warning

This project uses Parcel to build source code. Parcel is a zero-configuration and product-level build tool. **So if you want to add a config, ask yourself do you really need to add the config? Or you just misunderstood.** Keep the tip in mind.

## How to run

### Local Development

`npm install`

`npm start`

> _`NPM` is the recommended package manager. You can also use other package manager tools like `pnpm`. But if you use other tools, do not commit it to repo. You can add the lock file to `.gitignore` to use it locally._

### Preview and Debug `parcel build`

`npm install`

`npm run debug`

## How to log in

> Your phone number needs to be added to the whitelist.

You can Log in with your phone number and any verification code on development environment, because the back-end does not check the verification code.

Since log-in with Chinese phone number is removed from production environment, you need adding a query string to url to force using Chinese phone number.

```
https://app.kiwidrop.com/login?phone_country=86
```

## How to use Environment Variables

1. Add environment variables to both `.env.development` and `.env.production` files.
2. Inject environment variables to `src/constants/envconfig.ts` file.
3. `import envconfig from '@/constants/envconfig';`
4. `const excludeCountries = envconfig.EXCLUDE_REGISTER_COUNTRIES;`
