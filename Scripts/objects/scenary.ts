module objects{
    export class Scenary extends createjs.Bitmap{
        

        /**
         * @author Adithya Dasarapu - 300931870
         * @description Background Scenary Object
         *
         * @private
         * @type {number}
         * @memberof Scenary
         */
        private _horizontalSpeed :number;

        //Constructor
        constructor() {
            super(managers.Game.AssetManager.getResult("scenary"));

            this.Start();
        }

        //private methods

        private _checkBounds():void{
            if(this.x <= -1280){
                this.Reset();
            }
        }

        //public methods
        public Start() :void{
            this._horizontalSpeed = 2;
            this.Reset();
        }

        public Update() : void{
            this.x -= this._horizontalSpeed;
            this._checkBounds();
        }

        public Reset():void{
            this.x = 0;
        }
    }
}