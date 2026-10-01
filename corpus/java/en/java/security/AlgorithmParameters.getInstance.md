---
id: "java-en-function-algorithmparameters-getinstance"
language: "java"
lang: "en"
category: "function"
name: "AlgorithmParameters.getInstance"
signature: "public static AlgorithmParameters getInstance(String algorithm) throws NoSuchAlgorithmException"
title: "AlgorithmParameters.getInstance"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/AlgorithmParameters.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AlgorithmParameters.getInstance

```java
public static AlgorithmParameters getInstance(String algorithm) throws NoSuchAlgorithmException
```

Returns a parameter object for the specified algorithm.

 

 This method traverses the list of registered security providers,
 starting with the most preferred provider.
 A new `AlgorithmParameters` object encapsulating the
 `AlgorithmParametersSpi` implementation from the first
 provider that supports the specified algorithm is returned.

 

 Note that the list of registered providers may be retrieved via
 the `getProviders` method.

 

 The returned parameter object must be initialized via a call to
 `init`, using an appropriate parameter specification or
 parameter encoding.

 The JDK Reference Implementation additionally uses the
 `jdk.security.provider.preferred`
 `getProperty(String) Security` property to determine
 the preferred provider order for the specified algorithm. This
 may be different from the order of providers returned by
 `getProviders`.

**参数**

- **algorithm** — the name of the algorithm requested. See the AlgorithmParameters section in the Java Security Standard Algorithm Names Specification for information about standard algorithm names.

**返回**

- the new parameter object

**异常**

- **NoSuchAlgorithmException** — if no `Provider` supports an `AlgorithmParametersSpi` implementation for the specified algorithm
- **NullPointerException** — if `algorithm` is `null`

**参见**

- Provider
