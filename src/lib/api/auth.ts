import DigilandAPI from '.';

type GetChallengeProps = {
  id: string;
};

type GetChallengeResponseProps = {
  nonce: string;
};

export const getChallenge = async (
  values: GetChallengeProps,
): Promise<GetChallengeResponseProps | null> => {
  try {
    const {data} = await MyriadAPI().request({
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
