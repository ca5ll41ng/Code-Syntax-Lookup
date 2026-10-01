---
id: "java-en-function-bodyhandler-apply"
language: "java"
lang: "en"
category: "function"
name: "BodyHandler.apply"
signature: "public BodySubscriber<T> apply(ResponseInfo responseInfo)"
title: "BodyHandler.apply"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpResponse.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# BodyHandler.apply

```java
public BodySubscriber<T> apply(ResponseInfo responseInfo)
```

Returns a `BodySubscriber BodySubscriber` considering the
 given response status code and headers. This method is invoked before
 the actual response body bytes are read and its implementation must
 return a `BodySubscriber BodySubscriber` to consume the response
 body bytes.

 

 The response body can be discarded using one of `discarding() discarding` or `replacing(Object) replacing`.

**参数**

- **responseInfo** — the response info

**返回**

- a body subscriber
