var createStartPage = function() {

  var page = tabris.create("Page", {
    topLevel: true,
    title: "My App"
  });
  
  tabris.create( "Label", {
    layoutData: { centerX: 0, centerY: 0, width: 200, height: 200 },
    image: {src: "img/target_200.png"}
  }).appendTo( page )
    .on("touchend", function() {
       createSecondPage().open();
       console.log("This is how you log messages");
  });
  
  return page;
};
