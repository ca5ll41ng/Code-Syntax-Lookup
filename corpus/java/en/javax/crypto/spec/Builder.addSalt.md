---
id: "java-en-function-builder-addsalt"
language: "java"
lang: "en"
category: "function"
name: "Builder.addSalt"
signature: "public Builder addSalt(SecretKey salt)"
title: "Builder.addSalt"
directive: "method"
module: "java.base/javax.crypto.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/spec/HKDFParameterSpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder.addSalt

```java
public Builder addSalt(SecretKey salt)
```

Adds a salt to the builder.
 

 Users may call `addSalt` multiple times when the salt value is
 to be assembled piece-meal or if part of the salt is to be supplied
 by a hardware crypto device. The `salts()` method of the
 `Extract` or `ExtractThenExpand` object that is
 subsequently built returns the assembled salt as a list of
 `SecretKey` objects.

**参数**

- **salt** — the salt value

**返回**

- this builder

**异常**

- **NullPointerException** — if the `salt` is null
