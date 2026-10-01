---
id: "java-en-function-bodyhandlers-ofbytearray"
language: "java"
lang: "en"
category: "function"
name: "BodyHandlers.ofByteArray"
signature: "public static BodyHandler<byte[]> ofByteArray()"
title: "BodyHandlers.ofByteArray"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpResponse.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BodyHandlers.ofByteArray

```java
public static BodyHandler<byte[]> ofByteArray()
```

Returns a `BodyHandler` that returns a
 `BodySubscriber BodySubscriber``` obtained
 from `ofByteArray`.

 

 When the `HttpResponse` object is returned, the body has
 been completely written to the byte array.

**返回**

- a response body handler
