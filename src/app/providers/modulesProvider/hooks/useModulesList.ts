import { ModulesListItem } from '../model/types/modules';
import { coreModules } from '@/app/config/coreModules';

let counterId = 0;

const modulesList: ModulesListItem[] = [];

export const useBuildModulesList = () => {
    coreModules.forEach((module) => {
        counterId += 1;
        modulesList.push({
            id: counterId,
            type: 'core',
            config: module,
        });
    });
};

export const useGetModulesList = () => modulesList;
