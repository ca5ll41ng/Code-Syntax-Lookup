---
id: "java-en-function-httprequest-equals"
language: "java"
lang: "en"
category: "function"
name: "HttpRequest.equals"
signature: "public final boolean equals(Object obj)"
title: "HttpRequest.equals"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpRequest.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpRequest.equals

```java
public final boolean equals(Object obj)
```

Tests this HTTP request instance for equality with the given object.

 

 If the given object is not an `HttpRequest` then this
 method returns `false`. Two HTTP requests are equal if their URI,
 method, and headers fields are all equal.

 

 This method satisfies the general contract of the `equals(Object) Object.equals` method.

**参数**

- **obj** — the object to which this object is to be compared

**返回**

- `true` if, and only if, the given object is an `HttpRequest` that is equal to this HTTP request
