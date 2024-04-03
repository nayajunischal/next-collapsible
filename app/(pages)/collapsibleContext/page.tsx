
"use client"
import { Root, Trigger, Content } from "@/components/CollapsibleContext"
import Image from "next/image";
import { useState } from "react"


export default function CollapsibleContext() {
    const [open, setOpen] = useState(false);
    return (
        <Root open={open} onOpenChange={setOpen} className="w-1/4 p-3 h-1/3">
            <div className="flex items-center justify-between">
                <span className="leading-5 text-white">
                    @peduarte starred 3 repositories
                </span>
                <Trigger >
                    <button className="rounded-full bg-white">
                        <Image src={open ? '/close.svg' : '/expand.svg'} alt="Vercel Logo" width={30} height={30} className="p-1.5">
                        </Image>
                    </button>
                </Trigger>
            </div>

            <div className="mt-3 flex flex-col">
                <span className="cmp-txt-styling">@radix-ui/primitives</span>
            </div>

            <Content className="mt-3 flex flex-col gap-3">
                <span className="cmp-txt-styling">@radix-ui/colors</span>
                <span className="cmp-txt-styling">@stitches/react</span>
            </Content>
        </Root>
    )
}