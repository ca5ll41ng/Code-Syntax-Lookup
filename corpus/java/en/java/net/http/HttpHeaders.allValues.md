---
id: "java-en-function-httpheaders-allvalues"
language: "java"
lang: "en"
category: "function"
name: "HttpHeaders.allValues"
signature: "public List<String> allValues(String name)"
title: "HttpHeaders.allValues"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpHeaders.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpHeaders.allValues

```java
public List<String> allValues(String name)
```

Returns an unmodifiable List of all of the header string values of the
 given named header. Always returns a List, which may be empty if the
 header is not present.

**参数**

- **name** — the header name

**返回**

- a List of headers string values
