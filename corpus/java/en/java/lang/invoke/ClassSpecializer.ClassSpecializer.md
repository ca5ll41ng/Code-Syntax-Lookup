---
id: "java-en-function-classspecializer-classspecializer"
language: "java"
lang: "en"
category: "function"
name: "ClassSpecializer.ClassSpecializer"
signature: "protected ClassSpecializer(Class<T> topClass, Class<K> keyType, Class<S> metaType, MethodType baseConstructorType, MemberName sdAccessor, String sdFieldName, List<MemberName> transformMethods)"
title: "ClassSpecializer.ClassSpecializer"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/ClassSpecializer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassSpecializer.ClassSpecializer

```java
protected ClassSpecializer(Class<T> topClass, Class<K> keyType, Class<S> metaType, MethodType baseConstructorType, MemberName sdAccessor, String sdFieldName, List<MemberName> transformMethods)
```

Constructor for this class specializer.

**参数**

- **topClass** — type mirror for T
- **keyType** — type mirror for K
- **metaType** — type mirror for S
- **baseConstructorType** — principal constructor type
- **sdAccessor** — the method used to get the speciesData
- **sdFieldName** — the name of the species data field, inject the speciesData object
- **transformMethods** — optional list of transformMethods
