import { ModuleConfig } from '@/shared/types/module/moduleConfig';

export interface ModulesListItem {
    id: number;
    type: 'core' | 'side';
    config: ModuleConfig;
}
