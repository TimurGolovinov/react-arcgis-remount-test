Steps to reproduce:
1. Install dependencies - npm ci
2. Run the app - npm start
3. When the app is running go to the browser (Chrome) -> right click -> Inspect -> Memory
4. Click the "Remount" button multiple times at 5-10 seconds intervals (wait for basemap to load), and you can see how memory consumption in esri-worker goes up, the more you click
