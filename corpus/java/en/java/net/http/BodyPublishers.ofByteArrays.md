---
id: "java-en-function-bodypublishers-ofbytearrays"
language: "java"
lang: "en"
category: "function"
name: "BodyPublishers.ofByteArrays"
signature: "public static BodyPublisher ofByteArrays(Iterable<byte[]> iter)"
title: "BodyPublishers.ofByteArrays"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpRequest.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BodyPublishers.ofByteArrays

```java
public static BodyPublisher ofByteArrays(Iterable<byte[]> iter)
```

A request body publisher that takes data from an `Iterable`
 of byte arrays. An `Iterable` is provided which supplies
 `Iterator` instances. Each attempt to send the request results
 in one invocation of the `Iterable`.

**参数**

- **iter** — an Iterable of byte arrays

**返回**

- a BodyPublisher
