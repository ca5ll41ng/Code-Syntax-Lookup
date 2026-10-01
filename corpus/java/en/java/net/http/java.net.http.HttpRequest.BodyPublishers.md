---
id: "java-en-function-java-net-http-httprequest-bodypublishers"
language: "java"
lang: "en"
category: "function"
name: "java.net.http.HttpRequest.BodyPublishers"
title: "BodyPublishers"
directive: "type"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpRequest.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BodyPublishers

Implementations of `BodyPublisher BodyPublisher` that implement
 various useful publishers, such as publishing the request body from a
 String, or from a file.

 

 The following are examples of using the predefined body publishers to
 convert common high-level Java objects into a flow of data suitable for
 sending as a request body:

 {@snippet :
   // Request body from a String
   HttpRequest request = HttpRequest.newBuilder()
        .uri(URI.create("https://foo.com/"))
        .header("Content-Type", "text/plain; charset=UTF-8")
        .POST(BodyPublishers.ofString("some body text"))
        .build(); }

 {@snippet :
   // Request body from a File
   HttpRequest request = HttpRequest.newBuilder()
        .uri(URI.create("https://foo.com/"))
        .header("Content-Type", "application/json")
        .POST(BodyPublishers.ofFile(Paths.get("file.json")))
        .build(); }

 {@snippet :
   // Request body from a byte array
   HttpRequest request = HttpRequest.newBuilder()
        .uri(URI.create("https://foo.com/"))
        .POST(BodyPublishers.ofByteArray(new byte[] { ... }))
        .build(); }

> *Since 11*
