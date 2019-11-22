module.exports = {
  apps: [{
    name: 'tele_app',
    script: './src/app.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-52-91-72-66.compute-1.amazonaws.com',
      key: '~/.ssh/telematics_project_2019.pem',
      ref: 'origin/master',
      repo: 'git@github.com:evinracher/tele_final.git',
      path: '/home/ubuntu/tele_final',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
