import md from 'markdown-it';
import mdEmoji from 'markdown-it-emoji';
import mdAttrs from 'markdown-it-attrs';
import mdTocAnchor from 'markdown-it-toc-and-anchor';

const bettermd = () => {
  return md({
    html: true,
    xhtmlOut: true,
    linkify: false,
    langPrefix: 'language-',
    typographer: true,
  })
    .use(mdEmoji)
    .use(mdAttrs)
    .use(mdTocAnchor, {
      anchorLinkBefore: false,
      wrapHeadingTextInAnchor: true,
      anchorLinkSymbol: '',
      anchorClassName: 'prose-heading-anchor',
    });
};

export default bettermd;
