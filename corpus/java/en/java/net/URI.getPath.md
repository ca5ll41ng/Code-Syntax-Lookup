---
id: "java-en-function-uri-getpath"
language: "java"
lang: "en"
category: "function"
name: "URI.getPath"
signature: "public String getPath()"
title: "URI.getPath"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URI.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URI.getPath

```java
public String getPath()
```

Returns the decoded path component of this URI.

 

 The string returned by this method is equal to that returned by the
 `getRawPath() getRawPath` method except that all sequences of
 escaped octets are decoded.

**返回**

- The decoded path component of this URI, or `null` if the path is undefined
