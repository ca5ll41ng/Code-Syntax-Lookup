---
id: "java-en-function-pushpromisehandler-notifyadditionalpromise"
language: "java"
lang: "en"
category: "function"
name: "PushPromiseHandler.notifyAdditionalPromise"
signature: "public default void notifyAdditionalPromise( HttpRequest initiatingRequest, PushId pushid )"
title: "PushPromiseHandler.notifyAdditionalPromise"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpResponse.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PushPromiseHandler.notifyAdditionalPromise

```java
public default void notifyAdditionalPromise( HttpRequest initiatingRequest, PushId pushid )
```

Invoked for each additional HTTP/3 Push Promise. The `pushid` links the promise to the
 original promised `HttpRequest` and `HttpResponse`. Additional promises
 generally result from different client initiated requests.

 The default implementation of this method does nothing.

**参数**

- **initiatingRequest** — the client initiated request which resulted in the push
- **pushid** — the pushid which may have been notified previously

> *Since 26*
