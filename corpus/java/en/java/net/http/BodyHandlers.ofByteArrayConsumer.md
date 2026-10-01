---
id: "java-en-function-bodyhandlers-ofbytearrayconsumer"
language: "java"
lang: "en"
category: "function"
name: "BodyHandlers.ofByteArrayConsumer"
signature: "public static BodyHandler<Void> ofByteArrayConsumer(Consumer<Optional<byte[]>> consumer)"
title: "BodyHandlers.ofByteArrayConsumer"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpResponse.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BodyHandlers.ofByteArrayConsumer

```java
public static BodyHandler<Void> ofByteArrayConsumer(Consumer<Optional<byte[]>> consumer)
```

Returns a `BodyHandler` that returns a
 `BodySubscriber BodySubscriber``` obtained from
 `ofByteArrayConsumer(Consumer)
 BodySubscribers.ofByteArrayConsumer`.

 

 When the `HttpResponse` object is returned, the body has
 been completely written to the consumer.

 The subscriber returned by this handler is not flow controlled.
 Therefore, the supplied consumer must be able to process whatever
 amount of data is delivered in a timely fashion.

**参数**

- **consumer** — a Consumer to accept the response body

**返回**

- a response body handler
