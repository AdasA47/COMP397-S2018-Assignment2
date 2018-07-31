var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Ins = /** @class */ (function (_super) {
        __extends(Ins, _super);
        // constructors
        function Ins() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Ins.prototype.Start = function () {
            this._scenary = new objects.Scenary();
            this._instructionsLabel1 = new objects.Label("Enjoy a space ride with Goku, the best Super hero  in whole Universe.", "15px", "Consolas", "#FFFF00", 320, 50, true);
            this._instructionsLabel2 = new objects.Label("Collect as many Dragon Balls as you can to increase your score. You have only 'SpaceBar' for controls.", "15px", "Consolas", "#FFFF00", 320, 100, true);
            this._instructionsLabel2 = new objects.Label("You have only 'SpaceBar' to jump in space for controls.", "15px", "Consolas", "#FFFF00", 320, 150, true);
            this._instructionsLabel4 = new objects.Label("Avoid crashing to asteroids. Hitting biggest asteroid will result in", "15px", "Consolas", "#FFFF00", 320, 200, true);
            this._instructionsLabel5 = new objects.Label("losing 2 lives where as hitting smaller asteroids will result in losing 1 life", "15px", "Consolas", "#FFFF00", 320, 250, true);
            this._instructionsLabel6 = new objects.Label("ENJOY YOUR GAME AND GET HIGHSCORE!!", "25px", "Consolas", "#FFFFFF", 320, 300, true);
            this._backButton = new objects.Button("BackButton", 320, 400, true);
            this._backgroundMusic = createjs.Sound.play("steamtech");
            this._backgroundMusic.volume = 0.5;
            this._backgroundMusic.loop = -1;
            this.Main();
        };
        Ins.prototype.Update = function () {
            this._scenary.Update();
        };
        Ins.prototype.Reset = function () {
        };
        Ins.prototype.Destroy = function () {
            this._backgroundMusic.stop();
            this.removeAllChildren();
        };
        Ins.prototype.Main = function () {
            this.addChild(this._scenary);
            this.addChild(this._instructionsLabel1);
            this.addChild(this._instructionsLabel2);
            this.addChild(this._instructionsLabel3);
            this.addChild(this._instructionsLabel4);
            this.addChild(this._instructionsLabel5);
            this.addChild(this._instructionsLabel6);
            this.addChild(this._backButton);
            this._backButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.START;
            }, this);
        };
        return Ins;
    }(objects.Scene));
    scenes.Ins = Ins;
})(scenes || (scenes = {}));
//# sourceMappingURL=ins.js.map