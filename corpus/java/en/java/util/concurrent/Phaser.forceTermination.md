---
id: "java-en-function-phaser-forcetermination"
language: "java"
lang: "en"
category: "function"
name: "Phaser.forceTermination"
signature: "public void forceTermination()"
title: "Phaser.forceTermination"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Phaser.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Phaser.forceTermination

```java
public void forceTermination()
```

Forces this phaser to enter termination state.  Counts of
 registered parties are unaffected.  If this phaser is a member
 of a tiered set of phasers, then all of the phasers in the set
 are terminated.  If this phaser is already terminated, this
 method has no effect.  This method may be useful for
 coordinating recovery after one or more tasks encounter
 unexpected exceptions.
