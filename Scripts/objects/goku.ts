module objects {
    export class Goku extends objects.GameObject {
        

        //private variables

        /** @author Adithya Dasarapu - 300931870
         * @description Creates an instance of Goku, the character.
         * @memberof Goku
         */
        constructor() {
            super("goku");

            this.Start();
        }

        //private methods

        

        //public methods
        public Start() :void{
            this.x = 50;
            this.y = 50;
        }

        public Update() : void{
            //mouse controls
            //this.y = managers.Game.Stage.mouseY;
            //keyboard controls
            this.y += 3;
            // managers.Game.KeyboardManager.enabled =true;
            if(managers.Game.KeyboardManager.jump){
                console.log("Space pressed...")
                this.y -= 8;
            }
            
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
                //this.y = 480 - this.halfHeight;
                managers.Game.CurrentState = config.Scene.END;
            }
        }
    }
}