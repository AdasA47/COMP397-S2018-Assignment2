module objects {
    export abstract class GameObject extends createjs.Bitmap {

        
        /**
         * @author Adithya Dasarapu - 300931870
         * @description Generalization of Game Objects for optimization
         *
         * @type {number}
         * @memberof GameObject
         */
        public width:number;
        public height:number;
        public halfWidth:number;
        public halfHeight:number;
        public isColliding:boolean;

        // constructors
        constructor(imagePath) {
            super(managers.Game.AssetManager.getResult(imagePath));
            this.name = imagePath;
            this._initialize();
        }

        // private methods


        private _initialize():void {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfWidth = this.width * 0.5;
            this.halfHeight = this.height * 0.5;
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.isColliding = false;
        }

        // public methods
        public Start():void {

        }

        public Update():void {

        }

        public Reset():void {

        }
    }
}