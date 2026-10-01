---
id: "java-en-function-httprequest-hashcode"
language: "java"
lang: "en"
category: "function"
name: "HttpRequest.hashCode"
signature: "public final int hashCode()"
title: "HttpRequest.hashCode"
directive: "method"
module: "java.net.http/java.net.http"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpRequest.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpRequest.hashCode

```java
public final int hashCode()
```

Computes a hash code for this HTTP request instance.

 

 The hash code is based upon the HTTP request's URI, method, and
 header components, and satisfies the general contract of the
 `hashCode Object.hashCode` method.

**返回**

- the hash-code value for this HTTP request
