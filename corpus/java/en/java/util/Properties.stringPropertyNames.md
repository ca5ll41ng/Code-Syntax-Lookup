---
id: "java-en-function-properties-stringpropertynames"
language: "java"
lang: "en"
category: "function"
name: "Properties.stringPropertyNames"
signature: "public Set<String> stringPropertyNames()"
title: "Properties.stringPropertyNames"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Properties.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Properties.stringPropertyNames

```java
public Set<String> stringPropertyNames()
```

Returns an unmodifiable set of keys from this property list
 where the key and its corresponding value are strings,
 including distinct keys in the default property list if a key
 of the same name has not already been found from the main
 properties list.  Properties whose key or value is not
 of type `String` are omitted.
 

 The returned set is not backed by this `Properties` object.
 Changes to this `Properties` object are not reflected in the
 returned set.

**返回**

- an unmodifiable set of keys in this property list where the key and its corresponding value are strings, including the keys in the default property list.

**参见**

- java.util.Properties#defaults

> *Since 1.6*
