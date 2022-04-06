import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        script: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type PartytownProps = typeof __propDef.props;
export declare type PartytownEvents = typeof __propDef.events;
export declare type PartytownSlots = typeof __propDef.slots;
export default class Partytown extends SvelteComponentTyped<PartytownProps, PartytownEvents, PartytownSlots> {
}
export {};
