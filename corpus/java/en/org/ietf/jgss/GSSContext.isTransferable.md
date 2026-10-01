---
id: "java-en-function-gsscontext-istransferable"
language: "java"
lang: "en"
category: "function"
name: "GSSContext.isTransferable"
signature: "boolean isTransferable() throws GSSException"
title: "GSSContext.isTransferable"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/GSSContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GSSContext.isTransferable

```java
boolean isTransferable() throws GSSException
```

Determines if the context is transferable to other processes
 through the use of the `export() export` method.  This call
 is only valid on fully established contexts.

**返回**

- true if this context can be exported, false otherwise.

**异常**

- **GSSException** — containing the following major error codes: `FAILURE GSSException.FAILURE`
