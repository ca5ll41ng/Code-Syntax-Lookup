---
id: "java-en-function-builder-sslcontext"
language: "java"
lang: "en"
category: "function"
name: "Builder.sslContext"
signature: "public Builder sslContext(SSLContext sslContext)"
title: "Builder.sslContext"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpClient.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder.sslContext

```java
public Builder sslContext(SSLContext sslContext)
```

Sets an `SSLContext`.

 

 If this method is not invoked prior to `build()
 building`, then newly built clients will use the `getDefault() default context`, which is normally adequate
 for client applications that do not need to specify protocols, or
 require client authentication.

**参数**

- **sslContext** — the SSLContext

**返回**

- this builder
