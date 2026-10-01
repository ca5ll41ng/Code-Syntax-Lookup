---
id: "en-php-guide-quickhash-examples"
language: "php"
lang: "en"
category: "guide"
name: "quickhash.examples"
title: "Examples"
module: "quickhash"
source_url: "https://www.php.net/manual/en/quickhash.examples.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Examples

**Quickhash Example**

```php


<?php
$set = new QuickHashIntSet( 1024, QuickHashIntSet::CHECK_FOR_DUPES );
$set->add( 1 );
$set->add( 3 );

var_dump( $set->exists( 3 ) );
var_dump( $set->exists( 4 ) );

$set->saveToFile( "/tmp/test-set.set" );

$newSet = QuickHashIntSet::loadFromFile(
    "/tmp/test-set.set"
);

var_dump( $newSet->exists( 3 ) );
var_dump( $newSet->exists( 4 ) );
?>

  
```

The above example will output something similar to:

```text


bool(true)
bool(false)
bool(true)
bool(false)

  
```

**Quickhash ArrayAccess Example**

```php


<?php
$hash = new QuickHashIntHash( 64 );

// Adding and updating hash entries.
$hash[3] = 145926;
$hash[3] = 1415926;
$hash[2] = 72;

// Checking if keys exist
var_dump( isset( $hash[3] ) );

// Removing hash entries
unset( $hash[2] );

// Retrieving the value stored for a hash
echo $hash[3], "\n";
?>

  
```

The above example will output something similar to:

```text


bool(true)
1415926

  
```

**Quickhash Iterator Example**

```php


<?php
$hash = new QuickHashIntHash( 64 );

// Adding hash entries.
$hash[1] = 145926;
$hash[2] = 1415926;
$hash[3] = 72;
$hash[4] = 712314;
$hash[5] = -4234;

foreach( $hash as $key => $value )
{
    echo $key, ' => ', $value, "\n";
}
?>

  
```

The above example will output something similar to:

```text


5 => -4234
4 => 712314
1 => 145926
2 => 1415926
3 => 72

  
```

**Quickhash String Values Example**

```php


<?php
$hash = new QuickHashIntStringHash( 64 );

// Adding hash entries.
$hash[1] = "one million four hundred fifteen thousand nine hundred twenty six";
$hash->add( 2, "one more" );

foreach( $hash as $key => $value )
{
    echo $key, ' => ', $value, "\n";
}
?>

  
```

The above example will output something similar to:

```text


1 => one million four hundred fifteen thousand nine hundred twenty six
2 => one more

  
```
