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
    var Goku = /** @class */ (function (_super) {
        __extends(Goku, _super);
        //private variables
        //Constructor
        function Goku() {
            var _this = _super.call(this, "goku") || this;
            _this.Start();
            return _this;
        }
        //private methods
        //public methods
        Goku.prototype.Start = function () {
            this.x = 50;
            this.y = 50;
        };
        Goku.prototype.Update = function () {
            //mouse controls
            //this.y = managers.Game.Stage.mouseY;
            //keyboard controls
            this.y += 3;
            // managers.Game.KeyboardManager.enabled =true;
            if (managers.Game.KeyboardManager.jump) {
                console.log("Space pressed...");
                this.y -= 8;
            }
            this.CheckBounds();
        };
        Goku.prototype.Reset = function () {
        };
        Goku.prototype.CheckBounds = function () {
            //top boundary
            if (this.y <= this.halfHeight) {
                this.y = this.halfHeight;
            }
            //bottom boundary
            if (this.y >= 480 - this.halfHeight) {
                //this.y = 480 - this.halfHeight;
                managers.Game.CurrentState = config.Scene.END;
            }
        };
        return Goku;
    }(objects.GameObject));
    objects.Goku = Goku;
})(objects || (objects = {}));
//# sourceMappingURL=goku.js.map