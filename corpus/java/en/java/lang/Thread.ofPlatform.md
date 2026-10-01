---
id: "java-en-function-thread-ofplatform"
language: "java"
lang: "en"
category: "function"
name: "Thread.ofPlatform"
signature: "public static Builder.OfPlatform ofPlatform()"
title: "Thread.ofPlatform"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Thread.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Thread.ofPlatform

```java
public static Builder.OfPlatform ofPlatform()
```

Returns a builder for creating a platform `Thread` or `ThreadFactory`
 that creates platform threads.

 {@snippet :
   // Start a daemon thread to run a task
   Thread thread = Thread.ofPlatform().daemon().start(runnable);

   // Create an unstarted thread with name "duke", its start() method
   // must be invoked to schedule it to execute.
   Thread thread = Thread.ofPlatform().name("duke").unstarted(runnable);

   // A ThreadFactory that creates daemon threads named "worker-0", "worker-1", ...
   ThreadFactory factory = Thread.ofPlatform().daemon().name("worker-", 0).factory();
 }

**返回**

- A builder for creating `Thread` or `ThreadFactory` objects.

> *Since 21*
