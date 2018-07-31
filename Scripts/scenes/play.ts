module scenes {
    export class Play extends objects.Scene {
        // member variables
        private _scenary : objects.Scenary;
        private _goku : objects.Goku;
        private _dragonBall : objects.Dragonball;
        
        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {
            this._scenary = new objects.Scenary();
            this._goku = new objects.Goku();
            this._dragonBall = new objects.Dragonball();
            this.Main();
        }

        public Update():void {
            this._scenary.Update();
            this._goku.Update();
            this._dragonBall.Update();
        }

        public Reset():void {

        }

        public Destroy():void {
            this.removeAllChildren();
        }

        public Main():void {
            //add scenary to the scene
            this.addChild(this._scenary);

            this.addChild(this._dragonBall);
            
            this.addChild(this._goku);
            
        
        }
    }
}