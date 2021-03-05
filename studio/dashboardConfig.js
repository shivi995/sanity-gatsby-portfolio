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
                  buildHookId: '60417cfbf4075c242727a1d3',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-jnamn31m',
                  apiId: '2560e6b1-5279-4e63-b7bf-ff011a7199c4'
                },
                {
                  buildHookId: '60417cfce440542203eba00f',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-4dodw8z7',
                  apiId: '9c2b71ee-ec50-4f25-ad18-6782f6518992'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shivi995/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-4dodw8z7.netlify.app',
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
