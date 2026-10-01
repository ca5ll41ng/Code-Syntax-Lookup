---
id: "java-en-function-gsscredential-dispose"
language: "java"
lang: "en"
category: "function"
name: "GSSCredential.dispose"
signature: "void dispose() throws GSSException"
title: "GSSCredential.dispose"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/GSSCredential.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GSSCredential.dispose

```java
void dispose() throws GSSException
```

Releases any sensitive information that the GSSCredential object may
 be containing.  Applications should call this method as soon as the
 credential is no longer needed to minimize the time any sensitive
 information is maintained.

**异常**

- **GSSException** — containing the following major error codes: `FAILURE GSSException.FAILURE`
