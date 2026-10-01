---
id: "java-en-function-subscriber-onsubscribe"
language: "java"
lang: "en"
category: "function"
name: "Subscriber.onSubscribe"
signature: "public void onSubscribe(Subscription subscription)"
title: "Subscriber.onSubscribe"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Flow.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Subscriber.onSubscribe

```java
public void onSubscribe(Subscription subscription)
```

Method invoked prior to invoking any other Subscriber
 methods for the given Subscription. If this method throws
 an exception, resulting behavior is not guaranteed, but may
 cause the Subscription not to be established or to be cancelled.

 

Typically, implementations of this method invoke `subscription.request` to enable receiving items.

**参数**

- **subscription** — a new subscription
