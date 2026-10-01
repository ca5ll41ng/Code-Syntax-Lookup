---
id: "python-en-function-subprocess-popen-send_signal"
language: "python"
lang: "en"
category: "function"
name: "Popen.send_signal"
signature: "Popen.send_signal(signal)"
directive: "method"
module: "subprocess"
source_url: "https://docs.python.org/3/library/subprocess.html#subprocess.Popen.send_signal"
license: "PSF"
updated: "2026-10-01"
---

# Popen.send_signal

Sends the signal *signal* to the child.

Do nothing if the process completed.

> **Note**
>
> On Windows, SIGTERM is an alias for `terminate`. CTRL_C_EVENT and
> CTRL_BREAK_EVENT can be sent to processes started with a *creationflags*
> parameter which includes `CREATE_NEW_PROCESS_GROUP`.
>
