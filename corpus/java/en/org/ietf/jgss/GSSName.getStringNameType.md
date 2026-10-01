---
id: "java-en-function-gssname-getstringnametype"
language: "java"
lang: "en"
category: "function"
name: "GSSName.getStringNameType"
signature: "Oid getStringNameType() throws GSSException"
title: "GSSName.getStringNameType"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/GSSName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GSSName.getStringNameType

```java
Oid getStringNameType() throws GSSException
```

Returns the name type of the printable
 representation of this name that can be obtained from the 
 toString method.

**返回**

- an Oid representing the namespace of the name returned from the toString method.

**异常**

- **GSSException** — containing the following major error codes: `FAILURE GSSException.FAILURE`
