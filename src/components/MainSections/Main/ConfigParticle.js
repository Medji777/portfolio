const config = {
    showCube: false,
    dimension: "3D",
    velocity: 1,
    boundaryType: "bounce",
    antialias: false,
    direction: {
        xMin: -1,
        xMax: 1,
        yMin: -1,
        yMax: 1,
        zMin: -1,
        zMax: 1
    },
    lines: {
        colorMode: "solid",
        color: "#ccc",
        transparency: 0.9,
        limitConnections: true,
        maxConnections: 20,
        minDistance: 150,
        visible: true
    },
    particles: {
        colorMode: "solid",
        color: "#ccc",
        transparency: 0.9,
        shape: "circle",
        boundingBox: "canvas",
        count: 150,
        minSize: 10,
        maxSize: 45,
        visible: true
    },
    cameraControls: {
        enabled: true,
        enableDamping: true,
        dampingFactor: 0.2,
        enableZoom: false,
        autoRotate: true,
        autoRotateSpeed: 0.3,
        resetCameraFlag: false
    }
};

export default config;