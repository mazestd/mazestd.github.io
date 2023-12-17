# Stellar60
60% Keyboard PCB with Multi-layout Support

## Introduction

This Keyboard was one of commissioned design from our fellow designer. You can take a look into supported layout below.
![Layout option](./img/stellar60_kle.png)

## Technical Spesification

- **Layout Size** : 60% Layouts with Split BS, Stepped-Caps, Split R-Shift and Tsangan Spacebar Support
- **Compatible Switches** : MX Style Switches
- **Firmware** : QMK Firmware
- **Microcontroller** : Atmega32U4
- **Connector** : SM04B JST Connector with multiple placement for keyboard support
- **Hardware Protection** : Fused Power-Line
- **Other** : Caps-Lock Indicator

## Render & Prototype
### Render
![Stellar60](./img/stellar60_render.png)

## Firmware & Software Information

```json title="VIA JSON"
{
    "name": "Stellar60",
    "vendorId": "0x70F5",
    "productId": "0x4A03",
    "matrix": {
        "rows": 10,
        "cols": 8
    },
    "layouts": {
        "labels": [
            "Split Backspace",
            "Full Right-Shift",
            "ANSI Bottom"
        ],
        "keymap": [
            [
                "0,0",
                "1,0",
                "0,1",
                "1,1",
                "0,2",
                "1,2",
                "0,3",
                "1,3",
                "0,4",
                "1,4",
                "0,5",
                "1,5",
                "0,6",
                {
                  "w": 2
                },
                "0,7\n\n\n0,0",
                {
                  "x": 0.25
                },
                "1,6\n\n\n0,1",
                "0,7\n\n\n0,1"
              ],
              [
                {
                  "w": 1.5
                },
                "2,0",
                "3,0",
                "2,1",
                "3,1",
                "2,2",
                "3,2",
                "2,3",
                "3,3",
                "2,4",
                "3,4",
                "2,5",
                "3,5",
                "2,6",
                {
                  "w": 1.5
                },
                "2,7"
              ],
              [
                {
                  "w": 1.75
                },
                "4,0",
                "5,0",
                "4,1",
                "5,1",
                "4,2",
                "5,2",
                "4,3",
                "5,3",
                "4,4",
                "5,4",
                "4,5",
                "5,5",
                {
                  "w": 2.25
                },
                "5,6"
              ],
              [
                {
                  "w": 2.25
                },
                "6,0",
                "6,1",
                "7,1",
                "6,2",
                "7,2",
                "6,3",
                "7,3",
                "6,4",
                "7,4",
                "6,5",
                "7,5",
                {
                  "w": 1.75
                },
                "7,6\n\n\n1,0",
                "6,7\n\n\n1,0",
                {
                  "x": 0.25,
                  "w": 2.75
                },
                "7,6\n\n\n1,1"
              ],
              [
                {
                  "w": 1.5
                },
                "8,0\n\n\n2,0",
                "9,0\n\n\n2,0",
                {
                  "w": 1.5
                },
                "8,1\n\n\n2,0",
                {
                  "w": 7
                },
                "9,3\n\n\n2,0",
                {
                  "w": 1.5
                },
                "9,5\n\n\n2,0",
                "8,6\n\n\n2,0",
                {
                  "w": 1.5
                },
                "8,7\n\n\n2,0"
              ],
              [
                {
                  "y": 0.25,
                  "w": 1.25
                },
                "8,0\n\n\n2,1",
                {
                  "w": 1.25
                },
                "9,0\n\n\n2,1",
                {
                  "w": 1.25
                },
                "8,1\n\n\n2,1",
                {
                  "w": 6.25
                },
                "9,3\n\n\n2,1",
                {
                  "w": 1.25
                },
                "8,5\n\n\n2,1",
                {
                  "w": 1.25
                },
                "9,5\n\n\n2,1",
                {
                  "w": 1.25
                },
                "8,6\n\n\n2,1",
                {
                  "w": 1.25
                },
                "8,7\n\n\n2,1"
              ]
        ]
    }
}
```
