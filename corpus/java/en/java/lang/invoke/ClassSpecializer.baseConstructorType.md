---
id: "java-en-function-classspecializer-baseconstructortype"
language: "java"
lang: "en"
category: "function"
name: "ClassSpecializer.baseConstructorType"
signature: "protected MethodType baseConstructorType()"
title: "ClassSpecializer.baseConstructorType"
directive: "method"
module: "java.base/java.lang.invoke"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/invoke/ClassSpecializer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassSpecializer.baseConstructorType

```java
protected MethodType baseConstructorType()
```

Report the leading arguments (if any) required by every species factory.
 Every species factory adds its own field types as additional arguments,
 but these arguments always come first, in every factory method.
