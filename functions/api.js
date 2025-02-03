exports.handler = async (event, context) => {
   
    const response = {
      email: 'feranmioyetunde@gmail.com',
      current_datetime: new Date().toISOString(),
      github_url: 'https://github.com/Feranmidevelops/ApiCall0.git',
    };
  
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", 
        "Access-Control-Allow-Methods": "GET, OPTIONS",  
        "Access-Control-Allow-Headers": "Content-Type",  },
      body: JSON.stringify(response),
    };
  };
  