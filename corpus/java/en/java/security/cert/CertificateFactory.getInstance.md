---
id: "java-en-function-certificatefactory-getinstance"
language: "java"
lang: "en"
category: "function"
name: "CertificateFactory.getInstance"
signature: "public static final CertificateFactory getInstance(String type) throws CertificateException"
title: "CertificateFactory.getInstance"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertificateFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertificateFactory.getInstance

```java
public static final CertificateFactory getInstance(String type) throws CertificateException
```

Returns a certificate factory object that implements the
 specified certificate type.

 

 This method traverses the list of registered security Providers,
 starting with the most preferred Provider.
 A new CertificateFactory object encapsulating the
 CertificateFactorySpi implementation from the first
 Provider that supports the specified type is returned.

 

 Note that the list of registered providers may be retrieved via
 the `getProviders` method.

 The JDK Reference Implementation additionally uses the
 `jdk.security.provider.preferred`
 `getProperty(String) Security` property to determine
 the preferred provider order for the specified algorithm. This
 may be different from the order of providers returned by
 `getProviders`.

**参数**

- **type** — the name of the requested certificate type. See the CertificateFactory section in the Java Security Standard Algorithm Names Specification for information about standard certificate types.

**返回**

- a certificate factory object for the specified type

**异常**

- **CertificateException** — if no `Provider` supports a `CertificateFactorySpi` implementation for the specified type
- **NullPointerException** — if `type` is `null`

**参见**

- java.security.Provider
