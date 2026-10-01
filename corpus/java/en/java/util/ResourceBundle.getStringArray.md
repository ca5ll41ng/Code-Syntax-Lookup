---
id: "java-en-function-resourcebundle-getstringarray"
language: "java"
lang: "en"
category: "function"
name: "ResourceBundle.getStringArray"
signature: "public final String[] getStringArray(String key)"
title: "ResourceBundle.getStringArray"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ResourceBundle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResourceBundle.getStringArray

```java
public final String[] getStringArray(String key)
```

Gets a string array for the given key from this resource bundle or one of its parents.
 Calling this method is equivalent to calling
 {@snippet lang=java :
     // @link substring="getObject" target="#getObject(java.lang.String)" :
     (String[]) getObject(key);
 }

**参数**

- **key** — the key for the desired string array

**返回**

- the string array for the given key

**异常**

- **NullPointerException** — if `key` is `null`
- **MissingResourceException** — if no object for the given key can be found
- **ClassCastException** — if the object found for the given key is not a string array
