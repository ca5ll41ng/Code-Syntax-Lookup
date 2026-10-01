---
id: "java-en-function-pushpromisehandler-of"
language: "java"
lang: "en"
category: "function"
name: "PushPromiseHandler.of"
signature: "public static <T> PushPromiseHandler<T> of(Function<HttpRequest,BodyHandler<T>> pushPromiseHandler, ConcurrentMap<HttpRequest,CompletableFuture<HttpResponse<T>>> pushPromisesMap)"
title: "PushPromiseHandler.of"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpResponse.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PushPromiseHandler.of

```java
public static <T> PushPromiseHandler<T> of(Function<HttpRequest,BodyHandler<T>> pushPromiseHandler, ConcurrentMap<HttpRequest,CompletableFuture<HttpResponse<T>>> pushPromisesMap)
```

Returns a push promise handler that accumulates push promises, and
 their responses, into the given map.

 

 Entries are added to the given map for each push promise accepted.
 The entry's key is the push request, and the entry's value is a
 `CompletableFuture` that completes with the response
 corresponding to the key's push request. A push request is rejected /
 cancelled if there is already an entry in the map whose key is
 `equals equal` to it. A push request is
 rejected / cancelled if it  does not have the same origin as its
 initiating request.

 

 Entries are added to the given map as soon as practically
 possible when a push promise is received and accepted. That way code,
 using such a map like a cache, can determine if a push promise has
 been issued by the server and avoid making, possibly, unnecessary
 requests.

 

 The delivery of a push promise response is not coordinated with
 the delivery of the response to the initiating client-sent request.
 However, when the response body for the initiating client-sent
 request has been fully received, the map is guaranteed to be fully
 populated, that is, no more entries will be added. The individual
 `CompletableFutures` contained in the map may or may not
 already be completed at this point.

**参数**

- **the** — push promise response body type
- **pushPromiseHandler** — the body handler to use for push promises
- **pushPromisesMap** — a map to accumulate push promises into

**返回**

- a push promise handler
