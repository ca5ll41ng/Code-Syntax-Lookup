---
id: "java-en-function-thread-getthreadgroup"
language: "java"
lang: "en"
category: "function"
name: "Thread.getThreadGroup"
signature: "public final ThreadGroup getThreadGroup()"
title: "Thread.getThreadGroup"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Thread.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Thread.getThreadGroup

```java
public final ThreadGroup getThreadGroup()
```

Returns the thread's thread group or `null` if the thread has
 terminated.

 

 The thread group returned for a virtual thread is the special
 ThreadGroup for
 virtual threads.

**返回**

- this thread's thread group or `null`
