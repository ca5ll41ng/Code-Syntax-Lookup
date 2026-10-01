---
id: "java-en-function-keypairgenerator-getinstance"
language: "java"
lang: "en"
category: "function"
name: "KeyPairGenerator.getInstance"
signature: "public static KeyPairGenerator getInstance(String algorithm) throws NoSuchAlgorithmException"
title: "KeyPairGenerator.getInstance"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyPairGenerator.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeyPairGenerator.getInstance

```java
public static KeyPairGenerator getInstance(String algorithm) throws NoSuchAlgorithmException
```

Returns a `KeyPairGenerator` object that generates public/private
 key pairs for the specified algorithm.

 

 This method traverses the list of registered security Providers,
 starting with the most preferred Provider.
 A new `KeyPairGenerator` object encapsulating the
 `KeyPairGeneratorSpi` implementation from the first
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

- **algorithm** — the standard string name of the algorithm. See the KeyPairGenerator section in the Java Security Standard Algorithm Names Specification for information about standard algorithm names.

**返回**

- the new `KeyPairGenerator` object

**异常**

- **NoSuchAlgorithmException** — if no `Provider` supports a `KeyPairGeneratorSpi` implementation for the specified algorithm
- **NullPointerException** — if `algorithm` is `null`

**参见**

- Provider
