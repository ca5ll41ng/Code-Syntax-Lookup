---
id: "java-en-function-java-net-http-httpresponse-bodyhandlers"
language: "java"
lang: "en"
category: "function"
name: "java.net.http.HttpResponse.BodyHandlers"
title: "BodyHandlers"
directive: "type"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpResponse.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BodyHandlers

Implementations of `BodyHandler BodyHandler` that implement various
 useful handlers, such as handling the response body as a String, or
 streaming the response body to a file.

 

 These implementations do not examine the status code, meaning the
 body is always accepted. They typically return an equivalently named
 `BodySubscriber`. Alternatively, a custom handler can be used to
 examine the status code and headers, and return a different body
 subscriber, of the same type, as appropriate.

 

The following are examples of using the predefined body handlers to
 convert a flow of response body data into common high-level Java objects:

 {@snippet :
   // Receives the response body as a String
   HttpResponse response = client
     .send(request, BodyHandlers.ofString()); }

 {@snippet :
   // Receives the response body as a file
   HttpResponse response = client
     .send(request, BodyHandlers.ofFile(Paths.get("example.html"))); }

 {@snippet :
   // Receives the response body as an InputStream
   HttpResponse response = client
     .send(request, BodyHandlers.ofInputStream()); }

 {@snippet :
   // Discards the response body
   HttpResponse response = client
     .send(request, BodyHandlers.discarding());  }

  Some `body() body implementations` created by
  `#streaming-body body subscribers` may need to be
  properly closed, read, or cancelled for the associated resources to
  be reclaimed and for the associated request to `#closing
  run to completion`.

> *Since 11*
