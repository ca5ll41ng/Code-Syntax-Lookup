---
id: "en-php-function-ds-priorityqueue-construct"
language: "php"
lang: "en"
category: "function"
name: "Ds\\PriorityQueue::__construct"
title: "Creates a new instance"
signature: "public Ds\\PriorityQueue::__construct()"
module: "ds"
source_url: "https://www.php.net/manual/en/ds-priorityqueue.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a new instance

## Description

```php
public Ds\PriorityQueue::__construct()
```

Creates a new instance.

 <refsect1 role="parameters"> <title>Parameters</title> <variablelist> <varlistentry> <term><parameter></parameter></term> <listitem> <para> </para> </listitem> </varlistentry> </variablelist> </refsect1> 

 Return values commented out, as constructors generally don't return a value. Uncomment this if you do need a return values section (for example, because there's also a procedural version of the method). <refsect1 role="returnvalues"> <title>Return Values</title> <para> </para> </refsect1> 

## Examples

**`Ds\PriorityQueue::__construct()` example**

```php


<?php
$queue = new \Ds\PriorityQueue();
var_dump($queue);
?>

   
```

The above example will output something similar to:

```text


object(Ds\PriorityQueue)#1 (0) {
}

   
```
