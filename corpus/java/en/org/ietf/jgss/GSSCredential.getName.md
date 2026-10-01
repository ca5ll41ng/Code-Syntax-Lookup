---
id: "java-en-function-gsscredential-getname"
language: "java"
lang: "en"
category: "function"
name: "GSSCredential.getName"
signature: "GSSName getName() throws GSSException"
title: "GSSCredential.getName"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/GSSCredential.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GSSCredential.getName

```java
GSSName getName() throws GSSException
```

Retrieves the name of the entity that the credential asserts.

**返回**

- a GSSName representing the entity

**异常**

- **GSSException** — containing the following major error codes: `FAILURE GSSException.FAILURE`
