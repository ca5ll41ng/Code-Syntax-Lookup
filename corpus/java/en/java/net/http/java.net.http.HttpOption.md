---
id: "java-en-function-java-net-http-httpoption"
language: "java"
lang: "en"
category: "function"
name: "java.net.http.HttpOption"
title: "HttpOption"
directive: "type"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpOption.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpOption

This interface is used to provide additional request configuration
 option hints on how an HTTP request/response exchange should
 be carried out by the `HttpClient` implementation.
 Request configuration option hints can be provided to an
 `HttpRequest` with the `setOption(HttpOption, Object) HttpRequest.Builder
 setOption` method.

 

 Concrete instances of this class and its subclasses are immutable.

 In this version, the `HttpOption` interface is sealed and
 only allows the `H3_DISCOVERY` option. However, it could be
 extended in the future to support additional options.
 

 The `H3_DISCOVERY` option can be used to help the
 `HttpClient` decide how to select or establish an
 HTTP/3 connection through which to carry out an HTTP/3
 request/response exchange.

**参数**

- **The** — `type() type of the option value`

> *Since 26*
