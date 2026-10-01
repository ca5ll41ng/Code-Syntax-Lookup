---
id: "java-en-function-java-net-http-httpresponse"
language: "java"
lang: "en"
category: "function"
name: "java.net.http.HttpResponse"
title: "HttpResponse"
directive: "type"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpResponse.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpResponse

An HTTP response.

 

 An `HttpResponse` is not created directly, but rather returned as
 a result of sending an `HttpRequest`. An `HttpResponse` is
 made available when the response status code and headers have been received,
 and typically after the response body has also been completely received.
 Whether or not the `HttpResponse` is made available before the response
 body has been completely received depends on the `BodyHandler
 BodyHandler` provided when sending the `HttpRequest`.

 

 This class provides methods for accessing the response status code,
 headers, the response body, and the `HttpRequest` corresponding
 to this response.

 

 The following is an example of retrieving a response as a String:

 {@snippet :
     HttpResponse response = client
       .send(request, BodyHandlers.ofString()); }

 

 The class `BodyHandlers BodyHandlers` provides implementations
 of many common response handlers. Alternatively, a custom `BodyHandler`
 implementation can be used.

**参数**

- **the** — response body type

> *Since 11*
