const data = [
  {
    "id": "1",
    "certificationProgram": "认证项目",
    "children":[
      {
        "id": "5",
        "certificationProgram": "EU欧盟",
        "children":[
          {
            "id":"12",
            "certificationProgram":"CE",
            "children":[
              {
                "id":"16",
                "certificationProgram":"EMC"
              },
              {
                "id":"17",
                "certificationProgram":"LVD"
              },
              {
                "id":"18",
                "certificationProgram":"MD"
              },
              {
                "id":"19",
                "certificationProgram":"MDD"
              },
              {
                "id":"20",
                "certificationProgram":"IVD"
              }
            ]
          },
          {
            "id":"13",
            "certificationProgram":"RED"
          },
          {
            "id":"14",
            "certificationProgram":"ERP"
          },
          {
            "id":"15",
            "certificationProgram":"E-mark"
          }
        ]
      },
      {
        "id": "6",
        "certificationProgram": "US美国",
        "children":[
          {
            "id": "21",
            "certificationProgram": "FCC VOC"
          },
          {
            "id": "22",
            "certificationProgram": "FCC DOC"
          },
          {
            "id": "23",
            "certificationProgram": "FCC ID"
          },
          {
            "id": "24",
            "certificationProgram": "ETL"
          },
          {
            "id": "25",
            "certificationProgram": "UL"
          }
        ]
      },
      {
        "id": "7",
        "certificationProgram": "CA加拿大",
        "children":[
          {
            "id": "26",
            "certificationProgram": "ICES(IC)"
          },
          {
            "id": "27",
            "certificationProgram": "CSA"
          }
        ]
      },
      {
        "id": "8",
        "certificationProgram": "A/N澳洲新西兰",
        "children":[
          {
            "id": "28",
            "certificationProgram": "C-TICK"
          },
          {
            "id": "29",
            "certificationProgram": "A-TICK"
          },
          {
            "id": "30",
            "certificationProgram": "SAA"
          },
          {
            "id": "31",
            "certificationProgram": "RCM"
          }
        ]
      },
      {
        "id": "9",
        "certificationProgram": "JP日本",
        "children":[
          {
            "id": "32",
            "certificationProgram": "VCCI"
          },
          {
            "id": "33",
            "certificationProgram": "PSE(圆形)"
          },
          {
            "id": "34",
            "certificationProgram": "PSE(菱形)"
          },
          {
            "id": "35",
            "certificationProgram": "MIC(TELEC认证)"
          }
        ]
      },
      {
        "id": "10",
        "certificationProgram": "CA中国",
        "children":[
          {
            "id": "36",
            "certificationProgram": "CCC"
          },
          {
            "id": "37",
            "certificationProgram": "CQC"
          },
          {
            "id": "38",
            "certificationProgram": "SRRC"
          }
        ]
      },
      {
        "id": "11",
        "certificationProgram": "Others其他",
        "children":[
          {
            "id": "39",
            "certificationProgram": "CB"
          },
          {
            "id": "40",
            "certificationProgram": "EN 50332"
          },
          {
            "id": "41",
            "certificationProgram": "EN 62471"
          },
          {
            "id": "42",
            "certificationProgram": "企业标准备案"
          }
        ]
      }
    ]
  },
  {
    "id": "2",
    "certificationProgram": "化学测试项目",
    "children":[
      {
        "id": "43",
        "certificationProgram": "欧盟RoHS2.0测试 IEC62321"
      },
      {
        "id": "44",
        "certificationProgram": "PAHs多环芳香烃 AfPS GS 2014:01 PAK"
      },
      {
        "id": "45",
        "certificationProgram": "PFOS 全氟辛烷磺酰基化合物 CEN/TS15968"
      },
      {
        "id": "46",
        "certificationProgram": "PFOA 全氟辛酸及盐类和酯类 CEN/TS15968"
      },
      {
        "id": "47",
        "certificationProgram": "SCCP短链氯化石蜡 EPA 3550C"
      },
      {
        "id": "48",
        "certificationProgram": "Formaldehyde甲醛"
      },
      {
        "id": "49",
        "certificationProgram": "Asbestos 石棉"
      },
      {
        "id": "50",
        "certificationProgram": "Pb铅CPSC-CH-E1001/E1002/E1003"
      },
      {
        "id": "51",
        "certificationProgram": "镀层中镉/铅/汞/六价铬 IEC62321"
      },
      {
        "id": "52",
        "certificationProgram": "CPSIA"
      },
      {
        "id": "53",
        "certificationProgram": "REACH SVHC 全套(201项)"
      },
      {
        "id": "54",
        "certificationProgram": "REACH SVHC 金属项(71项)"
      },
      {
        "id": "55",
        "certificationProgram": "Organic Tin有机锡化合物REACH ANNEX XVII"
      },
      {
        "id": "56",
        "certificationProgram": "NP OP NPEO OPEO"
      },
      {
        "id": "57",
        "certificationProgram": "双酚A(BPA)"
      },
      {
        "id": "58",
        "certificationProgram": "BPA含量"
      },
      {
        "id": "59",
        "certificationProgram": "欧盟持久性有机污染物(POP)法规附录I物质(需填写确认函)"
      },
      {
        "id": "60",
        "certificationProgram": "包装材料 94/62/EC TPCH(替代CONEG)"
      },
      {
        "id": "61",
        "certificationProgram": "卤素/氟/氯/溴/碘 EN14582"
      },
      {
        "id": "62",
        "certificationProgram": "Phthalates 邻苯二甲酸酯 EN14372"
      },
      {
        "id": "63",
        "certificationProgram": "成分分析"
      },
      {
        "id": "64",
        "certificationProgram": "Ni镍 总含量 EPA3052/EPA3050B"
      },
      {
        "id": "65",
        "certificationProgram": "释放量EN 1811:2011+A1:2015"
      },
      {
        "id": "66",
        "certificationProgram": "MSDS报告"
      },
      {
        "id": "65",
        "certificationProgram": "欧盟食品级检测"
      },
      {
        "id": "65",
        "certificationProgram": "FDA美国食品级检测"
      }
    ]
  },
  {
    "id": "3",
    "certificationProgram": "可靠性测试项目",
    "children":[
      {
        "id": "66",
        "certificationProgram": "气候环境检测",
        "children":[
          {
            "id": "68",
            "certificationProgram": "盐雾检测"
          },
          {
            "id": "69",
            "certificationProgram": "高温检测"
          },
          {
            "id": "70",
            "certificationProgram": "低温检测"
          },
          {
            "id": "71",
            "certificationProgram": "冷热冲击检测"
          },
          {
            "id": "72",
            "certificationProgram": "快速温变检测"
          },
          {
            "id": "73",
            "certificationProgram": "恒温恒湿检测"
          },
          {
            "id": "74",
            "certificationProgram": "交变湿热检测"
          },
          {
            "id": "75",
            "certificationProgram": "IP等级(防尘防水)"
          }
        ]
      },
      {
        "id": "67",
        "certificationProgram": "机械环境检测",
        "children":[
          {
            "id": "76",
            "certificationProgram": "振动试验"
          },
          {
            "id": "77",
            "certificationProgram": "机械冲击试验"
          },
          {
            "id": "78",
            "certificationProgram": "模拟运输"
          },
          {
            "id": "79",
            "certificationProgram": "跌落试验"
          },
          {
            "id": "80",
            "certificationProgram": "摩擦试验"
          },
          {
            "id": "81",
            "certificationProgram": "碰撞试验"
          },
          {
            "id": "82",
            "certificationProgram": "插拔力"
          },
          {
            "id": "83",
            "certificationProgram": "插拔耐久"
          }
        ]
      }
    ]
  },
  {
    "id": "4",
    "certificationProgram": "玩具测试项目",
    "children":[
      {
        "id": "84",
        "certificationProgram": "欧洲玩具标准"
      },
      {
        "id": "85",
        "certificationProgram": "EN 62115 欧洲标准-电玩具的安全"
      },
      {
        "id": "86",
        "certificationProgram": "美国CPSIA"
      },
      {
        "id": "87",
        "certificationProgram": "国际标准ISO 8124"
      },
      {
        "id": "88",
        "certificationProgram": "中国标准 GB 6675"
      },
      {
        "id": "89",
        "certificationProgram": "GB 19865中国标准电子玩具的安全"
      },
      {
        "id": "90",
        "certificationProgram": "澳大利亚标准AS/NZS ISO 8124"
      },
      {
        "id": "91",
        "certificationProgram": "Canadian加拿大标准CHPR"
      },
      {
        "id": "92",
        "certificationProgram": "ASTM F963 美国标准"
      }
    ]
  }
]

module.exports = [
  {
    url: '/order/orderManager',
    type: 'post',
    response: config => {
      debugger
      return {
        code: 20000,
        data: data
      }
    }
  }
]