---
id: "java-en-function-thread-clone"
language: "java"
lang: "en"
category: "function"
name: "Thread.clone"
signature: "protected Object clone() throws CloneNotSupportedException"
title: "Thread.clone"
directive: "method"
module: "java.base/java.lang"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Thread.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Thread.clone

```java
protected Object clone() throws CloneNotSupportedException
```

Throws CloneNotSupportedException as a Thread can not be meaningfully
 cloned. Construct a new Thread instead.

**异常**

- **CloneNotSupportedException** — always
