---
id: "java-en-function-locale-getextensionkeys"
language: "java"
lang: "en"
category: "function"
name: "Locale.getExtensionKeys"
signature: "public Set<Character> getExtensionKeys()"
title: "Locale.getExtensionKeys"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Locale.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Locale.getExtensionKeys

```java
public Set<Character> getExtensionKeys()
```

Returns the set of extension keys associated with this locale, or the
 empty set if it has no extensions. The returned set is unmodifiable.
 The keys will all be lower-case.

**返回**

- The set of extension keys, or the empty set if this locale has no extensions.

> *Since 1.7*
