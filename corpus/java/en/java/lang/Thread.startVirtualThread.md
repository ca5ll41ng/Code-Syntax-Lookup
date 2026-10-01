---
id: "java-en-function-thread-startvirtualthread"
language: "java"
lang: "en"
category: "function"
name: "Thread.startVirtualThread"
signature: "public static Thread startVirtualThread(Runnable task)"
title: "Thread.startVirtualThread"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Thread.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Thread.startVirtualThread

```java
public static Thread startVirtualThread(Runnable task)
```

Creates a virtual thread to execute a task and schedules it to execute.

 

 This method is equivalent to:
 
```
`Thread.ofVirtual().start(task); `
```

**参数**

- **task** — the object to run when the thread executes

**返回**

- a new, and started, virtual thread

**参见**

- Inheritance when creating threads

> *Since 21*
