---
id: "java-en-function-resourcebundle-getstring"
language: "java"
lang: "en"
category: "function"
name: "ResourceBundle.getString"
signature: "public final String getString(String key)"
title: "ResourceBundle.getString"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ResourceBundle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResourceBundle.getString

```java
public final String getString(String key)
```

Gets a string for the given key from this resource bundle or one of its parents.
 Calling this method is equivalent to calling
 {@snippet lang=java :
     // @link substring="getObject" target="#getObject(java.lang.String)" :
     (String) getObject(key);
 }

**参数**

- **key** — the key for the desired string

**返回**

- the string for the given key

**异常**

- **NullPointerException** — if `key` is `null`
- **MissingResourceException** — if no object for the given key can be found
- **ClassCastException** — if the object found for the given key is not a string
