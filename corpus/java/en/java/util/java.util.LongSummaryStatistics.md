---
id: "java-en-function-java-util-longsummarystatistics"
language: "java"
lang: "en"
category: "function"
name: "java.util.LongSummaryStatistics"
title: "LongSummaryStatistics"
directive: "type"
module: "java.base/java.util"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/LongSummaryStatistics.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# LongSummaryStatistics

A state object for collecting statistics such as count, min, max, sum, and
 average.

 

This class is designed to work with (though does not require)
 `java.util.stream streams`. For example, you can compute
 summary statistics on a stream of longs with:
 
```
 `LongSummaryStatistics stats = longStream.collect(LongSummaryStatistics::new,
                                                  LongSummaryStatistics::accept,
                                                  LongSummaryStatistics::combine);
 `
```

 

`LongSummaryStatistics` can be used as a
 `collect(Collector) reduction`
 target for a `java.util.stream.Stream stream`. For example:

 
```
 `LongSummaryStatistics stats = people.stream()
                                     .collect(Collectors.summarizingLong(Person::getAge));
`
```

 This computes, in a single pass, the count of people, as well as the minimum,
 maximum, sum, and average of their ages.

 `summarizingLong(java.util.function.ToLongFunction)
 Collectors.summarizingLong` on a parallel stream, because the parallel
 implementation of `collect Stream.collect`
 provides the necessary partitioning, isolation, and merging of results for
 safe and efficient parallel execution.

 

This implementation does not check for overflow of the count or the sum.

> *Since 1.8*
