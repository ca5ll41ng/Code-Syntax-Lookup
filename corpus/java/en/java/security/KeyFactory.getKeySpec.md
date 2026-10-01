---
id: "java-en-function-keyfactory-getkeyspec"
language: "java"
lang: "en"
category: "function"
name: "KeyFactory.getKeySpec"
signature: "public final <T extends KeySpec> T getKeySpec(Key key, Class<T> keySpec) throws InvalidKeySpecException"
title: "KeyFactory.getKeySpec"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeyFactory.getKeySpec

```java
public final <T extends KeySpec> T getKeySpec(Key key, Class<T> keySpec) throws InvalidKeySpecException
```

Returns a specification (key material) of the given key object.
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

- **InvalidKeySpecException** — if the requested key specification is inappropriate for the given key, or the given key cannot be processed (e.g., the given key has an unrecognized algorithm or format).
