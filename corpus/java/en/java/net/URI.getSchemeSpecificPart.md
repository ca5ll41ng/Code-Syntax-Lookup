---
id: "java-en-function-uri-getschemespecificpart"
language: "java"
lang: "en"
category: "function"
name: "URI.getSchemeSpecificPart"
signature: "public String getSchemeSpecificPart()"
title: "URI.getSchemeSpecificPart"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URI.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URI.getSchemeSpecificPart

```java
public String getSchemeSpecificPart()
```

Returns the decoded scheme-specific part of this URI.

 

 The string returned by this method is equal to that returned by the
 `getRawSchemeSpecificPart() getRawSchemeSpecificPart` method
 except that all sequences of escaped octets are decoded.

**返回**

- The decoded scheme-specific part of this URI (never `null`)
