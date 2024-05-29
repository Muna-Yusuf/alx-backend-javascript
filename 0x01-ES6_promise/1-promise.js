export default function getFullResponseFromAPI(success) {
  return new promise((resolve, reject) => {
      if (success) {
          resolve({status: 200, body: 'success'});
      } else {
          reject(new Error('The fake API is not working currently'));
      }
  });
}
