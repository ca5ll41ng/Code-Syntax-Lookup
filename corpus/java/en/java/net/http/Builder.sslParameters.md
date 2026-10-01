---
id: "java-en-function-builder-sslparameters"
language: "java"
lang: "en"
category: "function"
name: "Builder.sslParameters"
signature: "public Builder sslParameters(SSLParameters sslParameters)"
title: "Builder.sslParameters"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpClient.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder.sslParameters

```java
public Builder sslParameters(SSLParameters sslParameters)
```

Sets an `SSLParameters`.

 

 If this method is not invoked prior to `build()
 building`, then newly built clients will use a default,
 implementation specific, set of parameters.

 

 Some parameters which are used internally by the HTTP Client
 implementation (such as the application protocol list) should not be
 set by callers, as they may be ignored. The contents of the given
 object are copied.

**参数**

- **sslParameters** — the SSLParameters

**返回**

- this builder
