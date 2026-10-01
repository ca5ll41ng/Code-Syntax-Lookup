---
id: "java-en-function-gssmanager-createcredential"
language: "java"
lang: "en"
category: "function"
name: "GSSManager.createCredential"
signature: "public abstract GSSCredential createCredential (int usage) throws GSSException"
title: "GSSManager.createCredential"
directive: "method"
module: "java.security.jgss/org.ietf.jgss"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.security.jgss/org/ietf/jgss/GSSManager.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# GSSManager.createCredential

```java
public abstract GSSCredential createCredential (int usage) throws GSSException
```

Factory method for acquiring default credentials.  This will cause
 the GSS-API to use system specific defaults for the set of mechanisms,
 name, and lifetime.

**参数**

- **usage** — The intended usage for this credential object. The value of this parameter must be one of: `INITIATE_AND_ACCEPT GSSCredential.INITIATE_AND_ACCEPT`, `ACCEPT_ONLY GSSCredential.ACCEPT_ONLY`, and `INITIATE_ONLY GSSCredential.INITIATE_ONLY`.

**返回**

- a GSSCredential of the requested type.

**异常**

- **GSSException** — containing the following major error codes: `BAD_MECH GSSException.BAD_MECH`, `BAD_NAMETYPE GSSException.BAD_NAMETYPE`, `BAD_NAME GSSException.BAD_NAME`, `CREDENTIALS_EXPIRED GSSException.CREDENTIALS_EXPIRED`, `NO_CRED GSSException.NO_CRED`, `FAILURE GSSException.FAILURE`

**参见**

- GSSCredential
