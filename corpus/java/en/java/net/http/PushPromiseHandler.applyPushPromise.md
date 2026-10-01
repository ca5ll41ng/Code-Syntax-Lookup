---
id: "java-en-function-pushpromisehandler-applypushpromise"
language: "java"
lang: "en"
category: "function"
name: "PushPromiseHandler.applyPushPromise"
signature: "public void applyPushPromise( HttpRequest initiatingRequest, HttpRequest pushPromiseRequest, Function<HttpResponse.BodyHandler<T>,CompletableFuture<HttpResponse<T>>> acceptor )"
title: "PushPromiseHandler.applyPushPromise"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpResponse.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PushPromiseHandler.applyPushPromise

```java
public void applyPushPromise( HttpRequest initiatingRequest, HttpRequest pushPromiseRequest, Function<HttpResponse.BodyHandler<T>,CompletableFuture<HttpResponse<T>>> acceptor )
```

Notification of an incoming push promise.

 

 This method is invoked once for each push promise received, up
 to the point where the response body of the initiating client-sent
 request has been fully received.

 

 A push promise is accepted by invoking the given `acceptor`
 function. The `acceptor` function must be passed a non-null
 `BodyHandler`, that is to be used to handle the promise's
 response body. The acceptor function will return a `CompletableFuture` that completes with the promise's response.

 

 If the `acceptor` function is not successfully invoked,
 then the push promise is rejected. The `acceptor` function will
 throw an `IllegalStateException` if invoked more than once.

 

 This method is invoked for all HTTP/2 push promises and also
 by default for the first promise of all HTTP/3 push promises.
 If `applyPushPromise`
 is overridden, then this method is not directly invoked for HTTP/3
 push promises.

**参数**

- **initiatingRequest** — the initiating client-send request
- **pushPromiseRequest** — the synthetic push request
- **acceptor** — the acceptor function that must be successfully invoked to accept the push promise
