---
id: "java-en-function-securerandom-getinstance"
language: "java"
lang: "en"
category: "function"
name: "SecureRandom.getInstance"
signature: "public static SecureRandom getInstance(String algorithm) throws NoSuchAlgorithmException"
title: "SecureRandom.getInstance"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/SecureRandom.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# SecureRandom.getInstance

```java
public static SecureRandom getInstance(String algorithm) throws NoSuchAlgorithmException
```

Returns a `SecureRandom` object that implements the specified
 Random Number Generator (RNG) algorithm.

 

 This method traverses the list of registered security Providers,
 starting with the most preferred Provider.
 A new `SecureRandom` object encapsulating the
 `SecureRandomSpi` implementation from the first
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

- **algorithm** — the name of the RNG algorithm. See the `SecureRandom` section in the Java Security Standard Algorithm Names Specification for information about standard RNG algorithm names.

**返回**

- the new `SecureRandom` object

**异常**

- **NoSuchAlgorithmException** — if no `Provider` supports a `SecureRandomSpi` implementation for the specified algorithm
- **NullPointerException** — if `algorithm` is `null`

**参见**

- Provider

> *Since 1.2*
