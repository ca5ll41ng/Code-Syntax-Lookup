---
id: "java-en-function-resourcebundle-getobject"
language: "java"
lang: "en"
category: "function"
name: "ResourceBundle.getObject"
signature: "public final Object getObject(String key)"
title: "ResourceBundle.getObject"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ResourceBundle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResourceBundle.getObject

```java
public final Object getObject(String key)
```

Gets an object for the given key from this resource bundle or one of its parents.
 This method first tries to obtain the object from this resource bundle using
 `handleGetObject(java.lang.String) handleGetObject`.
 If not successful, and the parent resource bundle is not null,
 it calls the parent's `getObject` method.
 If still not successful, it throws a MissingResourceException.

**参数**

- **key** — the key for the desired object

**返回**

- the object for the given key

**异常**

- **NullPointerException** — if `key` is `null`
- **MissingResourceException** — if no object for the given key can be found
