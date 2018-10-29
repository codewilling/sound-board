
var keyData = {
    Q: {
        color: "purple",
        sound: new Howl({
            src: ['sounds/bubbles.mp3']
        })
    },
    W: {
        color: "purple",
        sound: new Howl({
            src: ['sounds/clay.mp3']
        })
    },
    E: {
        color: "purple",
        sound: new Howl({
            src: ['sounds/confetti.mp3']
        })
    },
    R: {
        color: "purple",
        sound: new Howl({
            src: ['sounds/corona.mp3']
        })
    },
    T: {
        color: "purple",
        sound: new Howl({
            src: ['sounds/dotted-spiral.mp3']
        })
    },
    Y: {
        color: "purple",
        sound: new Howl({
            src: ['sounds/flash-1.mp3']
        })
    },
    U: {
        color: "purple",
        sound: new Howl({
            src: ['sounds/flash-2.mp3']
        })
    },
    I: {
        color: "purple",
        sound: new Howl({
            src: ['sounds/flash-3.mp3']
        })
    },
    O: {
        color: "purple",
        sound: new Howl({
            src: ['sounds/glimmer.mp3']
        })
    },
    P: {
        color: "purple",
        sound: new Howl({
            src: ['sounds/moon.mp3']
        })
    },
    A: {
        color: "purple",
        sound: new Howl({
            src: ['sounds/pinwheel.mp3']
        })
    },
    S: {
        color: "green",
        sound: new Howl({
            src: ['sounds/piston-1.mp3']
        })
    },
    D: {
        color: "blue",
        sound: new Howl({
            src: ['sounds/piston-2.mp3']
        })
    },
    F: {
        color: "purple",
        sound: new Howl({
            src: ['sounds/piston-3.mp3']
        })
    },
    G: {
        color: "purple",
        sound: new Howl({
            src: ['sounds/prism-1.mp3']
        })
    },
    H: {
        color: "purple",
        sound: new Howl({
            src: ['sounds/prism-2.mp3']
        })
    },
    J: {
        color: "purple",
        sound: new Howl({
            src: ['sounds/prism-3.mp3']
        })
    },
    K: {
        color: "purple",
        sound: new Howl({
            src: ['sounds/splits.mp3']
        })
    },
    L: {
        color: "purple",
        sound: new Howl({
            src: ['sounds/squiggle.mp3']
        })
    },
    Z: {
        color: "purple",
        sound: new Howl({
            src: ['sounds/strike.mp3']
        })
    },
    X: {
        color: "purple",
        sound: new Howl({
            src: ['sounds/suspension.mp3']
        })
    },
    C: {
        color: "purple",
        sound: new Howl({
            src: ['sounds/timer.mp3']
        })
    },
    V: {
        color: "purple",
        sound: new Howl({
            src: ['sounds/ufo.mp3']
        })
    },
    B: {
        color: "purple",
        sound: new Howl({
            src: ['sounds/veil.mp3']
        })
    },
    N: {
        color: "purple",
        sound: new Howl({
            src: ['sounds/wipe.mp3']
        })
    },
    M: {
        color: "purple",
        sound: new Howl({
            src: ['sounds/zig-zag.mp3']
        })
    }
}

var circles = [];


for (var i = 3; i < 13; i++) {
    maxX = view.size.width;
    maxY = view.size.height;
    var maxPoint = new Point(maxX, maxY * 2);
    var rectCenter = { x: maxX / 15 * [i], y: maxY / 3 };
    var rectSize = view.size.width * 0.05;
    var rect = new Rectangle();
    rect.size = new Size(rectSize, rectSize);
    rect.center = rectCenter;
    var path = new Path.Rectangle(rect)
    path.style = {
        strokeColor: 'gold',
        strokeWidth: 2,
        strokeCap: 'round'
    };
   
    var text = new PointText({
        point: rectCenter,
        content: Object.keys(keyData)[i - 3],
        fillColor: 'white',
        fontFamily: 'Courier New',
        fontWeight: 'bold',
        fontSize: (maxX * maxY) * 0.00004
    });
};

for (var i = 3; i < 12; i++) {
    maxX = view.size.width;
    maxY = view.size.height
    var maxPoint = new Point(maxX, maxY * 2);
    var rectCenter = { x: maxX / 15 * [i] * 1.08, y: maxY / 3 * 1.36 }
    var rectSize = view.size.width * 0.05
    var rect = new Rectangle();
    rect.size = new Size(rectSize, rectSize);
    rect.center = rectCenter
    
    var path = new Path.Rectangle(rect)
    path.style = {
        strokeColor: 'gold',
        strokeWidth: 2,
        strokeCap: 'round'
    };
   
    var text = new PointText({
        point: rectCenter,
        content: Object.keys(keyData)[i + 7],
        fillColor: 'white',
        fontFamily: 'Courier New',
        fontWeight: 'bold',
        fontSize: (maxX * maxY) * 0.00004
    })
}


for (var i = 3; i < 10; i++) {
    maxX = view.size.width;
    maxY = view.size.height
    var maxPoint = new Point(maxX, maxY * 2);
    var rectCenter = { x: maxX / 15 * [i] * 1.26, y: maxY / 3 * 1.71 }
    var rectSize = view.size.width * 0.05

    var rect = new Rectangle();
    rect.size = new Size(rectSize, rectSize);
    rect.center = rectCenter

    var path = new Path.Rectangle(rect)
    path.style = {
        strokeColor: 'gold',
        strokeWidth: 2,
        strokeCap: 'round'
    };
    
    var text = new PointText({
        point: rectCenter,
        content: Object.keys(keyData)[i + 16],
        fillColor: 'white',
        fontFamily: 'Courier New',
        fontWeight: 'bold',
        fontSize: (maxX * maxY) * 0.00004
    })
}

function onKeyDown(event) {
    var keyPressed = event.key.toUpperCase();
    if (keyData[keyPressed]) {

        var maxPoint = new Point(view.size.width, view.size.height);
        var randomPoint = Point.random();
        var point = maxPoint * randomPoint;
        var newCircle = new Path.Circle(point, 300);
        newCircle.fillColor = keyData[keyPressed].color;
        keyData[keyPressed].sound.play();
        circles.push(newCircle);
    }
    console.log(circles)
    console.log(project.activeLayer.children)
};

function onFrame(event) {
    for (var i = 0; i < circles.length; i++) {
        // var keyPressed = event.key.toUpperCase();
        circles[i].fillColor.hue += 1;
        circles[i].scale(.92);
        if (circles[i].area < 1) {
            circles[i].remove();
            circles.splice(i, 1);
        }
    }
};

window.addEventListener('resize', function () {
    "use strict";
    window.location.reload();
});