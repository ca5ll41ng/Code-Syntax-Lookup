---
id: "python-zh-function-signal-pthread_kill"
language: "python"
lang: "zh"
category: "function"
name: "pthread_kill"
signature: "pthread_kill(thread_id, signalnum)"
directive: "function"
module: "signal"
source_url: "https://docs.python.org/zh-cn/3/library/signal.html#signal.pthread_kill"
license: "PSF"
updated: "2026-10-01"
---

# pthread_kill

Send the signal *signalnum* to the thread *thread_id*, another thread in the
same process as the caller.  The target thread can be executing any code
(Python or not).  However, if the target thread is executing the Python
interpreter, the Python signal handlers will be `executed by the main
thread of the main interpreter`.  Therefore, the only point of sending a
signal to a particular Python thread would be to force a running system call
to fail with `InterruptedError`.

Use `threading.get_ident` or the `~threading.Thread.ident`
attribute of `threading.Thread` objects to get a suitable value
for *thread_id*.

If *signalnum* is 0, then no signal is sent, but error checking is still
performed; this can be used to check if the target thread is still running.

audit-event:: signal.pthread_kill thread_id,signalnum signal.pthread_kill

availability:: Unix.

另请参阅 :func:`os.kill`。

> *Added in 3.3*
