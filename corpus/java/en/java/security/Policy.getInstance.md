---
id: "java-en-function-policy-getinstance"
language: "java"
lang: "en"
category: "function"
name: "Policy.getInstance"
signature: "public static Policy getInstance(String type, Policy.Parameters params) throws NoSuchAlgorithmException"
title: "Policy.getInstance"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Policy.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Policy.getInstance

```java
public static Policy getInstance(String type, Policy.Parameters params) throws NoSuchAlgorithmException
```

Returns a Policy object of the specified type.

 

 This method traverses the list of registered security providers,
 starting with the most preferred provider.
 A new `Policy` object encapsulating the
 `PolicySpi` implementation from the first
 provider that supports the specified type is returned.

 

 Note that the list of registered providers may be retrieved via
 the `getProviders` method.

 The JDK Reference Implementation additionally uses the
 `jdk.security.provider.preferred`
 `getProperty(String) Security` property to determine
 the preferred provider order for the specified algorithm. This
 may be different than the order of providers returned by
 `getProviders`.

**参数**

- **type** — the specified Policy type
- **params** — parameters for the `Policy`, which may be `null`.

**返回**

- the new `Policy` object

**异常**

- **IllegalArgumentException** — if the specified parameters are not understood by the `PolicySpi` implementation from the selected `Provider`
- **NoSuchAlgorithmException** — if no `Provider` supports a `PolicySpi` implementation for the specified type
- **NullPointerException** — if `type` is `null`

**参见**

- Provider

> *Since 1.6*
