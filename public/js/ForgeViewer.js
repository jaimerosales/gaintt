var viewer;

function launchViewer(urn) {
  var options = {
    env: 'AutodeskProduction',
    getAccessToken: getForgeToken
  };

  Autodesk.Viewing.Initializer(options, () => {
    viewer = new Autodesk.Viewing.GuiViewer3D(document.getElementById('forgeViewer'), { extensions: ['Autodesk.DocumentBrowser', 'HandleSelectionExtension'] });
    viewer.start();
    var documentId = 'urn:' + urn;
    Autodesk.Viewing.Document.load(documentId, onDocumentLoadSuccess, onDocumentLoadFailure);
  });
}

function onDocumentLoadSuccess(doc) {
  var viewables = doc.getRoot().getDefaultGeometry();
  viewer.loadDocumentNode(doc, viewables).then(i => {
    // documented loaded, any action?
    viewer.addEventListener(Autodesk.Viewing.SELECTION_CHANGED_EVENT, (e) => {
      if (e.dbIdArray.length === 0) return;
      viewer.model.getBulkProperties(e.dbIdArray, ['4D_Task_ID'], (props) => {
        props.forEach((ele) => {
          if (ele.properties.lenght === 0) return;
          var taskId = ele.properties[0].displayValue;
          charts["Gantt"]._gantt.chart.get_bar(taskId).show_popup();
        })
      })
    })
  });
}

function onDocumentLoadFailure(viewerErrorCode) {
  console.error('onDocumentLoadFailure() - errorCode:' + viewerErrorCode);
}

function getForgeToken(callback) {
  fetch('/api/forge/oauth/token').then(res => {
    res.json().then(data => {
      callback(data.access_token, data.expires_in);
    });
  });
}
