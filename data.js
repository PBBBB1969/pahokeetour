var APP_DATA = {
  "scenes": [
    {
      "id": "0-exterior-entry",
      "name": "Exterior Entry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1528,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.1335187869519032,
          "pitch": 0.15042911780482981,
          "rotation": 0,
          "target": "1-interior-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-interior-entry",
      "name": "Interior Entry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1528,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.16701693816335705,
          "pitch": 0.6083105515951814,
          "rotation": 0,
          "target": "0-exterior-entry"
        },
        {
          "yaw": -2.755813522483166,
          "pitch": 0.37197660339220917,
          "rotation": 0,
          "target": "2-main-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-main-area",
      "name": "Main Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1528,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.04109286463778972,
          "pitch": 0.3463773818351328,
          "rotation": 0,
          "target": "1-interior-entry"
        },
        {
          "yaw": 1.504000211674441,
          "pitch": 0.5484778845559184,
          "rotation": 0,
          "target": "5-childrens-area"
        },
        {
          "yaw": -1.4055024746846048,
          "pitch": 0.3156344054314779,
          "rotation": 0,
          "target": "3-information-desk"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-information-desk",
      "name": "Information Desk",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1528,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.035289357526771425,
          "pitch": 0.3684308091851136,
          "rotation": 0,
          "target": "4-adult-area"
        },
        {
          "yaw": -3.042991864032599,
          "pitch": 0.2355253800785988,
          "rotation": 0,
          "target": "2-main-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-adult-area",
      "name": "Adult Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1528,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7055755019305217,
          "pitch": 0.37376895109989583,
          "rotation": 0,
          "target": "3-information-desk"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-childrens-area",
      "name": "Children's Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1528,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6559874414136466,
          "pitch": 0.21960347209372522,
          "rotation": 0,
          "target": "2-main-area"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Pahokee Library",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
