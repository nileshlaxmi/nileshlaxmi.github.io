const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/nilesh-laxmi'
  },
  {
    name: 'Portfolio',
    url: 'https://nileshlaxmi.github.io'
  },
  {
    name: 'Github',
    url: 'https://github.com/nileshlaxmi'
  }
] as const;

export function SocialLinks() {
  return (
    <div className="meta" style={{ marginTop: 6 }}>
      {SOCIAL_LINKS.map(({ name, url }) => (
        <div key={name}>
          <a href={url} target="_blank" rel="noopener">
            {name}
          </a>
        </div>
      ))}
    </div>
  );
}