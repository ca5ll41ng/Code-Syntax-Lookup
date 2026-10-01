---
id: "java-en-function-lazyconstant-hashcode"
language: "java"
lang: "en"
category: "function"
name: "LazyConstant.hashCode"
signature: "int hashCode()"
title: "LazyConstant.hashCode"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/LazyConstant.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LazyConstant.hashCode

```java
int hashCode()
```

{@return the `identityHashCode(Object) identity hash code` for
          this lazy constant}

 This method never triggers initialization of this lazy constant.
