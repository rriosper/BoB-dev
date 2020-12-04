/* eslint-disable @typescript-eslint/no-explicit-any */
import '@xstyled/system';

declare module '@xstyled/system' {
  export function up(key: Breakpoint, rules: any): (props: any) => any;
  export function down(key: Breakpoint, rules: any): (props: any) => any;
  export function between(
    lower: Breakpoint,
    upper: Breakpoint,
    rules: any
  ): (props: any) => any;
}
