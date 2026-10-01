---
id: "java-en-function-futuretask-runandreset"
language: "java"
lang: "en"
category: "function"
name: "FutureTask.runAndReset"
signature: "protected boolean runAndReset()"
title: "FutureTask.runAndReset"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/FutureTask.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# FutureTask.runAndReset

```java
protected boolean runAndReset()
```

Executes the computation without setting its result, and then
 resets this future to initial state, failing to do so if the
 computation encounters an exception or is cancelled.  This is
 designed for use with tasks that intrinsically execute more
 than once.

**返回**

- `true` if successfully run and reset
