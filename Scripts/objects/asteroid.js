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
    var Asteroid = /** @class */ (function (_super) {
        __extends(Asteroid, _super);
        //private variables
        //Constructor
        function Asteroid() {
            var _this = _super.call(this, "asteroid") || this;
            _this.Start();
            return _this;
        }
        //private methods
        //public methods
        Asteroid.prototype.Start = function () {
            this.Reset();
        };
        Asteroid.prototype.Update = function () {
        };
        Asteroid.prototype.Reset = function () {
        };
        Asteroid.prototype.CheckBounds = function () {
        };
        return Asteroid;
    }(objects.GameObject));
    objects.Asteroid = Asteroid;
})(objects || (objects = {}));
//# sourceMappingURL=asteroid.js.map