---
id: "java-en-function-builder-inheritinheritablethreadlocals"
language: "java"
lang: "en"
category: "function"
name: "Builder.inheritInheritableThreadLocals"
signature: "Builder inheritInheritableThreadLocals(boolean inherit)"
title: "Builder.inheritInheritableThreadLocals"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Thread.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Builder.inheritInheritableThreadLocals

```java
Builder inheritInheritableThreadLocals(boolean inherit)
```

Sets whether the thread inherits the initial values of `InheritableThreadLocal inheritable-thread-local` variables from the
 constructing thread. The default is to inherit.

**参数**

- **inherit** — `true` to inherit, `false` to not inherit

**返回**

- this builder
