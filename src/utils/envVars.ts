type EnvVariables = {
  JWT_SECRET: string
  POSTGRES_DATABASE: string
  POSTGRES_HOST: string
  POSTGRES_PASSWORD: string
  POSTGRES_PRISMA_URL: string
  POSTGRES_URL: string
  POSTGRES_URL_NON_POOLING: string
  POSTGRES_URL_NO_SSL: string
  POSTGRES_USER: string
  NODE_ENV: string
}

const checkEnvVariable = (name: string, value: string | undefined): string => {
  if (!value) {
    throw new Error(`${name} is not provided`)
  }
  return value
}

export const envVars: EnvVariables = {
  JWT_SECRET: checkEnvVariable('JWT_SECRET', process.env.JWT_SECRET),
  POSTGRES_DATABASE: checkEnvVariable('POSTGRES_DATABASE', process.env.POSTGRES_DATABASE),
  POSTGRES_HOST: checkEnvVariable('POSTGRES_HOST', process.env.POSTGRES_HOST),
  POSTGRES_PASSWORD: checkEnvVariable('POSTGRES_PASSWORD', process.env.POSTGRES_PASSWORD),
  POSTGRES_PRISMA_URL: checkEnvVariable('POSTGRES_PRISMA_URL', process.env.POSTGRES_PRISMA_URL),
  POSTGRES_URL: checkEnvVariable('POSTGRES_URL', process.env.POSTGRES_URL),
  POSTGRES_URL_NON_POOLING: checkEnvVariable('POSTGRES_URL_NON_POOLING', process.env.POSTGRES_URL_NON_POOLING),
  POSTGRES_URL_NO_SSL: checkEnvVariable('POSTGRES_URL_NO_SSL', process.env.POSTGRES_URL_NO_SSL),
  POSTGRES_USER: checkEnvVariable('POSTGRES_USER', process.env.POSTGRES_USER),
  NODE_ENV: checkEnvVariable('NODE_ENV', process.env.NODE_ENV),
}
