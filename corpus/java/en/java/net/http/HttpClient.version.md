---
id: "java-en-function-httpclient-version"
language: "java"
lang: "en"
category: "function"
name: "HttpClient.version"
signature: "public abstract HttpClient.Version version()"
title: "HttpClient.version"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpClient.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpClient.version

```java
public abstract HttpClient.Version version()
```

Returns the preferred HTTP protocol version for this client. The default
 value is `HTTP_2`

 The protocol version that the `HttpClient` eventually
 decides to use for a request is affected by various factors noted
 in `#ProtocolVersionSelection protocol version selection`
 section.

**返回**

- the HTTP protocol version requested
