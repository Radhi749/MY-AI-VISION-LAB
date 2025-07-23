<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8">
  <title>لعبة الأدوات المخبرية</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="lab-container">
    <img src="images/lab-bg.jpg" alt="مختبر" class="lab-bg">

    <div class="tool" draggable="true" id="beaker" style="top: 50px; left: 50px;">
      <img src="images/Beaker.png" alt="Beaker">
    </div>

    <div class="tool" draggable="true" id="test-tube" style="top: 50px; left: 150px;">
      <img src="images/Test Tube.png" alt="Test Tube">
    </div>

    <div class="tool" draggable="true" id="flask" style="top: 50px; left: 250px;">
      <img src="images/Conical Flask (Erlenmeyer Flask).png" alt="Flask">
    </div>

    <div class="tool" draggable="true" id="microscope" style="top: 50px; left: 350px;">
      <img src="images/Microscope.png" alt="Microscope">
    </div>

    <div class="tool" draggable="true" id="gloves" style="top: 50px; left: 450px;">
      <img src="images/Safety Gloves.png" alt="Gloves">
    </div>

    <div class="tool" draggable="true" id="water" style="top: 50px; left: 550px;">
      <img src="images/distilled water bottle.png" alt="Water Bottle">
    </div>

    <div class="drop-zone" id="zone1"></div>
  </div>

  <script src="script.js"></script>
</body>
</html>
body {
  margin: 0;
  font-family: Arial;
  direction: rtl;
}

.lab-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.lab-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  z-index: 0;
}

.tool {
  position: absolute;
  width: 80px;
  cursor: grab;
  z-index: 10;
}

.tool img {
  width: 100%;
}

.drop-zone {
  position: absolute;
  width: 150px;
  height: 150px;
  border: 2px dashed #4CAF50;
  border-radius: 10px;
  top: 300px;
  left: 500px;
  z-index: 5;
}
const tools = document.querySelectorAll('.tool');
const dropZone = document.getElementById('zone1');

tools.forEach(tool => {
  tool.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', tool.id);
  });
});

dropZone.addEventListener('dragover', (e) => {
  e.preventDefault();
});

dropZone.addEventListener('drop', (e) => {
  e.preventDefault();
  const toolId = e.dataTransfer.getData('text/plain');
  const tool = document.getElementById(toolId);
  dropZone.appendChild(tool);
  tool.style.position = 'static';
  tool.style.cursor = 'default';
  dropZone.style.backgroundColor = '#e0ffe0';
});
