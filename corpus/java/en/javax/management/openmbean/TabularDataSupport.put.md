---
id: "java-en-function-tabulardatasupport-put"
language: "java"
lang: "en"
category: "function"
name: "TabularDataSupport.put"
signature: "public Object put(Object key, Object value)"
title: "TabularDataSupport.put"
directive: "method"
module: "java.management/javax.management.openmbean"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.management/javax/management/openmbean/TabularDataSupport.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# TabularDataSupport.put

```java
public Object put(Object key, Object value)
```

This method simply calls `put((CompositeData) value)` and
 therefore ignores its key parameter which can be `null`.

**参数**

- **key** — an ignored parameter.
- **value** — the `CompositeData` to put.

**返回**

- the value which is put

**异常**

- **NullPointerException** — if the value is `null`
- **ClassCastException** — if the value is not of the type `CompositeData`
- **InvalidOpenTypeException** — if the value does not conform to this `TabularData` instance's `TabularType` definition
- **KeyAlreadyExistsException** — if the key for the value parameter, calculated according to this `TabularData` instance's `TabularType` definition already maps to an existing value
