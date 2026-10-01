---
id: "python-en-function-subprocess-realtime_priority_class"
language: "python"
lang: "en"
category: "function"
name: "REALTIME_PRIORITY_CLASS"
directive: "data"
module: "subprocess"
source_url: "https://docs.python.org/3/library/subprocess.html#subprocess.REALTIME_PRIORITY_CLASS"
license: "PSF"
updated: "2026-10-01"
---

# REALTIME_PRIORITY_CLASS

A `Popen` `creationflags` parameter to specify that a new process
will have realtime priority.
You should almost never use REALTIME_PRIORITY_CLASS, because this interrupts
system threads that manage mouse input, keyboard input, and background disk
flushing. This class can be appropriate for applications that "talk" directly
to hardware or that perform brief tasks that should have limited interruptions.

> *Added in 3.7*
