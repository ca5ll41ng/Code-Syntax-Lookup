---
id: "java-en-function-sink-begin"
language: "java"
lang: "en"
category: "function"
name: "Sink.begin"
signature: "default void begin(long size)"
title: "Sink.begin"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Sink.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Sink.begin

```java
default void begin(long size)
```

Resets the sink state to receive a fresh data set.  This must be called
 before sending any data to the sink.  After calling `end`,
 you may call this method to reset the sink for another calculation.

**参数**

- **size** — The exact size of the data to be pushed downstream, if known or `-1` if unknown or infinite.    Prior to this call, the sink must be in the initial state, and after this call it is in the active state.
