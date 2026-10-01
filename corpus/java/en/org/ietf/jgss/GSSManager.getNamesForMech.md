---
id: "java-en-function-gssmanager-getnamesformech"
language: "java"
lang: "en"
category: "function"
name: "GSSManager.getNamesForMech"
signature: "public abstract Oid[] getNamesForMech(Oid mech) throws GSSException"
title: "GSSManager.getNamesForMech"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/GSSManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GSSManager.getNamesForMech

```java
public abstract Oid[] getNamesForMech(Oid mech) throws GSSException
```

Returns then name types supported by the indicated mechanism.

 The default GSSManager instance includes support for the Kerberos v5
 mechanism. When this mechanism ("1.2.840.113554.1.2.2") is indicated,
 the returned list will contain at least the following nametypes:
 `NT_HOSTBASED_SERVICE GSSName.NT_HOSTBASED_SERVICE`,
 `NT_EXPORT_NAME GSSName.NT_EXPORT_NAME`, and the
 Kerberos v5 specific Oid "1.2.840.113554.1.2.2.1". The namespace for
 the Oid "1.2.840.113554.1.2.2.1" is defined in RFC 1964.

**参数**

- **mech** — the Oid of the mechanism to query

**返回**

- an array of Oid objects corresponding to the name types that the mechanism supports.

**异常**

- **GSSException** — containing the following major error codes: `BAD_MECH GSSException.BAD_MECH` `FAILURE GSSException.FAILURE`

**参见**

- #getMechsForName(Oid)
