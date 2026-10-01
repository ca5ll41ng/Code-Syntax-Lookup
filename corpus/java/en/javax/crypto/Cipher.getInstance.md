---
id: "java-en-function-cipher-getinstance"
language: "java"
lang: "en"
category: "function"
name: "Cipher.getInstance"
signature: "public static final Cipher getInstance(String transformation) throws NoSuchAlgorithmException, NoSuchPaddingException"
title: "Cipher.getInstance"
directive: "method"
module: "java.base/javax.crypto"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/Cipher.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Cipher.getInstance

```java
public static final Cipher getInstance(String transformation) throws NoSuchAlgorithmException, NoSuchPaddingException
```

Returns a `Cipher` object that implements the specified
 transformation.

 

 This method traverses the list of registered security providers,
 starting with the most preferred provider.
 A new `Cipher` object encapsulating the
 `CipherSpi` implementation from the first
 provider that supports the specified algorithm is returned.

 

 Note that the list of registered providers may be retrieved via
 the `getProviders` method.

 It is recommended to use a transformation that fully specifies the
 algorithm, mode, and padding. By not doing so, the provider will
 use a default for the mode and padding which may not meet the security
 requirements of your application.

 The JDK Reference Implementation additionally uses the following
 security properties:
 
 
- the `jdk.security.provider.preferred`
 `getProperty(String) Security` property to determine
 the preferred provider order for the specified algorithm. This
 may be different than the order of providers returned by
 `getProviders`.
 See also the Cipher Transformations section of the `security_guide_jdk_providers JDK Providers` document for information
 on the transformation defaults used by JDK providers.
 
 
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

- **transformation** — the name of the transformation, e.g., AES/CBC/PKCS5Padding. See the Cipher section in the Java Security Standard Algorithm Names Specification for information about standard transformation names.

**返回**

- a `Cipher` object that implements the requested transformation

**异常**

- **NoSuchAlgorithmException** — if `transformation` is `null`, empty or in an invalid format; or if a `CipherSpi` implementation is not found or is found but does not support the mode
- **NoSuchPaddingException** — if a `CipherSpi` implementation is found but does not support the padding scheme

**参见**

- java.security.Provider
