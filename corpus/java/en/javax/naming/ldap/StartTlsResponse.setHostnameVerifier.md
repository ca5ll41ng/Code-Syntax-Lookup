---
id: "java-en-function-starttlsresponse-sethostnameverifier"
language: "java"
lang: "en"
category: "function"
name: "StartTlsResponse.setHostnameVerifier"
signature: "public abstract void setHostnameVerifier(HostnameVerifier verifier)"
title: "StartTlsResponse.setHostnameVerifier"
directive: "method"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/StartTlsResponse.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StartTlsResponse.setHostnameVerifier

```java
public abstract void setHostnameVerifier(HostnameVerifier verifier)
```

Sets the hostname verifier used by `negotiate()`
 after the TLS handshake has completed and the default hostname
 verification has failed.
 `setHostnameVerifier()` must be called before
 `negotiate()` is invoked for it to have effect.
 If called after
 `negotiate()`, this method does not do anything.

**参数**

- **verifier** — The non-null hostname verifier callback.

**参见**

- #negotiate
