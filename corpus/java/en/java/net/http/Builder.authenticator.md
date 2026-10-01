---
id: "java-en-function-builder-authenticator"
language: "java"
lang: "en"
category: "function"
name: "Builder.authenticator"
signature: "public Builder authenticator(Authenticator authenticator)"
title: "Builder.authenticator"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpClient.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder.authenticator

```java
public Builder authenticator(Authenticator authenticator)
```

Sets an authenticator to use for HTTP authentication.

 In the JDK built-in implementation of the `HttpClient`,
 if a `HttpRequest` has an `Authorization` or `Proxy-Authorization` header set then its value is used and
 the `Authenticator` is not invoked for the corresponding
 authentication. In this case, any authentication errors are returned
 to the user and requests are not automatically retried.
 Additionally, the JDK built-in implementation currently only supports HTTP
 `Basic` authentication.

**参数**

- **authenticator** — the Authenticator

**返回**

- this builder
