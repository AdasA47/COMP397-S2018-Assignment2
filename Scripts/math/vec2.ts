module math {
    export class Vec2 extends createjs.Point {
        
        // member variables

        /**@author Adithya Dasarapu - 300931870
         * @description Creates an instance of Vec2.
         * @param {number} [x=0]
         * @param {number} [y=0]
         * @memberof Vec2
         */
        constructor(x:number = 0, y:number = 0) {
            super(x, y);
        }

        // private methods

        // public methods
        public static Distance(P1:Vec2, P2:Vec2):number {
            return Math.floor(Math.sqrt(Math.pow(P2.x - P1.x, 2) + Math.pow(P2.y - P1.y, 2)));
        }
    }
}