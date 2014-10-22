var createSecondPage = function() {
  var page = tabris.create("Page", {
    style: ["FULLSCREEN"]
  });

  var composite = tabris.create("Composite", {
    layoutData: { left: 0, top: 0, right: 0, height: 50 },
    background: "#234"
  }).appendTo(page);

  tabris.create("Label", {
    layoutData: { left: MARGIN, top: MARGIN_SMALL , right: MARGIN },
    text: "A full screen page",
    font: "24px",
    foreground: "#dee"
  }).appendTo(composite);

  return page;
};
