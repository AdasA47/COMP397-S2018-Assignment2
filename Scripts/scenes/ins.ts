module scenes {
    export class Ins extends objects.Scene {

        /**
         * @author Adithya Dasarapu - 300931870
         * @description Instructions scene with sounds
         *
         * 
         * @memberof Ins
         */
        // member variables
        
        private _instructionsLabel1: objects.Label;
        private _instructionsLabel2: objects.Label;
        private _instructionsLabel3: objects.Label;
        private _instructionsLabel4: objects.Label;
        private _instructionsLabel5: objects.Label;
        private _instructionsLabel6: objects.Label;
        private _backButton: objects.Button;
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

            this._instructionsLabel1 = new objects.Label("Enjoy a space ride with Goku, the best Super hero  in whole Universe.", "15px", "Consolas", "#FFFF00", 320, 50, true);
            this._instructionsLabel2 = new objects.Label("Collect as many Dragon Balls as you can to increase your score. You have only 'SpaceBar' for controls.", "15px", "Consolas", "#FFFF00", 320, 100, true);
            this._instructionsLabel2 = new objects.Label("You have only 'SpaceBar' to jump in space for controls.", "15px", "Consolas", "#FFFF00", 320, 150, true);
            this._instructionsLabel4 = new objects.Label("Avoid crashing to asteroids. Hitting biggest asteroid will result in", "15px", "Consolas", "#FFFF00", 320, 200, true);
            this._instructionsLabel5 = new objects.Label("losing 2 lives where as hitting smaller asteroids will result in losing 1 life", "15px", "Consolas", "#FFFF00", 320, 250, true);
            this._instructionsLabel6 = new objects.Label("ENJOY YOUR GAME AND GET HIGHSCORE!!", "25px", "Consolas", "#FFFFFF", 320, 300, true);
            this._backButton = new objects.Button("BackButton", 320, 400, true);
            
            this._backgroundMusic = createjs.Sound.play("steamtech");
            this._backgroundMusic.volume = 0.5;
            this._backgroundMusic.loop = -1;
            this.Main();
        }

        public Update():void {
            this._scenary.Update();
        }

        public Reset():void {

        }

        public Destroy():void {
            this._backgroundMusic.stop();
            this.removeAllChildren();
        }

        public Main():void {
            this.addChild(this._scenary);
            this.addChild(this._instructionsLabel1);
            this.addChild(this._instructionsLabel2);
            this.addChild(this._instructionsLabel3);
            this.addChild(this._instructionsLabel4);
            this.addChild(this._instructionsLabel5);
            this.addChild(this._instructionsLabel6);
            this.addChild(this._backButton);

            this._backButton.on("click", function(){
                managers.Game.CurrentState = config.Scene.START;
            }, this);
        }
    }
}