---
id: "java-en-function-phaser-arrive"
language: "java"
lang: "en"
category: "function"
name: "Phaser.arrive"
signature: "public int arrive()"
title: "Phaser.arrive"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Phaser.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Phaser.arrive

```java
public int arrive()
```

Arrives at this phaser, without waiting for others to arrive.

 

It is a usage error for an unregistered party to invoke this
 method.  However, this error may result in an `IllegalStateException` only upon some subsequent operation on
 this phaser, if ever.

**返回**

- the arrival phase number, or a negative value if terminated

**异常**

- **IllegalStateException** — if not terminated and the number of unarrived parties would become negative
