---
id: "java-en-function-lazyconstant-equals"
language: "java"
lang: "en"
category: "function"
name: "LazyConstant.equals"
signature: "boolean equals(Object obj)"
title: "LazyConstant.equals"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/LazyConstant.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LazyConstant.equals

```java
boolean equals(Object obj)
```

{@return `true` if this lazy constant is the same instance as
          the provided `obj`, otherwise `false`}
 

 In other words, equals compares the identity of this lazy constant and `obj`
 to determine equality. Hence, two distinct lazy constants with the same content are
 not equal.
 

 This method never triggers initialization of this lazy constant.
