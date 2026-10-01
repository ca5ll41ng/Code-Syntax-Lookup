---
id: "java-en-function-java-net-http-httpresponse-bodyhandler"
language: "java"
lang: "en"
category: "function"
name: "java.net.http.HttpResponse.BodyHandler"
title: "BodyHandler"
directive: "type"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpResponse.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BodyHandler

A handler for response bodies.  The class `BodyHandlers BodyHandlers`
 provides implementations of many common body handlers.

 

 The `BodyHandler` interface allows inspection of the response
 code and headers, before the actual response body is received, and is
 responsible for creating the response `BodySubscriber
 BodySubscriber`. The `BodySubscriber` consumes the actual response
 body bytes and, typically, converts them into a higher-level Java type.

 

 A `BodyHandler` is a function that takes a `ResponseInfo
 ResponseInfo` object; and which returns a `BodySubscriber`. The
 `BodyHandler` is invoked when the response status code and headers
 are available, but before the response  body bytes are received.

 

 The following example uses one of the `BodyHandlers
 predefined body handlers` that always process the response body in the
 same way ( streams the response body to a file ).

 {@snippet :
    HttpRequest request = HttpRequest.newBuilder()
        .uri(URI.create("http://www.foo.com/"))
        .build();

  client.sendAsync(request, BodyHandlers.ofFile(Paths.get("/tmp/f")))
        .thenApply(HttpResponse::body)
        .thenAccept(System.out::println); }

 Note, that even though the pre-defined handlers do not examine the
 response code, the response code and headers are always retrievable from
 the `HttpResponse`, when it is returned.

 

 In the second example, the function returns a different subscriber
 depending on the status code.
 {@snippet :
    HttpRequest request = HttpRequest.newBuilder()
        .uri(URI.create("http://www.foo.com/"))
        .build();
  BodyHandler bodyHandler = (rspInfo) -> rspInfo.statusCode() == 200
                      ? BodySubscribers.ofFile(Paths.get("/tmp/f"))
                      : BodySubscribers.replacing(Paths.get("/NULL"));
  client.sendAsync(request, bodyHandler)
        .thenApply(HttpResponse::body)
        .thenAccept(System.out::println); }

**参数**

- **the** — response body type

**参见**

- BodyHandlers

> *Since 11*
