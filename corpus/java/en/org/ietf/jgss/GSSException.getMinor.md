---
id: "java-en-function-gssexception-getminor"
language: "java"
lang: "en"
category: "function"
name: "GSSException.getMinor"
signature: "public int getMinor()"
title: "GSSException.getMinor"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/GSSException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GSSException.getMinor

```java
public int getMinor()
```

Returns the mechanism level error code for the problem causing this
 exception to be thrown. The minor code is set by the underlying
 mechanism.

**返回**

- int the mechanism error code; 0 indicates that it has not been set.

**参见**

- #getMinorString
- #setMinor
