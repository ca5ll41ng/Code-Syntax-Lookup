---
id: "java-en-function-gssmanager-getmechsforname"
language: "java"
lang: "en"
category: "function"
name: "GSSManager.getMechsForName"
signature: "public abstract Oid[] getMechsForName(Oid nameType)"
title: "GSSManager.getMechsForName"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/GSSManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GSSManager.getMechsForName

```java
public abstract Oid[] getMechsForName(Oid nameType)
```

Returns a list of mechanisms that support the indicated name type.

 The Kerberos v5 mechanism ("1.2.840.113554.1.2.2") will always be
 returned in this list when the indicated nametype is one of
 `NT_HOSTBASED_SERVICE GSSName.NT_HOSTBASED_SERVICE`,
 `NT_EXPORT_NAME GSSName.NT_EXPORT_NAME`, or
 "1.2.840.113554.1.2.2.1".

**参数**

- **nameType** — the Oid of the name type to look for

**返回**

- an array of Oid objects corresponding to the mechanisms that support the specified name type.  null is returned when no mechanisms are found to support the specified name type.

**参见**

- #getNamesForMech(Oid)
