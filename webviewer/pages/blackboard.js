import { useEffect, useRef } from 'react';

export default function Blackboard() {
    const viewer = useRef(null);
    useEffect(() => {
        import('@pdftron/webviewer').then(({ default: WebViewer }) => {
            WebViewer(
                {
                    path: '/webviewer/lib',
                    initialDoc: '/files/samplepptx.pptx',
                    disabledElements: ['header', 'toolsHeader'],
                },
                viewer.current,
            ).then((instance) => {
                const { docViewer } = instance;
            });
        });
    }, []);

    return (
        <div className="MyComponent">
            <div className="webviewer" ref={viewer} style={{ height: '100vh' }}></div>
        </div>
    );
}








