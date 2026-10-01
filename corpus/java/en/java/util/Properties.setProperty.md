---
id: "java-en-function-properties-setproperty"
language: "java"
lang: "en"
category: "function"
name: "Properties.setProperty"
signature: "public synchronized Object setProperty(String key, String value)"
title: "Properties.setProperty"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Properties.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Properties.setProperty

```java
public synchronized Object setProperty(String key, String value)
```

Calls the `Hashtable` method `put`. Provided for
 parallelism with the `getProperty` method. Enforces use of
 strings for property keys and values. The value returned is the
 result of the `Hashtable` call to `put`.

**参数**

- **key** — the key to be placed into this property list.
- **value** — the value corresponding to `key`.

**返回**

- the previous value of the specified key in this property list, or `null` if it did not have one.

**参见**

- #getProperty

> *Since 1.2*
