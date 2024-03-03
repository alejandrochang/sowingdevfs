import React from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';


const CodeBlock: React.FC<{code:string}> = ({code}: {code: string}) => {
    return(
        <div>
            <CopyBlock
                text={code}
                language={'jsx'}
                theme={dracula}
                />
        </div>
    )
}

export default CodeBlock;