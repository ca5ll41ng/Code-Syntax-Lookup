---
id: "java-en-function-httpcookie-hashcode"
language: "java"
lang: "en"
category: "function"
name: "HttpCookie.hashCode"
signature: "public int hashCode()"
title: "HttpCookie.hashCode"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/HttpCookie.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpCookie.hashCode

```java
public int hashCode()
```

Returns the hash code of this HTTP cookie. The result is the sum of
 hash code value of three significant components of this cookie: name,
 domain, and path. That is, the hash code is the value of the expression:
 
 getName().toLowerCase().hashCode()

 + getDomain().toLowerCase().hashCode()

 + getPath().hashCode()

**返回**

- this HTTP cookie's hash code
