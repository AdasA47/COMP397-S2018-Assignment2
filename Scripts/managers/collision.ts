module managers {
    export class Collision {


        /**
         * @author Adithya Dasarapu - 300931870
         * @description Checks for collisions in game between Gameobjects
         * @static
         * @param {objects.GameObject} object1
         * @param {objects.GameObject} object2
         * @memberof Collision
         */
        public static Check(object1: objects.GameObject, object2: objects.GameObject) {
            let P1: math.Vec2 = new math.Vec2(object1.x, object1.y);
            let P2: math.Vec2 = new math.Vec2(object2.x, object2.y);

            if (math.Vec2.Distance(P1, P2) < (object1.halfWidth + object2.halfWidth) && math.Vec2.Distance(P1, P2) < (object1.halfHeight + object2.halfHeight)) {

                if (!object2.isColliding) {
                    console.log("Collision with " + object2.name);
                    object2.isColliding = true;
                    switch (object2.name) {
                        case "dragonball":
                            createjs.Sound.play("candypop");
                            managers.Game.ScoreBoard.Score += 5;
                            break;

                        case "asteroid":
                            createjs.Sound.play("strongpunch");
                            managers.Game.ScoreBoard.Lives -= 2;
                            break;

                        case "asteroid2":
                            createjs.Sound.play("weakpunch");
                            managers.Game.ScoreBoard.Lives -= 1;
                            break;

                        case "asteroid3":
                            createjs.Sound.play("weakpunch");
                            managers.Game.ScoreBoard.Lives -= 1;
                            break;
                    }
                }
            }
            else {
                object2.isColliding = false;
            }
        }
    }
}