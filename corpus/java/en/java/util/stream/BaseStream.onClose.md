---
id: "java-en-function-basestream-onclose"
language: "java"
lang: "en"
category: "function"
name: "BaseStream.onClose"
signature: "S onClose(Runnable closeHandler)"
title: "BaseStream.onClose"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/BaseStream.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BaseStream.onClose

```java
S onClose(Runnable closeHandler)
```

Returns an equivalent stream with an additional close handler.  Close
 handlers are run when the `close` method
 is called on the stream, and are executed in the order they were
 added.  All close handlers are run, even if earlier close handlers throw
 exceptions.  If any close handler throws an exception, the first
 exception thrown will be relayed to the caller of `close()`, with
 any remaining exceptions added to that exception as suppressed exceptions
 (unless one of the remaining exceptions is the same exception as the
 first exception, since an exception cannot suppress itself.)  May
 return itself.

 

This is an intermediate
 operation.

**参数**

- **closeHandler** — A task to execute when the stream is closed

**返回**

- a stream with a handler that is run if the stream is closed
