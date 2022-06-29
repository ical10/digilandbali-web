const SocialHandles = ({iconSize = 24}) => {
  const socials = [
    {
      src: '/Discord.svg',
      alt: 'Digilandbali Discord social handle',
    },
    {
      src: '/Telegram.svg',
      alt: 'Digilandbali Telegram social handle',
    },
    {
      src: '/Twitter_1.svg',
      alt: 'Digilandbali Twitter social handle',
    },
    {
      src: '/Opensea.svg',
      alt: 'Digilandbali Opensea social handle',
    },
  ];

  return (
    <>
      {socials.map((social, i) => (
        <a key={i} href="https://google.com" target="_blank" rel="noreferrer">
          <img src={social.src} alt={social.alt} width={iconSize} height={iconSize} />
        </a>
      ))}
    </>
  );
};

export default SocialHandles;
