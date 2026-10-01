---
id: "java-en-function-httpclient-connecttimeout"
language: "java"
lang: "en"
category: "function"
name: "HttpClient.connectTimeout"
signature: "public abstract Optional<Duration> connectTimeout()"
title: "HttpClient.connectTimeout"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpClient.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpClient.connectTimeout

```java
public abstract Optional<Duration> connectTimeout()
```

Returns an `Optional` containing the connect timeout duration
 for this client. If the `connectTimeout(Duration)
 connect timeout duration` was not set in the client's builder, then the
 `Optional` is empty.

**返回**

- an `Optional` containing this client's connect timeout duration
