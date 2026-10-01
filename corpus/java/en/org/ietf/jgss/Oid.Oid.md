---
id: "java-en-function-oid-oid"
language: "java"
lang: "en"
category: "function"
name: "Oid.Oid"
signature: "public Oid(String strOid) throws GSSException"
title: "Oid.Oid"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/Oid.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Oid.Oid

```java
public Oid(String strOid) throws GSSException
```

Constructs an Oid object from a string representation of its
 integer components.

**参数**

- **strOid** — the dot separated string representation of the oid. For instance, "1.2.840.113554.1.2.2".

**异常**

- **GSSException** — may be thrown when the string is incorrectly formatted
