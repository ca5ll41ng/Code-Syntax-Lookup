---
id: "en-php-guide-functional-parallel"
language: "php"
lang: "en"
category: "guide"
name: "functional.parallel"
title: "Functional API"
module: "parallel"
source_url: "https://www.php.net/manual/en/functional.parallel.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Functional API

The `parallel\Runtime` API provides a great degree of control to the power PHP programmer, and those intimately familiar with writing applications that use parallel concurrency.    The functional API provides less control in exchange for the ability to make decisions for the programmer: 
- all executing runtimes are bootstrapped identically
- scheduling is determined by the API, not the programmer

 `parallel\run()` provides the guarantee that the task will begin to execute in parallel as soon as allowed by hardware and operating system constraints, without needlessly creating runtimes. For most applications the functional API should be preferred.
