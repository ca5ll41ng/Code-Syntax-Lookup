---
id: "java-en-function-sink-cancellationrequested"
language: "java"
lang: "en"
category: "function"
name: "Sink.cancellationRequested"
signature: "default boolean cancellationRequested()"
title: "Sink.cancellationRequested"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Sink.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Sink.cancellationRequested

```java
default boolean cancellationRequested()
```

Indicates that this `Sink` does not wish to receive any more data.

**返回**

- true if cancellation is requested
