module objects {
    export class Goku extends objects.GameObject {

        //private variables

        //Constructor
        constructor() {
            super("goku");

            this.Start();
        }

        //private methods

        

        //public methods
        public Start() :void{
            this.x = 50;
        }

        public Update() : void{
            this.y = managers.Game.Stage.mouseY;
            this.CheckBounds();
        }

        public Reset():void{
            
        }

        public CheckBounds():void{
            //top boundary
            if(this.y <= this.halfHeight){
                this.y = this.halfHeight;
            }
            //bottom boundary
            if(this.y >= 480 - this.halfHeight){
                this.y = 480 - this.halfHeight;
            }
        }
    }
}