 return {
  "formDesc": {
    "text": {
      "label": "文字",
      "type": "input",
      "required": true
    },
    "fontColor": {
      "label": "文字颜色",
      "type": "color",
      "default": "#FFFFFF",
      "layout": 23
    },
    "fontSize": {
      "options": [
        {
          "text": "18px",
          "value": "18px"
        },
        {
          "text": "22px",
          "value": "22px"
        },
        {
          "text": "32px",
          "value": "32px"
        },
        {
          "text": "36px",
          "value": "36px"
        },
        {
          "text": "42px",
          "value": "42px"
        },
        {
          "text": "46px",
          "value": "46px"
        },
        {
          "text": "56px",
          "value": "56px"
        },
        {
          "text": "64px",
          "value": "64px"
        }
      ],
      "label": "字体大小",
      "type": "select",
      "default": "22px",
      "layout": 16
    },
    "direction": {
      "options": [
        "left",
        "right",
        "up",
        "down"
      ],
      "label": "方向",
      "type": "select",
      "default": "left",
      "layout": 22
    },
    "duplicated ": {
      "label": "复制重复（适合文字较短）",
      "type": "switch",
      "layout": 21
    },
    "gap": {
      "label": "复制重复间隔举例",
      "type": "number",
      "default": 20,
      "layout": 24
    },
    "speed": {
      "label": "速度",
      "type": "number",
      "default": 20,
      "layout": 12
    },
    "duration ": {
      "label": "持续时间",
      "type": "number",
      "default": 5000,
      "layout": 12
    }
  }
}
