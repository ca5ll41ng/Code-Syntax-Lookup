---
id: "java-en-function-abstractstringbuilder-append"
language: "java"
lang: "en"
category: "function"
name: "AbstractStringBuilder.append"
signature: "public AbstractStringBuilder append(Object obj)"
title: "AbstractStringBuilder.append"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/AbstractStringBuilder.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# AbstractStringBuilder.append

```java
public AbstractStringBuilder append(Object obj)
```

Appends the string representation of the `Object` argument.
 

 The overall effect is exactly as if the argument were converted
 to a string by the method `valueOf`,
 and the characters of that string were then
 `append(String) appended` to this character sequence.

**参数**

- **obj** — an `Object`.

**返回**

- a reference to this object.
