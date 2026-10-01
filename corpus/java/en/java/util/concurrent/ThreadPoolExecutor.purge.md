---
id: "java-en-function-threadpoolexecutor-purge"
language: "java"
lang: "en"
category: "function"
name: "ThreadPoolExecutor.purge"
signature: "public void purge()"
title: "ThreadPoolExecutor.purge"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ThreadPoolExecutor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadPoolExecutor.purge

```java
public void purge()
```

Tries to remove from the work queue all `Future`
 tasks that have been cancelled. This method can be useful as a
 storage reclamation operation, that has no other impact on
 functionality. Cancelled tasks are never executed, but may
 accumulate in work queues until worker threads can actively
 remove them. Invoking this method instead tries to remove them now.
 However, this method may fail to remove tasks in
 the presence of interference by other threads.
