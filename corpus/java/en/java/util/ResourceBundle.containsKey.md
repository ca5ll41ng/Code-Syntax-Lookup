---
id: "java-en-function-resourcebundle-containskey"
language: "java"
lang: "en"
category: "function"
name: "ResourceBundle.containsKey"
signature: "public boolean containsKey(String key)"
title: "ResourceBundle.containsKey"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ResourceBundle.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ResourceBundle.containsKey

```java
public boolean containsKey(String key)
```

Determines whether the given `key` is contained in
 this `ResourceBundle` or its parent bundles.

**参数**

- **key** — the resource `key`

**返回**

- `true` if the given `key` is contained in this `ResourceBundle` or its parent bundles; `false` otherwise.

**异常**

- **NullPointerException** — if `key` is `null`

> *Since 1.6*
