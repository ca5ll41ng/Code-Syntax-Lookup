---
id: "java-en-function-transferqueue-trytransfer"
language: "java"
lang: "en"
category: "function"
name: "TransferQueue.tryTransfer"
signature: "boolean tryTransfer(E e)"
title: "TransferQueue.tryTransfer"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/TransferQueue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TransferQueue.tryTransfer

```java
boolean tryTransfer(E e)
```

Transfers the element to a waiting consumer immediately, if possible.

 

More precisely, transfers the specified element immediately
 if there exists a consumer already waiting to receive it (in
 `take` or timed `poll(long,TimeUnit) poll`),
 otherwise returning `false` without enqueuing the element.

**参数**

- **e** — the element to transfer

**返回**

- `true` if the element was transferred, else `false`

**异常**

- **ClassCastException** — if the class of the specified element prevents it from being added to this queue
- **NullPointerException** — if the specified element is null
- **IllegalArgumentException** — if some property of the specified element prevents it from being added to this queue
