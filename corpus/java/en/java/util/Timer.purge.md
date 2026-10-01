---
id: "java-en-function-timer-purge"
language: "java"
lang: "en"
category: "function"
name: "Timer.purge"
signature: "public int purge()"
title: "Timer.purge"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Timer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Timer.purge

```java
public int purge()
```

Removes all cancelled tasks from this timer's task queue.
 Calling this method has no effect on the behavior of the timer,
 but eliminates the references to the cancelled tasks from the queue.
 If there are no external references to these tasks, they become
 eligible for garbage collection.

 

Most programs will have no need to call this method.
 It is designed for use by the rare application that cancels a large
 number of tasks.  Calling this method trades time for space: the
 runtime of the method may be proportional to `n + c log n`, where
 `n` is the number of tasks in the queue and `c` is the number
 of cancelled tasks.

 

Note that it is permissible to call this method from within
 a task scheduled on this timer.

**返回**

- the number of tasks removed from the queue.

**参见**

- #cancel()
- TimerTask#cancel()

> *Since 1.5*
