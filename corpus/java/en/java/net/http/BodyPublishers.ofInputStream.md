---
id: "java-en-function-bodypublishers-ofinputstream"
language: "java"
lang: "en"
category: "function"
name: "BodyPublishers.ofInputStream"
signature: "public static BodyPublisher ofInputStream(Supplier<? extends InputStream> streamSupplier)"
title: "BodyPublishers.ofInputStream"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpRequest.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BodyPublishers.ofInputStream

```java
public static BodyPublisher ofInputStream(Supplier<? extends InputStream> streamSupplier)
```

A request body publisher that reads its data from an `InputStream`. A `Supplier` of `InputStream` is used in
 case the request needs to be repeated, as the content is not buffered.
 The `Supplier` may return `null` on subsequent attempts,
 in which case the request fails.

**参数**

- **streamSupplier** — a Supplier of open InputStreams

**返回**

- a BodyPublisher
