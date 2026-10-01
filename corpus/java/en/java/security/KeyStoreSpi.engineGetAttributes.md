---
id: "java-en-function-keystorespi-enginegetattributes"
language: "java"
lang: "en"
category: "function"
name: "KeyStoreSpi.engineGetAttributes"
signature: "public Set<Entry.Attribute> engineGetAttributes(String alias)"
title: "KeyStoreSpi.engineGetAttributes"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyStoreSpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeyStoreSpi.engineGetAttributes

```java
public Set<Entry.Attribute> engineGetAttributes(String alias)
```

Retrieves the attributes associated with the given alias.

 The default implementation returns an empty `Set`.
 `KeyStoreSpi` implementations that support attributes
 should override this method.

**参数**

- **alias** — the alias name

**返回**

- an unmodifiable `Set` of attributes. This set is empty if the given alias does not exist or there are no attributes associated with the alias. This set may also be empty for `PrivateKeyEntry` or `SecretKeyEntry` entries that contain protected attributes. These protected attributes should be populated into the result returned by `engineGetEntry` and can be retrieved by calling the `getAttributes` method.

> *Since 18*
