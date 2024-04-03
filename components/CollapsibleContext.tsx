import CollapsibleContextProvider, { useCollapsibleContext } from "@/contexts/CollapsibleContext";
import { ComponentPropsWithoutRef, ElementRef, HTMLAttributes, forwardRef } from "react"

export type Ref = ElementRef<"div">;
export interface CollapsibleProps extends ComponentPropsWithoutRef<"div"> {
    open: boolean;
    onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Root = forwardRef<Ref, CollapsibleProps>(function Root(props, ref) {
    const { open, onOpenChange } = props;
    const contextValues = {
        open,
        onOpenChange
    }

    return (
        <CollapsibleContextProvider props={{ ...contextValues }}>
            <div ref={ref} {...props}>
                {props.children}
            </div>
        </CollapsibleContextProvider>
    )
})

export const Trigger = forwardRef<Ref, HTMLAttributes<HTMLDivElement>>(function Trigger(props, ref) {
    const contextValues = useCollapsibleContext();
    const { open, onOpenChange } = contextValues;

    return (
        <div ref={ref} onClick={() => onOpenChange(!open)} {...props}>
            {props.children}
        </div>
    )
})

export const Content = forwardRef<Ref, HTMLAttributes<HTMLDivElement>>(function Content(props, ref) {
    const contextValues = useCollapsibleContext();
    const { open } = contextValues;
    if (!open) {
        return;
    }
    return (
        <div ref={ref} {...props}>
            {props.children}
        </div>
    )
})