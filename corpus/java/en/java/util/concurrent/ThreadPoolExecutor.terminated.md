---
id: "java-en-function-threadpoolexecutor-terminated"
language: "java"
lang: "en"
category: "function"
name: "ThreadPoolExecutor.terminated"
signature: "protected void terminated()"
title: "ThreadPoolExecutor.terminated"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ThreadPoolExecutor.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadPoolExecutor.terminated

```java
protected void terminated()
```

Method invoked when the Executor has terminated.  Default
 implementation does nothing. Note: To properly nest multiple
 overridings, subclasses should generally invoke
 `super.terminated` within this method.
