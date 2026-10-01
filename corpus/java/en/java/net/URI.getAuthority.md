---
id: "java-en-function-uri-getauthority"
language: "java"
lang: "en"
category: "function"
name: "URI.getAuthority"
signature: "public String getAuthority()"
title: "URI.getAuthority"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URI.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URI.getAuthority

```java
public String getAuthority()
```

Returns the decoded authority component of this URI.

 

 The string returned by this method is equal to that returned by the
 `getRawAuthority() getRawAuthority` method except that all
 sequences of escaped octets are decoded.

**返回**

- The decoded authority component of this URI, or `null` if the authority is undefined
