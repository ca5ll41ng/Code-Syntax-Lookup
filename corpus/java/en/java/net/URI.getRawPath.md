---
id: "java-en-function-uri-getrawpath"
language: "java"
lang: "en"
category: "function"
name: "URI.getRawPath"
signature: "public String getRawPath()"
title: "URI.getRawPath"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URI.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URI.getRawPath

```java
public String getRawPath()
```

Returns the raw path component of this URI.

 

 The path component of a URI, if defined, only contains the slash
 character (`'/'`), the commercial-at character (`'@'`),
 and characters in the unreserved, punct, escaped,
 and other categories.

**返回**

- The path component of this URI, or `null` if the path is undefined
