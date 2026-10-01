---
id: "java-en-function-gssexception-getmajor"
language: "java"
lang: "en"
category: "function"
name: "GSSException.getMajor"
signature: "public int getMajor()"
title: "GSSException.getMajor"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/GSSException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GSSException.getMajor

```java
public int getMajor()
```

Returns the GSS-API level major error code for the problem causing
 this exception to be thrown. Major error codes are
 defined at the mechanism independent GSS-API level in this
 class. Mechanism specific error codes that might provide more
 information are set as the minor error code.

**返回**

- int the GSS-API level major error code causing this exception

**参见**

- #getMajorString
- #getMinor
- #getMinorString
