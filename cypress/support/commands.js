const compareSnapshotCommand = require('cypress-visual-regression/dist/command');

compareSnapshotCommand({ scale: true, errorThreshold: 0.03 });
