---
id: "java-en-function-java-util-stream-collectors"
language: "java"
lang: "en"
category: "function"
name: "java.util.stream.Collectors"
title: "Collectors"
directive: "type"
module: "java.base/java.util.stream"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Collectors.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# Collectors

Implementations of `Collector` that implement various useful reduction
 operations, such as accumulating elements into collections, summarizing
 elements according to various criteria, etc.

 

The following are examples of using the predefined collectors to perform
 common mutable reduction tasks:

 
```
`// Accumulate names into a List
 List list = people.stream()
   .map(Person::getName)
   .collect(Collectors.toList());

 // Accumulate names into a TreeSet
 Set set = people.stream()
   .map(Person::getName)
   .collect(Collectors.toCollection(TreeSet::new));

 // Convert elements to strings and concatenate them, separated by commas
 String joined = things.stream()
   .map(Object::toString)
   .collect(Collectors.joining(", "));

 // Compute sum of salaries of employee
 int total = employees.stream()
   .collect(Collectors.summingInt(Employee::getSalary));

 // Group employees by department
 Map> byDept = employees.stream()
   .collect(Collectors.groupingBy(Employee::getDepartment));

 // Compute sum of salaries by department
 Map totalByDept = employees.stream()
   .collect(Collectors.groupingBy(Employee::getDepartment,
                                  Collectors.summingInt(Employee::getSalary)));

 // Partition students into passing and failing
 Map> passingFailing = students.stream()
   .collect(Collectors.partitioningBy(s -> s.getGrade() >= PASS_THRESHOLD));

 `
```

> *Since 1.8*
