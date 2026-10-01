---
id: "java-en-function-bodyhandlers-ofpublisher"
language: "java"
lang: "en"
category: "function"
name: "BodyHandlers.ofPublisher"
signature: "public static BodyHandler<Publisher<List<ByteBuffer>>> ofPublisher()"
title: "BodyHandlers.ofPublisher"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpResponse.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BodyHandlers.ofPublisher

```java
public static BodyHandler<Publisher<List<ByteBuffer>>> ofPublisher()
```

Returns a `BodyHandler>` that creates a
 `BodySubscriber BodySubscriber``>`
 obtained from `ofPublisher()
 BodySubscribers.ofPublisher`.

 

 When the `HttpResponse` object is returned, the response
 headers will have been completely read, but the body may not have
 been fully received yet. The `body` method returns a
 `Publisher Publisher``
- >` from which the body
 response bytes can be obtained as they are received. The publisher
 can and must be subscribed to only once.

 See `ofPublisher` for more
 information.
 

 To ensure that all resources associated with the
 corresponding exchange are properly released the caller must
 subscribe to the publisher and conform to the rules outlined in
 `ofPublisher`

**返回**

- a `#streaming publishing` response body handler
