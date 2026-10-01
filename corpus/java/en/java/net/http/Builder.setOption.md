---
id: "java-en-function-builder-setoption"
language: "java"
lang: "en"
category: "function"
name: "Builder.setOption"
signature: "public default <T> Builder setOption(HttpOption<T> option, T value)"
title: "Builder.setOption"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpRequest.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder.setOption

```java
public default <T> Builder setOption(HttpOption<T> option, T value)
```

Provides request configuration option hints modeled as key value pairs
 to help an `HttpClient` implementation decide how the
 request/response exchange should be established or carried out.

 

 An `HttpClient` implementation may decide to ignore request
 configuration option hints, or fail the request, if provided with any
 option hints that it does not understand.
 

 If this method is invoked twice for the same `HttpOption
 request option`, any value previously provided to this builder for the
 corresponding option is replaced by the new value.
 If `null` is supplied as a value, any value previously
 provided is discarded.

 The default implementation of this method discards the provided option
 hint and does nothing.

 The JDK built-in implementation of the `HttpClient` understands the
 request option `H3_DISCOVERY` hint.

**参数**

- **option** — the request configuration option
- **value** — the request configuration option value (can be null)

**返回**

- this builder

**参见**

- HttpRequest#getOption(HttpOption)

> *Since 26*
