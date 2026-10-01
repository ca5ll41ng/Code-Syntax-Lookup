---
id: "java-en-function-configuration-getinstance"
language: "java"
lang: "en"
category: "function"
name: "Configuration.getInstance"
signature: "public static Configuration getInstance(String type, Configuration.Parameters params) throws NoSuchAlgorithmException"
title: "Configuration.getInstance"
directive: "method"
module: "java.base/javax.security.auth.login"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/security/auth/login/Configuration.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Configuration.getInstance

```java
public static Configuration getInstance(String type, Configuration.Parameters params) throws NoSuchAlgorithmException
```

Returns a Configuration object of the specified type.

 

 This method traverses the list of registered security providers,
 starting with the most preferred Provider.
 A new Configuration object encapsulating the
 ConfigurationSpi implementation from the first
 Provider that supports the specified type is returned.

 

 Note that the list of registered providers may be retrieved via
 the `getProviders` method.

 The JDK Reference Implementation additionally uses the
 `jdk.security.provider.preferred`
 `getProperty(String) Security` property to determine
 the preferred provider order for the specified algorithm. This
 may be different from the order of providers returned by
 `getProviders`.

**参数**

- **type** — the specified Configuration type.  See the Configuration section in the Java Security Standard Algorithm Names Specification for a list of standard Configuration types.
- **params** — parameters for the Configuration, which may be null.

**返回**

- the new `Configuration` object

**异常**

- **IllegalArgumentException** — if the specified parameters are not understood by the `ConfigurationSpi` implementation from the selected `Provider`
- **NoSuchAlgorithmException** — if no `Provider` supports a `ConfigurationSpi` implementation for the specified type
- **NullPointerException** — if `type` is `null`

**参见**

- Provider

> *Since 1.6*
