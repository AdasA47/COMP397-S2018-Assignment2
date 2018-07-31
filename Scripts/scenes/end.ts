module scenes {
    export class End extends objects.Scene {

        

        
        /**
         * @author Adithya Dasarapu - 300931870
         * @description End scene with sounds
         *
         * 
         * @memberof End
         */

         //member variables
        private _endLabel: objects.Label;
        private _playAgainButton: objects.Button;
        private _exitToMenuButton: objects.Button;
        private _highScoreLabel : objects.Label;
        private _scenary: objects.Scenary;

        private _backgroundMusic : createjs.AbstractSoundInstance;

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {

            this._scenary = new objects.Scenary();

            this._endLabel = new objects.Label("Game Over!", "50px", "Consolas", "#FFFFFF", 320, 100, true);
            // this._highScoreLabel = managers.Game.ScoreBoard.HighScoreLabel;
            // this._highScoreLabel.x = 320;
            // this._highScoreLabel.y = 200;
            // this._highScoreLabel.isCentered =true;
            // this._highScoreLabel.font = "40px Consolas";
            this._playAgainButton = new objects.Button("PlayAgainButton", 150, 400, true);
            this._exitToMenuButton = new objects.Button("ExitToMenuButton", 450, 400, true);
            
            this._backgroundMusic = createjs.Sound.play("hurtYourFeelings");
            this._backgroundMusic.volume = 0.5;
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

            this.addChild(this._scenary);
            this.addChild(this._endLabel);
            //this.addChild(this._highScoreLabel);
            this.addChild(managers.Game.ScoreBoard.ScoreLabel);
            this.addChild(this._playAgainButton);
            this.addChild(this._exitToMenuButton);

            this._playAgainButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);
            this._exitToMenuButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.START;
            }, this);
        }
    }
}