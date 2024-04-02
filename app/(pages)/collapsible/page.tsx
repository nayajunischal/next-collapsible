"use client"
import Image from "next/image";
import * as Collapsible from '@/components/Collapsible'
import React, { useRef } from "react";

/**
 * Renders the Collapsible component with collapsible content
 *
 * @return {JSX.Element} The rendered Home component
 */
export default function CollapsibleComponent() {
    const [isVisible, setIsVisible] = React.useState(false);
    const collapsibleContentRef = useRef<HTMLDivElement>(null);

    /**
     * Function to show or hide content based on the current visibility state.
     */
    function showContent() {
        setIsVisible(!isVisible);
    }

    return (
        <div className="p-7 w-1/3 h-1/4">
            <Collapsible.Root>
                <div className="flex justify-between w-full">
                    <span className="inline-flex items-center dark:invert-0 text-white">@peduarte starred 3 repositories</span>
                    <div>
                        <Collapsible.Trigger showContent={showContent}>
                            <button className="rounded-full bg-white">
                                <Image src={isVisible ? '/close.svg' : '/expand.svg'} alt="Vercel Logo" width={30} height={30} className="p-1.5">
                                </Image>
                            </button>
                        </Collapsible.Trigger>
                    </div>
                </div>
                <div className="flex flex-col gap-3 mt-3 w-full">
                    <span className="cmp-txt-styling">@radix-ui/primitives</span>
                    <Collapsible.Content isVisible={isVisible} ref={collapsibleContentRef}>
                        <div className="flex flex-col gap-3">
                            <span className="cmp-txt-styling">@radix-ui/colors</span>
                            <span className="cmp-txt-styling">@stitches/react</span>
                        </div>
                    </Collapsible.Content>
                </div>
            </Collapsible.Root>
        </div>
    );
}
