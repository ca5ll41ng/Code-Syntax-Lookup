---
id: "java-en-function-trustmanagerfactory-getinstance"
language: "java"
lang: "en"
category: "function"
name: "TrustManagerFactory.getInstance"
signature: "public static final TrustManagerFactory getInstance(String algorithm) throws NoSuchAlgorithmException"
title: "TrustManagerFactory.getInstance"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/TrustManagerFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TrustManagerFactory.getInstance

```java
public static final TrustManagerFactory getInstance(String algorithm) throws NoSuchAlgorithmException
```

Returns a TrustManagerFactory object that acts as a
 factory for trust managers.

 

 This method traverses the list of registered security Providers,
 starting with the most preferred Provider.
 A new TrustManagerFactory object encapsulating the
 TrustManagerFactorySpi implementation from the first
 Provider that supports the specified algorithm is returned.

 

 Note that the list of registered providers may be retrieved via
 the `getProviders` method.

 The JDK Reference Implementation additionally uses the
 `jdk.security.provider.preferred`
 `getProperty(String) Security` property to determine
 the preferred provider order for the specified algorithm. This
 may be different from the order of providers returned by
 `getProviders`.

**参数**

- **algorithm** — the standard name of the requested trust management algorithm.  See the TrustManagerFactory section in the Java Security Standard Algorithm Names Specification for information about standard algorithm names.

**返回**

- the new `TrustManagerFactory` object

**异常**

- **NoSuchAlgorithmException** — if no `Provider` supports a `TrustManagerFactorySpi` implementation for the specified algorithm
- **NullPointerException** — if `algorithm` is `null`

**参见**

- java.security.Provider
