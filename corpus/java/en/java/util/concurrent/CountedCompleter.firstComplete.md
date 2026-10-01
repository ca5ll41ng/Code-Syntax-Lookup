---
id: "java-en-function-countedcompleter-firstcomplete"
language: "java"
lang: "en"
category: "function"
name: "CountedCompleter.firstComplete"
signature: "public final CountedCompleter<?> firstComplete()"
title: "CountedCompleter.firstComplete"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CountedCompleter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CountedCompleter.firstComplete

```java
public final CountedCompleter<?> firstComplete()
```

If this task's pending count is zero, returns this task;
 otherwise decrements its pending count and returns `null`.
 This method is designed to be used with `nextComplete` in
 completion traversal loops.

**返回**

- this task, if pending count was zero, else `null`
