---
id: "java-en-function-linkedtransferqueue-trytransfer"
language: "java"
lang: "en"
category: "function"
name: "LinkedTransferQueue.tryTransfer"
signature: "public boolean tryTransfer(E e)"
title: "LinkedTransferQueue.tryTransfer"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/LinkedTransferQueue.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LinkedTransferQueue.tryTransfer

```java
public boolean tryTransfer(E e)
```

Transfers the element to a waiting consumer immediately, if possible.

 

More precisely, transfers the specified element immediately
 if there exists a consumer already waiting to receive it (in
 `take` or timed `poll(long,TimeUnit) poll`),
 otherwise returning `false` without enqueuing the element.

**异常**

- **NullPointerException** — if the specified element is null
