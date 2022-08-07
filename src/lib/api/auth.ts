import DigilandAPI from '.';

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
      url: '/auth/login/',
      method: 'POST',
      data: values,
    });

    return data;
  } catch (error) {
    console.log('[login][error]', {error});
    return null;
  }
};
