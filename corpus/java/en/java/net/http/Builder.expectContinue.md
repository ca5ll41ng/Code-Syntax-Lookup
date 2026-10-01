---
id: "java-en-function-builder-expectcontinue"
language: "java"
lang: "en"
category: "function"
name: "Builder.expectContinue"
signature: "public Builder expectContinue(boolean enable)"
title: "Builder.expectContinue"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpRequest.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder.expectContinue

```java
public Builder expectContinue(boolean enable)
```

Requests the server to acknowledge the request before sending the
 body. This is disabled by default. If enabled, the server is
 requested to send an error response or a `100 Continue`
 response before the client sends the request body. This means the
 request publisher for the request will not be invoked until this
 interim response is received.

**参数**

- **enable** — `true` if Expect continue to be sent

**返回**

- this builder
