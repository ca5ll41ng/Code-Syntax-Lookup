---
id: "java-en-function-subscriber-onerror"
language: "java"
lang: "en"
category: "function"
name: "Subscriber.onError"
signature: "public void onError(Throwable throwable)"
title: "Subscriber.onError"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Flow.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Subscriber.onError

```java
public void onError(Throwable throwable)
```

Method invoked upon an unrecoverable error encountered by a
 Publisher or Subscription, after which no other Subscriber
 methods are invoked by the Subscription.  If this method
 itself throws an exception, resulting behavior is
 undefined.

**参数**

- **throwable** — the exception
