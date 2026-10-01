---
id: "java-en-function-threadfactory-newthread"
language: "java"
lang: "en"
category: "function"
name: "ThreadFactory.newThread"
signature: "Thread newThread(Runnable r)"
title: "ThreadFactory.newThread"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ThreadFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadFactory.newThread

```java
Thread newThread(Runnable r)
```

Constructs a new unstarted `Thread` to run the given runnable.

**参数**

- **r** — a runnable to be executed by new thread instance

**返回**

- constructed thread, or `null` if the request to create a thread is rejected

**参见**

- Inheritance when creating threads
