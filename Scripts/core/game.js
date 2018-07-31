//IIFE -- Immediately Invoked Function Expression
// also called self executing anonymous function
(function () {
    // Game Variables
    var canvas;
    var stage;
    var AssetManager;
    var CurrentScene;
    var CurrentState;
    var keyboardManager;
    var Manifest = [
        { id: "StartButton", src: "/Assets/images/button_play.png" },
        { id: "ExitButton", src: "/Assets/images/button_exit.png" },
        { id: "InstructionsButton", src: "/Assets/images/button_instructions.png" },
        { id: "PlayAgainButton", src: "/Assets/images/button_play-again.png" },
        { id: "ExitToMenuButton", src: "/Assets/images/button_exit-to-menu.png" },
        { id: "BackButton", src: "/Assets/images/button_back.png" },
        { id: "scenary", src: "/Assets/images/bg0.png" },
        { id: "goku", src: "/Assets/images/gokuTransparant.png" },
        { id: "dragonball", src: "/Assets/images/6stardragonball.png" },
        { id: "asteroid", src: "/Assets/images/asteroid1.png" },
        { id: "asteroid2", src: "/Assets/images/asteroid2.png" },
        { id: "asteroid3", src: "/Assets/images/asteroid3.png" },
        { id: "reflect", src: "/Assets/audio/reflect.wav" },
        { id: "candypop", src: "/Assets/audio/candypop.wav" },
        { id: "backgroundMusic", src: "/Assets/audio/Attack-of-the-Flaming-Pie-Tins.mp3" },
        { id: "weakpunch", src: "/Assets/audio/weakpunch.wav" },
        { id: "strongpunch", src: "/Assets/audio/strongpunch.wav" },
        { id: "hurtYourFeelings", src: "/Assets/audio/Hurt-your-feelings.mp3" },
        { id: "steamtech", src: "/Assets/audio/Steamtech-Mayhem.mp3" },
        { id: "welcome", src: "/Assets/audio/welcome.mp3" },
        { id: "cyberpunk", src: "/Assets/audio/Cyberpunk-City.mp3" }
    ];
    function Init() {
        console.log("%c Assets Loading...", "font-weight:bold; font-size:20px; color: green;");
        AssetManager = new createjs.LoadQueue();
        managers.Game.AssetManager = AssetManager; // set as single instance of the LoadQueue object
        AssetManager.installPlugin(createjs.Sound); // enables sound file preloading
        AssetManager.loadManifest(Manifest);
        AssetManager.on("complete", Start, this);
    }
    function Start() {
        console.log("%c Game Initializing...", "font-weight:bold; font-size:20px; color: red;");
        canvas = document.getElementsByTagName("canvas")[0];
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20); // enables mouse over events
        createjs.Ticker.framerate = 60; // sets framerate to 60fps
        createjs.Ticker.on("tick", Update);
        managers.Game.Stage = stage;
        CurrentState = config.Scene.START;
        managers.Game.CurrentState = CurrentState;
        keyboardManager = new managers.Keyboard();
        managers.Game.KeyboardManager = keyboardManager;
        // This is where all the magic happens
        Main();
    }
    function Update() {
        if (CurrentState != managers.Game.CurrentState) {
            CurrentState = managers.Game.CurrentState;
            Main();
        }
        CurrentScene.Update();
        stage.update();
    }
    function Main() {
        console.log("%c Main Game Started...", "font-style:italic; font-size:16px; color:blue;");
        if (CurrentScene) {
            CurrentScene.Destroy();
            stage.removeChild(CurrentScene);
        }
        switch (CurrentState) {
            case config.Scene.START:
                CurrentScene = new scenes.Start();
                break;
            case config.Scene.INS:
                CurrentScene = new scenes.Ins();
                break;
            case config.Scene.PLAY:
                CurrentScene = new scenes.Play();
                break;
            case config.Scene.END:
                CurrentScene = new scenes.End();
                break;
        }
        managers.Game.CurrentScene = CurrentScene;
        stage.addChild(CurrentScene);
    }
    window.addEventListener("load", Init);
})();
//# sourceMappingURL=game.js.map