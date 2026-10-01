---
id: "java-en-function-bodysubscribers-ofbytearrayconsumer"
language: "java"
lang: "en"
category: "function"
name: "BodySubscribers.ofByteArrayConsumer"
signature: "public static BodySubscriber<Void> ofByteArrayConsumer(Consumer<Optional<byte[]>> consumer)"
title: "BodySubscribers.ofByteArrayConsumer"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpResponse.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BodySubscribers.ofByteArrayConsumer

```java
public static BodySubscriber<Void> ofByteArrayConsumer(Consumer<Optional<byte[]>> consumer)
```

Returns a `BodySubscriber` which provides the incoming body
 data to the provided Consumer of `Optional`. Each
 call to `accept`
 will contain a non-empty `Optional`, except for the final
 invocation after all body data has been read, when the `Optional` will be empty.

 

 The `HttpResponse` using this subscriber is available after
 the entire response has been read.

 This subscriber is not flow controlled.
 Therefore, the supplied consumer must be able to process whatever
 amount of data is delivered in a timely fashion.

**参数**

- **consumer** — a Consumer of byte arrays

**返回**

- a body subscriber
