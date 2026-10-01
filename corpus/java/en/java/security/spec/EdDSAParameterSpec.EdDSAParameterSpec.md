---
id: "java-en-function-eddsaparameterspec-eddsaparameterspec"
language: "java"
lang: "en"
category: "function"
name: "EdDSAParameterSpec.EdDSAParameterSpec"
signature: "public EdDSAParameterSpec(boolean prehash)"
title: "EdDSAParameterSpec.EdDSAParameterSpec"
directive: "method"
module: "java.base/java.security.spec"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/spec/EdDSAParameterSpec.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# EdDSAParameterSpec.EdDSAParameterSpec

```java
public EdDSAParameterSpec(boolean prehash)
```

Construct an `EdDSAParameterSpec` by specifying whether the prehash mode
 is used. No context is provided so this constructor specifies a mode
 in which the context is null. Note that this mode may be different
 from the mode in which an empty array is used as the context.

**参数**

- **prehash** — whether the prehash mode is specified.
