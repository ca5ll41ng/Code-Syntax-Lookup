---
id: "java-en-function-builder-setlanguagetag"
language: "java"
lang: "en"
category: "function"
name: "Builder.setLanguageTag"
signature: "public Builder setLanguageTag(String languageTag)"
title: "Builder.setLanguageTag"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Locale.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder.setLanguageTag

```java
public Builder setLanguageTag(String languageTag)
```

Resets the Builder to match the provided IETF BCP 47
 language tag.  Discards the existing state.  Null and the
 empty string cause the builder to be reset, like `clear`.  Legacy tags (see `forLanguageTag`) are converted to their canonical
 form before being processed.  Otherwise, the language tag
 must be well-formed (see `Locale`) or an exception is
 thrown (unlike `Locale.forLanguageTag`, which
 just discards ill-formed and following portions of the
 tag).

 

Duplicate variants are accepted and included by the builder.
 However, duplicate extension singleton keys and their associated type
 are accepted but ignored. The same behavior applies to duplicate locale
 keys and attributes within a U extension. Note that subsequent subtags after
 the occurrence of a duplicate are not ignored.

 

See `#langtag_conversions converions` for a full list
 of conversions that are performed on `languageTag`.

**参数**

- **languageTag** — the language tag

**返回**

- This builder.

**异常**

- **IllformedLocaleException** — if `languageTag` is ill-formed

**参见**

- Locale#forLanguageTag(String)
