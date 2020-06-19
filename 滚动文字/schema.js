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
