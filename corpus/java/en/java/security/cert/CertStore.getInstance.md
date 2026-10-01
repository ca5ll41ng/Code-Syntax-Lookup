---
id: "java-en-function-certstore-getinstance"
language: "java"
lang: "en"
category: "function"
name: "CertStore.getInstance"
signature: "public static CertStore getInstance(String type, CertStoreParameters params) throws InvalidAlgorithmParameterException, NoSuchAlgorithmException"
title: "CertStore.getInstance"
directive: "method"
module: "java.base/java.security.cert"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/cert/CertStore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# CertStore.getInstance

```java
public static CertStore getInstance(String type, CertStoreParameters params) throws InvalidAlgorithmParameterException, NoSuchAlgorithmException
```

Returns a `CertStore` object that implements the specified
 `CertStore` type and is initialized with the specified
 parameters.

 

 This method traverses the list of registered security Providers,
 starting with the most preferred Provider.
 A new CertStore object encapsulating the
 CertStoreSpi implementation from the first
 Provider that supports the specified type is returned.

 

 Note that the list of registered providers may be retrieved via
 the `getProviders` method.

 

The `CertStore` that is returned is initialized with the
 specified `CertStoreParameters`. The type of parameters
 needed may vary between different types of `CertStore`s.
 Note that the specified `CertStoreParameters` object is
 cloned.

 The JDK Reference Implementation additionally uses the
 `jdk.security.provider.preferred`
 `getProperty(String) Security` property to determine
 the preferred provider order for the specified algorithm. This
 may be different from the order of providers returned by
 `getProviders`.

**参数**

- **type** — the name of the requested `CertStore` type. See the CertStore section in the Java Security Standard Algorithm Names Specification for information about standard types.
- **params** — the initialization parameters (may be `null`).

**返回**

- a `CertStore` object that implements the specified `CertStore` type

**异常**

- **InvalidAlgorithmParameterException** — if the specified initialization parameters are inappropriate for this `CertStore`
- **NoSuchAlgorithmException** — if no `Provider` supports a `CertStoreSpi` implementation for the specified type
- **NullPointerException** — if `type` is `null`

**参见**

- java.security.Provider
