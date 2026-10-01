---
id: "java-en-function-submissionpublisher-closeexceptionally"
language: "java"
lang: "en"
category: "function"
name: "SubmissionPublisher.closeExceptionally"
signature: "public void closeExceptionally(Throwable error)"
title: "SubmissionPublisher.closeExceptionally"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/SubmissionPublisher.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SubmissionPublisher.closeExceptionally

```java
public void closeExceptionally(Throwable error)
```

Unless already closed, issues `onError(Throwable) onError` signals to current
 subscribers with the given error, and disallows subsequent
 attempts to publish.  Future subscribers also receive the given
 error. Upon return, this method does NOT guarantee
 that all subscribers have yet completed.

**参数**

- **error** — the `onError` argument sent to subscribers

**异常**

- **NullPointerException** — if error is null
