var index = 0;

var shape = document.getElementById("shape");
var polygon = document.getElementById("polygon");

var polygons = [
  {
    type: "hexagon",
    polygon: "50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%",
    background:
      "150deg, rgba(139, 233, 253, 1) 0%, rgba(139, 233, 253, 1) 40%, rgba(98, 114, 164, 1) 80%, rgba(98, 114, 164, 1) 100%",
    width: "305",
    height: "320",
  },
  {
    type: "triangle",
    //polygon: "50% 0%, 0% 100%, 100% 100%",
    polygon: "50% 0%, 100% 100%, 100% 100%, 50% 100%, 0% 100%, 0% 100%",
    background:
      "115deg, rgba(214,15,121,1) 15%, rgba(214,15,121,1) 35%, rgba(255, 121, 198,1) 66%, rgba(255, 121, 198,1) 100%",
    /* "135deg, rgba(255, 121, 198,1) 0%, rgba(255, 121, 198,1) 5%, rgba(139, 233, 253,1) 66%, rgba(139, 233, 253,1) 100%", */
    width: "320",
    height: "305",
  },
  {
    type: "pentagon",
    //polygon: "50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%",
    polygon: "50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%, 0% 38%",
    background:
      "135deg, rgba(241, 250, 140,1) 10%, rgba(241, 250, 140,1) 30%, rgba(80, 250, 123,1) 79%, rgba(80, 250, 123,1) 100%",
    width: "305",
    height: "300",
  },
];

var morph = function () {
  //shape.style.cssText = "transform: rotate(45deg);"
  polygon.style.cssText =
    "height: " +
    polygons[index].height +
    "px; width: " +
    polygons[index].width +
    "px; -webkit-clip-path: polygon(" +
    polygons[index].polygon +
    "); background: linear-gradient(" +
    polygons[index].background +
    ");";
  index++;
  index = index === 3 ? 0 : index;
};

setInterval(function () {
  morph();
}, 1000);
