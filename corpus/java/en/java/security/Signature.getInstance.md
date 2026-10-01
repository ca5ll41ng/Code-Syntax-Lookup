---
id: "java-en-function-signature-getinstance"
language: "java"
lang: "en"
category: "function"
name: "Signature.getInstance"
signature: "public static Signature getInstance(String algorithm) throws NoSuchAlgorithmException"
title: "Signature.getInstance"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Signature.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Signature.getInstance

```java
public static Signature getInstance(String algorithm) throws NoSuchAlgorithmException
```

Returns a `Signature` object that implements the specified
 signature algorithm.

 

 This method traverses the list of registered security Providers,
 starting with the most preferred Provider.
 A new `Signature` object encapsulating the
 `SignatureSpi` implementation from the first
 provider that supports the specified algorithm is returned.

 

 Note that the list of registered providers may be retrieved via
 the `getProviders` method.

 The JDK Reference Implementation additionally uses the following
 security properties:
 
 
- the `jdk.security.provider.preferred`
 `getProperty(String) Security` property to determine
 the preferred provider order for the specified algorithm. This
 may be different from the order of providers returned by
 `getProviders`.
 
 
- the `jdk.crypto.disabledAlgorithms`
 `getProperty(String) Security` property to determine
 if the specified algorithm is allowed. If the
 {@systemProperty jdk.crypto.disabledAlgorithms} system property
 is set, it supersedes the security property value.
 
 
- the `jdk.crypto.legacyAlgorithms`
 `getProperty(String) Security` property to determine
 if the specified algorithm is considered legacy.
 If so, a warning is emitted at runtime when this method is called
 with the algorithm. This warning is shown once per caller for
 each legacy algorithm. If the algorithm is also disabled,
 the warning will not be shown.
 If the {@systemProperty jdk.crypto.legacyAlgorithms} system property
 is set, it supersedes the security property value.

**参数**

- **algorithm** — the standard name of the algorithm requested. See the Signature section in the Java Security Standard Algorithm Names Specification for information about standard algorithm names.

**返回**

- the new `Signature` object

**异常**

- **NoSuchAlgorithmException** — if no `Provider` supports a `Signature` implementation for the specified algorithm
- **NullPointerException** — if `algorithm` is `null`

**参见**

- Provider
