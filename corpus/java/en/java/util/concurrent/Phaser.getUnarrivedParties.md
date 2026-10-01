---
id: "java-en-function-phaser-getunarrivedparties"
language: "java"
lang: "en"
category: "function"
name: "Phaser.getUnarrivedParties"
signature: "public int getUnarrivedParties()"
title: "Phaser.getUnarrivedParties"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Phaser.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Phaser.getUnarrivedParties

```java
public int getUnarrivedParties()
```

Returns the number of registered parties that have not yet
 arrived at the current phase of this phaser. If this phaser has
 terminated, the returned value is meaningless and arbitrary.

**返回**

- the number of unarrived parties
