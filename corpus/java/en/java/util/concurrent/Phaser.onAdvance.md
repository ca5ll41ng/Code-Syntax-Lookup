---
id: "java-en-function-phaser-onadvance"
language: "java"
lang: "en"
category: "function"
name: "Phaser.onAdvance"
signature: "protected boolean onAdvance(int phase, int registeredParties)"
title: "Phaser.onAdvance"
directive: "method"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Phaser.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Phaser.onAdvance

```java
protected boolean onAdvance(int phase, int registeredParties)
```

Overridable method to perform an action upon impending phase
 advance, and to control termination. This method is invoked
 upon arrival of the party advancing this phaser (when all other
 waiting parties are dormant).  If this method returns `true`, this phaser will be set to a final termination state
 upon advance, and subsequent calls to `isTerminated`
 will return true. Any (unchecked) Exception or Error thrown by
 an invocation of this method is propagated to the party
 attempting to advance this phaser, in which case no advance
 occurs.

 

The arguments to this method provide the state of the phaser
 prevailing for the current transition.  The effects of invoking
 arrival, registration, and waiting methods on this phaser from
 within `onAdvance` are unspecified and should not be
 relied on.

 

If this phaser is a member of a tiered set of phasers, then
 `onAdvance` is invoked only for its root phaser on each
 advance.

 

To support the most common use cases, the default
 implementation of this method returns `true` when the
 number of registered parties has become zero as the result of a
 party invoking `arriveAndDeregister`.  You can disable
 this behavior, thus enabling continuation upon future
 registrations, by overriding this method to always return
 `false`:

 
```
 `Phaser phaser = new Phaser() {
   protected boolean onAdvance(int phase, int parties) { return false; `
 };}
```

**参数**

- **phase** — the current phase number on entry to this method, before this phaser is advanced
- **registeredParties** — the current number of registered parties

**返回**

- `true` if this phaser should terminate
