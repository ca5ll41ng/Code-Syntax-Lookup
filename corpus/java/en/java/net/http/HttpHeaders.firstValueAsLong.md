---
id: "java-en-function-httpheaders-firstvalueaslong"
language: "java"
lang: "en"
category: "function"
name: "HttpHeaders.firstValueAsLong"
signature: "public OptionalLong firstValueAsLong(String name)"
title: "HttpHeaders.firstValueAsLong"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpHeaders.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpHeaders.firstValueAsLong

```java
public OptionalLong firstValueAsLong(String name)
```

Returns an `OptionalLong` containing the first header string value
 of the named header field. If the header is not present, then the
 Optional is empty. If the header is present but contains a value that
 does not parse as a `Long` value, then an exception is thrown.

**参数**

- **name** — the header name

**返回**

- an `OptionalLong`

**异常**

- **NumberFormatException** — if a value is found, but does not parse as a Long
