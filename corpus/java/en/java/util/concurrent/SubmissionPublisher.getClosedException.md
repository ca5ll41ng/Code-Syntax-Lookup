---
id: "java-en-function-submissionpublisher-getclosedexception"
language: "java"
lang: "en"
category: "function"
name: "SubmissionPublisher.getClosedException"
signature: "public Throwable getClosedException()"
title: "SubmissionPublisher.getClosedException"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/SubmissionPublisher.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SubmissionPublisher.getClosedException

```java
public Throwable getClosedException()
```

Returns the exception associated with `closeExceptionally(Throwable) closeExceptionally`, or null if
 not closed or if closed normally.

**返回**

- the exception, or null if none
