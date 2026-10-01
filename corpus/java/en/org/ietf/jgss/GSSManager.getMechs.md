---
id: "java-en-function-gssmanager-getmechs"
language: "java"
lang: "en"
category: "function"
name: "GSSManager.getMechs"
signature: "public abstract Oid[] getMechs()"
title: "GSSManager.getMechs"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/GSSManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GSSManager.getMechs

```java
public abstract Oid[] getMechs()
```

Returns a list of mechanisms that are available to GSS-API callers
 through this GSSManager. The default GSSManager obtained from the
 `getInstance` method includes the Oid
 "1.2.840.113554.1.2.2" in its list. This Oid identifies the Kerberos
 v5 GSS-API mechanism that is defined in RFC 1964.

**返回**

- an array of Oid objects corresponding to the mechanisms that are available. A null value is returned when no mechanism are available (an example of this would be when mechanism are dynamically configured, and currently no mechanisms are installed).
