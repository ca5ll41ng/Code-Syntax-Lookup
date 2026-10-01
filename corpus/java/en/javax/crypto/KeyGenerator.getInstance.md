---
id: "java-en-function-keygenerator-getinstance"
language: "java"
lang: "en"
category: "function"
name: "KeyGenerator.getInstance"
signature: "public static final KeyGenerator getInstance(String algorithm) throws NoSuchAlgorithmException"
title: "KeyGenerator.getInstance"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/KeyGenerator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeyGenerator.getInstance

```java
public static final KeyGenerator getInstance(String algorithm) throws NoSuchAlgorithmException
```

Returns a `KeyGenerator` object that generates secret keys
 for the specified algorithm.

 

 This method traverses the list of registered security providers,
 starting with the most preferred provider.
 A new `KeyGenerator` object encapsulating the
 `KeyGeneratorSpi` implementation from the first
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

- **algorithm** — the standard name of the requested key algorithm. See the KeyGenerator section in the Java Security Standard Algorithm Names Specification for information about standard algorithm names.

**返回**

- the new `KeyGenerator` object

**异常**

- **NoSuchAlgorithmException** — if no `Provider` supports a `KeyGeneratorSpi` implementation for the specified algorithm
- **NullPointerException** — if `algorithm` is `null`

**参见**

- java.security.Provider
