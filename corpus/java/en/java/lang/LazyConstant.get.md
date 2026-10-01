---
id: "java-en-function-lazyconstant-get"
language: "java"
lang: "en"
category: "function"
name: "LazyConstant.get"
signature: "T get()"
title: "LazyConstant.get"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/LazyConstant.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LazyConstant.get

```java
T get()
```

{@return the initialized content of this constant, computing it if necessary}
 

  If this constant is not initialized, first computes and initializes it
  using the computing function.
 

 After this method returns successfully, the constant is guaranteed to be
 initialized.
 

 If an unchecked exception is thrown when evaluating the computing function or if
 the computing function returns `null`, this lazy constant is not initialized
 but transitions to an error state whereafter a `NoSuchElementException`
 is thrown as described in the `#exception-handling Exception handling`
 section.

**异常**

- **NoSuchElementException** — if this lazy constant is in an error state
