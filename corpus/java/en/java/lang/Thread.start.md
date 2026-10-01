---
id: "java-en-function-thread-start"
language: "java"
lang: "en"
category: "function"
name: "Thread.start"
signature: "public void start()"
title: "Thread.start"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Thread.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Thread.start

```java
public void start()
```

Schedules this thread to begin execution. The thread will execute
 independently of the current thread.

 

 A thread can be started at most once. In particular, a thread can not
 be restarted after it has terminated.

**异常**

- **IllegalThreadStateException** — if the thread was already started
