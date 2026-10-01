---
id: "java-en-function-keymanagerfactory-getinstance"
language: "java"
lang: "en"
category: "function"
name: "KeyManagerFactory.getInstance"
signature: "public static final KeyManagerFactory getInstance(String algorithm) throws NoSuchAlgorithmException"
title: "KeyManagerFactory.getInstance"
directive: "method"
module: "java.base/javax.net.ssl"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/net/ssl/KeyManagerFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeyManagerFactory.getInstance

```java
public static final KeyManagerFactory getInstance(String algorithm) throws NoSuchAlgorithmException
```

Returns a KeyManagerFactory object that acts as a
 factory for key managers.

 

 This method traverses the list of registered security Providers,
 starting with the most preferred Provider.
 A new KeyManagerFactory object encapsulating the
 KeyManagerFactorySpi implementation from the first
 Provider that supports the specified algorithm is returned.

 

 Note that the list of registered providers may be retrieved via
 the `getProviders` method.

 The JDK Reference Implementation additionally uses the
 `jdk.security.provider.preferred`
 `getProperty(String) Security` property to determine
 the preferred provider order for the specified algorithm. This
 may be different from the order of providers returned by
 `getProviders`.

**参数**

- **algorithm** — the standard name of the requested algorithm. See the KeyManagerFactory section in the Java Security Standard Algorithm Names Specification for information about standard algorithm names.

**返回**

- the new `KeyManagerFactory` object

**异常**

- **NoSuchAlgorithmException** — if no `Provider` supports a `KeyManagerFactorySpi` implementation for the specified algorithm
- **NullPointerException** — if `algorithm` is `null`

**参见**

- java.security.Provider
