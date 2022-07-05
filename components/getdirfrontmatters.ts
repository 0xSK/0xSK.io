import fs from 'fs';
import matter from 'gray-matter';
import _ from 'lodash';

type ProjectFrontmatter = {
  slug: string;
  featured: boolean;
  title: string;
  desc: string;
  date: string;
  coverImage: string;
  socialImage?: string;
  tags: string[];
  progress: string[];
  link: string;
};

type IdeaRantFrontmatter = {
  slug: string;
  featured: boolean;
  title: string;
  desc: string;
  date: string;
  tags: string[];
  coverImage?: string;
  socialImage?: string;
  link: string;
};

type DoggoFrontmatter = {
  slug: string;
  featured: boolean;
  title: string;
  desc: string;
  date: string;
  coverImage: string;
  socialImage?: string;
  link: string;
};

type Frontmatter = ProjectFrontmatter | IdeaRantFrontmatter | DoggoFrontmatter;

const getDirFrontmatters = (
  dir: string,
  featuredOnly: boolean = false,
  linkPrefix: string
) => {
  const getFileFrontmatter = (file: string): Frontmatter => {
    const fileContents = fs.readFileSync(file, 'utf8');
    const { data: parsedFrontmatter } = matter(fileContents);
    const frontmatter: Frontmatter = <any>parsedFrontmatter;
    return { ...frontmatter };
  };
  const files = fs.readdirSync(dir);
  const frontmatters = files
    .map((file) => getFileFrontmatter(`${dir}/${file}`))
    .filter((frontmatter) => !featuredOnly || frontmatter.featured)
    .map((frontmatter) => ({
      ...frontmatter,
      link: `${linkPrefix}/${frontmatter.slug}`,
    }));

  return frontmatters;
};

export default getDirFrontmatters;
export type {
  ProjectFrontmatter,
  IdeaRantFrontmatter,
  DoggoFrontmatter,
  Frontmatter,
};
