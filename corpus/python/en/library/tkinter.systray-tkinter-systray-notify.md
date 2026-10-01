---
id: "python-en-function-tkinter-systray-notify"
language: "python"
lang: "en"
category: "function"
name: "notify"
signature: "notify(title, message, *, master=None)"
directive: "function"
module: "tkinter.systray"
source_url: "https://docs.python.org/3/library/tkinter.systray.html#tkinter.systray.notify"
license: "PSF"
updated: "2026-10-01"
---

# notify

Send a desktop notification with the given title and message
without creating a system tray icon first.
On Windows, sending a notification requires an existing system
tray icon, which is also displayed in the notification;
use the `SysTrayIcon.notify` method instead.
