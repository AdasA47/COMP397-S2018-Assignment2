module scenes {
    export class Start extends objects.Scene {

        /**
         * @author Adithya Dasarapu - 300931870
         * @description Start scene with sounds
         *
         * 
         * @memberof Start
         */
        // member variables
        private _welcomeLabel: objects.Label;
        private _startButton: objects.Button;
        private _instructionsButton: objects.Button;
        private _exitButton: objects.Button;
        private _scenary: objects.Scenary;

        private _backgroundMusic : createjs.AbstractSoundInstance;
        private _backgroundMusic2 : createjs.AbstractSoundInstance;


        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {

            this._scenary = new objects.Scenary();

            this._welcomeLabel = new objects.Label("DBZ Space Invader!", "60px", "Consolas", "#FF0000", 320, 100, true);
            this._startButton = new objects.Button("StartButton", 150, 300, true);
            this._instructionsButton = new objects.Button("InstructionsButton", 450, 300, true);
            this._exitButton = new objects.Button("ExitButton", 320, 400, true);

            this._backgroundMusic = createjs.Sound.play("welcome");
            this._backgroundMusic2 =createjs.Sound.play("cyberpunk");
            this._backgroundMusic2.volume = 0.3;
            this._backgroundMusic2.loop = -1;
            this._backgroundMusic.volume = 0.5;

            this.Main();
        }

        public Update():void {
            this._scenary.Update();
        }

        public Reset():void {

        }

        public Destroy():void {
            this._backgroundMusic.stop();
            this._backgroundMusic2.stop();
            this.removeAllChildren();
        }

        public Main():void {

            this.addChild(this._scenary);
            this.addChild(this._welcomeLabel);
            this.addChild(this._startButton);
            this.addChild(this._instructionsButton);
            this.addChild(this._exitButton);

            this._startButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.PLAY;
            }, this);

            this._instructionsButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.INS;
            }, this);
        }
    }
}