const fs = require('fs');

function parseArgv(argv, key) {
  console.log('argv', argv)
  // var item = key => argv.find(item => key === item.split('=')[0]);
  const [arg = ''] = argv.filter(v => v.includes('=') && key === v.split('=')[0])
  return arg ? arg.split('=')[1] : '';
}

function testFile(project) {
  // return filename => fs.existsSync(`src/${project}/${filename}`) && fs.readFileSync(`src/${project}/${filename}`, 'utf8'); 
  return filename => {
    console.log(`src/${project}/${filename}`);
    fs.existsSync(`src/${project}/${filename}`)
  }; 
}

module.exports = {
  parseArgv,
  testFile
}