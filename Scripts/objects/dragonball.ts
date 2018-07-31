module objects {
    export class Dragonball extends objects.GameObject {
        

        /**
         * @author Adithya Dasarapu - 300931870
         * @description Dragonball Object
         *
         * @private
         * @type {number}
         * @memberof Dragonball
         */
        private _horizontalSpeed:number;

        //Constructor
        constructor() {
            super("dragonball");

            this.Start();
        }

        //private methods

        

        //public methods
        public Start() :void{
            this._horizontalSpeed = 4 + (Math.random()*2);
            this.Reset();
        }

        public Update() : void{
            
            this.x -= this._horizontalSpeed;
            this.CheckBounds();
        }

        public Reset():void{
            this._horizontalSpeed = 4 + (Math.random()*2);
            this.y = Math.floor((Math.random() * (480 - this.height)) + this.halfHeight); 
            this.x = 640 + this.halfWidth;
        }

        public CheckBounds():void{
            //top boundary
            if(this.x < -this.halfWidth){
                this.Reset(); 
            }
            
        }
    }
}