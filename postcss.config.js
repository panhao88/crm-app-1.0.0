module.exports = {
    "plugins": {
        "postcss-px-to-viewport": {
          "unitToConvert": "px", 
          "viewportWidth": 375, 
          "viewportHeight": 667, 
          "unitPrecision": 3, 
          "propList": ["*"], 
          "viewportUnit": "vw", 
          "fontViewportUnit": "vw", 
          "selectorBlaskList": [".ignore-"], 
          "mediaQuery": false, 
          "minPixelValue": 1, 
          "replace": true, 
          "exclude": [], 
          "landscape": false, 
          "landscapeUnit": "vw", 
          "landscapeWidth": 1134
        }
      }
}