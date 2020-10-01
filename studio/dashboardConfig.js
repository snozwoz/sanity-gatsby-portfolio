export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5f76164512c34878aebbf7ab',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-xnmfkbw9',
                  apiId: 'd50cd67d-2cfd-4305-acb4-b8acd2c95ec5'
                },
                {
                  buildHookId: '5f76164565f626ebe39c18f8',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-jqfv6g4h',
                  apiId: '148843a0-0478-4950-866a-845fb53cecb9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/snozwoz/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-jqfv6g4h.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
