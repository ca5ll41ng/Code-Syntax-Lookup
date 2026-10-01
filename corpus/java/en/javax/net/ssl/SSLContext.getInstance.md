---
id: "java-en-function-sslcontext-getinstance"
language: "java"
lang: "en"
category: "function"
name: "SSLContext.getInstance"
signature: "public static SSLContext getInstance(String protocol) throws NoSuchAlgorithmException"
title: "SSLContext.getInstance"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/SSLContext.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SSLContext.getInstance

```java
public static SSLContext getInstance(String protocol) throws NoSuchAlgorithmException
```

Returns a `SSLContext` object that implements the
 specified secure socket protocol.

 

 This method traverses the list of registered security Providers,
 starting with the most preferred Provider.
 A new SSLContext object encapsulating the
 SSLContextSpi implementation from the first
 Provider that supports the specified protocol is returned.

 

 Note that the list of registered providers may be retrieved via
 the `getProviders` method.

 The JDK Reference Implementation additionally uses the
 `jdk.security.provider.preferred`
 `getProperty(String) Security` property to determine
 the preferred provider order for the specified algorithm. This
 may be different from the order of providers returned by
 `getProviders`.

**参数**

- **protocol** — the standard name of the requested protocol. See the SSLContext section in the Java Security Standard Algorithm Names Specification for information about standard protocol names.

**返回**

- the new `SSLContext` object

**异常**

- **NoSuchAlgorithmException** — if no `Provider` supports a `SSLContextSpi` implementation for the specified protocol
- **NullPointerException** — if `protocol` is `null`

**参见**

- java.security.Provider
