module scenes {
    export class Play extends objects.Scene {

        /**
         * @author Adithya Dasarapu - 300931870
         * @description PLay scene with sounds
         *
         * 
         * @memberof Play
         */
        
        // member variables
        private _scenary : objects.Scenary;
        private _goku : objects.Goku;
        private _dragonBall : objects.Dragonball;
        private _asteroid : objects.Asteroid;
        private _asteroid2 : objects.Asteroid2;
        private _asteroid3 : objects.Asteroid3;
        private _backgroundMusic : createjs.AbstractSoundInstance;
        private _scoreboard: managers.ScoreBoard;
        
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
            this._asteroid = new objects.Asteroid();
            this._asteroid2 = new objects.Asteroid2();
            this._asteroid3 = new objects.Asteroid3();
            
            this._backgroundMusic = createjs.Sound.play("backgroundMusic");
            this._backgroundMusic.loop = -1;
            this._backgroundMusic.volume = 0.1;

            this._scoreboard = new managers.ScoreBoard();
            managers.Game.ScoreBoard = this._scoreboard;
            this.Main();
        }

        public Update():void {
            this._scenary.Update();
            this._goku.Update();
            this._dragonBall.Update();

            managers.Collision.Check(this._goku,this._dragonBall);

            this._asteroid.Update();
            this._asteroid2.Update();
            this._asteroid3.Update();

            managers.Collision.Check(this._goku,this._asteroid);
            managers.Collision.Check(this._goku,this._asteroid2);
            managers.Collision.Check(this._goku,this._asteroid3);
            
        }

        public Reset():void {

        }

        public Destroy():void {
            this._backgroundMusic.stop();
            this.removeAllChildren();
        }

        public Main():void {
            //add scenary to the scene
            this.addChild(this._scenary);

            this.addChild(this._dragonBall);
            
            this.addChild(this._goku);
            
            this.addChild(this._asteroid);
            this.addChild(this._asteroid2);
            this.addChild(this._asteroid3);

            this.addChild(this._scoreboard.LivesLabel);
            this.addChild(this._scoreboard.ScoreLabel);
        }
    }
}