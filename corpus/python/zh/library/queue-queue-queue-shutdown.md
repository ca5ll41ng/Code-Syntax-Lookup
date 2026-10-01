---
id: "python-zh-function-queue-queue-shutdown"
language: "python"
lang: "zh"
category: "function"
name: "Queue.shutdown"
signature: "Queue.shutdown(immediate=False)"
directive: "method"
module: "queue"
source_url: "https://docs.python.org/zh-cn/3/library/queue.html#queue.Queue.shutdown"
license: "PSF"
updated: "2026-10-01"
---

# Queue.shutdown

将一个 :class:`Queue` 实例置为关闭模式。

The queue can no longer grow.
Future calls to `~Queue.put` raise `ShutDown`.
Currently blocked callers of `~Queue.put` will be unblocked
and will raise `ShutDown` in the formerly blocked thread.

If *immediate* is false (the default), the queue can be wound
down normally with `~Queue.get` calls to extract tasks
that have already been loaded.

And if `~Queue.task_done` is called for each remaining task, a
pending `~Queue.join` will be unblocked normally.

Once the queue is empty, future calls to `~Queue.get` will
raise `ShutDown`.

If *immediate* is true, the queue is terminated immediately.
The queue is drained to be completely empty and the count
of unfinished tasks is reduced by the number of tasks drained.
If unfinished tasks is zero, callers of `~Queue.join`
are unblocked.  Also, blocked callers of `~Queue.get`
are unblocked and will raise `ShutDown` because the
queue is empty.

Use caution when using `~Queue.join` with *immediate* set
to true. This unblocks the join even when no work has been done
on the tasks, violating the usual invariant for joining a queue.

> *Added in 3.13*
