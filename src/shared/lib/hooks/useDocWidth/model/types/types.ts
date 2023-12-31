import { breakpoints } from '@/shared/config/app/breakpoints';

export type Breakpoint = keyof typeof breakpoints;
export type Condition = '<' | '<=' | '>' | '>=';
