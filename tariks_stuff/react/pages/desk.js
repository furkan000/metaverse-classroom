import React,  { useEffect, useRef } from "react";
import Image from 'next/image';
//import WebViewer from '@pdftron/webviewer';


export  default function Drawingbox() {
    const viewer = useRef(null);

    useEffect(() => {
        import('@pdftron/webviewer').then(() => {
          WebViewer(
            {
              path: '/lib',
              enableFilePicker: true,

              toggleCompareModeButton: 'active',
              disableMultiViewerComparison: true,

              disabledElements: [

                      'header'
                  ],


                
            },

            viewer.current,
          ).then((instance) => {
              const { docViewer, UI, Core } = instance;
              //
              UI.addEventListener(UI.Events.MULTI_VIEWER_READY, () => {
                Core.getDocumentViewers()[0].loadDocument('/files/blank.pdf'); // Load 'pdf_vers1.pdf' on first DocumentViewer
                Core.getDocumentViewers()[0].zoomTo(1);
                Core.getDocumentViewers()[1].loadDocument('/files/document.pdf'); // Load 'pdf_vers2.pdf' on second DocumentViewer
                // TODO: disable controle panel from MultiViewer
                //UI.disableElements(['toolbarGroup-View']);
              })



              instance.UI.setHeaderItems(function(header) {
                header.getHeader('toolbarGroup-Annotate').push({
                  type: 'actionButton',
                  img: '/files/new-file.png',
                  title: 'new-page',
                  dataElement: 'newPage',
                  onClick: () => {
                    //console.log(UI.getModularHeader());
                    const doc = Core.getDocumentViewers()[0].getDocument();
                    const width = 612;
                    const height = 792;
                    // // Insert blank pages
                    //The document now contains [page1, newBlankPage1, page2, newBlankPage2, page3]
                    doc.insertBlankPages( [2], width, height);
                  }
                });
              });




              UI.enableFeatures([UI.Feature.MultiViewerMode]);
  
            });
        })
      }, []);
  
  
      return (
        <div className="MyComponent">
          <div className="webviewer" ref={viewer} style={{height: "100vh"}}> </div>
        </div>
      );
  
  }