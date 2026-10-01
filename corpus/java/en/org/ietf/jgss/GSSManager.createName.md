---
id: "java-en-function-gssmanager-createname"
language: "java"
lang: "en"
category: "function"
name: "GSSManager.createName"
signature: "public abstract GSSName createName(String nameStr, Oid nameType) throws GSSException"
title: "GSSManager.createName"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/GSSManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GSSManager.createName

```java
public abstract GSSName createName(String nameStr, Oid nameType) throws GSSException
```

Factory method to convert a string name from the
 specified namespace to a GSSName object. In general, the
 GSSName object created  will contain multiple
 representations of the name, one for each mechanism that is
 supported; two examples that are exceptions to this are when
 the namespace type parameter indicates NT_EXPORT_NAME or when the
 GSS-API implementation is not multi-mechanism. It is
 not recommended to use this method with a NT_EXPORT_NAME type because
 representing a previously exported name consisting of arbitrary bytes
 as a String might cause problems with character encoding schemes. In
 such cases it is recommended that the bytes be passed in directly to
 the overloaded form of this method `createName(byte[],
 Oid) createName`.

**参数**

- **nameStr** — the string representing a printable form of the name to create.
- **nameType** — the Oid specifying the namespace of the printable name supplied. null can be used to specify that a mechanism specific default printable syntax should be assumed by each mechanism that examines nameStr. It is not advisable to use the nametype NT_EXPORT_NAME with this method.

**返回**

- a GSSName representing the indicated principal

**异常**

- **GSSException** — containing the following major error codes: `BAD_NAMETYPE GSSException.BAD_NAMETYPE`, `BAD_NAME GSSException.BAD_NAME`, `BAD_MECH GSSException.BAD_MECH`, `FAILURE GSSException.FAILURE`

**参见**

- GSSName
- GSSName#NT_EXPORT_NAME
