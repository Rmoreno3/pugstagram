var ghpages = require('gh-pages');

ghpages.publish(
    'dist', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'git@github.com:Rmoreno3/pugstagram.git', // Update to point to your repository  
        user: {
            name: 'Rmoreno3', // update to use your name
            email: 'reynaldomoreno173@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)