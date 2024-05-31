export enum TAG {
  JAVA = 'JAVA',
  REACT = 'REACT',
  SPRINGBOOT = 'SPRINGBOOT',
  DB = 'DB',
}

export interface IPost {
  id: number;
  title: string;
  contents: string;
  tag: TAG;
}

export type IResponsePostList = IPost[];
