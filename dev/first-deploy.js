require('dotenv').config();
const { execSync } = require('child_process')

const GITHUB_EMAIL = process.env.GITHUB_EMAIL
const GITHUB_USERNAME = process.env.GITHUB_USERNAME
const GITHUB_PROJECT_URL = process.env.GITHUB_PROJECT_URL

const console_run = async () => {
    execSync(`rimraf .git`)
    execSync(`git init`)
    execSync(`git config user.email ${GITHUB_EMAIL}`)
    execSync(`git config user.name ${GITHUB_USERNAME}`)
    execSync(`git add .`)
    execSync(`git commit -m 'commit'`)
    execSync(`git branch -M main`)
    execSync(`git remote add origin ${GITHUB_PROJECT_URL}`)
    execSync(`git push -u origin main`)
}

console_run()
