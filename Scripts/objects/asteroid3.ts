module objects {
    export class Asteroid3 extends objects.GameObject {

        //private variables
        private _horizontalSpeed:number;
        private _verticalSpeed:number;
        

        //Constructor
        constructor() {
            super("asteroid3");

            this.Start();
        }

        //private methods

        

        //public methods
        public Start() :void{
            this._horizontalSpeed = 5 + (Math.random() * 2);
            this.Reset();
        }

        public Update() : void{
            this.x -= this._horizontalSpeed;
            this.y -= this._verticalSpeed;
            this.CheckBounds();
        }

        public Reset():void{
            this._horizontalSpeed = (Math.random() * 2) + 5 ;
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