'use client'

import { useEffect, useState } from "react";
import { styled } from "styled-components";

export const Container = styled.div<{scrollBarWidth: number}>`
    max-width: 1280px;
    @media (max-width: 1280px) {
        margin: 0px ${props => 60 - props.scrollBarWidth}px 0px 60px;
    } 
    @media (min-width: 1281px) {
        min-width: 1280px;
        padding: 0px ${props => 60 - props.scrollBarWidth / 2}px 0px ${props => 60 + props.scrollBarWidth / 2}px;
    } 
`;

type Props = {
    children: React.ReactNode;
}

export default function PageContainer({ children }: Props): JSX.Element {
    const [scrollbarWidth, setScrollbarWidth] = useState(null);

    useEffect(() => {
        function resizeHandler() {
          setScrollbarWidth(window.innerWidth - window.visualViewport.width);
        }
        window.visualViewport.addEventListener("resize", resizeHandler);
        return () =>
          window.visualViewport.removeEventListener("resize", resizeHandler);
    }, []);

    return <Container scrollBarWidth={scrollbarWidth}>
        {children}
    </Container>;
}