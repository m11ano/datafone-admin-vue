import { reactive } from 'vue';
import { storeToRefs } from 'pinia';
import { useDocWidthStore } from './model/store/docWidthStore';
import { Breakpoint, Condition } from './model/types/types';

export const useDocWidth = () => {
    const store = useDocWidthStore();

    const docWidth = (condition: Condition, bp: Breakpoint | number): boolean => {
        if (typeof bp === 'number') {
            switch (condition) {
                case '<':
                    return store.width < bp;
                case '<=':
                    return store.width <= bp;
                case '>':
                    return store.width > bp;
                case '>=':
                    return store.width >= bp;
            }
        } else {
            return store.values[condition][bp];
        }
    };

    const $docWidth = reactive(storeToRefs(store).values.value);

    return {
        docWidth,
        $docWidth,
    };
};
