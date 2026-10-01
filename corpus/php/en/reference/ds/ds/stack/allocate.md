---
id: "en-php-function-ds-stack-allocate"
language: "php"
lang: "en"
category: "function"
name: "Ds\\Stack::allocate"
title: "Allocates enough memory for a required capacity"
signature: "public void Ds\\Stack::allocate(int $capacity)"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-stack.allocate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Allocates enough memory for a required capacity

## Description

```php
public void Ds\Stack::allocate(int $capacity)
```

Ensures that enough memory is allocated for a required capacity. This removes the need to reallocate the internal buffer as values are added.

## Parameters

- **`$capacity`** — The number of values for which capacity should be allocated.
  > Capacity will stay the same if this value is less than or equal to the current capacity.



## Return Values

No value is returned.

 <refsect1 role="examples"> <title>Examples</title> <example> <title><function>Ds\Stack::allocate</function> example</title> <programlisting role="php"> <![CDATA[ <?php $stack = new \Ds\Stack(); var_dump($stack->capacity()); $stack->allocate(100); var_dump($stack->capacity()); ?> ]]> </programlisting> <simpara xmlns="http://docbook.org/ns/docbook">The above example will output something similar to:</simpara> <screen> <![CDATA[ int(10) int(100) ]]> </screen> </example> </refsect1>
