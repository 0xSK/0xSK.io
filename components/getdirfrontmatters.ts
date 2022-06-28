import fs from 'fs';
import matter from 'gray-matter';

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
};

type ThoughtFrontmatter = {
  slug: string;
  featured: boolean;
  title: string;
  desc: string;
  date: string;
  tags: string[];
  coverImage? : string;
  socialImage? : string;
};

type RantFrontmatter = {
  slug: string;
  featured: boolean;
  title: string;
  desc: string;
  date: string;
  tags: string[];
  coverImage?: string;
  socialImage?: string;
};

type Frontmatter = ProjectFrontmatter | ThoughtFrontmatter | RantFrontmatter;

const getDirFrontmatters = (dir: string, featuredOnly: boolean = false) => {
  const getFileFrontmatter = (file: string): Frontmatter => {
    const fileContents = fs.readFileSync(file, 'utf8');
    const { data: parsedFrontmatter } = matter(fileContents);
    const frontmatter: Frontmatter = <any>parsedFrontmatter;
    return { ...frontmatter };
  };
  const files = fs.readdirSync(dir);
  const frontmatters = files
    .map((file) => getFileFrontmatter(`${dir}/${file}`))
    .filter((frontmatter) => !featuredOnly || frontmatter.featured);
  return frontmatters;
};

export default getDirFrontmatters;
export type {
  ProjectFrontmatter,
  ThoughtFrontmatter,
  RantFrontmatter,
  Frontmatter,
};
