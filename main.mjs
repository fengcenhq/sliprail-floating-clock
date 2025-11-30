export default {
  shortcuts: [
    {
      id: 'OpenFloatingClock',
      displayName: 'Open Floating Clock',
      description: 'Displays a floating clock window that always stays on top.',
      handle: (context) => {
        const existingWindows = context.getWindows();
        if (existingWindows.length > 0) {
          existingWindows[0].show();
          return;
        }

        const win = context.createWindow({
          htmlFile: 'clock.html',
          title: 'Floating Clock',
          width: 200,
          height: 80,
          alwaysOnTop: true,
          frame: false,
          transparent: true,
          resizable: false,
          skipTaskbar: true,
          hasShadow: true,
        });
        win.show();
      },
    },
    {
      id: 'CloseFloatingClock',
      displayName: 'Close Floating Clock',
      description: 'Closes the floating clock window.',
      handle: (context) => {
        const windows = context.getWindows({
          scope: 'extension',
        });
        for (const win of windows) {
          win.close();
        }
      },
    },
  ],
  settings: [],
};
