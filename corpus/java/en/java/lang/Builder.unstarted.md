---
id: "java-en-function-builder-unstarted"
language: "java"
lang: "en"
category: "function"
name: "Builder.unstarted"
signature: "Thread unstarted(Runnable task)"
title: "Builder.unstarted"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Thread.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder.unstarted

```java
Thread unstarted(Runnable task)
```

Creates a new `Thread` from the current state of the builder to
 run the given task. The `Thread`'s `start() start`
 method must be invoked to schedule the thread to execute.

**参数**

- **task** — the object to run when the thread executes

**返回**

- a new unstarted Thread

**参见**

- Inheritance when creating threads
