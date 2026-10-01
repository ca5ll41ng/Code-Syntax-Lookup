---
id: "java-en-function-classdesc-displayname"
language: "java"
lang: "en"
category: "function"
name: "ClassDesc.displayName"
signature: "String displayName()"
title: "ClassDesc.displayName"
directive: "method"
module: "java.base/java.lang.constant"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/constant/ClassDesc.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ClassDesc.displayName

```java
String displayName()
```

{@return a human-readable name for this `ClassDesc`}
 For primitive types, this method returns the simple name (such as `int`).
 For class or interface types, this method returns the unqualified class name.
 For array types, this method returns the human-readable name of the component
 type suffixed with the appropriate number of `[]` pairs.
