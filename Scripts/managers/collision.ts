module managers {
    export class Collision {


        public static Check(object1: objects.GameObject, object2: objects.GameObject) {
            let P1: math.Vec2 = new math.Vec2(object1.x, object1.y);
            let P2: math.Vec2 = new math.Vec2(object2.x, object2.y);

            if (math.Vec2.Distance(P1, P2) < (object1.halfWidth + object2.halfWidth)) {
                console.log("Collision!");
                if (!object2.isColliding) {
                    object2.isColliding = true;
                    switch (object2.name) {
                        case "dragonball":
                            createjs.Sound.play("candypop");
                            break;

                        case "asteroid":
                            createjs.Sound.play("strongpunch");
                            break;

                        case "asteroid2":
                            createjs.Sound.play("weakpunch");
                            break;

                        case "asteroid3":
                            createjs.Sound.play("weakpunch");
                            break;
                    }
                }
            }
            else{
                object2.isColliding = false;
            }
        }
    }
}