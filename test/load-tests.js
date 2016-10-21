/*global document*/
// This file is taken from GeoExt3
(function(doc, global){
  var specPath = './spec/',
  dependencies = [
    'basics.test.js',
    'Application.test.js',
    'util/ApplicationContext.test.js',
    'view/component/MapController.test.js',
    'view/button/MoMo.client.view.button.ShowRedliningToolsPanelController.test.js',
    'view/button/MoMo.client.view.button.ListDocumentsModel.test.js',
    'view/button/MoMo.client.view.button.ShowMeasureToolsPanelController.test.js',
    'view/button/MoMo.client.view.button.LoginLogoutModel.test.js',
    'view/button/MoMo.client.view.button.ShowWorkstateToolsPanelController.test.js',
    'view/button/MoMo.client.view.button.ShowMeasureToolsPanelModel.test.js',
    'view/button/MoMo.client.view.button.ShowMetaPanelModel.test.js',
    'view/button/MoMo.client.view.button.ShowToolsPanelCommonController.test.js',
    'view/button/MoMo.client.view.button.TranslationModel.test.js',
    'view/button/MoMo.client.view.button.LoginLogoutController.test.js',
    'view/button/MoMo.client.view.button.PrintModel.test.js',
    'view/button/MoMo.client.view.button.ShowRedliningToolsPanelModel.test.js',
    'view/button/MoMo.client.view.button.ListDocumentsController.test.js',
    'view/button/MoMo.client.view.button.TranslationController.test.js',
    'view/button/MoMo.client.view.button.ShowMetaPanelController.test.js',
    'view/button/MoMo.client.view.button.ShowWorkstateToolsPanelModel.test.js',
    'view/window/MoMo.client.view.window.RedliningStylerWindowController.test.js',
    'view/window/document/MoMo.client.view.window.document.ListDocumentsWindowModel.test.js',
    'view/window/document/MoMo.client.view.window.document.DocumentPdfUploadController.test.js',
    'view/window/document/MoMo.client.view.window.document.DocumentWindowController.test.js',
    'view/window/document/MoMo.client.view.window.document.DocumentPdfUploadModel.test.js',
    'view/window/MoMo.client.view.window.RedliningStylerWindowModel.test.js',
    'view/panel/MoMo.client.view.panel.RedliningToolsPanelModel.test.js',
    'view/panel/MoMo.client.view.panel.WorkstateToolsPanelController.test.js',
    'view/panel/MoMo.client.view.panel.LegendTreeController.test.js',
    'view/panel/MoMo.client.view.panel.MeasurementToolsPanelController.test.js',
    'view/panel/MoMo.client.view.panel.WorkstateToolsPanelModel.test.js',
    'view/panel/MoMo.client.view.panel.RedliningToolsPanelController.test.js',
    'view/panel/MoMo.client.view.panel.LegendTreeModel.test.js',
    'view/panel/document/MoMo.client.view.panel.document.DocumentPdfPreviewModel.test.js',
    'view/panel/document/MoMo.client.view.panel.document.DocumentPdfPreviewController.test.js',
    'view/panel/document/MoMo.client.view.panel.document.DocumentTreeModel.test.js',
    'view/panel/document/MoMo.client.view.panel.document.DocumentTreeController.test.js',
    'view/panel/MoMo.client.view.panel.MeasurementToolsPanelModel.test.js',
    'view/main/MoMo.client.view.main.MainModel.test.js',
    'view/main/MoMo.client.view.main.MainController.test.js',
    'view/component/MoMo.client.view.component.MapModel.test.js',
    'view/component/MoMo.client.view.component.MapController.test.js',
    'view/form/MoMo.client.view.form.PrintModel.test.js',
    'view/form/MoMo.client.view.form.PrintController.test.js',
    'util/MoMo.client.util.User.test.js',
    'util/MoMo.client.util.URL.test.js',
    'util/MoMo.client.util.Module.test.js',
    'util/MoMo.client.util.ApplicationContext.test.js'
  ],
  getScriptTag = global.TestUtil.getExternalScriptTag,
  dependencyCnt = dependencies.length,
  i = 0;

  for(; i < dependencyCnt; i++) {
    doc.write(getScriptTag(specPath + dependencies[i]));
  }
}(document, this));
