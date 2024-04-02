import { ComponentPropsWithRef, PropsWithChildren, forwardRef } from "react";

interface ICollapsibleProps extends ComponentPropsWithRef<"div"> {
    isVisible: boolean;
    children: React.ReactNode
}

/**
 * Renders a collapsible component.
 *
 * @param {Readonly<{
 *     children: React.ReactNode;
 * }>} props - The props object containing the children.
 * @return {JSX.Element} The collapsible component.
 */
const Collapsible = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div>
            {children}
        </div>
    )
}

const Root = Collapsible;

/*
const CollapsibleContent: React.FC<ICollapsibleProps> = forwardRef( ({isVisible, children}  , ref) => {
    if (!isVisible) {
        return;
    }
    return (
        <div >
            {children}
        </div>
    )
})
*/

export type Ref = HTMLDivElement;

/**
 * Renders a collapsible content component.
 *
 * @param {ICollapsibleProps} isVisible - is visible flag
 */
const CollapsibleContent = forwardRef<Ref, ICollapsibleProps>((props, ref) => {
    if (!props.isVisible) {
        return;
    }
    return (
        <div ref={ref}>
            {props.children}
        </div>
    )
})

CollapsibleContent.displayName = "CollapsibleContent";

const Content = CollapsibleContent;

interface ITriggerProps extends PropsWithChildren {
    showContent: () => void;
}

/**
 * Renders a collapsible trigger component.
 *
 * @param {ITriggerProps} showContent - function to show the content
 * @param {ReactNode} children - the child components to be rendered
 * @return {ReactElement} the rendered collapsible trigger component
 */
const CollapsibleTrigger: React.FC<ITriggerProps> = ({ showContent, children }) => {
    return (
        <div onClick={showContent}>
            {children}
        </div>
    )
}

const Trigger = CollapsibleTrigger;

export {
    Root,
    Trigger,
    Content
};

