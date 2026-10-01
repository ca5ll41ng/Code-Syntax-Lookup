---
id: "java-en-function-gsscredential-getmechs"
language: "java"
lang: "en"
category: "function"
name: "GSSCredential.getMechs"
signature: "Oid[] getMechs() throws GSSException"
title: "GSSCredential.getMechs"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/GSSCredential.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GSSCredential.getMechs

```java
Oid[] getMechs() throws GSSException
```

Returns a list of mechanisms supported by this credential. It does
 not tell us which ones can be used to initiate
 contexts and which ones can be used to accept contexts. The
 application must call the `getUsage(Oid) getUsage` method with
 each of the returned Oid's to determine the possible modes of
 usage.

**返回**

- an array of Oid's corresponding to the supported mechanisms.

**异常**

- **GSSException** — containing the following major error codes: `FAILURE GSSException.FAILURE`
