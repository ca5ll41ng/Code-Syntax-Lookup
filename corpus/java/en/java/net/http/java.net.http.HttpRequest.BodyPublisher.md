---
id: "java-en-function-java-net-http-httprequest-bodypublisher"
language: "java"
lang: "en"
category: "function"
name: "java.net.http.HttpRequest.BodyPublisher"
title: "BodyPublisher"
directive: "type"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpRequest.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BodyPublisher

A `BodyPublisher` converts high-level Java objects into a flow of
 byte buffers suitable for sending as a request body.  The class
 `BodyPublishers BodyPublishers` provides implementations of many
 common publishers.

 

 The `BodyPublisher` interface extends `Flow.Publisher
 Flow.Publisher&lt;ByteBuffer&gt;`, which means that a `BodyPublisher`
 acts as a publisher of `ByteBuffer byte buffers`.

 

 When sending a request that contains a body, the HTTP Client
 subscribes to the request's `BodyPublisher` in order to receive the
 flow of outgoing request body data. The normal semantics of `Flow.Subscriber` and `Flow.Publisher` are implemented by the HTTP
 Client and are expected from `BodyPublisher` implementations. Each
 outgoing request results in one HTTP Client `Subscriber`
 subscribing to the `BodyPublisher` in order to provide the sequence
 of byte buffers containing the request body. Instances of `ByteBuffer` published by the publisher must be allocated by the
 publisher, and must not be accessed after being published to the HTTP
 Client. These subscriptions complete normally when the request body is
 fully sent, and can be canceled or terminated early through error. If a
 request needs to be resent for any reason, then a new subscription is
 created which is expected to generate the same data as before.

 

 A `BodyPublisher` that reports a `contentLength()
 content length` of `0` may not be subscribed to by the HTTP Client,
 as it has effectively no data to publish.

**参见**

- BodyPublishers

> *Since 11*
