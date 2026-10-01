---
id: "java-en-function-extendedsslsession-getrequestedservernames"
language: "java"
lang: "en"
category: "function"
name: "ExtendedSSLSession.getRequestedServerNames"
signature: "public List<SNIServerName> getRequestedServerNames()"
title: "ExtendedSSLSession.getRequestedServerNames"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/ExtendedSSLSession.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ExtendedSSLSession.getRequestedServerNames

```java
public List<SNIServerName> getRequestedServerNames()
```

Obtains a `List` containing all `SNIServerName`s
 of the requested Server Name Indication (SNI) extension.
 

 In server mode, unless the return `List` is empty,
 the server should use the requested server names to guide its
 selection of an appropriate authentication certificate, and/or
 other aspects of security policy.
 

 In client mode, unless the return `List` is empty,
 the client should use the requested server names to guide its
 endpoint identification of the peer's identity, and/or
 other aspects of security policy.

**返回**

- a non-null immutable list of `SNIServerName`s of the requested server name indications. The returned list may be empty if no server name indications were requested.

**异常**

- **UnsupportedOperationException** — if the underlying provider does not implement the operation

**参见**

- SNIServerName
- X509ExtendedTrustManager
- X509ExtendedKeyManager

> *Since 1.8*
