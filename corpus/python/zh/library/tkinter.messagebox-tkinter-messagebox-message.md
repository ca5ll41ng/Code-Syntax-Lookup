---
id: "python-zh-function-tkinter-messagebox-message"
language: "python"
lang: "zh"
category: "function"
name: "Message"
signature: "Message(master=None, **options)"
directive: "class"
module: "tkinter.messagebox"
source_url: "https://docs.python.org/zh-cn/3/library/tkinter.messagebox.html#tkinter.messagebox.Message"
license: "PSF"
updated: "2026-10-01"
---

# Message

Create a message window with an application-specified message, an icon
and a set of buttons.
Each of the buttons in the message window is identified by a unique symbolic name (see the *type* options).

支持以下选项：

   *command*
      Specifies the function to invoke when the user closes the dialog.
      The name of the button clicked by the user to close the dialog is
      passed as argument.
      This is only available on macOS.

   *default*
      Gives the `symbolic name` of the default button
      for this message window (`OK`, `CANCEL`, and so on).
      If this option is not specified, the first button in the dialog will
      be made the default.

   *detail*
      Specifies an auxiliary message to the main message given by the
      *message* option.
      The message detail will be presented beneath the main message and,
      where supported by the OS, in a less emphasized font than the main
      message.

   *icon*
      Specifies an `icon` to display.
      If this option is not specified, then the `INFO` icon will be
      displayed.

   *message*
      Specifies the message to display in this message box.
      The default value is an empty string.

   *parent*
      Makes the specified window the logical parent of the message box.
      The message box is displayed on top of its parent window.

   *title*
      Specifies a string to display as the title of the message box.
      This option is ignored on macOS, where platform guidelines forbid
      the use of a title on this kind of dialog.

   *type*
      Arranges for a `predefined set of buttons`
      to be displayed.

> **Note**
>
> Tk 8.6 added the *command* option.
>

method:: show(**options)
