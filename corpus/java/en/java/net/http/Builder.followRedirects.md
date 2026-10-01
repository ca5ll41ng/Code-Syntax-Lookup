---
id: "java-en-function-builder-followredirects"
language: "java"
lang: "en"
category: "function"
name: "Builder.followRedirects"
signature: "public Builder followRedirects(Redirect policy)"
title: "Builder.followRedirects"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpClient.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder.followRedirects

```java
public Builder followRedirects(Redirect policy)
```

Specifies whether requests will automatically follow redirects issued
 by the server.

 

 If this method is not invoked prior to `build()
 building`, then newly built clients will use a default redirection
 policy of `NEVER NEVER`.

**参数**

- **policy** — the redirection policy

**返回**

- this builder
