---
id: "java-en-function-gsscredential-getusage"
language: "java"
lang: "en"
category: "function"
name: "GSSCredential.getUsage"
signature: "int getUsage() throws GSSException"
title: "GSSCredential.getUsage"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/GSSCredential.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GSSCredential.getUsage

```java
int getUsage() throws GSSException
```

Returns the credential usage mode. In other words, it
 tells us if this credential can be used for initiating or accepting
 security contexts. It does not tell us which mechanism(s) has to be
 used in order to do so. It is expected that an application will allow
 the GSS-API to pick a default mechanism after calling this method.

**返回**

- The return value will be one of `INITIATE_ONLY INITIATE_ONLY`, `ACCEPT_ONLY ACCEPT_ONLY`, and `INITIATE_AND_ACCEPT INITIATE_AND_ACCEPT`.

**异常**

- **GSSException** — containing the following major error codes: `FAILURE GSSException.FAILURE`
