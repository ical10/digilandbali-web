import DigilandAPI from '.';

import {createSignature} from 'src/helpers/metamask-interact.js';

type GetChallengeProps = {
  id: string;
};

type GetChallengeRespProps = {
  nonce: string;
};

type LoginProps = {
  id: string;
  signature: string;
};

type LoginRespProps = {
  token: string;
};

export const getChallengeAndSignIn = async (id: string) => {
  try {
    const {nonce} = await getChallenge({
      id,
    });

    const msg = await createSignature({nonce, address: id});

    if (!msg) {
      throw new Error('Please sign to authenticate!');
    }

    const {token} = await login({id, signature: msg});

    if (token) {
      return token;
    } else {
      console.log('Authorization failed!');
    }
  } catch (error) {
    console.log({error});
    return null;
  }
};

export const getChallenge = async (
  values: GetChallengeProps,
): Promise<GetChallengeRespProps | null> => {
  try {
    const {data} = await DigilandAPI().request({
      url: '/auth/login/challange',
      method: 'POST',
      data: values,
    });

    return data;
  } catch (error) {
    console.log('[login][error]', {error});
    return null;
  }
};

export const login = async (values: LoginProps): Promise<LoginRespProps | null> => {
  try {
    const {data} = await DigilandAPI().request({
      url: '/auth/login',
      method: 'POST',
      data: values,
    });

    return data;
  } catch (error) {
    console.log('login error: ', error);
    console.log('[login][error]', {error});
    return null;
  }
};
