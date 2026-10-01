---
id: "java-en-function-starttlsresponse-setenabledciphersuites"
language: "java"
lang: "en"
category: "function"
name: "StartTlsResponse.setEnabledCipherSuites"
signature: "public abstract void setEnabledCipherSuites(String[] suites)"
title: "StartTlsResponse.setEnabledCipherSuites"
directive: "method"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/StartTlsResponse.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StartTlsResponse.setEnabledCipherSuites

```java
public abstract void setEnabledCipherSuites(String[] suites)
```

Overrides the default list of cipher suites enabled for use on the
 TLS connection. The cipher suites must have already been listed by
 `SSLSocketFactory.getSupportedCipherSuites()` as being supported.
 Even if a suite has been enabled, it still might not be used because
 the peer does not support it, or because the requisite certificates
 (and private keys) are not available.

**参数**

- **suites** — The non-null list of names of all the cipher suites to enable.

**参见**

- #negotiate
