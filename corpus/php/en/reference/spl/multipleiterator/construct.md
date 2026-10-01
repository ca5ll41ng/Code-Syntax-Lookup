---
id: "en-php-function-multipleiterator-construct"
language: "php"
lang: "en"
category: "function"
name: "MultipleIterator::__construct"
title: "Constructs a new MultipleIterator"
signature: "public MultipleIterator::__construct(int $flags = MultipleIterator::MIT_NEED_ALL | MultipleIterator::MIT_KEYS_NUMERIC)"
module: "spl"
source_url: "https://www.php.net/manual/en/multipleiterator.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Constructs a new MultipleIterator

## Description

```php
public MultipleIterator::__construct(int $flags = MultipleIterator::MIT_NEED_ALL | MultipleIterator::MIT_KEYS_NUMERIC)
```

Construct a new MultipleIterator.

## Parameters

- **`$flags`** — The flags to set, according to the Flag Constants. `MultipleIterator::MIT_NEED_ALL` or `MultipleIterator::MIT_NEED_ANY` `MultipleIterator::MIT_KEYS_NUMERIC` or `MultipleIterator::MIT_KEYS_ASSOC` — Defaults to `MultipleIterator::MIT_NEED_ALL`|`MultipleIterator::MIT_KEYS_NUMERIC`.

## Examples

**Iterating a MultipleIterator**

```php


<?php
$people = new ArrayIterator(array('John', 'Jane', 'Jack', 'Judy'));
$roles  = new ArrayIterator(array('Developer', 'Scrum Master', 'Project Owner'));

$team = new MultipleIterator($flags);
$team->attachIterator($people, 'person');
$team->attachIterator($roles, 'role');

foreach ($team as $member) {
    print_r($member);
}
?>

    
```

Output with `$flags = MIT_NEED_ALL|MIT_KEYS_NUMERIC`

```text


Array
(
    [0] => John
    [1] => Developer
)
Array
(
    [0] => Jane
    [1] => Scrum Master
)
Array
(
    [0] => Jack
    [1] => Project Owner
)
    
```

Output with `$flags = MIT_NEED_ANY|MIT_KEYS_NUMERIC`

```text


Array
(
    [0] => John
    [1] => Developer
)
Array
(
    [0] => Jane
    [1] => Scrum Master
)
Array
(
    [0] => Jack
    [1] => Project Owner
)
Array
(
    [0] => Judy
    [1] =>
)
    
```

Output with `$flags = MIT_NEED_ALL|MIT_KEYS_ASSOC`

```text


Array
(
    [person] => John
    [role] => Developer
)
Array
(
    [person] => Jane
    [role] => Scrum Master
)
Array
(
    [person] => Jack
    [role] => Project Owner
)
    
```

Output with `$flags = MIT_NEED_ANY|MIT_KEYS_ASSOC`

```text


Array
(
    [person] => John
    [role] => Developer
)
Array
(
    [person] => Jane
    [role] => Scrum Master
)
Array
(
    [person] => Jack
    [role] => Project Owner
)
Array
(
    [person] => Judy
    [role] =>
)
    
```

## See Also

Flag Constants `MultipleIterator::valid()`
