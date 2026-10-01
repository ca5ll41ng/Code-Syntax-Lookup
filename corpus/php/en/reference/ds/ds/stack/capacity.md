---
id: "en-php-function-ds-stack-capacity"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Stack::capacity"
title: "Returns the current capacity"
signature: "public int Ds\\Stack::capacity()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-stack.capacity.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the current capacity

## Description

```php
public int Ds\Stack::capacity()
```

Returns the current capacity.

## Parameters

This function has no parameters.

## Return Values

The current capacity.

 <refsect1 role="examples"> <title>Examples</title> <example> <title><function>Ds\Stack::capacity</function> example</title> <programlisting role="php"> <![CDATA[ <?php $stack = new \Ds\Stack(); var_dump($stack->capacity()); $stack->push(...range(1, 50)); var_dump($stack->capacity()); $stack[] = "a"; var_dump($stack->capacity()); ?> ]]> </programlisting> <simpara xmlns="http://docbook.org/ns/docbook">The above example will output something similar to:</simpara> <screen> <![CDATA[ int(10) int(50) int(75) ]]> </screen> </example> </refsect1>
