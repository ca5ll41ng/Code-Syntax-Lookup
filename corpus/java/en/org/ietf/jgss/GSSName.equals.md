---
id: "java-en-function-gssname-equals"
language: "java"
lang: "en"
category: "function"
name: "GSSName.equals"
signature: "boolean equals(GSSName another) throws GSSException"
title: "GSSName.equals"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/GSSName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GSSName.equals

```java
boolean equals(GSSName another) throws GSSException
```

Compares two GSSName objects to determine if they refer to the
 same entity.

**参数**

- **another** — the GSSName to compare this name with

**返回**

- true if the two names contain at least one primitive element in common. If either of the names represents an anonymous entity, the method will return false.

**异常**

- **GSSException** — when the names cannot be compared, containing the following major error codes: `BAD_NAMETYPE GSSException.BAD_NAMETYPE`, `FAILURE GSSException.FAILURE`
