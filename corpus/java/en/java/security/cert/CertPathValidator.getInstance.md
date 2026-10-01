---
id: "java-en-function-certpathvalidator-getinstance"
language: "java"
lang: "en"
category: "function"
name: "CertPathValidator.getInstance"
signature: "public static CertPathValidator getInstance(String algorithm) throws NoSuchAlgorithmException"
title: "CertPathValidator.getInstance"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertPathValidator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertPathValidator.getInstance

```java
public static CertPathValidator getInstance(String algorithm) throws NoSuchAlgorithmException
```

Returns a `CertPathValidator` object that implements the
 specified algorithm.

 

 This method traverses the list of registered security Providers,
 starting with the most preferred Provider.
 A new CertPathValidator object encapsulating the
 CertPathValidatorSpi implementation from the first
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

- **algorithm** — the name of the requested `CertPathValidator` algorithm. See the CertPathValidator section in the Java Security Standard Algorithm Names Specification for information about standard algorithm names.

**返回**

- a `CertPathValidator` object that implements the specified algorithm

**异常**

- **NoSuchAlgorithmException** — if no `Provider` supports a `CertPathValidatorSpi` implementation for the specified algorithm
- **NullPointerException** — if `algorithm` is `null`

**参见**

- java.security.Provider
