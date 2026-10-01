---
id: "java-en-function-thread-setdaemon"
language: "java"
lang: "en"
category: "function"
name: "Thread.setDaemon"
signature: "public final void setDaemon(boolean on)"
title: "Thread.setDaemon"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Thread.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Thread.setDaemon

```java
public final void setDaemon(boolean on)
```

Marks this thread as either a daemon or non-daemon thread.
 The shutdown sequence begins when all
 started non-daemon threads have terminated.

 

 The daemon status of a virtual thread is always `true` and cannot be
 changed by this method to `false`.

 

 This method must be invoked before the thread is started. The behavior
 of this method when the thread has terminated is not specified.

**参数**

- **on** — if `true`, marks this thread as a daemon thread

**异常**

- **IllegalArgumentException** — if this is a virtual thread and `on` is false
- **IllegalThreadStateException** — if this thread is `isAlive alive`
