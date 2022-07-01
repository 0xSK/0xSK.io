type ExtLinkProps = {
  href: string;
  children: string | string[] | JSX.Element | JSX.Element[];
};

export const ExtLink = ({ href, children }: ExtLinkProps): JSX.Element => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default ExtLink;
