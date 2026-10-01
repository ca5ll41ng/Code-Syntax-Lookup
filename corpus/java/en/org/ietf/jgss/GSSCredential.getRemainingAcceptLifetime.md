---
id: "java-en-function-gsscredential-getremainingacceptlifetime"
language: "java"
lang: "en"
category: "function"
name: "GSSCredential.getRemainingAcceptLifetime"
signature: "int getRemainingAcceptLifetime(Oid mech) throws GSSException"
title: "GSSCredential.getRemainingAcceptLifetime"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/GSSCredential.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GSSCredential.getRemainingAcceptLifetime

```java
int getRemainingAcceptLifetime(Oid mech) throws GSSException
```

Returns the lifetime in seconds for the credential to remain capable
 of accepting security contexts using the specified mechanism. This
 method queries the acceptor credential element that belongs to the
 specified mechanism.

**参数**

- **mech** — the Oid of the mechanism whose acceptor credential element should be queried.

**返回**

- the number of seconds remaining in the life of this credential element. A return value of `INDEFINITE_LIFETIME INDEFINITE_LIFETIME` indicates that the credential element does not expire.  A return value of 0 indicates that the credential element is already expired.

**异常**

- **GSSException** — containing the following major error codes: `BAD_MECH GSSException.BAD_MECH`, `FAILURE GSSException.FAILURE`
