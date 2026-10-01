---
id: "java-en-function-subscription-request"
language: "java"
lang: "en"
category: "function"
name: "Subscription.request"
signature: "public void request(long n)"
title: "Subscription.request"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Flow.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Subscription.request

```java
public void request(long n)
```

Adds the given number `n` of items to the current
 unfulfilled demand for this subscription.  If `n` is
 less than or equal to zero, the Subscriber will receive an
 `onError` signal with an `IllegalArgumentException` argument.  Otherwise, the
 Subscriber will receive up to `n` additional `onNext` invocations (or fewer if terminated).

**参数**

- **n** — the increment of demand; a value of `Long.MAX_VALUE` may be considered as effectively unbounded
