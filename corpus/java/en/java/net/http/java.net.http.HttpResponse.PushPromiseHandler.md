---
id: "java-en-function-java-net-http-httpresponse-pushpromisehandler"
language: "java"
lang: "en"
category: "function"
name: "java.net.http.HttpResponse.PushPromiseHandler"
title: "PushPromiseHandler"
directive: "type"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpResponse.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# PushPromiseHandler

A handler for push promises.

 

 A push promise is a synthetic request sent by an HTTP/2 or HTTP/3 server
 when retrieving an initiating client-sent request. The server has
 determined, possibly through inspection of the initiating request, that
 the client will likely need the promised resource, and hence pushes a
 synthetic push request, in the form of a push promise, to the client. The
 client can choose to accept or reject the push promise request.

 

For HTTP/2, a push promise request may be received up to the point where the
 response body of the initiating client-sent request has been fully
 received. The delivery of a push promise response, however, is not
 coordinated with the delivery of the response to the initiating
 client-sent request. These are delivered with the
 `applyPushPromise` method.
 

 For HTTP/3, push promises are handled in a similar way, except that promises
 of the same resource (request URI, request headers and response body) can be
 promised multiple times, but are only delivered by the server (and this API)
 once though the method `applyPushPromise`.
 Subsequent promises of the same resource, receive a notification only
 of the promise by the method `notifyAdditionalPromise`.
 The same `PushPromiseHandler.PushId` is supplied for each of these
 notifications. Additionally, HTTP/3 push promises are not restricted to a context
 of a single initiating request. The same push promise can be delivered and then notified
 across multiple client initiated requests within the same HTTP/3 (QUIC) connection.

**参数**

- **the** — push promise response body type

> *Since 11*
