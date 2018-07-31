module objects {
    export class Asteroid2 extends objects.GameObject {

        

        /**
         * @author Adithya Dasarapu - 300931870
         * @description Asteroid Object 2
         *
         * @private
         * @type {number}
         * @memberof Asteroid2
         */
        private _horizontalSpeed:number;
        private _verticalSpeed:number;
        

        //Constructor
        constructor() {
            super("asteroid2");

            this.Start();
        }

        //private methods

        

        //public methods
        public Start() :void{
            this._horizontalSpeed = 4 + (Math.random() * 2);
            this.Reset();
        }

        public Update() : void{
            this.x -= this._horizontalSpeed;
            this.y -= this._verticalSpeed;
            this.CheckBounds();
        }

        public Reset():void{
            this._horizontalSpeed = (Math.random() * 2) + 4 ;
            this._verticalSpeed = (Math.random() * 4) - 2 ;

            this.y = Math.floor((Math.random() * (480 - this.height)) + this.halfHeight); 
            this.x = 640 + this.halfWidth;
        }

        public CheckBounds():void{
            if(this.x < -this.halfWidth){
                this.Reset(); 
            }
        }
    }
}