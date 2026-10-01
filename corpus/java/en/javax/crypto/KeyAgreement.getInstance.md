---
id: "java-en-function-keyagreement-getinstance"
language: "java"
lang: "en"
category: "function"
name: "KeyAgreement.getInstance"
signature: "public static final KeyAgreement getInstance(String algorithm) throws NoSuchAlgorithmException"
title: "KeyAgreement.getInstance"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/KeyAgreement.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeyAgreement.getInstance

```java
public static final KeyAgreement getInstance(String algorithm) throws NoSuchAlgorithmException
```

Returns a `KeyAgreement` object that implements the
 specified key agreement algorithm.

 

 This method traverses the list of registered security providers,
 starting with the most preferred provider.
 A new `KeyAgreement` object encapsulating the
 `KeyAgreementSpi` implementation from the first
 provider that supports the specified algorithm is returned.

 

 Note that the list of registered providers may be retrieved via
 the `getProviders` method.

 The JDK Reference Implementation additionally uses the
 `jdk.security.provider.preferred`
 `getProperty(String) Security` property to determine
 the preferred provider order for the specified algorithm. This
 may be different from the order of providers returned by
 `getProviders`.

**参数**

- **algorithm** — the standard name of the requested key agreement algorithm. See the KeyAgreement section in the Java Security Standard Algorithm Names Specification for information about standard algorithm names.

**返回**

- the new `KeyAgreement` object

**异常**

- **NoSuchAlgorithmException** — if no `Provider` supports a `KeyAgreementSpi` implementation for the specified algorithm
- **NullPointerException** — if `algorithm` is `null`

**参见**

- java.security.Provider
