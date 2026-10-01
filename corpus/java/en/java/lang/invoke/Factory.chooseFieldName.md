---
id: "java-en-function-factory-choosefieldname"
language: "java"
lang: "en"
category: "function"
name: "Factory.chooseFieldName"
signature: "protected String chooseFieldName(Class<?> type, int index)"
title: "Factory.chooseFieldName"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/ClassSpecializer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Factory.chooseFieldName

```java
protected String chooseFieldName(Class<?> type, int index)
```

Field names in concrete species classes adhere to this pattern:
 type + index, where type is a single character (L, I, J, F, D).
 The factory subclass can customize this.
 The name is purely cosmetic, since it applies to a private field.
