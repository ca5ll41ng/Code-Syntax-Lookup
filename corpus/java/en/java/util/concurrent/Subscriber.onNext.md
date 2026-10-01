---
id: "java-en-function-subscriber-onnext"
language: "java"
lang: "en"
category: "function"
name: "Subscriber.onNext"
signature: "public void onNext(T item)"
title: "Subscriber.onNext"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Flow.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Subscriber.onNext

```java
public void onNext(T item)
```

Method invoked with a Subscription's next item.  If this
 method throws an exception, resulting behavior is not
 guaranteed, but may cause the Subscription to be cancelled.

**参数**

- **item** — the item
