sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/BindingMode',
    'sap/ui/model/json/JSONModel',
    'sap/viz/ui5/data/FlattenedDataset',
    'sap/viz/ui5/format/ChartFormatter',
    'sap/viz/ui5/api/env/Format',
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.sap.kt.flow.flowchart1.controller.View1", {

            onInit: function () {
                var json={ "results": [
                      {
                        "licCount": 1,
                        "licType": "SAP Application developer"
                       
                      },
                      {
                        "licCount": 272,
                        "licType": "SAP Application professional"
                       
                      },
                      {
                        "licCount": 55,
                        "licType": "SAP Application Limited professional"
                      
                      },
                      {
                        "licCount": 47,
                        "licType": "FO"
                      
                      }
                    ]
                }

                var oModelData=new sap.ui.model.json.JSONModel(json);
                this.getView().setModel(oModelData,"oModelData");

                var json1={ "milk": [
                    {
                      "Week":"Week1-4",
                      "Revenue":5000,
                      "Cost":3000
                     
                    },
                    {
                        "Week":"Week5-8",
                        "Revenue":8000,
                        "Cost":5000
                       
                    },
                    {
                        "Week":"Week9-12",
                        "Revenue":9000,
                        "Cost":6000
                       
                    
                    },
                    {
                        "Week":"Week13-16",
                        "Revenue":10000,
                        "Cost":8000
                       
                    }
                  ]
              }

              var oModelData1=new sap.ui.model.json.JSONModel(json1);
              this.getView().setModel(oModelData1,"oModelData1");

        }
        });
    });
