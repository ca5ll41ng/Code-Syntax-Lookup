---
id: "java-en-function-bodysubscribers-ofbytearray"
language: "java"
lang: "en"
category: "function"
name: "BodySubscribers.ofByteArray"
signature: "public static BodySubscriber<byte[]> ofByteArray()"
title: "BodySubscribers.ofByteArray"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpResponse.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BodySubscribers.ofByteArray

```java
public static BodySubscriber<byte[]> ofByteArray()
```

Returns a `BodySubscriber` which stores the response body as a
 byte array.

 

 The `HttpResponse` using this subscriber is available after
 the entire response has been read.

**返回**

- a body subscriber
