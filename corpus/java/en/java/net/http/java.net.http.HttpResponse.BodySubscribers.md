---
id: "java-en-function-java-net-http-httpresponse-bodysubscribers"
language: "java"
lang: "en"
category: "function"
name: "java.net.http.HttpResponse.BodySubscribers"
title: "BodySubscribers"
directive: "type"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpResponse.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BodySubscribers

Implementations of `BodySubscriber BodySubscriber` that implement
 various useful subscribers, such as converting the response body bytes
 into a String, or streaming the bytes to a file.

 

The following are examples of using the predefined body subscribers
 to convert a flow of response body data into common high-level Java
 objects:

 {@snippet :
   // Streams the response body to a File
   HttpResponse response = client
     .send(request, responseInfo -> BodySubscribers.ofFile(Paths.get("example.html"))); }

 {@snippet :
   // Accumulates the response body and returns it as a byte[]
   HttpResponse response = client
     .send(request, responseInfo -> BodySubscribers.ofByteArray()); }

 {@snippet :
   // Discards the response body
   HttpResponse response = client
     .send(request, responseInfo -> BodySubscribers.discarding()); }

 {@snippet :
   // Accumulates the response body as a String then maps it to its bytes
   HttpResponse response = client
     .send(request, responseInfo ->
        BodySubscribers.mapping(BodySubscribers.ofString(UTF_8), String::getBytes)); }

  
  Some `body() body implementations` created by
  `getBody() body subscribers` may allow response bytes
  to be streamed to the caller. These implementations are typically
  `AutoCloseable` and may need to be explicitly closed in order for
  the resources associated with the request and the client to be `#closing eventually reclaimed`.
  Some other implementations are `Publisher publishers` which need to be
  `ofPublisher() subscribed` in order for their associated
  resources to be released and for the associated request to `#closing run to completion`.

> *Since 11*
