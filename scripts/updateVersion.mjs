import fs  from 'fs'
import path from 'path'

const versionType = {
  major: 'major',
  minor: 'minor',
  patch: 'patch',
  beta: 'beta'
}

// 获取 npm 的环境变量
const versionTypeValue = process.env.npm_config_setVersion

function updateVersion() {
  try {
    // 读取 package.json
    const packagePath = path.resolve('./package.json');
    const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));

    packageJson.version = '1.1.88'
    fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2))
  } catch (error) {
    process.exit(1);
  }
return
}

updateVersion()
