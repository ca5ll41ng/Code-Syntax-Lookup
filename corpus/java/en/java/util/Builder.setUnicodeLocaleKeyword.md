---
id: "java-en-function-builder-setunicodelocalekeyword"
language: "java"
lang: "en"
category: "function"
name: "Builder.setUnicodeLocaleKeyword"
signature: "public Builder setUnicodeLocaleKeyword(String key, String type)"
title: "Builder.setUnicodeLocaleKeyword"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Locale.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder.setUnicodeLocaleKeyword

```java
public Builder setUnicodeLocaleKeyword(String key, String type)
```

Sets the Unicode locale keyword type for the given key.  If the type
 is null, the Unicode keyword is removed.  Otherwise, the key must be
 non-null and both key and type must be `#def_locale_extension well-formed` or an exception is thrown.

 

Keys and types are converted to lower case.

 

**Note**:Setting the 'u' extension via `setExtension`
 replaces all Unicode locale keywords with those defined in the
 extension.

**参数**

- **key** — the Unicode locale key
- **type** — the Unicode locale type

**返回**

- This builder.

**异常**

- **IllformedLocaleException** — if `key` or `type` is ill-formed
- **NullPointerException** — if `key` is null

**参见**

- #setExtension(char, String)
