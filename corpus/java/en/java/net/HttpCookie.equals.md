---
id: "java-en-function-httpcookie-equals"
language: "java"
lang: "en"
category: "function"
name: "HttpCookie.equals"
signature: "public boolean equals(Object obj)"
title: "HttpCookie.equals"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/HttpCookie.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# HttpCookie.equals

```java
public boolean equals(Object obj)
```

Test the equality of two HTTP cookies.

 

 The result is `true` only if two cookies come from same domain
 (case-insensitive), have same name (case-insensitive), and have same path
 (case-sensitive).

**返回**

- `true` if two HTTP cookies equal to each other; otherwise, `false`
