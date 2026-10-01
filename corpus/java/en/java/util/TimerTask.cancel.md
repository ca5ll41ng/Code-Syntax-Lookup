---
id: "java-en-function-timertask-cancel"
language: "java"
lang: "en"
category: "function"
name: "TimerTask.cancel"
signature: "public boolean cancel()"
title: "TimerTask.cancel"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/TimerTask.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TimerTask.cancel

```java
public boolean cancel()
```

Cancels this timer task.  If the task has been scheduled for one-time
 execution and has not yet run, or has not yet been scheduled, it will
 never run.  If the task has been scheduled for repeated execution, it
 will never run again.  (If the task is running when this call occurs,
 the task will run to completion, but will never run again.)

 

Note that calling this method from within the `run` method of
 a repeating timer task absolutely guarantees that the timer task will
 not run again.

 

This method may be called repeatedly; the second and subsequent
 calls have no effect.

**返回**

- true if this task is scheduled for one-time execution and has not yet run, or this task is scheduled for repeated execution. Returns false if the task was scheduled for one-time execution and has already run, or if the task was never scheduled, or if the task was already cancelled.  (Loosely speaking, this method returns `true` if it prevents one or more scheduled executions from taking place.)
