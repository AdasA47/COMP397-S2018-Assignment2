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
    var Dragonball = /** @class */ (function (_super) {
        __extends(Dragonball, _super);
        //Constructor
        function Dragonball() {
            var _this = _super.call(this, "dragonball") || this;
            _this.Start();
            return _this;
        }
        //private methods
        //public methods
        Dragonball.prototype.Start = function () {
            this._horizontalSpeed = 4 + (Math.random() * 2);
            this.Reset();
        };
        Dragonball.prototype.Update = function () {
            this.x -= this._horizontalSpeed;
            this.CheckBounds();
        };
        Dragonball.prototype.Reset = function () {
            this._horizontalSpeed = 4 + (Math.random() * 2);
            this.y = Math.floor((Math.random() * (480 - this.height)) + this.halfHeight);
            this.x = 640 + this.halfWidth;
        };
        Dragonball.prototype.CheckBounds = function () {
            //top boundary
            if (this.x < -this.halfWidth) {
                this.Reset();
            }
        };
        return Dragonball;
    }(objects.GameObject));
    objects.Dragonball = Dragonball;
})(objects || (objects = {}));
//# sourceMappingURL=dragonball.js.map