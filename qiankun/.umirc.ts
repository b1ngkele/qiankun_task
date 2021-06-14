import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/', component: '@/pages/index',
      routes: [
        { path: '/React16', microApp: 'React16' },
        { path: '/React18', microApp: 'React18' },
      ]
    },
  ],
  qiankun: {
    master: {
      apps: [
        {
          name: 'React16',
          entry: '//localhost:3001',
        },
        {
          name: 'React18',
          entry: '//localhost:3000',
        },
      ]
    },
  },
  fastRefresh: {},
});
