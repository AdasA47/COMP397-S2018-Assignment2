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
    var Start = /** @class */ (function (_super) {
        __extends(Start, _super);
        // constructors
        function Start() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Start.prototype.Start = function () {
            this._scenary = new objects.Scenary();
            this._welcomeLabel = new objects.Label("DBZ Space Invader!", "60px", "Consolas", "#FF0000", 320, 100, true);
            this._startButton = new objects.Button("StartButton", 150, 300, true);
            this._instructionsButton = new objects.Button("InstructionsButton", 450, 300, true);
            this._exitButton = new objects.Button("ExitButton", 320, 400, true);
            this._backgroundMusic = createjs.Sound.play("welcome");
            this._backgroundMusic2 = createjs.Sound.play("cyberpunk");
            this._backgroundMusic2.volume = 0.3;
            this._backgroundMusic2.loop = -1;
            this._backgroundMusic.volume = 0.5;
            this.Main();
        };
        Start.prototype.Update = function () {
            this._scenary.Update();
        };
        Start.prototype.Reset = function () {
        };
        Start.prototype.Destroy = function () {
            this._backgroundMusic.stop();
            this._backgroundMusic2.stop();
            this.removeAllChildren();
        };
        Start.prototype.Main = function () {
            this.addChild(this._scenary);
            this.addChild(this._welcomeLabel);
            this.addChild(this._startButton);
            this.addChild(this._instructionsButton);
            this.addChild(this._exitButton);
            this._startButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
            this._instructionsButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.INS;
            }, this);
        };
        return Start;
    }(objects.Scene));
    scenes.Start = Start;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map