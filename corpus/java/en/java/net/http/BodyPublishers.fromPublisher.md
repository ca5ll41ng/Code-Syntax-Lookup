---
id: "java-en-function-bodypublishers-frompublisher"
language: "java"
lang: "en"
category: "function"
name: "BodyPublishers.fromPublisher"
signature: "public static BodyPublisher fromPublisher(Flow.Publisher<? extends ByteBuffer> publisher)"
title: "BodyPublishers.fromPublisher"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpRequest.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BodyPublishers.fromPublisher

```java
public static BodyPublisher fromPublisher(Flow.Publisher<? extends ByteBuffer> publisher)
```

Returns a request body publisher whose body is retrieved from the
 given `Flow.Publisher`. The returned request body publisher
 has an unknown content length.

 request body that the publisher will publish is unknown.

**参数**

- **publisher** — the publisher responsible for publishing the body

**返回**

- a BodyPublisher
