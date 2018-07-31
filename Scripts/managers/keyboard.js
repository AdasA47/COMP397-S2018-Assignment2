var managers;
(function (managers) {
    var Keyboard = /** @class */ (function () {
        //construtor
        function Keyboard() {
            this.enabled = true;
            document.addEventListener('keydown', this.onKeyDown.bind(this), false);
            document.addEventListener('keyup', this.onKeyUp.bind(this), false);
        }
        //private methods
        //public methods
        Keyboard.prototype.onKeyDown = function (event) {
            switch (event.keyCode) {
                case config.Keys.SPACE:
                    this.jump = true;
                    break;
                case config.Keys.UP_ARROW:
                    this.moveUp = true;
                    break;
                case config.Keys.DOWN_ARROW:
                    this.moveDown = true;
                    break;
            }
        };
        Keyboard.prototype.onKeyUp = function (event) {
            switch (event.keyCode) {
                case config.Keys.SPACE:
                    this.jump = false;
                    break;
                case config.Keys.UP_ARROW:
                    this.moveUp = false;
                    break;
                case config.Keys.DOWN_ARROW:
                    this.moveDown = false;
                    break;
            }
        };
        return Keyboard;
    }());
    managers.Keyboard = Keyboard;
})(managers || (managers = {}));
//# sourceMappingURL=keyboard.js.map