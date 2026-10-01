---
id: "java-en-function-oid-getder"
language: "java"
lang: "en"
category: "function"
name: "Oid.getDER"
signature: "public byte[] getDER() throws GSSException"
title: "Oid.getDER"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/Oid.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Oid.getDER

```java
public byte[] getDER() throws GSSException
```

Returns the full ASN.1 DER encoding for this oid object, which
 includes the tag and length.

**返回**

- byte array containing the DER encoding of this oid object.

**异常**

- **GSSException** — may be thrown when the oid can't be encoded
