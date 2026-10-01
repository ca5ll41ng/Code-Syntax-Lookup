---
id: "java-en-function-completionhandler-failed"
language: "java"
lang: "en"
category: "function"
name: "CompletionHandler.failed"
signature: "void failed(Throwable exc, A attachment)"
title: "CompletionHandler.failed"
directive: "method"
module: "java.base/java.nio.channels"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/CompletionHandler.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CompletionHandler.failed

```java
void failed(Throwable exc, A attachment)
```

Invoked when an operation fails.

**参数**

- **exc** — The exception to indicate why the I/O operation failed
- **attachment** — The object attached to the I/O operation when it was initiated.
