const server = http.create((request, response) => {
  let filePath = path.join(_dirname, 'public', 
