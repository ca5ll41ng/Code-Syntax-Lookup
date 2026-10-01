---
id: "java-en-function-dictionary-elements"
language: "java"
lang: "en"
category: "function"
name: "Dictionary.elements"
signature: "public abstract Enumeration<V> elements()"
title: "Dictionary.elements"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Dictionary.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Dictionary.elements

```java
public abstract Enumeration<V> elements()
```

Returns an enumeration of the values in this dictionary. The general
 contract for the `elements` method is that an
 `Enumeration` is returned that will generate all the elements
 contained in entries in this dictionary.

**返回**

- an enumeration of the values in this dictionary.

**参见**

- java.util.Dictionary#keys()
- java.util.Enumeration
