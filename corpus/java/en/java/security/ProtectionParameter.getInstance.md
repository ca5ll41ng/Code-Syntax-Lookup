---
id: "java-en-function-protectionparameter-getinstance"
language: "java"
lang: "en"
category: "function"
name: "ProtectionParameter.getInstance"
signature: "public static KeyStore getInstance(String type) throws KeyStoreException"
title: "ProtectionParameter.getInstance"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyStore.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ProtectionParameter.getInstance

```java
public static KeyStore getInstance(String type) throws KeyStoreException
```

Returns a `KeyStore` object of the specified type.

 

 This method traverses the list of registered security providers,
 starting with the most preferred provider.
 A new `KeyStore` object encapsulating the
 `KeyStoreSpi` implementation from the first
 provider that supports the specified type is returned.

 

 Note that the list of registered providers may be retrieved via
 the `getProviders` method.

 The JDK Reference Implementation additionally uses
 
 
- the `jdk.security.provider.preferred`
 `getProperty(String) Security` property to determine
 the preferred provider order for the specified keystore type. This
 may be different from the order of providers returned by
 `getProviders`.
 
 
- the `jdk.crypto.disabledAlgorithms`
 `getProperty(String) Security` property to determine
 if the specified keystore type is allowed. If the
 {@systemProperty jdk.crypto.disabledAlgorithms} system property
 is set, it supersedes the security property value.
 
 
- the `jdk.crypto.legacyAlgorithms`
 `getProperty(String) Security` property to determine
 if the specified keystore type is considered legacy.
 If so, a warning is emitted at runtime when this method is called
 with the keystore type. This warning is shown once per caller for
 each legacy keystore type. If the keystore type is also disabled,
 the warning will not be shown.
 If the {@systemProperty jdk.crypto.legacyAlgorithms} system property
 is set, it supersedes the security property value.

**参数**

- **type** — the type of keystore. See the KeyStore section in the Java Security Standard Algorithm Names Specification for information about standard keystore types.

**返回**

- a keystore object of the specified type

**异常**

- **KeyStoreException** — if no provider supports a `KeyStoreSpi` implementation for the specified type
- **NullPointerException** — if `type` is `null`

**参见**

- Provider
