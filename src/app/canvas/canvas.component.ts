import { Component, EventEmitter, inject, OnInit } from '@angular/core';
import GeoJSON from 'ol/format/GeoJSON';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import * as olControl from 'ol/control';
import VectorImageLayer from 'ol/layer/VectorImage';
import VectorSource from 'ol/source/Vector';
import LayerSwitcher from 'ol-layerswitcher';
import {Group as LayerGroup} from 'ol/layer';
import TileJSON from 'ol/source/TileJSON';
import { Tile } from 'ol/layer';
import RasterSource from 'ol/source/Raster'

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {


  constructor(){}

  map!: Map;


  ngOnInit(): void {

////controls-->
    var layerSwitcher = new LayerSwitcher({
      reverse: true,
      groupSelectStyle: 'group'
    })
    layerSwitcher.set('trash', true);

////<--controls

////layers-->


    var OSMlayer = new TileLayer({
      source: new OSM({
        crossOrigin: null
      })
    })
    OSMlayer.set('title', 'OpenStreetMap');

    var satellite = new TileJSON({
      url: 'https://api.maptiler.com/tiles/satellite-v2/tiles.json?key=s1MwlFKobYrylkMVoLgc',
      tileSize: 512,
      crossOrigin: 'anonymous'
    });


    satellite.set('title', 'Satellite');

    var satelliteTile = new TileLayer({
      source: satellite
    })

////<--layers

////-->layer groups
    var BaseLayerGroup = new LayerGroup({
      layers:[
        OSMlayer
      ]
    });
    BaseLayerGroup.set('title', " Alaptérképek");

    var VectorLayerGroup = new LayerGroup({
      layers:[]
    });
    VectorLayerGroup.set('title', " Vektoros térképek");

    var SatelliteLayerGroup = new LayerGroup({
      layers:[satelliteTile]
    })
    SatelliteLayerGroup.set('title', 'Műholdképek');


///<--layer groups

////map object-->
    this.map = new Map({
      view: new View({
        center: [2050600, 5957000],
        zoom: 17
      }),
      layers: [
        BaseLayerGroup,
        VectorLayerGroup,
        SatelliteLayerGroup
      ],
      target: 'ol-map',
      controls: [
        new olControl.Zoom,
        layerSwitcher
      ]
    });

////<--map object

  }
}
