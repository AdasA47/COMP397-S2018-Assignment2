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
    var End = /** @class */ (function (_super) {
        __extends(End, _super);
        // constructors
        function End() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        End.prototype.Start = function () {
            this._scenary = new objects.Scenary();
            this._endLabel = new objects.Label("Game Over!", "50px", "Consolas", "#FFFFFF", 320, 100, true);
            // this._highScoreLabel = managers.Game.ScoreBoard.HighScoreLabel;
            // this._highScoreLabel.x = 320;
            // this._highScoreLabel.y = 200;
            // this._highScoreLabel.isCentered =true;
            // this._highScoreLabel.font = "40px Consolas";
            this._playAgainButton = new objects.Button("PlayAgainButton", 150, 400, true);
            this._exitToMenuButton = new objects.Button("ExitToMenuButton", 450, 400, true);
            this._backgroundMusic = createjs.Sound.play("hurtYourFeelings");
            this._backgroundMusic.volume = 0.5;
            this.Main();
        };
        End.prototype.Update = function () {
            this._scenary.Update();
        };
        End.prototype.Reset = function () {
        };
        End.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        End.prototype.Main = function () {
            this.addChild(this._scenary);
            this.addChild(this._endLabel);
            //this.addChild(this._highScoreLabel);
            this.addChild(managers.Game.ScoreBoard.ScoreLabel);
            this.addChild(this._playAgainButton);
            this.addChild(this._exitToMenuButton);
            this._playAgainButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
            this._exitToMenuButton.on("click", function () {
                managers.Game.CurrentState = config.Scene.START;
            }, this);
        };
        return End;
    }(objects.Scene));
    scenes.End = End;
})(scenes || (scenes = {}));
//# sourceMappingURL=end.js.map