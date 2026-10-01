---
id: "java-en-function-keyfactoryspi-enginegetkeyspec"
language: "java"
lang: "en"
category: "function"
name: "KeyFactorySpi.engineGetKeySpec"
signature: "protected abstract <T extends KeySpec> T engineGetKeySpec(Key key, Class<T> keySpec) throws InvalidKeySpecException"
title: "KeyFactorySpi.engineGetKeySpec"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyFactorySpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeyFactorySpi.engineGetKeySpec

```java
protected abstract <T extends KeySpec> T engineGetKeySpec(Key key, Class<T> keySpec) throws InvalidKeySpecException
```

Returns a specification (key material) of the given key
 object.
 `keySpec` identifies the specification class in which
 the key material should be returned. It could, for example, be
 `DSAPublicKeySpec.class`, to indicate that the
 key material should be returned in an instance of the
 `DSAPublicKeySpec` class.

**参数**

- **the** — type of the key specification to be returned
- **key** — the key.
- **keySpec** — the specification class in which the key material should be returned.

**返回**

- the underlying key specification (key material) in an instance of the requested specification class.

**异常**

- **InvalidKeySpecException** — if the requested key specification is inappropriate for the given key, or the given key cannot be dealt with (e.g., the given key has an unrecognized format).
