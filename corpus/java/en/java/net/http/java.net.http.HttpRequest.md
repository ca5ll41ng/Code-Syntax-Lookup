---
id: "java-en-function-java-net-http-httprequest"
language: "java"
lang: "en"
category: "function"
name: "java.net.http.HttpRequest"
title: "HttpRequest"
directive: "type"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpRequest.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpRequest

An HTTP request.

 

 An `HttpRequest` instance is built through an `HttpRequest`
 `HttpRequest.Builder builder`. An `HttpRequest` builder
 is obtained from one of the `newBuilder(URI) newBuilder`
 methods. A request's `URI`, headers, and body can be set. Request
 bodies are provided through a `BodyPublisher BodyPublisher` supplied
 to one of the `POST(BodyPublisher) POST`,
 `PUT(BodyPublisher) PUT` or
 `method(String,BodyPublisher) method` methods.
 Once all required parameters have been set in the builder, `build() build` will return the `HttpRequest`. Builders can be
 copied and modified many times in order to build multiple related requests
 that differ in some parameters.

 

 The following is an example of a GET request that prints the response
 body as a String:

 {@snippet :
   HttpClient client = HttpClient.newHttpClient();

   HttpRequest request = HttpRequest.newBuilder()
         .uri(URI.create("http://foo.com/"))
         .build();

   client.sendAsync(request, BodyHandlers.ofString())
         .thenApply(HttpResponse::body)
         .thenAccept(System.out::println)
         .join(); }

 

The class `BodyPublishers BodyPublishers` provides implementations
 of many common publishers. Alternatively, a custom `BodyPublisher`
 implementation can be used.

> *Since 11*
