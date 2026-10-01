---
id: "en-php-guide-operator-overloading"
language: "php"
lang: "en"
category: "guide"
name: "operator.overloading"
title: "Operator Overloading Magic Methods"
module: "operator"
source_url: "https://www.php.net/manual/en/operator.overloading.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Operator Overloading Magic Methods

The operator overloading extension allows you to define how an object reacts to operators. This is done by implementing the following magic methods:

Arithmetic operators: `$a::__add($b)` `$a::__sub($b)` `$a::__mul($b)` `$a::__div($b)` `$a::__mod($b)` `$a::__pow($b)`

Assignment operators: `$a::__assign($b)` `$a::__assign_add($b)` `$a::__assign_sub($b)` `$a::__assign_mul($b)` `$a::__assign_div($b)` `$a::__assign_mod($b)` `$a::__assign_pow($b)` `$a::__assign_bw_and($b)` `$a::__assign_bw_or($b)` `$a::__assign_bw_xor($b)` `$a::__assign_sl($b)` `$a::__assign_sr($b)` `$a::__assign_concat($b)`

Bitwise operators: `$a::__bw_and($b)` `$a::__bw_or($b)` `$a::__bw_xor($b)` `$a::__bw_not()` `$a::__sl($b)` `$a::__sr($b)`

Comparison operators: `$a::__is_equal($b)` `$a::__is_not_equal($b)` `$a::__is_identical($b)` `$a::__is_not_identical($b)` `$a::__is_smaller($b)` `$a::__is_smaller_or_equal($b)` `$a::__is_greater($b)` `$a::__is_greater_or_equal($b)` `$a::__spaceship($b)`

Incrementing and decrementing operators: `$a::__pre_inc()` `$a::__post_inc()` `$a::__pre_dec()` `$a::__post_dec()`

String operators: `$a::__concat($b)`

## Operator Overloading Examples

The following is the class that is used in the testing of the operator overloading extension. It overloads all of the possible operators that can be overloaded for testing.

**Complete class for operator overloading**

```php


<?php
class OperatorOverloading {
    protected mixed $value;

    //region Standard magic methods
    public function __get(string $name)
    {
        return $this->value;
    }

    public function __set(string $name, mixed $value)
    {
        $this->value = $value;
    }

    public function __construct(mixed $init = null)
    {
        $this->value = $init;
    }
    //endregion

    //region Arithmetic Operators
    public function __add(mixed $val): int|float
    {
        return $this->value + $val;
    }

    public function __div(mixed $val): int|float
    {
        return $this->value / $val;
    }

    public function __mod(mixed $val): int
    {
        return $this->value % $val;
    }

    public function __mul(mixed $val): int|float
    {
        return $this->value * $val;
    }

    public function __pow(mixed $val): int|float
    {
        return $this->value ** $val;
    }

    public function __sub(mixed $val): int|float
    {
        return $this->value - $val;
    }
    //endregion

    //region Assignment Operators
    public function __assign(mixed $val): mixed
    {
        return $this->value = $val;
    }

    public function __assign_add(mixed $val): mixed
    {
        return $this->value += $val;
    }

    public function __assign_bw_and(mixed $val): mixed
    {
        return $this->value &= $val;
    }

    public function __assign_bw_or(mixed $val): mixed
    {
        return $this->value |= $val;
    }

    public function __assign_concat(mixed $val): string
    {
        return $this->value .= $val;
    }

    public function __assign_div(mixed $val): mixed
    {
        return $this->value /= $val;
    }

    public function __assign_mod(mixed $val): mixed
    {
        return $this->value %= $val;
    }

    public function __assign_mul(mixed $val): mixed
    {
        return $this->value *= $val;
    }

    public function __assign_pow(mixed $val): mixed
    {
        return $this->value **= $val;
    }

    public function __assign_sl(mixed $val): mixed
    {
        return $this->value <<= $val;
    }

    public function __assign_sr(mixed $val): mixed
    {
        return $this->value >>= $val;
    }

    public function __assign_sub(mixed $val): mixed
    {
        return $this->value -= $val;
    }
    //endregion

    //region Bitwise Operators
    public function __bw_and(mixed $val): int
    {
        return $this->value & $val;
    }

    public function __bw_not(): int|string
    {
        return ~$this->value;
    }

    public function __bw_or(mixed $val): int
    {
        return $this->value | $val;
    }

    public function __bw_xor(mixed $val): int
    {
        return $this->value ^ $val;
    }

    public function __sl(mixed $val): int
    {
        return $this->value << $val;
    }

    public function __sr(mixed $val): int
    {
        return $this->value >> $val;
    }
    //endregion

    //region Comparison Operators
    public function __is_equal(mixed $val): bool
    {
        return $this->value == $val;
    }

    public function __is_greater(mixed $val): bool
    {
        return $this->value > $val;
    }

    public function __is_greater_or_equal(mixed $val): bool
    {
        return $this->value >= $val;
    }

    public function __is_identical(mixed $val): bool
    {
        return $this->value === $val;
    }

    public function __is_not_equal(mixed $val): bool
    {
        return $this->value != $val;
    }

    public function __is_not_identical(mixed $val): bool
    {
        return $this->value !== $val;
    }

    public function __is_smaller(mixed $val): bool
    {
        return $this->value < $val;
    }

    public function __is_smaller_or_equal(mixed $val): bool
    {
        return $this->value <= $val;
    }

    public function __spaceship(mixed $val): int
    {
        return $this->value <=> $val;
    }
    //endregion

    //region Incrementing/Decrementing Operators
    public function __post_dec(): mixed
    {
        return $this->value--;
    }

    public function __post_inc(): mixed
    {
        return $this->value++;
    }

    public function __pre_dec(): mixed
    {
        return --$this->value;
    }

    public function __pre_inc(): mixed
    {
        return ++$this->value;
    }
    //endregion

    //region String Operators
    public function __concat(mixed $val): string
    {
        return $this->value . $val;
    }
    //endregion

}


   
```

Using the above class, you can overload the operators as follows:

```php


<?php
$a = new OperatorOverloading(5);
var_dump($a + 10);
var_dump($a - 10);
$b = new OperatorOverloading("Hello");
var_dump($b . " World");

   
```

The above code will output:

```text


int(15)
int(-5)
string(11) "Hello World"

   
```
