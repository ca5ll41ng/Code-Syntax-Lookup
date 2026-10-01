---
id: "java-en-function-ldapcertstoreparameters-ldapcertstoreparameters"
language: "java"
lang: "en"
category: "function"
name: "LDAPCertStoreParameters.LDAPCertStoreParameters"
signature: "public LDAPCertStoreParameters(String serverName, int port)"
title: "LDAPCertStoreParameters.LDAPCertStoreParameters"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/LDAPCertStoreParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LDAPCertStoreParameters.LDAPCertStoreParameters

```java
public LDAPCertStoreParameters(String serverName, int port)
```

Creates an instance of `LDAPCertStoreParameters` with the
 specified parameter values.

**参数**

- **serverName** — the DNS name of the LDAP server
- **port** — the port number of the LDAP server

**异常**

- **NullPointerException** — if `serverName` is `null`
