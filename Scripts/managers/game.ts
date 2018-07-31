module managers {
    export class Game {

        /**
         * @author Adithya Dasarapu - 300931870
         * @description Global Variables declaration
         * @static 
         * @memberof Game
         */
        public static AssetManager:createjs.LoadQueue;
        public static CurrentScene:objects.Scene;
        public static CurrentState:config.Scene;
        public static Stage:createjs.Stage;
        public static ScoreBoard:managers.ScoreBoard;
        public static KeyboardManager:managers.Keyboard;
    }
}