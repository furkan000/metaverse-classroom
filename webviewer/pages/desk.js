import React, { useEffect, useRef } from "react";
import Image from "next/image";


export default function Desk() {
  const viewer = useRef(null);

  useEffect(() => {
    import("@pdftron/webviewer").then(({ default: WebViewer }) => {
      WebViewer(
        {
          path: "/webviewer/lib",
          enableFilePicker: true,

          toggleCompareModeButton: "active",
          disableMultiViewerComparison: true,

          disabledElements: ["header"],
        },

        viewer.current,
      ).then((instance) => {
        const { docViewer, UI, Core } = instance;
        UI.addEventListener(UI.Events.MULTI_VIEWER_READY, () => {
          Core.getDocumentViewers()[0].loadDocument("/files/blank.pdf");
          Core.getDocumentViewers()[0].zoomTo(1);
          Core.getDocumentViewers()[1].loadDocument("/files/document.pdf");
        });

        instance.UI.setHeaderItems(function (header) {
          header.getHeader("toolbarGroup-Annotate").push({
            type: "actionButton",
            img: "/files/new-file.png",
            title: "new-page",
            dataElement: "newPage",
            onClick: () => {
              const doc = Core.getDocumentViewers()[0].getDocument();
              const width = 612;
              const height = 792;
              doc.insertBlankPages([2], width, height);
            },
          });
        });

        UI.enableFeatures([UI.Feature.MultiViewerMode]);
      });
    });
  }, []);

  return (
    <div className="MyComponent">
      <div className="webviewer" ref={viewer} style={{ height: "100vh" }}></div>
    </div>
  );
}
