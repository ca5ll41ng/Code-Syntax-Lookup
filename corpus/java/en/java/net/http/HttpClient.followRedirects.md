---
id: "java-en-function-httpclient-followredirects"
language: "java"
lang: "en"
category: "function"
name: "HttpClient.followRedirects"
signature: "public abstract Redirect followRedirects()"
title: "HttpClient.followRedirects"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpClient.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpClient.followRedirects

```java
public abstract Redirect followRedirects()
```

Returns the follow redirects policy for this client. The default value
 for client's built by builders that do not specify a redirect policy is
 `NEVER NEVER`.

**返回**

- this client's follow redirects setting
