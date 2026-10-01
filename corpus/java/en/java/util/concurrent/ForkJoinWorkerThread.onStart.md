---
id: "java-en-function-forkjoinworkerthread-onstart"
language: "java"
lang: "en"
category: "function"
name: "ForkJoinWorkerThread.onStart"
signature: "protected void onStart()"
title: "ForkJoinWorkerThread.onStart"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinWorkerThread.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ForkJoinWorkerThread.onStart

```java
protected void onStart()
```

Initializes internal state after construction but before
 processing any tasks. If you override this method, you must
 invoke `super.onStart()` at the beginning of the method.
 Initialization requires care: Most fields must have legal
 default values, to ensure that attempted accesses from other
 threads work correctly even before this thread starts
 processing tasks.
