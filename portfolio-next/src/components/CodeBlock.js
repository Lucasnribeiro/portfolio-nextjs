import { useMantineColorScheme } from '@mantine/core';
import { LightAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl, stackoverflowLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

export default function CodeBlock(props) {
    const { colorScheme } = useMantineColorScheme();

    return (
        <SyntaxHighlighter language={props.className?.replace('language-', '')} style={colorScheme == 'light'? stackoverflowLight : nightOwl}>
        {props.children}
        </SyntaxHighlighter>
    );
}