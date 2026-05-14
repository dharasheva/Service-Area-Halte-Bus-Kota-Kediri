var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Dissolved_1 = new ol.format.GeoJSON();
var features_Dissolved_1 = format_Dissolved_1.readFeatures(json_Dissolved_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dissolved_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dissolved_1.addFeatures(features_Dissolved_1);
var lyr_Dissolved_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dissolved_1, 
                style: style_Dissolved_1,
                popuplayertitle: 'Dissolved',
                interactive: false,
                title: '<img src="styles/legend/Dissolved_1.png" /> Dissolved'
            });
var format_AnalisisServiceAreaPerumahan_2 = new ol.format.GeoJSON();
var features_AnalisisServiceAreaPerumahan_2 = format_AnalisisServiceAreaPerumahan_2.readFeatures(json_AnalisisServiceAreaPerumahan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnalisisServiceAreaPerumahan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnalisisServiceAreaPerumahan_2.addFeatures(features_AnalisisServiceAreaPerumahan_2);
var lyr_AnalisisServiceAreaPerumahan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnalisisServiceAreaPerumahan_2, 
                style: style_AnalisisServiceAreaPerumahan_2,
                popuplayertitle: 'Analisis Service Area Perumahan',
                interactive: true,
                title: '<img src="styles/legend/AnalisisServiceAreaPerumahan_2.png" /> Analisis Service Area Perumahan'
            });
var format_AnalisisServiceAreaPublik_3 = new ol.format.GeoJSON();
var features_AnalisisServiceAreaPublik_3 = format_AnalisisServiceAreaPublik_3.readFeatures(json_AnalisisServiceAreaPublik_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnalisisServiceAreaPublik_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnalisisServiceAreaPublik_3.addFeatures(features_AnalisisServiceAreaPublik_3);
var lyr_AnalisisServiceAreaPublik_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnalisisServiceAreaPublik_3, 
                style: style_AnalisisServiceAreaPublik_3,
                popuplayertitle: 'Analisis Service Area Publik',
                interactive: true,
                title: '<img src="styles/legend/AnalisisServiceAreaPublik_3.png" /> Analisis Service Area Publik'
            });
var format_AnalisisServiceAreaKomersial_4 = new ol.format.GeoJSON();
var features_AnalisisServiceAreaKomersial_4 = format_AnalisisServiceAreaKomersial_4.readFeatures(json_AnalisisServiceAreaKomersial_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnalisisServiceAreaKomersial_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnalisisServiceAreaKomersial_4.addFeatures(features_AnalisisServiceAreaKomersial_4);
var lyr_AnalisisServiceAreaKomersial_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnalisisServiceAreaKomersial_4, 
                style: style_AnalisisServiceAreaKomersial_4,
                popuplayertitle: 'Analisis Service Area Komersial',
                interactive: true,
                title: '<img src="styles/legend/AnalisisServiceAreaKomersial_4.png" /> Analisis Service Area Komersial'
            });
var format_Jangkauan_800_5 = new ol.format.GeoJSON();
var features_Jangkauan_800_5 = format_Jangkauan_800_5.readFeatures(json_Jangkauan_800_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jangkauan_800_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jangkauan_800_5.addFeatures(features_Jangkauan_800_5);
var lyr_Jangkauan_800_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jangkauan_800_5, 
                style: style_Jangkauan_800_5,
                popuplayertitle: 'Jangkauan_800',
                interactive: false,
                title: '<img src="styles/legend/Jangkauan_800_5.png" /> Jangkauan_800'
            });
var format_Jangkauan_400_6 = new ol.format.GeoJSON();
var features_Jangkauan_400_6 = format_Jangkauan_400_6.readFeatures(json_Jangkauan_400_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jangkauan_400_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jangkauan_400_6.addFeatures(features_Jangkauan_400_6);
var lyr_Jangkauan_400_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jangkauan_400_6, 
                style: style_Jangkauan_400_6,
                popuplayertitle: 'Jangkauan_400',
                interactive: false,
                title: '<img src="styles/legend/Jangkauan_400_6.png" /> Jangkauan_400'
            });
var format_Halte_7 = new ol.format.GeoJSON();
var features_Halte_7 = format_Halte_7.readFeatures(json_Halte_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Halte_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Halte_7.addFeatures(features_Halte_7);
var lyr_Halte_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Halte_7, 
                style: style_Halte_7,
                popuplayertitle: 'Halte',
                interactive: true,
                title: '<img src="styles/legend/Halte_7.png" /> Halte'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Dissolved_1.setVisible(true);lyr_AnalisisServiceAreaPerumahan_2.setVisible(true);lyr_AnalisisServiceAreaPublik_3.setVisible(true);lyr_AnalisisServiceAreaKomersial_4.setVisible(true);lyr_Jangkauan_800_5.setVisible(true);lyr_Jangkauan_400_6.setVisible(true);lyr_Halte_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Dissolved_1,lyr_AnalisisServiceAreaPerumahan_2,lyr_AnalisisServiceAreaPublik_3,lyr_AnalisisServiceAreaKomersial_4,lyr_Jangkauan_800_5,lyr_Jangkauan_400_6,lyr_Halte_7];
lyr_Dissolved_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKD': 'WADMKD', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SUMBER': 'SUMBER', 'LUASHA': 'LUASHA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_AnalisisServiceAreaPerumahan_2.set('fieldAliases', {'Name': 'Name', 'Luas': 'Luas', 'Persentase': 'Persentase', });
lyr_AnalisisServiceAreaPublik_3.set('fieldAliases', {'Name': 'Name', 'Luas': 'Luas', 'Persentase': 'Persentase', });
lyr_AnalisisServiceAreaKomersial_4.set('fieldAliases', {'Name': 'Name', 'Luas': 'Luas', 'Persentase': 'Persentase', });
lyr_Jangkauan_800_5.set('fieldAliases', {'ObjectID': 'ObjectID', 'FacilityID': 'FacilityID', 'Name': 'Name', 'FromBreak': 'FromBreak', 'ToBreak': 'ToBreak', });
lyr_Jangkauan_400_6.set('fieldAliases', {'ObjectID': 'ObjectID', 'FacilityID': 'FacilityID', 'Name': 'Name', 'FromBreak': 'FromBreak', 'ToBreak': 'ToBreak', });
lyr_Halte_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'Jangkauan': 'Jangkauan', });
lyr_Dissolved_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SUMBER': 'TextEdit', 'LUASHA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_AnalisisServiceAreaPerumahan_2.set('fieldImages', {'Name': 'TextEdit', 'Luas': 'TextEdit', 'Persentase': 'TextEdit', });
lyr_AnalisisServiceAreaPublik_3.set('fieldImages', {'Name': 'TextEdit', 'Luas': 'TextEdit', 'Persentase': 'TextEdit', });
lyr_AnalisisServiceAreaKomersial_4.set('fieldImages', {'Name': 'TextEdit', 'Luas': 'TextEdit', 'Persentase': 'TextEdit', });
lyr_Jangkauan_800_5.set('fieldImages', {'ObjectID': 'TextEdit', 'FacilityID': 'TextEdit', 'Name': 'TextEdit', 'FromBreak': 'TextEdit', 'ToBreak': 'TextEdit', });
lyr_Jangkauan_400_6.set('fieldImages', {'ObjectID': 'TextEdit', 'FacilityID': 'TextEdit', 'Name': 'TextEdit', 'FromBreak': 'TextEdit', 'ToBreak': 'TextEdit', });
lyr_Halte_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'REMARK': 'TextEdit', 'Jangkauan': 'TextEdit', });
lyr_Dissolved_1.set('fieldLabels', {'OBJECTID': 'no label', 'WADMKD': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'SUMBER': 'no label', 'LUASHA': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_AnalisisServiceAreaPerumahan_2.set('fieldLabels', {'Name': 'inline label - always visible', 'Luas': 'inline label - always visible', 'Persentase': 'inline label - always visible', });
lyr_AnalisisServiceAreaPublik_3.set('fieldLabels', {'Name': 'inline label - always visible', 'Luas': 'inline label - always visible', 'Persentase': 'inline label - always visible', });
lyr_AnalisisServiceAreaKomersial_4.set('fieldLabels', {'Name': 'inline label - always visible', 'Luas': 'inline label - always visible', 'Persentase': 'inline label - always visible', });
lyr_Jangkauan_800_5.set('fieldLabels', {'ObjectID': 'no label', 'FacilityID': 'no label', 'Name': 'no label', 'FromBreak': 'no label', 'ToBreak': 'no label', });
lyr_Jangkauan_400_6.set('fieldLabels', {'ObjectID': 'no label', 'FacilityID': 'no label', 'Name': 'no label', 'FromBreak': 'no label', 'ToBreak': 'no label', });
lyr_Halte_7.set('fieldLabels', {'OBJECTID': 'hidden field', 'Name': 'inline label - always visible', 'REMARK': 'hidden field', 'Jangkauan': 'hidden field', });
lyr_Halte_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});