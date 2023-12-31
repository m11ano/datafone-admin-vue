import { defineStore } from 'pinia';
import { breakpoints } from '@/shared/config/app/breakpoints';
import { Breakpoint, Condition } from '../types/types';

type State = {
    values: Record<Condition, Record<Breakpoint, boolean>>;
    width: number;
};

const getInitState = (): State => {
    const bpsInitValues = Object.keys(breakpoints).reduce(
        (a, v) => ({
            ...a,
            [v]: false,
        }),
        {},
    );
    const state = {
        values: {
            '<': { ...bpsInitValues },
            '<=': { ...bpsInitValues },
            '>': { ...bpsInitValues },
            '>=': { ...bpsInitValues },
        },
        width: 0,
    };

    return state as State;
};

export const useDocWidthStore = defineStore('docWidth', {
    state: getInitState,
    actions: {
        setValue(condition: Condition, bp: Breakpoint, value: boolean) {
            this.values[condition][bp] = value;
        },
        setWidth(value: number) {
            this.width = value;
        },
    },
});
