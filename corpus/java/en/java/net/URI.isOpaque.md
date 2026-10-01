---
id: "java-en-function-uri-isopaque"
language: "java"
lang: "en"
category: "function"
name: "URI.isOpaque"
signature: "public boolean isOpaque()"
title: "URI.isOpaque"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URI.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URI.isOpaque

```java
public boolean isOpaque()
```

Tells whether or not this URI is opaque.

 

 A URI is opaque if, and only if, it is absolute and its
 scheme-specific part does not begin with a slash character ('/').
 An opaque URI has a scheme, a scheme-specific part, and possibly
 a fragment; all other components are undefined.

**返回**

- `true` if, and only if, this URI is opaque
