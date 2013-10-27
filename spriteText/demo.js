window.onload = (function() {
    var WIDTH = 800,
        HEIGHT = 640;
    // Initialize Crafty
    Crafty.init(WIDTH, HEIGHT);
    
    Crafty.load(["../img/BlueBubbleFont.png", "../img/OSDM_Fnt32x32_SyntaxTerror-Copy2.png",
                 "../img/TSK06.png"], // preload images
        function() {
            // Write some Text (Canvas) using the BlueBubble Font (16x16)
            var txt1 = "BlueBubble!";
            var ts1 = 16;
            var text1 = Crafty.e("2D, Canvas, SpriteText")
                        .attr({x: 0, y: 0, w: txt1.length*ts1, h: ts1})
                        .registerFont("BlueBubble", ts1, "../img/BlueBubbleFont.png")
                        .text(txt1);
            
            // Add the Mouse Component and change text on Click
            text1.addComponent("Mouse");
            text1.bind("Click", function (e) {
                text1.text("clicked!");
            });
            
            // Write some Text (Canvas) using the SyntaxTerror Font (32x32)
            var txt2 = "SyntaxTerror (Canvas)!";
            var ts2 = 32;
            var text2 = Crafty.e("2D, Canvas, SpriteText, Color")
                        .attr({x: 0, y: 100, w: txt2.length*ts2 + 100, h: ts2})
                        .registerFont("SyntaxTerror", ts2, "../img/OSDM_Fnt32x32_SyntaxTerror-Copy2.png")
                        .text(txt2)
                        .color("yellow");
                        
            // Add the Mouse Component and change text on Click
            text2.addComponent("Mouse");
            text2.bind("Click", function (e) {
                text2.align(text2.align() === "right" ? "left" : "right");
            });
                
            // Write some Text (DOM) using the SyntaxTerror Font (32x32)
            var txt3 = "SyntaxTerror (DOM)!";
            var ts3 = 32;
            var text3 = Crafty.e("2D, DOM, SpriteText")
                        .attr({x: 0, y: 200, w: txt3.length*ts3, h: ts3})
                        .font("SyntaxTerror") // No need to register the Font again, just use it, it's there.
                        .text(txt3);
                        
            // Add the Mouse Component and change text and font on Click
            text3.addComponent("Mouse");
            text3.bind("Click", function (e) {
                text3.text("This is a drum!");
            });
            
            // Write some Text (DOM) using the SyntaxTerror Font (32x32)
            var txt4 = "Hello World!";
            var ts4 = 32;
            var text4 = Crafty.e("2D, DOM, SpriteText")
                        .attr({x: 0, y: 300, w: txt4.length*ts4, h: ts4})
                        .registerFont("TSK06", ts4, "../img/TSK06.png", "ABCDEFGHIJKLMNOPQRSTUVWXYZ!.\"-")
                        .text(txt4);
                        
            // Add the Mouse Component and change text and font on Click
            text4.addComponent("Mouse");
            text4.bind("Click", function (e) {
                text4.text("WTF No SPACE char mapped!");
            });// Write some Text (DOM) using the SyntaxTerror Font (32x32)
            
            var txt5 = "Click me to background!";
            var ts5 = 32;
            var text5 = Crafty.e("2D, Canvas, SpriteText")
                        .attr({x: 0, y: 400, z: 1, w: txt5.length*ts5, h: ts5})
                        .font("TSK06")
                        .text(txt5);
            // Add the Mouse Component and change text and font on Click
            text5.addComponent("Mouse");
            text5.bind("Click", function (e) {
                text5.attr({z: 0});
                text6.attr({z: 1});
            });
            // Write some Text (DOM) using the SyntaxTerror Font (32x32)
            var txt6 = "Click me to background!";
            var ts6 = 32;
            var text6 = Crafty.e("2D, Canvas, SpriteText")
                    .attr({x: 20, y: 410, w: txt6.length*ts6, h: ts6})
                    .font("SyntaxTerror")
                    .text(txt6);
            text6.addComponent("Mouse");
            text6.bind("Click", function (e) {
                text5.attr({z: 1});
                text6.attr({z: 0});
            }); 
        }
    );
});