---
id: "java-en-function-builder-setvariant"
language: "java"
lang: "en"
category: "function"
name: "Builder.setVariant"
signature: "public Builder setVariant(String variant)"
title: "Builder.setVariant"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Locale.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder.setVariant

```java
public Builder setVariant(String variant)
```

Sets the variant.  If variant is null or the empty string, the
 variant in this `Builder` is removed.  Otherwise, it
 must consist of one or more `#def_variant well-formed`
 subtags, or an exception is thrown. Duplicate variants are
 accepted and included by the builder.

 

**Note:** This method checks if `variant`
 satisfies the IETF BCP 47 variant subtag's syntax requirements,
 and normalizes the value to lowercase letters.  However,
 the `Locale` class does not impose any syntactic
 restriction on variant, and the variant value in
 `Locale` is case sensitive.  To set such a variant,
 use `of`.

**参数**

- **variant** — the variant

**返回**

- This builder.

**异常**

- **IllformedLocaleException** — if `variant` is ill-formed

**参见**

- Locale#of(String, String, String)
