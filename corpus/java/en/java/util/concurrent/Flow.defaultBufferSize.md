---
id: "java-en-function-flow-defaultbuffersize"
language: "java"
lang: "en"
category: "function"
name: "Flow.defaultBufferSize"
signature: "public static int defaultBufferSize()"
title: "Flow.defaultBufferSize"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Flow.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Flow.defaultBufferSize

```java
public static int defaultBufferSize()
```

Returns a default value for Publisher or Subscriber buffering,
 that may be used in the absence of other constraints.

 The current value returned is 256.

**返回**

- the buffer size value
