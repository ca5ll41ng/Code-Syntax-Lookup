---
id: "java-en-function-java-net-http-httprequest-builder"
language: "java"
lang: "en"
category: "function"
name: "java.net.http.HttpRequest.Builder"
title: "Builder"
directive: "type"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpRequest.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder

A builder of `HttpRequest HTTP requests`.

 

 Instances of `HttpRequest.Builder` are created by calling
 `newBuilder`, `newBuilder`,
 or `newBuilder`.

 

 The builder can be used to configure per-request state, such as: the
 request URI, the request method (default is GET unless explicitly set),
 specific request headers, etc. Each of the setter methods modifies the
 state of the builder and returns the same instance. The methods are not
 synchronized and should not be called from multiple threads without
 external synchronization. The `build() build` method returns a new
 `HttpRequest` each time it is invoked. Once built an `HttpRequest` is immutable, and can be sent multiple times.

 

 Note, that not all request headers may be set by user code. Some are
 restricted for security reasons and others such as the headers relating
 to authentication, redirection and cookie management may be managed by
 specific APIs rather than through directly user set headers.

> *Since 11*
