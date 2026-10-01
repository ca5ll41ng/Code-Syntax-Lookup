---
id: "java-en-function-phaser-tostring"
language: "java"
lang: "en"
category: "function"
name: "Phaser.toString"
signature: "public String toString()"
title: "Phaser.toString"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Phaser.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Phaser.toString

```java
public String toString()
```

Returns a string identifying this phaser, as well as its
 state.  The state, in brackets, includes the String `"phase = "` followed by the phase number, `"parties = "`
 followed by the number of registered parties, and `"arrived = "` followed by the number of arrived parties.

**返回**

- a string identifying this phaser, as well as its state
