---
id: "java-en-function-java-util-random-randomgeneratorfactory"
language: "java"
lang: "en"
category: "function"
name: "java.util.random.RandomGeneratorFactory"
title: "RandomGeneratorFactory"
directive: "type"
module: "java.base/java.util.random"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/random/RandomGeneratorFactory.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# RandomGeneratorFactory

This is a factory class for generating multiple random number generators
 of a specific algorithm.
 `RandomGeneratorFactory` also provides
 methods for selecting random number generator algorithms.

 A specific `RandomGeneratorFactory` can be located by using the
 `of` method, where the argument string
 is the name of the algorithm
 required. The method
 `all` produces a non-empty `Stream` of all available
 `RandomGeneratorFactory RandomGeneratorFactorys` that can be searched
 to locate a `RandomGeneratorFactory` suitable to the task.

 There are three methods for constructing a RandomGenerator instance,
 depending on the type of initial seed required.
 `create` is used for long
 seed construction,
 `create` is used for byte[]
 seed construction, and
 `create` is used for random seed
 construction. Example;

 {@snippet :
    RandomGeneratorFactory factory = RandomGeneratorFactory.of("Random");

     for (int i = 0; i < 10; i++) {
         new Thread(() -> {
             RandomGenerator random = factory.create(100L);
             System.out.println(random.nextDouble());
         }).start();
     }
 }

 RandomGeneratorFactory also provides methods describing the attributes (or properties)
 of a generator and can be used to select random number generator
 algorithms.
 These methods are typically used in
 conjunction with `all`. In this example, the code
 locates the `RandomGeneratorFactory` that produces
 `RandomGenerator RandomGenerators`
 with the highest number of state bits.

 {@snippet :
     RandomGeneratorFactory best = RandomGeneratorFactory.all()
         .filter(rgf -> !rgf.name().equals("SecureRandom")) // SecureRandom has MAX_VALUE stateBits.
         .sorted(Comparator.comparingInt(RandomGeneratorFactory::stateBits).reversed())
         .findFirst()
         .orElse(RandomGeneratorFactory.of("Random"));
     System.out.println(best.name() + " in " + best.group() + " was selected");

     RandomGenerator rng = best.create();
     System.out.println(rng.nextLong());
 }

**参数**

- **type** — of created random generator

**参见**

- java.util.random

> *Since 17*
