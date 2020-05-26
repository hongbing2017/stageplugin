 return {
  "formDesc": {
    "text": {
      "label": "文字",
      "type": "input",
      "attrs": {
        "type": "",
        "clearable": true
      },
      "required": true
    },
    "color": {
      "label": "文字颜色",
      "type": "color",
      "default": "#FFFFFF",
      "layout": 24
    },
    "fontSize": {
      "options": [
        "18px",
        "24px",
        "28px",
        "32px",
        "42px",
        "52px",
        "64px"
      ],
      "label": "文字大小",
      "type": "select",
      "layout": 12,
      "default": "24px"
    },
    "fontName": {
      "options": [
        "微软雅黑",
        "宋体",
        "楷体",
        "黑体",
        "华文彩云",
        "方正舒体",
        "方正姚体",
        "华文琥珀",
        "华文隶书",
        "华文行楷",
        "华文新魏"
      ],
      "label": "字体",
      "type": "select",
      "layout": 12,
      "default": "微软雅黑"
    },
    "reblinkProbability": {
      "label": "闪烁概率",
      "type": "number",
      "attrs": {
        "min": 0,
        "max": 1,
        "step": 0.1,
        "precision": 1,
        "stepStrictly": true
      },
      "default": 0.3,
      "layout": 22
    },
    "blinkMin": {
      "label": "最小闪烁时间（秒）",
      "type": "number",
      "attrs": {
        "min": 0,
        "max": 0.5,
        "step": 0.01,
        "precision": 2,
        "stepStrictly": true
      },
      "default": 0.01,
      "layout": 12
    },
    "blinkMax": {
      "label": "最大闪烁时间（秒）",
      "type": "number",
      "attrs": {
        "min": 0,
        "max": 1,
        "step": 0.01,
        "precision": 2,
        "stepStrictly": true
      },
      "default": 0.5,
      "layout": 12
    },
    "loopMin": {
      "label": "最小循环时间（秒）",
      "type": "number",
      "attrs": {
        "min": 0.1,
        "max": 2,
        "step": 0.1,
        "precision": 1
      },
      "default": 0.5,
      "layout": 12
    },
    "loopMax": {
      "label": "最大循环时间（秒）",
      "type": "number",
      "attrs": {
        "min": 0,
        "max": 5,
        "step": 0.1,
        "precision": 1
      },
      "default": 2,
      "layout": 12
    },
    "off": {
      "label": "无灯字符的数目",
      "type": "number",
      "attrs": {
        "min": 0,
        "stepStrictly": true
      },
      "layout": 12,
      "default": 0
    },
    "blink": {
      "label": "闪烁字符数目(0=ALL)",
      "type": "number",
      "attrs": {
        "min": 0,
        "stepStrictly": true
      },
      "default": 0,
      "layout": 12
    },
    "glow": {
      "label": "光晕参数",
      "type": "json-editor",
      "default": [
        "0 0 80px Orange",
        "0 0 30px Red",
        "0 0 6px Yellow"
      ]
    }
  }
}