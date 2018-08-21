/*
Navicat MySQL Data Transfer

Source Server         : nanshig
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : goods

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-08-21 19:29:00
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for data
-- ----------------------------
DROP TABLE IF EXISTS `data`;
CREATE TABLE `data` (
  `id` int(3) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `imgurl` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `sale` decimal(10,2) NOT NULL,
  `qty` int(6) NOT NULL DEFAULT '0',
  `comment` int(6) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=61 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of data
-- ----------------------------
INSERT INTO `data` VALUES ('001', '斯潮 爆款新品大吉大利晚上吃鸡绝地求生短袖宽松潮流体t恤港风男 黑色 M', '../img/g1.jpg', '89.00', '69.00', '0', '0');
INSERT INTO `data` VALUES ('002', '斯潮港风原宿情侣简约圆领字母印花短袖T恤韩版青少年百搭个性潮 蓝色 M', '../img/g2.jpg', '98.00', '68.00', '0', '0');
INSERT INTO `data` VALUES ('003', '牛仔裤男修身小脚韩版潮流宽松夏季薄款直筒裤男士休闲裤子九分裤 浅蓝色 M', '../img/g3.jpg', '145.00', '118.00', '0', '0');
INSERT INTO `data` VALUES ('004', '夏季薄款亚麻短裤男夏天潮流宽松休闲运动5分沙滩裤子男士五分裤 白色 M', '../img/g4.jpg', '80.00', '68.00', '1', '1');
INSERT INTO `data` VALUES ('005', '春夏季白色打底衫男韩版修身紧身健身纯棉短袖t恤男士体恤衫潮流 黑色 M', '../img/g5.jpg', '99.00', '78.00', '9', '7');
INSERT INTO `data` VALUES ('006', '夏季鞋子男学生帆布鞋韩版潮流透气休闲潮鞋百搭小白鞋原宿风板鞋 6999白黑 39', '../img/g6.jpg', '189.00', '168.00', '0', '0');
INSERT INTO `data` VALUES ('007', '夏季破洞牛仔短裤男士乞丐五分裤日系宽松休闲中裤牛仔四分裤薄潮 浅蓝色 M', '../img/g7.jpg', '118.00', '89.00', '0', '0');
INSERT INTO `data` VALUES ('008', '夏季男士休闲裤韩版修身小脚裤男裤九分裤薄款长裤子男哈伦裤男潮 灰色 2XL', '../img/g8.jpg', '128.00', '98.00', '3', '1');
INSERT INTO `data` VALUES ('009', '夏季薄款男士九分裤小脚束脚裤男哈伦裤休闲裤宽松运动裤收腿裤子 黑色 M', '../img/g9.jpg', '168.00', '128.00', '0', '0');
INSERT INTO `data` VALUES ('010', '新款潮2018春夏男女纯棉情侣印花短袖T恤宽松半袖 港风 黑色 M', '../img/g10.jpg', '92.00', '79.00', '4', '2');
INSERT INTO `data` VALUES ('011', '斯潮 男士短袖抖音爆款夏季韩版潮流宽松文艺风T恤个性衣服五分袖 红色 S', '../img/g11.jpg', '98.00', '88.00', '5', '2');
INSERT INTO `data` VALUES ('012', '2017秋冬装男士毛呢大衣韩版英伦男风衣中长款过膝呢子外套西装领 褐色 M', '../img/g12.jpg', '431.00', '218.00', '0', '0');
INSERT INTO `data` VALUES ('013', '2017秋冬新款风衣男短款韩版青年呢子大衣撞色连帽毛呢外套学生潮 焦糖色 M', '../img/g13.jpg', '320.00', '168.00', '1', '1');
INSERT INTO `data` VALUES ('014', '冬季呢子外套男士毛呢大衣韩版潮流中长款男风衣双排扣西装领大衣 黑色 M', '../img/g14.jpg', '320.00', '178.00', '3', '2');
INSERT INTO `data` VALUES ('015', '2017秋冬新款风衣男短款韩版宽松毛呢大衣青年呢子大衣外套衣服潮 浅蓝色 M', '../img/g15.jpg', '322.00', '169.00', '4', '1');
INSERT INTO `data` VALUES ('016', '2017冬装男风衣中长款韩版潮流鹿皮绒羊羔毛大衣青少年连帽披风潮 黑色 M', '../img/g16.jpg', '240.00', '176.00', '0', '0');
INSERT INTO `data` VALUES ('017', '男士冬季外套2017新款韩版潮帅气中长款棉衣学生纯色棉服过膝棉袄 黑色 M', '../img/g17.jpg', '508.00', '258.00', '1', '0');
INSERT INTO `data` VALUES ('018', '2017新款冬季风衣男中长款韩版风牛角扣毛呢子大衣男外套 卡其色 M', '../img/g18.jpg', '300.00', '189.00', '2', '0');
INSERT INTO `data` VALUES ('019', '夏季无袖t恤背心男运动宽松韩版大码棉麻坎肩亚麻沙滩休闲汗衫潮 白色 M', '../img/g19.jpg', '118.00', '59.00', '14', '5');
INSERT INTO `data` VALUES ('020', '原创卫衣男韩版潮流2017秋季新款青少年学生长袖连帽夹克外套 黑色 M', '../img/g20.jpg', '369.00', '188.00', '0', '0');
INSERT INTO `data` VALUES ('021', '原创设计迷彩套头连帽卫衣男外套青少年学生宽松嘻哈风秋冬季 迷彩色 M', '../img/g21.jpg', '189.00', '169.00', '6', '3');
INSERT INTO `data` VALUES ('022', '原创设计机车PU皮衣外套男春秋冬季2017新款休闲百搭青年男装 黑色 M', '../img/g22.jpg', '550.00', '258.00', '4', '1');
INSERT INTO `data` VALUES ('023', '2017冬季新款棉衣男短款简潮流原创无袖棉服韩版修身型棉袄子外套 军绿色 M', '../img/g23.jpg', '350.00', '248.00', '5', '4');
INSERT INTO `data` VALUES ('024', '原创棒球领夹克男韩版潮流修身型春秋季2017新款休闲百搭外套 黑色 M', '../img/g24.jpg', '350.00', '198.00', '6', '4');
INSERT INTO `data` VALUES ('025', '牛仔外套男港仔个性拼色秋冬新款学生原宿bf宽松洗水牛仔夹克衣潮 蓝色 M', '../img/g25.jpg', '278.00', '139.00', '2', '2');
INSERT INTO `data` VALUES ('026', '牛仔外套男士宽松韩版2017秋冬新款男学生原宿bf风刺绣牛仔夹克衣 蓝色 M', '../img/g26.jpg', '278.00', '139.00', '4', '2');
INSERT INTO `data` VALUES ('027', '韩版宽松牛仔外套男学生秋冬装新款原宿bf风简约青少年夹克上衣潮 蓝色 M', '../img/g27.jpg', '278.00', '139.00', '5', '3');
INSERT INTO `data` VALUES ('028', '秋冬新款牛仔外套男宽松破洞韩版潮流夹克原宿风外套牛仔衣 蓝色 M', '../img/g28.jpg', '276.00', '138.00', '4', '0');
INSERT INTO `data` VALUES ('029', '2017秋装新款男士牛仔外套男学生韩版宽松休闲帅气百搭夹克棒球服 蓝色 M', '../img/g29.jpg', '258.00', '158.00', '4', '1');
INSERT INTO `data` VALUES ('030', '牛仔外套男士 宽松大码韩版破洞青少年牛仔夹克外套 秋装新款2017 蓝色 M', '../img/g30.jpg', '276.00', '159.00', '11', '7');
INSERT INTO `data` VALUES ('031', '个性国潮风中长款牛仔外套男款青少年秋装日系宽松bf原宿夹克衫 黑色 M', '../img/g31.jpg', '299.00', '198.00', '10', '8');
INSERT INTO `data` VALUES ('032', '港仔牛仔外套男文艺休闲学院风学生小清新百搭牛仔夹克衫2017秋冬 蓝色 M', '../img/g32.jpg', '230.00', '149.00', '8', '4');
INSERT INTO `data` VALUES ('033', '高端牛仔夹克衫男士2017秋装新款欧美个性黑色宽松破洞外套潮 黑色 M', '../img/g33.jpg', '258.00', '129.00', '8', '6');
INSERT INTO `data` VALUES ('034', '2017秋季新款修身长款连帽外套男士大码帅气长袖夹克韩版潮流男装 黑色 M', '../img/g34.jpg', '260.00', '130.00', '0', '0');
INSERT INTO `data` VALUES ('035', '秋装简约字母印花拼接韩版学生秋装夹克棒球领宽松外套男潮 黑色 M', '../img/g35.jpg', '259.00', '149.00', '4', '3');
INSERT INTO `data` VALUES ('036', '秋季新款虎头刺绣可拆卸领宽松ov舒适PU皮夹克男短款皮衣BF风外套 黑色 M', '../img/g36.jpg', '338.00', '169.00', '0', '0');
INSERT INTO `data` VALUES ('037', '2017秋季新款男装港仔青少年bf风落肩袖廓形工装夹克立领休闲外套 黑色 M', '../img/g37.jpg', '258.00', '129.00', '3', '3');
INSERT INTO `data` VALUES ('038', '男军绿色宽松工装夹克韩版原宿潮男时髦毛边贴布秋装外套 黑色 M', '../img/g38.jpg', '278.00', '139.00', '9', '9');
INSERT INTO `data` VALUES ('039', '男韩版秋装新款长袖皮夹克青年落肩袖机车服外穿短款皮衣潮 黑色 M', '../img/g39.jpg', '338.00', '169.00', '8', '7');
INSERT INTO `data` VALUES ('040', '2017秋季韩版 宽松版型潮流蝙蝠袖套头针织卫衣 男连帽卫衣外套 红蓝 M', '../img/g40.jpg', '259.00', '129.00', '3', '2');
INSERT INTO `data` VALUES ('041', '秋季新款个性下摆磨破时尚潮男中长款牛仔风衣 水洗牛仔衣 深蓝色 M', '../img/g41.jpg', '316.00', '158.00', '4', '3');
INSERT INTO `data` VALUES ('042', '外套个性破洞毛边秋季潮男蝙蝠袖宽松牛仔夹克短款牛仔衣服 蓝色 M', '../img/g42.jpg', '299.00', '159.00', '19', '10');
INSERT INTO `data` VALUES ('043', '秋装 原宿风做旧字母印花复古针织开衫潮男外搭毛衣外套 灰色 M', '../img/g43.jpg', '276.00', '138.00', '28', '19');
INSERT INTO `data` VALUES ('044', '秋季港风男装 韩版新款开衫长袖翻领学生青年条纹毛衣针织衫外套 酒红色 M', '../img/g44.jpg', '258.00', '209.00', '0', '0');
INSERT INTO `data` VALUES ('045', '2017秋冬新款长袖毛线衣 韩版彩虹条纹撞色潮男宽松套头毛衣外套 红色 M', '../img/g45.jpg', '259.00', '139.00', '8', '0');
INSERT INTO `data` VALUES ('046', '秋季男士风衣韩版chic水洗卡其色字母绣花过膝中长款大衣潮男外套 深卡其布色 M', '../img/g46.jpg', '358.00', '189.00', '3', '2');
INSERT INTO `data` VALUES ('047', '秋冬季韩版男士中长款毛呢大衣宽松腰带呢子外套长款风衣潮 黑色 M', '../img/g47.jpg', '380.00', '190.00', '2', '2');
INSERT INTO `data` VALUES ('048', '秋冬季男士中长款毛呢大衣oversize翻领廓形呢子大衣韩版外套潮 咖啡红 M', '../img/g48.jpg', '320.00', '188.00', '9', '9');
INSERT INTO `data` VALUES ('049', '秋冬季韩版潮男中长款复古呢料风衣男显高宽松呢大衣外套 咖啡红 M', '../img/g49.jpg', '329.00', '179.00', '4', '2');
INSERT INTO `data` VALUES ('050', '潮男秋装韩版宽松版型中长款过膝大衣OVERSZIE蝙蝠袖连帽风衣外套 黑色 M', '../img/g50.jpg', '199.00', '188.00', '1', '1');
INSERT INTO `data` VALUES ('051', '男士连帽中长款风衣外套 秋装新款学生韩版潮春秋帅气风衣男装 黑色 M', '../img/g51.jpg', '328.00', '199.00', '2', '2');
INSERT INTO `data` VALUES ('052', '男秋季新款夹克韩版背后字母刺绣拼色宽松牛仔夹克潮男外套衣服 蓝色 M', '../img/g52.jpg', '170.00', '139.00', '3', '3');
INSERT INTO `data` VALUES ('053', '男生毛衣外套 2017新款韩版潮流帅气宽松舒适学生开衫针织衫 白色 M', '../img/g53.jpg', '240.00', '179.00', '2', '2');
INSERT INTO `data` VALUES ('054', '秋装新款上衣趣味卡通刺绣韩版潮男宽松圆领卫衣 秋冬打底 蓝色 M', '../img/g54.jpg', '199.00', '119.00', '8', '8');
INSERT INTO `data` VALUES ('055', '秋季韩版纯色针织衫无袖马甲潮男bf风V领坎肩背心男无袖毛衣外套 浅灰色 S', '../img/g55.jpg', '198.00', '98.00', '5', '4');
INSERT INTO `data` VALUES ('056', '韩版条纹撞色潮男秋装外套oversize蝙蝠袖宽松针织衫开衫短款线衫 黑色 M', '../img/g56.jpg', '236.00', '118.00', '4', '3');
INSERT INTO `data` VALUES ('057', '2017秋季新款卫衣男韩版潮流学生长袖男士圆领套头个性嘻哈外套潮 黑色 M', '../img/g57.jpg', '180.00', '98.00', '8', '7');
INSERT INTO `data` VALUES ('058', '2017秋季连帽卫衣男韩版潮流长袖帽衫男士套头个性嘻哈外套潮 灰色 M', '../img/g58.jpg', '218.00', '109.00', '4', '4');
INSERT INTO `data` VALUES ('059', '2017秋冬新款男士连帽衫加绒保暖卫衣韩版潮流港风外套男青年 灰色 M', '../img/g59.jpg', '272.00', '136.00', '10', '9');
INSERT INTO `data` VALUES ('060', '2017新款百搭高档男士针织衫韩版潮流开衫宽松外套条纹拼色男毛衣 白色 M', '../img/g60.jpg', '256.00', '199.00', '3', '0');
SET FOREIGN_KEY_CHECKS=1;
