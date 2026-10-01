---
id: "java-en-function-submissionpublisher-issubscribed"
language: "java"
lang: "en"
category: "function"
name: "SubmissionPublisher.isSubscribed"
signature: "public boolean isSubscribed(Subscriber<? super T> subscriber)"
title: "SubmissionPublisher.isSubscribed"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/SubmissionPublisher.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SubmissionPublisher.isSubscribed

```java
public boolean isSubscribed(Subscriber<? super T> subscriber)
```

Returns true if the given Subscriber is currently subscribed.

**参数**

- **subscriber** — the subscriber

**返回**

- true if currently subscribed

**异常**

- **NullPointerException** — if subscriber is null
