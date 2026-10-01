---
id: "java-en-function-uri-getscheme"
language: "java"
lang: "en"
category: "function"
name: "URI.getScheme"
signature: "public String getScheme()"
title: "URI.getScheme"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URI.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URI.getScheme

```java
public String getScheme()
```

Returns the scheme component of this URI.

 

 The scheme component of a URI, if defined, only contains characters
 in the alphanum category and in the string `"-.+"`.  A
 scheme always starts with an alpha character. 

 The scheme component of a URI cannot contain escaped octets, hence this
 method does not perform any decoding.

**返回**

- The scheme component of this URI, or `null` if the scheme is undefined
