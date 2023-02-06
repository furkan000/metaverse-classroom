import {useEffect, useRef} from 'react';
import Image from 'next/image';


export default function HomePage() {

    const viewer = useRef(null);

    useEffect(() => {
      import('@pdftron/webviewer').then(() => {
        WebViewer(
          {
            path: '/lib',
            initialDoc: '/files/samplepptx.pptx',

            disabledElements: [
              'header',
              'toolsHeader'

            ],

          },

          viewer.current,
        ).then((instance) => {
            const { docViewer } = instance;

          });
      })
    }, []);
    return (
      <div className="MyComponent">
        <div className="webviewer" ref={viewer} style={{height: "100vh"}}> </div>
      </div>
    );

}