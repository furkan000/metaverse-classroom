import { useState } from 'react';
import Split from 'react-split';

import { CollapseButton,PdfViewerComponent, Drawingbox } from '../../components';


export const Editor = () => {
  const [collapsedIndex, setCollapsedIndex] = useState(null);

  return (
    <Split direction='vertical' style={{ height: `calc(100vh - 4rem)` }} collapsed={collapsedIndex}>

        <Options  >
          <CollapseButton onClick={() => setCollapsedIndex(0)} />
          <Drawingbox />
        </Options>
        <Options  >
          <CollapseButton onClick={() => setCollapsedIndex(1)} />
          <PdfViewerComponent />
        </Options>
        
    </Split>
  );
};

const Options = ({ children  }  ) => {
  return (
    <div className='bg-gray-300 relative overflow-hidden'>
      <div className='absolute top-2 left-2 flex flex-col space-y-2'>
        {children[0]}
      </div>
      <div >
        {children[1]}
      </div>
      
     {/* {children[1]} */}
    </div>
  );
};

