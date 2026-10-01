---
id: "java-en-function-keyfactoryspi-enginetranslatekey"
language: "java"
lang: "en"
category: "function"
name: "KeyFactorySpi.engineTranslateKey"
signature: "protected abstract Key engineTranslateKey(Key key) throws InvalidKeyException"
title: "KeyFactorySpi.engineTranslateKey"
directive: "method"
module: "java.base/java.security"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyFactorySpi.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeyFactorySpi.engineTranslateKey

```java
protected abstract Key engineTranslateKey(Key key) throws InvalidKeyException
```

Translates a key object, whose provider may be unknown or
 potentially untrusted, into a corresponding key object of this key
 factory.

**参数**

- **key** — the key whose provider is unknown or untrusted.

**返回**

- the translated key.

**异常**

- **InvalidKeyException** — if the given key cannot be processed by this key factory.
