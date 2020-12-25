export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fe63f6c8235752b716a3e55',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-zkad1ok7',
                  apiId: 'ee3030e1-ca18-4b18-81d0-bf4830b8988d'
                },
                {
                  buildHookId: '5fe63f6cd3fff961bcfec8d0',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-n6rtqqbm',
                  apiId: '2f149b29-2854-43d8-8e07-007a8f817c9b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Arcade1080/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-n6rtqqbm.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
