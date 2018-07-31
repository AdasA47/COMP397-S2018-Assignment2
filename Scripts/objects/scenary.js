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
var objects;
(function (objects) {
    var Scenary = /** @class */ (function (_super) {
        __extends(Scenary, _super);
        //Constructor
        function Scenary() {
            var _this = _super.call(this, managers.Game.AssetManager.getResult("scenary")) || this;
            _this.Start();
            return _this;
        }
        //private methods
        Scenary.prototype._checkBounds = function () {
            if (this.x <= -1280) {
                this.Reset();
            }
        };
        //public methods
        Scenary.prototype.Start = function () {
            this._horizontalSpeed = 2;
            this.Reset();
        };
        Scenary.prototype.Update = function () {
            this.x -= this._horizontalSpeed;
            this._checkBounds();
        };
        Scenary.prototype.Reset = function () {
            this.x = 0;
        };
        return Scenary;
    }(createjs.Bitmap));
    objects.Scenary = Scenary;
})(objects || (objects = {}));
//# sourceMappingURL=scenary.js.map