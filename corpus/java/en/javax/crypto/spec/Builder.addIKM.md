---
id: "java-en-function-builder-addikm"
language: "java"
lang: "en"
category: "function"
name: "Builder.addIKM"
signature: "public Builder addIKM(SecretKey ikm)"
title: "Builder.addIKM"
directive: "method"
module: "java.base/javax.crypto.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/spec/HKDFParameterSpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder.addIKM

```java
public Builder addIKM(SecretKey ikm)
```

Adds input keying material (IKM) to the builder.
 

 Users may call `addIKM` multiple times when the input keying
 material value is to be assembled piece-meal or if part of the IKM is
 to be supplied by a hardware crypto device. The `ikms()`
 method of the `Extract` or `ExtractThenExpand` object
 that is subsequently built returns the assembled input keying
 material as a list of `SecretKey` objects.

**参数**

- **ikm** — the input keying material (IKM) value

**返回**

- this builder

**异常**

- **NullPointerException** — if the `ikm` argument is null
