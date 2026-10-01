---
id: "java-en-function-java-net-http-streamlimitexception"
language: "java"
lang: "en"
category: "function"
name: "java.net.http.StreamLimitException"
title: "StreamLimitException"
directive: "type"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/StreamLimitException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StreamLimitException

An exception raised when the limit imposed for stream creation on an
 HTTP connection is reached, and the client is unable to create a new
 stream.
 

 A `StreamLimitException` may be raised when attempting to send
 a new request on any `version()
 protocol version` that supports multiplexing on a single connection. Both
 `HTTP_2 HTTP/2` and `HTTP_3 HTTP/3` allow multiplexing concurrent requests
 to the same server on a single connection. Each request/response exchange
 is carried over a single stream, as defined by the corresponding
 protocol.
 

 Whether and when a `StreamLimitException` may be
 relayed to the code initiating a request/response exchange is
 implementation and protocol version dependent.

**参见**

- HttpClient#send(HttpRequest, BodyHandler)
- HttpClient#sendAsync(HttpRequest, BodyHandler)
- HttpClient#sendAsync(HttpRequest, BodyHandler, PushPromiseHandler)

> *Since 26*
