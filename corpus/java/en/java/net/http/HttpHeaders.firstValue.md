---
id: "java-en-function-httpheaders-firstvalue"
language: "java"
lang: "en"
category: "function"
name: "HttpHeaders.firstValue"
signature: "public Optional<String> firstValue(String name)"
title: "HttpHeaders.firstValue"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpHeaders.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpHeaders.firstValue

```java
public Optional<String> firstValue(String name)
```

Returns an `Optional` containing the first header string value of
 the given named (and possibly multi-valued) header. If the header is not
 present, then the returned `Optional` is empty.

**参数**

- **name** — the header name

**返回**

- an `Optional` containing the first named header string value, if present
