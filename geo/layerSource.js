//////////////////////////////////////////////////////////////////////////////
/**
 * @module ogs.geo
 */

/*jslint devel: true, forin: true, newcap: true, plusplus: true*/
/*jslint white: true, indent: 2*/

/*global geoModule, ogs, inherit, $, HTMLCanvasElement, Image*/
/*global vglModule, document*/
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
/**
 * layerSource provides data to a layer
 */
//////////////////////////////////////////////////////////////////////////////
geoModule.layerSource = function() {
  "use strict";

  ////////////////////////////////////////////////////////////////////////////
  /**
   * Should be implemented by a concrete class
   */
  ////////////////////////////////////////////////////////////////////////////
  this.getData = function(time) {
  };

  ////////////////////////////////////////////////////////////////////////////
  /**
   * Should be implemented by a concrete class
   */
  ////////////////////////////////////////////////////////////////////////////
  this.getMetaData = function(time) {
  };

  ////////////////////////////////////////////////////////////////////////////
  /**
   * Should be implemented by a concrete class
   */
  ////////////////////////////////////////////////////////////////////////////
  this.getTimeRange = function() {
  };

  ////////////////////////////////////////////////////////////////////////////
  /**
   * Should be implemented by a concrete class
   */
  ////////////////////////////////////////////////////////////////////////////
  this.getSpatialRange = function() {
  };

  ////////////////////////////////////////////////////////////////////////////
  /**
   * Should be implemented by a concrete class
   */
    ////////////////////////////////////////////////////////////////////////////
  this.getScalarRange = function(varname) {
  };
};

inherit(geoModule.layerSource, ogs.vgl.object);