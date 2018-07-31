module scenes {
    export class Play extends objects.Scene {
        // member variables
        private _scenary : objects.Scenary;
        
        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {
            this._scenary = new objects.Scenary();
            this.Main();
        }

        public Update():void {
            this._scenary.Update();
        }

        public Reset():void {

        }

        public Destroy():void {
            this.removeAllChildren();
        }

        public Main():void {
            //add scenary to the scene
            this.addChild(this._scenary);
        
        }
    }
}