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
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // constructors
        function Play() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Play.prototype.Start = function () {
            this._scenary = new objects.Scenary();
            this._goku = new objects.Goku();
            this._dragonBall = new objects.Dragonball();
            this._asteroid = new objects.Asteroid();
            this._asteroid2 = new objects.Asteroid2();
            this._asteroid3 = new objects.Asteroid3();
            this.Main();
        };
        Play.prototype.Update = function () {
            this._scenary.Update();
            this._goku.Update();
            this._dragonBall.Update();
            this._asteroid.Update();
            this._asteroid2.Update();
            this._asteroid3.Update();
        };
        Play.prototype.Reset = function () {
        };
        Play.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Play.prototype.Main = function () {
            //add scenary to the scene
            this.addChild(this._scenary);
            this.addChild(this._dragonBall);
            this.addChild(this._goku);
            this.addChild(this._asteroid);
            this.addChild(this._asteroid2);
            this.addChild(this._asteroid3);
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map