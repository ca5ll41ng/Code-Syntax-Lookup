---
id: "python-zh-function-subprocess-popen-send_signal"
language: "python"
lang: "zh"
category: "function"
name: "Popen.send_signal"
signature: "Popen.send_signal(signal)"
directive: "method"
module: "subprocess"
source_url: "https://docs.python.org/zh-cn/3/library/subprocess.html#subprocess.Popen.send_signal"
license: "PSF"
updated: "2026-10-01"
---

# Popen.send_signal

将信号 *signal* 发送给子进程。

如果进程已完成则不做任何操作。

> **Note**
>
> On Windows, SIGTERM is an alias for `terminate`. CTRL_C_EVENT and
> CTRL_BREAK_EVENT can be sent to processes started with a *creationflags*
> parameter which includes `CREATE_NEW_PROCESS_GROUP`.
>
