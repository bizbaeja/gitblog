import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const blogPosts = defineDocumentType(() => ({
  name: 'blogPosts',
  contentType: 'mdx',
  filePathPattern: `_blog/**/*.mdx`, // '_blog' 폴더 내의 mdx 파일 참조
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'string', required: true },
    description: { type: 'string', required: false }
  }
}));

export const tilPosts = defineDocumentType(() => ({
  name: 'tilPosts',
  contentType: 'mdx',
  filePathPattern: `_til/**/*.mdx`, // '_til' 폴더 내의 mdx 파일 참조
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'string', required: true },
    description: { type: 'string', required: false }
  }
}));

export default makeSource({
  contentDirPath: 'posts', // 상위 폴더 'posts' 지정
  documentTypes: [blogPosts, tilPosts],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: []
  }
});