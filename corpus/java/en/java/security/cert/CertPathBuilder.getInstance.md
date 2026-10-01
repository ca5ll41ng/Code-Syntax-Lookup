---
id: "java-en-function-certpathbuilder-getinstance"
language: "java"
lang: "en"
category: "function"
name: "CertPathBuilder.getInstance"
signature: "public static CertPathBuilder getInstance(String algorithm) throws NoSuchAlgorithmException"
title: "CertPathBuilder.getInstance"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertPathBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertPathBuilder.getInstance

```java
public static CertPathBuilder getInstance(String algorithm) throws NoSuchAlgorithmException
```

Returns a `CertPathBuilder` object that implements the
 specified algorithm.

 

 This method traverses the list of registered security Providers,
 starting with the most preferred Provider.
 A new CertPathBuilder object encapsulating the
 CertPathBuilderSpi implementation from the first
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

- **algorithm** — the name of the requested `CertPathBuilder` algorithm.  See the CertPathBuilder section in the Java Security Standard Algorithm Names Specification for information about standard algorithm names.

**返回**

- a `CertPathBuilder` object that implements the specified algorithm

**异常**

- **NoSuchAlgorithmException** — if no `Provider` supports a `CertPathBuilderSpi` implementation for the specified algorithm
- **NullPointerException** — if `algorithm` is `null`

**参见**

- java.security.Provider
