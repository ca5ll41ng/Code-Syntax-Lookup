---
id: "java-en-function-submissionpublisher-close"
language: "java"
lang: "en"
category: "function"
name: "SubmissionPublisher.close"
signature: "public void close()"
title: "SubmissionPublisher.close"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/SubmissionPublisher.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SubmissionPublisher.close

```java
public void close()
```

Unless already closed, issues `onComplete() onComplete` signals to current
 subscribers, and disallows subsequent attempts to publish. To
 ensure uniform ordering among subscribers, this method may
 await completion of in-progress offers.  Upon return, this
 method does NOT guarantee that all subscribers have
 yet completed.
