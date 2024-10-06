const parseEnv = () => {
    const env = process.env;
    const prefix = 'RSS_';
    const result = Object.keys(env).filter(key => key.startsWith(prefix)).map(key => `${key}=${env[key]}`)
    console.log(result.join('; '));
};

parseEnv();
