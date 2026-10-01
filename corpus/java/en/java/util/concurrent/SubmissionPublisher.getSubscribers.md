---
id: "java-en-function-submissionpublisher-getsubscribers"
language: "java"
lang: "en"
category: "function"
name: "SubmissionPublisher.getSubscribers"
signature: "public List<Subscriber<? super T>> getSubscribers()"
title: "SubmissionPublisher.getSubscribers"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/SubmissionPublisher.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SubmissionPublisher.getSubscribers

```java
public List<Subscriber<? super T>> getSubscribers()
```

Returns a list of current subscribers for monitoring and
 tracking purposes, not for invoking `Flow.Subscriber`
 methods on the subscribers.

**返回**

- list of current subscribers
