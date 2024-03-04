import { PythonIcon } from '../../overview/techs/icons/python';
import { CSharpIcon } from '../../overview/techs/icons/CSharp';
import { HtmlIcon } from '../../overview/techs/icons/html';
import { ReactIcon } from '../../overview/techs/icons/react';
import { NodeIcon } from '../../overview/techs/icons/node';
import { JsIcon } from '../../overview/techs/icons/js';

interface TechProps extends React.HTMLAttributes<SVGElement> {
    tech: string;
}

export function Tech({ tech, ...props }: TechProps) {
    const Icon = convertTechToIcon(tech);

    return Icon ? <Icon {...props} /> : null;
}

function convertTechToIcon(tech: string) {
    switch (tech) {
        case 'react':
            return ReactIcon;
        case 'html':
            return HtmlIcon;
        case 'node':
            return NodeIcon;
        case 'python':
            return PythonIcon;
        case 'js':
            return JsIcon;
        case 'csharp':
            return CSharpIcon;
        default:
            return undefined;
    }
}
