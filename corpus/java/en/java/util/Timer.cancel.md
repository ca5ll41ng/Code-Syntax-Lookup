---
id: "java-en-function-timer-cancel"
language: "java"
lang: "en"
category: "function"
name: "Timer.cancel"
signature: "public void cancel()"
title: "Timer.cancel"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Timer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Timer.cancel

```java
public void cancel()
```

Terminates this timer, discarding any currently scheduled tasks.
 It should be noted that this method does not cancel the scheduled
 tasks. For a task to be considered cancelled, the task itself should
 invoke `cancel`.

 

This method does not interfere with a currently executing task (if it exists).
 Once a timer has been terminated, its execution thread terminates
 gracefully, and no more tasks may be scheduled on it.

 

Note that calling this method from within the run method of a
 timer task that was invoked by this timer absolutely guarantees that
 the ongoing task execution is the last task execution that will ever
 be performed by this timer.

 

This method may be called repeatedly; the second and subsequent
 calls have no effect.

**参见**

- TimerTask#cancel()
