---
id: "java-en-function-thread-run"
language: "java"
lang: "en"
category: "function"
name: "Thread.run"
signature: "public void run()"
title: "Thread.run"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Thread.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Thread.run

```java
public void run()
```

This method is run by the thread when it executes. Subclasses of `Thread` may override this method.

 

 This method is not intended to be invoked directly. If this thread is a
 platform thread created with a `Runnable` task then invoking this method
 will invoke the task's `run` method. If this thread is a virtual thread
 then invoking this method directly does nothing.

 the `Thread` was created with. If the thread was created without a task
 then this method does nothing.
