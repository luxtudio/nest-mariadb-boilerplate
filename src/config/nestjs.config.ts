import type { ConfigModuleOptions } from '@nestjs/config';

export const config: ConfigModuleOptions = {
  isGlobal: true,
  envFilePath:
    process.env.NODE_ENV === 'development'
      ? ['.env.development.local', '.env.development']
      : '.env',
};
