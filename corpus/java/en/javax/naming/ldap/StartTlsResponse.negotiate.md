---
id: "java-en-function-starttlsresponse-negotiate"
language: "java"
lang: "en"
category: "function"
name: "StartTlsResponse.negotiate"
signature: "public abstract SSLSession negotiate() throws IOException"
title: "StartTlsResponse.negotiate"
directive: "method"
module: "java.naming/javax.naming.ldap"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.naming/javax/naming/ldap/StartTlsResponse.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# StartTlsResponse.negotiate

```java
public abstract SSLSession negotiate() throws IOException
```

Negotiates a TLS session using the default SSL socket factory.
 

 This method is equivalent to `negotiate(null)`.

**返回**

- The negotiated SSL session

**异常**

- **IOException** — If an IO error was encountered while establishing the TLS session.

**参见**

- #setEnabledCipherSuites
- #setHostnameVerifier
