---
id: "java-en-function-bodysubscriber-getbody"
language: "java"
lang: "en"
category: "function"
name: "BodySubscriber.getBody"
signature: "public CompletionStage<T> getBody()"
title: "BodySubscriber.getBody"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpResponse.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BodySubscriber.getBody

```java
public CompletionStage<T> getBody()
```

Returns a `CompletionStage` which when completed will return
 the response body object. This method can be called at any time
 relative to the other `Flow.Subscriber` methods and is invoked
 using the client's `executor() executor`.

**返回**

- a CompletionStage for the response body
