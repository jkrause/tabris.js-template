var createStartPage = function() {

  var page = tabris.create("Page", {
    topLevel: true,
    title: "My App"
  });

  tabris.create("Label", {
    layoutData: { centerX: 0, centerY: 0 },
    image: { src: "img/target_200.png", width: 200, height: 200 }
  }).on("touchstart", function() {
    createSecondPage().open();
    console.log("Created second page");
  }).appendTo(page);

  return page;
};
