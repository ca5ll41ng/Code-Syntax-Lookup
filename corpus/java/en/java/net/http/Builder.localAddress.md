---
id: "java-en-function-builder-localaddress"
language: "java"
lang: "en"
category: "function"
name: "Builder.localAddress"
signature: "default Builder localAddress(InetAddress localAddr)"
title: "Builder.localAddress"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpClient.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder.localAddress

```java
default Builder localAddress(InetAddress localAddr)
```

Binds the socket to this local address when creating
 connections for sending requests.

 

 If no local address is set or `null` is passed
 to this method then sockets created by the
 HTTP client will be bound to an automatically
 assigned socket address.

 

 Common usages of the `HttpClient` do not require
 this method to be called. Setting a local address, through this
 method, is only for advanced usages where users of the `HttpClient`
 require specific control on which network interface gets used
 for the HTTP communication. Callers of this method are expected to
 be aware of the networking configurations of the system where the
 `HttpClient` will be used and care should be taken to ensure the
 correct `localAddr` is passed. Failure to do so can result in
 requests sent through the `HttpClient` to fail.

 `UnsupportedOperationException`. `Builder`s obtained
 through `newBuilder` provide an implementation
 of this method that allows setting the local address.

**参数**

- **localAddr** — The local address of the socket. Can be null.

**返回**

- this builder

**异常**

- **UnsupportedOperationException** — if this builder doesn't support configuring a local address or if the passed `localAddr` is not supported by this `HttpClient` implementation.

> *Since 19*
