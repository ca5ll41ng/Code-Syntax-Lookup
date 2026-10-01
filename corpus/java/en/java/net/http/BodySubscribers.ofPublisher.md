---
id: "java-en-function-bodysubscribers-ofpublisher"
language: "java"
lang: "en"
category: "function"
name: "BodySubscribers.ofPublisher"
signature: "public static BodySubscriber<Publisher<List<ByteBuffer>>> ofPublisher()"
title: "BodySubscribers.ofPublisher"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpResponse.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BodySubscribers.ofPublisher

```java
public static BodySubscriber<Publisher<List<ByteBuffer>>> ofPublisher()
```

Returns a response subscriber which publishes the response body
 through a `Publisher
- >`.

 

 The `HttpResponse` using this subscriber is available
 immediately after the response headers have been read, without
 requiring to wait for the entire body to be processed. The response
 body bytes can then be obtained by subscribing to the publisher
 returned by the `HttpResponse` `body() body`
 method.

 

The publisher returned by the `body() body`
 method can be subscribed to only once. The first subscriber will
 receive the body response bytes if successfully subscribed, or will
 cause the subscription to be cancelled otherwise.
 If more subscriptions are attempted, the subsequent subscribers will
 be immediately subscribed with an empty subscription and their
 `onError(Throwable) onError` method
 will be invoked with an `IllegalStateException`.

 corresponding exchange are properly released the caller must
 ensure that the provided publisher is subscribed once, and either
 `request(long) requests` all bytes
 until `onComplete() onComplete` or
 `onError(Throwable) onError` are invoked, or
 cancel the provided `onSubscribe(Subscription)
 subscription` if it is unable or unwilling to do so.
 Note that depending on the actual HTTP protocol `HttpClient.Version version` used for the exchange, cancelling the
 subscription instead of exhausting the flow may cause the underlying
 HTTP connection to be closed and prevent it from being reused for
 subsequent operations.

**返回**

- A `#streaming publishing body subscriber` which publishes the response body through a `Publisher - >`.
