---
id: "java-en-function-datetimeformatter-withresolverfields"
language: "java"
lang: "en"
category: "function"
name: "DateTimeFormatter.withResolverFields"
signature: "public DateTimeFormatter withResolverFields(TemporalField... resolverFields)"
title: "DateTimeFormatter.withResolverFields"
directive: "method"
module: "java.base/java.time.format"
source_url: "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/time/format/DateTimeFormatter.html"
license: "GPL-2.0-with-classpath-exception"
updated: "2026-10-01"
---

# DateTimeFormatter.withResolverFields

```java
public DateTimeFormatter withResolverFields(TemporalField... resolverFields)
```

Returns a copy of this formatter with a new set of resolver fields.
 

 This returns a formatter with similar state to this formatter but with
 the resolver fields set. By default, a formatter has no resolver fields.
 

 Changing the resolver fields only has an effect during parsing.
 Parsing a text string occurs in two phases.
 Phase 1 is a basic text parse according to the fields added to the builder.
 Phase 2 resolves the parsed field-value pairs into date and/or time objects.
 The resolver fields are used to filter the field-value pairs between phase 1 and 2.
 

 This can be used to select between two or more ways that a date or time might
 be resolved. For example, if the formatter consists of year, month, day-of-month
 and day-of-year, then there are two ways to resolve a date.
 Calling this method with the arguments `YEAR YEAR` and
 `DAY_OF_YEAR DAY_OF_YEAR` will ensure that the date is
 resolved using the year and day-of-year, effectively meaning that the month
 and day-of-month are ignored during the resolving phase.
 

 In a similar manner, this method can be used to ignore secondary fields that
 would otherwise be cross-checked. For example, if the formatter consists of year,
 month, day-of-month and day-of-week, then there is only one way to resolve a
 date, but the parsed value for day-of-week will be cross-checked against the
 resolved date. Calling this method with the arguments `YEAR YEAR`,
 `MONTH_OF_YEAR MONTH_OF_YEAR` and
 `DAY_OF_MONTH DAY_OF_MONTH` will ensure that the date is
 resolved correctly, but without any cross-check for the day-of-week.
 

 In implementation terms, this method behaves as follows. The result of the
 parsing phase can be considered to be a map of field to value. The behavior
 of this method is to cause that map to be filtered between phase 1 and 2,
 removing all fields other than those specified as arguments to this method.
 

 This instance is immutable and unaffected by this method call.

**参数**

- **resolverFields** — the new set of resolver fields, null if no fields

**返回**

- a formatter based on this formatter with the requested resolver style, not null
