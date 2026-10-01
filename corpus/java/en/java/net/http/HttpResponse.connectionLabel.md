---
id: "java-en-function-httpresponse-connectionlabel"
language: "java"
lang: "en"
category: "function"
name: "HttpResponse.connectionLabel"
signature: "default Optional<String> connectionLabel()"
title: "HttpResponse.connectionLabel"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpResponse.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpResponse.connectionLabel

```java
default Optional<String> connectionLabel()
```

{@return if present, a label identifying the connection on which the
 response was received}
 

 The format of the string is opaque, but the value is fixed and unique
 for any connection in the scope of the associated `HttpClient`
 instance.

 The default implementation of this method returns
 `empty`.

 Instances of `HttpResponse` returned by the JDK built-in
 implementation of `HttpClient` always return a non-empty value.

> *Since 25*
