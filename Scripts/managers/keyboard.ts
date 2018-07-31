module managers{
    export class Keyboard{

        
        /**
         * @author Adithya Dasarapu - 300931870
         * @description Keyboard Manager binding
         * @type {boolean}
         * @memberof Keyboard
         */
        public moveUp:boolean;
        public moveDown:boolean;
        public jump:boolean;
        public enabled:boolean;
        public paused:boolean;

        //construtor
        constructor(){
            this.enabled = true;
            document.addEventListener('keydown', this.onKeyDown.bind(this),false);
            document.addEventListener('keyup', this.onKeyUp.bind(this),false);
        }
        //private methods

        //public methods
        public onKeyDown(event:KeyboardEvent):void{
            switch(event.keyCode){
                case config.Keys.SPACE:
                this.jump = true;
                break;
                case config.Keys.UP_ARROW:
                this.moveUp = true;
                break;
                case config.Keys.DOWN_ARROW:
                this.moveDown = true;
                break;
            }
        }
        public onKeyUp(event:KeyboardEvent):void{
            switch(event.keyCode){
                case config.Keys.SPACE:
                this.jump = false;
                break;
                case config.Keys.UP_ARROW:
                this.moveUp = false;
                break;
                case config.Keys.DOWN_ARROW:
                this.moveDown = false;
                break;
            }
        }
    }
}