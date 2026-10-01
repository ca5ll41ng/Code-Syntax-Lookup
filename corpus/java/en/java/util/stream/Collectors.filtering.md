---
id: "java-en-function-collectors-filtering"
language: "java"
lang: "en"
category: "function"
name: "Collectors.filtering"
signature: "public static <T, A, R> Collector<T, ?, R> filtering(Predicate<? super T> predicate, Collector<? super T, A, R> downstream)"
title: "Collectors.filtering"
directive: "method"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Collectors.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collectors.filtering

```java
public static <T, A, R> Collector<T, ?, R> filtering(Predicate<? super T> predicate, Collector<? super T, A, R> downstream)
```

Adapts a `Collector` to one accepting elements of the same type
 `T` by applying the predicate to each input element and only
 accumulating if the predicate returns `true`.

 The `filtering()` collectors are most useful when used in a
 multi-level reduction, such as downstream of a `groupingBy` or
 `partitioningBy`.  For example, given a stream of
 `Employee`, to accumulate the employees in each department that have a
 salary above a certain threshold:
 
```
`Map> wellPaidEmployeesByDepartment
   = employees.stream().collect(
     groupingBy(Employee::getDepartment,
                filtering(e -> e.getSalary() > 2000,
                          toSet())));
 `
```

 A filtering collector differs from a stream's `filter()` operation.
 In this example, suppose there are no employees whose salary is above the
 threshold in some department.  Using a filtering collector as shown above
 would result in a mapping from that department to an empty `Set`.
 If a stream `filter()` operation were done instead, there would be
 no mapping for that department at all.

**参数**

- **the** — type of the input elements
- **intermediate** — accumulation type of the downstream collector
- **result** — type of collector
- **predicate** — a predicate to be applied to the input elements
- **downstream** — a collector which will accept values that match the predicate

**返回**

- a collector which applies the predicate to the input elements and provides matching elements to the downstream collector

> *Since 9*
