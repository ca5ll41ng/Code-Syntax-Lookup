---
id: "java-en-function-future-resultnow"
language: "java"
lang: "en"
category: "function"
name: "Future.resultNow"
signature: "default V resultNow()"
title: "Future.resultNow"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Future.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Future.resultNow

```java
default V resultNow()
```

Returns the computed result, without waiting.

 

 This method is for cases where the caller knows that the task has
 already completed successfully, for example when filtering a stream
 of Future objects for the successful tasks and using a mapping
 operation to obtain a stream of results.
 {@snippet lang=java :
     results = futures.stream()
                .filter(f -> f.state() == Future.State.SUCCESS)
                .map(Future::resultNow)
                .toList();
 }

 The default implementation invokes `isDone()` to test if the task
 has completed. If done, it invokes `get()` to obtain the result.

**返回**

- the computed result

**异常**

- **IllegalStateException** — if the task has not completed or the task did not complete with a result

> *Since 19*
