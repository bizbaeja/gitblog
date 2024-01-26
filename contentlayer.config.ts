import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const blogPosts = defineDocumentType(() => ({
  name: 'blogPosts',
  contentType: 'mdx',
  filePathPattern: `**/*.mdx`,
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'string', required: true },
    description: { type: 'string', required: false }
  }
}));
export const tilPosts = defineDocumentType(() => ({
  name: 'tilPosts',
  contentType: 'mdx',
  filePathPattern: `**/*.mdx`,
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'string', required: true },
    description: { type: 'string', required: false }
  }
}));
export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [blogPosts,tilPosts],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: []
  }
});
