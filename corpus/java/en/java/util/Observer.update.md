---
id: "java-en-function-observer-update"
language: "java"
lang: "en"
category: "function"
name: "Observer.update"
signature: "void update(Observable o, Object arg)"
title: "Observer.update"
directive: "method"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Observer.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Observer.update

```java
void update(Observable o, Object arg)
```

This method is called whenever the observed object is changed. An
 application calls an `Observable` object's
 `notifyObservers` method to have all the object's
 observers notified of the change.

**参数**

- **o** — the observable object.
- **arg** — an argument passed to the `notifyObservers` method.
