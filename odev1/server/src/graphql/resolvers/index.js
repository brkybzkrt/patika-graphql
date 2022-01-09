const path = require('path');
const {loadFilesSync} = require('@graphql-tools/load-files');
const {mergeResolvers} = require('@graphql-tools/merge');


const resolversArray= loadFilesSync(path.join(__dirname),{extensions:['js'],
extractExports:(fileExports)=>{

    if(typeof fileExports === 'function'){
        return fileExports('query_root');
    }

    return fileExports;
}});


module.exports =mergeResolvers(resolversArray);