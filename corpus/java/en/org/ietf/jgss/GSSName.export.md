---
id: "java-en-function-gssname-export"
language: "java"
lang: "en"
category: "function"
name: "GSSName.export"
signature: "byte[] export() throws GSSException"
title: "GSSName.export"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/GSSName.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GSSName.export

```java
byte[] export() throws GSSException
```

Returns a canonical contiguous byte representation of a mechanism name
 (MN), suitable for direct, byte by byte comparison by authorization
 functions.  If the name is not an MN, implementations may throw a
 GSSException with the NAME_NOT_MN status code.  If an implementation
 chooses not to throw an exception, it should use some system specific
 default mechanism to canonicalize the name and then export
 it. Structurally, an exported name object consists of a header
 containing an OID identifying the mechanism that authenticated the
 name, and a trailer containing the name itself, where the syntax of
 the trailer is defined by the individual mechanism specification. The
 format of the header of the output buffer is specified in RFC 2743.

 The exported name is useful when used in large access control lists
 where the overhead of creating a GSSName object on each
 name and invoking the equals method on each name from the ACL may be
 prohibitive.

 Exported names may be re-imported by using the byte array factory
 method `createName(byte[], Oid)
 GSSManager.createName` and specifying the NT_EXPORT_NAME as the name
 type object identifier. The resulting GSSName name will
 also be a MN.

**返回**

- a byte[] containing the exported name. RFC 2743 defines the "Mechanism-Independent Exported Name Object Format" for these bytes.

**异常**

- **GSSException** — containing the following major error codes: `BAD_NAME GSSException.BAD_NAME`, `BAD_NAMETYPE GSSException.BAD_NAMETYPE`, `FAILURE GSSException.FAILURE`
