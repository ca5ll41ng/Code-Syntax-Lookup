---
id: "java-en-function-java-util-concurrent-threadlocalrandom"
language: "java"
lang: "en"
category: "function"
name: "java.util.concurrent.ThreadLocalRandom"
title: "ThreadLocalRandom"
directive: "type"
module: "java.base/java.util.concurrent"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ThreadLocalRandom.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# ThreadLocalRandom

A random number generator (with period 264) isolated
 to the current thread.  Like the global `java.util.Random`
 generator used by the `java.lang.Math` class,
 a `ThreadLocalRandom` is initialized
 with an internally generated seed that may not otherwise be
 modified. When applicable, use of `ThreadLocalRandom` rather
 than shared `Random` objects in concurrent programs will
 typically encounter much less overhead and contention.  Use of
 `ThreadLocalRandom` is particularly appropriate when multiple
 tasks (for example, each a `ForkJoinTask`) use random numbers
 in parallel in thread pools.

 

Usages of this class should typically be of the form:
 `ThreadLocalRandom.current().nextX(...)` (where
 `X` is `Int`, `Long`, etc).
 When all usages are of this form, it is never possible to
 accidentally share a `ThreadLocalRandom` across multiple threads.

 

This class also provides additional commonly used bounded random
 generation methods.

 

Instances of `ThreadLocalRandom` are not cryptographically
 secure.  Consider instead using `java.security.SecureRandom`
 in security-sensitive applications. Additionally,
 default-constructed instances do not use a cryptographically random
 seed unless the `getProperty system property`
 `java.util.secureRandomSeed` is set to `true`.

> *Since 1.7*
