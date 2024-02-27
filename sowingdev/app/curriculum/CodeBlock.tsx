import React from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';


const CodeBlock: React.FC<{code:any}> = ({code}: {code: any}) => {
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