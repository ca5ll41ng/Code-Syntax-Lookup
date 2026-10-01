---
id: "java-en-function-futuretask-tostring"
language: "java"
lang: "en"
category: "function"
name: "FutureTask.toString"
signature: "public String toString()"
title: "FutureTask.toString"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/FutureTask.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FutureTask.toString

```java
public String toString()
```

Returns a string representation of this FutureTask.

 The default implementation returns a string identifying this
 FutureTask, as well as its completion state.  The state, in
 brackets, contains one of the strings `"Completed Normally"`,
 `"Completed Exceptionally"`, `"Cancelled"`, or `"Not completed"`.

**返回**

- a string representation of this FutureTask
