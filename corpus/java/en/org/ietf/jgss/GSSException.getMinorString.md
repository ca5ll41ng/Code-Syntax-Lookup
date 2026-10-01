---
id: "java-en-function-gssexception-getminorstring"
language: "java"
lang: "en"
category: "function"
name: "GSSException.getMinorString"
signature: "public String getMinorString()"
title: "GSSException.getMinorString"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/GSSException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GSSException.getMinorString

```java
public String getMinorString()
```

Returns a string explaining the mechanism specific error code.
 If the minor status code is 0, then no mechanism level error details
 will be available.

**返回**

- String a textual explanation of mechanism error code

**参见**

- #getMinor
- #getMajorString
- #toString
