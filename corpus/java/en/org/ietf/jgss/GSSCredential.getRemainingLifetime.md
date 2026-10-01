---
id: "java-en-function-gsscredential-getremaininglifetime"
language: "java"
lang: "en"
category: "function"
name: "GSSCredential.getRemainingLifetime"
signature: "int getRemainingLifetime() throws GSSException"
title: "GSSCredential.getRemainingLifetime"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/GSSCredential.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GSSCredential.getRemainingLifetime

```java
int getRemainingLifetime() throws GSSException
```

Returns the remaining lifetime in seconds for a credential.  The
 remaining lifetime is the minimum lifetime amongst all the underlying
 mechanism specific credential elements.

**返回**

- the minimum remaining lifetime in seconds for this credential. A return value of `INDEFINITE_LIFETIME INDEFINITE_LIFETIME` indicates that the credential does not expire. A return value of 0 indicates that the credential is already expired.

**异常**

- **GSSException** — containing the following major error codes: `FAILURE GSSException.FAILURE`

**参见**

- #getRemainingInitLifetime(Oid)
- #getRemainingAcceptLifetime(Oid)
