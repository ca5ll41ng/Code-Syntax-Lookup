---
id: "java-en-function-httpresponse-uri"
language: "java"
lang: "en"
category: "function"
name: "HttpResponse.uri"
signature: "public URI uri()"
title: "HttpResponse.uri"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpResponse.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpResponse.uri

```java
public URI uri()
```

Returns the `URI` that the response was received from. This may be
 different from the request `URI` if redirection occurred.

**返回**

- the URI of the response
