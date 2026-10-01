---
id: "java-en-function-gssname-canonicalize"
language: "java"
lang: "en"
category: "function"
name: "GSSName.canonicalize"
signature: "GSSName canonicalize(Oid mech) throws GSSException"
title: "GSSName.canonicalize"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/GSSName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GSSName.canonicalize

```java
GSSName canonicalize(Oid mech) throws GSSException
```

Creates a name that is canonicalized for some
 mechanism.

**参数**

- **mech** — the oid for the mechanism for which the canonical form of the name is requested.

**返回**

- a GSSName that contains just one primitive element representing this name in a canonicalized form for the desired mechanism.

**异常**

- **GSSException** — containing the following major error codes: `BAD_MECH GSSException.BAD_MECH`, `BAD_NAMETYPE GSSException.BAD_NAMETYPE`, `BAD_NAME GSSException.BAD_NAME`, `FAILURE GSSException.FAILURE`
