module objects {
    export class Asteroid extends objects.GameObject {

        //private variables
        

        //Constructor
        constructor() {
            super("asteroid");

            this.Start();
        }

        //private methods

        

        //public methods
        public Start() :void{
            this.Reset();
        }

        public Update() : void{
           
        }

        public Reset():void{
            
        }

        public CheckBounds():void{
            
        }
    }
}