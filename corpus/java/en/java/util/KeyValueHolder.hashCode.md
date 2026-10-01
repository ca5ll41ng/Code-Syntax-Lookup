---
id: "java-en-function-keyvalueholder-hashcode"
language: "java"
lang: "en"
category: "function"
name: "KeyValueHolder.hashCode"
signature: "public int hashCode()"
title: "KeyValueHolder.hashCode"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/KeyValueHolder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# KeyValueHolder.hashCode

```java
public int hashCode()
```

Returns the hash code value for this map entry. The hash code
 is `key.hashCode() ^ value.hashCode()`. Note that key and
 value are non-null, so hashCode() can be called safely on them.
