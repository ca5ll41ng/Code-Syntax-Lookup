---
id: "java-en-function-thread-ofvirtual"
language: "java"
lang: "en"
category: "function"
name: "Thread.ofVirtual"
signature: "public static Builder.OfVirtual ofVirtual()"
title: "Thread.ofVirtual"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Thread.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Thread.ofVirtual

```java
public static Builder.OfVirtual ofVirtual()
```

Returns a builder for creating a virtual `Thread` or `ThreadFactory`
 that creates virtual threads.

 {@snippet :
   // Start a virtual thread to run a task.
   Thread thread = Thread.ofVirtual().start(runnable);

   // A ThreadFactory that creates virtual threads
   ThreadFactory factory = Thread.ofVirtual().factory();
 }

**返回**

- A builder for creating `Thread` or `ThreadFactory` objects.

> *Since 21*
