---
id: "java-en-function-httpheaders-equals"
language: "java"
lang: "en"
category: "function"
name: "HttpHeaders.equals"
signature: "public final boolean equals(Object obj)"
title: "HttpHeaders.equals"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpHeaders.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpHeaders.equals

```java
public final boolean equals(Object obj)
```

Tests this HTTP headers instance for equality with the given object.

 

 If the given object is not an `HttpHeaders` then this
 method returns `false`. Two HTTP headers are equal if each
 of their corresponding `map() maps` are equal.

 

 This method satisfies the general contract of the `equals(Object) Object.equals` method.

**参数**

- **obj** — the object to which this object is to be compared

**返回**

- `true` if, and only if, the given object is an `HttpHeaders` that is equal to this HTTP headers
