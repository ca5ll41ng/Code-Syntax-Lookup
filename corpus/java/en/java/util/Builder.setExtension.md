---
id: "java-en-function-builder-setextension"
language: "java"
lang: "en"
category: "function"
name: "Builder.setExtension"
signature: "public Builder setExtension(char key, String value)"
title: "Builder.setExtension"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Locale.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder.setExtension

```java
public Builder setExtension(char key, String value)
```

Sets the extension for the given key. If the value is null or the
 empty string, the extension is removed.  Otherwise, the extension
 must be `#def_extensions well-formed` or an exception
 is thrown.

 

**Note:** The key `UNICODE_LOCALE_EXTENSION
 UNICODE_LOCALE_EXTENSION` ('u') is used for the Unicode locale extension.
 Setting a value for this key replaces any existing Unicode locale key/type
 pairs with those defined in the extension. Duplicate locale attributes
 as well as locale keys and their associated type are accepted but ignored.

 

**Note:** The key `PRIVATE_USE_EXTENSION
 PRIVATE_USE_EXTENSION` ('x') is used for the private use code. To be
 well-formed, the value for this key needs only to have subtags of one to
 eight alphanumeric characters, not two to eight as in the general case.

**参数**

- **key** — the extension key
- **value** — the extension value

**返回**

- This builder.

**异常**

- **IllformedLocaleException** — if `key` is illegal or `value` is ill-formed

**参见**

- #setUnicodeLocaleKeyword(String, String)
