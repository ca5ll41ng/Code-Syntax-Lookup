---
id: "java-en-function-subscription-cancel"
language: "java"
lang: "en"
category: "function"
name: "Subscription.cancel"
signature: "public void cancel()"
title: "Subscription.cancel"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Flow.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Subscription.cancel

```java
public void cancel()
```

Causes the Subscriber to (eventually) stop receiving
 messages.  Implementation is best-effort -- additional
 messages may be received after invoking this method.
 A cancelled subscription need not ever receive an
 `onComplete` or `onError` signal.
