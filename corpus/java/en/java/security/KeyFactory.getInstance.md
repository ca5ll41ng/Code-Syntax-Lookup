---
id: "java-en-function-keyfactory-getinstance"
language: "java"
lang: "en"
category: "function"
name: "KeyFactory.getInstance"
signature: "public static KeyFactory getInstance(String algorithm) throws NoSuchAlgorithmException"
title: "KeyFactory.getInstance"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeyFactory.getInstance

```java
public static KeyFactory getInstance(String algorithm) throws NoSuchAlgorithmException
```

Returns a `KeyFactory` object that converts
 public/private keys of the specified algorithm.

 

 This method traverses the list of registered security providers,
 starting with the most preferred provider.
 A new `KeyFactory` object encapsulating the
 `KeyFactorySpi` implementation from the first
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

- **algorithm** — the name of the requested key algorithm. See the KeyFactory section in the Java Security Standard Algorithm Names Specification for information about standard algorithm names.

**返回**

- the new `KeyFactory` object

**异常**

- **NoSuchAlgorithmException** — if no `Provider` supports a `KeyFactorySpi` implementation for the specified algorithm
- **NullPointerException** — if `algorithm` is `null`

**参见**

- Provider
