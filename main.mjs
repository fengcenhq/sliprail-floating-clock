/**
 * @type {import('@sliprail/sdk').Extension}
 */
export default {
  shortcuts: [
    {
      id: 'OpenFloatingClock',
      displayName: {
        'en': 'Open Floating Clock',
        'zh-hans': '打开悬浮时钟',
      },
      appendKeywords: ['Open Floating Clock'],
      description: {
        'en': 'A floating clock window that always stays on top of other applications. Displays the current time with precise seconds, perfect for time-sensitive tasks and monitoring.',
        'zh-hans':
          '一个始终置顶的浮动时钟窗口，精确显示当前时间和秒数。非常适合需要精确掌握时间的任务和监控场景。',
      },
      /**
       * @param context {import('@sliprail/sdk').ShortcutContext}
       */
      handle: async (context) => {
        const existingWindows = context.getWindows();
        if (existingWindows.length > 0) {
          existingWindows[0].show();
          return;
        }

        await context.createWindow({
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
      },
    },
    {
      id: 'CloseFloatingClock',
      displayName: {
        'en': 'Close Floating Clock',
        'zh-hans': '关闭悬浮时钟',
      },
      appendKeywords: ['Close Floating Clock'],
      description: {
        'en': 'Closes the floating clock window.',
        'zh-hans': '关闭悬浮时钟窗口。',
      },
      /**
       * @param context {import('@sliprail/sdk').ShortcutContext}
       */
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
};
