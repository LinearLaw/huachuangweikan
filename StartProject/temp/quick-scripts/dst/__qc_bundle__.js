
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/migration/use_v2.0.x_cc.Toggle_event');
require('./assets/scripts/Game');
require('./assets/scripts/Player');
require('./assets/scripts/Star');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '10385Y2eVtOfJrjMYYFPA4A', 'Game');
// scripts/Game.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    /**
     * type ：这里进行了属性检查
     */
    // 星星预置资源
    starPrefab: {
      "default": null,
      type: cc.Prefab
    },
    // 星星的初始个数
    STAR_COUNT: {
      "default": 1,
      type: cc.Integer
    },
    // 每获得多少个星星，stage+1，星星数也+1
    STAGE_COUNT: 100,
    MAX_STAR_COUNT: 15,
    // 界面中增加星星的最大个数
    // 星星消失时间的范围
    maxStarDuration: 0,
    minStarDuration: 0,
    // 地面节点
    ground: {
      "default": null,
      type: cc.Node
    },
    // player节点
    player: {
      "default": null,
      type: cc.Node
    },
    // 分数文本节点
    scoreDisplay: {
      "default": null,
      type: cc.Label
    },
    // 得分音效
    scoreAudio: {
      "default": null,
      type: cc.AudioClip
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    // 获取地板的高度
    this.groundY = this.ground.y + this.ground.height / 2; // 初始时，生成多个星星

    for (var i = 0; i < this.STAR_COUNT; i++) {
      this.generateNewStar();
    }

    this.score = 0;
  },
  generateNewStar: function generateNewStar() {
    // 1、根据prefab，生成一个节点
    var newStar = cc.instantiate(this.starPrefab); // 2、将节点加入到界面中

    this.node.addChild(newStar); // 3、设置位置

    newStar.setPosition(this.generateStarPos()); // 4、在星星组件上，暂存Game对象的引用

    newStar.getComponent("Star").game = this;
  },
  // 生成随机位置
  generateStarPos: function generateStarPos() {
    var randX = 0;
    var randY = this.groundY + Math.random() * this.player.getComponent("Player").jumpHeight + 50;
    var maxX = this.node.width / 2;
    randX = (Math.random() - 0.5) * 2 * maxX;
    return cc.v2(randX, randY);
  },
  // update (dt) {},
  gainScore: function gainScore() {
    var tempScore = this.score + 1; // 每过 STAGE_COUNT 分，界面上多一个星星，最多增加MAX_STAR_COUNT个

    var tempCount = Math.floor(tempScore / this.STAGE_COUNT);

    if (tempCount <= this.MAX_STAR_COUNT && Math.floor(this.score / this.STAGE_COUNT) < tempCount) {
      this.generateNewStar();
    }

    this.score = tempScore;
    this.scoreDisplay.string = "Score : " + this.score + " -Stage  : " + tempCount;
    cc.audioEngine.playEffect(this.scoreAudio, false);
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJQcmVmYWIiLCJ0eXBlIiwiUHJlZmFiIiwiU1RBUl9DT1VOVCIsIkludGVnZXIiLCJTVEFHRV9DT1VOVCIsIk1BWF9TVEFSX0NPVU5UIiwibWF4U3RhckR1cmF0aW9uIiwibWluU3RhckR1cmF0aW9uIiwiZ3JvdW5kIiwiTm9kZSIsInBsYXllciIsInNjb3JlRGlzcGxheSIsIkxhYmVsIiwic2NvcmVBdWRpbyIsIkF1ZGlvQ2xpcCIsIm9uTG9hZCIsImdyb3VuZFkiLCJ5IiwiaGVpZ2h0IiwiaSIsImdlbmVyYXRlTmV3U3RhciIsInNjb3JlIiwibmV3U3RhciIsImluc3RhbnRpYXRlIiwibm9kZSIsImFkZENoaWxkIiwic2V0UG9zaXRpb24iLCJnZW5lcmF0ZVN0YXJQb3MiLCJnZXRDb21wb25lbnQiLCJnYW1lIiwicmFuZFgiLCJyYW5kWSIsIk1hdGgiLCJyYW5kb20iLCJqdW1wSGVpZ2h0IiwibWF4WCIsIndpZHRoIiwidjIiLCJnYWluU2NvcmUiLCJ0ZW1wU2NvcmUiLCJ0ZW1wQ291bnQiLCJmbG9vciIsInN0cmluZyIsImF1ZGlvRW5naW5lIiwicGxheUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7OztBQUdBO0FBQ0FDLElBQUFBLFVBQVUsRUFBQztBQUNQLGlCQUFRLElBREQ7QUFFUEMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkYsS0FMSDtBQVNSO0FBQ0FDLElBQUFBLFVBQVUsRUFBQztBQUNQLGlCQUFRLENBREQ7QUFFUEYsTUFBQUEsSUFBSSxFQUFDTCxFQUFFLENBQUNR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QixZQUFMLENBQWtCK0IsTUFBbEIsZ0JBQXNDLEtBQUtyQixLQUEzQyxtQkFBOERtQixTQUE5RDtBQUVBN0MsSUFBQUEsRUFBRSxDQUFDZ0QsV0FBSCxDQUFlQyxVQUFmLENBQTBCLEtBQUsvQixVQUEvQixFQUEwQyxLQUExQztBQUdIO0FBMUdJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiB0eXBlIO+8mui/memHjOi/m+ihjOS6huWxnuaAp+ajgOafpVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIC8vIOaYn+aYn+mihOe9rui1hOa6kFxyXG4gICAgICAgIHN0YXJQcmVmYWI6e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g5pif5pif55qE5Yid5aeL5Liq5pWwXHJcbiAgICAgICAgU1RBUl9DT1VOVDp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6MSxcclxuICAgICAgICAgICAgdHlwZTpjYy5JbnRlZ2VyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g5q+P6I635b6X5aSa5bCR5Liq5pif5pif77yMc3RhZ2UrMe+8jOaYn+aYn+aVsOS5nysxXHJcbiAgICAgICAgU1RBR0VfQ09VTlQ6MTAwLFxyXG4gICAgICAgIE1BWF9TVEFSX0NPVU5UOjE1LCAgLy8g55WM6Z2i5Lit5aKe5Yqg5pif5pif55qE5pyA5aSn5Liq5pWwXHJcblxyXG4gICAgICAgIC8vIOaYn+aYn+a2iOWkseaXtumXtOeahOiMg+WbtFxyXG4gICAgICAgIG1heFN0YXJEdXJhdGlvbjowLFxyXG4gICAgICAgIG1pblN0YXJEdXJhdGlvbjowLFxyXG5cclxuICAgICAgICAvLyDlnLDpnaLoioLngrlcclxuICAgICAgICBncm91bmQ6e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyBwbGF5ZXLoioLngrlcclxuICAgICAgICBwbGF5ZXI6e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuTm9kZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOWIhuaVsOaWh+acrOiKgueCuVxyXG4gICAgICAgIHNjb3JlRGlzcGxheTp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6bnVsbCxcclxuICAgICAgICAgICAgdHlwZTpjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vIOW+l+WIhumfs+aViFxyXG4gICAgICAgIHNjb3JlQXVkaW86e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuQXVkaW9DbGlwXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICAvLyDojrflj5blnLDmnb/nmoTpq5jluqZcclxuICAgICAgICB0aGlzLmdyb3VuZFkgPSB0aGlzLmdyb3VuZC55ICsgdGhpcy5ncm91bmQuaGVpZ2h0LzI7XHJcblxyXG4gICAgICAgIC8vIOWIneWni+aXtu+8jOeUn+aIkOWkmuS4quaYn+aYn1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7aSA8IHRoaXMuU1RBUl9DT1VOVDtpKyspe1xyXG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlTmV3U3RhcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XHJcbiAgICB9LFxyXG5cclxuICAgIGdlbmVyYXRlTmV3U3RhcjpmdW5jdGlvbigpe1xyXG4gICAgICAgIC8vIDHjgIHmoLnmja5wcmVmYWLvvIznlJ/miJDkuIDkuKroioLngrlcclxuICAgICAgICBsZXQgbmV3U3RhciA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc3RhclByZWZhYik7XHJcblxyXG4gICAgICAgIC8vIDLjgIHlsIboioLngrnliqDlhaXliLDnlYzpnaLkuK1cclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobmV3U3Rhcik7XHJcblxyXG4gICAgICAgIC8vIDPjgIHorr7nva7kvY3nva5cclxuICAgICAgICBuZXdTdGFyLnNldFBvc2l0aW9uKHRoaXMuZ2VuZXJhdGVTdGFyUG9zKCkpO1xyXG5cclxuICAgICAgICAvLyA044CB5Zyo5pif5pif57uE5Lu25LiK77yM5pqC5a2YR2FtZeWvueixoeeahOW8leeUqFxyXG4gICAgICAgIG5ld1N0YXIuZ2V0Q29tcG9uZW50KFwiU3RhclwiKS5nYW1lID0gdGhpcztcclxuICAgIH0sXHJcblxyXG4gICAgLy8g55Sf5oiQ6ZqP5py65L2N572uXHJcbiAgICBnZW5lcmF0ZVN0YXJQb3MoKXtcclxuICAgICAgICBsZXQgcmFuZFggPSAwO1xyXG4gICAgICAgIGxldCByYW5kWSA9IHRoaXMuZ3JvdW5kWSArIE1hdGgucmFuZG9tKCkgKiB0aGlzLnBsYXllci5nZXRDb21wb25lbnQoXCJQbGF5ZXJcIikuanVtcEhlaWdodCArIDUwO1xyXG4gICAgICAgIGxldCBtYXhYID0gdGhpcy5ub2RlLndpZHRoIC8gMjtcclxuXHJcbiAgICAgICAgcmFuZFggPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAyICogbWF4WDtcclxuICAgICAgICByZXR1cm4gY2MudjIocmFuZFgscmFuZFkpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxuICAgIFxyXG4gICAgZ2FpblNjb3JlKCl7XHJcbiAgICAgICAgbGV0IHRlbXBTY29yZSA9IHRoaXMuc2NvcmUgKyAxO1xyXG5cclxuICAgICAgICAvLyDmr4/ov4cgU1RBR0VfQ09VTlQg5YiG77yM55WM6Z2i5LiK5aSa5LiA5Liq5pif5pif77yM5pyA5aSa5aKe5YqgTUFYX1NUQVJfQ09VTlTkuKpcclxuICAgICAgICBsZXQgdGVtcENvdW50ID0gTWF0aC5mbG9vcih0ZW1wU2NvcmUvdGhpcy5TVEFHRV9DT1VOVClcclxuICAgICAgICBpZih0ZW1wQ291bnQgPD0gdGhpcy5NQVhfU1RBUl9DT1VOVCBcclxuICAgICAgICAgICAgJiYgTWF0aC5mbG9vcih0aGlzLnNjb3JlIC8gdGhpcy5TVEFHRV9DT1VOVCkgPCB0ZW1wQ291bnRcclxuICAgICAgICApe1xyXG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlTmV3U3RhcigpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNjb3JlID0gdGVtcFNjb3JlO1xyXG4gICAgICAgIHRoaXMuc2NvcmVEaXNwbGF5LnN0cmluZyA9IGBTY29yZSA6ICR7dGhpcy5zY29yZX0gLVN0YWdlICA6ICR7dGVtcENvdW50fWA7XHJcblxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5zY29yZUF1ZGlvLGZhbHNlKTtcclxuXHJcblxyXG4gICAgfVxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/migration/use_v2.0.x_cc.Toggle_event.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6bcc4nA9dRC3L6Ji+7Ue627', 'use_v2.0.x_cc.Toggle_event');
// migration/use_v2.0.x_cc.Toggle_event.js

"use strict";

/*
 * This script is automatically generated by Cocos Creator and is only compatible with projects prior to v2.1.0.
 * You do not need to manually add this script in any other project.
 * If you don't use cc.Toggle in your project, you can delete this script directly.
 * If your project is hosted in VCS such as git, submit this script together.
 *
 * 此脚本由 Cocos Creator 自动生成，仅用于兼容 v2.1.0 之前版本的工程，
 * 你无需在任何其它项目中手动添加此脚本。
 * 如果你的项目中没用到 Toggle，可直接删除该脚本。
 * 如果你的项目有托管于 git 等版本库，请将此脚本一并上传。
 */
if (cc.Toggle) {
  // Whether the 'toggle' and 'checkEvents' events are fired when 'toggle.check() / toggle.uncheck()' is called in the code
  // 在代码中调用 'toggle.check() / toggle.uncheck()' 时是否触发 'toggle' 与 'checkEvents' 事件
  cc.Toggle._triggerEventInScript_check = true;
}

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbWlncmF0aW9uXFx1c2VfdjIuMC54X2NjLlRvZ2dsZV9ldmVudC5qcyJdLCJuYW1lcyI6WyJjYyIsIlRvZ2dsZSIsIl90cmlnZ2VyRXZlbnRJblNjcmlwdF9jaGVjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUFZQSxJQUFJQSxFQUFFLENBQUNDLE1BQVAsRUFBZTtBQUNYO0FBQ0E7QUFDQUQsRUFBQUEsRUFBRSxDQUFDQyxNQUFILENBQVVDLDJCQUFWLEdBQXdDLElBQXhDO0FBQ0giLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIFRoaXMgc2NyaXB0IGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IENvY29zIENyZWF0b3IgYW5kIGlzIG9ubHkgY29tcGF0aWJsZSB3aXRoIHByb2plY3RzIHByaW9yIHRvIHYyLjEuMC5cclxuICogWW91IGRvIG5vdCBuZWVkIHRvIG1hbnVhbGx5IGFkZCB0aGlzIHNjcmlwdCBpbiBhbnkgb3RoZXIgcHJvamVjdC5cclxuICogSWYgeW91IGRvbid0IHVzZSBjYy5Ub2dnbGUgaW4geW91ciBwcm9qZWN0LCB5b3UgY2FuIGRlbGV0ZSB0aGlzIHNjcmlwdCBkaXJlY3RseS5cclxuICogSWYgeW91ciBwcm9qZWN0IGlzIGhvc3RlZCBpbiBWQ1Mgc3VjaCBhcyBnaXQsIHN1Ym1pdCB0aGlzIHNjcmlwdCB0b2dldGhlci5cclxuICpcclxuICog5q2k6ISa5pys55SxIENvY29zIENyZWF0b3Ig6Ieq5Yqo55Sf5oiQ77yM5LuF55So5LqO5YW85a65IHYyLjEuMCDkuYvliY3niYjmnKznmoTlt6XnqIvvvIxcclxuICog5L2g5peg6ZyA5Zyo5Lu75L2V5YW25a6D6aG555uu5Lit5omL5Yqo5re75Yqg5q2k6ISa5pys44CCXHJcbiAqIOWmguaenOS9oOeahOmhueebruS4reayoeeUqOWIsCBUb2dnbGXvvIzlj6/nm7TmjqXliKDpmaTor6XohJrmnKzjgIJcclxuICog5aaC5p6c5L2g55qE6aG555uu5pyJ5omY566h5LqOIGdpdCDnrYnniYjmnKzlupPvvIzor7flsIbmraTohJrmnKzkuIDlubbkuIrkvKDjgIJcclxuICovXHJcblxyXG5pZiAoY2MuVG9nZ2xlKSB7XHJcbiAgICAvLyBXaGV0aGVyIHRoZSAndG9nZ2xlJyBhbmQgJ2NoZWNrRXZlbnRzJyBldmVudHMgYXJlIGZpcmVkIHdoZW4gJ3RvZ2dsZS5jaGVjaygpIC8gdG9nZ2xlLnVuY2hlY2soKScgaXMgY2FsbGVkIGluIHRoZSBjb2RlXHJcbiAgICAvLyDlnKjku6PnoIHkuK3osIPnlKggJ3RvZ2dsZS5jaGVjaygpIC8gdG9nZ2xlLnVuY2hlY2soKScg5pe25piv5ZCm6Kem5Y+RICd0b2dnbGUnIOS4jiAnY2hlY2tFdmVudHMnIOS6i+S7tlxyXG4gICAgY2MuVG9nZ2xlLl90cmlnZ2VyRXZlbnRJblNjcmlwdF9jaGVjayA9IHRydWU7XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Star.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1f1d5DBZ3RDf5pDNokCNY1H', 'Star');
// scripts/Star.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    // 星星和主角之间的距离，小于这个值，则完成收集
    pickRadius: 0
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  getPlayerDistance: function getPlayerDistance() {
    var playerPos = this.game.player.getPosition();
    var dist = this.node.position.sub(playerPos).mag();
    return dist;
  },
  onPicked: function onPicked() {
    // 子组件触发父组件的事件。
    // 触发Game组件里面的再生成函数
    this.game.generateNewStar(); // 触发Game组件里面的得分函数

    this.game.gainScore(); // 当前节点销毁

    this.node.destroy();
  },
  update: function update(dt) {
    if (this.getPlayerDistance() < this.pickRadius) {
      this.onPicked();
      return;
    }
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU3Rhci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInBpY2tSYWRpdXMiLCJnZXRQbGF5ZXJEaXN0YW5jZSIsInBsYXllclBvcyIsImdhbWUiLCJwbGF5ZXIiLCJnZXRQb3NpdGlvbiIsImRpc3QiLCJub2RlIiwicG9zaXRpb24iLCJzdWIiLCJtYWciLCJvblBpY2tlZCIsImdlbmVyYXRlTmV3U3RhciIsImdhaW5TY29yZSIsImRlc3Ryb3kiLCJ1cGRhdGUiLCJkdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQUMsSUFBQUEsVUFBVSxFQUFDO0FBRkgsR0FIUDtBQVFMO0FBRUE7QUFFQUMsRUFBQUEsaUJBWkssK0JBWWM7QUFDZixRQUFJQyxTQUFTLEdBQUcsS0FBS0MsSUFBTCxDQUFVQyxNQUFWLENBQWlCQyxXQUFqQixFQUFoQjtBQUVBLFFBQUlDLElBQUksR0FBRyxLQUFLQyxJQUFMLENBQVVDLFFBQVYsQ0FBbUJDLEdBQW5CLENBQXVCUCxTQUF2QixFQUFrQ1EsR0FBbEMsRUFBWDtBQUVBLFdBQU9KLElBQVA7QUFDSCxHQWxCSTtBQW1CTEssRUFBQUEsUUFuQkssc0JBbUJLO0FBQ047QUFDQTtBQUNBLFNBQUtSLElBQUwsQ0FBVVMsZUFBVixHQUhNLENBS047O0FBQ0EsU0FBS1QsSUFBTCxDQUFVVSxTQUFWLEdBTk0sQ0FRTjs7QUFDQSxTQUFLTixJQUFMLENBQVVPLE9BQVY7QUFDSCxHQTdCSTtBQStCTEMsRUFBQUEsTUEvQkssa0JBK0JHQyxFQS9CSCxFQStCTztBQUNSLFFBQUcsS0FBS2YsaUJBQUwsS0FBMkIsS0FBS0QsVUFBbkMsRUFBOEM7QUFDMUMsV0FBS1csUUFBTDtBQUNBO0FBQ0g7QUFDSjtBQXBDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8g5pif5pif5ZKM5Li76KeS5LmL6Ze055qE6Led56a777yM5bCP5LqO6L+Z5Liq5YC877yM5YiZ5a6M5oiQ5pS26ZuGXHJcbiAgICAgICAgcGlja1JhZGl1czowLFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgZ2V0UGxheWVyRGlzdGFuY2UoKXtcclxuICAgICAgICBsZXQgcGxheWVyUG9zID0gdGhpcy5nYW1lLnBsYXllci5nZXRQb3NpdGlvbigpO1xyXG5cclxuICAgICAgICBsZXQgZGlzdCA9IHRoaXMubm9kZS5wb3NpdGlvbi5zdWIocGxheWVyUG9zKS5tYWcoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRpc3Q7XHJcbiAgICB9LFxyXG4gICAgb25QaWNrZWQoKXtcclxuICAgICAgICAvLyDlrZDnu4Tku7bop6blj5HniLbnu4Tku7bnmoTkuovku7bjgIJcclxuICAgICAgICAvLyDop6blj5FHYW1l57uE5Lu26YeM6Z2i55qE5YaN55Sf5oiQ5Ye95pWwXHJcbiAgICAgICAgdGhpcy5nYW1lLmdlbmVyYXRlTmV3U3RhcigpO1xyXG5cclxuICAgICAgICAvLyDop6blj5FHYW1l57uE5Lu26YeM6Z2i55qE5b6X5YiG5Ye95pWwXHJcbiAgICAgICAgdGhpcy5nYW1lLmdhaW5TY29yZSgpO1xyXG5cclxuICAgICAgICAvLyDlvZPliY3oioLngrnplIDmr4FcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgaWYodGhpcy5nZXRQbGF5ZXJEaXN0YW5jZSgpIDwgdGhpcy5waWNrUmFkaXVzKXtcclxuICAgICAgICAgICAgdGhpcy5vblBpY2tlZCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '92451LDEWxFtbvrUSPn2v5+', 'Player');
// scripts/Player.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  // 角色的各种属性
  properties: {
    // 跳跃高度
    jumpHeight: 0,
    // 跳跃持续时间
    jumpDuration: 0,

    /**
     * 思考：如果要实现二段跳？
     *      改成int类型，判断是否大于2来进行锁定，落地归0
     */
    // 跳跃键的锁定，false不锁定，true锁定
    jumpLock: false,
    jumpAudio: {
      "default": null,
      type: cc.AudioClip
    },
    // 最大移动速度
    maxMoveSpeed: 0,
    // 加速度
    accel: 0,
    // 左右的墙
    maxBackLeftWall: -500,
    maxBackRightWall: 500
  },
  onLoad: function onLoad() {
    // 1、角色默认动作 - 上下横跳
    // this.jumpAction = this.setJumpAction();
    // this.node.runAction(this.jumpAction);
    // 2、加速度方向的开关
    this.accLeft = false;
    this.accRight = false; // 跳跃按键的锁定开关 - 防止用户按多次导致跳跃动作叠加

    this.jumpLock = false, // 3、当前水平方向的速度
    this.xSpeed = 0; // 4、挂载键盘事件，按下，弹起

    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  },
  // 键盘按下
  onKeyDown: function onKeyDown(e) {
    switch (e.keyCode) {
      case cc.macro.KEY.left:
        this.accLeft = true;
        break;

      case cc.macro.KEY.right:
        this.accRight = true;
        break;
      // 按下alt键，角色跳跃

      case cc.macro.KEY.alt:
        if (this.jumpLock == false) {
          this.jumpLock = true;
          this.onJumpClick();
        }

        break;
    }
  },
  // 键盘弹起
  onKeyUp: function onKeyUp(e) {
    switch (e.keyCode) {
      case cc.macro.KEY.left:
        this.accLeft = false;
        this.setXSpeedInit();
        break;

      case cc.macro.KEY.right:
        this.accRight = false;
        this.setXSpeedInit();
        break;

      case cc.macro.KEY.alt:
        break;
    }
  },
  // 播放跳跃音效
  playJumpSound: function playJumpSound() {
    cc.audioEngine.playEffect(this.jumpAudio, false);
  },
  // 按下跳跃键
  onJumpClick: function onJumpClick() {
    this.jumpAction = this.setJumpAction();
    this.node.runAction(this.jumpAction);
  },
  // 设置跳跃动作
  setJumpAction: function setJumpAction() {
    var _this = this;

    /**
     * 1、cc.moveBy，在指定的时间，移动指定的距离
     *      参数一，动作完成的时间
     *      参数二，v2是Vec2（表示 2D 向量和坐标），传入x+y，返回一个向量对象
     *      返回值，是ActionInterval对象，是一个时间间隔动作的类，
     *          用来表示这种动作在某一个时间间隔内完成
     * 
     * moveBy设计了多态，
     *      两个参数时：参数二是向量对象
     *      三个参数时，参数二是x坐标，参数三是y坐标
     * 
     *      注意：这里的x和y，是以角色动作的当前位置而言的。是一个相对位移。
     * 
     * 所以jumpUp是构造了一个向上跳跃的动作，jumpDown是下落的动作
     * 
     * 2、easing(cc.easeCubicActionOut())
     *      easing是ActionInterval下的方法，可以让动作的执行呈现一条曲线，而不是直线。
     *      动作曲线总共有24种。
     *      From：https://docs.cocos.com/creator/api/zh/modules/cc.html#easecubicactionout
     * 
     */
    // 1、播放音乐
    var callback = cc.callFunc(this.playJumpSound, this); // 2、跳起

    var jumpUp = cc.moveBy(this.jumpDuration, cc.v2(0, this.jumpHeight)).easing(cc.easeCubicActionOut()); // 3、下落

    var jumpDown = cc.moveBy(this.jumpDuration, cc.v2(0, -this.jumpHeight)).easing(cc.easeCubicActionIn()); // 4、将跳跃锁定打开

    var afterAction = cc.callFunc(function () {
      _this.jumpLock = false;
    });
    /**
     * 1、sequence，动作序列，里面的是一连串的动作，可以传多个参数，也可以传一个动作数组
     * 2、repeatForever，动作一直执行
     *      可以传入一个回调函数，回调函数会在两个动作交替的时候执行
     */

    return cc.sequence([callback, jumpUp, jumpDown, afterAction]);
  },
  // 横向speed归零
  setXSpeedInit: function setXSpeedInit() {
    this.xSpeed = 0;
  },
  // 视图渲染的每一帧，将会执行一次update
  update: function update(dt) {
    // 1、根据两个开关，来计算当前的x方向的加速度
    if (this.accLeft) {
      this.xSpeed -= this.accel * dt;
    } else if (this.accRight) {
      this.xSpeed += this.accel * dt;
    } // 2、判断加速度是否超出最大加速度，超出则限制


    if (Math.abs(this.xSpeed) > this.maxMoveSpeed) {
      // 求正负号
      var temp = this.xSpeed / Math.abs(this.xSpeed); // 限制xSpeed为最大值

      this.xSpeed = this.maxMoveSpeed * temp;
    } // 3、设置节点位移


    this.node.x = this.calcLeftRight(this.node.x, this.xSpeed * dt);
  },
  // 检测左右坐标，来限制最小和最大的左右位移
  calcLeftRight: function calcLeftRight(x, translate) {
    var temp = x + translate;
    var maxBackLeftWall = this.maxBackLeftWall,
        maxBackRightWall = this.maxBackRightWall;

    if (temp < 0 && Math.abs(temp) > Math.abs(maxBackLeftWall)) {
      this.setXSpeedInit();
      return maxBackLeftWall;
    }

    if (temp > 0 && Math.abs(temp) > Math.abs(maxBackRightWall)) {
      this.setXSpeedInit();
      return maxBackRightWall;
    }

    return temp;
  },
  onDestroy: function onDestroy() {
    // 组件销毁时，将绑定的键盘事件解绑
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUGxheWVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwianVtcEhlaWdodCIsImp1bXBEdXJhdGlvbiIsImp1bXBMb2NrIiwianVtcEF1ZGlvIiwidHlwZSIsIkF1ZGlvQ2xpcCIsIm1heE1vdmVTcGVlZCIsImFjY2VsIiwibWF4QmFja0xlZnRXYWxsIiwibWF4QmFja1JpZ2h0V2FsbCIsIm9uTG9hZCIsImFjY0xlZnQiLCJhY2NSaWdodCIsInhTcGVlZCIsInN5c3RlbUV2ZW50Iiwib24iLCJTeXN0ZW1FdmVudCIsIkV2ZW50VHlwZSIsIktFWV9ET1dOIiwib25LZXlEb3duIiwiS0VZX1VQIiwib25LZXlVcCIsImUiLCJrZXlDb2RlIiwibWFjcm8iLCJLRVkiLCJsZWZ0IiwicmlnaHQiLCJhbHQiLCJvbkp1bXBDbGljayIsInNldFhTcGVlZEluaXQiLCJwbGF5SnVtcFNvdW5kIiwiYXVkaW9FbmdpbmUiLCJwbGF5RWZmZWN0IiwianVtcEFjdGlvbiIsInNldEp1bXBBY3Rpb24iLCJub2RlIiwicnVuQWN0aW9uIiwiY2FsbGJhY2siLCJjYWxsRnVuYyIsImp1bXBVcCIsIm1vdmVCeSIsInYyIiwiZWFzaW5nIiwiZWFzZUN1YmljQWN0aW9uT3V0IiwianVtcERvd24iLCJlYXNlQ3ViaWNBY3Rpb25JbiIsImFmdGVyQWN0aW9uIiwic2VxdWVuY2UiLCJ1cGRhdGUiLCJkdCIsIk1hdGgiLCJhYnMiLCJ0ZW1wIiwieCIsImNhbGNMZWZ0UmlnaHQiLCJ0cmFuc2xhdGUiLCJvbkRlc3Ryb3kiLCJvZmYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0w7QUFDQUMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQUMsSUFBQUEs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QUFDSDs7QUFDRCxXQUFPNEMsSUFBUDtBQUNILEdBak1JO0FBbU1MSSxFQUFBQSxTQW5NSyx1QkFtTU07QUFDUDtBQUNBN0QsSUFBQUEsRUFBRSxDQUFDa0IsV0FBSCxDQUFlNEMsR0FBZixDQUNJOUQsRUFBRSxDQUFDb0IsV0FBSCxDQUFlQyxTQUFmLENBQXlCQyxRQUQ3QixFQUVJLEtBQUtDLFNBRlQsRUFHSSxJQUhKO0FBS0F2QixJQUFBQSxFQUFFLENBQUNrQixXQUFILENBQWU0QyxHQUFmLENBQ0k5RCxFQUFFLENBQUNvQixXQUFILENBQWVDLFNBQWYsQ0FBeUJHLE1BRDdCLEVBRUksS0FBS0MsT0FGVCxFQUdJLElBSEo7QUFLSDtBQS9NSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICAvLyDop5LoibLnmoTlkITnp43lsZ7mgKdcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyDot7Pot4Ppq5jluqZcclxuICAgICAgICBqdW1wSGVpZ2h0OjAsXHJcbiAgICAgICAgLy8g6Lez6LeD5oyB57ut5pe26Ze0XHJcbiAgICAgICAganVtcER1cmF0aW9uOjAsXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOaAneiAg++8muWmguaenOimgeWunueOsOS6jOautei3s++8n1xyXG4gICAgICAgICAqICAgICAg5pS55oiQaW5057G75Z6L77yM5Yik5pat5piv5ZCm5aSn5LqOMuadpei/m+ihjOmUgeWumu+8jOiQveWcsOW9kjBcclxuICAgICAgICAgKi9cclxuICAgICAgICAvLyDot7Pot4PplK7nmoTplIHlrprvvIxmYWxzZeS4jemUgeWumu+8jHRydWXplIHlrppcclxuICAgICAgICBqdW1wTG9jazpmYWxzZSxcclxuXHJcbiAgICAgICAganVtcEF1ZGlvOntcclxuICAgICAgICAgICAgZGVmYXVsdDpudWxsLFxyXG4gICAgICAgICAgICB0eXBlOmNjLkF1ZGlvQ2xpcFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vIOacgOWkp+enu+WKqOmAn+W6plxyXG4gICAgICAgIG1heE1vdmVTcGVlZDowLFxyXG4gICAgICAgIC8vIOWKoOmAn+W6plxyXG4gICAgICAgIGFjY2VsOjAsXHJcblxyXG4gICAgICAgIC8vIOW3puWPs+eahOWimVxyXG4gICAgICAgIG1heEJhY2tMZWZ0V2FsbDotNTAwLFxyXG4gICAgICAgIG1heEJhY2tSaWdodFdhbGw6NTAwLFxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIC8vIDHjgIHop5LoibLpu5jorqTliqjkvZwgLSDkuIrkuIvmqKrot7NcclxuICAgICAgICAvLyB0aGlzLmp1bXBBY3Rpb24gPSB0aGlzLnNldEp1bXBBY3Rpb24oKTtcclxuICAgICAgICAvLyB0aGlzLm5vZGUucnVuQWN0aW9uKHRoaXMuanVtcEFjdGlvbik7XHJcblxyXG4gICAgICAgIC8vIDLjgIHliqDpgJ/luqbmlrnlkJHnmoTlvIDlhbNcclxuICAgICAgICB0aGlzLmFjY0xlZnQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmFjY1JpZ2h0ID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIOi3s+i3g+aMiemUrueahOmUgeWumuW8gOWFsyAtIOmYsuatoueUqOaIt+aMieWkmuasoeWvvOiHtOi3s+i3g+WKqOS9nOWPoOWKoFxyXG4gICAgICAgIHRoaXMuanVtcExvY2sgPSBmYWxzZSxcclxuXHJcbiAgICAgICAgLy8gM+OAgeW9k+WJjeawtOW5s+aWueWQkeeahOmAn+W6plxyXG4gICAgICAgIHRoaXMueFNwZWVkID0gMDtcclxuXHJcbiAgICAgICAgLy8gNOOAgeaMgui9vemUruebmOS6i+S7tu+8jOaMieS4i++8jOW8uei1t1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKFxyXG4gICAgICAgICAgICBjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sXHJcbiAgICAgICAgICAgIHRoaXMub25LZXlEb3duLFxyXG4gICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihcclxuICAgICAgICAgICAgY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCxcclxuICAgICAgICAgICAgdGhpcy5vbktleVVwLFxyXG4gICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgKVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyDplK7nm5jmjInkuItcclxuICAgIG9uS2V5RG93bihlKXtcclxuICAgICAgICBzd2l0Y2goZS5rZXlDb2RlKXtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkubGVmdDpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWNjTGVmdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkucmlnaHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjY1JpZ2h0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAvLyDmjInkuIthbHTplK7vvIzop5LoibLot7Pot4NcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYWx0OlxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5qdW1wTG9jayA9PSBmYWxzZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5qdW1wTG9jayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkp1bXBDbGljaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vIOmUruebmOW8uei1t1xyXG4gICAgb25LZXlVcChlKXtcclxuICAgICAgICBzd2l0Y2goZS5rZXlDb2RlKXtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkubGVmdDpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWNjTGVmdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRYU3BlZWRJbml0KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkucmlnaHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjY1JpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFhTcGVlZEluaXQoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hbHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8g5pKt5pS+6Lez6LeD6Z+z5pWIXHJcbiAgICBwbGF5SnVtcFNvdW5kKCl7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmp1bXBBdWRpbyxmYWxzZSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIOaMieS4i+i3s+i3g+mUrlxyXG4gICAgb25KdW1wQ2xpY2soKXtcclxuICAgICAgICB0aGlzLmp1bXBBY3Rpb24gPSB0aGlzLnNldEp1bXBBY3Rpb24oKTtcclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKHRoaXMuanVtcEFjdGlvbik7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIOiuvue9rui3s+i3g+WKqOS9nFxyXG4gICAgc2V0SnVtcEFjdGlvbjpmdW5jdGlvbiAoKXtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiAx44CBY2MubW92ZUJ577yM5Zyo5oyH5a6a55qE5pe26Ze077yM56e75Yqo5oyH5a6a55qE6Led56a7XHJcbiAgICAgICAgICogICAgICDlj4LmlbDkuIDvvIzliqjkvZzlrozmiJDnmoTml7bpl7RcclxuICAgICAgICAgKiAgICAgIOWPguaVsOS6jO+8jHYy5pivVmVjMu+8iOihqOekuiAyRCDlkJHph4/lkozlnZDmoIfvvInvvIzkvKDlhaV4K3nvvIzov5Tlm57kuIDkuKrlkJHph4/lr7nosaFcclxuICAgICAgICAgKiAgICAgIOi/lOWbnuWAvO+8jOaYr0FjdGlvbkludGVydmFs5a+56LGh77yM5piv5LiA5Liq5pe26Ze06Ze06ZqU5Yqo5L2c55qE57G777yMXHJcbiAgICAgICAgICogICAgICAgICAg55So5p2l6KGo56S66L+Z56eN5Yqo5L2c5Zyo5p+Q5LiA5Liq5pe26Ze06Ze06ZqU5YaF5a6M5oiQXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogbW92ZUJ56K6+6K6h5LqG5aSa5oCB77yMXHJcbiAgICAgICAgICogICAgICDkuKTkuKrlj4LmlbDml7bvvJrlj4LmlbDkuozmmK/lkJHph4/lr7nosaFcclxuICAgICAgICAgKiAgICAgIOS4ieS4quWPguaVsOaXtu+8jOWPguaVsOS6jOaYr3jlnZDmoIfvvIzlj4LmlbDkuInmmK955Z2Q5qCHXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogICAgICDms6jmhI/vvJrov5nph4znmoR45ZKMee+8jOaYr+S7peinkuiJsuWKqOS9nOeahOW9k+WJjeS9jee9ruiAjOiogOeahOOAguaYr+S4gOS4quebuOWvueS9jeenu+OAglxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIOaJgOS7pWp1bXBVcOaYr+aehOmAoOS6huS4gOS4quWQkeS4iui3s+i3g+eahOWKqOS9nO+8jGp1bXBEb3du5piv5LiL6JC955qE5Yqo5L2cXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogMuOAgWVhc2luZyhjYy5lYXNlQ3ViaWNBY3Rpb25PdXQoKSlcclxuICAgICAgICAgKiAgICAgIGVhc2luZ+aYr0FjdGlvbkludGVydmFs5LiL55qE5pa55rOV77yM5Y+v5Lul6K6p5Yqo5L2c55qE5omn6KGM5ZGI546w5LiA5p2h5puy57q/77yM6ICM5LiN5piv55u057q/44CCXHJcbiAgICAgICAgICogICAgICDliqjkvZzmm7Lnur/mgLvlhbHmnIkyNOenjeOAglxyXG4gICAgICAgICAqICAgICAgRnJvbe+8mmh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9hcGkvemgvbW9kdWxlcy9jYy5odG1sI2Vhc2VjdWJpY2FjdGlvbm91dFxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIC8vIDHjgIHmkq3mlL7pn7PkuZBcclxuICAgICAgICBsZXQgY2FsbGJhY2sgPSBjYy5jYWxsRnVuYyh0aGlzLnBsYXlKdW1wU291bmQsdGhpcyk7XHJcblxyXG4gICAgICAgIC8vIDLjgIHot7PotbdcclxuICAgICAgICBsZXQganVtcFVwID0gY2NcclxuICAgICAgICAgICAgLm1vdmVCeSh0aGlzLmp1bXBEdXJhdGlvbiwgY2MudjIoMCx0aGlzLmp1bXBIZWlnaHQpKVxyXG4gICAgICAgICAgICAuZWFzaW5nKGNjLmVhc2VDdWJpY0FjdGlvbk91dCgpKTtcclxuICAgICAgICAvLyAz44CB5LiL6JC9XHJcbiAgICAgICAgbGV0IGp1bXBEb3duID0gY2NcclxuICAgICAgICAgICAgLm1vdmVCeSh0aGlzLmp1bXBEdXJhdGlvbiwgY2MudjIoMCwtdGhpcy5qdW1wSGVpZ2h0KSlcclxuICAgICAgICAgICAgLmVhc2luZyhjYy5lYXNlQ3ViaWNBY3Rpb25JbigpKTtcclxuICAgICAgICAvLyA044CB5bCG6Lez6LeD6ZSB5a6a5omT5byAXHJcbiAgICAgICAgbGV0IGFmdGVyQWN0aW9uID0gY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5qdW1wTG9jayA9IGZhbHNlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogMeOAgXNlcXVlbmNl77yM5Yqo5L2c5bqP5YiX77yM6YeM6Z2i55qE5piv5LiA6L+e5Liy55qE5Yqo5L2c77yM5Y+v5Lul5Lyg5aSa5Liq5Y+C5pWw77yM5Lmf5Y+v5Lul5Lyg5LiA5Liq5Yqo5L2c5pWw57uEXHJcbiAgICAgICAgICogMuOAgXJlcGVhdEZvcmV2ZXLvvIzliqjkvZzkuIDnm7TmiafooYxcclxuICAgICAgICAgKiAgICAgIOWPr+S7peS8oOWFpeS4gOS4quWbnuiwg+WHveaVsO+8jOWbnuiwg+WHveaVsOS8muWcqOS4pOS4quWKqOS9nOS6pOabv+eahOaXtuWAmeaJp+ihjFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHJldHVybiBjYy5zZXF1ZW5jZShbY2FsbGJhY2ssanVtcFVwLGp1bXBEb3duLGFmdGVyQWN0aW9uXSlcclxuICAgIH0sXHJcbiAgICBcclxuICAgIC8vIOaoquWQkXNwZWVk5b2S6Zu2XHJcbiAgICBzZXRYU3BlZWRJbml0KCl7XHJcbiAgICAgICAgdGhpcy54U3BlZWQgPSAwO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyDop4blm77muLLmn5PnmoTmr4/kuIDluKfvvIzlsIbkvJrmiafooYzkuIDmrKF1cGRhdGVcclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICAvLyAx44CB5qC55o2u5Lik5Liq5byA5YWz77yM5p2l6K6h566X5b2T5YmN55qEeOaWueWQkeeahOWKoOmAn+W6plxyXG4gICAgICAgIGlmKHRoaXMuYWNjTGVmdCl7XHJcbiAgICAgICAgICAgIHRoaXMueFNwZWVkIC09IHRoaXMuYWNjZWwgKiBkdDtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLmFjY1JpZ2h0KXtcclxuICAgICAgICAgICAgdGhpcy54U3BlZWQgKz0gdGhpcy5hY2NlbCAqIGR0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gMuOAgeWIpOaWreWKoOmAn+W6puaYr+WQpui2heWHuuacgOWkp+WKoOmAn+W6pu+8jOi2heWHuuWImemZkOWItlxyXG4gICAgICAgIGlmKE1hdGguYWJzKHRoaXMueFNwZWVkKSA+IHRoaXMubWF4TW92ZVNwZWVkKXtcclxuICAgICAgICAgICAgLy8g5rGC5q2j6LSf5Y+3XHJcbiAgICAgICAgICAgIGxldCB0ZW1wID0gdGhpcy54U3BlZWQvTWF0aC5hYnModGhpcy54U3BlZWQpO1xyXG4gICAgICAgICAgICAvLyDpmZDliLZ4U3BlZWTkuLrmnIDlpKflgLxcclxuICAgICAgICAgICAgdGhpcy54U3BlZWQgPSB0aGlzLm1heE1vdmVTcGVlZCAqIHRlbXA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAz44CB6K6+572u6IqC54K55L2N56e7XHJcbiAgICAgICAgdGhpcy5ub2RlLnggPSB0aGlzLmNhbGNMZWZ0UmlnaHQodGhpcy5ub2RlLnggLCB0aGlzLnhTcGVlZCAqIGR0KTtcclxuICAgIH0sXHJcbiAgICAvLyDmo4DmtYvlt6blj7PlnZDmoIfvvIzmnaXpmZDliLbmnIDlsI/lkozmnIDlpKfnmoTlt6blj7PkvY3np7tcclxuICAgIGNhbGNMZWZ0UmlnaHQoeCx0cmFuc2xhdGUpe1xyXG4gICAgICAgIGxldCB0ZW1wID0geCArIHRyYW5zbGF0ZTtcclxuICAgICAgICBsZXQge1xyXG4gICAgICAgICAgICBtYXhCYWNrTGVmdFdhbGwsXHJcbiAgICAgICAgICAgIG1heEJhY2tSaWdodFdhbGxcclxuICAgICAgICB9ID0gdGhpcztcclxuICAgICAgICBpZih0ZW1wIDwgMCAmJiBNYXRoLmFicyh0ZW1wKSA+IE1hdGguYWJzKG1heEJhY2tMZWZ0V2FsbCkgKXtcclxuICAgICAgICAgICAgdGhpcy5zZXRYU3BlZWRJbml0KCk7XHJcbiAgICAgICAgICAgIHJldHVybiBtYXhCYWNrTGVmdFdhbGxcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGVtcCA+IDAgJiYgTWF0aC5hYnModGVtcCkgPiBNYXRoLmFicyhtYXhCYWNrUmlnaHRXYWxsKSApe1xyXG4gICAgICAgICAgICB0aGlzLnNldFhTcGVlZEluaXQoKTtcclxuICAgICAgICAgICAgcmV0dXJuIG1heEJhY2tSaWdodFdhbGxcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRlbXA7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uRGVzdHJveSgpe1xyXG4gICAgICAgIC8vIOe7hOS7tumUgOavgeaXtu+8jOWwhue7keWumueahOmUruebmOS6i+S7tuino+e7kVxyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihcclxuICAgICAgICAgICAgY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLFxyXG4gICAgICAgICAgICB0aGlzLm9uS2V5RG93bixcclxuICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKFxyXG4gICAgICAgICAgICBjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLFxyXG4gICAgICAgICAgICB0aGlzLm9uS2V5VXAsXHJcbiAgICAgICAgICAgIHRoaXNcclxuICAgICAgICApXHJcbiAgICB9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------
