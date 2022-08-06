import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import getConfig from 'next/config';

//import * as AuthAPI from 'src/lib/api/ext-auth';

const {serverRuntimeConfig} = getConfig();

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  // https://next-auth.js.org/configuration/providers
  providers: [
    Providers.Credentials({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Ethereum',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        signature: {
          label: 'Signature',
          type: 'text',
          placeholder: '0x0',
        },
      },
      async authorize(credentials: Record<string, string>) {
        if (!credentials?.signature) throw Error('no signature!');

        //const data = AuthAPI.login({
        //id,
        //signature,
        //})

        //if (!data?.token) throw Error('authorization problem!');

        //const {encryptedMessage, initVec} = encryptMessage(
        //data.token,
        //serverRuntimeConfig.appSecret,
        //);

        return {
          address: credentials.address,
          nonce: credentials.nonce,
        };
      },
    }),
  ],
  // The secret should be set to a reasonably long random string.
  // It is used to sign cookies and to sign and encrypt JSON Web Tokens, unless
  // a separate secret is defined explicitly for encrypting the JWT.

  secret: serverRuntimeConfig.appSecret,
  session: {
    jwt: true,
  },

  // JSON Web tokens are only used for sessions if the `jwt: true` session
  // option is set - or by default if no database is specified.
  // https://next-auth.js.org/configuration/options#jwt
  jwt: {
    // A secret to use for key generation (you should set this explicitly)
    secret: serverRuntimeConfig.jwtSecret,
  },

  // You can define custom pages to override the built-in ones. These will be regular Next.js pages
  // so ensure that they are placed outside of the '/api' folder, e.g. signIn: '/auth/mycustom-signin'
  // The routes shown here are the default URLs that will be used when a custom
  // pages is not specified for that route.
  // https://next-auth.js.org/configuration/pages
  pages: {
    //TODO: need to differentiate params here between signIn and signOut
    signIn: '/minting/lima-beach', // Displays signin buttons
    signOut: '/minting/lima-beach', // Displays form with sign out button
    error: '/', // Error code passed in query string as ?error=
  },

  // Callbacks are asynchronous functions you can use to control what happens
  // when an action is performed.
  // https://next-auth.js.org/configuration/callbacks
  callbacks: {
    // async signIn(user, account, profile) { return true },
    // async redirect(url, baseUrl) { return baseUrl },
    // @ts-ignore
    async session({session, user, token}) {
      // The return type will match the one returned in `useSession()`
      return {
        ...session,
        user: token,
      } as Session;
    },
    async jwt({token, user}) {
      if (user) {
        token = {
          ...token,
          address: user.address,
          token: user.token,
        };
      }

      return token;
    },
  },

  // Events are useful for logging
  // https://next-auth.js.org/configuration/events
  events: {
    async error(message) {
      console.error(message);
    },
  },

  // Enable debug messages in the console if you are having problems
  debug: true,
  logger: {
    error(code, ...message) {
      console.error(code, message);
    },
    warn(code, ...message) {
      console.warn(code, message);
    },
    debug(code, ...message) {
      console.log(code, message);
    },
  },
});
