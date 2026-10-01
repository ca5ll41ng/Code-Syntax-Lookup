---
id: "java-en-function-java-util-intsummarystatistics"
language: "java"
lang: "en"
category: "function"
name: "java.util.IntSummaryStatistics"
title: "IntSummaryStatistics"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/IntSummaryStatistics.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# IntSummaryStatistics

A state object for collecting statistics such as count, min, max, sum, and
 average.

 

This class is designed to work with (though does not require)
 `java.util.stream streams`. For example, you can compute
 summary statistics on a stream of ints with:
 
```
 `IntSummaryStatistics stats = intStream.collect(IntSummaryStatistics::new,
                                                IntSummaryStatistics::accept,
                                                IntSummaryStatistics::combine);
 `
```

 

`IntSummaryStatistics` can be used as a
 `collect(Collector) reduction`
 target for a `java.util.stream.Stream stream`. For example:

 
```
 `IntSummaryStatistics stats = people.stream()
                                    .collect(Collectors.summarizingInt(Person::getDependents));
`
```

 This computes, in a single pass, the count of people, as well as the minimum,
 maximum, sum, and average of their number of dependents.

 `summarizingInt(java.util.function.ToIntFunction)
 Collectors.summarizingInt` on a parallel stream, because the parallel
 implementation of `collect Stream.collect`
 provides the necessary partitioning, isolation, and merging of results for
 safe and efficient parallel execution.

 

This implementation does not check for overflow of the count or the sum.

> *Since 1.8*
