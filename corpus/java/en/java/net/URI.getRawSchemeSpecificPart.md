---
id: "java-en-function-uri-getrawschemespecificpart"
language: "java"
lang: "en"
category: "function"
name: "URI.getRawSchemeSpecificPart"
signature: "public String getRawSchemeSpecificPart()"
title: "URI.getRawSchemeSpecificPart"
directive: "method"
module: "java.base/java.net"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/URI.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# URI.getRawSchemeSpecificPart

```java
public String getRawSchemeSpecificPart()
```

Returns the raw scheme-specific part of this URI.  The scheme-specific
 part is never undefined, though it may be empty.

 

 The scheme-specific part of a URI only contains legal URI
 characters.

**返回**

- The raw scheme-specific part of this URI (never `null`)
