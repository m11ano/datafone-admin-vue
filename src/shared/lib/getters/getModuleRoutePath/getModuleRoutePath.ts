import { ModulesListItem } from '@/app/providers/modulesProvider/model/types/modules';

export const getModuleRoutePath = (module: ModulesListItem) => `/${module.type === 'core' ? '' : 'module/'}${module.config.name}`;
