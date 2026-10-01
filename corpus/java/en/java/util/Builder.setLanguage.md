---
id: "java-en-function-builder-setlanguage"
language: "java"
lang: "en"
category: "function"
name: "Builder.setLanguage"
signature: "public Builder setLanguage(String language)"
title: "Builder.setLanguage"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Locale.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder.setLanguage

```java
public Builder setLanguage(String language)
```

Sets the language.  If `language` is the empty string or
 null, the language in this `Builder` is removed.  Otherwise,
 the language must be `#def_language well-formed`
 or an exception is thrown.

 

The typical language value is a two or three-letter language
 code as defined in ISO639.

**参数**

- **language** — the language

**返回**

- This builder.

**异常**

- **IllformedLocaleException** — if `language` is ill-formed
