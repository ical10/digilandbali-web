const SocialHandles = ({iconSize = 24}) => {
  const socials = [
    {
      src: '/Discord.svg',
      alt: 'Digilandbali Discord social handle',
      href: 'https://discord.gg/CGaDcU9BFu',
    },
    {
      src: '/Telegram.svg',
      alt: 'Digilandbali Telegram social handle',
      href: '',
    },
    {
      src: '/Twitter_1.svg',
      alt: 'Digilandbali Twitter social handle',
      href: '',
    },
    {
      src: '/Opensea.svg',
      alt: 'Digilandbali Opensea social handle',
      href: 'https://testnets.opensea.io/collection/lima-beach-signature-fragment',
    },
  ];

  return (
    <>
      {socials.map((social, i) => (
        <a key={i} href={social.href} target="_blank" rel="noreferrer">
          <img src={social.src} alt={social.alt} width={iconSize} height={iconSize} />
        </a>
      ))}
    </>
  );
};

export default SocialHandles;
