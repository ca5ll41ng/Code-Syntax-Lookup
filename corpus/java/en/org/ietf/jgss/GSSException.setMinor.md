---
id: "java-en-function-gssexception-setminor"
language: "java"
lang: "en"
category: "function"
name: "GSSException.setMinor"
signature: "public void setMinor(int minorCode, String message)"
title: "GSSException.setMinor"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/GSSException.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GSSException.setMinor

```java
public void setMinor(int minorCode, String message)
```

Used by the exception thrower to set the mechanism
 level minor error code and its string explanation.  This is used by
 mechanism providers to indicate error details.

**参数**

- **minorCode** — the mechanism specific error code
- **message** — textual explanation of the mechanism error code

**参见**

- #getMinor
