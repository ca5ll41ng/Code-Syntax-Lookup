---
id: "java-en-function-uri-getrawauthority"
language: "java"
lang: "en"
category: "function"
name: "URI.getRawAuthority"
signature: "public String getRawAuthority()"
title: "URI.getRawAuthority"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URI.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URI.getRawAuthority

```java
public String getRawAuthority()
```

Returns the raw authority component of this URI.

 

 The authority component of a URI, if defined, only contains the
 commercial-at character (`'@'`) and characters in the
 unreserved, punct, escaped, and other
 categories.  If the authority is server-based then it is further
 constrained to have valid user-information, host, and port
 components.

**返回**

- The raw authority component of this URI, or `null` if the authority is undefined
