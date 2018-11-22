let occop_data = {
        '001': {
            des: '农业',
            sub: {
                '00101': {des: '农业管理人员', level: '1'},
                '00102': {des: '农业生产人员', level: '2'},
                '00103': {des: '农业技师', level: '2'},
                '00104': {des: '农机修护人员', level: '3'},
                '00105': {des: '农业生产人员', level: '3'},
                '00106': {des: '其他农业技师人员', level: '4'}
            }
        },
        '002': {
            des: '林业',
            sub: {
                '00201': {des: '林业管理人员', level: '2'},
                '00202': {des: '林木种植人员', level: '2'},
                '00203': {des: '森林砍伐工人', level: '6'},
                '00204': {des: '木材加工工人', level: '5'}
            }
        },
        '003': {
            des: '畜牧业',
            sub: {
                '00301': {des: '畜牧业管理人员', level: '1'},
                '00302': {des: '畜牧业工人', level: '3'},
                '00303': {des: '畜牧业管理人员', level: '3'}
            }
        },
        '004': {
            des: '远洋渔业',
            sub: {
                '00401': {des: '渔业管理人员', level: '1'},
                '00402': {des: '远洋渔业工人', level: '6'},
                '00403': {des: '渔业管理人员', level: '3'}
            }
        },
        '005': {
            des: '内陆渔业',
            sub: {
                '00501': {des: '内陆渔业工人', level: '3'},
                '00502': {des: '水族馆工人', level: '2'},
                '00503': {des: '渔业实验人员', level: '1'},
                '00504': {des: '渔业工人', level: '5'}
            }
        },
        '006': {
            des: '煤炭开采和洗选业',
            sub: {
                '00601': {des: '煤炭开采和洗选业管理人员', level: '2'},
                '00602': {des: '煤炭开采和洗选业地下工人', level: '6'},
                '00603': {des: '煤炭开采和洗选业地上工人', level: '4'}
            }
        },
        '007': {
            des: '金属矿采选业',
            sub: {
                '00701': {des: '金属矿采选管理人员', level: '1'},
                '00702': {des: '金属矿采选工人', level: '5'},
                '00703': {des: '金属矿技术人员', level: '4'},
                '00704': {des: '金属矿开采工人（井下作业）', level: '6'}
            }
        },
        '008': {
            des: '其他矿采选业',
            sub: {
                '00801': {des: '其他矿采选业管理人员', level: '1'},
                '00802': {des: '其他矿采选业技术人员', level: '5'},
                '00803': {des: '其他矿采选业工人', level: '6'},
                '00804': {des: '矿山工程技术人员', level: '5'},
                '00805': {des: '其他矿采选业工人', level: '6'}
            }
        },
        '009': {
            des: '石油和天然气开采业',
            sub: {
                '00901': {des: '油气开采管理人员', level: '1'},
                '00902': {des: '油气开采技术人员', level: '4'},
                '00903': {des: '油气开采工人', level: '5'},
                '00904': {des: '油气运输工人', level: '5'}
            }
        },
        '010': {
            des: '食品、饮料加工制造业',
            sub: {
                '01001': {des: '食品、饮料制造管理人员', level: '1'},
                '01002': {des: '食品、饮料制造技术人员', level: '2'},
                '01003': {des: '食品、饮料制造工人', level: '3'},
                '01004': {des: '食品加工工人', level: '4'}
            }
        },
        '011': {
            des: '烟草制品业',
            sub: {
                '01101': {des: '烟草制造管理人员', level: '1'},
                '01102': {des: '烟草制造机器操作人员', level: '3'},
                '01103': {des: '烟草制造工人', level: '2'}
            }
        },
        '012': {
            des: '纺织及服装、鞋、帽制造业',
            sub: {
                '01201': {des: '纺织、成衣制造管理人员', level: '1'},
                '01202': {des: '纺织、成衣制造技术人员', level: '2'},
                '01203': {des: '纺织、成衣制造工人', level: '3'}
            }
        },
        '013': {
            des: '皮革、毛皮、羽毛(绒)及其制品业',
            sub: {
                '01301': {des: '皮革业管理人员', level: '1'},
                '01302': {des: '皮革制造工人', level: '3'},
                '01303': {des: '羽绒、羽毛制造工人', level: '3'}
            }
        },
        '014': {
            des: '木材加工及木、竹、藤、棕、草制品业',
            sub: {'01401': {des: '竹、木、藤、草编制管理人员', level: '1'}, '01402': {des: '竹、木、藤、草编制工人', level: '2'}}
        },
        '015': {
            des: '家具制造业',
            sub: {
                '01501': {des: '家俱制造管理人员', level: '1'},
                '01502': {des: '家俱制造技术人员', level: '3'},
                '01503': {des: '家俱制造工人', level: '3'}
            }
        },
        '016': {
            des: '造纸及纸制品业',
            sub: {
                '01601': {des: '造纸业管理人员', level: '1'},
                '01602': {des: '造纸业技术人员', level: '3'},
                '01603': {des: '造纸工人', level: '4'}
            }
        },
        '017': {
            des: '印刷业及文教体育用品制造业',
            sub: {
                '01701': {des: '印刷、文教、体育用品制造管理人员', level: '1'},
                '01702': {des: '印刷、文教、体育用品制造技术人员', level: '1'},
                '01703': {des: '印刷、文教、体育用品制造工人', level: '3'}
            }
        },
        '018': {
            des: '石油加工、炼焦及核燃料加工业',
            sub: {
                '01801': {des: '核工业燃料制造管理人员', level: '3'},
                '01802': {des: '核工业燃料制造技术人员', level: '6'},
                '01803': {des: '核工业燃料制造工人', level: '6'},
                '01804': {des: '石油加工、炼焦管理人员', level: '1'},
                '01805': {des: '石油加工技术人员', level: '4'},
                '01806': {des: '石油加工工人', level: '5'},
                '01807': {des: '炼焦技术人员', level: '4'},
                '01808': {des: '炼焦工人', level: '5'}
            }
        },
        '019': {
            des: '化学原料及化学制品制造业',
            sub: {
                '01901': {des: '化学原料及化学制品制造业管理人员', level: '3'},
                '01902': {des: '化学原料及化学制品制造技术人员', level: '3'},
                '01903': {des: '硫酸、盐酸、硝酸等有毒品制造工人', level: '6'},
                '01904': {des: '化学原料及化学制品制造工人', level: '4'},
                '01905': {des: '火药、爆竹制造处理人员(爆竹烟火)', level: '6'}
            }
        },
        '020': {
            des: '医药制造业',
            sub: {
                '02001': {des: '医药制造管理人员', level: '1'},
                '02002': {des: '医药制造技术人员', level: '2'},
                '02003': {des: '医药制造工人', level: '2'}
            }
        },
        '021': {
            des: '化学纤维制造业',
            sub: {
                '02101': {des: '化学纤维制造管理人员', level: '1'},
                '02102': {des: '化纤制造技术人员', level: '3'},
                '02103': {des: '化纤制造工人', level: '4'}
            }
        },
        '022': {
            des: '橡胶制品业',
            sub: {
                '02201': {des: '橡胶制品管理人员', level: '1'},
                '02202': {des: '橡胶制品技术人员', level: '2'},
                '02203': {des: '橡胶制品工人', level: '3'}
            }
        },
        '023': {
            des: '塑料制品业',
            sub: {
                '02301': {des: '塑料制品管理人员', level: '1'},
                '02302': {des: '塑料制品技术人员', level: '2'},
                '02303': {des: '塑料制品工人', level: '3'}
            }
        },
        '024': {
            des: '非金属矿物制品业',
            sub: {
                '02401': {des: '非金属矿物制品管理人员', level: '1'},
                '02402': {des: '水泥、石灰制造技术人员', level: '3'},
                '02403': {des: '水泥、石灰制造工人', level: '5'}
            }
        },
        '025': {
            des: '金属冶炼及压延加工业',
            sub: {
                '02501': {des: '金属冶炼及压延加工管理人员', level: '1'},
                '02502': {des: '金属冶炼技术人员', level: '3'},
                '02503': {des: '金属冶炼工人', level: '4'}
            }
        },
        '026': {
            des: '金属制品业',
            sub: {
                '02601': {des: '金属制品管理人员', level: '1'},
                '02602': {des: '金属制品技术人员', level: '2'},
                '02603': {des: '金属制造工人', level: '4'},
                '02604': {des: '其他金属制造技术工人', level: '5'},
                '02605': {des: '其他金属制造工人', level: '6'}
            }
        },
        '027': {
            des: '设备、机械制造业',
            sub: {
                '02701': {des: '设备、机械制造管理人员', level: '1'},
                '02702': {des: '家电、电机技术人员', level: '3'},
                '02703': {des: '家电、电机工人', level: '4'},
                '02704': {des: '汽车、摩托车、自行车制造人员', level: '4'},
                '02705': {des: '造修船技术人员', level: '4'},
                '02706': {des: '造修船工人', level: '5'}
            }
        },
        '028': {
            des: '通信设备、计算机及其他电子设备制造业',
            sub: {
                '02801': {des: '通信设备、计算机及其他电子设备制造管理人员', level: '1'},
                '02802': {des: '电子技术人员', level: '2'},
                '02803': {des: '电子工人', level: '3'},
                '02804': {des: '电线电缆工人', level: '4'},
                '02805': {des: '有关高压电工人', level: '6'}
            }
        },
        '029': {
            des: '仪器仪表、文化、办公用机械及其它制造业',
            sub: {
                '02901': {des: '仪器仪表、文化、办公用机械及其它制造管理人员', level: '1'},
                '02902': {des: '仪器仪表、文化、办公用机械及其它制造技术人员', level: '1'},
                '02903': {des: '仪器仪表制造人员', level: '2'},
                '02904': {des: '文化、办公机械制造人员', level: '2'}
            }
        },
        '030': {
            des: '工艺品及其他制造业',
            sub: {
                '03001': {des: '工艺品及其他制造业管理人员', level: '1'},
                '03002': {des: '手工艺品制造技术人员', level: '2'},
                '03003': {des: '手工艺品制造工人', level: '3'},
                '03004': {des: '玻璃制造工人', level: '3'},
                '03005': {des: '砖木、陶瓷制造工人', level: '3'},
                '03006': {des: '音像、乐器、眼镜制造工人', level: '2'}
            }
        },
        '031': {
            des: '废弃资源和废旧材料重加工业',
            sub: {
                '03101': {des: '废弃资源和废旧材料重加工管理人员', level: '1'},
                '03102': {des: '废旧材料加工技术人员', level: '4'},
                '03103': {des: '废旧材料加工工人', level: '5'},
                '03104': {des: '其他加工制造人员', level: '3'}
            }
        },
        '032': {
            des: '电力、热力的生产和供应业',
            sub: {
                '03201': {des: '水电生产和供应业管理人员', level: '2'},
                '03202': {des: '电力热力的生产和供应技术人员', level: '3'},
                '03203': {des: '电力热力的生产和供应工人', level: '4'}
            }
        },
        '033': {
            des: '燃气生产和供应业',
            sub: {
                '03301': {des: '燃气生产和供应管理人员', level: '1'},
                '03302': {des: '燃气生产和供应技术人员', level: '2'},
                '03303': {des: '燃气公司工人', level: '4'}
            }
        },
        '034': {
            des: '水的生产和供应业',
            sub: {
                '03401': {des: '水的生产和供应业管理人员', level: '1'},
                '03402': {des: '水利工程设施技术人员', level: '2'},
                '03403': {des: '水的生产和供应工人', level: '3'}
            }
        },
        '035': {
            des: '建筑施工、安装及装饰业',
            sub: {
                '03501': {des: '建筑业管理人员', level: '2'},
                '03502': {des: '建筑业工人', level: '5'},
                '03503': {des: '室内装璜人员', level: '4'},
                '03504': {des: '室外装璜人员', level: '5'},
                '03505': {des: '电梯升降机', level: '6'},
                '03506': {des: '电梯操作员', level: '3'},
                '03507': {des: '电梯维修工人', level: '5'}
            }
        },
        '036': {des: '建筑设计服务业', sub: {'03601': {des: '建筑业设计人员', level: '2'}}},
        '037': {
            des: '铁路运输业',
            sub: {
                '03701': {des: '铁路运输管理人员', level: '1'},
                '03702': {des: '铁路道路修护人员', level: '4'},
                '03703': {des: '铁路、道路铺设工人', level: '4'},
                '03704': {des: '铁路车站工作人员', level: '2'},
                '03705': {des: '铁路运输修护人员', level: '3'}
            }
        },
        '038': {
            des: '城市公共交通业',
            sub: {
                '03801': {des: '城市公共交通管理人员', level: '1'},
                '03802': {des: '客运司机及随车工作人员', level: '3'},
                '03803': {des: '客运公司工作人员', level: '2'}
            }
        },
        '039': {
            des: '道路运输业',
            sub: {
                '03901': {des: '道路运输管理人员', level: '1'},
                '03902': {des: '人力三轮车夫', level: '3'},
                '03903': {des: '机动三轮车摩托车驾驶员', level: '5'},
                '03904': {des: '货车司机及随车工作人员', level: '4'},
                '03905': {des: '货运公司工作人员', level: '2'},
                '03906': {des: '其他货车司机', level: '5'}
            }
        },
        '040': {
            des: '水上运输业',
            sub: {
                '04001': {des: '水上运输管理人员', level: '2'},
                '04002': {des: '远洋航运工作人员（非船上）', level: '2'},
                '04003': {des: '远洋航运船上作业人员', level: '6'},
                '04004': {des: '港口作业人员', level: '4'},
                '04005': {des: '港口吊车人员', level: '5'},
                '04006': {des: '港口缉私稽查人员', level: '4'},
                '04007': {des: '救难船员', level: '6'},
                '04008': {des: '内陆、沿海航运人员', level: '5'},
                '04009': {des: '关务人员', level: '3'}
            }
        },
        '041': {
            des: '航空运输业',
            sub: {
                '04101': {des: '航空运输管理人员', level: '1'},
                '04102': {des: '航空业工作人员', level: '2'},
                '04103': {des: '机场工作人员', level: '2'},
                '04104': {des: '航空机上工作人员', level: '5'},
                '04105': {des: '地面维修人员', level: '4'}
            }
        },
        '042': {des: '管道运输业', sub: {'04201': {des: '管道运输管理人员', level: '1'}, '04202': {des: '油气输送工作人员', level: '4'}}},
        '043': {
            des: '装卸搬运和其他运输服务业',
            sub: {
                '04301': {des: '装卸搬运和其他运输服务管理人员', level: '1'},
                '04302': {des: '装卸搬运工人', level: '4'},
                '04303': {des: '其他装卸搬运工人', level: '5'}
            }
        },
        '044': {des: '仓储业', sub: {'04401': {des: '仓库管理人员', level: '2'}, '04402': {des: '仓库工人', level: '3'}}},
        '045': {
            des: '邮政业',
            sub: {
                '04501': {des: '邮政管理人员', level: '1'},
                '04502': {des: '邮政内勤人员', level: '1'},
                '04503': {des: '邮政外勤人员', level: '3'}
            }
        },
        '046': {
            des: '电信和其他信息传输服务业',
            sub: {
                '04601': {des: '电信和其他信息传输服务管理人员', level: '1'},
                '04602': {des: '电信电力工程技术人员', level: '3'},
                '04603': {des: '电力工程设施架设人员', level: '5'},
                '04604': {des: '电力高压电工程设施人员', level: '6'},
                '04605': {des: '电台天线维护人员', level: '4'}
            }
        },
        '047': {
            des: '计算机服务及软件业',
            sub: {
                '04701': {des: '计算机服务及软件管理人员', level: '1'},
                '04702': {des: '计算机维护人员', level: '2'},
                '04703': {des: '硬件开发及生产人员', level: '1'},
                '04704': {des: '软件开发及生产人员', level: '1'}
            }
        },
        '048': {
            des: '批发零售业',
            sub: {
                '04801': {des: '批发零售管理人员', level: '1'},
                '04802': {des: '室内批发零售人员', level: '2'},
                '04803': {des: '室外批发零售人员', level: '3'},
                '04804': {des: '流动摊贩', level: '4'},
                '04805': {des: '燃气矿物油销售人员', level: '5'},
                '04806': {des: '医药销售及推广人员', level: '2'}
            }
        },
        '049': {
            des: '住宿餐馆业',
            sub: {
                '04901': {des: '旅馆餐饮业管理人员', level: '1'},
                '04902': {des: '旅馆工作人员', level: '1'},
                '04903': {des: '餐饮工作人员', level: '1'}
            }
        },
        '050': {
            des: '金融业',
            sub: {
                '05001': {des: '金融管理人员', level: '1'},
                '05002': {des: '金融内勤人员', level: '1'},
                '05003': {des: '金融外勤人员', level: '2'}
            }
        },
        '051': {
            des: '保险业',
            sub: {
                '05101': {des: '保险管理人员', level: '1'},
                '05102': {des: '保险内勤人员', level: '1'},
                '05103': {des: '保险外勤人员', level: '2'}
            }
        },
        '052': {
            des: '房地产业',
            sub: {
                '05201': {des: '房地产管理人员', level: '1'},
                '05202': {des: '房地产室内工作人员', level: '2'},
                '05203': {des: '房地产开发工作人员', level: '2'},
                '05204': {des: '房地产租赁销售人员', level: '3'}
            }
        },
        '053': {
            des: '社会服务及居民服务业',
            sub: {
                '05301': {des: '社会服务及居民服务管理人员', level: '1'},
                '05302': {des: '商务中心工作人员', level: '1'},
                '05303': {des: '社区物业管理人员', level: '3'},
                '05304': {des: '美容美发洗浴按摩人员', level: '2'},
                '05305': {des: '中介服务人员', level: '1'},
                '05306': {des: '殡葬服务人员', level: '2'},
                '05307': {des: '家政服务人员', level: '1'},
                '05308': {des: '清洁工', level: '2'},
                '05309': {des: '其他清洁工', level: '6'},
                '05310': {des: '采购人员', level: '2'},
                '05311': {des: '车辆修理人员', level: '3'},
                '05312': {des: '其他社会服务及居民服务工作人员', level: '3'}
            }
        },
        '054': {
            des: '科学研究与技术服务业',
            sub: {
                '05401': {des: '科学研究与技术服务管理人员', level: '1'},
                '05402': {des: '科学研究人员', level: '1'},
                '05403': {des: '专业技术人员', level: '3'},
                '05404': {des: '其他专业技术人员', level: '1'}
            }
        },
        '055': {
            des: '旅游业',
            sub: {
                '05501': {des: '旅游管理人员', level: '1'},
                '05502': {des: '旅游工作人员', level: '2'},
                '05503': {des: '旅游外勤人员', level: '4'}
            }
        },
        '056': {
            des: '地质勘查业',
            sub: {
                '05601': {des: '地质勘查管理人员', level: '1'},
                '05602': {des: '地质探测测绘人员', level: '5'},
                '05603': {des: '桥梁、隧道工程人员', level: '5'},
                '05604': {des: '潜水、爆破工程人员', level: '6'}
            }
        },
        '057': {
            des: '环境和公共设施管理业',
            sub: {
                '05701': {des: '环境和公共设施管理人员', level: '1'},
                '05702': {des: '环境保护技术人员', level: '2'},
                '05703': {des: '环境保护工作人员', level: '3'},
                '05704': {des: '核工业工程环保人员', level: '6'},
                '05705': {des: '安全质量检查人员', level: '2'}
            }
        },
        '058': {
            des: '教育',
            sub: {
                '05801': {des: '教育机关(学校)管理人员', level: '1'},
                '05802': {des: '教师', level: '1'},
                '05803': {des: '学生', level: '2'},
                '05804': {des: '文教相关工作人员', level: '1'}
            }
        },
        '059': {
            des: '卫生',
            sub: {
                '05901': {des: '医务行政管理人员', level: '1'},
                '05902': {des: '医生', level: '1'},
                '05903': {des: '护士', level: '1'},
                '05904': {des: '医技人员', level: '2'},
                '05905': {des: '医院后勤人员', level: '3'},
                '05906': {des: '其他卫生机构人员', level: '1'}
            }
        },
        '060': {
            des: '社会保障与社会福利业',
            sub: {'06001': {des: '社会保障社会福利管理人员', level: '1'}, '06002': {des: '社会保障社会福利工作人员', level: '2'}}
        },
        '061': {
            des: '新闻出版与广播、电视、电影及音像业',
            sub: {
                '06101': {des: '新闻出版与广播、电视、电影及音像业管理人员', level: '1'},
                '06102': {des: '武打演员', level: '5'},
                '06103': {des: '特技演员', level: '6'},
                '06104': {des: '广播、电影、电视从业人员', level: '1'},
                '06105': {des: '新闻媒体工作人员', level: '1'},
                '06106': {des: '报纸杂志从业人员', level: '1'},
                '06107': {des: '摄影记者', level: '3'},
                '06108': {des: '战地记者', level: '6'}
            }
        },
        '062': {
            des: '文化艺术广告业',
            sub: {
                '06201': {des: '文化艺术广告业管理人员', level: '1'},
                '06202': {des: '文化艺术工作人员', level: '1'},
                '06203': {des: '文艺、书画创作人员', level: '1'},
                '06204': {des: '考古及文物保护人员', level: '2'},
                '06205': {des: '广告公司工作人员', level: '2'},
                '06206': {des: '广告招牌架设人员', level: '4'}
            }
        },
        '063': {
            des: '体育',
            sub: {
                '06301': {des: '体育管理人员', level: '1'},
                '06302': {des: '职业教练员', level: '1'},
                '06303': {des: '职业运动员', level: '1'},
                '06304': {des: '职业运动相关人员', level: '2'},
                '06305': {des: '运动场馆工作人员', level: '1'},
                '06306': {des: '其他职业教练员1', level: '2'},
                '06307': {des: '其他职业教练员2', level: '3'},
                '06308': {des: '其他职业教练员3', level: '4'},
                '06309': {des: '其他职业教练员4', level: '5'},
                '06310': {des: '其他职业教练员5', level: '6'},
                '06311': {des: '其他职业运动员1', level: '2'},
                '06312': {des: '其他职业运动员2', level: '3'},
                '06313': {des: '其他职业运动员3', level: '4'},
                '06314': {des: '其他职业运动员4', level: '5'},
                '06315': {des: '其他职业运动员5', level: '6'}
            }
        },
        '064': {
            des: '娱乐业',
            sub: {
                '06401': {des: '娱乐业管理人员', level: '1'},
                '06402': {des: '歌舞厅、酒吧工作人员', level: '3'},
                '06403': {des: '歌舞厅、酒吧保安', level: '6'},
                '06404': {des: '驯兽师', level: '6'},
                '06405': {des: '艺术演艺人员', level: '2'},
                '06406': {des: '马戏团杂技表演人员', level: '4'},
                '06407': {des: '高尔夫球场工作人员', level: '2'},
                '06408': {des: '保龄球馆工作人员', level: '2'},
                '06409': {des: '撞球场工作人员', level: '2'},
                '06410': {des: '游泳池工作人员', level: '2'},
                '06411': {des: '海水浴场工作人员', level: '3'},
                '06412': {des: '海水浴场救生员', level: '5'},
                '06413': {des: '其他娱乐场所工作人员', level: '2'}
            }
        },
        '065': {
            des: '机关单位和社团组织',
            sub: {
                '06501': {des: '党政机关工作人员', level: '1'},
                '06502': {des: '社会团体工作人员', level: '1'},
                '06503': {des: '寺庙及宗教管理人员', level: '1'},
                '06504': {des: '僧尼,道士及传教人员', level: '1'}
            }
        },
        '066': {des: '国际组织', sub: {'06601': {des: '国际组织工作人员', level: '1'}}},
        '067': {
            des: '军人',
            sub: {
                '06701': {des: '文职军人', level: '1'},
                '06702': {des: '军官', level: '1'},
                '06703': {des: '特种兵(水中爆破兵、情治单位伞兵、化学兵、爆破任负有特殊任务者…等)', level: '6'},
                '06704': {des: '现役陆地军人', level: '3'},
                '06705': {des: '军事单位武器、弹药研究及管理人员', level: '5'},
                '06706': {des: '现役海军、空军军人', level: '5'}
            }
        },
        '068': {
            des: '警务人员',
            sub: {
                '06801': {des: '警务行政及内勤人员', level: '1'},
                '06802': {des: '其他警务人员', level: '3'},
                '06803': {des: '警务特勤人员', level: '5'},
                '06804': {des: '防暴警察', level: '6'}
            }
        },
        '069': {
            des: '其他行业',
            sub: {
                '06901': {des: '自由职业者内勤', level: '1'},
                '06902': {des: '自由职业者外勤', level: '3'},
                '06903': {des: '家庭主妇', level: '2'},
                '06904': {des: '离退休人员', level: '3'},
                '06905': {des: '无业、待业人员', level: '2'},
                '06906': {des: '学龄前儿童', level: '3'}
            }
        }
    };