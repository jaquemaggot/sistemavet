const db = require('../config/dbconnetion');

module.exports = {
    executeQuery
}

async function executeQuery(query, params) {
    return new Promise((resolve, reject) => {
      db.query(query, params, (err, results) => {
        if(err)
          return reject(err);
  
        resolve(results);
      });
    });
}