---
id: "java-en-function-lazyconstant-of"
language: "java"
lang: "en"
category: "function"
name: "LazyConstant.of"
signature: "static <T> LazyConstant<T> of(Supplier<? extends T> computingFunction)"
title: "LazyConstant.of"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/LazyConstant.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LazyConstant.of

```java
static <T> LazyConstant<T> of(Supplier<? extends T> computingFunction)
```

{@return a new lazy constant whose content is to be computed later via the
          provided `computingFunction`}
 

 The returned lazy constant strongly references the provided
 `computingFunction` until computation completes (successfully or with
 failure).
 

 By design, the method always returns a new lazy constant even if the provided
 computing function is already an instance of `LazyConstant`. Clients that
 want to elide creation under this condition can write a utility method similar
 to the one in the snippet below and create lazy constants via this method rather
 than calling the built-in factory `of` directly:

 {@snippet lang = java:
 static  LazyConstant ofFlattened(Supplier<? extends T> computingFunction) {
     return (computingFunction instanceof LazyConstant<? extends T> lc)
             ? (LazyConstant) lc // unchecked cast is safe under normal generic usage
             : LazyConstant.of(computingFunction);
     }
 }

            succeeds or throws an unchecked exception), the computing function is no
            longer strongly referenced and becomes eligible for garbage collection.

**参数**

- **computingFunction** — in the form of a `Supplier` to be used to initialize the constant
- **type** — of the constant

**异常**

- **NullPointerException** — if the provided `computingFunction` is `null`
